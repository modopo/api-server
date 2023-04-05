'use strict';

const express = require('express');
const router = express.Router();
const JobTitle = require('../models/job-title');

router.get('/', readAllJobTitle);
router.get('/:id', readAJobTitle);
router.post('/', createJobTitle);
router.put('/:id', updateJobTitle);
router.delete('/:id', deleteJobTitle);

async function readAllJobTitle(request, response, next) {
  let data = await JobTitle.findAll();
  response.json(data);
}

async function readAJobTitle(request, response, next) {

}

async function createJobTitle(request, response, next) {
  const person = await JobTitle.create(request.body);
  response.json(person);
}

function updateJobTitle(request, response, next) {
  response.json(person);

}

function deleteJobTitle(request, response, next) {

}

module.exports = router;