function findInSortedMatrix(matrix, target) {
    if(matrix.length === 0 || matrix[0].length === 0) return false;
    const rows = matrix.length 
    const cols = matrix[0].length
    let row = 0 
    let col = matrix[0].length
    while(row<rows && col>=0){
        const current = matrix[row][col]
        if(current === target){
            return true
        }else if(current < target){
            row++
        }
        else{
            col--
        }
    }
    return false
}