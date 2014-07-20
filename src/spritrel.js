function spritrel(elem, options) {
    // Error messages
    var errorMissingElem = 'You need to give a valid Id or Class of an element',
        errorMissingOptions = 'You need to set the required params in options';

    // First check - see if var elem is set
    if(typeof elem === 'undefined') {
        throw new Error(errorMissingElem);
    }

    // Get the selector type of element and the name of element
    var selector = elem.substr(0,1),
        elementName = elem.substr(1),
        classFlag = false,
        element;

    // Second check - check if elem is a valid DOM Element
    // as class or an id
    if(selector === '.') {
        element = document.getElementsByClassName(elementName);
        classFlag = true;
    }
    else if(selector === '#') {
        element = document.getElementById(elementName);
    } else {
        throw new Error(errorMissingElem);
    }

    // Third check - Check if required options exist
    if(typeof options === 'undefined') {
        throw new Error(errorMissingOptions);
    }
    if(typeof options.cols   === 'undefined' ||
       typeof options.img    === 'undefined' ||
       typeof options.width  === 'undefined' ||
       typeof options.height === 'undefined') {
        throw new Error(errorMissingOptions);
    }

    // Set element style
    element.style.background =  'transparent url('+options.img+') 0 0 no-repeat';
    element.style.width =  options.width+'px';
    element.style.height =  options.height+'px';

    // Check if rows is set, default 1
    if(typeof options.rows   === 'undefined') {
        options.rows = 1;
    }

    // Check if fps is set, default 9
    if(typeof options.fps === 'undefined') {
        options.fps = 9;
    }

    // Simple math to translate fps to interval for the loop
    var interval = 1000 / options.fps;
    var loop;

    var Spritrel = {
        // Flow control fn
        start : function() {
            var countCols = 0;
            var countRows = 0;

            loop = setInterval(function() {
                var posX = countCols * options.width;
                var posY = countRows * options.height;
                element.style.backgroundPosition =  '-'+posX+'px -'+posY+'px';

                if(countRows >= (options.rows - 1)) {
                    countCols = 0;
                    countRows = 0;
                } else {
                    if(countCols >= (options.cols - 1)) {
                        countCols = 0;
                        countRows++;
                    } else {
                        countCols++;
                    }
                }
            },interval);
        },
        stop : function() {
            clearInterval(loop);
        },
        goTo : function(sprite) {

        },
        changeDirection : function() {

        },
        changeSpeed : function(fps) {

        },
        flip : function() {

        },

        // Event control fn
        on : function(sprite, cb) {

        },
        onEach : function(cb) {

        }
    };

    return Spritrel
}