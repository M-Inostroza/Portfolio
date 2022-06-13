
//Variables
const [...faders] = document.querySelectorAll('.skill-fader');
const [...tabTitles] = document.querySelectorAll("[data-title]");
let [...skillAvatars] = document.querySelectorAll('.skill-avatar');
let [...skillText] = document.querySelectorAll('.skill-text');
const frameElement = document.querySelector('.skill-frame-container');

//tabs
const designTab = document.querySelector('[data-design]')
const codeTab = document.querySelector('[data-code]')
const webTab = document.querySelector('[data-web]')



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
            case 'js':
                translateX_value = 550
                break;
            case 'C#':
                translateX_value = 450
                break;
            case 'Php':
                translateX_value = 350
                break;
            case 'html':
                translateX_value = 800
                break;
            case 'css':
                translateX_value = 750
                break;
            case 'wp':
                translateX_value = 250
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
                webTab.classList.add('noDisplay')
                codeTab.classList.add('noDisplay')
                designTab.classList.remove('noDisplay')
                break;
            case 'code':
                frameElement.style.backgroundImage = "url(/images/skill_frame_UI_tab_2.png)";
                delete title.dataset.back
                title.dataset.main = true;
                tabTitles[0].dataset.back = true;
                tabTitles[2].dataset.back = true;
                codeTab.classList.remove('noDisplay')
                designTab.classList.add('noDisplay')
                webTab.classList.add('noDisplay')
                break;
            case 'web':
                frameElement.style.backgroundImage = "url(/images/skill_frame_UI_tab_3.png)";
                delete title.dataset.back
                title.dataset.main = true;
                tabTitles[0].dataset.back = true;
                tabTitles[1].dataset.back = true;
                codeTab.classList.add('noDisplay')
                designTab.classList.add('noDisplay')
                webTab.classList.remove('noDisplay')
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
            anime({
                begin: ()=> {
                    skillText[1].textContent = 'Illustrator'
                },
                targets: skillText[1],
                opacity: [0,1],
                scale: 0.55,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Ae':
            anime({
                begin: ()=> {
                    skillText[2].textContent = 'After Effects'
                },
                targets: skillText[2],
                opacity: [0,1],
                scale: 0.6,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Fi':
            anime({
                begin: ()=> {
                    skillText[3].textContent = 'Figma'
                },
                targets: skillText[3],
                opacity: [0,1],
                scale: 0.7,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Js':
            anime({
                begin: ()=> {
                    skillText[4].textContent = 'Javascript'
                },
                targets: skillText[4],
                opacity: [0,1],
                scale: 0.6,
                duration: 200,
                easing: 'easeInQuad'
            })
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
            anime({
                begin: ()=> {
                    skillText[1].textContent = 'Ai'
                },
                targets: skillText[1],
                opacity: [0,1],
                scale: 1,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'After Effects':
            anime({
                begin: ()=> {
                    skillText[2].textContent = 'Ae'
                },
                targets: skillText[2],
                opacity: [0,1],
                scale: 1,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Figma':
            anime({
                begin: ()=> {
                    skillText[3].textContent = 'Fi'
                },
                targets: skillText[3],
                opacity: [0,1],
                scale: 1,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Javascript':
            anime({
                begin: ()=> {
                    skillText[4].textContent = 'Js'
                },
                targets: skillText[4],
                opacity: [0,1],
                scale: 1,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
    
    }
    anim.setDirection(-1)
    anim.play()
}