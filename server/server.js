import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import DBConnect from "./db/connectDB.js";
import initRoute from "./routes/index.route.js";
dotenv.config();

const PORT = process.env.PORT || 8080;
const app = express();
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

DBConnect();

app.use("/api/v1", initRoute);

app.get("/", (req, res) => {
  return res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
