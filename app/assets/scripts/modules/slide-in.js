export default class SlideIn {
    constructor (settings) {
        //this.slideWrapper = settings.slideWrapper || 'slide-in-wrapper';
        this.slideText = settings.slideText || 'slide-in-text';
        this.slideFill = settings.slideFill || 'slide-in-fill';
        this.slideAnimate = settings.slideAnimate || 'slide-in-animate';
        this.slideElement = document.getElementsByClassName(this.slideText);
        console.log(this.slideElement);
    }
    events () {

    }
}