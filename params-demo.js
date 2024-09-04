const express = require('express')
const app = express()

// 서버 셋팅 : 포트넘버(번호) 3000으로 셋팅 - 위든 밑에 작성하든 순서는 상관x
app.listen(3000)


  app.get('/products/:n', function(req, res) {
    // : => 어 ? 나한테 URL로 매개변수를 전달해주려나 봐
    // product/_ 빈칸에 오는 값을 n이라는 변수에 담아줘
        //console.log(req.params)
        //console.log(req.params.n)

        
        let number = parseInt(req.params.n) - 10
        // if ((req.params.n - 10) > 5)  {
          console.log(number) // 숫자 "숫자"
          // console.log("url로 전달받은 숫자가 10보다 크네요.")
        //}

        res.json({
            num : number
        })
        //num : n
    })
    // 채널주소 : https://www.youtube.com/@15ya.fullmoon
    // 채널주소 : https://www.youtube.com/@JBKWAK
    app.get('/watch', function(req, res) {
      //const q = req.query // q = {v:____, t:____}
      //console.log(q.v)
      //console.log(q.t)


      // JS객체(JSON)의 비구조화 (입력값의 철자가 틀리면 인식 x)
      const {v, t} = req.query
      console.log(v)
      console.log(t)

      res.json({
        video : v,
        timeline : t
      })
      })
    
 // }) 

 // 영상 클릭 주소 : https://www.youtube.com/watch?v=3ycCFdMV6_A
 // 타임라인 주소 : https://www.youtube.com/watch?v=3ycCFdMV6_A&t=3350s
