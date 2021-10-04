import express from 'express'
const app = express()

app.get('/ping', (_req, res) => {
  res.send('ping')
})

const PORT = 3003

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`)
})