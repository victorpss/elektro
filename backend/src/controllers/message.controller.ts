import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class MessageController {
    public async create(request: Request, response: Response){
        
        try {
            const { cpf } = request.params;
            const { content, format } = request.body;

            const now = new Date();
            const date = now.toLocaleDateString();
            const hour = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
            const total_characters = content.length;

            const user = await prisma.user.findUnique({
                where: { cpf: Number(cpf) },
            })

            if (!user){
                return response.status(404).json({
                    message: "Usuario nao encontrado"
                });
            }

            const newMessage = await prisma.message.create({
                data:{
                    content,
                    date,
                    hour,
                    total_characters,
                    format,
                    authorCpf: Number(cpf)
                },
            });

            return response.status(201).json({
                MessageEvent: "Mensagem criada com sucesso",
                message: newMessage,
            });

        } catch (error) {
            console.log(error);
            return response.status(500).json({
                messageError: "Erro interno no servidor",
            });
        }
    }

    public async readAll(request: Request, response: Response){
        try {
            const messages = await prisma.message.findMany();

            return response.status(200).json(messages);

        } catch (error) {
            console.log(error);
            return response.status(500).json({
                messageError: "Erro interno no servidor",
            });
        }
    }

    public async readOne(request: Request, response: Response){
        try {
            const { id } = request.body;

            const message = await prisma.message.findUnique({
                where: { id: Number(id) }
            });

            if(!message){
                return response.status(404).json({
                    message: "Mensagem nao encontrada"
                });
            }

            return response.status(200).json(message);

        } catch (error) {
            console.log(error);
            return response.status(500).json({
                messageError: "Erro interno no servidor",
            });
        }
    }

    public async delete(request: Request, response: Response){
        try {
            const { id, authorCpf } = request.body;

            const idExists = await prisma.message.findUnique({
                where: { id: Number(id) }
            })

            const correctMessage = await prisma.message.findUnique({
                where: { 
                    id: Number(id),
                    authorCpf: Number(authorCpf) 
                }
            })

            if(!idExists){
                return response.status(404).json({
                    message: "Mensagem nao encontrada"
                });
            }
            else if (!correctMessage){
                return response.status(401).json({
                    message: "Mensagem nao enviada pelo CPF inserido"
                });
            }

            const deletedMessage = await prisma.message.delete({
                where:{
                    id: Number(id),
                    authorCpf: Number(authorCpf),
                },
            })

            return response.status(200).json({
                message: "Mensagem deletada com sucesso",
                deletedMessage: deletedMessage,
            });

        } catch (error) {
            console.log(error);
            return response.status(500).json({
                messageErro: "Erro interno no servidor",
            })
        }
    }

    public async update(request: Request, response: Response){
        try {
            const { id, newContent } = request.body;
            
            const messageExists = await prisma.message.findUnique({
                where: { id: Number(id) },
            })

            if (!messageExists){
                return response.status(404).json({
                    message: "Mensagem nao encontrada"
                });
            }

            const updatedMessage = await prisma.message.update({
                where: {
                    id: Number(id)
                },
                data: {
                    content: newContent
                },
            })

            return response.status(200).json({
                message: "Mensagem atualizada com sucesso",
                updatedMessage: updatedMessage,
            });
            
        } catch (error) {
            console.log(error);
            return response.status(500).json({
                messageErro: "Erro interno no servidor",
            })
        }
    }
}


export const messageController = new MessageController();