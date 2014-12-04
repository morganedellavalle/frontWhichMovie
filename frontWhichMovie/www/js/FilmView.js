var FilmView = function (film) {
    

    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };


    this.render = function() {
      this.$el.html(this.template(film));
      return this;
  };

    this.initialize();

}