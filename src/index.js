
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let ma = []
  if(!matrix||matrix.length==0)return []
for(let i = 0; i <matrix.length; i ++ ){
  if(i%2==0){
  ma.push(matrix[i])
  }else{
  ma.push(matrix[i].reverse())
  }
}
  return ma.toString().split(',').map(item=>+item);
}
