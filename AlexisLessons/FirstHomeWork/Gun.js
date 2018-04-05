function main(){                                //main of programm
    console.log('Start Complete');              //Status load
    var maxAmmoGun1 = 9;                        // Set maxAmmo in clipp
    var gun1 = new HandGun(maxAmmoGun1);        // Create new object
                     
    console.log(gun1);                          // Print oject to console
    console.log(gun1.shot());                   // Do a shot
    console.log(gun1.shot());                   // Do a shot
    console.log(gun1.shot());                   // Do a shot
    console.log(gun1.shot());                   // Do a shot
    console.log(gun1);                          // Print oject to console                   
    console.log(gun1.reload(2));                // charge the clip with two ammo        
    console.log(gun1.reload(4));                // charge the clip with four ammo
    console.log(gun1.shot());                   // Do a shot
    console.log(gun1.shot());                   // Do a shot
    console.log(gun1.shot());                   // Do a shot
    console.log(gun1.shot());                   // Do a shot
    console.log(gun1.shot());                   // Do a shot
    console.log(gun1.shot());                   // Do a shot
    console.log(gun1.shot());                   // Do a shot
    console.log(gun1.shot());                   // Do a shot
    console.log(gun1.shot());                   // Do a shot
    console.log(gun1.shot());                   // Do a shot
    console.log(gun1.shot());                   // Do a shot
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
    reload(n){                                   // function of reload gun
        if (this.ammoInGun == 0){                // Check the presence of ammo in barrel. If ammo unavailable
            var unnecessaryAmmo = this.ammoInGun + n - this.maxAmmo; // Create variable of unnecessary ammo
        }else{                                   // If ammo available in barrel
            var unnecessaryAmmo = this.ammoInGun + n -1 - this.maxAmmo; // Create variable of unnecessary ammo
        }
        if (unnecessaryAmmo > 0 && this.ammoInGun != 0){ //Check if we can completely clip and barrel of ammo
            this.ammoInGun = this.maxAmmo + 1;    // perform reload of ammo
            return ("I can`t charge so much. Your clip is full. you hawe annecessary " + unnecessaryAmmo + " ammo" ); // return Notification
        }else if (unnecessaryAmmo > 0 && this.ammoInGun == 0){  //Check if we can completely clip ammo without ammo in barrel 
                this.ammoInGun = this.maxAmmo;    // perform reload of ammo
                return ("I can`t charge so much. Your clip is full. you hawe annecessary " + (unnecessaryAmmo + 1) + " ammo" ); // return Notification
                }else{
                    this.ammoInGun = this.ammoInGun + n;  // perform reload of ammo
                    return ("Reload completed. Yo hawe a " + this.ammoInGun + " ammo"); // return Notification
        }
    }
}

main();