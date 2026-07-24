# Change Log

## 1.2.0
- minimum node version is now `16.0.0`
- update internal `pg-pool` to `3.14.0`
- update internal `pg-connection-string` to `2.14.0`
- update internal openGauss protocol files(`lib/opengauss/protocol/*.js`) based on `pg-protocol` to `1.15.0`
- files migrated to `pg@8.22.0`:
  - `lib/connection-parameters.js`
  - `lib/defaults.js`
  - `lib/utils.js`
  - `lib/query.js`
  - `lib/result.js`
  - `lib/crypto/sasl.js`
  - `lib/crypto/utils.js`
  - `lib/crypto/cert-signatures.js`
  - `lib/opengauss/connection.js`
  - `lib/postgres/connection.js`
- remove `lib/crypto/utils-webcrypto.js` & `lib/crypto/utils-legacy.js` as they are contained in `lib/crypto/utils.js`