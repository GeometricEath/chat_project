export default class Firebase {
    constructor(chat_id, baseUrl) {
        this.chat_id = chat_id || this.initChat();
        this.baseUrl = baseUrl || 'https://geochat-project.firebaseio.com/test/chat/'
    };

    initChat() {
        const data = {
            users: {
                user1: {
                    name: 'Генри',
                    photo: './src/img/people.png',
                },
                user2: {
                    name: 'Джейн',
                    photo: './src/img/people.png',
                },
            }
        };

        this.request({
            url: '/chat.json',
            method: "POST",
            data,
        }).then(body => {
            this.chat_id = body.name;
            console.log(this.chat_id);
        })
    };

    getMessages() {
        return this.request({
            url: this.chat_id + '/messages.json',
            method: 'GET',
        })
    };

    sendMessage(data) {
        return this.request({
            url: this.chat_id + '/messages.json',
            method: 'POST',
            data,
        })
    };
 
    request({
        url = '',
        method = 'GET',
        data,
    }) {
        const params = {
            method,
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
        }

        if (data) {
            params.body = JSON.stringify(data);
        }

        return this.transport(this.baseUrl + url, params);
    };

    transport(url, params) {
        return fetch(url, params)
            .then(response => response.json());
    };
}