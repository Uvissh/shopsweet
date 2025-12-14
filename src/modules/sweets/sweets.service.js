const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.addSweet = data => prisma.sweet.create({ data });
exports.getAll = () => prisma.sweet.findMany();

exports.purchase = id => prisma.sweet.update({
  where: { id: Number(id) },
  data: { quantity: { decrement: 1 } }
});

exports.restock = (id, amount) => prisma.sweet.update({
  where: { id: Number(id) },
  data: { quantity: { increment: amount } }
});

exports.remove = id => prisma.sweet.delete({
  where: { id: Number(id) }
});