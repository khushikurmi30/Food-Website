import express from "express"
import { addToCart,removeFromCart,getCart } from "../controllers/cartController.js";
import authMliddleware from "../middleware/auth.js";
const cartRouter = express.Router();



 cartRouter.post("/add",authMliddleware, addToCart);
 cartRouter.post("/remove",authMliddleware, removeFromCart);
 cartRouter.post("/get",authMliddleware, getCart);

 export default cartRouter;