import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { orderController } from "../controllers/order.controller";
import { messageController } from "../controllers/message.controller";

const router = Router();


// users
router.post("/user", userController.create);
router.get("/user", userController.read);
router.put("/user", userController.update);
router.delete("/user", userController.delete);

// orders
router.post("/order/:code", orderController.create);
router.get("/order/:code", orderController.read);
router.put("/order/:code", orderController.update);
router.delete("/order/:code", orderController.delete);

// messages
router.post("/message/:id", messageController.create);
router.get("/message/:id", messageController.read);
router.put("/message/:id", messageController.update);
router.delete("/message/:id", messageController.delete);


export default router;