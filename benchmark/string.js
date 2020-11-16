const Benchmark = require('benchmark');
const suite = new Benchmark.Suite();

const a = 'string-a concat ';
const b = 'with string-b';
const { log } = console;

suite
  .add('[Addition Operator]', () => {
    a + b;
  })
  .add('[Template Literal]', () => {
    `${a}${b}`;
  })
  .on('cycle', e => {
    log(String(e.target));
  })
  .on('complete', () => {
    log(`Fastest is ${suite.filter('fastest').map('name')}`);
  })
  .run();
