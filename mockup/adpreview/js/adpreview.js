// fungsi untuk screenshot dan download image preview

//document.querySelector('.takess').addEventListener('click', function() {
//   html2canvas(document.querySelector('.takethis'), {
//       onrendered: function(canvas) {
////                 document.body.appendChild(canvas);
//         return Canvas2Image.saveAsGIF(canvas);
//       }
//   });
//});



// fungsi upload dan replace image statis, untuk banner standar

function readURL(input) {
   if (input.files && input.files[0]) {
       var reader = new FileReader();

       reader.onload = function (e) {
           $('#displayad')
               .attr('src', e.target.result);
       };

       reader.readAsDataURL(input.files[0]);
   }
}
	


// fungsi upload dan replace video, untuk video

$(document).ready(function() {
	$("#videoSourceWrapper").show();
});
$('#uploadVideoFile').on('change', function() {
	var fileInput = document.getElementById("uploadVideoFile");
	console.log('Trying to upload the video file: %O', fileInput);
	if ('files' in fileInput) {
		if (fileInput.files.length === 0) {
			alert("Select a file to upload");
		} else {
			var $source = $('#videoSource');
			$source[0].src = URL.createObjectURL(this.files[0]);
			$source.parent()[0].load();
			$("#videoSourceWrapper").show();
			UploadVideo(fileInput.files[0]);
		}
	} else {
		console.log('No found "files" property');
	}
});

function UploadVideo(file) {
	var loaded = 0;
	var chunkSize = 500000;
	var total = file.size;
	var reader = new FileReader();
	var slice = file.slice(0, chunkSize);
	// Reading a chunk to invoke the 'onload' event
	reader.readAsBinaryString(slice);
	console.log('Started uploading file "' + file.name + '"');
	$('#uploadVideoProgressBar').show();
	reader.onload = function(e) {
		//Just simulate API
		setTimeout(function() {
			loaded += chunkSize;
			var percentLoaded = Math.min((loaded / total) * 100, 100);
			console.log('Uploaded ' + Math.floor(percentLoaded) + '% of file "' + file.name + '"');
			$('#uploadVideoProgressBar').width(percentLoaded + "%");
			//Read the next chunk and call 'onload' event again
			if (loaded <= total) {
				slice = file.slice(loaded, loaded + chunkSize);
				reader.readAsBinaryString(slice);
			} else {
				loaded = total;
				console.log('File "' + file.name + '" uploaded successfully!');
				$('#uploadVideoProgressBar').hide();
			}
		}, 250);
	}
}

function PostChunk() {
	//Send the sliced chunk to the REST API
	$.ajax({
		url: "http://api/url/etc",
		type: "POST",
		data: slice,
		processData: false,
		contentType: false,
		error: (function(errorData) {
			console.log(errorData);
			alert("Video Upload Failed");
		})
	}).done(function(e) {
		//The chunk is successfully uploaded!
		loaded += chunkSize;
		var percentLoaded = Math.min((loaded / total) * 100, 100);
		console.log('Uploaded ' + Math.floor(percentLoaded) + '% of file "' + file.name + '"');
		$('#uploadVideoProgressBar').width(percentLoaded + "%");
		//Read the next chunk and call 'onload' event again
		if (loaded <= total) {
			slice = file.slice(loaded, loaded + chunkSize);
			isFirstChunk = false;
			reader.readAsBinaryString(slice);
		} else {
			loaded = total;
			console.log('File "' + file.name + '" uploaded successfully!');
			$('#uploadVideoProgressBar').hide();
		}
	});
}