// Total BIll = Bill paid + (Bill paid *(tip/100))
let counter = 0;
let clicked_plus = () =>{
    // console.log('clicked +');
    counter = counter+1;
    // return counter;
    document.getElementById('count').innerHTML = counter;  
    console.log(counter);
    
}
let clicked_minus = () =>{
    
    if (counter == 0) {
        document.getElementById('count').innerHTML = 0;
    }else{
        // console.log('clicked +');
        counter = counter-1;
        // return counter;
        document.getElementById('count').innerHTML = counter;
    }    
    console.log(counter);
}
// document.getElementById('count').innerHTML = counter;
console.log(counter);

let showbill = () => {
    let bill = document.getElementById('bill').value;
    let tip = document.getElementById('tip').value;
    console.log(bill);
    console.log(tip);
    let total = Number(bill) + (Number(bill)*(Number(tip)/100))
    console.log(total);
    document.getElementById('total').innerHTML = total/counter;
}

