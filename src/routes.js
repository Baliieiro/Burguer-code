import { Router } from "express";
import { v4 } from "uuid";

import User from "./app/models/User";

const routes = new Router();

routes.get("/", async (req, res) => {
  const user = await User.create({
    id: v4(),
    name: "Daniel",
    email: "daniel@gmail.com",
    password_hash: "23asb234",
  });

  return res.json(user);
});

export default routes;
