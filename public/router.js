var AppRouter = Backbone.Router.extend({
    initialize: function (options) {
        this.main = options.main;
        this.attacks_per_protocol = options.attacks_per_protocol;
        this.attacks_per_countries = options.attacks_per_countries;
        this.nav = this.navigate.bind(this);
        },
    routes: {
        '': 'index',
        'countries':'countries'
    },
    index: function () {
        var ih = new indexHead({
            nav: this.nav
        }),
            cv = new indexControlsView({
            nav: this.nav
        }),
        av = new attacksPerProtocolView({
            collection: this.attacks_per_protocol,
            nav: this.nav
        });
        this.main.html(cv.render().el);
        this.main.append(ih.render().el);
        this.main.append(av.render().el);
    },
    countries: function () {
        var ch = new attacksPerCountryHead({
                nav: this.nav
            }),
            ccv = new attacksPerCountriesControlsView({
                nav: this.nav
            }),
            acv = new attacksPerCountriesView({
                collection: this.attacks_per_countries,
                nav: this.nav
            });
        this.main.html(ccv.render().el);
        this.main.append(ch.render().el);
        this.main.append(acv.render().el);
     }
});