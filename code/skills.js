const [...faders] = document.querySelectorAll('.skill-fader');
const [...tabTitles] = document.querySelectorAll('.tab-title')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        var translateX_Distance;
        switch (entry.target.dataset.name) {
            case 'ps':
                translateX_Distance = 600
                break;
            case 'ai':
                translateX_Distance = 500
                break;
            case 'ae':
                translateX_Distance = 650 
                break;
            case 'fi':
                translateX_Distance = 700
                break;
        }
        anime({
            targets: entry.target,
            translateX: [0, translateX_Distance],
            easing: 'easeInOutQuad',
            duration: 850,
            delay: 200
        })
    })
});

faders.forEach(fader => {
    observer.observe(fader)
});