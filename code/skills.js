const [...faders] = document.querySelectorAll('.skill-fader');

const checkView = (element) => {
    const rect = element.getBoundingClientRect();
    console.log(rect)
}

checkView(faders[0])

faders[0].addEventListener('click', () =>{
    console.log('changing')
})