if (typeof Buffer === 'undefined') {
  global.Buffer = require('buffer').Buffer
}
let RNRandomBytes = require('react-native').NativeModules.RNRandomBytes

function toBuffer (nativeStr) {
  return new Buffer(nativeStr, 'base64')
}

export function randomBytes (length, cb) {
  RNRandomBytes.randomBytes(length, function(err, base64String) {
    if (err) {
      cb(err)
    } else {
      cb(null, toBuffer(base64String))
    }
  })
}

export function asyncRandomBytes (length) {
  return new Promise((resolve, reject) => {
    randomBytes(length,(err, bytes)=>{
        if(err) {
            reject(err)
        } else {
            resolve(bytes)
        }
    })
  })
}