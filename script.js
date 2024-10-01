let rateInfo = document.getElementsByClassName('rate');

let rating = document.getElementById('rating');
let submitted = document.getElementById('submitted');
let result = document.getElementById('result');

let res 

function choose(x) {

    for (let c = 0; c < rateInfo.length; c++) {
        rateInfo[c].style.backgroundColor = '#272E38';
        rateInfo[c].style.color = 'hsl(217, 12%, 63%)';
    }

    let rate = rateInfo[x];
    rate.style.backgroundColor = 'hsl(25, 97%, 53%)';
    rate.style.color = '#141519';

    res = x + 1
}

function submit() {
    if (res.length == 0) {
        alert(`You can't submit without an value!`);
    } else {
        submitted.style.display = 'block';
        rating.style.display = 'none';
    
        result.innerHTML = `You selected ${res} out of 5`;
    }
}