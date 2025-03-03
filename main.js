// Filter buttons and Filterable cards

const filterButtons = document.querySelectorAll(".filter_buttons a");
const filterableCards = document.querySelectorAll(".filterable_cards .card");

//Define the filterCards function

const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    
    //Iterate over each filterable card

    filterableCards.forEach(card => {
        // Add "hide" class to hide the card initially
        card.classList.add("hide");
        //check if the card matches the selected filter or "all" is selected.
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    })
};

//Add click event listener to each filter button

filterButtons.forEach(button => button.addEventListener("click", filterCards));

// Section 3



let swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    initialSlide: 2,
    speed: 600,
    preventClicks: true, 
    slidesPerview: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 80,
        depth: 350,
        modifier: 1,
        slideShadows: true,
    }, 
    on: {
        click(event) {
            swiper.slideTo(this.clickedIndex);
        },
    },
    pagination: {
        el: ".swiper-pagination",
    },
})


// Add Cart
const Cart = document.querySelector('.Add')
const button = document.querySelector('.add-to-cart')

let Add = 0

    button.addEventListener('Click', () => {
        Cart.innerHTML = Add++;
    
})
