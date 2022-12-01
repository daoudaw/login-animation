 const login = document.querySelector('.login');
const pass = document.querySelector('.pass');
const send = document.querySelector('.send');
const pConnect = document.querySelector('.p-connect');




send.addEventListener("mousemove", (e)=> {
   // let x = e.clientX;
   let randomPosition = Math.floor(Math.random()* -109) + 1;
 
    if ( (login.value !== "test") || (pass.value !== "test") ) {
        send.classList.add('no');
        send.classList.remove('yes');
        //send.style.right = `${x}px`;
        send.style.right = `${randomPosition}px`;
    }
    else {
         send.classList.remove('no');
         send.classList.add('yes'); 
     }
});


