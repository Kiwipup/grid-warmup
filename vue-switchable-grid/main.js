let app = new Vue({

    el: "#app",

    data: {
        show: 'grid',
        apiRequest: new XMLHttpRequest(),
        gifs: {},


    },

    computed: {

        showGrid: function () {
            return this.show == 'grid';
        },

        showList: function () {
            return this.show == 'list';
        }

    },

    created: function () {


        // Format a url
        let url = "http://api.giphy.com/v1/gifs/search?q=cats&api_key=EwpBpVK44KNZbogrclYKVTcoXwhFEEzF&limit=5";


          fetch(url)
            .then(response => {
              return response.json();
            })
            .then(json => {
              this.onSuccess(json);
            })
            .catch(err => {
              console.log(err);
            });

        // Fetch from the url
        /*this.apiRequest.onload = this.onSuccess;
        this.apiRequest.onerror = this.onError;
        this.apiRequest.open('get', url, true);
        // apiRequest.setRequestHeader('x-api-key', 'your-key-here');
        this.apiRequest.send();*/

    },

    methods: {

        pickGrid: function () {
            this.pickView('grid');
        },

        pickList: function () {
            this.pickView('list');
        },

        pickView: function (style) {
            this.show = style;
        },

        onError: function () {
            console.log("oops!");
        },

        onSuccess: function (json) {

          /*this.gifs = json.data
  .map(gifs => gif.id)
  .map(gifId => {
    return `https://media.giphy.com/media/${gifId}/giphy.gif`;
});*/

              this.gifs = json.data
              console.log(this.gifs);

        }

    }

});
