/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
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
