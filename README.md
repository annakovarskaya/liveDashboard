# liveDashboard
Test task
Live dashboard for Dioanea honeypot. 
You need to run 'npm install' in the root of project. 
You should add 'dionaea.sqlite' file to the root because there is no possibility to commit such big files to the gitHub.

I've implemented it with NodeJs and Express from the server side and Backbone.js, EJS, Underscore.js, jQuery, Bootstrap from the client side.

It consists of 2 pages :
1. Number of connections per protocol and number of IP observed per protocols. 
2. Number of attacks per countries.

Both of them refresh alive.

