import test from 'ava';
import { str } from '../src';

test('it should captialize all words in a string', t => {
	t.is(str('foo bar baz!').capitalize().get(), 'Foo Bar Baz!');
	t.is(str('lorem ipsum dolor sit ameT').capitalize().get(), 'Lorem Ipsum Dolor Sit AmeT');
});

test('it should captialize the first letter in a string', t => {
	t.is(str('foo bar baz!').ucfirst().get(), 'Foo bar baz!');
	t.is(str('foobarbaz').ucfirst().get(), 'Foobarbaz');
});

test('it should lower case the first letter in a string', t => {
	t.is(str('Foo bar baz!').lcfirst().get(), 'foo bar baz!');
	t.is(str('FooBarBaz').lcfirst().get(), 'fooBarBaz');
});

test('it should determine whether a string contains another string', t => {
  t.true(str('foobarbaz').contains('bar'));
  t.false(str('foobarbaz').contains('bob'));
	t.false(str('foobarbaz').contains('foo', 2));
});

test('it should limit a string', t => {
  t.is(str('Lorem ipsum dolor sit amet').limit(20).get(), 'Lorem ipsum dolor si…');
  t.is(str('Lorem ipsum dolor sit amet').limit(10, '***').get(), 'Lorem ipsu***');
  t.is(str('Lorem ipsum dolor sit amet').limit(100).get(), 'Lorem ipsum dolor sit amet');
});

test('it should generate a random string', t => {
  t.true(typeof str().random().get() === 'string');
  t.is(str().random(16).length, 16);
	t.is(str().random().length, 32);
});

test('it should check if a string starts with a string', t => {
  t.true(str('Lorem ipsum dolor sit amet').startsWith('Lorem'));
  t.false(str('Lorem ipsum dolor sit amet').startsWith('ipsum'));
  t.true(str('Lorem ipsum dolor sit amet').startsWith('ipsum', 6));
});

test('it should check if a string ends with a string', t => {
  t.true(str('Lorem ipsum dolor sit amet').endsWith('amet'));
  t.false(str('Lorem ipsum dolor sit amet').endsWith('ipsum'));
	t.true(str('Lorem ipsum dolor sit amet').endsWith('ipsum', 11));
});

test('it should check if a string is all lowercase', t => {
  t.false(str('Lorem ipsum dolor sit amet').isLowerCase());
	t.true(str('lorem ipsum dolor sit amet').isLowerCase());
});

test('it should check if a string is all uppercase', t => {
  t.false(str('LOREM ipsum Dolor sit amet').isUpperCase());
	t.true(str('LOREM IPSUM').isUpperCase());
});

test('it should strip all whitespace from a string', t => {
  t.is(str('Lorem ipsum dolor sit amet').strip().get(), 'Loremipsumdolorsitamet');
});

test('it should convert a string into studly case', t => {
  t.is(str('chuck_her_in_the_ute').studly().get(), 'ChuckHerInTheUte');
  t.is(str('chuck_her_in_the_u_t_e').studly().get(), 'ChuckHerInTheUTE');
  t.is(str('chuck  -_-  her  -_-  in  -_-  the  -_-  ute').studly().get(), 'ChuckHerInTheUte');
  t.is(str('tymon_designs').studly().get(), 'TymonDesigns');
  t.is(str('tymondesigns').studly().get(), 'Tymondesigns');
});

test('it should convert a string into camel case', t => {
  t.is(str('chuck_her_in_the_ute').camel().get(), 'chuckHerInTheUte');
  t.is(str('chuck_her_in_the_u_t_e').camel().get(), 'chuckHerInTheUTE');
  t.is(str('chuck  -_-  her  -_-  in  -_-  the  -_-  ute').camel().get(), 'chuckHerInTheUte');
  t.is(str('tymon_designs').camel().get(), 'tymonDesigns');
  t.is(str('tymonDesigns').camel().get(), 'tymonDesigns');
});

test('it should convert a string into snake case', t => {
  t.is(str(' chuckHerInTheUte ').snake().get(), 'chuck_her_in_the_ute');
  t.is(str('chuckHerInTheUTE').snake().get(), 'chuck_her_in_the_u_t_e');
	t.is(str('chuckHerInTheUTE').snake('^').get(), 'chuck^her^in^the^u^t^e');
  t.is(str('chuckherintheute').snake().get(), 'chuckherintheute');
});
