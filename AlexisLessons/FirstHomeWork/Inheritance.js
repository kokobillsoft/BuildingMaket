class Animal {
    constructor(name) {
        this.name = name;
    }
    init() {
        this.formattedName = '_'+this.className+':'+this.name+'_';
    }

    say(str) {
        console.log(this.formattedName, 'says', str);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        this.className = 'Cat';
        this.init();
    }
    say() {
        super.say('Meow!!!');
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
        this.className = 'Dog';
        this.init();
    }
    say() {
        super.say('Bark!!!');
    }
}

function main() {
    var myCat = new Cat('Vityaa');
    var myDog = new Dog('Sharyk');

    myCat.say();
    myDog.say();

    return 0;
}

main();
