var FilmListView = function (service) {
	var films;

    this.initialize = function() {
    this.$el = $('<div/>');
    //this.$el.on(this.findAll);
    this.findAll();
    this.render();
    };



    this.findAll= function(){
    service.findAll().done(function(data) {
            films = data;
            console.log("films :", films);
        });

    }

    this.render = function() {
        this.$el.html(this.template(films));
        return this;
    };

    this.initialize();

}