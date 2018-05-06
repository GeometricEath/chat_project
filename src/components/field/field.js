'use stirct'


 export default class Field {
    constructor() {
        // this.elem = el; //Каким образом здесь в место div.app_chatArea получаю div.app?!!

    }

    render(el){
        // this.elem.insertAdjacentHTML('beforeend', this.template());
        el.innerHTML = this.template();
    }
    template() {
        return `
        <div class="app_field">
        <input type="text" class="app_field_inp" placeholder="tipe you massege">
       
        <input type="submit" class="app_field_submit" value="Submit">
        </div>       
       `
    }
}
