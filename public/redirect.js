(() => {
	const REDIRECT_PATHS = {
		'/repo/events-sathyabama/':
			'https://github.com/Events-Sathyabama/Events-Sathyabama/',
		'/video/events-sathyabama/':
			'https://www.youtube.com/watch?v=iLgYvN-qO4c&ab_channel=Surya',
		'/video/vorkinsta/':
			'https://www.youtube.com/watch?v=C60mzqOQOc4&pp=ygUJdm9ya2luc3Rh',
		'/site/events-sathyabama/': 'https://events.aryanamish.in/',
		'/site/vorkinsta/': 'https://www.vorkinsta.com/',
		'/cert/cloud-digital-leader/':
			'https://www.credential.net/56ec8bbe-a535-4aae-b6fc-603fac685ab6',
		'/cert/nptel-python/':
			'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS70S2307126109013421',
		'/cert/dev-wiz/':
			'https://certificate.givemycertificate.com/c/001a1d08-e863-4de6-9f41-b9e5774a532e',
		'/cert/nptel-python-ml/':
			'https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS11S4434181903028099',
		'/cert/codingo/':
			'https://drive.google.com/file/d/12z7n6cZeMlPuK6ueGW5fyKEDhEgBqLBp/view?usp=sharing',
	};

	let path = window.location.pathname;
	if (!path.endsWith('/')) {
		path += '/';
	}
	if (path in REDIRECT_PATHS) {
		window.location.replace(REDIRECT_PATHS[path]);
	} else if (path !== '/') {
		window.location.replace('/');
	}
})();
