export default class Message {
    constructor(date) {
        this.parent = document.querySelector('.app_chat_box')
        this.el = document.createElement('div');
        this.el.classList = 'message_box';
        this.parent.appendChild(this.el);
        this.user_name = 'Генри'
        // this.date={
        //     options:{
        //         user_name: 'Генри',
        //         text: 'Первое сообщение!',
        //         time: new Date().toLocaleTimeString(),
        //         user_photo:'./src/img/people.png'
        //     }
        // }
        this.date = date;
        this.render(this.el);
    }

    render() {
        console.log('render');
        this.el.insertAdjacentHTML('beforeend', this.template(this.date));
        // el.innerHTML = this.template();
    }
    template(options) {
        return `
   
    <img src="${options.user_photo}" alt="">
    <div class="message">
    <h2 class="app_chat_message_sender">${options.user_name+':'}</h2>
    <p class="app_chat_message_text">${options.text}</p>
    <span class="app_chat_message_time">${options.time}</span>
    </div>`

    }
}