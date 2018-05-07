export default class Message {
    constructor() {
        // this.elem = el;

    }

    render(el) {
        el.insertAdjacentHTML('beforeend', this.template());
        // el.innerHTML = this.template();
    }
    template(options = {}) {
        return `
    <div class="app_chat_massage">
    <img src="${options.user_photo}" alt="">
    <span class="app_chat_massage_sender">${options.user_name}</span>
    <span class="app_chat_massage_text">${options.text}</span>
    <span class="app_chat_massage_time">${options.time}</span>
    </div>`

    }
}