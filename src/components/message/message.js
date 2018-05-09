export default class Message {
    constructor() {
        this.parent = document.querySelector('.app_chat_box')
        this.el = document.createElement('div');
        this.el.classList = 'message_box';
        this.parent.appendChild(this.el);
        this.user_name = 'Генри'
        this.date={
            options:{
                user_name: 'Генри',
                text: 'Первое сообщение!',
                time: new Date().toLocaleTimeString(),
                user_photo:'./src/img/people.png'
            }
        }
        this.render(this.el);
    }

    render() {
        this.el.insertAdjacentHTML('beforeend', this.template(this.date.options));
        // el.innerHTML = this.template();
    }
    template(options) {
        return `
   
    <img src="${options.user_photo}" alt="">
    <div class="message">
    <span class="app_chat_message_sender">${options.user_name}</span>
    <span class="app_chat_message_text">${options.text}</span>
    <span class="app_chat_message_time">${options.time}</span>
    </div>`

    }
}