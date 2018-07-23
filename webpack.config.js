'use strict';

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.trim() : 'development'; // trim для удаления лишних пробелов, если платформа Windows

if (NODE_ENV === 'production') {
    module.exports = require('./config/webpack/prod');
} else {
    module.exports = require('./config/webpack/dev');
}
