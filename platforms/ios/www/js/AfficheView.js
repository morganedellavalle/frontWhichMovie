var AfficheView = function (film) {
    

    this.initialize = function() {
        this.$el = $('<div/>');
        this.$el.on('swiperight', '.affiche', this.likeswipe);
        this.$el.on('swipeleft', '.affiche', this.notlikeswipe);
        this.render();
    };


    this.render = function() {
      this.$el.html(this.template(film));
      return this;
    };
    this.likeswipe = function(){
        $(this).addClass('rotate-left').delay(800).fadeOut(800);
        $('.affiche').find('.status').remove();
        $(this).append('<div class="like">Like!</div>');
        window.localStorage.setItem('film', film.id);
        var x= Number(film.id)+1;
        if (x==13) {        
            setTimeout(function() {
            $('body').html(new EndView().render().$el);
            }, 800);

        }
        var params = {"like": {"user_name":localStorage.getItem("user_name")}};

        $.post("http://whichmovie.herokuapp.com/films/" + film.id + "/like.json", params, function(response){
<<<<<<< Updated upstream
=======
        //console.log(Number(response.number)-1);
>>>>>>> Stashed changes
            var array = $.map(response.other_likes, function(value, index) {
                    return [value];
            });

            var bool = false;

            for (i = 0; i < array.length; i++) {

                if (array[i].user_name==localStorage.getItem("friend_1")){
                        bool = true;
                        if(confirm("Do you wish to go with "+ array[i].user_name + " ?")){
                            var y = x-1;
                            router.load("films/"+y+"/affiche/cinemas");}
                        else{
                            router.load("films/"+x+"/affiche");
                        };
                };   
                if (array[i].user_name==localStorage.getItem("friend_2")){
                        bool = true;
                        if(confirm("Do you wish to go with "+ array[i].user_name + " ?")){
                            var y = x-1;
                            router.load("films/"+y+"/affiche/cinemas");}
                        else{
                            router.load("films/"+x+"/affiche");
                        };
                };            
            };

            if (bool==false){router.load("films/"+x+"/affiche");};
            
        });
    };



    this.notlikeswipe = function(id){
        $(this).addClass('rotate-right').delay(1000).fadeOut(1000);
        $('.buddy').find('.status').remove();
        $(this).append('<div class="dislike"> Pas Like!</div>');
        window.localStorage.setItem('film', film.id);
        var x= Number(film.id)+1;
        if (x==13) {        
            setTimeout(function() {
            $('body').html(new EndView().render().$el);
            }, 800);

        }
        else {
            setTimeout(function() {
            router.load("films/"+x+"/affiche");
            }, 800);
        }
    };



        //like sur btn
    this.likebtn = function(){
<<<<<<< Updated upstream
        window.localStorage.setItem('film', film.id);
        var x= Number(film.id)+1;
        if (x==13) {        
            setTimeout(function() {
            $('body').html(new EndView().render().$el);
            }, 800);

        }
        var params = {"like": {"user_name":localStorage.getItem("user_name")}};


        $.post("http://whichmovie.herokuapp.com/films/" + film.id + "/like.json", params, function(response){
            var array = $.map(response.other_likes, function(value, index) {
                    return [value];
            });

            var bool = false;

            for (i = 0; i < array.length; i++) {

                if (array[i].user_name==localStorage.getItem("friend_1")){
                        bool = true;
                        if(confirm("Do you wish to go with "+ array[i].user_name + " ?")){
                            var y = x-1;
                            router.load("films/"+y+"/affiche/cinemas");}
                        else{
                            router.load("films/"+x+"/affiche");
                        };
                };   
                if (array[i].user_name==localStorage.getItem("friend_2")){
                        bool = true;
                        if(confirm("Do you wish to go with "+ array[i].user_name + " ?")){
                            var y = x-1;
                            router.load("films/"+y+"/affiche/cinemas");}
                        else{
                            router.load("films/"+x+"/affiche");
                        };
                };            
            };

            if (bool==false){router.load("films/"+x+"/affiche");};
=======
    window.localStorage.setItem('film', film.id);
    console.log(film.id);
    console.log(localStorage.getItem("user_name"));
    var x= Number(film.id)+1;
    //alert("Liked");
    router.load("films/"+x+"/affiche");
    var params = {"like": {"user_name":localStorage.getItem("user_name")}};
    $.post("http://whichmovie.herokuapp.com/films/" + film.id + "/like.json", params, function(response){
        //console.log(Number(response.number)-1);
            var array = $.map(response.other_likes, function(value, index) {
                    return [value];
            });
            for (i = 0; i < array.length; i++) {
                console.log(array[i].user_name);
                console.log(localStorage.getItem("friend_1"));
                if (array[i].user_name==localStorage.getItem("friend_1")){
                        alert("There is a match with "+ array[i].user_name);
                };
           
                if (array[i].user_name==localStorage.getItem("friend_2")){
                        alert("There is a match with "+ array[i].user_name);
                };            
            };
>>>>>>> Stashed changes
            
        });
    };




    this.notlikebtn = function(id){
        window.localStorage.setItem('film', film.id);
        var x= Number(film.id)+1;
        //alert("Not Liked, this movie is rubbish anyway");
        router.load("films/"+x+"/affiche");
    };


    this.initialize();

}