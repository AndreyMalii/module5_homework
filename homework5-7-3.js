let map = new Map();
map.set("apple", "iphone");
map.set("samsung", "galaxy");
map.set("sony", "xperia");
let phones = new Map([
  ["apple", "iphone"],
  ["samsung", "galaxy"],
  ["sony", "xperia"],
]);
for (let elem of phones) {
  console.log(`Ключ-${elem[0]}`, `значение-${elem[1]}`);
}
