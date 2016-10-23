var header = $('section > h1');

header.on('click', function (event) {	
		if ($('main p').not('.hide')) {
			$('main p').addClass('hide');
		}
		$(event.target).next().toggleClass('hide');
		});
