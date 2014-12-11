var CinemaService = function() {

    var url;

    this.initialize = function(serviceURL) {
        url = serviceURL ? serviceURL : "http://whichmovie.herokuapp.com/cinemas";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        return $.getJSON(url + "/" + id + ".json");
    }

    this.findAll = function() {
        return $.getJSON(url + ".json");
    }

}