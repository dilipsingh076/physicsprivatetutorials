import * as React from 'react';

const MobileLegendsIcon = ({ ...props }) => (
	<svg
		width={42}
		height={24}
		viewBox="0 0 42 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		xmlnsXlink="http://www.w3.org/1999/xlink"
		{...props}
	>
		<rect width={41.7128} height={24} fill="url(#MobileLegends)" />
		<defs>
			<pattern id="MobileLegends" patternContentUnits="objectBoundingBox" width={1} height={1}>
				<use xlinkHref="#image0_904_65951" transform="scale(0.000250049 0.000434594)" />
			</pattern>
			<image
				id="image0_904_65951"
				width={4000}
				height={2301}
			/>
		</defs>
	</svg>
);
export default MobileLegendsIcon;