const { Sequelize } = require("sequelize");
const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

const toBool = (x) => x == "true";

DATABASE_URL = process.env.DATABASE_URL || "./lib/database.db";


let HANDLER = "false";

module.exports = {
  ANTILINK: toBool(process.env.ANTI_LINK) || true,
  
  LOGS: toBool(process.env.LOGS) || true,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  
  AUTO_STATUS_READ: process.env.AUTO_STATUS_READ || 'true',
  
  SESSION_ID: process.env.SESSION_ID || "Phoenix~fhe3Eev43", //Enter Your Session Id Here
  
  SUDO: process.env.SUDO || "919074692450",
  
  LANG: process.env.LANG || "EN",
  
  HANDLERS: process.env.HANDLER === "true" || '^[.]',
  
  RMBG_KEY: process.env.RMBG_KEY || false,
  
  BRANCH: "main",
  
  STICKER_DATA: "CR7 THE GOAT ",
  
  WELCOME_MSG: process.env.WELCOME_MSG || "Hi @user Welcome To @gname Total Members: @count",
  
  GOODBYE_MSG: process.env.GOODBYE_MSG || "Hi @user It Was Nice Seeing you",
  
  DATABASE_URL: DATABASE_URL,
  
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "phoenixmd5",
  
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "48440c2a-6ec6-49a8-848a-1849ff726c5e", ,
  
  OWNER_NAME: process.env.OWNER_NAME || "CR7 THE GOAT ",
  
  OWNER_NUMBER: process.env.OWNER_NUMBER || "27727688465 ",
  
  BOT_NAME: process.env.BOT_NAME || "Phoenix-MD",
  
  WORK_TYPE: process.env.WORK_TYPE || "true",
  //---------------------------------------------
  //Database
  DATABASE:
    DATABASE_URL === "./lib/database.db"
      ? new Sequelize({
          dialect: "sqlite",
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: "postgres",
          ssl: true,
          protocol: "postgres",
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
};
