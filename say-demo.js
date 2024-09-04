const express = require('express')
const app = express()

// 서버 셋팅 : 포트넘버(번호) 3000으로 셋팅 - 위든 밑에 작성하든 순서는 상관x
app.listen(3000)

  // GET /hello, /bye, /nicetomeetyou
  app.get('/hello', function (req, res) {
    res.json ({
        say : "안녕하세요 유씨"
    })
  })

  app.get('/bye', function (req, res) {
    res.json({
        say : "안녕히가세요 유씨!!"
    })
  })


  // GET 메소드로, "/nicetemeetyou" 이 날아오면
  // 매개변수로 전달받은 콜백 함수를 호출하겠어. ' => 서버에 셋팅
  app.get('/nicetomeetyou', function (req, res) {
    res.json({
        say : "만나서 영광입니다 !!"
    })
  })

