require("dotenv/config");
const express = require("express");
const bodyParser = require("body-parser");
const corsMiddleware = require("./middlewares/cors.js");
const limiter = require("./middlewares/rateLimiter");
const connectToDatabase = require("./db/dbConnection.js");
const app = express();
const router = express.Router();

const adminRoute = require("./routes/adminRoute.js");
const bikeRoute = require("./routes/bikeRoute.js");
const userRoute = require("./routes/userRoute.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(corsMiddleware);

app.use("/v2/admin", adminRoute);
app.use("/v2/bike", bikeRoute);
app.use("/v2/user", userRoute);

app.use("/", limiter, router);
(async () => {
  try {
    await connectToDatabase();
    const port = process.env.PORT || 4451;
    const server = app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error.message);
  }
})();
