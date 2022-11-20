import React from 'react';
import { render } from '@testing-library/react';
import PieChart, { PieChartProps } from "./PieChart";

const props: PieChartProps = {
	title: "Test",
	data:{
		"Transit Fees": 795000,
		"Land sale": 890000,
		"Weapons sale": 1200000,
		"Sales revenue": 560900,
		"Other 1": 100000,
		"Other 2": 100000
	}
};

describe('PieChart', () => {
	it('should work', () => {
		const screen = render(<PieChart {...props}/>);
		expect(2+2).toEqual(4);
	});
});
