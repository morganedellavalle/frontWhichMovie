var LikesView = function (likes,id) {
    
    this.initialize = function() {
        this.$el = $('<div/>');
        this.render();
    };

    this.render = function() {
        this.$el.html(this.template(likes,id));
        return this;
    };

    this.initialize();

}