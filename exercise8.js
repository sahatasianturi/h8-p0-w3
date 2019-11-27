function pasanganTerbesar(num) {
    var pembanding=0
    var angka=''
    stringNum= num.toString()
    for(var i=0; i<stringNum.length-1; i++){
        angka = stringNum[i]+stringNum[i+1]
        var hasil=Number(angka)
        if (hasil>pembanding){
            pembanding = hasil
            

        }
    }return pembanding
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99