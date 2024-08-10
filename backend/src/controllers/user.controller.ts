import { PrismaClient } from "@prisma/client";
import { request, response } from "express";

const prisma = new PrismaClient();

class UserController {
    public async create{request: Request, response: Response}{
        const { cpf, name, phone, email, password, photo_path } = request.body;

        try {
            const newUser = await prisma.user.create({
                data:{
                    cpf, 
                    name, 
                    phone, 
                    email, 
                    password, 
                    photo_path,
                },
            });
            
            return response.status(201).json({
                message: "Usuario criado com sucesso",
            });
        } catch (error) {
            return response.status(500).json({
                messageError: "Erro interno no servidor",
            });
        }
    }
}


export const userController = new UserController();