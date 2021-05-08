import * as express from "express";
import * as swagger from "swagger-ui-express";

// Create Express Server
const app = express();

// Setup Express middleware
app.use(express.json());

// Register routes
app.get("/status", (req, res) => {
  return res.json({ date: new Date(), alive: true });
});

// Register API Docs
const swaggerDocs = require("../swagger.json");
app.use("/docs", swagger.serve, swagger.setup(swaggerDocs));

// Start the server
app.listen(5000, () => {
  console.log("🚀 Notive Server on 5000!");
});
