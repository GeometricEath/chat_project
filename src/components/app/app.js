import Field from '../field/field.js';
import Chat from '../chat/chat.js';

export default class App {
    constructor() {
        this.app_elem = document.querySelector('.app');
        this.app_centrBlock = document.createElement('div');
        this.app_centrBlock.className = 'app_centrBlock';
        this.chat = new Chat();
        this.field = new Field(this.app_centrBlock);
    }

    render() {
        this.app_elem.appendChild(this.app_centrBlock);
        this.chat.render(this.app_centrBlock);
        this.field.render(this.app_centrBlock);
    }
}


