// -*- coding: utf-8, tab-width: 2 -*-

import assert from 'assert';

import cmp from '..';

const eq = assert.deepStrictEqual;

function t(c, a, b) {
  const r = cmp(c.concat(a), c.concat(b));
  const { ancestor, common, subA, subB } = r;
  const n = common.length;
  eq(ancestor, (n ? common[n - 1] : false));
  eq(Array.from(common), c);
  eq(Array.from(subA), a);
  eq(Array.from(subB), b);
}

t([], [1, 2], []);
t([], [1, 2], [3, 4]);
t([], [], [3, 4]);

t([1, 2, 3], [4, 5], []);
t([1, 2, 3], [4, 5], [6, 7]);
t([1, 2, 3], [], [6, 7]);
t([1, 2, 3], [4, 8, 9], [5, 8, 9]);

t([1, 2, 3], [{ x: 4 }, 8, 9], [{ x: 4 }, 8, 9]);










console.debug('+OK basics tests passed.');
