var socket = io();

var app = new Vue({
    el: "#app",
    data: {
        title: "My Chatting",
        users: [],
        conversation: [],
        message: '',
        user:null,
        typedUser: ''
    },
    mounted: function () {
        
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
            var senton = Date.now();
            this.conversation.push({
                user,
                message,
                senton
            });
            this.message = '';
        },
        enter(){
            this.user = { name: this.typedUser};
            this.users.push(this.user);
            this.message = `User ${this.user.name} entered`;
            this.send();
        }
    },
    filters: {
        fromNow: function (value) {
            return moment(value).fromNow();
        }
    }
});