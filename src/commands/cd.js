const chalk = require("chalk");

const cd = (dir) => {
  try {
    process.chdir(dir);
  } catch (err) {
    if (err.message.toLowerCase().includes("enoent")) {
      console.log(`${chalk.red(`${dir}`)} does not exist.`);
      console.log();
    } else if (err.message.toLowerCase().includes("eperm")) {
      console.log(`You do not have permission to view ${chalk.red(`${dir}`)}.`);
      console.log();
    } else {
      console.log(`${chalk.red(err.message)}.`);
      console.log();
    }

    return;
  }

  console.log(`Changed directory to ${chalk.green(process.cwd())}.`);
  console.log();
};

module.exports = cd;
