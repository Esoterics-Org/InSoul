import express from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import cookieSession from "cookie-session";
import { createServer } from "http";
import { Server } from "socket.io";
import passport from "passport";
import swaggerUI from "swagger-ui-express";
import yaml from "yamljs";

dotenv.config();

import { initializePassport } from "@utils";
import * as Routes from "@routes";
import * as Constants from "@constants";
import * as Utils from "@utils";

initializePassport();

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    credentials: true,
  },
});

// =========================== MIDDLEWARES START ===========================

app
  .use(
    cors({
      origin: ["http://localhost:3000"],
      credentials: true,
    })
  )
  .use(helmet())
  .use(morgan(process.env.NODE_ENV === "development" ? "dev" : "short"))
  .use(cookieParser())
  .use(express.urlencoded({ extended: true }))
  .use(express.json())
  .use(
    cookieSession({
      maxAge: Constants.Auth.COOKIE_MAX_AGE,
      keys: [process.env.SECRET!],
    })
  )
  .use(passport.initialize())
  .use(passport.session());

// =========================== MIDDLEWARES END ===========================

// =========================== DOCS START ===========================

const swaggerDoc = yaml.load(Constants.Docs.DOCS_PATH);

app.use(
  `${Constants.Server.ROOT}/docs`,
  swaggerUI.serve,
  swaggerUI.setup(swaggerDoc, {
    customCss: ".swagger-ui .topbar { display: none }",
    customSiteTitle: "REST API Template",
  })
);

// =========================== DOCS END ===========================

// =========================== SOCKET START ===========================

io.on("connection", Utils.Socket.onConnection);

// =========================== SOCKET END ===========================

// =========================== ROUTES START ===========================

app.use(`${Constants.Server.ROOT}/auth`, Routes.authRouter);
app.use(`${Constants.Server.ROOT}/community`, Routes.communityRouter);

// =========================== ROUTES END ===========================

server.listen(Constants.Server.PORT, () => {
  console.log(`Server Listening to Port ${Constants.Server.PORT}`);
});

export { io };
