let currentChan = 'general';
let chanTitle = document.querySelector('.chanTitle');

//Fonction qui affiche les messages
function getMessages(chan) {
    //Requêtes AJAX
    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('GET', `../php/scripts/handler.php?chan=${chan}`);

    ajaxRequest.onload = function () {
        const results = JSON.parse(ajaxRequest.responseText);
        const html = results
            //Afficher les derniers messages en bas
            .reverse()
            //Traitement sur chaque éléments du tableau
            .map(function (message) {
                const date = new Date();
                const messageYear = message.sentAt.substring(0, 4);
                const actualYear = date.getFullYear();
                const messageMonth = message.sentAt.substring(5, 7);
                const actualMonth =
                    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
                const messageDay = message.sentAt.substring(8, 10);
                const actualDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

                let displayMessage;

                if (messageYear == actualYear && messageMonth == actualMonth && messageDay == actualDay) {
                    displayMessage = `Aujourd'hui à ${message.sentAt.substring(11, 16)}`;
                } else if (
                    messageYear == actualYear &&
                    messageMonth == actualMonth &&
                    messageDay == actualDay - 1
                ) {
                    displayMessage = `Hier à ${message.sentAt.substring(11, 16)}`;
                } else {
                    displayMessage = `${messageDay}/${messageMonth}/${messageYear}`;
                }

                return `
                <div class="message">
                    <img src="../assets/img/user.png" alt="" />
                    <div class="message__content">
                        <div class="message__content--infos">
                            <p>
                                <span class="author">${message.author}</span>
                                <span class="date">${displayMessage}</span>
                            </p>     
                        </div>
                        
                        <span class="content">${message.content}</span>
                    </div>
                </div>
            
            `;
            })
            .join('');

        const chatBox = document.querySelector('.messages');

        chatBox.innerHTML = html;
        chatBox.scrollTop = chatBox.scrollHeight;
    };

    ajaxRequest.send();
}

function postMessage(event) {
    event.preventDefault();
    const content = document.querySelector('#msgInput');

    const data = new FormData();
    data.append('content', content.value);

    const ajaxRequest = new XMLHttpRequest();
    ajaxRequest.open('POST', `../php/scripts/handler.php?task=write&chan=${currentChan}`);
   //Quand la requête AJAX a fini de charger les messages s'affichent
    ajaxRequest.onload = function () {
        getMessages(currentChan);
    };

    ajaxRequest.send(data);
    // On vide l'input 
    document.querySelector('#msgInput').value = '';
}

function displayUsers() {
    const ajaxRequest = new XMLHttpRequest();
    //Affiche les utilisateurs
    ajaxRequest.open('GET', `../php/scripts/handler.php?task=users`);

    ajaxRequest.onload = function () {
        const results = JSON.parse(ajaxRequest.responseText);
        let onlineUsers = '';
        let offlineUsers = '';
        const onlineUsersContainer = document.querySelector('.onlineUsers');
        const offlineUsersContainer = document.querySelector('.offlineUsers');

        results.forEach(user => {
            //4 = statut de l'utilisateur (bool)
            if (user[4] === '1') {
                onlineUsers += `<p>${user[2]}</p>`;
            } else {
                offlineUsers += `<p>${user[2]}</p>`;
            }
        });

        onlineUsersContainer.innerHTML = onlineUsers;
        offlineUsersContainer.innerHTML = offlineUsers;
    };

    ajaxRequest.send();
}

getMessages('general');
displayUsers();

document.querySelector('.mainSection__form').addEventListener('submit', postMessage);

document
    .querySelector('.channelSection__Container__channel--general')
    .addEventListener('submit', function (e) {
        e.preventDefault();
        getMessages('general');
        currentChan = 'general';
        chanTitle.innerText = 'general';
    });

document
    .querySelector('.channelSection__Container__channel--live')
    .addEventListener('submit', function (e) {
        e.preventDefault();
        getMessages('live');
        currentChan = 'live';
        chanTitle.innerText = 'live';
    });

document
    .querySelector('.channelSection__Container__channel--tutos')
    .addEventListener('submit', function (e) {
        e.preventDefault();
        getMessages('tutos');
        currentChan = 'tutos';
        chanTitle.innerText = 'tutos';
    });

const interval = window.setInterval(function () {
    getMessages(currentChan);
    displayUsers();
}, 500);
