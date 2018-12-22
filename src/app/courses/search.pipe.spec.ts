import { SearchPipe } from './search.pipe';
import { CourseModel } from '../core/models/course.model';

const ITEMS: CourseModel[] = [
  {
    id: 1,
    title: 'expected title',
    creationDate: '2018-12-20T20:02:38',
    duration: '49min',
    topRated: false,
    description: 'string',
  },
  {
    id: 2,
    title: 'random title',
    creationDate: '2018-12-20T20:02:38',
    duration: '49min',
    topRated: false,
    description: 'string',
  },
];

const keywords = ['expected', 'titl', 'qtwedfjgagsg'];

describe('SearchPipe', () => {
  it('should filter out array items, not containing keyword in title', () => {
    const pipe = new SearchPipe().transform(ITEMS, keywords[0]);
    expect(pipe.length).toBe(1);
  });

  it('should return every item, that fulfills query', () => {
    const pipe = new SearchPipe().transform(ITEMS, keywords[1]);
    expect(pipe.length).toBe(2);
  });

  it('should return [] if nothing matched', () => {
    const pipe = new SearchPipe().transform(ITEMS, keywords[2]);
    expect(pipe.length).toBe(0);
  });
});
