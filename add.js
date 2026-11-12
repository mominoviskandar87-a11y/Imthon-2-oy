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

function kvadrat(son) {
    const kv = son**2;
    const xona = String(son).length;
    return kv % (10 ** xona) === son;
}
console.log(kvadrat(6));

//======================================================================================================

//104-Masala

function index(arr) {
    return arr.map((x, i) => x + i);
}
console.log(index([0, 0, 0, 0, 0]));
console.log(index([1, 2, 3, 4, 5]));

//===================================================================================================


// 105-Masala


function drinks(arr) {
    const shakarli = ["cola", "fanta"];
    return arr.filter(x => !shakarli.includes(x));
}
console.log(drinks(["fanta", "cola", "water"]));


//=====================================================================================================

// 106-Masala

function rakam(sonn){
    return String(Math.abs(sonn)).length;
}
console.log(rakam(123));
console.log(rakam(1145697));
console.log(rakam(1234567890));

//====================================================================================================

//107-Masala







//====================================================================================================

//108-Masala

function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
console.log(random(5, 9));
console.log(random(5, 9));

//=====================================================================================================

// 109-Masala

function naristatik(k) {
    const imn = String(k);
    const xona = imn.length;
    let yigindi = 0;
    for (const belgi of imn) {
        yigindi += Number(belgi) ** xona;
    }
    return yigindi === k;
}
console.log(naristatik(153));
console.log(naristatik(1652));

//=====================================================================================================

//  110-Masala

function kattaharf(harf) {
    let soni = 0;
    for (const belgi of harf) {
        if (belgi !== belgi.toLowerCase()) {
            soni++;
        }
    }
    return soni;
}
console.log(kattaharf("fvLzpxmgXSDrobbgMVrc"));
console.log(kattaharf("JMZWCneOTFLWYwBWxyFw"));

