# Goggles #
Images for the command line


## Introduction ##

Ever find yourself ssh'd into a remote server wondering what some image looks like, and without an
easy way to look at it? You need *goggles*.

## Install ##

You'll need [Cairo](https://github.com/LearnBoost/node-canvas/wiki/Installation---OSX) on your system.

Then:

        npm install -g goggles

## Use it ##

        $ goggles lenna.png --width 120

![](http://github.com/peterbraden/goggles/raw/master/images/lenna-out.png)


        $ cat mona.jpg | goggles

![](http://github.com/peterbraden/goggles/raw/master/images/mona-out.png)


## Programatically ## 

        var fs = require('fs')
        , goggles = require('goggles')

        goggles(fs.readFileSync('./cat.jpg') , 130)



## Boom ##

(Please note, like with all goggles, you're gonna have to squint a bit)
