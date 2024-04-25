import express from "express";
import routes from "./routes";
import { resolve } from "path";
import cors from "cors";

import "./database";

const corsOptions = {
<<<<<<< HEAD
  origin:"https://interface-code-burguer.vercel.app",
=======
  origin:"https://interface-code-burguer.vercel.app/",
>>>>>>> 939005b7ab7c99adcef245a32b824e280b02d8e2
  credentials: true
}
class App {
  constructor() {
    this.app = express();
    this.app.use(cors(corsOptions))

    this.middleware();
    this.routes();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(
      "/product-file",
      express.static(resolve(__dirname, "..", "uploads"))
    );
    this.app.use(
      "/category-file",
      express.static(resolve(__dirname, "..", "uploads"))
    );
  }

  routes() { 
    this.app.use(routes);
  }
}

export default new App().app;
