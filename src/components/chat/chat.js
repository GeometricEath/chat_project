import Message from '../message/message.js';
import styles from './chat.css';

export default class Chat{
    constructor({
        el,
        data
    }) {
        this.elem = document.createElement('div');
        this.elem.className = 'app_chat_container';
        this.el = el;
        this.data = data;

        el.appendChild(this.elem);

    }

    render() {
        this.elem.insertAdjacentHTML('afterbegin', this.template());
        // this.message = new Message();
        // el.innerHTML = this.template();
        this.data.forEach((element) => {
            new Message(element);
        });
    }
    template() {
        return `
            <div class="app_chat_title">Your name</div>
            <div class="app_chat_box"></div>
       `
    }

    addMessage(message) {
        new Message(message)
    }
}