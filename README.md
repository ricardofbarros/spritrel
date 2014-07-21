spritrel
========
Spritrel is a animater for css sprites, It can animate a single dimensional or multi-dimensional sprite

## Quick Example

```javascript
var sprite = new spritrel('#brain', {rows : 18, cols: 5, width: 200, height: 130, img : 'brain.png'});
sprite.start();
```

The API for spritrel is more richer than just a start and a stop, check the rest of the documentation.

## Browser Support



## Download
The source is available for download from [GitHub](https://github.com/ricardofbarros/spritrel/tree/master/src), you can get the minified version [here](#)

## API

### Flow control
* [start](#start)
* [stop](#stop)
* [goTo](#goTo)
* [changeDirection](#changeDirection)
* [changeSpeed](#changeSpeed)
* [flip](#flip)

### Event control
* [on](#on)
* [onEach](#onEach)


## Flow Control

<a name="start"/>
### start()
Start the animation.

___Examples___

```javascript
// assuming you already instantiated the spritrel object in the sprite var

sprite.start();
```

### stop()
Stop the animation.

___Examples___

```javascript
// assuming you already instantiated the spritrel object in the sprite var

sprite.stop();
```
