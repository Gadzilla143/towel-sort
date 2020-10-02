
// You should implement your task here.

module.exports = function towelSort (matrix = 0) {
  if (matrix == 0){
    return [];
  }
  let arr = [];
  let counter = 0;
  for (let i = 0; i < matrix.length; i++){
    if(i == 0){
    for(let k = 0; k < matrix[i].length; k++){
      arr[counter] = matrix[i][k];
      counter++;
    }
    } else if(i % 2 != 0){
      matrix[i].reverse();
      for(let k = 0; k < matrix[i].length; k++){
        arr[counter] = matrix[i][k];
        counter++;
      }
    } else {
      for(let k = 0; k < matrix[i].length; k++){
        arr[counter] = matrix[i][k];
        counter++;
      }
    }
  }
  return arr;
}
