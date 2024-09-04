const express = require('express')
const app = express()
app.listen(3000)

app.get('/:id', function (req, res) {
    let {id} = req.params
    // console.log(id)
    id = parseInt(id) // "숫자" => 숫자
    // console.log(db.get(id))
    res.json(db.get(id))

    if (db.get(id) == undefined) {
        res.json({
            message : " 없는 상품입니다. "
        })
    } else {
        product = db.get(id)
        product["id"] = id // product.id = id

        res.json(product)
    }

    // res.json({
    //     id : id,
    //     productName : db.get(id)
    // })
})

// localhost:3000/1 ==> l'ordinateur
// localhost:3000/2 ==> le portable
// localhost:3000/3 ==> la chaise

let db = new Map()

let notebook = {
    productName : "l'ordinateur",
    price : 2000000
}

let phone = {
    productName : "le portable",
    price : 1350000
}

let chair = {
    productName : "la chaise",
    price : 700000
}

let poster = {
    productName : "Poster",
    price : 80000
}

db.set(1, notebook)  // 키로 벨류를 찾을 수 있는 한 쌍을 저장
db.set(2, phone)
db.set(3, chair)
db.set(4, poster)

console.log(db)
console.log(db.get(1))
// console.log(db.get("1"))
console.log(db.get(2))
console.log(db.get(3))