spritrel
========
Spritrel is a animater for css sprites, It can animate a single dimensional or multi-dimensional sprite

## Quick Example

```javascript
var sprite = spritrel.create('#brain', {rows : 18, cols: 5});
sprite.start();
```

The API for spritrel is more richer than just a start and a stop, check the rest of the documentation.

## Browser Support

It should work in FF, Chrome and IE 9 +


## Download
The source is available for download from [GitHub](https://github.com/ricardofbarros/spritrel/tree/master/src), you can get the minified version [here](#)

## API

### Flow control
* [start](#start)
* [stop](#stop)
* [goTo](#goTo)
* [changeDirection](#changeDirection)
* [changeSpeed](#changeSpeed)


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
