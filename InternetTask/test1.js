function main (){
    var fs = require("fs");
    var def = (1 + 4 + 3);
    var fileContent = fs.readFileSync("test.doc", "utf8");
    console.log("start " + fileContent + " 333");
    return 0;
}

main();