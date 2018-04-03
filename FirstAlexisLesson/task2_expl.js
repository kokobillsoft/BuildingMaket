
function Vector_t3(x,y) {
    this.x = x;
    this.y = y;
}
Vector_t3.prototype = {};
Vector_t3.prototype.add = function(vector) {
    return new Vector_t3(this.x+vector.x, this.y+vector.y);
}


function Vector_t2(x,y) {
    this.x = x;
    this.y = y;

    this.add = function(vector) {
        return new Vector_t2(this.x+vector.x, this.y+vector.y);
    }
}

class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    add(vector){
        return new Vector(this.x+vector.x, this.y+vector.y);
    }
}

var VectorCls = Vector_t2;

var main = function() {
    var v1 = new VectorCls(2,3);
    var v2 = {x:8,y:9};
    console.log('Vectors:', v1, v2);
    console.log('Sum:1', v1.add(v2));
    console.log('Sum:2', v1.add(v2).add(new Vector(1,1)));
    console.log(v1.add(v2) == v1.add(v2));
    console.log(v1.add(v2).x == v1.add(v2).x);
    console.log(v1.add(v2).add == v1.add(v2).add);
    return 0;
}

main();
