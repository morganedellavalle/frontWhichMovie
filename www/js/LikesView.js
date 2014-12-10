var LikesView = function (likes) {
    
    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template(likes));
        return this;
    };

    this.initialize();

}