import { OrderByPipe } from './order-by.pipe';

import { CourseModel } from '../core/models/course.model';

let ITEMS: CourseModel[] = [
  {
    id: 0,
    title: 'expected title',
    creationDate: '2010-12-20T20:02:38',
    duration: '49min',
    topRated: false,
    description: 'string',
  },
  {
    id: 1,
    title: 'random title',
    creationDate: '2020-12-20T20:02:38',
    duration: '49min',
    topRated: false,
    description: 'string',
  },
  {
    id: 2,
    title: 'random title',
    creationDate: '2015-12-20T20:02:38',
    duration: '49min',
    topRated: false,
    description: 'string',
  },
];

describe('OrderBy Pipe', () => {
  it('should sort items by creation date', () => {
    let string;
    const getStringFromIds = items =>
      `${items[0].id}${items[1].id}${items[2].id}`;

    string = getStringFromIds(ITEMS);
    expect(string).toMatch(`012`);

    ITEMS = new OrderByPipe().transform(ITEMS);
    string = getStringFromIds(ITEMS);

    expect(string).toMatch(`120`);
  });
});
