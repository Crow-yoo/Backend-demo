// express Module setting

const express = require('express')
const app = express()
app.listen(3000)

// data setting

let youtuber1 = {
    channelTitle : "십오야",
    sub : "658만명",
    videoNum : "1.3천개"
}

let youtuber2 = {
    channelTitle : "곽튜브",
    sub : "211만명",
    videoNum : "361개"
}

let youtuber3 = {
    channelTitle : "빠니보틀",
    sub : "233만명",
    videoNum : "338개"
}

let db = new Map()
var id = 1

db.set(id++, youtuber1)
db.set(id++, youtuber2)
db.set(id++, youtuber3)
 

// Rest API 설계
app.get("/yout", function (res, req) {
    res.json({
        message : "test"
    })
})

app.get('/youtuber/:id', function (req, res) {
    let {id} = req.params
    id = parseInt(id)

    const youtuber = db.get(id)
    if (youtuber == undefined) {
        res.json({
            message : "유튜버 정보를 찾을수 없엉."
        })
    } else {
        res.json(youtuber)
    }
})

app.use(express.json()) // http외 모듈인 '미들웨어':json 설정
app.post('/youtuber', (req,res) => {
    console.log(req.body)
    
// 등록, map(db)에 저장(put)을 해줘야 한다.
    db.set(id++, req.body)

    res.json({
        message : `${db.get(id-1).channelTitle}님, 등록해주셔서 감사합니다 !!`
    })
})