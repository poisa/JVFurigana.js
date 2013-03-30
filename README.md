# JVFurigana.js
### jQuery plugin for adding furigana to japanese text

Version 1.0 Created by [Julian Vidal](http://julianvidal.com/)

## What exactly is furigana?

[Furigana](http://en.wikipedia.org/wiki/Furigana) according to Wikipedia is:

>A Japanese reading aid, consisting of smaller kana, or syllabic characters, printed next to a kanji (ideographic character) or other character to indicate its pronunciation. It is typically used to clarify rare, nonstandard or ambiguous readings, or in children's or learners' materials.

Simply put, you could know how to *read* a certain word in Japanese but that doesn't necessarily mean that you know how to pronounce it. To solve this problem, publishers use furigana to tell the reader how a particular word is pronounced.

A Japanese sentence looks like this:

林さんは英語は話せます。

To add a phonetic guide it is common practice to include the pronunciations between parenthesis right after the kanji, like this:

林（はやし）さんは英語（えいご）は話（はな）せます。

While this makes pronunciations very clear it makes the text less readable.

This module takes furigana entered in the above format and converts it to proper HTML using **ruby**, **rp**, and **rt** tags. This will turn the above sentence into this:

    <ruby>林<rp>(</rp><rt>はやし</rt><rp>)</rp></ruby>さんは<ruby>英語<rp>(</rp><rt>えいご</rt><rp>)</rp></ruby>は<ruby>話<rp>(</rp><rt>はな</rt><rp>)</rp></ruby>せます。

Supported browsers (like Chrome) will render it like this:

![Rendered furigana](http://julianvidal.com/images/furigana.png)

And a nice advantage is that browsers that don't support ruby text will degrade gracefully and render your text exactly as you entered it. Actually the text will *look* the same but since the furigana will now be wrapped in its own tags, you will be able to style them the way you want. You couldn't have done this without ruby tags. So as you see the **ruby** tag has its benefits.


## Installation

This is done in three steps.

1. Copy `src/jvfurigana.plugin.js` or the minified version: `src/jvfurigana.plugin.min.js` to your project.
2. Copy `lib/xregexp-all-min.js` to your project. This is a required dependency. For more info see http://xregexp.com
3. Copy or link the jQuery library to your project. Check out the `examples` dir for how to do this as some examples link to jQuery (via jQuery's CDN) and others just use the local file included in this project)

## Usage

```javascript
$(document).ready(function(){
    $(".yourSelectorHere").JVFurigana();
});
```
## It doesn't work.
Make sure you are using a supported browser. At the time of this writing, Firefox and Opera won't render the ruby tags. Also, the plugin is set to ignore rendering in these two browsers unless you pass `forceRender: true` as a parameter. Note that even is you pass `forceRender: true` on Firefox you will **not** see any changes even though the HTML DOES get modified.

```javascript
$(document).ready(function(){
    var options = {
        forceRender: true
    }
    $(".yourSelectorHere").JVFurigana(options);
});
```

## Using other HTML styling breaks the plugin.
Maybe. It all depends on *how* you style your HTML. The plugin uses regular expressions to parse the text and is expecting the following formula:

* **one (or more) kanji** immediately followed by
* **opening parenthesis** immediately followed by
* **one or more hiragana** immediately followed by
* **closing parenthesis**

So if you break this pattern by inserting HTML in it, the regex will break.

## That's nice, but can I do this server-side?
Yes. I've made a PHP Zend Framework 2 module with this same code which can be used with or without the Zend Framework 2. See here: http://poisa.github.com/JVFurigana.

## License

JVFurigana.js is released under the Apache license. See the included LICENSE file.

## VERSION HISTORY

2013-03-29 First version
