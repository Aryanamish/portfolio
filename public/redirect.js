(() => {
	const REPO = {
		'/repo/events-sathyabama/':
			'https://github.com/Events-Sathyabama/Events-Sathyabama/',
		'/repo/songstreamhub/': 'https://github.com/Surya-Kumar-03/SongStreamHub',
		'/repo/property-booking-system/':
			'https://github.com/Surya-Kumar-03/Property-Booking-System',
		'/repo/steganography/': 'https://github.com/Aryanamish/Steganography',
		'/repo/dev_wiz_hackthon/': 'https://github.com/Aryanamish/dev_wiz_hackthon',
		'/repo/coupontouch/': 'https://github.com/Coupon-Touch/CouponTouch',
	};
	const VIDEO = {
		'/video/events-sathyabama/':
			'https://www.youtube.com/watch?v=iLgYvN-qO4c&ab_channel=Surya',
		'/video/vorkinsta/':
			'https://www.youtube.com/watch?v=C60mzqOQOc4&pp=ygUJdm9ya2luc3Rh',
		'/video/coupontouch/': 'https://www.youtube.com/watch?v=wkW-eVtYuUc',
	};
	const SITE = {
		'/site/events-sathyabama/': 'https://events.aryanamish.in/',
		'/site/vorkinsta/': 'https://www.vorkinsta.com/',
		'/site/property-booking-system/': 'https://hotel-rental.onrender.com/login',
		'/site/steganography/': 'https://aryanamish.github.io/Steganography/',
		'/site/coupontouch/': 'https://coupon-touch.vercel.app/albayan',
	};

	const CERT = {
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

	const PROFILES = {
		'/profile/codechef/': 'https://www.codechef.com/users/aryan_amish',
		'/profile/leetcode/': 'https://leetcode.com/aryanamish/',
		'/profile/GeeksForGeeks/': 'https://auth.geeksforgeeks.org/user/aryanamish/',
	};
	const REDIRECT_PATHS = {
		video: VIDEO,
		repo: REPO,
		site: SITE,
		cert: CERT,
		profiles: PROFILES,
	};

	let path = window.location.pathname;
	if (!path.endsWith('/')) {
		path += '/';
	}
	for (let sub_path_name in REDIRECT_PATHS) {
		const sub_paths = REDIRECT_PATHS[sub_path_name];
		if (path in sub_paths) {
			window.location.replace(sub_paths[path]);
			return;
		}
	}
	if (path !== '/') {
		window.location.replace('/');
	}
})();
