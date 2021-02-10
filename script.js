let adding = (price) => {
    let value = document.querySelector('.result').innerHTML;
    value = value + '+' + price;
    value = eval(value);
    document.querySelector('.result').innerHTML = value;
}

var i = 0;
let show = ()=>{
    
    if(i%2==0){
        document.querySelector('.menu2').style.display = "flex";
        document.querySelector('header').style.transform = "translateX(-150px)";
        document.querySelector('.knopka').style.transform = "rotate(180deg)";
        i++;
    }
    else{
        document.querySelector('.menu2').style.display = "none";
        document.querySelector('header').style.transform = "translateX(0px)";
        document.querySelector('.knopka').style.transform = "rotate(0deg)";
        i++;
    }

}

