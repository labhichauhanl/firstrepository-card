// creating objects for html classes, to attach event listeners.
const slider = document.querySelector(".boxx");
const left = document.querySelector(".leftarr");
const right = document.querySelector(".rightarr");

//attaching event listeners
left.addEventListener("click", ()=>{
    slider.scrollBy({
        left:-250, //based upon the card's width.
        behavior:"smooth"
    });
});
right.addEventListener("click",()=>{
    slider.scrollBy({
        left: 250,
        behavior:"smooth"
    });
});

// The FAQ List
const faqs = document.querySelectorAll(".faq");
faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faqs.forEach(item=>{
            if(item !== faq){
                item.classList.remove("active");
            }
        });
        faq.classList.toggle("active");
    });
});
