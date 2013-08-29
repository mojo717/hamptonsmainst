$(document).on('pageshow', '#videoPage', function(video) {
	var videoFileID = getUrlVars()['videoFileID'];
	showVideo(videoFileID);
});

function showVideo(videoFileID) {
	
	//var videoFileID = getUrlVars()['videoFileID'];
	
	//var videoFileID = '26125';
	cururl=serviceURL + 'getvideo.php?videoFileID='+videoFileID;
	//alert('cururl=' + cururl);
	$.getJSON(cururl, function(data){
		$('#actionlist li').remove();
		videos = data.items;
		var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		$.each(videos, function(index, curvideo) {
			//alert('title=' + curvideo.title);
			$('#fileName').text(curvideo.fileName);
			$('#fileEmbed').text(curvideo.fileEmbed);
			$('#fileCopy').text(curvideo.fileCopy);
			$('#url').text(curvideo.url);
			$('#embedcode').html('<iframe id="myframe" src="' + curvideo.url + '?autoplay=1&portrait=0&byline=0" width="500" height="281" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>');
			//$('#actionlist').append('<li data-theme="a">something</li>');
		})
		//$('#actionlist').listview('refresh');
		//$('#actionlist').fadeIn('slow');
	});
}

