const fs = require("fs");
fs.readFile("lab_6/data.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.appendFile("Lab_6/output.txt", "Hello from sbvj", (err) => {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Successfully");
      }
    });
  }
});
