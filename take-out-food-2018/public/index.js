window.onload = function () {
  let allItems = loadAllItems();
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < allItems.length; i++) {
    let tr = document.createElement("tr");
    tr.insertCell().innerText = parseInt(i) + 1;
    tr.insertCell().innerText = allItems[i].name;
    tr.insertCell().innerText = "￥" + allItems[i].price;
    let itemCount = document.createElement("td");
    let addBtn = document.createElement("input");
    addBtn.setAttribute("value", "+");
    addBtn.setAttribute("type", "button");
    addBtn.onclick = add;
    let minusBtn = document.createElement("input");
    minusBtn.setAttribute("type", "button");
    minusBtn.setAttribute("value", "-");
    minusBtn.onclick = minus;
    let quantity = document.createElement("input");
    quantity.setAttribute("class", "quantity");
    quantity.setAttribute("value", "0");
    itemCount.appendChild(minusBtn);
    itemCount.appendChild(quantity);
    itemCount.appendChild(addBtn);
    tr.appendChild(itemCount);
    fragment.appendChild(tr);
  }
  let container = document.getElementById("container");
  container.appendChild(fragment);

  let promotionsInfo = loadPromotions();
  let promotionsNode = document.getElementById("promotions");
  let string = "";
  for (let i = 0; i < promotionsInfo.length; i++) {
    string += promotionsInfo[i].type;
    if (promotionsInfo[i].items != null) {
      let items = promotionsInfo[i].items;
      for (let j = 0; j < allItems.length; j++) {
        for (let k = 0; k < items.length; k++) {
          if (allItems[j].id == items[k]) {
            string += "<br>" + allItems[j].name;
          }
        }
      }
    }
    string += "<br>";
  }
  promotionsNode.innerHTML = string;
}

function calculatePrice() {

  let container = document.getElementById("container").getElementsByTagName("tr");
  let itemsInfo = loadAllItems();
  let selectedItems = [];
  for (let i = 0; i < container.length; i++) {
    if (container[i].getElementsByClassName("quantity")[0].value != 0) {
      selectedItems.push(itemsInfo[i].id + " x " + container[i].getElementsByClassName("quantity")[0].value);
    }
  }
  let msg = document.getElementById("message");
  msg.innerHTML = bestCharge(selectedItems);
  msg.style.visibility = "visible";
}

function clearAll() {
  let container = document.getElementById("container").getElementsByTagName("tr");
  for (let i = 0; i < container.length; i++) {
    container[i].getElementsByClassName("quantity")[0].value = 0;
  }
  let msg = document.getElementById("message");
  msg.innerText = "";
  msg.style.visibility = "hidden";
}

function add() {
  let add = event.target;
  add = add.previousElementSibling;
  add.value = parseInt(add.value) + 1;
}

function minus() {
  let minus = event.target;
  minus = minus.nextElementSibling;
  if (parseInt(minus.value) > 0) {
    minus.value = parseInt(minus.value) - 1;
  }
}
