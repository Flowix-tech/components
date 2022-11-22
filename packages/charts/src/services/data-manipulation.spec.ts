import { getFinalData } from './data-manipulation';

const series1 = [
  { x: 1, y: 1 },
  { x: 2, y: 2 },
  { x: 3, y: 3 }
];

const series2 = [
  { x: 1, y: 1 },
  { x: 2, y: 3 },
  { x: 3, y: 6 },
  { x: 4, y: 11 }
];

describe('getFinalData', function () {
  it('should discard data points that are not common in array of series', () => {
    const result = getFinalData([series1, series2]);
    expect(result).toEqual([
      [
        { x: 1, y: 1 },
        { x: 2, y: 2 },
        { x: 3, y: 3 }
      ],
      [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: 6 }
      ]
    ]);
  });
});
