function startUpAnim(){
    // const logo = document.querySelector(".logo");
    // anime({
    //     targets: logo,
    //     keyframes: [
    //       {translateX: '150%'},
    //     ],
    //     duration: 1000,
    //     easing: 'easeOutElastic(1, .6)',
    // });
  
    // const socialLogo = document.querySelectorAll('.social-logo');
    // anime({
    //     targets: socialLogo,
    //     keyframes: [
    //       {translateY: '150%'},
    //     ],
    //     duration: 1000,
    //     easing: 'easeOutElastic(1, .6)',
    //     })
  }
  
startUpAnim()

const socialLogo = document.querySelectorAll('.social-logo');

socialLogo.forEach(logo => {
    logo.addEventListener('mouseover', () => {
        console.log('hovering')
        anime({
            targets: logo,
            scale:1.5,
            duration: 1000,
            easing: 'easeOutElastic(1, .6)',
        })
    })
    logo.addEventListener('mouseout', () => {
        console.log('hovering')
        anime({
            targets: logo,
            scale:1,
            duration: 1000,
            easing: 'easeOutElastic(1, .6)',
        })
    })
})
