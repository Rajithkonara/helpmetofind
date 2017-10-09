'use strict';

require('dotenv').config();

var appConfig = {

    // application port
    serverPort: process.env.wm_server_port || '3060',
    
    mongoDb: process.env.wm_mongo_server || 'your-mongodb-url-here'
}

module.exports = appConfig;
