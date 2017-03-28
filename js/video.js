(function() {
	var cavas = document.getElementById('canvas'),
		context = canvas.getContext('2d'),
		id = document.getElementById('video'),
		vendorUrl = window.URL || window.webkitURL;

	navigator.getMEdia = navigator.getUserMedia ||
						 navigator.webkitGetUserMedia ||
						 navigator.mozGetUserMedia ||
						 navigator.msGetUserMedia;

	navigator.getMEdia({
		video: true,
		audio: false
	}, function(stream){
		video.src = vendorUrl.createObjectURL(stream);
		video.play();
	}, function(error){

	});

	video.addEventListener('play', function() {
		draw(this, context, 400, 300);
	}, false);

	function draw(video, context, width, height) {
		context.drawImage(video, 0, 0, width, height);
		setTimeout(draw, 10, video, context, width, height);
	}
})();