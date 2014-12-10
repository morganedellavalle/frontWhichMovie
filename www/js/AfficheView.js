var AfficheView = function (film) {
    

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('swiperight', '.affiche', this.notlikeswipe);
        this.$el.on('swipeleft', '.affiche', this.likeswipe);
        this.render();
    };


    this.render = function() {
      this.$el.html(this.template(film));
      return this;
    };

    this.likeswipe = function(){
    $(this).addClass('rotate-right').delay(800).fadeOut(800);
    $('.affiche').find('.status').remove();
    $(this).append('<div class="like">Like!</div>');
    window.localStorage.setItem('film', film.id);
    console.log(film.id);
    console.log(localStorage.getItem("user_name"));
    var x= Number(film.id)+1;
    setTimeout(function() {
        router.load("films/"+x+"/affiche");
        }, 800);
    var params = {"like": {"user_name":localStorage.getItem("user_name")}};
    $.post("" + film.id + "/like.json", params)
    console.log($.post("http://whichmovie.herokuapp.com" + film.id + "/like.json", params));
    };
    



    this.notlikeswipe = function(id){
    $(this).addClass('rotate-left').delay(1000).fadeOut(1000);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="dislike">Like!</div>');
    window.localStorage.setItem('film', film.id);
    console.log(film.id);
    console.log(localStorage.getItem("user_name"));
    var x= Number(film.id)+1;
    setTimeout(function() {
        router.load("films/"+x+"/affiche");
        }, 1000);
    };



        //like sur btn
    this.likebtn = function(){
    window.localStorage.setItem('film', film.id);
    console.log(film.id);
    console.log(localStorage.getItem("user_name"));
    var x= Number(film.id)+1;
    //alert("Liked");
    router.load("films/"+x+"/affiche");
    var params = {"like": {"user_name":localStorage.getItem("user_name")}};
    $.post("http://localhost:3000/films/" + film.id + "/like.json", params)
    console.log($.post("http://localhost/films/" + film.id + "/like.json", params));
    };



    this.notlikebtn = function(id){
    window.localStorage.setItem('film', film.id);
    console.log(film.id);
    console.log(localStorage.getItem("user_name"));
    var x= Number(film.id)+1;
    //alert("Not Liked, this movie is rubbish anyway");
    router.load("films/"+x+"/affiche");
    };


    this.initialize();

}