let x = document.getElementById('uls');
let p = x.getElementsByTagName('p');
console.dir(x);
console.dir(p);

for (let i = 0; i < p.length; i++) {
    const element = p[i];
    element.style.background = 'red';
}

function validateForm(){
    const value = document.getElementById('input').value;
    let text;
    if(isNaN(value) || value < 1 || value > 10){
        text = 'Input Not valid';
    }else {
        text = "input Okay"
    }
    document.getElementById('demo').innerHTML = text;
}