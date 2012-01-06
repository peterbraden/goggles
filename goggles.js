var fs = require('fs')
  , Canvas = require('canvas')
  , colors = require('colors')
  , opts = require('nomnom').parse()

var chars = [" ", "▁", "▂", "▃", "▄", "▅", "▆", "▇", "█", " ".inverse]
//['.', '_', '=', '!','8','%','&', '#']

var WIDTH = opts.width || 80

var charShade = function(val){
  return chars[parseInt(((val*(val/2))/(256.0*(256/2))) * (chars.length-1))]
}

var colorify = function(err, src){
  if (err) throw err;
  img = new Canvas.Image;
  
  img.onload = function(){
    var canvas = new Canvas(img.width, img.height)
      , ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, img.width, img.height); 
    
    
    var im = ctx.getImageData(0, 0, canvas.width, canvas.height)
      , d = im.data
      , sf = im.width / WIDTH * 3
    
    for (var j =0; j< im.height; j+=parseInt(sf)){  
      for (var i = 0; i< im.width; i+=parseInt(sf)){
        var r = d[4 * (j * im.width + i) + 0]
          , g = d[4 * (j * im.width + i) + 1]
          , b = d[4 * (j * im.width + i) + 2]
        
        process.stdout.write(charShade(r).red + charShade(g).green + charShade(b).cyan)
        //console.log(">>", r,g,b);
      } 
      process.stdout.write('\n') 
    }  
    
    
  }
  
  img.onerror = function(){
    console.log(arguments)
    console.trace()
  }
 
  img.src = src
  
}


if (opts[0]){
  fs.readFile(opts[0], colorify);
} else {
   colorify(null, fs.readFileSync('/dev/stdin'))
} 

