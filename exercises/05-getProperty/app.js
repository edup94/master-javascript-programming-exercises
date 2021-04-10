var car = {
    model: 'Toyota'
};
var output = getProperty(car, 'model');
function getProperty(obj, key) {
    return obj[key];
}
console.log(output);