const buttons = document.querySelectorAll('.buttons');
const body = document.querySelector('body');



buttons.forEach(button => {
    button.addEventListener('click' , (e) => {
        console.log(e.target);
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id;
        }
    })    
});