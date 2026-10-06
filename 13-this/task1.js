
let calculator = {
   read(){
    this.a = +prompt("чило 1:");
    this.b = +prompt("число 2:");
    
   },
   sum() {
    return this.a + this.b
   },
   mul() {
    return this.a * this.b
   }

};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() )
