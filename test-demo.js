const express = require('express')
const app = express()

// 서버 셋팅 : 포트넘버(번호) 3000으로 셋팅 - 위든 밑에 작성하든 순서는 상관x
app.listen(3000)

// API : GET + "http://localhost:3000/test"
// "TEST SUCCESS"
app.get('/test', function (req, res) {
    res.send('TEST_YOO')
  })


// API : GET + "http://localhost:3000/test"
// "TEST SUCCESS"
app.get('/test/1', function (req, res) {
    res.send("ONE_YOO!!")
  })
