const express = require('express')
const app = express()
const cors = require('cors');
const corsMiddleware = cors({
  credentials: true,
  origin: ["*","http://localhost:3000"],
  methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE']
})
app.use(corsMiddleware)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/api/note', (req, res) => {
    res.status(200).json({notes:[]})
})

// app.post('/api/note', (req, res) => {
//     res.status(200).json({notes:[]})
// })

app.listen(5000, () => {
  console.log('Start server at port 5000.')
})