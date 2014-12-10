
var BOView = function (film) {
    

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('swiperight', '.trailer', this.like);
        this.$el.on('swipeleft', '.trailer', this.notlike);
        this.render();
    };


    this.render = function() {
      this.$el.html(this.template(film));
      return this;
  };

  this.like = function(){
    window.localStorage.setItem('film', film.id);
    console.log(film.id);
    console.log(localStorage.getItem("user_name"));
    var x= Number(film.id)+1;
    alert("Liked");
    router.load("films/"+x+"/affiche");
    // $.post( "http://whichmovie.herokuapp.com/films/"+film.id , {"like": {"user_name": localStorage.getItem("name")} });
  };


  this.notlike = function(id){
    window.localStorage.setItem('film', film.id);
    console.log(film.id);
    console.log(localStorage.getItem("user_name"));
    var x= Number(film.id)+1;
    alert("Not Liked, this movie is rubbish anyway");
    router.load("films/"+x+"/affiche");
  };

    this.initialize();

}