
<!--#echo json="package.json" key="name" underline="=" -->
ubborg-lineage-find-common-ancestor-pmb
=======================================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
Given two resource plans, or two generic lists of parent objects, find common
ancestor and the relation with them.
<!--/#echo -->



API
---

This module ESM-exports one function:

### cmp(a, b)

Where `a` and `b` each are either
* an Array-like list of generic parent objects,
* an Array-like list of strings,
* or something with a `.traceParents` method that returns any of the above.

Returns an object with these keys:

* `ancestor`: The lowest common ancestor, of `false` if none was found.
* `common`: The shared prefix of both lists.
  Empty list if they have no common ancestor.
* `subA`/`subB`: List of the steps from `ancestor` to `a`/`b`.
  Empty list if one of both is found to be an ancestor of the other,
  or `a` is `b`.



Usage
-----

:TODO:



<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
