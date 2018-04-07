// import {Gun} from './Gun';
const Gun = require('./Gun');

class Revolver extends Gun {
    constructor () {
        super();
        this.maxAmmo = 6;
        this.reload(this.maxAmmo);
    }

}

function main(){                                //main of programm
    console.log('Start Complete');              //Status load
    var gun1 = new Revolver();
    console.log(gun1);       
    for (i=0; i<4; i++){
        console.log(gun1.shot()); 
    }                   
    console.log(gun1);                          // Print oject to console                   
    console.log(gun1.reload(2));                // charge the clip with two ammo        
    console.log(gun1.reload(4));                // charge the clip with four ammo
    for (i=0; i<11; i++){
        console.log(gun1.shot()); 
    }
    console.log(gun1.reload(10));               // charge the clip with ten ammo
    console.log(gun1.shot());                   // Do a shot
}



main();

