const url = require('url')
const path = require('path')

function getDBConfig() {  
  const defaultDB = {
    client: 'sqlite3',
    connection: {
      filename: path.join(process.env.GHOST_CONTENT, '/data/ghost.db')
    },
    debug: false
  }
  return defaultDB
}

function getMailConfig() {  
  const mail_config = {
    host: process.env.MAIL_HOST,
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  }
  return mail_config
}

function getBlogURL() {
  if (!process.env.URL) {  
    console.log("Please set URL environment variable to your blog's URL");
    process.exit(1);
  }
  return process.env.URL
}

const config = {  
  production: {
    url: getBlogURL(),
    database: getDBConfig(),
    mail: process.env.USE_CUSTOM_MAIL ? getMailConfig() : {},
    server: {
      host: '0.0.0.0',
      port: '2368'
    },
    paths: {
      contentPath: path.join(process.env.GHOST_CONTENT, '/')
    }
  },
  development: {
    url: getBlogURL(),
    database: getDBConfig(),
    mail: process.env.USE_CUSTOM_MAIL ? getMailConfig() : {},
    server: {
      host: '0.0.0.0',
      port: '2368'
    },
    paths: {
      contentPath: path.join(process.env.GHOST_CONTENT, '/')
    }
  },
}

module.exports = config

