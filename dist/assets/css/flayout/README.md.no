flayout
=======

What is it?
-----------
Flayout is a css library meant to make positioning elements easier.
Based on flexbox, Flayout is a very simple wrapper written in less, intended to give you the best experience.

Installation
------------
Installation is very simple.
Simply clone this repo, then put this line of html at the top of your page:
```js
<link rel="stylesheet" type="text/css" media="screen" href="flayout/flayout.css.css">
```
If you use [less](http://lesscss.org), you can also [import](http://lesscss.org/features/#import-atrules-feature) it to use with less's css inheritance
```css
@import "flayout/flayout.less";
```

How to use it
------------
All flayout does is define many classes. You can use all of these in any html element by doing
```js
<p class="f-{{class name}}"></p>
```
- **f-h**: This will order all of its child elements horizontally. AKA a hbox layout.
- **f-v**: This will order all of its child elements vertically. AKA a vbox layout.
- **f-v-reverse**: Exactly the same as the f-h, but its children's order will be reversed.
- **f-h-reverse**: Exactly the same as the f-v, but its children's order will be reversed.
- **f-wrap**: Makes the content of its tag wrap.
- **f-grow**: Makes the element it's used on expand to take up all the available space.
- **f-span-{amount 2-4}**: This will tell the element to span {amount} of rows.
- **f-m-h**: Makes the element be a f-h on mobile devices
- **f-m-v**: Makes the element be a f-v on mobile devices
- **f-m-v-reverse**: Makes the element be a f-v-reverse on mobile devices
- **f-m-h-reverse**: Makes the element be a f-h-reverse on mobile devices
- **f-m-grow**: Makes the element expand to fill all the space it can on mobile devices
- **f-m-no-grow**: Stops the element filling all the available space on mobile devices

These are all of the classes that flayout defines.
