const express = require('express');
const routes = express.Router();

const views = __dirname + '/views/'

const profile = {
  name: "birobirobiro",
  avatar: "https://avatars.githubusercontent.com/u/22185823?s=460&u=64e97be49a0eecabffb10a48b8feb8092ac3599d&v=4",
  "monthly-budget": 3000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4
}

routes.get('/', (req, res) => res.render(views + "/index"))
routes.get('/job', (req, res) => res.render(views + "/job"))
routes.get('/job/edit', (req, res) => res.render(views + "/job-edit"))
routes.get('/profile', (req, res) => res.render(views + "/profile", { profile }))


module.exports = routes;