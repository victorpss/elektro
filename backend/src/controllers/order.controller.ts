import { PrismaClient } from "@prisma/client";
import { request, response } from "express";

const prisma = new PrismaClient();

class OrderController {
    public async create{request: Request, response: Response}{
        const {  } = request.body;

        try {
            const newUser = await prisma.order.create({
                data:{
                    
                },
            });
            
            return response.status(201).json({
                message: "Pedido criado com sucesso",
            });
        } catch (error) {
            return response.status(500).json({
                messageError: "Erro interno no servidor",
            });
        }
    }
}


export const orderController = new OrderController();