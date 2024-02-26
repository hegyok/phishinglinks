const fs = require('fs');
const domains = fs.readFileSync("blacklist.txt", "ascii").split("\r\n")

const output = [];

domains.forEach((d, i) => {
  console.log(`Completed ${i}/${domains.length}(${Math.floor((i/domains.length)*100)}%) domains`)
  if(!output.includes(d)) output.push(d);
})

console.log(`Total of ${output.length} domains after cleanup`)

console.log("Writing to file")
fs.writeFileSync("output.txt", output.join("\n"))
console.log(`Written to output.txt`)