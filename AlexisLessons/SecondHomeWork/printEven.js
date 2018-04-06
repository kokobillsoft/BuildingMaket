function main(){
   
    printEven(2, 2);
    console.log ('Work');
    return 0;

}

function printEven (n,k){
    n += Math.abs(n%2);
    while (n <= k){
        console.log (n);
        n += 2; 
    }
}

main();