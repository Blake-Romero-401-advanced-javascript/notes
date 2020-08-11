'use strict';

const http = {};

http.fetch = function (opts){
  if (opts) {
    console.log(`Fetching ${opts.url}`);
    console.log(`Mthod ${opts.method}`);
  }
}

module.exports = http;