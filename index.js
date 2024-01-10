

const button = document.getElementById('button');
const color = document.getElementById('color');
const price = document.getElementById('price');
const name = document.getElementById('name');
const type = document.getElementById('type');
const picture = document.getElementById('picture');
const description = document.getElementById('description');
const form = document.getElementById('form');


function isHttpValid(str) {
    try {
      const newUrl = new URL(str);
      return newUrl.protocol === 'http:' || newUrl.protocol === 'https:';
    } catch (err) {
      return false;
    }
   }


const validate = (name, price, color, type, description, picture) => {
if (!name.value) {
    name.focus();
    alert('Name is empty❗');
    return false;
}
if (name.value.trim().length <= 3) {
    name.focus();
    alert('Name should be more than 3 characters❗');
    return false;
}
if (!price.value) {
    price.focus();
    alert('price is empty❗');
    return false;
}
if (!Number(price.value)) {
    price.focus();
    alert('Price should be number❗');
    return false;
}
if (price.value <= 10 || price.value >= 1000000000) {
    price.focus();
    alert('Price very big or small❗');
    return false;
}
if (!color.value) {
    color.focus();
    alert('color input is empty❗');
    return false;
}
if (!type.value) {
    type.focus();
    alert('Type input is empty❗');
    return false;
}
if (!picture.value) {
    picture.focus();
    alert('Picture input is empty❗');
    return false;
}
if (!isHttpValid(picture.value)) {
    picture.focus();
    alert('Picture is not valid❗');
    return false;
}

    return true;
};

function getDataFromLocalStorage(){
    let data = [];
    if (localStorage.getItem('phones')) {
        data = JSON.parse(localStorage.getItem('phones'));
    }
    return data;
}

button && button.addEventListener('click', function () {
    if (validate (name, price, color, type, description, picture)) {
    const phone = {
        name: name.value,
        price: price.value,
        type: type.value,
        color: color.value,
        description: description.value,
        picture: picture.value
    };
    let data = getDataFromLocalStorage();
    data.push(phone);
    localStorage.setItem('phones', JSON.stringify(data));
    
    form.reset();
    } else {
     console.log('Validation failed');
 }
 });



