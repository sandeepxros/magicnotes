function storage(){
    this.storage ; 
    this.length ; 
    this.things ; 
    this.update = function(){
        this.storage =localStorage;
        this.length = localStorage.length;
        this.things = JSON.parse(JSON.stringify(localStorage));
        localStorage.clear();
    }

    this.add = function(key,value){
         let k = JSON.stringify(key);
         let val = JSON.stringify(value);
         localStorage.setItem(k,val);
         this.update();
    }

} 
var store = new storage();

let myObj ={title: 'sandeep', id: new Date().getTime()};
let myObj1 ={value : 'I love Kanchan', lastEdit: new Date().toLocaleTimeString()};
store.update();
store.add(myObj,myObj1);
console.log(store.things);