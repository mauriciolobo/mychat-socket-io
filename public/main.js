var socket = io();


var app = new Vue({
    el: "#app",
    data: {
        title: "My Chatting",
        users: [],
        conversation: [],
        message: '',
        user: null,
        typedUser: ''
    },
    mounted: function () {
        var self = this;
        socket.on('message', function (c) {
            console.log('MESSAGE RECEIVED:');
            console.log(c);
            console.log('--------------');

            switch (c.type) {
                case 'update users':
                    self.users = c.users;
                    if(c.user)
                        self.addMessage(c.user, `User '${c.user.name}' entered...`);
                    else
                        self.addMessage(c.userleave, `User '${c.userleave.name}' has leaved...`);
                    break;
                case 'message':
                    self.addMessage(c.data.user, c.data.message);
                    break;
                default:
                    console.log(c);
            }

        });
    },
    computed: {
        reversedConversation() {
            return this.conversation.slice().reverse();
        }
    },
    methods: {
        send() {
            var user = this.user;
            var message = this.message;
            socket.emit('message', {
                type: 'message',
                data: {
                    user,
                    message
                }
            });            
        },
        join() {
            this.user = {
                name: this.typedUser
            };
            this.message = `User ${this.user.name} entered`;
            socket.emit('add user', this.user);
        },
        addMessage(user, message) {
            var senton = Date.now();
            var c = {
                user,
                message,
                senton
            };
            this.conversation.push(c);
            console.log(this.conversation);
            this.message = '';
        }
    },
    filters: {
        fromNow: function (value) {
            return moment(value).fromNow();
        }
    }
});