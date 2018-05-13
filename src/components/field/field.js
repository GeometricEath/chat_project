'use stirct'


export default class Field {
    constructor(el) {
        this.elem = el;

    }

    render(el) {
        this.elem.insertAdjacentHTML('beforeend', this.template());
        // el.innerHTML = this.template();
    }

    template() {
        return `
        <div class="app_field">
        <input type="text" class="app_field_inp" placeholder="type your message">
        <button class="app_field_submit">Отправить</button>
        
        </div>       
       `
    }

    onclick() {
        this.elem
    }
}
