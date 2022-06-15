
//Variables
const submit_button = document.querySelector('.submit-button');

const name_input = document.getElementById('name');
const lastName_input = document.getElementById('lastName');
const email_input = document.getElementById('email');
const message_input = document.getElementById('message');

const form = document.querySelector('.grid-form')

let can_submit;
document.addEventListener('load', ()=>{
    !can_submit
})

form.addEventListener('keyup', ()=> {
    if (name_input.value === '' || name_input.value == null
        || lastName_input.value === '' || lastName_input.value == null
        || email_input.value === '' || email_input.value == null
        || message_input.value === '' || message_input.value == null)
        {
        can_submit = false;
        submit_button.classList.add('disabled');
        submit_button.classList.remove('enabled');
    }
    else {
        can_submit = true;
        submit_button.classList.add('enabled')
        submit_button.classList.remove('disabled')
    }
})

form.addEventListener('submit', (e)=>{
    if (!can_submit) {
        e.preventDefault()
    }
})

var planet_anim = bodymovin.loadAnimation({
    container: document.getElementById("contact-planet"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/contact_halfPlanet.json'
})