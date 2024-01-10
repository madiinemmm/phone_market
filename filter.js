 import {getDataFromLocalStorage} from "./index.js"
 
 const wrapper = document.getElementById('product-list');

 function createCard(phone) {
    return `
    <div class="card mb-3 col-6 d-flex justify-content-between mt-5" >
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${phone.picture}" class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title fs-3">${phone.name}</h5>
        <div class="d-flex justify-content-between">
            <p class="card-text"><small class="text-danger fs-4">${phone.price}</small></p>
            <p class="card-text"><small class="text-primary fs-4">${phone.type}</small></p>
        </div>
          <p class="card-text fs-5">${phone.description}</p>
        </div>
      </div>
    </div>
  </div>
    `;
 }

document.addEventListener('DOMContentLoaded', function(){
  let data = getDataFromLocalStorage();
  if (data.length) {
    data.forEach(phone => {
        let card = createCard(phone);
        wrapper.innerHTML += card;
    });
  }
});