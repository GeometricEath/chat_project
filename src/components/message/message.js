export default class Message {
    constructor(date) {
        this.parent = document.querySelector('.app_chat_box');
        if(!this.el2){
            this.el2 = document.createElement('div');
            this.el2.classList = 'message_box';
        }
        this.parent.appendChild(this.el2);
        this.user_name = 'Генри'
        this.date = date;
        this.render(this.el2);
    }

    render(el) {
        el.insertAdjacentHTML('beforeend', this.template(this.date));
    }

    template(options) {
        return `
    <img src="${options.user_photo}" alt="">
    <div class="message">
    <h2 class="app_chat_message_sender">${options.user_name+':'}</h2>
    <p class="app_chat_message_text">${options.text}</p>
    <span class="app_chat_message_time">${options.time}</span>
    </div>`
    }
}