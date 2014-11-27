// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {

    console.log("Coucou from app.js");
    /* ---------------------------------- Local Variables ---------------------------------- */
    var homeTpl = Handlebars.compile($("#home-tpl").html());
    var service = new FilmService();
    service.initialize().done(function () {
        console.log("Service initialized Coucou 1!")
        renderHomeView();
        console.log("Service initialized Coucou !");
        var films = service.findAll();
    });

    /* --------------------------------- Event Registration -------------------------------- */
    // $('.search-key').on('keyup', findByName);
    // $('.help-btn').on('click', function() {
    //     alert("Employee Directory v3.4");
    // });

    FastClick.attach(document.body);
    /* ---------------------------------- Local Functions ---------------------------------- */
    function renderHomeView() {
    $('body').html(homeTpl());
    //$('.search-key').on('keyup', findByName);
    }
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