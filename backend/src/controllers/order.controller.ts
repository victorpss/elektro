import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

class OrderController {
    public async create(request: Request, response: Response){
        
        try {
            const { cpf } = request.params;
            const { delivery_method, payment_method, products_total, shipping_total } = request.body;
            const subtotal = parseInt(products_total) + parseInt(shipping_total);

            const user = await prisma.user.findUnique({
                where: { cpf: Number(cpf) },
            })

            if (!user){
                return response.status(404).json({
                    message: "Usuario nao encontrado"
                });
            }

            const newOrder = await prisma.order.create({
                data:{
                    delivery_method, 
                    payment_method, 
                    products_total: parseInt(products_total),
                    shipping_total: parseInt(shipping_total), 
                    subtotal,
                    userCpf: Number(cpf)
                },
            });
            
            return response.status(201).json({
                message: "Pedido criado com sucesso",
                order: newOrder,
            });

        } catch (error) {
            console.log(error)
            return response.status(500).json({
                messageError: "Erro interno no servidor",
            });
        }
    }

    public async readAll(request: Request, response: Response){
        try {
            const orders = await prisma.order.findMany();

            return response.status(200).json(orders);

        } catch (error) {
            console.log(error);
            return response.status(500).json({
                messageError: "Erro interno no servidor",
            });
        }
    }

    public async readOne(request: Request, response: Response){
        try {
            const { code } = request.body;

            const order = await prisma.order.findUnique({
                where: { code: Number(code) }
            });

            if(!order){
                return response.status(404).json({
                    message: "Pedido nao encontrado"
                });
            }

            return response.status(200).json(order);

        } catch (error) {
            console.log(error);
            return response.status(500).json({
                messageError: "Erro interno no servidor",
            });
        }
    }

    public async delete(request: Request, response: Response){
        try {
            const { code, userCpf } = request.body;

            const orderExists = await prisma.order.findUnique({
                where: { code: Number(code) }
            })

            const correctOrder = await prisma.order.findUnique({
                where: { 
                    code: Number(code),
                    userCpf: Number(userCpf) 
                }
            })

            if(!orderExists){
                return response.status(404).json({
                    message: "Pedido nao encontrado"
                });
            }
            else if (!correctOrder){
                return response.status(401).json({
                    message: "Codigo de pedido nao bate com CPF"
                });
            }

            const deletedOrder = await prisma.order.delete({
                where:{
                    code: Number(code),
                    userCpf: Number(userCpf),
                },
            })

            return response.status(200).json({
                message: "Pedido deletado com sucesso",
                deletedOrder: deletedOrder,
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
            const { code, newPaymentMethod } = request.body;
            
            const orderExists = await prisma.order.findUnique({
                where: { code: Number(code) },
            })

            if (!orderExists){
                return response.status(404).json({
                    message: "Pedido nao encontrado"
                });
            }

            const updatedOrder = await prisma.order.update({
                where: {
                    code: Number(code)
                },
                data: {
                    payment_method: newPaymentMethod
                },
            })

            return response.status(200).json({
                message: "Forma de entrega atualizada com sucesso",
                updatedOrder: updatedOrder,
            });
            
        } catch (error) {
            console.log(error);
            return response.status(500).json({
                messageErro: "Erro interno no servidor",
            })
        }
    }
}


export const orderController = new OrderController();