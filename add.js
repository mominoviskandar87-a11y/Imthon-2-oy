// 100-Masala








//=======================================================================================================

// 101-Masala

function yegindi(butun){
    let natija=0;
    for(let i=0; i<=butun; i++){
        natija+=i;
    }
    return natija;
}
console.log(yegindi(4));


//======================================================================================================

// 102-Masala


function maxmin(a,b){
    if(a>a.min && b<b.max){
        return true
    }else{
        return false
    }
}
console.log(maxmin(4, { min: 0, max: 5 }));


//=======================================================================================================

//103-Masala

function kvadrat(son){
    let y=String(son)
    if(( son**2)%(10**son.lenght)==son){
        return true;
    }else{
        return false;
    }
}
console.log(kvadrat(6));

//======================================================================================================

//104-Masala





