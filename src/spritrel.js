(function ( $ ) {
    // Error messages
    var errorMissingElem = 'You need to give a valid Id or Class of an element',
        errorMissingOptions = 'You need to set the required params in options';
    
    var spritrel = {
        elems : []
    };
    var root = this;

    spritrel.create = function(elem, options) {
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
        } else if(selector === '#') {
            element = document.getElementById(elementName);
        } else {
            throw new Error(errorMissingElem);
        }

        // Third check - Check if required options exist
        if(typeof options === 'undefined') {
            throw new Error(errorMissingOptions);
        }
        if(typeof options.cols   === 'undefined')
        {
            throw new Error(errorMissingOptions);
        }

        options.height = element.naturalHeight / options.rows;
        options.width = element.naturalWidth / options.cols;     

        // Check if fps is set, default 9
        if(typeof options.fps === 'undefined') {
            options.fps = 9;
        }

        // Simple math to translate fps to interval for the loop
        var interval = 1000 / options.fps;
        var loop;
        
        // Construct div
        var imgDiv = document.createElement("DIV");
        imgDiv.style.background =  'transparent url('+element.src+') 0 0 no-repeat';
        imgDiv.style.width =  options.width+'px';
        imgDiv.style.height =  options.height+'px';
        imgDiv.id = elementName
        
        // Replace img with div in DOM
        element.parentNode.replaceChild(imgDiv, element);
        
        // Pass the new reference of the element
        element = imgDiv;

        /**
         * Construct object
         * @type type
         */
        var Spritrel = {};

        // Flow control fn
        Spritrel.start = function() {
            var countCols = 0;
            var countRows = 0;
            
            loop = setInterval(function() {
                var posX = countCols * options.width;
                var posY = countRows * options.height;
                element.style.backgroundPosition =  '-'+posX+'px -'+posY+'px';

                if(countRows >= (options.rows - 1) && countCols >= (options.cols - 1)) {
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
        };

        Spritrel.stop = function() {
            clearInterval(loop);                     
        };
        
        Spritrel.resume = function() {
            
            
        };
        
        
        Spritrel.goTo = function() {

        };


        Spritrel.changeDirection = function() {

        };

        Spritrel.changeSpeed = function(fps) {

        };

        Spritrel.flip = function() {


        };

        // Event control fn
        Spritrel.on = function(sprite, cb) {

        };

        Spritrel.onEach = function(cb) {

        };   
        
        spritrel.elems.push(Spritrel);
        
        return Spritrel;
    };  
    
    root.spritrel = spritrel;
}());