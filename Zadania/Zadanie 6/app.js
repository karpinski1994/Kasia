// Zadanie 6 - ??

// var allLi = document.querySelectorAll('nav li');

// function setDataDirection(elements) {
//     let dataLi = [];
//     for (var i = 0; i<allLi.length; i++){
//         var dataDir = document.querySelectorAll('top');
//         if (dataDir = true) {
//             return 'top';
//         }else{
//             dataLi.push (allLi[i])
//         }
//         return dataLi;
//     }
// }


// setDataDirection(allLi)

// console.log(dataLi[i]);

var allLi = document.querySelectorAll('nav li');
console.log(allLi);

function setDataDirection(elements) {
    var allLis = Array.from(elements);
    for (var i = 0; i < allLis.length; i++) {
        if (!allLis[i].hasAttribute("data-direction")) {
           allLis[i].setAttribute("data-direction", "top");
        }
    } 
}

setDataDirection(allLi);