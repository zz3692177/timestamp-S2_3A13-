// app.js
const express = require('express')
const app = express()
const port = 3000

app.use((req, res, next) => {
  const currentTime = new Date(Date.now())
  const method = req.method
  const url = req.url

  const year = currentTime.getFullYear()
  const month = currentTime.getMonth()
  const day = currentTime.getDate()
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const seconds = currentTime.getSeconds()

  let timestamp = `${year}-${month + 1}-${day} ${hours}:${minutes}:${seconds}`
  let message = timestamp + ` | ${method} from ${url}`
  console.log(message)
  next()
})
app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
