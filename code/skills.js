const [...faders] = document.querySelectorAll('.skill-fader');
const [...tabTitles] = document.querySelectorAll("[data-title]");
let [...avatarInitials] = document.querySelectorAll('.skill-text');
const frameElement = document.querySelector('.skill-frame-container');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let translateX_value;
        switch (entry.target.dataset.name) {
            case 'ps':
                translateX_value = 600
                break;
            case 'ai':
                translateX_value = 500
                break;
            case 'ae':
                translateX_value = 650 
                break;
            case 'fi':
                translateX_value = 700
                break;
        }
        anime({
            targets: entry.target,
            translateX: [0, translateX_value],
            easing: 'easeInOutQuad',
            duration: 850,
            opacity: [0,1],
            delay: 200
        })
    })
});

faders.forEach(fader => {
    observer.observe(fader)
});

tabTitles.forEach(title => {
    title.addEventListener('click', () => {
        switch (title.dataset.title) {
            case 'design':
                avatarInitials[0].textContent = 'Ps';
                avatarInitials[1].textContent = 'Ai';
                avatarInitials[2].textContent = 'Ae';
                avatarInitials[3].textContent = 'Fi';
                frameElement.style.backgroundImage = "url(/images/skill_frame_UI_tab_1.png)";
                delete title.dataset.back
                title.dataset.main = true;
                tabTitles[1].dataset.back = true;
                tabTitles[2].dataset.back = true;
                break;
            case 'code':
                avatarInitials[0].textContent = 'Js';
                avatarInitials[1].textContent = 'Ph';
                avatarInitials[2].textContent = 'Ph';
                avatarInitials[3].textContent = 'Ph';
                frameElement.style.backgroundImage = "url(/images/skill_frame_UI_tab_2.png)";
                delete title.dataset.back
                title.dataset.main = true;
                tabTitles[0].dataset.back = true;
                tabTitles[2].dataset.back = true;
                break;
            case 'media':
                frameElement.style.backgroundImage = "url(/images/skill_frame_UI_tab_3.png)";
                delete title.dataset.back
                title.dataset.main = true;
                tabTitles[0].dataset.back = true;
                tabTitles[1].dataset.back = true;
                break;
        }
    })
})

avatarInitials.forEach(avatar => {
    avatar.addEventListener('mouseenter', () => {
        switch (avatar.textContent) {
            case 'Ps':
                avatar.textContent = 'Photoshop'
                avatar.style.fontSize = '1rem'
                break;
        
            default:
                break;
        }
    })

    avatar.addEventListener('mouseleave', () => {
        switch (avatar.textContent) {
            case 'Photoshop':
                avatar.textContent = 'Ps'
                avatar.style.fontSize = '4rem'
                break;
            default:
                break;
        }
    })
})