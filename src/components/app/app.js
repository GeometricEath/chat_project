import Field from '../field/field.js';
import Chat from '../chat/chat.js';
import Message from '../message/message.js';

export default class App{
    constructor(){
        this.app_elem = document.querySelector('.app');
        this.field = new Field();
        this.chat = new Chat();
    }

    render(){
        let app_elem_chatArea = document.createElement('div');
        app_elem_chatArea.className ='app_chatArea';
        this.app_elem.appendChild(app_elem_chatArea);
        this.field.render(app_elem_chatArea);
        this.chat.render(app_elem_chatArea);
        
    }
}


