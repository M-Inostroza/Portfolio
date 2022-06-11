
//Variables
const [...faders] = document.querySelectorAll('.skill-fader');
const [...tabTitles] = document.querySelectorAll("[data-title]");
let [...skillAvatars] = document.querySelectorAll('.skill-avatar');
let [...skillText] = document.querySelectorAll('.skill-text');
const frameElement = document.querySelector('.skill-frame-container');

//Expands the avatar frame
skillAvatars.forEach(avatar => {
    let openFrame = bodymovin.loadAnimation({
        container: avatar,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/anims/skill_avatar_open.json'
    })

    avatar.addEventListener('mouseenter', () => {
        open_text_avatar(avatar, openFrame)
    })
    
    avatar.addEventListener('mouseleave', () => { 
        close_text_avatar(avatar, openFrame)
    })
})


//Controls faders 
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

//Tabs mechanic
tabTitles.forEach(title => {
    title.addEventListener('click', () => {
        switch (title.dataset.title) {
            case 'design':
                frameElement.style.backgroundImage = "url(/images/skill_frame_UI_tab_1.png)";
                delete title.dataset.back
                title.dataset.main = true;
                tabTitles[1].dataset.back = true;
                tabTitles[2].dataset.back = true;
                break;
            case 'code':
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

//------------------------------------------------------------------------//

//Functions
function open_text_avatar(avatar, anim) {
    switch (avatar.querySelector('.skill-text').textContent) {
        case 'Ps':
            anime({
                begin: ()=> {
                    skillText[0].textContent = 'Photoshop'
                },
                targets: skillText[0],
                opacity: [0,1],
                scale: 0.6,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Ai':
            skillText[1].textContent = 'Illustrator'
            break;
        case 'Ae':
            skillText[2].textContent = 'After Effects'
            break;
        case 'Fi':
            skillText[3].textContent = 'Figma'
            break;
    
    }
    anim.setDirection(1)
    anim.play()
}

function close_text_avatar(avatar, anim) {
    switch (avatar.querySelector('.skill-text').textContent) {
        case 'Photoshop':
            anime({
                begin: ()=> {
                    skillText[0].textContent = 'Ps'
                },
                targets: skillText[0],
                opacity: [0,1],
                scale: 1,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Illustrator':
            skillText[1].textContent = 'Ai'
            break;
        case 'After Effects':
            skillText[2].textContent = 'Ae'
            break;
        case 'Figma':
            skillText[3].textContent = 'Fi'
            break;
    
    }
    anim.setDirection(-1)
    anim.play()
}