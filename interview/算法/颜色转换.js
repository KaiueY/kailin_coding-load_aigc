/**
 * 
 * @param {string} val 
 */



function toRGB(val) {

    function isVaild(char) {
        const upperChar = char.toUpperCase();

        return (upperChar >= '0' && upperChar <= '9') || 
               (upperChar >= 'A' && upperChar <= 'F');
    }

    const [,color] = val.split('#');
    // console.log(color,typeof color);
    if(color.length === 3) {
          for(let i = 0; i < 3; i++) {
                if(!isVaild(color[i])) {
                    return 'inVaild'
                }
            }
             let red = parseInt(color[0],16) * 17
             let green = color[1].toString(16) * 17
             let blue = color[2].toString(16) * 17
            return `rgb(${red},${green},${blue})`
          
    }
    if(color.length === 6) {
        for(let i = 0; i < 6; i++) {
            if(!isVaild(color[i])) {
                return 'inVaild'
            }
        }
        let red = parseInt(color.slice(0,2),16)
        let green = parseInt(color.slice(2,4),16)
        let blue = parseInt(color.slice(4,6),16)
        return `rgb(${red},${green},${blue})`
    }
    return 'inVaild'
    
}
console.log(toRGB('#h37'));
