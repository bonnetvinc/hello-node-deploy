
import express from "express";
import cors from "cors";
import helmet from "helmet";
// import { itemsRouter } from "./items/items.router";
// import { errorHandler } from "./middleware/error.middleware";
// import { notFoundHandler } from "./middleware/not-found.middleware";


/**
 * App Variables
 */
const PORT = 5000;
const app = express();

app.get('/', (req, res) => {
    res.send('Hey this is my API running 🥳')
})


/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());
// app.use("/api/menu/items", itemsRouter);
// app.use(errorHandler);
// app.use(notFoundHandler);
/**
 * Server Activation
 */

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});



// Export the Express API
module.exports = app;