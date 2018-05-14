import Field from '../field/field.js';
import Chat from '../chat/chat.js';
import Message from '../message/message.js';

export default class App {
    constructor() {
        this.app_elem = document.querySelector('.app');
        this.app_centrBlock = document.createElement('div');
        this.app_centrBlock.className = 'app_centrBlock';
        this.chat = new Chat(this.app_centrBlock);
        this.field = new Field(this.app_centrBlock);

        this.field.addEventListener(
            'newMessage',
            this.chat.addMessage.bind(this)
            // () => {console.log('work')}
        );
    }

    render() {
        this.app_elem.appendChild(this.app_centrBlock);
        this.chat.render();
        this.field.render();
    }
}
