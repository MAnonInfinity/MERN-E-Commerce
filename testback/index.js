const express = require('express')

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
    return res.send('Home Page')
})

app.get('/login', (req, res) => {
    return res.send('Login Page')
})

app.get('/sigup', (req, res) => {
    return res.send('You are signed up')
})

app.get('/signout', (req, res) => {
    return res.send('You are signed out')
})

app.get('/hitesh', (req, res) => {
    return res.send('Hitesh uses Instagram')
})

app.listen(PORT, () => {
    console.log('Server is up and running...')
})