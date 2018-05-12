import Message from '../message/message.js';

export default class Chat {
    constructor() {
        // this.elem = el;
        this._messages = [
            {
                user_name: 'Генри',
                text: 'Первое сообщение!',
                time: new Date().toLocaleTimeString(),
                user_photo: './src/img/people.png'
            },
            {
                user_name: 'Джейн',
                text: 'Второе сообщение',
                time: new Date().toLocaleTimeString(),
                user_photo: './src/img/people.png'
            },
            {
                user_name: 'Генри',
                text: 'И еще одно',
                time: new Date().toLocaleTimeString(),
                user_photo: './src/img/people.png'
            }]


    }

    render(el) {
        el.insertAdjacentHTML('afterbegin', this.template());
        // this.message = new Message();
        // el.innerHTML = this.template();
        this._messages.forEach((element) => {
            new Message(element);
        });
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