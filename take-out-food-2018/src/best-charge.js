function bestCharge(selectedItems) {
  let itemsInfo = loadAllItems();
  let orderDetails = getOrderDetails(selectedItems, itemsInfo);
  let promotions = loadPromotions();
  let summary = getSummary(orderDetails, promotions);
  return buildOrder(orderDetails, summary);
}

function getOrderDetails(selectedItems, itemsInfo) {
  let temp, item, quantity;
  let orderDetails = [];
  for (let i = 0; i < selectedItems.length; i++) {
    temp = selectedItems[i].split("x");
    item = temp[0].trim();
    quantity = temp[1].trim();
    for (let j = 0; j < itemsInfo.length; j++) {
      if (item == itemsInfo[j].id) {
        temp = itemsInfo[j];
        temp.quantity = quantity;
        orderDetails.push(temp);
      }
    }
  }
  return orderDetails;
}

function getSummary(orderDetails, promotions) {
  let barcode;
  for (let i = 0; i < promotions.length; i++) {
    if (promotions[i].type == "指定菜品半价") {
      barcode = promotions[i].items;
    }
  }
  let totalPromotions = 0;
  let promotionsType = "";
  let total = 0;
  for (let i = 0; i < orderDetails.length; i++) {
    total += orderDetails[i].price * orderDetails[i].quantity;
    if (barcode.indexOf(orderDetails[i].id) != -1) {
      totalPromotions += orderDetails[i].price / 2 * orderDetails[i].quantity;
      promotionsType += orderDetails[i].name + "，";
    }
  }
  if (total > 30 || totalPromotions > 0) {
    if (totalPromotions > 6) {
      promotionsType = "使用优惠:\n指定菜品半价(" + promotionsType;
      if (promotionsType[promotionsType.length - 1] == "，") {
        promotionsType = promotionsType.substr(0, promotionsType.length - 1);
      }
      promotionsType += ")，省" + totalPromotions + "元\n-----------------------------------\n";
    } else if (total > 30) {
      totalPromotions = 6;
      promotionsType = "使用优惠:\n满30减6元，省6元\n-----------------------------------\n";
    }
  } else {
    promotionsType = "";
  }
  let summary = {
    total: total,
    totalPromotions: totalPromotions,
    promotionsType: promotionsType
  }
  return summary;
}

function buildOrder(orderDetails, summary) {
  let result = "============= 订餐明细 =============\n";
  for (let i = 0; i < orderDetails.length; i++) {
    result += orderDetails[i].name + " x " + orderDetails[i].quantity + " = " + orderDetails[i].price * orderDetails[i].quantity + "元\n";
  }
  result += "-----------------------------------\n" + summary.promotionsType + "总计：" + (summary.total - summary.totalPromotions) + "元\n===================================";
  return result;
}
