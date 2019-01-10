
function addListeners() {
	const bookCoverImgs = document.querySelectorAll(".book-cover") 
	
	bookCoverImgs.forEach( book => {
		book.addEventListener("mouseenter", presentBookInfo)
		book.addEventListener("mouseleave", hideBookInfo)
		book.addEventListener("click", selectBook)
	})
}

function presentBookInfo() {
	bookInfo = document.getElementById("book-" + this.id)
	bookInfo.classList.remove("hidden")
}

function hideBookInfo() {
	bookInfo = document.getElementById("book-" + this.id)
	bookInfo.classList.add("hidden")
}

function selectBook() {
	const book = this
	const bookCoverImgs = document.querySelectorAll(".book-cover") 
	const downArrow = document.querySelectorAll(".down") 
	const body = document.querySelector("body")
	
	presentBookInfo.call(book)
	
	bookCoverImgs.forEach( div => div.removeEventListener("mouseenter", presentBookInfo))
	bookCoverImgs.forEach( div => div.removeEventListener("mouseleave", hideBookInfo))
	downArrow.forEach( arrow => arrow.addEventListener("click", function() {
		hideBookInfo.call(book)
		addListeners()
		
	}))	
}
 
