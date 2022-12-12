class parentClass{
    constructor(args){
      this.args=args;
  
    };
      plus(...n) {
        return n.reduce(
             (previousValue, currentValue) => previousValue + currentValue,
             this.args
           )
     }
     get() {
      return this.args;
    }
    }
  
  
  
  
  
    class intBuilder extends parentClass{
  
        super(args){
          this.args=args;
        }
  
  
    minus(...n){
       return n.reduce(
        (previousValue, currentValue) => previousValue - currentValue,
        this.args
      )
    }        // take infinite number of integers and subtract from stored value; 
    multiply(n){
        return nthis.args;
    }        // multiply param n on stored value;
    divide(n){
        return Math.floor(this.args/n);
    }          // leaves integer part of division stored value on n; 
    mod(n){
        return this.args%n
    }             // leaves remainder of the division stored value with on n;
  
    random(from, to){
        from = Math.ceil(from);
        to = Math.floor(to);
        return Math.floor(Math.random() (to - from + 1)) + from;
    }
    }
  
  
  
    function stringBuilder() {
  
      return Reflect.construct(parentClass, arguments, stringBuilder)
    }
    Reflect.setPrototypeOf(stringBuilder.prototype, parentClass.prototype),
    Reflect.setPrototypeOf(stringBuilder, parentClass)
    stringBuilder();
    const stringbuild = new stringBuilder("hello");
  
    console.log(stringbuild.constructor)
  
    stringbuild.multiply =  function (int) { for(let i=0;i<int;i++){
            this.args += this.args;
        } 
    return this.args;
    };
    stringbuild.minus =   function (n) {return this.args.substring(0,this.args.length-n)};
  
    stringbuild.divide = function (n) {
            let k= Math.floor(args.length / n);
            return this.args.substring(0,k);
        }
    stringbuild.sub =   function (from,n) {return this.args.slice(from,n)};
  
    stringbuild.remove =  function (args) {return args=""};