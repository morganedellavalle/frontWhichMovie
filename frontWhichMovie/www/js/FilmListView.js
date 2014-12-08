var FilmListView = function (films) {
    
    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template(films));
        return this;
    };

    this.initialize();

}