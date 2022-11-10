// Задание1
const block =  document.querySelector(".box");


let posLeft = 0;
let posTop = 0;

action = () => {
    if (posLeft <= 380 && posTop == 0) {
        posLeft += 20;
        block.style.left = `${posLeft}px`;
        setTimeout(action, 100);
    } else if (posLeft >= 380 && posTop <290){
        posTop += 20;
        block.style.top = `${posTop}px`;
        setTimeout(action, 100);
    } else if (posTop >= 280 && posLeft != 0) {
        posLeft -= 20;
        block.style.left = `${posLeft}px`;
        setTimeout(action, 100);
    } else if (posLeft == 0 && posTop != 0){
        posTop -= 20;
        block.style.top = `${posTop}px`;
        setTimeout(action, 100);
    }
}
action()

// Задание2
let num =0;

const start = document.querySelector(".start")
const stopOne = document.querySelector(".stop")


start.addEventListener("click", () => {
     startFunc = setInterval(interval, 1000) 
     function interval() {
        num ++
        console.log(`${num} seconds later`)
    }
});

stopOne.addEventListener("click",() => {
    clearInterval(startFunc);
    console.clear()
    num = 0;
    });


// Задание3
function getSum(num) {
        function summa(){
           console.log(num*num)
           } 
           summa()   
       }
getSum(10)


// Доп.задание

// let arr = [1,3,4,6,7,11,12,13]


// Вариант1

// let result = arr.filter(function(num) {
// 	return num % 2 == 0;
// });

// console.log(result);
// Вариант2
// let result = arr.filter(num => num % 2 == 0);
// console.log(result);


// Вариант3
// console.log( arr.filter(num => num % 2 == 0) );