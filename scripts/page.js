const btnChoice = document.querySelectorAll(".btn");
const learnSection = document.querySelector(".div-learn");
const quizOptions = document.querySelector(".div-quiz");
const quiz1 = document.querySelectorAll(".quiz-1");
const quiz2 = document.querySelectorAll(".quiz-2");
const quiz3 = document.querySelectorAll(".quiz-3");
const quiz4 = document.querySelectorAll(".quiz-4");
const quiz5 = document.querySelectorAll(".quiz-5");
const quiz6 = document.querySelectorAll(".quiz-6");

btnChoice[0].addEventListener("click",() => {
    console.log(btnChoice[0].innerText);
    learnSection.classList.remove("hidden");
    quizOptions.classList.add("hidden");
})

btnChoice[1].addEventListener("click",() => {
    console.log(btnChoice[1].innerText);
    learnSection.classList.add("hidden");
    quizOptions.classList.remove("hidden");
})

quiz1[0].addEventListener('click',() => {
    quiz1[1].classList.remove('hidden');
    quiz2[1].classList.add('hidden');
    quiz3[1].classList.add('hidden');
    quiz4[1].classList.add('hidden');
    quiz5[1].classList.add('hidden');
    quiz6[1].classList.add('hidden');
})
quiz2[0].addEventListener('click',() => {
    quiz1[1].classList.add('hidden');
    quiz2[1].classList.remove('hidden');
    quiz3[1].classList.add('hidden');
    quiz4[1].classList.add('hidden');
    quiz5[1].classList.add('hidden');
    quiz6[1].classList.add('hidden');
})
quiz3[0].addEventListener('click',() => {
    quiz1[1].classList.add('hidden');
    quiz2[1].classList.add('hidden');
    quiz3[1].classList.remove('hidden');
    quiz4[1].classList.add('hidden');
    quiz5[1].classList.add('hidden');
    quiz6[1].classList.add('hidden');
})
quiz4[0].addEventListener('click',() => {
    quiz1[1].classList.add('hidden');
    quiz2[1].classList.add('hidden');
    quiz3[1].classList.add('hidden');
    quiz4[1].classList.remove('hidden');
    quiz5[1].classList.add('hidden');
    quiz6[1].classList.add('hidden');
})
quiz5[0].addEventListener('click',() => {
    quiz1[1].classList.add('hidden');
    quiz2[1].classList.add('hidden');
    quiz3[1].classList.add('hidden');
    quiz4[1].classList.add('hidden');
    quiz5[1].classList.remove('hidden');
    quiz6[1].classList.add('hidden');
})
quiz6[0].addEventListener('click',() => {
    quiz1[1].classList.add('hidden');
    quiz2[1].classList.add('hidden');
    quiz3[1].classList.add('hidden');
    quiz4[1].classList.add('hidden');
    quiz5[1].classList.add('hidden');
    quiz6[1].classList.remove('hidden');
})


