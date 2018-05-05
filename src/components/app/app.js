import Field from '../field/field.js';
// import Chat from '../chat/chat.js';S

export default class App{
    constructor(){
        this.app_elem = document.querySelector('.app');
        this.field = new Field(this.app_elem);
    }
    static get chat(){
        return new Chat();
    }
    // static get field(){
    //     return new Field();
    // }

    render(){
        this.field.render(this.app_elem);
        
    }
}


