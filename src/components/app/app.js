import Field from '../field/field.js';
// import Chat from '../chat/chat.js';S

export default class App{
    constructor(){
        this.app_elem = document.querySelector('.app');
        this.field = new Field();
    }

    render(){
        let app_elem_chatArea = document.createElement('div');
        app_elem_chatArea.className ='app_chatArea';
        this.app_elem.appendChild(app_elem_chatArea);
        // debugger;
        this.field.render(app_elem_chatArea);
        
    }
}


