function targetTerdekat(arr) {
    var tampungX=[]
    var tampungO=-1
    var selisih =0
  for(var i=0; i < arr.length; i++){
      if (arr[i]=='o'){
          tampungO=i
      }else if (arr[i]=='x'){
          tampungX.push(i)
      }
    }
      if(tampungX.length ==0){
          return 0
      }
   var terdekat=Math.abs(tampungX[0]-tampungO)
  for(var j=0; j< tampungX.length; j++){
      selisih=tampungX[j]-tampungO
      if(selisih<terdekat){
          terdekat=Math.abs(selisih)
      }
     
  }
  return terdekat
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2