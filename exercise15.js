function groupAnimals(animals) {
    animals.sort()
    var groupArray=[]

    var hurufAwal= animals[0][0]
    var kelompokBinatang=[]
    for(var i=0; i<animals.length; i++){
        if(hurufAwal==animals[i][0]){
            kelompokBinatang.push(animals[i])
        }
        else{
                groupArray.push(kelompokBinatang)
               kelompokBinatang=[]
               kelompokBinatang.push(animals[i])
               hurufAwal=[i][0]

        }
    } groupArray.push(kelompokBinatang)
    return groupArray

}
   
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]