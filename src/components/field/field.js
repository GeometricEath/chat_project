'use stirct'


export default class Field {
    constructor(el) {
        this.elem = document.createElement('form');
        this.elem.className = 'app_field';
        el.appendChild(this.elem);
        
        this.elem.addEventListener(
            'submit',
            this.submit.bind(this)
        )

    }

    render() {
        // this.elem.insertAdjacentHTML('beforeend', this.template());
        this.elem.innerHTML = this.template();
    }

    template() {
        return `
        <input name="inp" type="text" class="app_field_inp" placeholder="type your message">
        <input type="submit" class="app_field_submit" value="Отправить">     
       `
    }

    submit(evnt) {
        event.preventDefault();
        const form = event.target;
        const input = event.target.inp;
        console.log(input.value);
        form.reset();
    }

    addMessage() {
        
    }
}
