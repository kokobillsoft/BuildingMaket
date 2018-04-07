function main (){
    var str1 = 'Hi, ';
    var str2 = 'i think, that ink is low';
    var pen1 = new Pen ();
    var paper1 = new Paper ();
    paper1.databuf(pen1.write(str1));
    paper1.databuf(pen1.write(str2));
    console.log(paper1.print());
    return 0;
}

class Pen {
    constructor (){
        this.incOnPercent = 14;
    }
    write (str){
        if (this.incOnPercent > str.length){
            this.incOnPercent -= str.length;
            return str;
        }
        console.log("Your inc is NULL, reload inc")
        return str.substring (0,(this.incOnPercent));
    }
}

class Paper {
    constructor (){
        this.speach = '';
    }
    databuf (str){
        this.speach += str;
    }
    print (){
        return this.speach;
    }
}


main ();