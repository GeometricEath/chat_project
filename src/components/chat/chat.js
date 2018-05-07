
export default class Chat {
    constructor() {
        // this.elem = el;

    }

    render(el) {
        el.insertAdjacentHTML('afterbegin', this.template());
        // el.innerHTML = this.template();
    }
    template() {
        return `
        <div class="app_chat">
            <div class="app_chat_title"></div>
        </div>       
       `
    }
}