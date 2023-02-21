let phone = 1;
let cover = 1;

//Phone 
document.getElementById('phonePlus').addEventListener('click',function(){
    phone++;
    document.getElementById('phoneQuantity').value = phone;
})
document.getElementById('phoneMinus').addEventListener('click',function(){
    if(phone>0)
    phone--;
    document.getElementById('phoneQuantity').value = phone;
})

//Cover
document.getElementById('coverPlus').addEventListener('click',function(){
    cover++;
    document.getElementById('iphoneCoverQuantity').value = cover;
})
document.getElementById('coverMinus').addEventListener('click',function(){
    if(cover>0)
    cover--;
    document.getElementById('iphoneCoverQuantity').value = cover;
})
// ..................................................................

let totalPrice = 0;

document.getElementById('totalButton').addEventListener('click',function(){
    const phone_Price = document.getElementById('phonePrice').innerText;
    const phone_Quantity = document.getElementById('phoneQuantity').value;
    totalPrice += parseFloat(phone_Price) * parseFloat(phone_Quantity);

    const cover_Price = document.getElementById('coverPrice').innerText;
    const iphoneCover_Quantity = document.getElementById('iphoneCoverQuantity').value;
    totalPrice += parseFloat(cover_Price) * parseFloat(iphoneCover_Quantity);

    document.getElementById('totalPrice').innerText = totalPrice;
})