import React from 'react';
import { render } from '@testing-library/react';
import PieChart from './PieChart';

describe('PieChart', () => {
	it('should work', () => {
		const screen = render(<PieChart />);
		expect(screen.getByText('PieChart')).toBeInTheDocument();
		// expect(2+2).toEqual(4)
	});
});
