import express from "express";
import logger from "morgan";
import cors from "cors";

import indexRouter from "./router/index.js";
import usersRouter from "./router/users.js";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cors(["http://localhost:3000"]));

app.use("/", indexRouter);
app.use("/users", usersRouter);

export default app;
