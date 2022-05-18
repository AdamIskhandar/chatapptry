

class ChatUi {
    constructor( list ){
        this.list = list
    }

    clear(){
        this.list.innerHTML = ''
    }

    render(data){

        // const tarikh = dateFns.distanceInWordsToNow(
        //     data.create_at.toDate(), 
        //     { addSuffix : true}
        // )
        const html = `
        <li class="list-group-item">
        <span class="user">${data.user} : </span>
        <span class="message">${data.message}</span>
        </li>
        `

        this.list.innerHTML += html
    }
}