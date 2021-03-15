module.exports = function check(str, bracketsConfig) {
    const config1 = ['()', '[]', '{}', '||', '12', '34', '56', '77', '88']
    let tempStr = str.split('');
    let res = tempStr;
    for (let i = 0; i < tempStr.length - 1; i++) {

        for (let j = 0; j < config1.length; j++) {
            if (tempStr[i] === config1[j][0] && tempStr[i + 1] === config1[j][1]) {
                res.splice(i, 2)
                i = 0;
                j = 0;
                
            }
        }
        
    }
    if(tempStr[0] === '(' && tempStr[1] === ')' && res.length === 2){
        return true;
    }
    
    return res.length === 0;
}
