'use strict'

const express = require('express')

const { PORT = '3000' } = process.env
const app = express()

app.use((req, res, next) => {
  res.send('Hello World 4')
})

app.listen(PORT)