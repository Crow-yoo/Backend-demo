const express = require('express')
const app = express()

// 서버 셋팅 : 포트넘버(번호) 3000으로 셋팅 - 위든 밑에 작성하든 순서는 상관x
app.listen(3000)

    // 채널주소 : https://www.youtube.com/@15ya.fullmoon
    // 채널주소 : https://www.youtube.com/@JBKWAK

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

    app.get('/:nickname', function(req, res) {

        const {nickname} = req.params

       if (nickname == "@15ya.fullmoon") {
        res.json(youtuber1)
       } else if (nickname == "@JBKWAK") {
        res.json(youtuber2)
       } else if (nickname == "@PaniBottle") {
        res.json(youtuber3)
       } else {
        res.json({
            message : " 저희가 모르는 유튜버 입니다."
        })
       }
    })

    //개발자가 예상하지 못한 에러 = 예외가 발생했다 !


 // 영상 클릭 주소 : https://www.youtube.com/watch?v=3ycCFdMV6_A
 // 타임라인 주소 : https://www.youtube.com/watch?v=3ycCFdMV6_A&t=3350s
