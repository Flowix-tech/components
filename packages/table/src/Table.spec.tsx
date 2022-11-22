import React from 'react';
import { render } from '@testing-library/react';
import Table from './Table';

describe('PieChart', () => {
	it('should work', () => {
		const screen = render(<Table />);
		expect(screen.getByText('Table')).toBeInTheDocument();
	});
});
