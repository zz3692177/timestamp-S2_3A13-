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
  const day = currentTime.getDate()   //getDay 回傳值為星期? 所以要使用getDate()
  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes()
  const seconds = currentTime.getSeconds()
  let timestamp = `${year}-${month + 1}-${day} ${hours}:${minutes}:${seconds}` //預設月份為0-11所以回傳值要加1
  let message = timestamp + ` | ${method} from ${url}`
  console.log(message)
  req.timeStart = currentTime


  req.message = message

  next()
})

function countTime(message, startTime) {
  const current = new Date(Date.now())
  let duration = current - startTime;
  let duraMessage = `${message} | total time: ${duration}ms`
  console.log(duraMessage)
}

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
  countTime(req.message, req.timeStart)

})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
  countTime(req.message, req.timeStart)
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
  countTime(req.message, req.timeStart)
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
  countTime(req.message, req.timeStart)
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
