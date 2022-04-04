const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors');

const router = require('./api/routes');
require('dotenv').config()

;(async function () {
  try {
    await mongoose.connect(process.env.DB_URL, {
      dbName: process.env.DB_NAME
    })
    console.info(`Connected to DB ${process.env.DB_NAME} in ${process.env.DB_URL}`)
  } catch(error) {
    console.error(error)
  }
})()

const app = express()

try {
    app
      .use(cors())
      .use(morgan('dev'))
      .use(express.json())
      .use('/api', router)
      .listen(process.env.PORT, (err) => {
        if (err) throw new Error(err)
        console.info(`Super Todos API listening on port: ${process.env.PORT}`)
      })
} catch (error) {
  console.error('Errorklasjdflajdflkasdj:', error)
}
