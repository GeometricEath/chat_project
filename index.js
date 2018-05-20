import App from './src/components/app/app.js';
import { mockdata } from './src/mockdata/data.js';
import Firebase from './src/modules/firebase.js';

const firebase = new Firebase('-LCyXNQeY3GQJQuQQY8h');
const user = {
    name: 'Генри',
    photo: './src/img/people.png',
}


firebase.getMessages()
.then(body => {
    body = body || {};
    console.dir(Object.values(body));
    // aplication.chat.addMessage(Object.values(body))
    const aplication = new App({
        el: document.querySelector('.app'),
        data: Object.values(body),
        user,
        httpService: firebase,
    });
    aplication.render();
    });

let mock = Object.values(mockdata);
mock.forEach(element => {
    firebase.sendMessage(element);
});

// fetch('https://geochat-project.firebaseio.com/messages.json')
// .then(response =>{
//     return response.json();
// }).then((date)=>{
//     console.dir(Object.values(mockdata));
// });

// fetch('https://geochat-project.firebaseio.com/test/msg.json', {
//     method: 'POST',
//     headers: new Headers({
//         'Content-Type': 'application/json'
//     }),
//     body: JSON.stringify(mockdata),
// }).then(data =>{
//     return data.json();
// }).then(body =>{
//     console.dir(body.name)
// })