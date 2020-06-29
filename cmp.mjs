// -*- coding: utf-8, tab-width: 2 -*-

import 'p-fatal';
import 'usnam-pmb';

import gcp from 'generic-common-prefix';

function arrowJoin(path) { return path.map(String).join(' → '); }

const staticApi = {
  toString() { return arrowJoin(this); },
};

const dynApi = [
  'concat',
  'map',
  'slice',
];

function upgrade(l) {
  dynApi.forEach(function makeProxy(mtdName) {
    const f = l[mtdName];
    function proxy(...args) { return upgrade(f.apply(l, args)); }
    l[mtdName] = proxy; // eslint-disable-line no-param-reassign
  });
  return Object.assign(l, staticApi);
}


function cmp(a, b) {
  if (!a) { throw new TypeError('falsey a'); }
  if (!b) { throw new TypeError('falsey b'); }
  if (a && a.traceParents) { return cmp(a.traceParents(), b); }
  if (b && b.traceParents) { return cmp(a, b.traceParents()); }
  const c = gcp(a, b);
  const n = c.length;
  return {
    ancestor: ((n >= 1) && c[n - 1]),
    common: upgrade(c),
    subA: upgrade(a.slice(n)),
    subB: upgrade(b.slice(n)),
  };
}

Object.assign(cmp, {
  arrowJoin,
  upgrade,
});

export default cmp;
