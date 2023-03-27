import { ToDoubledNumberPipe } from './to-doubled-number.pipe';

describe('ToDoubledNumberPipe', () => {
  // "TDD"
  const pipe = new ToDoubledNumberPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform a string into a number', () => {
    const input = 'ciao';
    const output = pipe.transform(input);
    expect(typeof output).toBe('number');
  })

  it('if number conversion return NaN should return 0 ', () => {
    expect(pipe.transform('ciao')).toBe(0)
  })

  it('should transform string into doubled numbed', () => {
    const sample = '100';
    expect(pipe.transform(sample)).toBe(200);
  })
});
