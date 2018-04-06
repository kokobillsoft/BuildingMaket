function main(){                                //main of programm
    console.log('Start Complete');              //Status load
    var maxAmmoGun1 = 9;                        // Set maxAmmo in clipp
    var gun1 = new HandGun(maxAmmoGun1);        // Create new object
                     
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

class HandGun {                                 // description of new class
    constructor (maxAmmo) {                     // Create new class with parametr
        this.maxAmmo = maxAmmo;                 // maxAmmo of this class is equated to the transferred value
        this.ammoInGun = maxAmmo;               // if we create a new Gun We must hawe a max ammo in clip
    }
    shot(){                                     // function of shot gun
        if(this.ammoInGun <= 0){                // Check the presence of ammo? if ammo unavailable
            return ('There shot did`t happend. You ran out of ammo'); // return Notification
        }else{                                  // If ammo available
            this.ammoInGun--;                   // do a shot
            return('There was a shot. Ammo in Gun ' + this.ammoInGun); // return Notification
        }
    }
    reload(n){
        if (n>0){
            var AmmoInBuller = 0;
            if (this.ammoInGun>0){
                AmmoInBuller = 1;
            }
            if((this.ammoInGun + n) > (this.maxAmmo + AmmoInBuller)){
                this.ammoInGun = this.maxAmmo + AmmoInBuller;
                return('Reload done, You have unnecessary ' + (n - this.maxAmmo - AmmoInBuller) + ' ammo');
            }
            this.ammoInGun += n + AmmoInBuller;
            return('Reload done');
        }
    }
}


main();