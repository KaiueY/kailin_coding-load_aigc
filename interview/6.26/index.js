let count = 1

setInterval(() => {
    console.log('count=>', count++);
    if(count > 4){
        count = 1
    }
}, 1000)