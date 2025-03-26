# opengauss.js

[![npm version](https://img.shields.io/npm/v/opengauss.js.svg)](https://www.npmjs.com/package/opengauss.js)  
**Non-blocking OpenGauss/PostgreSQL client for Node.js with pure JavaScript implementation.**

**A hybrid database client that supports both OpenGauss and PostgreSQL connections simultaneously**, based on:
- [node-postgres@8.14.1](https://github.com/brianc/node-postgres)
- [openGauss-connector-nodejs](https://github.com/opengauss-mirror/openGauss-connector-nodejs)
- [pg-opengauss](https://github.com/whyour/pg-opengauss)

✅ ​**Key Features**  
- Dual-database support with type switching
- Compatibility with `Knex.js` and other query builders
- Native promise-based API
- Connection pooling support
- Enables smooth transition of existing Knex.js applications from PostgreSQL to OpenGauss with schema compatibility

## Installation
```bash
npm install opengauss.js
```

## Usage

### Basic Client Setup Configuration
```javascript
const { Client } = require("opengauss.js");

const client = new Client({
    // Base configuration (inherited from node-postgres)
    user: 'dbuser',
    password: 'secretpassword',
    host: 'database.server.com',
    port: 3211,
    database: 'mydb',

    // Key parameter [required]
    databaseType: 'openGauss'  // Options: 'openGauss' | 'postgre' | 'pg' (Default: 'openGauss')
});
```

### Integration with Knex.js
Seamless replacement via npm alias:
```javascript
// package.json
{
    ...,
    "dependencies": {
        "pg": "npm:opengauss.js@^1.0.0"
    }
}
```

Knex configuration
```javascript
const knex = require('knex')({
  client: 'pg',
  connection: {
    databaseType: 'openGauss',  // Specify database type
    // ...other standard pg configurations
    host: '127.0.0.1',
  }
});
```


