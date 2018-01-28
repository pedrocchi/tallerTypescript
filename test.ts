class SimpleCounter{
    public count(){
        let count = 5;
        for(let i=1; i<=7; i++){
            document.write(i.toString() + '<br>')
        }
        console.log('HECHO');
    }
}

let count = new SimpleCounter();
count.count();

let getSum = (n1:number, n2:number):number => {
    return n1+n2;
}

document.write(getSum(5,6).toString());
console.log(getSum(2,3));