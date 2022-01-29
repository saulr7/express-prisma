const express = require('express');
const { body, check } = require('express-validator');
const { validateFields } = require('../middlewares/validateFields');
const {
  getEmployees, createEmployee, updateEmployee, deleteEmployee,
} = require('../services/employeService');

const router = express.Router();

router.get('/', async (_, res) => {
  try {
    const employees = await getEmployees();

    return res.json({ ok: true, employees });
  } catch (error) {
    return res.status(500).json({ ok: false });
  }
});

router.post(
  '/',
  [check('firstName', 'must send firstName').not().isEmpty(),
    validateFields,
  ],
  async (req, res) => {
    try {
      const payload = req.body;

      const employe = await createEmployee(payload);

      return res.json({ ok: true, employe });
    } catch (error) {
      return res.status(500).json({ ok: false });
    }
  },
);

router.put('/:id', body('firstName').not().isEmpty().trim()
  .escape(), validateFields, async (req, res) => {
  try {
    const { id } = req.params;
    const intId = +id;

    const payload = req.body;

    const employe = await updateEmployee(intId, payload);

    return res.json({ ok: true, employe });
  } catch (error) {
    return res.status(500).json({ ok: false });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const intId = +id;

    const employe = await deleteEmployee(intId);

    return res.json({ ok: true, employe });
  } catch (error) {
    return res.status(500).json({ ok: false });
  }
});

module.exports = router;
