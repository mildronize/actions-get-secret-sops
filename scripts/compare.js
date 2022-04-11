const a = process.argv[2];
const b = process.argv[3];
if(a === b){
    console.log("Correct");
} else {
    throw Error("String mismatch!");
}