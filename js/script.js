 new Vue ({
    el: '#root',
    data: {
        contacts: [
            {
            name: 'Michele',
            avatar: '_1',
            utenti: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'inviato'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di stendere i panni',
            status: 'inviato'
            },
            {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'ricevuto'
            }
            ],
            },
            {
            name: 'Fabio',
            avatar: '_2',
            utenti: true,
            messages: [
            {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'inviato'
            },
            {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'ricevuto'
            },
            {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'inviato'
            }
            ],
            },
            {
            name: 'Samuele',
            avatar: '_3',
            utenti: true,
            messages: [
            {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'ricevuto'
            },
            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'inviato'
            },
            {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'ricevuto'
            }
            ],
            },
            {
            name: 'Alessandro B.',
            avatar: '_4',
            utenti: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'inviato'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'ricevuto'
            }
            ],
            },
            {
            name: 'Alessandro L.',
            avatar: '_5',
            utenti: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ricordati di chiamare la nonna',
            status: 'inviato'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Va bene, stasera la sento',
            status: 'ricevuto'
            }
            ],
            },
            {
            name: 'Claudia',
            avatar: '_6',
            utenti: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao Claudia, hai novità?',
            status: 'inviato'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Non ancora',
            status: 'ricevuto'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'Nessuna nuova, buona nuova',
            status: 'inviato'
            }
            ],
            },
            {
            name: 'Federico',
            avatar: '_7',
            utenti: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Fai gli auguri a Martina che è il suo compleanno!',
            status: 'inviato'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'Grazie per avermelo ricordato, le scrivo subito!',
            status: 'ricevuto'
            }
            ],
            },
            {
            name: 'Davide',
            avatar: '_8',
            utenti: true,
            messages: [
            {
            date: '10/01/2020 15:30:55',
            message: 'Ciao, andiamo a mangiare la pizza stasera?',
            status: 'ricevuto'
            },
            {
            date: '10/01/2020 15:50:00',
            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
            status: 'inviato'
            },
            {
            date: '10/01/2020 15:51:00',
            message: 'OK!!',
            status: 'ricevuto'
            }
            ],
            }
        ],
        chat: 0,
        nuovo_messaggio: '',
        ricerca: '',
        nome_filtrato: '',
    },
    methods: {
        selezioneChat(index){
            this.chat = index;
        },
        invioMesaggio(){
            if(this.nuovo_messaggio.trim()) {
                let messaggioObj = {
                    date: 'da vedere',
                    message: this.nuovo_messaggio.trim(),
                    status: 'inviato',
                }
                this.contacts[this.chat].messages.push(messaggioObj);
                this.nuovo_messaggio = '';
                setTimeout(this.receiveMsg, 1000);
            }
        },
        ricezioneMesaggio(){
            let messaggioObj = {
                date: 'da vedere',
                message: 'Ok',
                status: 'ricevuto',
            }
            this.contacts[this.chat].messages.push(messaggioObj);
        },
        cercaContatto(){
            for(let i=0; i<this.contacts.length; i++){
                if(this.ricerca === this.contacts[i].name.slice(0, this.ricerca.length)){
                    this.contacts[i].utenti = true
                }
                else{
                    this.contacts[i].utenti = false
                }
            }
        },
        Filtro() {
            this.contacts.forEach((ele, i) => {
                if (!this.contacts[i].name.toLowerCase().includes(this.nome_filtrato.toLowerCase())){
                    this.contacts[i].utenti = false;
                } else {
                    this.contacts[i].utenti = true
                }
            });
        }
    },
    
});
