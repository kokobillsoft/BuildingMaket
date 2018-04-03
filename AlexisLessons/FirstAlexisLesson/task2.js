
function main() {
    var v1 = {x:2,y:3};
    var v2 = {x:8,y:9};
    console.log('Vectors:', v1, v2);
    console.log('Sum:', sum(v1, v2));
    return 0;
}

function sum(Vector1, Vector2){
    return {x:(Vector1.x + Vector2.x), y:(Vector1.y + Vector2.y)};
}

main();
