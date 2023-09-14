const cats = ["Milo","Otis","Garfield"];
function destructivelyAppendCat(name){
    cats.push("Ralph");
}
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(name){
    cats.shift();
}
function appendCat(name){
    const moreCats = [...cats, name];
    return moreCats;
}
const moreCats = appendCat(...cats,'Broom');

function prependCat(name){
    const lessCats = [name, ...cats];
    return lessCats;
}
    const lessCats = prependCat("Arnold", ...cats);

function removeLastCat(name){
    const withoutLastCat = cats.slice(0,-1);
    return withoutLastCat;
}
const withoutLastCat = removeLastCat();

function removeFirstCat(name){
    const withoutFirstCat = cats.slice(1);
    return withoutFirstCat;
}
const withoutFirstCat = removeFirstCat();
