var test = require('tape');
var traverse = require('../');

test('get', function (t) {
    var obj = { a : 2, b : [ 4, 5, { c : 6 } ] };
    
    traverse(obj).set([ 'b', 2, 'c' ], 7)
    t.equal(traverse(obj).get([ 'b', 2, 'c' ]), 7)
    traverse(obj).set([ 'b', 2, 'c', 0 ], 8)
    t.equal(traverse(obj).get([ 'b', 2, 'c', 0 ]), undefined)
    traverse(obj).set([ 'b', 2, 'd' ], 9)
    t.equal(traverse(obj).get([ 'b', 2, 'd' ]), 9)
    traverse(obj).set([], false)
    t.equal(traverse(obj).get([]), obj)
    traverse(obj).set([ 'a' ], 10)
    t.equal(traverse(obj).get([ 'a' ]), 10)
    traverse(obj).set([ 'a', 2 ], 11)
    t.equal(traverse(obj).get([ 'a', 2 ]), undefined)
    
    traverse(obj).set('b.2.c', 7)
    t.equal(traverse(obj).get('b.2.c'), 7)
    traverse(obj).set('b.2.c.0', 8)
    t.equal(traverse(obj).get('b.2.c.0'), undefined)
    traverse(obj).set('b.2.d', 9)
    t.equal(traverse(obj).get('b.2.d'), 9)
    traverse(obj).set('', false)
    t.equal(traverse(obj).get(''), obj)
    traverse(obj).set('a', 10)
    t.equal(traverse(obj).get('a'), 10)
    traverse(obj).set('a.2', 11)
    t.equal(traverse(obj).get('a.2'), undefined)
    
    t.end();
});
