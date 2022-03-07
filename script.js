
// // setTimeout(()=> {
// //     console.log("pippo");
// // }, 10000
// // );

// let  intervalCounter = 0;
// const interval = setInterval(()=> {
//     console.log( intervalCounter);

   
//     if (intervalCounter === 10)
//          clearInterval(interval);
//             intervalCounter++;
  
// }, 1000);






// const button3 = document.getElementById('button3')

// button3.onclick = () => buttonClick('button 3');

// // button3.onclick = countClick;

// const button4 = document.getElementById('button4')

// button4.addEventListener('mousedown',buttonClick)


// document.addEventListener('keydown', changeBackground);



// // const parPippo = document.getElementById('par-pippo');

// // parPippo.addEventListener('click', countClick);


// const link = document.getElementById('link');

// link.addEventListener('click', displayPar)

// function buttonClick(string) {
//     console.log(string);
// }


// let counter = 0;

// function countClick(event) {
//     counter = counter + 1;
//     console.log(counter);
//     // if (counter === 7) {
//     //     button4.removeEventListener('click', countClick)
//     // }
//     event.preventDefault();
//     window.location = "https://google.com";
// }


// function displayPar(event) {
//     let par = document.getElementById('hidden-par');
//     par.style.display = 'block'
//     event.preventDefault();
// }


// function changeBackground(event){
//     let number = parseInt(event.key)
//     if (event.ctrlKey && !isNaN(number)) {
//         event.preventDefault(); 
//         document.body.style.backgroundColor = '#'+number+number+number+number+number+number
//     }
// }

// let selectedKey = "";
// function onKeyDown(event) {
//     if (event.key !== selectedKey) {
//         console.log("tasto premuto")
//     }
// }

// let searchTimeout;
// function realTimeSearch(event) {
//     if (searchTimeout) {
//         clearTimeout(searchTimeout);
//     }
//     const searchTimeout = setTimeout(() => {
//         console.log("sto cercando");
//     }, 1000);
// }

const primeWorker()