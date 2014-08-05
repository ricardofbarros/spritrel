0(function ( $ ) {
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
        
        Spritrel._direction = 'right';  
        Spritrel._countCols = 0;
        Spritrel._countRows = 0;
                
        var resetCounters = function() {
            if(Spritrel._direction === 'right') {
                Spritrel._countCols = 0;
                Spritrel._countRows = 0;                 
            } else {
                Spritrel._countCols = options.cols - 1; 
                Spritrel._countRows = options.rows - 1;             
            }           
        };

        // Flow control fn
        Spritrel.pause = function() {
            clearInterval(loop);                     
        };
        
        var changePosition = function() {
            var posX = Spritrel._countCols * options.width;
            var posY = Spritrel._countRows * options.height;
            element.style.backgroundPosition =  '-'+posX+'px -'+posY+'px';
        };
        
        Spritrel.resume = function() {
            Spritrel.pause();
            loop = setInterval(function() {
                changePosition();
                if(Spritrel._direction === 'right') {
                    if(Spritrel._countRows >= (options.rows - 1) && Spritrel._countCols >= (options.cols - 1)) {
                        resetCounters();
                    } else {
                        if(Spritrel._countCols >= (options.cols - 1)) {
                            Spritrel._countCols = 0;
                            Spritrel._countRows++;
                        } else {
                            Spritrel._countCols++;
                        }
                    }
                } else {
                    if(Spritrel._countRows <= 0 && Spritrel._countCols <= 0) {
                        resetCounters();
                    } else {
                        if(Spritrel._countCols <= 0) {
                            Spritrel._countCols = options.cols - 1;
                            Spritrel._countRows--;
                        } else {
                            Spritrel._countCols--;
                        }
                    }                    
                }
            },interval);             
        };
        
        Spritrel.start = function() {
            resetCounters();
            Spritrel.resume();
        };

        Spritrel.stop = function() {
            resetCounters();
            Spritrel.pause();
            element.style.backgroundPosition =  '0px 0px';
        };        
        
        
        Spritrel.goTo = function(sprite) {
            Spritrel._countCols = sprite % options.cols;
            Spritrel._countRows = Math.floor(sprite / options.cols);
            changePosition();
        };


        Spritrel.changeDirection = function() {
            if(Spritrel._direction === 'right') {
                Spritrel._direction = 'left';
            } else {
                Spritrel._direction = 'right';
            }
            Spritrel.resume();            
        };

        Spritrel.changeSpeed = function(fps) {
            interval = 1000 / fps;
            Spritrel.resume();
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