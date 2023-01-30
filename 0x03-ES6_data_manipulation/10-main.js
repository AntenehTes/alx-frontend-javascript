import updateUniqueItems from "./10-update_uniq_items.js";
import groceriesList from "./9-groceries_list.js";

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);
const map1 = {"some": 1,"another": 10};
console.log(map1);
updateUniqueItems(map1);
console.log(map1);