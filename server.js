const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const xssClean = require("xss-clean");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const path = require("path");
const jwt = require("jsonwebtoken");
const si = require("systeminformation");
const { getAdminByEmail } = require("./src/models/Admin.model");
const routes = require("./src/routes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(xssClean());
app.use(compression());
app.use(bodyParser.json({ limit: "10kb" }));

// Set up static files serving
const assetsPath = path.join(__dirname, "src", "assets");
app.use(express.static(assetsPath)); // Serve static assets

// Configure CSP for better security
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: [],
    },
  })
);

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Send Express API",
      description: "API documentation for Send Express",
      version: "1.0.0",
    },
  },
  apis: ["./src/documentation/*.documentation.js"],
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Logging middleware
app.use(async (req, res, next) => {
  const start = Date.now();
  console.log(`[${new Date().toISOString()}] Incoming Request: ${req.method} ${req.originalUrl}`);

  res.on("finish", async () => {
    const duration = Date.now() - start;
    const networkStats = await si.networkStats();
    const sentPackets = networkStats[0]?.tx_packets || 0;
    const receivedPackets = networkStats[0]?.rx_packets || 0;

    console.log(
      `[${new Date().toISOString()}] Outgoing Response: ${res.statusCode} (${duration}ms) - Sent Packets: ${sentPackets}, Received Packets: ${receivedPackets}`
    );
  });

  next();
});

// API routes
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await getAdminByEmail(email);

  if (!user) {
    return res.status(404).send({ msg: "No user found with the specified email." });
  }

  if (password === user.password) {
    const token = jwt.sign(
      { userId: user.id, email: user.email, name: user.name },
      process.env.JWT_SECRET || "sendexpresslogisticservices",
      { expiresIn: "24h" }
    );
    return res.status(200).send({
      token,
      admin: { userId: user.id, email: user.email, name: user.name },
    });
  }

  return res.status(401).json({ msg: "Invalid password. Please try again." });
});

app.use("/api", routes);

// Serve React build files
app.get("/", (req, res) => {
  res.sendFile(path.join(assetsPath, "build", "index.html"));
});

app.get("/adminDashboard", (req, res) => {
  res.sendFile(path.join(assetsPath, "buildAdmin", "index.html"));
});

// Catch-all route to serve frontend files for unknown routes
app.get("*", (req, res) => {
  res.sendFile(path.join(assetsPath, "build", "index.html"));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
