var FilmView = function (film) {
    

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('swiperight', '.affiche',this.like)
        //this.$el.on('swiperight','.affiche', this.like());

        this.render();
    };

  	// this.like = function() {
   //      alert("liked");
   //  };

    this.render = function() {
      this.$el.html(this.template(film));
      return this;
  };

  this.like = function(){
  	alert("liked");
  }

    this.initialize();

}