import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class UserController {
    public async create(request: Request, response: Response){
        
        try {
            const { cpf, name, phone, email, password, photo_path } = request.body;
            
            const cpfExists = await prisma.user.findUnique({
                where: { cpf: Number(cpf) },
            })

            if (cpfExists){
                return response.status(401).json({
                    message: "CPF em uso"
                });
            }

            const emailExists = await prisma.user.findUnique({
                where: { email },
            })

            if (emailExists){
                return response.status(401).json({
                    message: "Email em uso"
                });
            }

            const newUser = await prisma.user.create({
                data:{
                    cpf: parseInt(cpf), 
                    name, 
                    phone, 
                    email, 
                    password, 
                    photo_path,
                },
                select:{ /* para esconder a senha */
                    cpf: true,
                    name: true,
                    phone: true,
                    email: true,
                    photo_path: true,
                }
            });
            
            return response.status(201).json({
                message: "Usuario criado com sucesso",
                user: newUser,
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
            const users = await prisma.user.findMany({
                select: {
                    cpf: true,
                    name: true,
                    phone: true,
                    email: true,
                    photo_path: true,
                }
            });

            return response.status(200).json(users);

        } catch (error) {
            console.log(error);
            return response.status(500).json({
                messageError: "Erro interno no servidor",
            });
        }
    }

    public async readOne(request: Request, response: Response){
        try {
            const { cpf } = request.body;

            const user = await prisma.user.findUnique({
                where: { cpf: Number(cpf) },
                select: {
                    cpf: true,
                    name: true,
                    phone: true,
                    email: true,
                    photo_path: true,
                }
            });

            if(!user){
                return response.status(404).json({
                    message: "Usuario nao encontrado"
                });
            }

            return response.status(200).json(user);

        } catch (error) {
            console.log(error);
            return response.status(500).json({
                messageError: "Erro interno no servidor",
            });
        }
    }

    public async delete(request: Request, response: Response){
        try {
            const { cpf, password } = request.body;

            const cpfExists = await prisma.user.findUnique({
                where: { cpf: Number(cpf) },
            })

            const correctPassword = await prisma.user.findUnique({
                where: { 
                    cpf: Number(cpf),
                    password,
                },
            })

            if (!cpfExists){
                return response.status(401).json({
                    message: "CPF nao cadastrado"
                });
            }
            else if (!correctPassword){
                return response.status(401).json({
                    message: "Senha incorreta"
                });
            }

            const deletedUser = await prisma.user.delete({
                where:{
                    cpf: Number(cpf),
                    password,
                },
            })

            return response.status(200).json({
                message: "Usuario deletado com sucesso",
                deletedUser: deletedUser,
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
            const { cpf, oldPassword, newPassword } = request.body;
            
            const cpfExists = await prisma.user.findUnique({
                where: { cpf: Number(cpf) },
            })

            const correctOldPassword = await prisma.user.findUnique({
                where: { 
                    cpf: Number(cpf),
                    password: oldPassword,
                },
            })

            if (!cpfExists){
                return response.status(401).json({
                    message: "CPF nao cadastrado"
                });
            }
            else if (!correctOldPassword){
                return response.status(400).json({
                    message: "Senha antiga incorreta"
                });
            }

            const updatedUser = await prisma.user.update({
                where: {
                    cpf: Number(cpf)
                },
                data: {
                    password: newPassword
                },
            })

            return response.status(200).json({
                message: "Usuario atualizado com sucesso",
                updatedUser: updatedUser,
            });
            
        } catch (error) {
            console.log(error);
            return response.status(500).json({
                messageErro: "Erro interno no servidor",
            })
        }
    }
}


export const userController = new UserController();