const loadAllItems = require("./datbase").loadAllItems;
const loadPromotions = require("./datbase").loadPromotions;
module.exports = function printInventory(inputs) {
    let items = loadAllItems();
    let shoppingList = getShoppingList(inputs, items);
    let promotions = loadPromotions();
    let summary = getSummary(shoppingList, promotions);
    let result= buildResult(shoppingList,summary);
    console.log(result);
    return result;

};

function getShoppingList(inputs, items) {

    let shoppingList = [];
    for (let i = 0; i < inputs.length; i++) {
        let temp = inputs[i].split("-");
        let barcode = temp[0];
        let quantity = parseInt(temp[1]);
        temp = shoppingList.filter(x => {
            return x.barcode == barcode;
        });
        if (temp.length == 0) {
            temp = items.filter(x => {
                return x.barcode == barcode;
            })[0];
            if (isNaN(quantity)) {
                temp.quantity = 1;

            } else {
                temp.quantity = quantity;
            }
            shoppingList.push(temp);
        } else {
            temp = shoppingList.filter(x => {
                return x.barcode == barcode;
            })[0];
            if (isNaN(quantity)) {
                temp.quantity = temp.quantity + 1;
            } else {
                temp.quantity = temp.quantity + quantity;
            }
        }
    }

    return shoppingList;
}

function getSummary(shoppingList, promotions) {
    let promotionsId = promotions[0].barcodes;
    let total = 0;
    let totalPromotions = 0;
    let promotionsInfo = "挥泪赠送商品：\n";
    for (let i = 0; i < shoppingList.length; i++) {
        let subtotal = 0;
        if (promotionsId.indexOf(shoppingList[i].barcode) == -1 || shoppingList[i].quantity <= 1) {
            subtotal = shoppingList[i].price * shoppingList[i].quantity;
            total+=shoppingList[i].price * shoppingList[i].quantity;
        } else {
            total+=shoppingList[i].price * shoppingList[i].quantity;
            // promotionsInfo += "名称：" + shoppingList[i].name + "，数量：" + parseInt(shoppingList[i].quantity/2) + shoppingList[i].unit + "\n";
            promotionsInfo += "名称：" + shoppingList[i].name + "，数量：" + 1+ shoppingList[i].unit + "\n";
            totalPromotions += shoppingList[i].price;
            subtotal = shoppingList[i].price * (shoppingList[i].quantity - 1);
        }
        shoppingList[i].subtotal = subtotal;
    }
    promotionsInfo += "----------------------\n";
    let summary = {
        total: total,
        totalPromotions: totalPromotions,
        promotionsInfo: promotionsInfo
    }
    return summary;
}

function buildResult(shoppingList, summary) {
    let result="***<没钱赚商店>购物清单***\n";
    for (let i=0;i<shoppingList.length;i++){
        result+="名称："+shoppingList[i].name+"，数量："+shoppingList[i].quantity+shoppingList[i].unit+"，单价："+shoppingList[i].price.toFixed(2)+
            "(元)，小计："+shoppingList[i].subtotal.toFixed(2)+"(元)\n"
    }
    result+="----------------------\n"+summary.promotionsInfo+"总计："+
        (summary.total-summary.totalPromotions).toFixed(2)+"(元)\n节省："+summary.totalPromotions.toFixed(2)+"(元)\n**********************";
    return result;
}