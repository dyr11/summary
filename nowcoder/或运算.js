function or(a, b) {
    return !!a||!!b;
}
var result=or(false, true);
console.log(result===true);