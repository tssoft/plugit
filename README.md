plugit
======

A simple tool for easy creating jQuery plugin from plain object.

##Installation

```html
<script src="/path/to/plugit.js"></script>
```

###Usage

```javascript
plugit('textColor', {
  settings: {
      color: 'red',
      text: 'Like a Mars'
  },
  init: function() {
      this._el.css('color', this.settings.color).text(this.settings.text);
      return this._el;
  },
  setColor: function(color) {
      this._el.css('color', color);
      return this._el;
  }
});
```

And then just call

```javascript
$('#white-title').textColor({
    color: 'white',
    text: 'Like a snow'
});
```

Or if u want use default settings

```javascript
$('#white-title').textColor();
```

###Properties

####_el

Target jQuery-object.

####settings

Plugin settings. When plugin applies, this property extends with new settings.
