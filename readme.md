
# Tnotification

is a library for simple alert messages


## Installation

Install tnotification as 'umd', 'module' or 'common' (Requiere css)

```javascript
  <link rel="stylesheet" href="/dist/style.css">

  <script src="/dist/tnotification.umd.cjs"></script>
  or
  import tnotification from '/dist/tnotification';
  or
  const tnotification = require('/dist/tnotification');
```
## Usage/Examples

```javascript
tnotification({
    data: {
        title: "Hello world",
        content: "Lorem input Lorem input Lorem input Lorem input Lorem",
        type: "info"
    },
    position: "bottomleft"
});
```


## Options
```javascript
tnotification({
    data: {
        title: "Hello world",
        content: "Lorem input Lorem input Lorem input Lorem input Lorem",
        type: "info"
    },
    position: "bottomleft"
});

data.title = (String) title notification "default value is "" "
data.content = (String) text content notification "default value is "" "
data.type = (String) type of notification "error|warning|success|info" "default value is "info""
data.timeout = (Number) time for delete notification "default value is "8 seconds""
data.removeEmpty = (Boolean) remove wrapper if it empty "default value is "false""

```

## Authors
takeshi hp


## License
MIT