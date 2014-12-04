// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    console.log("Coucou from app.js");
    HomeView.prototype.template = Handlebars.compile($("#home-tpl").html());
    FilmListView.prototype.template =
            Handlebars.compile($("#film-list-tpl").html());
    /* ---------------------------------- Local Variables ---------------------------------- */

    //var filmListTpl = Handlebars.compile($("#film-list-tpl").html());
    var service = new FilmService();
    //var films;


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
        // router.addRoute( '', function() {
        //     service.findAll().done(function() {
        //         $('body').html(new FilmListView(service).render().$el);
        //      });
        // });
        //service.findAll().done(function(data) {
            //films = data;
            //console.log("films :", films);
            //console.log("show you are here");
        //});
    //    renderHomeView();
        router.start();
    });

    /* --------------------------------- Event Registration -------------------------------- */
    // $('.search-key').on('keyup', findByName);
    // $('.help-btn').on('click', function() {
    //     alert("Employee Directory v3.4");
    // });


    // $('.btn-primary').on('click', function() {
    //     console.log("coucou");
    //     $('body').html(new FilmListView(service).render().$el);
    // });

    FastClick.attach(document.body);
    /* ---------------------------------- Local Functions ---------------------------------- */
    // function renderHomeView() {
    // $('body').html(homeTpl());
    // //$('.search-key').on('keyup', findByName);
    // }
    // function findByName() {
    //     service.findByName($('.search-key').val()).done(function (employees) {
    //         var l = employees.length;
    //         var e;
    //         $('.employee-list').empty();
    //         for (var i = 0; i < l; i++) {
    //             e = employees[i];
    //             $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
    //         }
    //     });
    // }

}());