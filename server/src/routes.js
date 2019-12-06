const {markerController} = require('./controllers/markerController')
const routes = require('express').Router()

routes.get('/', markerController.index)

module.exports = routes
