import { PrismaClient } from "@prisma/client";
import { request, response } from "express";

const prisma = new PrismaClient();

class MessageController {
    public async create{request: Request, response: Response}{
        const { content } = request.body;

        try {
            const newMessage = await prisma.message.create({
                data:{
                    content,
                },
            });
            
            return response.status(201).json({
                message: "Mensagem criada com sucesso",
            });
        } catch (error) {
            return response.status(500).json({
                messageError: "Erro interno no servidor",
            });
        }
    }
}


export const messageController = new MessageController();