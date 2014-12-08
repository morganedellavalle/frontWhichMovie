var AfficheView = function (film) {
    

    this.initialize = function() {
        this.$el = $('<div/>');
        //this.$el.on('swiperight', '.affiche',this.like)
        this.render();
    };


    this.render = function() {
      this.$el.html(this.template(film));
      return this;
  };

  this.like = function(id){
  	window.localStorage.setItem('film', id);
    console.log(id);
    alert("Liked");
  }


  this.notlike = function(id){

    console.log('id');
    alert("Unliked");
  }


    this.initialize();

}