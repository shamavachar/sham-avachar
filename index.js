#!/usr/bin/env node

const figlet = require("figlet");
const gradient = require("gradient-string");

async function main() {
  const { default: chalk } = await import("chalk");
  const { default: boxen } = await import("boxen");
  const { default: ora } = await import("ora");

  console.clear();

  // ═══════════════════════════════════════════════════════════════
  // HEADER
  // ═══════════════════════════════════════════════════════════════

  console.log(
    chalk.cyan(`
                           ╭──────────────────────╮
                           │  ✦ HELLO, WORLD! ✦  │
                           ╰──────────────────────╯
    `)
  );

  const banner = figlet.textSync("SHAM", {
    font: "ANSI Shadow",
    horizontalLayout: "default",
    verticalLayout: "default"
  });

  console.log(gradient.atlas.multiline(banner));

  console.log(
    chalk.bold.white(`
                 ⚡ Sham Avachar

        ┌────────────────────────────────────────────┐
        │  ◉ Developer • Student • Builder           │
        │  ◉ Turning ideas into working software     │
        │  ◉ Exploring Web • AI • IoT • Systems      │
        └────────────────────────────────────────────┘
    `)
  );

  // ═══════════════════════════════════════════════════════════════
  // LOADING
  // ═══════════════════════════════════════════════════════════════

  const spinner = ora({
    text: chalk.cyan("Loading Sham's details"),
    spinner: "dots"
  }).start();

  await sleep(900);

  spinner.stopAndPersist({
    symbol: chalk.green("✔"),
    text: chalk.green(" Identity loaded")
  });

  await sleep(300);

  const spinner2 = ora({
    text: chalk.cyan("Loading skills"),
    spinner: "dots"
  }).start();

  await sleep(700);

  spinner2.stopAndPersist({
    symbol: chalk.green("✔"),
    text: chalk.green(" Skills loaded")
  });

  await sleep(300);

  const spinner3 = ora({
    text: chalk.cyan("Loading projects"),
    spinner: "dots"
  }).start();

  await sleep(700);

  spinner3.stopAndPersist({
    symbol: chalk.green("✔"),
    text: chalk.green(" Projects loaded")
  });

  await sleep(300);

  const spinner4 = ora({
    text: chalk.cyan("Establishing connection"),
    spinner: "dots"
  }).start();

  await sleep(700);

  spinner4.stopAndPersist({
    symbol: chalk.green("✔"),
    text: chalk.green(" Connection established")
  });

  console.log("\n");

  // ═══════════════════════════════════════════════════════════════
  // ABOUT
  // ═══════════════════════════════════════════════════════════════

  const about = `
${chalk.bold.cyan("Name")}          -          ${chalk.white("Sham Avachar")}
${chalk.bold.cyan("Status")}        -          ${chalk.white("Student & Developer")}
${chalk.bold.cyan("Location")}      -          ${chalk.white("India")}
${chalk.bold.cyan("GitHub")}        -          ${chalk.white("https://github.com/shamavachar")}
${chalk.bold.cyan("Email")}         -          ${chalk.white("shamavachar20@gmail.com")}
${chalk.bold.cyan("Focus")}         -          ${chalk.white("Web Development • AI • IoT")}
`;

  console.log(
    boxen(about, {
      title: " ABOUT ME ",
      titleAlignment: "center",
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "cyan"
    })
  );

  // ═══════════════════════════════════════════════════════════════
  // TECH STACK
  // ═══════════════════════════════════════════════════════════════

  const stack = `
${chalk.bold.yellow("Languages")}        -        Java, Python, C, C++, JavaScript, TypeScript

${chalk.bold.yellow("Frontend")}         -        HTML, CSS, React

${chalk.bold.yellow("Backend")}          -        Node.js, Express

${chalk.bold.yellow("Databases")}        -        MongoDB, MySQL

${chalk.bold.yellow("Tools")}            -        Git, GitHub, Linux, Docker

${chalk.bold.yellow("Hardware")}         -        Arduino, Sensors, IoT
`;

  console.log(
    boxen(stack, {
      title: " ⚡ TECH STACK ",
      titleAlignment: "center",
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "yellow"
    })
  );

  // ═══════════════════════════════════════════════════════════════
  // PROJECTS
  // ═══════════════════════════════════════════════════════════════

  const projects = `
${chalk.green("🚀")}   MERN Stack Applications

${chalk.green("🤖")}   AI & Intelligent Systems

${chalk.green("🌐")}   Full-Stack Web Platforms

${chalk.green("🔧")}   Arduino & IoT Projects

${chalk.green("🏥")}   Patient Monitoring System

${chalk.green("🏆")}   Hackathon Projects

${chalk.green("💡")}   Experimental & Innovative Builds
`;

  console.log(
    boxen(projects, {
      title: " 🚀 PROJECTS ",
      titleAlignment: "center",
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "green"
    })
  );

  // ═══════════════════════════════════════════════════════════════
  // CONNECT
  // ═══════════════════════════════════════════════════════════════

  const connect = `
${chalk.bold.magenta("GitHub")}        -        ${chalk.white("https://github.com/shamavachar")}

${chalk.bold.magenta("Email")}         -        ${chalk.white("shamavachar20@gmail.com")}

${chalk.bold.magenta("LinkedIn")}      -        ${chalk.gray("Add your LinkedIn URL")}

${chalk.bold.magenta("Portfolio")}     -        ${chalk.gray("Add your Portfolio URL")}

${chalk.bold.magenta("Discord")}       -        ${chalk.gray("Add your Discord")}

${chalk.bold.magenta("X / Twitter")}   -        ${chalk.gray("Add your X profile")}
`;

  console.log(
    boxen(connect, {
      title: " 🔗 CONNECT ",
      titleAlignment: "center",
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "magenta"
    })
  );

  // ═══════════════════════════════════════════════════════════════
  // MESSAGE
  // ═══════════════════════════════════════════════════════════════

  const message = `
${chalk.white(
  "Sham is a passionate developer who loves turning ideas"
)}

${chalk.white(
  "into real-world projects, exploring new technologies,"
)}

${chalk.white(
  "and continuously learning something new."
)}

${chalk.bold.cyan("Keep building. Keep learning. Keep creating. 🚀")}
`;

  console.log(
    boxen(message, {
      title: " ✦ ABOUT SHAM ✦ ",
      titleAlignment: "center",
      padding: 1,
      margin: 1,
      borderStyle: "double",
      borderColor: "cyan"
    })
  );

  // ═══════════════════════════════════════════════════════════════
  // FOOTER
  // ═══════════════════════════════════════════════════════════════

  console.log(
    chalk.bold.cyan(`
       ╭──────────────────────────────────────────╮
       │                                          │
       │      "Student by status. Builder by      │
       │               choice."                   │
       │                                          │
       ╰──────────────────────────────────────────╯
    `)
  );

  console.log(
    chalk.bold.white(`
                    ✦ Thanks for visiting ✦
    `)
  );

  console.log(
    chalk.gray(`
             npx sham-cli • v1.0.0 • Made with ♥
    `)
  );
}

// ═══════════════════════════════════════════════════════════════
// UTILITY
// ═══════════════════════════════════════════════════════════════

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

main().catch(error => {
  console.error(chalk.red("\n✖ Something went wrong:\n"));
  console.error(error);
  process.exit(1);
});