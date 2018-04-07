const Gun = require('./Gun');

class TT extends Gun{
    constructor (){
        super();
        this.maxAmmo = 7;
        this.bulletInBarrel = 0;
        this.reload (this.maxAmmo);
    }
    arm (){
        if (this.ammo){
            this.bulletInBarrel = 1;
            this.ammo--; 
        }
        return this.bulletInBarrel;
    }

    shot (){
        if (this.bulletInBarrel){
            this.bulletInBarrel = 0;
            this.arm();
            console.log('Shot is done. You have a ', this.ammo + this.bulletInBarrel);
            return true;
        }
        console.log('Not armed. You have a ', this.ammo);
        return false;
    }


}

function main (){
    var gun1 = new TT();
    console.log('Start Complete');              //Status load
    console.log(gun1);
    gun1.arm();       
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
    
    return 0;
}

main ();