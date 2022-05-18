const senarai = document.querySelector('.chat-list');
const mesejBaru = document.querySelector('.new-chat');
const namaBaru = document.querySelector('.new-name');
const tukarRoom = document.querySelector('.chat-rooms');
const mesejNamaUpdate = document.querySelector('.update-mssg')

// update chat
mesejBaru.addEventListener( 'submit' , e => {
    e.preventDefault();

    const mesej = mesejBaru.message.value.trim();

    console.log( mesej )

    chatroom.addChat( mesej )
    .then( () => mesejBaru.reset())
    .catch( err => console.log( err))
})

//update name
namaBaru.addEventListener('submit', e => {
    e.preventDefault();

    const nama = namaBaru.name.value.trim();

    console.log( nama )

    chatroom.updateUser(nama);

    namaBaru.reset();

    mesejNamaUpdate.innerHTML = `You nama has update to : ${nama}`
    setTimeout( () => mesejNamaUpdate.innerHTML = '', 2000)

})

// update room

tukarRoom.addEventListener('click', e => {
    e.preventDefault();

    if( e.target.tagName === 'BUTTON'){
        chatUi.clear();
        chatroom.updateRoom( e.target.getAttribute('id'));
        chatroom.getChats( chat => chatUi.render( chat ))
    }
})


// check kalau localstorage ada nama atau tak
const nama = localStorage.nama ? localStorage.nama : 'Anonymous'



//class intances
const chatUi = new ChatUi(senarai)
const chatroom = new Chatroom( 'general', nama)
chatroom.getChats( data => {
    chatUi.render( data )
})