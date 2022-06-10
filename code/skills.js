
//Variables
const [...faders] = document.querySelectorAll('.skill-fader');
const [...tabTitles] = document.querySelectorAll("[data-title]");
let [...skillAvatars] = document.querySelectorAll('.skill-avatar');
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
        openFrame.setDirection(1)
        openFrame.play()
    })
    
    avatar.addEventListener('mouseleave', () => { 
        openFrame.setDirection(-1)
        openFrame.play()
    })
})

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

