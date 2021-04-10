var obj = {
  name: 'Sam',
  age: 20
}
removeProperty(obj, 'name');
function removeProperty(obj, key) {
    delete obj["name"];
    delete obj["age"];
}
console.log(obj.name);