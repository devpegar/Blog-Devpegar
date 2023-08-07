import express from "express";
import cors from "cors";
import routeAuth from "../routes/auth.js";

class Server {
  constructor() {
    this.app = express();
    this.port = 4000;
    this.authAdmin = "/api/admin";

    this.routes();
  }

  //Middleware
  middleware() {
    this.app.use(cors());

    this.app.use(express.json());
  }

  routes() {
    this.app.use(this.authAdmin, routeAuth);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto ${this.port}`);
    });
  }
}

export default Server;
