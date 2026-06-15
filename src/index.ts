require("dotenv").config();
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import routes from "./routes";
import cors from "cors";
import { loadSecrets } from "./config/secrets";

(async () => {
  await loadSecrets();

  const host = process.env.API_HOST ?? "localhost";
  const port = process.env.API_PORT ? Number(process.env.API_PORT) : 3000;
  const app = express();

  app.use(morgan("dev"));
  app.use(express.static("public"));

  /* Parse JSON bodies */
  app.use(bodyParser.json());

  app.use(bodyParser.urlencoded({ extended: false }));

  const corsOptions = {
    origin: [`http://${host}:${port}`],
    credentials: true,
    optionsSuccessStatus: 200,
  };
  app.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept,Authorization"
    );
    next();
  });

  app.use(cors(corsOptions));

  app.use("/api", routes);

  app.listen(port, host, () => {
    console.log(`[ ready ] http://${host}:${port}`);
  });
})();
