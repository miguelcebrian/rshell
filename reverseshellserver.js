var http = require('http');
var server = http.createServer(function(request, response) {});

server.listen(443, function() {
              console.log((new Date()) + ' Server listening to 443');
              });

var WebSocketServer = require('websocket').server;
wsServer = new WebSocketServer({
                               httpServer: server
                               });

wsServer.on('request', function(r){
            
            });

var connection = r.accept('echo-protocol', r.origin);
