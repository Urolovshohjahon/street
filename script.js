let adding = (price) => {
    let value = document.querySelector('.result').innerHTML;
    value = value + '+' + 500;
    value = eval(value);
    document.querySelector('.result').innerHTML = value;
}


//let adding = () => {
//    let tugma = document.querySelector('.tugma')
//    let value = document.querySelector('.result').innerHTML;
//    let calculate = (price)=>{
//        for(let j=500;j<price;j+=500){
//
//        }
//    }
//    var i = 0;
//    if (i > 0) return 0;
//    setInterval(() => {
//
//        value = value + '+' + 500;
//        value = eval(value);
//        document.querySelector('.result').innerHTML = value;
//
//    }, 50);
//    i++;
//}
