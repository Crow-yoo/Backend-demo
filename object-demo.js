// print 함수와 매개변수 이름은 달라도 된다.

let nodejsBook = {
	title : "Node.js를 공부해보자",
	price : 20000,
	description : " 이 책 정말 좋음, 꼭 사. "
	}

function print(book) {
    console.log(book.title)
    console.log(book.price)
    console.log(book.description)
}

print(nodejsBook)