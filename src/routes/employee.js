'use strict';

const express = require('express');
const router = express.Router();
const { Employee, JobTitle } = require('../models');

router.get('/', readEmployee);
router.get('/:id', readEmployee);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

async function readEmployee(request, response, next) {
  const employee = await Employee.read(request.params.id, {
    include: JobTitle.model
  }); 
  response.status(200).json(employee);
}

async function createEmployee(request, response, next) {
  const newEmployee = await Employee.create(request.body);
  response.status(201).json(newEmployee);
}

async function updateEmployee(request, response, next) {
  const updatedEmployee = await Employee.update(request.params.id, request.body)
  response.status(200).json(updatedEmployee);
}

async function deleteEmployee(request, response, next) {
  const deletedEmployee = await Employee.delete(request.params.id);
  response.status(200).json(deletedEmployee);
}

module.exports = router;