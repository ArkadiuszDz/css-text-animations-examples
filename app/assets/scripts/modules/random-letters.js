export default class RandomLetters {

    constructor (querySelector) {
        this.textWrapper = document.querySelector(querySelector);
        this.querySelector = querySelector;
        this.modifyText();
        this.animateText();
    }

    modifyText () {
      
        let new_text = [...this.textWrapper.innerText].map(e => {
            return e != ' ' ? `<span style="visibility: hidden">${e}</span>` : ' ';
        });

        new_text = new_text.toString().replace(/,/g,'');

        this.textWrapper.innerHTML = new_text;
    }

    animateText () {
        
        let letters = document.querySelectorAll(`${this.querySelector} span`);
        let lettersArray = [...letters];
        this.shuffle(lettersArray);

        lettersArray.forEach(e => {
           let delayTime = Math.random() * (3 - 1) + 1;
           setTimeout(() => {
                e.style.visibility = '';
           }, delayTime * 1000)
        })
        
    }

    shuffle(array) {
        for (var i = array.length; i; i--) {
             var j = Math.floor(Math.random() * i);
             [array[i - 1], array[j]] = [array[j], array[i - 1]];
        }
    }   

}