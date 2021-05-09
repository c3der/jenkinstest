'use strict'

const express = require('express')

const { PORT = '3000' } = process.env
const app = express()

app.use((req, res, next) => {
  res.send('Hello World 7')
})

app.listen(PORT)