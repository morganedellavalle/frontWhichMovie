(function () {

    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    FilmListView.prototype.template =
            Handlebars.compile($("#film-list-tpl").html());
    //FilmView.prototype.template = Handlebars.compile($("#film-tpl").html());
    AfficheView.prototype.template= Handlebars.compile($("#affiche-tpl").html());
    ActeursView.prototype.template= Handlebars.compile($("#acteurs-tpl").html());
    SynopsisView.prototype.template= Handlebars.compile($("#synopsis-tpl").html());
    BOView.prototype.template= Handlebars.compile($("#BO-tpl").html());
    /* ---------------------------------- Local Variables ---------------------------------- */
    var service = new FilmService();


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

            // Route to the view of a unique film
        router.addRoute('films/:id', function(id) {
            service.findById(parseInt(id)).done(function(film) {
            $('body').html(new FilmView(film).render().$el);
            //$('affiche').on("swiperight", function() { alert(“Pas Like”) });

            });
        });

            //Route to next film after a like: plus utilisée donc
        router.addRoute('films/:id/next', function(id) {
            service.findById(parseInt(id)+1).done(function(film) {
                $('body').html(new FilmView(film).render().$el);
            });
        });

        //route vers la vue affiche
        router.addRoute('films/:id/affiche',function(id) {
            service.findById(parseInt(id)).done(function(film) {
            $('body').html(new AfficheView(film).render().$el);
            $(".affiche").on('swiperight', function() {AfficheView(film).like() });
            //$(".affiche").on('swipeleft', function() {alert(“Like”) });
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
            service.findById(parseInt(id)+1).done(function(film) {
            $('body').html(new AfficheView(film).render().$el);
            });
        });         

        router.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */





    FastClick.attach(document.body);
    /* ---------------------------------- Local Functions ---------------------------------- */


}());