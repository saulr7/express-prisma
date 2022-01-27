const express = require('express');
const { body, validationResult } = require('express-validator');
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

router.post('/', body('firstName').not().isEmpty().trim()
  .escape(), async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const payload = req.body;

    const employe = await createEmployee(payload);

    return res.json({ ok: true, employe });
  } catch (error) {
    return res.status(500).json({ ok: false });
  }
});

router.put('/:id', body('firstName').not().isEmpty().trim()
  .escape(), async (req, res) => {
  try {
    const { id } = req.params;
    const intId = +id;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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
