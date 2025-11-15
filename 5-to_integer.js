const argument = process.argv[2];
const numberValue = parseInt(argument);
if (Number.isNaN(numberValue)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${numberValue}`);
}   