const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const jwt = require("jsonwebtoken");
const si = require("systeminformation");
const { getAdminByEmail } = require("./src/models/Admin.model");
const routes = require("./src/routes");
require("dotenv").config();


const GenerateApp = (app) => {
  app.use("/uploads",express.static("/uploads"));
  app.use(async (req, res, next) => {
    const start = Date.now();
    console.log(
      `[${new Date().toISOString()}] Incoming Request: ${req.method} ${
        req.originalUrl
      }`
    );

    res.on("finish", async () => {
      const duration = Date.now() - start;
      try {
        const networkStats = await si.networkStats();
        const sentPackets = networkStats[0]?.tx_packets || 0;
        const receivedPackets = networkStats[0]?.rx_packets || 0;

        console.log(
          `[${new Date().toISOString()}] Outgoing Response: ${
            res.statusCode
          } (${duration}ms) - Sent Packets: ${sentPackets}, Received Packets: ${receivedPackets}`
        );
      } catch (error) {
        console.error("Error fetching network stats:", error.message);
      }
    });

    next();
  });

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

  app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await getAdminByEmail(email);

      if (!user) {
        return res
          .status(404)
          .send({ msg: "No user found with the specified email." });
      }

      if (password === user.password) {
        const token = jwt.sign(
          { userId: user.id, email: user.email, name: user.name },
          process.env.JWT_SECRET,
          { expiresIn: "24h" }
        );
        return res.status(200).send({
          token,
          admin: { userId: user.id, email: user.email, name: user.name },
        });
      }

      return res
        .status(401)
        .json({ msg: "Invalid password. Please try again." });
    } catch (error) {
      console.error("Error during login:", error.message);
      res.status(500).send({ msg: "An internal server error occurred." });
    }
  });

  app.use("/api", routes);
  return app;
};
module.exports = { GenerateApp };
