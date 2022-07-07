const formulario = document.getElementById('formulario');
const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');

const alertSuccess = document.getElementById('alertSuccess')
const alertName = document.getElementById('alertName')
const alertEmail = document.getElementById('alertEmail')


const regularUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regularUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

const mostrarMensajeExito = () => {
    alertSuccess.classList.remove('d-none')
    alertSuccess.textContent = 'Mensaje enviado con exito'
}

const mostrarMensajeError = (errores) => {
    errores.forEach(item =>{
        item.tipo.classList.remove('d-none')
        item.tipo.textContent=item.msg
        
    })
} 


formulario.addEventListener('submit', e =>{
    
    e.preventDefault();
    alertSuccess.classList.add('d-none');

    const errores = [];
    
    if(!regularUserName.test(userName.value) || !userName.value.trim()){
    
        userName.classList.add('is-invalid');
        
        errores.push({
            tipo:alertName,
            msg:'formato invalido en el campo nombre, solo se permiten letras'
        })

 
    } 
    else {
     userName.classList.remove('is-invalid');
     userName.classList.add('is-valid');
     alertName.classList.add('d-none');
    }

    if(!regularUserEmail.test(userEmail.value) || !userEmail.value.trim()){
        userEmail.classList.add('is-invalid')
        
        errores.push({
            tipo:alertEmail,
            msg:'formato invalido en el campo email'
        })

    } 
    else {
    userEmail.classList.remove('is-invalid');
    userEmail.classList.add('is-valid');
    alertEmail.classList.add('d-none')
    }
    
     if(errores.length !==0){
        mostrarMensajeError(errores)
        return}

    console.log('formulario enviado');
    mostrarMensajeExito();
})