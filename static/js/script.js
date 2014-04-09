/* Author: YOUR NAME HERE
*/
/*
function spiderHost(host) {
  if ($('#spider').val != "")
  {
    socket.emit('spider', $('#spider').val() );
    addHost( $('#spider').val(), new Date().toISOString(), true);
  }
}
*/


$(document).ready(function() {

  var socket = io.connect();

  $('#spiderHost').click(function() {
	  startSpider();
  });

  socket.on('route', function(data) {
	  console.log(data);
    addRoute(data['type'], data['url']);
  });
  socket.on('server_message', function(data){
    $('#receiver').append('<li>' + data + '</li>');
  });


	function setHost() {
	  if($('#host').val() != "")
	  {
		  socket.emit('setHost', $('#host').val());
		  console.log('Host set to: ' +  $('#host').val());
	  }
	}
	
	function startSpider() {
		socket.emit('startSpider', $('#host').val());
		console.log('Start spidering host');
	}

	function addRoute(type, url) {
	  console.log(url);
	  $('#results-table').append('<tr><td>' + type + '</td><td>' + url + '</td></tr>');
	}
});
