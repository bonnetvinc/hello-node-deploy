// Add Express
const express = require("express");
import cors from "cors";
import helmet from "helmet";
import { itemsRouter } from "./items/items.router";
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

// Initialize Express
const app = express();

// Create GET request
app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use("/api/menu/items", itemsRouter);
app.use(errorHandler);
app.use(notFoundHandler);

// Initialize server
app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;
