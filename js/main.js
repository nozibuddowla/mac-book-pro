// set value
function setValue(id,value) {
    document.getElementById(id).innerText = value;
}
// get value 
function getValue(id) {
    return document.getElementById(id).innerText;
}
// extra memory price
function showMemoryCost(value) {
    setValue('extra-memory-cost', value);
}
// extra storage price 
function showStorageCost(value) {
    setValue('extra-storage-cost', value);
}
// function for showing delivery charge 
function showDeliveryCharge(value) {
    setValue('delivery-charge-cost',value);
}
// function to get total price 
function getTotalPrice()
{
    const bestPrice = parseInt(getValue('best-price'));
    const memoryCost = parseInt(getValue('extra-memory-cost'));
    const storageCost = parseInt(getValue('extra-storage-cost'));
    const deliveryCharge = parseInt(getValue('delivery-charge-cost'));
    return bestPrice + memoryCost + storageCost + deliveryCharge;
}
// bonus Part-1 showing total cost without promo 
function showTotalPrice() {
    const totalPrice = getTotalPrice();
    setValue('total-price',totalPrice);
    setValue('total-cost', totalPrice);
}

let promoCode = false;  //Initialize to check promo

// bonus Part-2 showing total cost with promo 
function showTotalPriceWithPromo() {
    if(promoCode == true) {
        const totalPrice = getTotalPrice();
        const afterPromoCost = totalPrice * 0.2;
        setValue('total-cost', totalPrice - afterPromoCost);
    }
}
// function for giving a color to promo message 
function messageColor(color) {
    document.getElementById('text-alert').style.color = color;
}
// update color 
function updateColor(id) {
    document.getElementById(id).style.color = 'white';
    document.getElementById(id).style.backgroundColor = 'black';
}
// reset color
function resetColor(id) {
    document.getElementById(id).style.color = 'black';
    document.getElementById(id).style.backgroundColor = 'white';
}
// memory
document.getElementById('memory-8gb-btn').addEventListener('click',function() {
    showMemoryCost(0);
    showTotalPrice();
    showTotalPriceWithPromo();
    updateColor('memory-8gb-btn');
    resetColor('memory-16gb-btn');
})
document.getElementById('memory-16gb-btn').addEventListener('click',function() {
    showMemoryCost(180);
    showTotalPrice();
    showTotalPriceWithPromo();
    updateColor('memory-16gb-btn');
    resetColor('memory-8gb-btn');
})
// promo apply button
document.getElementById('promo-btn').addEventListener('click',function(){
    const couponInput = document.getElementById('promo-input').value;
    if(couponInput == 'stevekaku') {
        if(promoCode == false) {
            promoCode = true;
            showTotalPriceWithPromo();
            messageColor('green');
            setValue('text-alert','Successfully used promo code!');
        }
        else {
            messageColor('red');
            setValue('text-alert','This promo code was already used!');
        }
    }
    else {
        messageColor('red');
        setValue('coupon-alert','Invalid promo code!');
    }
    document.getElementById('promo-input').value = '';
})

// 256GB SSD storage button 
document.getElementById('storage-256gb-btn').addEventListener('click',function(){
    showStorageCost(0);
    showTotalPrice();
    showTotalPriceWithPromo();
    updateColor('storage-256gb-btn');
    resetColor('storage-512gb-btn');
    resetColor('storage-1tb-btn');
})
// 512GB SSD storage button 
document.getElementById('storage-512gb-btn').addEventListener('click',function(){
    showStorageCost(100);
    showTotalPrice();
    showTotalPriceWithPromo();
    updateColor('storage-512gb-btn');
    resetColor('storage-256gb-btn');
    resetColor('storage-1tb-btn');
})
// 1TB SSD storage button 
document.getElementById('storage-1tb-btn').addEventListener('click',function(){
    showStorageCost(180);
    showTotalPrice();
    showTotalPriceWithPromo();
    updateColor('storage-1tb-btn');
    resetColor('storage-512gb-btn');
    resetColor('storage-256gb-btn');
})
// Free delivery cost button 
document.getElementById('delivery-free-btn').addEventListener('click',function(){
    showDeliveryCharge(0);
    showTotalPrice();
    showTotalPriceWithPromo();
    updateColor('delivery-free-btn');
    resetColor('delivery-paid-btn');
})
// Paid delivery cost button 
document.getElementById('delivery-paid-btn').addEventListener('click',function(){
    showDeliveryCharge(20);
    showTotalPrice();
    showTotalPriceWithPromo();
    updateColor('delivery-paid-btn');
    resetColor('delivery-free-btn');
})