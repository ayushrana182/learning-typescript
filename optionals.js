// Optional Parameters
function printIngredient(quantity, ingredient, extra) {
    console.log(quantity + " " + ingredient + " " + (extra ? "" + extra : "") + " ");
}
printIngredient("1 CUP", "Flour", "Cheese");
printIngredient("1 CUP", "Flour");
function getEmail(user) {
    if (user.info) {
        return user.info.email;
    }
    return "";
}
function getEmailEasy(user) {
    var _a, _b;
    return (_b = (_a = user === null || user === void 0 ? void 0 : user.info) === null || _a === void 0 ? void 0 : _a.email) !== null && _b !== void 0 ? _b : "";
}
// optional callback
function addWithCallback(x, y, callback) {
    console.log([x, y]);
    callback === null || callback === void 0 ? void 0 : callback();
}
addWithCallback(20, 39);
