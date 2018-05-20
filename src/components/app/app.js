import Field from '../field/field.js';
import Chat from '../chat/chat.js';
import Message from '../message/message.js';

export default class App {
    constructor({
        el,
        data,
        user,
        httpService,
    }) {
        this.app_elem = el;
        this.data = data;
        this.user = user;
        this.httpService = httpService;

        this.app_centrBlock = document.createElement('div');
        this.app_centrBlock.className = 'app_centrBlock';

        this.chat = new Chat({
            el: this.app_centrBlock,
            data: data || {},
        });

        this.field = new Field(this.app_centrBlock);

        this.field.addEventListener(
            'newMessage',
            this.onSubmit.bind(this)
        );
    }

    render() {
        this.app_elem.appendChild(this.app_centrBlock);
        this.chat.render();
        this.field.render();
    }

    onSubmit(ev) {
        const message_Obj = {
            user: {
                name: this.user.name,
                photo: this.user.photo,
            },
            text: ev.date,
            time: new Date().toLocaleTimeString(),
        };

        this.httpService.sendMessage(message_Obj).then(() => {
            this.chat.addMessage(message_Obj);
        });
    }
}
