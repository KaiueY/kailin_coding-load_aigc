function reserve(s:string): string {
    let word = ''
    let res = ''
    const len = s.length
    for(let i = 0 ;i<len;i++){
        if(s[i] !== ' '){
            word += s[i]
        }
        if(s[i] === ' '|| i==len-1){
            res = word + ' ' + res
            word = ''
        }
    }
    return res
}

function reserve2(s:string): string {
    return s.split(' ').reverse().join(' ')
}

