Cài đặt:
 ```shell script
  npm install @ng.huyy/express_fastr --save
 ```
Sử dụng:
```javascript
    require('@ng.huyy/express_fastr')(
        [
            ['/', require('./routes/index')], //Router, file
            ["/vm", require('./routes/vm'),{cf:{}}], //Rourer, file, passing router object, ex: console.log(router.cf), Note: app will passing in router.app
        ]
    ,app);
```