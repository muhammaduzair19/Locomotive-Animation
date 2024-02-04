const loading = function () {
    const tl = gsap.timeline()

    tl.to('#yellow1', {
        top: '-100%',
        delay: 0.5,
        duration: 0.7,
        ease: 'expo.out'

    })


    tl.from('#yellow2', {
        top: '100%',
        delay: 0.6,
        duration: 0.7,
        ease: 'expo.out'

    }, 'anim')

    tl.to('#loader h1', {
        delay: 0.6,
        color: 'black'
    }, 'anim')

    tl.to('#loader', {
        opacity: 0,
        display: 'none'
    }, 'display')
    tl.to('#nav', {
        display: 'block'
    }, "display")

}();

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
});


const elems = document.querySelectorAll('.elem')
const page2 = document.querySelector("#page2")

elems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
        const bgImg = elem.getAttribute('data-img')
        page2.style.backgroundImage = `url(${bgImg})`
    })
})

document.querySelector('#footer h2').addEventListener('click', () => {
    scroll.scrollTo(0)
})