import Message from '../message/message.js';

export default class Chat {
    constructor() {
        // this.elem = el;
    }

    render(el) {
        el.insertAdjacentHTML('afterbegin', this.template());
        this.message = new Message();
        // el.innerHTML = this.template();
    }
    template() {
        return `
        <div class="app_chat_container">
            <div class="app_chat_title">Your name</div>
            <div class="app_chat_box"></div>
        </div>       
       `
    }
}