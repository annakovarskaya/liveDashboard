var AttackPerProtocol = Backbone.Model.extend({});
var AttacksPerProtocol = Backbone.Collection.extend({
    model: AttackPerProtocol,
    url: '/attacks_per_protocol',
    initialize: function (models, options) {
        this.wait = (options && options.wait) || 10000;
        },
    refresh: function (view) {
        this.fetch();
        setTimeout(this.refresh.bind(this), this.wait);
    }

});

var AttackPerCountry = Backbone.Model.extend({});
var AttacksPerCountries = Backbone.Collection.extend({
    model: AttackPerCountry,
    url: '/countries',
    initialize: function (models, options) {
        this.wait = (options && options.wait) || 10000;
    },
    refresh: function (view) {
        this.fetch();
        setTimeout(this.refresh.bind(this), this.wait);
    }

});