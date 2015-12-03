# netiam-contrib-transform

[![Build Status](https://travis-ci.org/netiam/contrib-transform.svg)](https://travis-ci.org/netiam/contrib-transform)
[![Dependencies](https://david-dm.org/netiam/contrib-transform.svg)](https://david-dm.org/netiam/contrib-transform)
[![npm version](https://badge.fury.io/js/netiam-contrib-transform.svg)](http://badge.fury.io/js/netiam-contrib-transform)

> A transform plugin for netiam

## Example

```js
netiam()
  .transform((req, res) => {
    res.body = res.body.map(n => n * n)
  ))
  .json()
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
