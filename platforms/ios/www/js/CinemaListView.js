var CinemaListView = function (cinemas) {
    
    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template(cinemas));
        return this;
    };

    this.initialize();

}