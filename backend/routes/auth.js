import { Router } from "express";
import { body } from "express-validator";

const router = Router();

router.post("/login");
router.get("/", (req, res) => {
  res.send({ Hola: "Mundo" });
});

export default router;
