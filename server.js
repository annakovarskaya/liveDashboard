'use strict';
var sqlite3 = require('sqlite3').verbose();
var dionaea    = new sqlite3.Database('dionaea.sqlite');
var maxmind = require('maxmind');

var path    = require('path');

var express = require('express');
var app = express();

app.configure(function(){
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/attacks_per_protocol', function(req, res){
    dionaea.all("select count(*) as attacks_number, count(distinct remote_host) as ip_number, connection_protocol from `connections` group by connection_protocol", function(err, attacks_per_protocol){
        res.json(attacks_per_protocol);
    });
});

app.get("/countries", function (req, res) {
    maxmind.open('GeoLite2-Country.mmdb', function(err, countryLookup){
        var geodata;
        var country;
        var country_data;
        var id;
        var attacks_per_countries = {};
        dionaea.each('select count(*) as attacks_number, remote_host from `connections` group by remote_host order by remote_host', function(err, data) {
            geodata = countryLookup.get(data.remote_host);
            if (geodata && geodata.registered_country) {
                country = geodata.registered_country;
                country_data = {
                    id: country.iso_code,
                    name: country.names.en
                }
            } else {
                country_data = {
                    id: data.remote_host,
                    name: data.remote_host
                };
            }
            id = country_data.id;
            if (attacks_per_countries[id]) {
                attacks_per_countries[id].count += 1;
            } else {
                attacks_per_countries[id] = {
                    count: 1,
                    name: country_data.name
                }
            }
        }, function(err) {
            res.json(Object.values(attacks_per_countries));
        });

    });
});

app.get('/*', function (req, res) {
        res.render("index.ejs");
});

app.listen(3000);

