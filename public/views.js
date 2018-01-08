var indexControlsView = Backbone.View.extend({
    tagName: "div",
    className: "nav nav-pills",
    template: JST.indexControls,
    initialize: function (options) {
        this.nav = options.nav;
    },
    events: {
        'click a[href="/countries"]': 'countries'
    },
    render: function () {
        this.el.innerHTML = this.template();
        return this;
        },
    countries: function (evt) {
        evt.preventDefault();
        this.nav("countries", { trigger: true });
    }
});
var indexHead = Backbone.View.extend({
    tagName: "h2",
    template: JST.indexHead,
    initialize: function (options) {
        this.nav = options.nav;
    },
    render: function () {
        this.el.innerHTML = this.template();
        return this;
    }
});

var attacksPerProtocolView = Backbone.View.extend({
    tagName: "div",
    className: "table-responsive",
    template: JST.attacks_per_protocol,
    initialize: function (options) {
        this.nav = options.nav;
        this.listenTo(this.collection, 'add', this.render);
        this.collection.refresh(this);
    },
    render: function () {
        this.el.innerHTML = this.template();
        this.renderRows();
        return this;
        },
    renderRows: function () {
        this.collection.forEach(this.addRow, this);
        },
    addRow: function (attack_per_protocol) {
        this.$("tbody").append(new attackPerProtocolView({
            model: attack_per_protocol,
            nav: this.nav
        }).render().el);
    }
});

var attackPerProtocolView = Backbone.View.extend({
    tagName: "tr",
    template: JST.attack_per_protocol,
    initialize: function (options) {
        this.nav = options.nav;
    },
    render: function () {
        this.el.innerHTML = this.template(this.model.toJSON());
        return this;
    }
});

var attacksPerCountriesControlsView = Backbone.View.extend({
    tagName: "div",
    className: "nav nav-pills",
    template: JST.countriesControls,
    initialize: function (options) {
        this.nav = options.nav;
    },
    events: {
        'click a[href="/"]': 'index'
    },
    render: function () {
        this.el.innerHTML = this.template();
        return this;
    },
    index: function (evt) {
        evt.preventDefault();
        this.nav("/", { trigger: true });
    }
});
var attacksPerCountryHead = Backbone.View.extend({
    tagName: "h2",
    template: JST.attacksPerCountryHead,
    initialize: function (options) {
        this.nav = options.nav;
    },
    render: function () {
        this.el.innerHTML = this.template();
        return this;
    }
});

var attacksPerCountriesView = Backbone.View.extend({
    tagName: "div",
    className: "table-responsive",
    template: JST.attacks_per_countries,
    initialize: function (options) {
        this.nav = options.nav;
        this.listenTo(this.collection, 'add', this.render);
        this.collection.refresh(this);
    },
    render: function () {
        this.el.innerHTML = this.template();
        this.renderRows();
        return this;
    },
    renderRows: function () {
        this.collection.forEach(this.addRow, this);
    },
    addRow: function (attacks_per_country) {
        this.$("tbody").append(new attacksPerCountryView({
            model: attacks_per_country,
            nav: this.nav
        }).render().el);
    }
});

var attacksPerCountryView = Backbone.View.extend({
    tagName: "tr",
    template: JST.attacks_per_country,
    initialize: function (options) {
        this.nav = options.nav;
    },
    render: function () {
        this.el.innerHTML = this.template(this.model.toJSON());
        return this;
    }
});