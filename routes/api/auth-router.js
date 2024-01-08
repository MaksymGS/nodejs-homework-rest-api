import express from "express";
import { validateBody, isEmptyBody } from "../../decorators/index.js";
import { isValidId } from "../../middlewares/index.js";
import { userSignupSchema, userSigninSchema } from "../../models/User.js";
import authController from "../../controllers/auth-controller.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  isEmptyBody("body must have fields"),
  validateBody(userSignupSchema),
  authController.signup
);
authRouter.post(
  "/signin",
  isEmptyBody("body must have fields"),
  validateBody(userSigninSchema),
  authController.signin
);

export default authRouter;
