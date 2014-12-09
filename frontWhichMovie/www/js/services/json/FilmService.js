var FilmService = function() {

    var url;

    this.initialize = function(serviceURL) {
        url = serviceURL ? serviceURL : "http://whichmovie.herokuapp.com/films";
        var deferred = $.Deferred();
        deferred.resolve();
        return deferred.promise();
    }

    this.findById = function(id) {
        return $.getJSON(url + "/" + id + ".json");
    }

/*    this.findByName = function(searchKey) {
        return $.ajax({url: url + "?name=" + searchKey});
    }
*/
    this.findAll = function() {
        return $.getJSON(url + ".json");
    }


    this.likeById = function(id, user_name) {
        var params = {"like": {"name":user_name}};
        return $.post(url + "/" + id + "/like.json", params);
    }


}