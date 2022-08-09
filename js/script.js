
const iconEmail = document.querySelector('.iconEmail');
const iconSenha = document.querySelector('.iconSenha');
const campoEmail = document.querySelector('.campoEmail')
const campoSenha = document.querySelector('.campoSenha');




document.addEventListener("click", (e) => {
    let elemento = e.target;

    if(elemento.classList.contains("campoEmail")){
            iconEmail.src = "images/mail-focus.svg";
    }

    if(elemento.classList.contains("campoSenha")){
        iconSenha.src = "images/lock-focus.svg";
    }

   
})


campoEmail.addEventListener('focusout', () => {
    iconEmail.src = "images/mail.svg";
})


campoSenha.addEventListener('focusout', () => {
    iconSenha.src = "images/lock.svg";
})



