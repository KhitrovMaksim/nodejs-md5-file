'use strict'

const crypto = require('crypto')
const fs = require('fs')

function getMD5OfFile (fileToHash) {
    const file = fs.readFileSync(fileToHash)
    return crypto.createHash('md5').update(file).digest('hex')
}

module.exports = getMD5OfFile