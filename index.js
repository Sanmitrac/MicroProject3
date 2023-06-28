const data = require('./Food.json')



// console.log(data)
// List all the food items
function listAllFoodItems() {
    return data.map(food => food.foodname);
}

// List all the food items with category vegetables
function listFoodItemsByVegetables() {
    return data.filter(food => food.category === "Vegetable");
}

// List all the food items with category fruit
function listFoodItemsByFruit() {
    return data.filter(food => food.category === "Fruit");
}

// List all the food items with category protein
function listFoodItemsByProtein() {
    return data.filter(food => food.category === "Protein");
}

// List all the food items with category nuts
function listFoodItemsByNuts() {
    return data.filter(food => food.category === "Nuts");
}

// List all the food items with category grains
function listFoodItemsByGrains() {
    return data.filter(food => food.category === "Grain");
}

// List all the food items with category dairy
function listFoodItemsByDairy() {
    return data.filter(food => food.category === "Dairy");
}

// List all the food items with calorie above 100
function listFoodItemsWithCalorieAbove100() {
    return data.filter(food => food.calorie > 100);
}

// List all the food items with calorie below 100
function listFoodItemsWithCalorieBelow100() {
    return data.filter(food => food.calorie < 100);
}

// List all the food items with highest protein content to lowest
function listFoodItemsByProteinContent() {
    return data.sort((a, b) => b.protiens - a.protiens);
}

// List all the food items with lowest carb content to highest
function listFoodItemsByCarbContent() {
    return data.sort((a, b) => a.cab - b.cab);
}

// Example usage:
console.log(listAllFoodItems());
console.log(listFoodItemsByVegetables())
console.log(listFoodItemsByProtein())
console.log(listFoodItemsByNuts())
console.log(listFoodItemsByGrains())
console.log(listFoodItemsByDairy())
console.log(listFoodItemsByFruit());
console.log(listFoodItemsWithCalorieAbove100());
console.log(listFoodItemsWithCalorieBelow100())
console.log(listFoodItemsByProteinContent());
console.log(listFoodItemsByCarbContent());