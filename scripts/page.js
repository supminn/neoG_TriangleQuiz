const btnChoice = document.querySelectorAll(".btn");
const learnSection = document.querySelector(".div-learn");
const quizOptions = document.querySelector(".div-quiz");
// const quizSection = document.querySelectorAll(".hidden:not(.div-learn), .div-quiz");

btnChoice[0].addEventListener("click",() => {
    console.log(btnChoice[0].innerText);
    learnSection.classList.remove("hidden");
    quizOptions.classList.add("hidden");
    // for(const val in quizSection){
    //     quizSection[val].classList.add("hidden");
    // }
})

btnChoice[1].addEventListener("click",() => {
    console.log(btnChoice[1].innerText);
    learnSection.classList.add("hidden");
    quizOptions.classList.remove("hidden");
    // for(const val in quizSection){
    //     quizSection[val].classList.remove("hidden");
    // }
})

