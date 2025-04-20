import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

const app = express();

const corsOptions = {
  origin: "https://career-connect-stm.vercel.app",
  credentials: true,
};

app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // <-- handles preflight (important!)

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
