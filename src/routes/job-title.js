'use strict';

const express = require('express');
const router = express.Router();
const { Employee, JobTitle } = require('../models');

router.get('/', readJobTitle);
router.get('/:id', readJobTitle);
router.post('/', createJobTitle);
router.put('/:id', updateJobTitle);
router.delete('/:id', deleteJobTitle);

async function readJobTitle(request, response, next) {
  const jobTitle = await JobTitle.read(request.params.id, {
    include: Employee.model
  });
  response.status(200).json(jobTitle); 
}

async function createJobTitle(request, response, next) {
  const newJobTitle = await JobTitle.create(request.body);
  response.status(201).json(newJobTitle);
}

async function updateJobTitle(request, response, next) {
  const updatedJobTitle = await JobTitle.update(request.params.id, request.body)
  response.status(200).json(updatedJobTitle);
}

async function deleteJobTitle(request, response, next) {
  const deletedJobTitle = await JobTitle.delete(request.params.id);
  response.status(200).json(deletedJobTitle);
}

module.exports = router;