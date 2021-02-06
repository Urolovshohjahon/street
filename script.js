let adding = (price) => {
    let value = document.querySelector('.result').innerHTML;
    value = value + '+' + price;
    value = eval(value);
    document.querySelector('.result').innerHTML = value;
}

var i = 0;
let show = ()=>{
    
    if(i%2==0){
        document.querySelector('.menu2').style.opacity = 1;
        document.querySelector('.knopka').style.transform = "rotate(180deg)";
        i++;
    }
    else{
        document.querySelector('.menu2').style.opacity = 0;
        document.querySelector('.knopka').style.transform = "rotate(0deg)";
        i++;
    }

}

