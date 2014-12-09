var AfficheView = function (film) {
    

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('swiperight', '.affiche', this.like);
        this.$el.on('swipeleft', '.affiche', this.notlike);
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
    //$.post( "http://whichmovie.herokuapp.com/films/"+film.id , {"like": {"user_name": localStorage.getItem("name")} });
    var params = {"like": {"user_name":localStorage.getItem("user_name")}};
    console.log($.post("http://whichmovie.herokuapp.com/films/" + film.id + "/like.json", params));
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