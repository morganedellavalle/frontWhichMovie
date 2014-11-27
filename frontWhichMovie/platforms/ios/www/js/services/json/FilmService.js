var FilmService = function() {

    var url;

    this.initialize = function(serviceURL) {
        url = serviceURL ? serviceURL : "http://whichmovie.herokuapp.com/films";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        return $.ajax({url: url + "/" + id, contentType: "application/json; charset=utf-8"});
    }

/*    this.findByName = function(searchKey) {
        return $.ajax({url: url + "?name=" + searchKey});
    }
*/
    this.findAll = function() {
        return $.ajax({url: url, contentType: "application/json; charset=utf-8"});
    }
}