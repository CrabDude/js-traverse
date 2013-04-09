var test = require('tape');
var traverse = require('../');

test('get', function (t) {
    var obj = { a : 2, b : [ 4, 5, { c : 6 } ] };
    
    t.equal(traverse(obj).get([ 'b', 2, 'c' ]), 6)
    t.equal(traverse(obj).get([ 'b', 2, 'c', 0 ]), undefined)
    t.equal(traverse(obj).get([ 'b', 2, 'd' ]), undefined)
    t.equal(traverse(obj).get([]), obj)
    t.equal(traverse(obj).get([ 'a' ]), 2)
    t.equal(traverse(obj).get([ 'a', 2 ]), undefined)
    
    t.equal(traverse(obj).get( 'b.2.c' ), 6)
    t.equal(traverse(obj).get( 'b.2.c.0' ), undefined)
    t.equal(traverse(obj).get( 'b.2.d' ), undefined)
    t.equal(traverse(obj).get(''), obj)
    t.equal(traverse(obj).get( 'a' ), 2)
    t.equal(traverse(obj).get( 'a.2' ), undefined)
    
    t.end();
});
