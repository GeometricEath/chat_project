'use stirct'


export default class Field {
    constructor(el) {
        this.elem = el;

    }

    render(){
        let obj = document.createElement('object');
        obj.innerHTML = this.template();
        this.elem.appendChild(obj);
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