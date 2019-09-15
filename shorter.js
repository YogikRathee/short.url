var url = "https://www.npmjs.com/package/lz-string"

const UrlShorter = (url) => {
    let i=0, shorturl=''
    while(i < url.length - 10) {
        let dummy = 0
        for(let j=i; j<i+10;j++) {
            dummy+=url[j].charCodeAt()
        }
        var char = dummy%256
        if((char >= 65 && char <= 90) || (char >= 97 && char <=122)) {
            shorturl+=String.fromCharCode(char)
        }
        i++;
    }
    return shorturl
}

module.exports = UrlShorter