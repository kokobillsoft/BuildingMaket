// export class Gun {
class Gun {
    constructor (){
        this.maxAmmo = 0;
        this.ammo = 0;
    }
    
    shot(){
        if (this.ammo){
            this.ammo--;
            console.log('Shot is done. You have a ', this.ammo);
            return true;
        }
        console.log('No ammo');
        return false;
    }

    reload(n){
        var ammoAfterReload = this.ammo + n;
        if (ammoAfterReload > this.maxAmmo){
            ammoAfterReload = this.maxAmmo;
        }
        return this.ammo = ammoAfterReload;
    }

}

module.exports = Gun;