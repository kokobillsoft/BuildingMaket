import DefaultTemplate from '../../templates/default';


export default {
    name: 'HomePage',
    components: {
        DefaultTemplate
    },
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        handleClick: function() {
            alert(this.msg);
        }
    }
}
