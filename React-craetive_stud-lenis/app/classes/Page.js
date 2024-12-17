// import Observer from './classes/Observer';
import TextReveal from '../animation/TextReveal';
import Button from '../animation/Button';
import ParallaxImage from '../animation/ParallaxImage';
import List from '../animation/List';

 export default class Page {
    constructor() {
        // this._createObserver();
        this._createTextReveals();
        this._createButtons();
        this._createParallaxImages();
        this._createLists();
    }

    _createTextReveals() {
        const textItems = [...document.querySelectorAll('[data-animation="text-reveal"]')];
        textItems.forEach(text => {
            new TextReveal({
                element: text,
            });
        });
    }

    _createButtons() {
        const buttons = [...document.querySelectorAll('[data-animation="button"]')];
        buttons.forEach((button) => {
            new Button({
                element: button,
            });
        });
    }

    _createParallaxImages(){
        const images = [...document.querySelectorAll('[data-animation="parallax-image"]')];
        images.forEach((image) => {
            new ParallaxImage({
                imageSection: image,
            });
        });
    }

    _createLists(){
        const lists = [...document.querySelectorAll('.list__item')];
        lists.forEach((list) => {
            new List({
                element: list,
            });
        });
    }

    // _createObserver(){
    //     const texts = [...document.querySelectorAll('h2')]

    //     texts.forEach(text => {
    //         new Observer({
    //             element: text,
    //         });
    //     });
    // }
}