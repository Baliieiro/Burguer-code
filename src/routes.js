import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";

import SessionController from "./app/controllers/SessionController";
import ProductController from "./app/controllers/ProductController";

import UserController from "./app/controllers/UserController";

import authMiddleware from "./app/middleware/auth";

const upload = multer(multerConfig);

const routes = new Router();

routes.post("/users", UserController.store);

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.post("/products", upload.single("file"), ProductController.store);
routes.get("/products", ProductController.index);

export default routes;
