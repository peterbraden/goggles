#!/usr/bin/env node

var opts = require('nomnom').parse()
  , fs = require('fs')
  , goggles = require('./goggles')
  , WIDTH = opts.width

if (opts){
  if (opts[0]){
    fs.readFile(opts[0], function(err, im){
      if (err)
        throw err
      goggles(im, WIDTH)
    });
  } else {
     goggles(fs.readFileSync('/dev/stdin'), WIDTH)
  } 
}
