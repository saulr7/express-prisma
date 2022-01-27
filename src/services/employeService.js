const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const getEmployees = () => prisma.employe.findMany({ take: 10 });

const createEmployee = (newEmployee) => prisma.employe.create({ data: newEmployee });

const updateEmployee = (id, newEmployee) => prisma.employe.update({
  where: { id },
  data: newEmployee,
});

const deleteEmployee = (id) => prisma.employe.delete({ where: { id } });

module.exports = {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
