var mockusers = [{
        id: 1,
        first_name: "Scarface",
        last_name: "Don",
        email: "sdon0@globo.com",
        gender: "Male"
    },
    {
        id: 2,
        first_name: "Mauricio",
        last_name: "Penddreth",
        email: "mpenddreth1@npr.org",
        gender: "Male"
    },
    {
        id: 3,
        first_name: "Renaud",
        last_name: "Sabbatier",
        email: "rsabbatier2@g.co",
        gender: "Male"
    },
    {
        id: 4,
        first_name: "Gaby",
        last_name: "Attrill",
        email: "gattrill3@bizjournals.com",
        gender: "Male"
    },
    {
        id: 5,
        first_name: "Eleanora",
        last_name: "Purshouse",
        email: "epurshouse4@forbes.com",
        gender: "Female"
    },
    {
        id: 6,
        first_name: "Gabi",
        last_name: "Choak",
        email: "gchoak5@trellian.com",
        gender: "Male"
    },
    {
        id: 7,
        first_name: "Hilary",
        last_name: "Geerits",
        email: "hgeerits6@buzzfeed.com",
        gender: "Male"
    },
    {
        id: 8,
        first_name: "Chucho",
        last_name: "Applin",
        email: "capplin7@google.ru",
        gender: "Male"
    },
    {
        id: 9,
        first_name: "Tedda",
        last_name: "Thunderman",
        email: "tthunderman8@independent.co.uk",
        gender: "Female"
    },
    {
        id: 10,
        first_name: "Lyndell",
        last_name: "Rosser",
        email: "lrosser9@intel.com",
        gender: "Female"
    },
    {
        id: 11,
        first_name: "Chicky",
        last_name: "Tester",
        email: "ctestera@theguardian.com",
        gender: "Female"
    },
    {
        id: 12,
        first_name: "Robenia",
        last_name: "Tanfield",
        email: "rtanfieldb@mozilla.org",
        gender: "Female"
    },
    {
        id: 13,
        first_name: "Joy",
        last_name: "Lett",
        email: "jlettc@google.ru",
        gender: "Female"
    },
    {
        id: 14,
        first_name: "Patin",
        last_name: "Sopper",
        email: "psopperd@digg.com",
        gender: "Male"
    },
    {
        id: 15,
        first_name: "Petr",
        last_name: "Dudney",
        email: "pdudneye@nps.gov",
        gender: "Male"
    },
    {
        id: 16,
        first_name: "Janene",
        last_name: "Cawker",
        email: "jcawkerf@redcross.org",
        gender: "Female"
    },
    {
        id: 17,
        first_name: "Abel",
        last_name: "Heddan",
        email: "aheddang@freewebs.com",
        gender: "Male"
    },
    {
        id: 18,
        first_name: "Cooper",
        last_name: "Delmage",
        email: "cdelmageh@163.com",
        gender: "Male"
    },
    {
        id: 19,
        first_name: "Teena",
        last_name: "Priddy",
        email: "tpriddyi@jalbum.net",
        gender: "Female"
    },
    {
        id: 20,
        first_name: "Issie",
        last_name: "McElwee",
        email: "imcelweej@epa.gov",
        gender: "Female"
    }
];

var socket = io();

var app = new Vue({
    el: "#app",
    data: {
        title: "My Chatting",
        users: [],
        conversation: [],
        message: ''
    },
    mounted: function () {
        this.users = [...mockusers];
        this.conversation = [];
    },
    computed: {
        reversedConversation() {
            return this.conversation.slice().reverse();
        }
    },
    methods: {
        send() {
            var user = mockusers[0];
            var message = this.message;
            var senton = Date.now();
            this.conversation.push({
                user,
                message,
                senton
            });
            this.message = '';
        }
    },
    filters: {
        fromNow: function (value) {
            return moment(value).fromNow();
        }
    }
});