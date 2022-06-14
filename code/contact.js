//Variables
const submit_button = document.querySelector('.submit-button');

const name_input = document.getElementById('name');


//Data object
let form_data = {
    name: "",
    lastName: "",
    email: "",
    message: ""
}

//Get data
name_input.addEventListener('keyup', (e)=> {
    form_data.name = e.target.value
    console.log(form_data)
})