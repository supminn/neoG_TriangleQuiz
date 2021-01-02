const btnChoice = document.querySelectorAll(".btn");
const learnSection = document.querySelector(".div-learn");
const quizOptions = document.querySelector(".div-quiz");
// const quiz1 = document.querySelectorAll(".quiz-1");
// const quiz2 = document.querySelectorAll(".quiz-2");
// const quiz3 = document.querySelectorAll(".quiz-3");
// const quiz4 = document.querySelectorAll(".quiz-4");
// const quiz5 = document.querySelectorAll(".quiz-5");
// const quiz6 = document.querySelectorAll(".quiz-6");

// const quizes = [quiz1,quiz2,quiz3,quiz4,quiz5,quiz6];
//Array containing all the 6 quizes
const quizes = [
    document.querySelectorAll(".quiz-1"),
    document.querySelectorAll(".quiz-2"),
    document.querySelectorAll(".quiz-3"),
    document.querySelectorAll(".quiz-4"),
    document.querySelectorAll(".quiz-5"),
    document.querySelectorAll(".quiz-6")
];

//Display and hide only 1 quiz at a time
function quizDisplay(num){
    quizes[num-1][1].classList.remove('hidden');
    for(let i=1;i<=6;i++){
        if(num != i){
            quizes[i-1][1].classList.add('hidden');
        }
    }
}

//Iterate to corresponding click event
for(let i = 0;i<6;i++){
    quizes[i][0].addEventListener('click',() => { quizDisplay(i+1)});
}

//Learning
btnChoice[0].addEventListener("click",() => {
    console.log(btnChoice[0].innerText);
    learnSection.classList.remove("hidden");
    quizOptions.classList.add("hidden");
})

//Quiz
btnChoice[1].addEventListener("click",() => {
    console.log(btnChoice[1].innerText);
    learnSection.classList.add("hidden");
    quizOptions.classList.remove("hidden");
})
