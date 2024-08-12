import { Router } from "express";
import { userController } from "../controllers/user.controller";
import { orderController } from "../controllers/order.controller";
import { messageController } from "../controllers/message.controller";

const router = Router();


// users
router.post("/user", userController.create);
router.get("/users", userController.readAll);
router.get("/findUser", userController.readOne);
router.delete("/userDeleted", userController.delete);
router.put("/userUpdated", userController.update);

// orders
router.post("/order/:cpf", orderController.create);
router.get("/orders", orderController.readAll);
router.get("/findOrder", orderController.readOne);
router.delete("/orderDeleted", orderController.delete);
router.put("/orderUpdated", orderController.update);

// messages
router.post("/message/:cpf", messageController.create);
router.get("/messages", messageController.readAll);
router.get("/findMessage", messageController.readOne);
router.delete("/messageDeleted", messageController.delete);
router.put("/messageUpdated", messageController.update);


export default router;