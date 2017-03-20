//Router.route("/index");
Router.route("/main");
Router.route("/home");



Router.route('/', function () {
  this.render('main', {
    data: function () { return Items.findOne({_id: this.params._id}); }
  });
});
