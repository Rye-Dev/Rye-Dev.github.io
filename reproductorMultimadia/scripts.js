document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const manageCookiesBtn = document.getElementById('manage-cookies');

    cookieBanner.style.display = 'none';

    const cookiesAccepted = document.cookie.includes('acceptCookies=true');

    if (!cookiesAccepted) {
        cookieBanner.style.display = 'block';
    }

    acceptCookiesBtn.addEventListener('click', () => {
        const date = new Date();
        date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000)); 
        const expires = "expires=" + date.toUTCString();
        document.cookie = 'acceptCookies=true; expires=' + expires + '; Secure; SameSite=Strict'; 
        cookieBanner.style.display = 'none';
    });

    manageCookiesBtn.addEventListener('click', () => {

        window.location.href = 'gestion-cookies.html';

});



    let contenedor = document.querySelector('.video');
    const video = document.querySelector('video');
    const controls = document.querySelector('.controls');
    const play = document.querySelector('.play');
    const speed = document.querySelector('.speed');
    const moreVolume = document.querySelector('.moreVolume');
    const lessVolume = document.querySelector('.lessVolume');
    const bucle = document.querySelector('.bucle');
    const forward = document.querySelector('.forward');
    const backwards = document.querySelector('.backwards');
    let isOnLoop = false;
    const fullscreen = document.querySelector('.fullscreen');
    let isOnFullScreen = false;


    let showControls = () => {
        if(!isOnFullScreen) {
            controls.classList.add('active')
        }
    }
    showControls();

    video.addEventListener('click', () => {
        if(video.paused && isOnFullScreen) {
            video.play(); 

        }else if (!video.paused && isOnFullScreen){
            video.pause();
        }
    });

    video.addEventListener('play', () => {
        if (isOnFullScreen) {
            controls.style.opacity = 0; 
        }
    });

    video.addEventListener('pause', () => {
        if (isOnFullScreen) {
            controls.style.opacity = 1; 
        }
    });
        
    controls.addEventListener('mouseenter', () => {
        if(isOnFullScreen) {
        controls.classList.add('active');
        }
    });

    controls.addEventListener('mouseleave', () => {
        if(isOnFullScreen) {
        controls.classList.remove('active');
        }
    });



    play.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    
    });

    speed.addEventListener('change', () => {
        if(speed.value == 1) {
            video.playbackRate = 1.0;
        } else if(speed.value == 2) {
            video.playbackRate = 2.0;
        } else if(speed.value == 3) {
            video.playbackRate = 3.0;
        }
    })

    fullscreen.addEventListener('click', () => {
        if (isOnFullScreen == false) {
            isOnFullScreen = true;
            contenedor.style.maxWidth = '100vw';
            contenedor.style.maxHeight='100vw';
        } else {
            isOnFullScreen = false;
            contenedor.style.maxWidth = '47vw';
            contenedor.style.maxHeight='47vw';
            showControls();
        }
    })

    bucle.addEventListener('click', () => {
        if (isOnLoop === false) {
            isOnLoop = true;
            video.loop = true
        } else {
            isOnLoop = false;
            video.loop = false;
        }
    })

    forward.addEventListener('click', () => {
        video.currentTime += 1;
    })
    backwards.addEventListener('click', () => {
        video.currentTime -= 1;
    })

    moreVolume.addEventListener('click', () => {
        video.volume += 0.1;
    })

    lessVolume.addEventListener('click', () => {
        video.volume -= 0.1;
    })
    

    

 
        

});