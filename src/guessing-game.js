class GuessingGame {
    constructor() {
    	this.mid=null;
    	this.min=null;
    	this.max=null;
        this.solve=false;
    }

    setRange(min, max) {
    	this.min=min;
    	this.max=max;
    }

    guess() {
    	this.mid=Math.ceil((this.min+this.max)/2);
        this.solve=true;
    	return this.mid;
    }

    lower() {
        if(this.solve){
    	   this.max=this.mid;
           this.solve=false;
        }
    }

    greater() {
        if(this.solve){
    	   this.min=this.mid;
           this.solve=false;
        }
    }
}

module.exports = GuessingGame;
