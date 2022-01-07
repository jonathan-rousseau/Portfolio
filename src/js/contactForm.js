const contactForm = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message')
import Swal from 'sweetalert2';

contactForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }
    let xhr = new XMLHttpRequest()
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Votre email a bien été envoyé',
                showConfirmButton: false,
                timer: 3000,
              })
            alert('Votre email a bien été envoyé');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        }else{
            alert('Oups une erreur est survenue !')
        }
    }
    xhr.send(JSON.stringify(formData));
})