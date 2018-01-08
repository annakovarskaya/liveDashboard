this["JST"] = this["JST"] || {};

this["JST"]["attack_per_protocol"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td>' +
((__t = (attacks_number)) == null ? '' : __t) +
'</td>\r\n<td>' +
((__t = (ip_number)) == null ? '' : __t) +
'</td>\r\n<td>' +
((__t = (connection_protocol)) == null ? '' : __t) +
'</td>\r\n';

}
return __p
};

this["JST"]["attacks_per_countries"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<thead>\r\n<tr>\r\n    <th data-field="count">Count</th>\r\n    <th data-field="name">Country</th>\r\n\r\n</tr>\r\n</thead>\r\n<tbody></tbody>';

}
return __p
};

this["JST"]["attacks_per_country"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<td>' +
((__t = (count)) == null ? '' : __t) +
'</td>\r\n<td>' +
((__t = (name)) == null ? '' : __t) +
'</td>\r\n\r\n';

}
return __p
};

this["JST"]["attacks_per_protocol"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<table class="table table-striped" data-pagination="true" data-search="true" data-toggle="table">\r\n<thead>\r\n    <tr>\r\n        <th data-sortable="true" data-field="attacks_number">Attacks Number</th>\r\n        <th data-sortable="true" data-field="ip_number">IP Number</th>\r\n        <th data-sortable="true" data-field="connection_protocol">Protocol</th>\r\n    </tr>\r\n</thead>\r\n<tbody></tbody>\r\n</table>';

}
return __p
};

this["JST"]["attacksPerCountryHead"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'Number of attacks per countries';

}
return __p
};

this["JST"]["countriesControls"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav class="navbar navbar-default">\r\n    <div class="container-fluid">\r\n        <ul class="nav navbar-nav">\r\n            <li><a href="/">Number of connections per protocol and number of IP observed per protocols</a></li>\r\n        </ul>\r\n    </div>\r\n</nav>';

}
return __p
};

this["JST"]["indexControls"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<nav class="navbar navbar-default">\r\n    <div class="container-fluid">\r\n        <ul class="nav navbar-nav">\r\n            <li><a href="/countries">Number of attacks per countries</a></li>\r\n        </ul>\r\n    </div>\r\n</nav>';

}
return __p
};

this["JST"]["indexHead"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += 'Number of connections per protocol and number of IP observed per protocols';

}
return __p
};