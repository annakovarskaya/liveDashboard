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
__p += '<thead>\r\n    <tr>\r\n        <th data-field="attacksNumber">Attacks Number</th>\r\n        <th data-field="ipNumber">IP Number</th>\r\n        <th data-field="protocol">Protocol</th>\r\n    </tr>\r\n</thead>\r\n<tbody></tbody>';

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

this["JST"]["indexControls"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<a href="/countries"> Number of attacks per countries </a>';

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