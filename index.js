require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const {TOKEN, SERVER_URL} = process.env
const TELEGRAM_API=`https://api.telegram.org/bot${TOKEN}`
const URI = `/webhook/${TOKEN}`
const WEBHOOK_URL = SERVER_URL+URI
const app = express()
app.use(bodyParser.json())

app.listen(process.env.PORT || 5000, async () =>{
    console.log(`app running on port`, process.env.PORT || 5000)
})