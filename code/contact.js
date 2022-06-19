
//Variables
const submit_button = document.querySelector('.submit-button');

const name_input = document.getElementById('name');
const lastName_input = document.getElementById('lastName');
const email_input = document.getElementById('email');
const message_input = document.getElementById('message');

const lock_data = document.querySelector('.lock');
const privacy_data = document.querySelector('.data-container');

const form_container = document.querySelector('.form-container')
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


const title_element_contact = document.querySelector('.title-contact-container');
const title_text_contact = document.querySelector('.title-contact')


//Opening and title display
const observerContact = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            anime({
                targets: title_element_contact,
                scaleX: [0,1],
                opacity: [0,1],
                easing: 'easeInOutQuad',
                duration: 250,
                delay: 350,
                complete: ()=>{
                    anime({
                        targets: title_text_contact,
                        opacity: [0,1],
                        easing: 'easeInOutQuad',
                        duration: 250,
                        delay: 150
                    })
                }
            })
        } else {
            title_element_contact.style.opacity = 0;
            title_text_contact.style.opacity = 0;
        }
    });
});

observerContact.observe(title_element_contact);

lock_data.addEventListener('click', ()=> {
    
    privacy_data.classList.toggle('noDisplay')
    form_container.classList.toggle('noDisplay')
    anime({
        targets: privacy_data,
        scaleX: [0,1],
        easing: 'easeInOutQuad',
        duration: 200
    })
})