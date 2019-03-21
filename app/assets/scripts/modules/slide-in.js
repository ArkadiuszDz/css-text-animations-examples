export default class SlideIn {

    constructor (settings = {}) {
        this.slideWrapper = document.getElementsByClassName(settings.slideWrapper || 'slide-in-wrapper')[0];
        this.slideText = document.getElementsByClassName(settings.slideText || 'slide-in-text-inner')[0];
        this.slideFill = document.getElementsByClassName(settings.slideFill || 'slide-in-fill');
        this.slideAnimate = document.getElementsByClassName(settings.slideAnimate || 'slide-in-animate')[0];
        this.slideElement = document.getElementsByClassName(this.slideText)[0];
        this.setStyles();
        this.events();
    }

    setStyles () {
        this.slideFill[0].style.width = `${(this.slideWrapper.offsetWidth - this.slideText.offsetWidth) / 2}px`;
        this.slideFill[1].style.width = `${(this.slideWrapper.offsetWidth - this.slideText.offsetWidth) / 2}px`;
    }

    events () {

        let resizeTimer;

        window.addEventListener('resize' ,() => {

            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {

                this.slideFill[0].style.width = `${(this.slideWrapper.offsetWidth - this.slideText.offsetWidth) / 2}px`;
                this.slideFill[1].style.width = `${(this.slideWrapper.offsetWidth - this.slideText.offsetWidth) / 2}px`;

            },250);

        });
    }

}