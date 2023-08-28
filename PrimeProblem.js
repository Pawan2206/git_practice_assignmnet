let num = 4;
let isPrime = false;
for (let index = 1; index < num; index++) {
    if (num % index !== 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    console.log("Prime Number");
}
else {
    console.log("Not a Prime Number");
}