/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result = {}
  for (let i = 0; i < transactions.length; i++) {
    let cur_cat = transactions[i].category
    if (result[cur_cat]) {
      result[cur_cat] = result[cur_cat] + transactions[i].price
    } else {
      result[cur_cat] = transactions[i].price
    }
  }

  let keys = Object.keys(result)
  let x = []
  for(let i=0; i<keys.length; i++){
    let y = {}
    y['category'] = keys[i]
    y['totalSpent'] = result[keys[i]]
    x.push(y)
  }

  // console.log(x)
  return x;
}

module.exports = calculateTotalSpentByCategory;
