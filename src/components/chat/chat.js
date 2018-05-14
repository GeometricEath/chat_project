import Message from '../message/message.js';

export default class Chat {
    constructor(el) {
        this.elem = document.createElement('div');
        this.elem.className = 'app_chat_container';
        this.el = el;
        this.user = 'Генри';
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
        
        this.el.addEventListener(
        'newMessage',
        this.addMessage.bind(this)
        );
    }

    render() {
        this.elem.insertAdjacentHTML('afterbegin', this.template());
        // this.message = new Message();
        // el.innerHTML = this.template();
        this._messages.forEach((element) => {
            new Message(element);
        });
    }
    template() {
        return `
            <div class="app_chat_title">Your name</div>
            <div class="app_chat_box"></div>
       `
    }

    addMessage(ev) {
        new Message({
            user_name: this.user,
            text: ev.date,
            time: new Date().toLocaleTimeString(),
            user_photo: './src/img/people.png'})
    }
}