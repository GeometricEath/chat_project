import Message from '../message/message.js';

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
            }];
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