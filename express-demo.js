const express = require('express')
const app = express()

// 서버 셋팅 : 포트넘버(번호) 3000으로 셋팅 - 위든 밑에 작성하든 순서는 상관x
app.listen(3000)

// API => GET + "/"
app.get('/', function (req, res) {
  res.send('Hello World')
})

  let nodejsBook = {
	title : "Node.js를 공부해보자",
	price : 20000,
	description : " 이 책 정말 좋음, 꼭 사. "
	}

  app.get('/products/1', function(req, res) {
    res.json(nodejsBook)
    // res.send(200000)
  })
