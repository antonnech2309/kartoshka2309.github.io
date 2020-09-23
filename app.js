let productsCountEl = document.getElementById("products-count");
let addToCartButtons = document.querySelectorAll(".button2");

for(let i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click",function(){
        productsCountEl.textContent = +productsCountEl.textContent + 1;
    }
    )
}

// change like button state
let likeButtons = document.querySelectorAll(".like");
for(let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click",function(){
        this.classList.toggle("liked");
    })
}
//slide slick

$(".slider-block").slick({
    dots:true,
})

// modal window

let moreDetailesButtons = document.querySelectorAll(".button1");
let modal = document.querySelector(".modal")
let buttonClose = document.querySelector(".btn-close");

moreDetailesButtons.forEach(function(btn) {
    btn.addEventListener("click",openModal)
})
function openModal () {
    modal.classList.add("show")
    modal.classList.remove("hide")
}
window.addEventListener("scroll", showModalByScroll)
function closeModal() {
    modal.classList.add("hide");
    modal.classList.remove("show");
}

function showModalByScroll() {
    if(window.pageYOffset > document.documentElement.scrollHeight/2) {
        openModal()
        removeEventListener("scroll", showModalByScroll)
    }
}

buttonClose.addEventListener("click", closeModal)

modal.addEventListener("click", function(e) {
    if(e.target === modal) {
        closeModal()
    }
})

// increment decrement

let incrementButtons = document.querySelectorAll(".increment-button");
let decrementButtons = document.querySelectorAll(".decrement-button");
let productsQuantity  = document.querySelectorAll(".quantity-input");

function Counter(incrementButton, decrementButton, productQuantity, minCount = 1, maxCount = 10) {
    this.domRefs = {
        incrementButton,
        decrementButton,
        productQuantity,
    }
    this.toggleButtonState = function() {
        let count = +this.domRefs.productQuantity.value;
        this.domRefs.incrementButton.disabled = count >= maxCount;
        this.domRefs.decrementButton.disabled = count <= minCount;
    }

    this.toggleButtonState()
    this.increment = function() {
       let currentCount = +this.domRefs.productQuantity.value;
       let nextCount = currentCount + 1;
       this.domRefs.productQuantity.value = nextCount;
       this.toggleButtonState()
    }
    this.decrement = function() {
        let currentCount = +this.domRefs.productQuantity.value;
       let nextCount = currentCount - 1;
       this.domRefs.productQuantity.value = nextCount;
       this.toggleButtonState()
    }
    this.domRefs.incrementButton.addEventListener("click", this.increment.bind(this));
    this.domRefs.decrementButton.addEventListener("click", this.decrement.bind(this));

}
let counters = [];
productsQuantity.forEach(function(counterItem, i) {
    counters[i] = new Counter(incrementButtons[i], decrementButtons[i],counterItem)
})
// let minCount = 1;
// let maxCount = 5;

// for(let i = 0; i < productsQuantity.length; i++) {
//     let currentCount = +productsQuantity[i].value;
//     toggleButtonState(currentCount,decrementButtons[i], incrementButtons[i])

// }

// function toggleButtonState(count,decrementButton,incrementButton) {
//      decrementButton.disabled = count <= minCount;
//     incrementButton.disabled = count >= maxCount;
// }
// for(let i = 0; i < incrementButtons.length; i++ ) {
// incrementButtons[i].addEventListener("click", function() {
//     let currentCount = +productsQuantity[i].value;
//     let nextCount = currentCount + 1;
//     productsQuantity[i].value = nextCount;
//     toggleButtonState(nextCount,decrementButtons[i], incrementButtons[i])
    
// })
// }
// for(let i = 0; i < decrementButtons.length; i++) {
// decrementButtons[i].addEventListener("click", function() {
//     let currentCount = +productsQuantity[i].value;
//     let nextCount = currentCount - 1;
//     productsQuantity[i].value = nextCount;
//     toggleButtonState(nextCount,decrementButtons[i], incrementButtons[i])
// })
// }

AOS.init();

