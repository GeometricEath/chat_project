import styles from './message.css';
export default class Message {
    constructor(date) {
        this.parent = document.querySelector('.app_chat_box');
        this.conteiner = document.createElement('div');
        this.conteiner.classList = 'message_box';
        this.parent.appendChild(this.conteiner);
        
        this.date = date;
        this.render();
    }

    render() {
        this.conteiner.insertAdjacentHTML('beforeend', this.template(this.date));
        this.conteiner.scrollIntoView(false);
    }

    template(options) {
        return `
    <img src="${options.user.photo}" alt="">
    <div class="message">
    <h2 class="app_chat_message_sender">${options.user.name+':'}</h2>
    <p class="app_chat_message_text">${options.text}</p>
    <span class="app_chat_message_time">${options.time}</span>
    </div>`
    }
}