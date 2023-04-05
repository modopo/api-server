'use strict';

const express = require('express');
const router = express.Router();
const Employee = require('../models/employee')

router.get('/', readAllEmployee);
router.get('/:id', readAEmployee);
router.post('/', createEmployee);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);

async function readAllEmployee(request, response, next) {
  let data = await Employee.findAll();
  response.json(data);
}

async function readAEmployee(request, response, next) {

}

async function createEmployee(request, response, next) {
  const person = await Employee.create(request.body);
  response.json(person);
}

function updateEmployee(request, response, next) {
  
  response.json(person);

}

function deleteEmployee(request, response, next) {

}

module.exports = router;