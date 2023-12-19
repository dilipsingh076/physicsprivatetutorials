import * as React from 'react';

const GoogleIcon = ({ ...props }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={25}
		height={24}
		viewBox="0 0 25 24"
		fill="none"
		{...props}
	>
		<path
			d="M23.5 12.4801C23.5 11.7173 23.4382 10.9504 23.3062 10.1999H12.7216V14.5211H18.7829C18.5314 15.9148 17.7232 17.1477 16.5398 17.9311V20.735H20.156C22.2795 18.7805 23.5 15.8942 23.5 12.4801Z"
			fill="#4285F4"
		/>
		<path
			d="M12.7216 23.444C15.7481 23.444 18.3005 22.4503 20.1601 20.735L16.5439 17.9311C15.5378 18.6156 14.239 19.0032 12.7257 19.0032C9.79818 19.0032 7.31594 17.0281 6.4253 14.3727H2.6937V17.2631C4.59867 21.0525 8.47871 23.444 12.7216 23.444Z"
			fill="#34A853"
		/>
		<path
			d="M6.42119 14.3727C5.95113 12.979 5.95113 11.4699 6.42119 10.0762V7.18575H2.69371C1.10211 10.3566 1.10209 14.0923 2.6937 17.2631L6.42119 14.3727Z"
			fill="#FBBC04"
		/>
		<path
			d="M12.7216 5.44157C14.3215 5.41683 15.8677 6.01884 17.0264 7.12389L20.2302 3.92007C18.2015 2.01509 15.509 0.96777 12.7216 1.00076C8.47871 1.00076 4.59868 3.3923 2.69371 7.18575L6.42119 10.0762C7.3077 7.41666 9.79405 5.44157 12.7216 5.44157Z"
			fill="#EA4335"
		/>
	</svg>
);
export default GoogleIcon;
