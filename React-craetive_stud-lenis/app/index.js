import '../styles/index.scss';
import Lenis from '@studio-freight/lenis';
import Home from './pages/Home';


class App {

    constructor() {
        document.body.style.opacity = '1';
        this._createLenis();
        this._createHome();
        this._render();
    }

    _createHome() {
        this.home = new Home();
    }
   

    _createLenis() {
        this.Lenis = new Lenis({
            lerp: 0.15,
        });
    }

    _render(time) {
        this.Lenis.raf(time);

        requestAnimationFrame(this._render.bind(this));
    }

} //end tag



const app = new App();