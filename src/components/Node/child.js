const exec = require("child_process").exec;

exec("dir", (error, stdout, stderr) => {
  if (error) {
    console.log(error);
  } else {
    console.log(stdout);
  }
});
