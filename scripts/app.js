//Result value
const result = document.querySelectorAll(".txt-result");
//If the angles makes a triangle
const btnTriangle = document.querySelector("#btn-isTriangle");
const angle1 = document.querySelector("#num-angle1");
const angle2 = document.querySelector("#num-angle2");
const angle3 = document.querySelector("#num-angle3");
//Type of triangles
const btnCheck = document.querySelectorAll(".btn-check");
const btnReplay = document.querySelectorAll(".btn-replay");
const dimAngles = document.querySelectorAll(".val-angle");
//Calculations
const base = document.querySelectorAll(".base");
const height = document.querySelectorAll(".height");
const btnCalc = document.querySelectorAll(".btn-calculate");
//array of angles
const angles = [
    [40, 60, 80],
    [60, 60, 60],
    [75, 50, 55],
    [35, 105, 40],
    [80, 25, 75],
    [30, 60, 90],
    [90, 25, 65],
    [30, 100, 50],
    [125, 30, 25],
    [85, 55, 40],
    [50, 40, 30],
    [125, 50, 10],
    [30, 30, 120],
    [45, 90, 45]
];

window.onload = angleGenerator();

function angleGenerator() {
    let index = Math.floor(Math.random() * Math.floor(angles.length));
    dimAngles[0].innerText = angles[index][0];
    dimAngles[1].innerText = angles[index][1];
    dimAngles[2].innerText = angles[index][2];
    dimAngles[3].innerText = angles[index][2];
    dimAngles[4].innerText = angles[index][0];
    dimAngles[5].innerText = angles[index][0];
    dimAngles[6].innerText = angles[index][1];
    dimAngles[7].innerText = angles[index][2];
}

//Angles makes a triangle
btnTriangle.addEventListener("click", function () {
    if (!angle1.value || !angle2.value || !angle3.value) {
        result[0].innerHTML = "<i>Values cannot be left blank</i>. Enter all the 3 angles.";
    }
    else if (Number(angle1.value) + Number(angle2.value) + Number(angle3.value) === 180) {
        result[0].innerHTML = `<i class="far fa-check-circle"></i>The 3 angles with values ${angle1.value}°, ${angle2.value}° and ${angle3.value}° would <b>make a triangle</b>`;
    } else {
        result[0].innerHTML = `<i class="far fa-times-circle"></i>The 3 angles with values ${angle1.value}°, ${angle2.value}° and ${angle3.value}° would <b>not make a triangle</b>`;
    }
})

//Type of triangle - angled
btnCheck[0].addEventListener("click", function () {
    const angleOne = Number(dimAngles[0].innerText);
    const angleTwo = Number(dimAngles[1].innerText);
    const angleThree = Number(dimAngles[2].innerText);

    if (angleOne + angleTwo + angleThree !== 180) {
        if (document.querySelector("#notTriangle").checked) {
            result[1].innerHTML = `Right Answer!`;
        } else {
            result[1].innerHTML = `Incorrect answer, try again!`;
        }
    } else {
        if (angleOne < 90 && angleTwo < 90 && angleThree < 90 && document.querySelector("#acuteTriangle").checked) {
            result[1].innerHTML = `Right Answer!`;
        } else if ((angleOne == 90 || angleTwo == 90 || angleThree == 90) && document.querySelector("#rightTriangle").checked) {
            result[1].innerHTML = `Right Answer!`;
        } else if ((angleOne > 90 || angleTwo > 90 || angleThree > 90) && document.querySelector("#obtuseTriangle").checked) {
            result[1].innerHTML = `Right Answer!`;
        } else {
            result[1].innerHTML = `Incorrect answer, try again!`;
        }
    }
})

//Replay btn trigger
btnReplay[0].addEventListener("click", function () {
    result[1].innerText = "";
    angleGenerator();
})
btnReplay[1].addEventListener("click", () => {
    result[2].innerText = "";
    angleGenerator();
})
btnReplay[2].addEventListener("click", function () {
    result[3].innerText = "";
    angleGenerator();
})

//Find 3rd angle of triangle
btnCheck[1].addEventListener("click", function () {
    const angleOne = Number(dimAngles[3].innerText);
    const angleTwo = Number(dimAngles[4].innerText);
    const angleThree = Number(document.querySelector("#num-find-angle").value);
    if (!angleThree) {
        result[2].innerHTML = "<i>Value cannot be 0 or blank</i>. Enter the value of 3rd angle.";
    }
    else if (angleThree + angleTwo + angleOne === 180) {
        result[2].innerHTML = `Right Answer!`;
    } else {
        result[2].innerHTML = `Incorrect answer, try again!`;
    }
})

//Type of triangle - side
btnCheck[2].addEventListener('click', () => {
    const angleOne = Number(dimAngles[5].innerText);
    const angleTwo = Number(dimAngles[6].innerText);
    const angleThree = Number(dimAngles[7].innerText);

    if (angleOne + angleTwo + angleThree !== 180) {
        if (document.querySelector("#not-triangle").checked) {
            result[3].innerHTML = `Right Answer!`;
        } else {
            result[3].innerHTML = `Incorrect answer, try again!`;
        }
    } else {
        if (angleOne == angleTwo && angleTwo == angleThree && document.querySelector("#equilateral").checked) {
            result[3].innerHTML = `Right Answer!`;
        } else if ((angleOne == angleTwo || angleTwo == angleThree || angleOne == angleThree) && document.querySelector("#isosceles").checked) {
            result[3].innerHTML = `Right Answer!`;
        } else if(document.querySelector("#scalene").checked){
            result[3].innerHTML = `Right Answer!`; 
        }
         else {
            result[3].innerHTML = `Incorrect answer, try again!`;
        }
    }
})

//Calculate the hypotenuse
btnCalc[0].addEventListener("click",() => {
    if(!base[0].value || !height[0].value){
        result[4].innerHTML = "<i>Values cannot be left blank</i>. Enter the value base and height.";
    }
    else{
        let b = Number(base[0].value)*Number(base[0].value);
        let h = Number(height[0].value)*Number(height[0].value);
        let res = Math.sqrt(b+h).toFixed(2);
        result[4].innerHTML = `Hypotenuse = <b>${res}</b> units for a triangle with base = ${base[0].value} units and height = ${height[0].value} units.`;
    }
})

//Calculate are of triangle
btnCalc[1].addEventListener("click",() => {
    if(!base[1].value || !height[1].value){
        result[5].innerHTML = "<i>Values cannot be left blank</i>. Enter the value base and height.";
    }
    else{
        let b = Number(base[1].value);
        let h = Number(height[1].value);
        let res = (0.5 * b * h).toFixed(2);
        result[5].innerHTML = `Area = <b>${res}</b> sq units for a triangle with base = ${base[1].value} units and height = ${height[1].value} units.`;
    }
})