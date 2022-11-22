import { getFinalData, getMinMaxOfSeries } from './data-manipulation';

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

describe('getMinMaxOfSeries', () => {
  it('should return correct value', () => {
    const [min, max] = getMinMaxOfSeries([
      [
        { x: 1, y: 33 },
        { x: 2, y: 21 },
        { x: 3, y: 5 }
      ],
      [
        { x: 1, y: 72 },
        { x: 2, y: 24 },
        { x: 3, y: 63 }
      ]
    ]);
    expect(min).toEqual(5);
    expect(max).toEqual(72);
  });
});
