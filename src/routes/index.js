const express = require("express");
const AdminRouter = require("./Admin.routes");
const ServiceRouter = require("./services.routes");
const BlogRouter = require("./blog.routes");
const ColisRouter = require("./colis.routes")
const router = express.Router();

router.use("/admin", AdminRouter);
router.use("/service", ServiceRouter);
router.use("/blog", BlogRouter);
router.use("/coli",ColisRouter)
module.exports = router;
