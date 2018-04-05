function main(){
   
    printEven(-10,8);
    console.log ('Work');
    return 0;

}

function printEven (n,k){
    if ((n%2 == 0) && (k>=n)){
        console.log (n);
    } else if ((n%2 == 1) && (k>=n)){
        n=n+1;
        console.log (n);
    }
    while (n < k){
        n=n+2;
        console.log (n);
    }
}

main();