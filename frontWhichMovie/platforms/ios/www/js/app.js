(function () {

    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    FilmListView.prototype.template =
            Handlebars.compile($("#film-list-tpl").html());
    FilmView.prototype.template = Handlebars.compile($("#film-tpl").html());
    Liked.prototype.template = Handlebars.compile($("#liked-tpl").html());
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
            });
        });

        // Route to a liked movie
        router.addRoute('liked', function() {
            service.done(function() {
            $('body').html(new Liked().render().$el);
            });
        });

        router.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */

    FastClick.attach(document.body);
    /* ---------------------------------- Local Functions ---------------------------------- */


}());