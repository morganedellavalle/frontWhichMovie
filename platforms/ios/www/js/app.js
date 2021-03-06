(function () {

    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    FilmListView.prototype.template =
            Handlebars.compile($("#film-list-tpl").html());
    //FilmView.prototype.template = Handlebars.compile($("#film-tpl").html());
    AfficheView.prototype.template= Handlebars.compile($("#affiche-tpl").html());
    ActeursView.prototype.template= Handlebars.compile($("#acteurs-tpl").html());
    SynopsisView.prototype.template= Handlebars.compile($("#synopsis-tpl").html());
    BOView.prototype.template= Handlebars.compile($("#BO-tpl").html());
    LikesView.prototype.template= Handlebars.compile($("#likes-tpl").html());
    CinemaListView.prototype.template= Handlebars.compile($("#cinema-list-tpl").html());
    EndView.prototype.template= Handlebars.compile($("#end-tpl").html());

    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new FilmService();
    var servicecine = new CinemaService();

    servicecine.initialize().done(function () {

        router.addRoute('films/:id/affiche/cinemas', function() {
            servicecine.findAll().done(function(cinemas) {
                $('body').html(new CinemaListView(cinemas).render().$el);
            });
        });


    });

    service.initialize().done(function () {

        // Ici on cree la route de la Home
        router.addRoute('', function() {
             $('body').html(new HomeView().render().$el);
        });

        // Ici on cree la route de la liste de films
        router.addRoute('films', function() {
            // on commence par aller tous les chercher, et une fois que c'est bon on charge la liste
            service.findAll().done(function(films) {
                $('body').html(new FilmListView(films).render().$el);
            });
        });



        //route vers la vue affiche
        router.addRoute('films/:id/affiche',function(id) {
            service.findById(parseInt(id)).done(function(film) {
            $('body').html(new AfficheView(film).render().$el);
            //$(".affiche").on('swiperight', function() { $('body').html(new AfficheView(film).router.load("films/7").$el); });
            });
        });

        //route vers la vue acteurs
        router.addRoute('films/:id/acteurs',function(id) {
            service.findById(parseInt(id)).done(function(film) {
            $('body').html(new ActeursView(film).render().$el);
            });
        });

        //route vers la vue synopsis
        router.addRoute('films/:id/synopsis',function(id) {
            service.findById(parseInt(id)).done(function(film) {
            $('body').html(new SynopsisView(film).render().$el);
            });
        });

        //route vers la vue BOP
        router.addRoute('films/:id/BO',function(id) {
            service.findById(parseInt(id)).done(function(film) {
            $('body').html(new BOView(film).render().$el);
            });
        });

        //Next affiche
        router.addRoute('films/:id/affiche/next', function(id) {
             console.log(films.length);
            service.findById(parseInt(id)+1).done(function(film) {
            $('body').html(new AfficheView(film).render().$el);
            });
        });
        //Nextaffiche si like par boutton

        router.addRoute('films/:id/affiche/nextliked', function(id) {
            if (id == 12) {
                $('body').html(new EndView().render().$el);
            }
            else { service.findById(parseInt(id)).done(function(film) {
                $('body').html(new AfficheView(film).likebtn());
                });
            }

        });

        //Nextaffiche si not like boutton
        router.addRoute('films/:id/affiche/nextnotliked', function(id) {
            if (id == 12) {
                $('body').html(new EndView().render().$el);
                }
                else { service.findById(parseInt(id)).done(function(film) {
                    $('body').html(new AfficheView(film).notlikebtn());
                    });
                }

             
        }); 

        //view vers les likes
        router.addRoute('films/:id/likes',function(id) {
            service.likesById(parseInt(id)).done(function(likes,id) {
                $('body').html(new LikesView(likes,parseInt(id)).render().$el);
            });
            console.log(id);

        }); 


        router.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */




    FastClick.attach(document.body);
    /* ---------------------------------- Local Functions ---------------------------------- */


}());