const pc = require('picocolors')

const path = require('node:path')

console.log(path.sep)

console.log(
  pc.green(`How are ${pc.italic('you')} doing?`)
)

const filepath = path.join('content', 'sub-folder', 'test.txt')
console.log(pc.red(filepath))
const base = path.basename('/tem/midu/password.txt')
console.log(base)
const filename = path.basename('/tem/midu/password.txt', '.txt')
console.log(filename)
const extension = path.extname('me.super.mario.jpg')
console.log(extension)
