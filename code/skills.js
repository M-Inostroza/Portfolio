
//Variables
const [...faders] = document.querySelectorAll('.skill-fader');
const [...tabTitles] = document.querySelectorAll("[data-title]");
let [...skillAvatars] = document.querySelectorAll('.skill-avatar');
let [...skillText] = document.querySelectorAll('.skill-text');
const frameElement = document.querySelector('.skill-frame-container');

//Queries
const _querySizeTablet = window.matchMedia('(max-width: 768px)');
const _querySizePhone = window.matchMedia('(max-width: 420px)');

//tabs
const designTab = document.querySelector('[data-design]')
const codeTab = document.querySelector('[data-code]')
const webTab = document.querySelector('[data-web]')

//Planet bg anim
var planet_BG = bodymovin.loadAnimation({
    container: document.getElementById("planet-skills-BG"),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/anims/planet_skills_BG.json'
})

//Expands the avatar frame
skillAvatars.forEach(avatar => {
    let openFrame = bodymovin.loadAnimation({
        container: avatar,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: '/anims/skill_avatar_open.json'
    })

    avatar.addEventListener('mouseover', () => {
        open_text_avatar(avatar, openFrame)
    })
    
    avatar.addEventListener('mouseleave', () => { 
        close_text_avatar(avatar, openFrame)
    })

    if(_querySizeTablet.matches || _querySizePhone.matches) {
        const avatarObserver = new IntersectionObserver(entries=>{
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    open_text_avatar(entry.target, openFrame)
                } else {
                    close_text_avatar(entry.target, openFrame)
                }
            })
        })

        avatarObserver.observe(avatar)
    }
})


//Controls faders 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let translateX_value;
        let translateY_value;
        switch (entry.target.dataset.name) {
            case 'ps':
                translateX_value = 600
                if (_querySizeTablet.matches) {translateX_value = 400}
                if (_querySizePhone.matches) {
                    translateY_value = -170
                    translateX_value = 0
                }
                break;
            case 'ai':
                translateX_value = 500
                if (_querySizeTablet.matches) {translateX_value = 340}
                if (_querySizePhone.matches) {
                    translateY_value = -50
                    translateX_value = 0
                }
                break;
            case 'ae':
                translateX_value = 650
                if (_querySizeTablet.matches) {translateX_value = 440}
                if (_querySizePhone.matches) {
                    translateY_value = -130
                    translateX_value = 0
                }
                break;
            case 'fi':
                translateX_value = 700
                if (_querySizeTablet.matches) {translateX_value = 480}
                if (_querySizePhone.matches) {
                    translateY_value = -190
                    translateX_value = 0
                }
                break;
            case 'js':
                translateX_value = 550
                if (_querySizeTablet.matches) {translateX_value = 400}
                if (_querySizePhone.matches) {
                    translateY_value = -100
                    translateX_value = 0
                }
                break;
            case 'C#':
                translateX_value = 450
                if (_querySizeTablet.matches) {translateX_value = 260}
                if (_querySizePhone.matches) {
                    translateY_value = 60
                    translateX_value = 0
                }
                break;
            case 'Php':
                translateX_value = 350
                if (_querySizeTablet.matches) {translateX_value = 180}
                if (_querySizePhone.matches) {
                    translateY_value = 100
                    translateX_value = 0
                }
                break;
            case 'html':
                translateX_value = 800
                if (_querySizeTablet.matches) {translateX_value = 540}
                if (_querySizePhone.matches) {
                    translateY_value = -190
                    translateX_value = 0
                }
                break;
            case 'css':
                translateX_value = 750
                if (_querySizeTablet.matches) {translateX_value = 500}
                if (_querySizePhone.matches) {
                    translateY_value = -180
                    translateX_value = 0
                }
                break;
            case 'wp':
                translateX_value = 250
                if (_querySizeTablet.matches) {translateX_value = 140}
                if (_querySizePhone.matches) {
                    translateY_value = 100
                    translateX_value = 0
                }
                break;
        }
        anime({
            targets: entry.target,
            translateX: [0, translateX_value],
            translateY: [0, translateY_value],
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
                if (_querySizePhone.matches) {frameElement.style.backgroundImage = "url(/images/vertical_frame_1.png)";}
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
                if (_querySizePhone.matches) {frameElement.style.backgroundImage = "url(/images/vertical_frame_2.png)";}
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
                if (_querySizePhone.matches) {frameElement.style.backgroundImage = "url(/images/vertical_frame_3.png)";}
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
            skillText[0].textContent = 'Photoshop'
            anime({
                targets: skillText[0],
                opacity: [0,1],
                scale: 0.6,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;

        case 'Ai':
            skillText[1].textContent = 'Illustrator'
            anime({
                targets: skillText[1],
                opacity: [0,1],
                scale: 0.55,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Ae':
            skillText[2].textContent = 'After Effects'
            anime({
                targets: skillText[2],
                opacity: [0,1],
                scale: 0.6,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Fi':
            skillText[3].textContent = 'Figma'
            anime({
                targets: skillText[3],
                opacity: [0,1],
                scale: 0.7,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Js':
            skillText[4].textContent = 'Javascript'
            anime({
                targets: skillText[4],
                opacity: [0,1],
                scale: 0.6,
                duration: 200,
                easing: 'easeInQuad'
            })
            break;
        case 'Wp':
            skillText[9].textContent = 'Wordpress'
            anime({
                targets: skillText[9],
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
        case 'Wordpress':
                anime({
                    begin: ()=> {
                        skillText[9].textContent = 'Wp'
                    },
                    targets: skillText[9],
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

//--Title Intro--//
const title_element_skills = document.querySelector('.title-skills-container');
const title_text_skills = document.querySelector('.title-skills')

//Opening and title display
const observerSkills = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            anime({
                targets: title_element_skills,
                scaleX: [0,1],
                opacity: [0,1],
                easing: 'easeInOutQuad',
                duration: 250,
                delay: 350,
                complete: ()=>{
                    anime({
                        targets: title_text_skills,
                        opacity: [0,1],
                        easing: 'easeInOutQuad',
                        duration: 250,
                        delay: 150
                    })
                }
            })
        } else {
            title_element_skills.style.opacity = 0;
            title_text_skills.style.opacity = 0;
        }
    });
});

observerSkills.observe(title_element_skills)