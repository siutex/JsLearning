var matrix3x3x3 = [];
  for (var i=0; i<3; i++){
      matrix3x3x3[i] = [];
        for (var j=0; j<3; j++){
              matrix3x3x3[i][j] = [];
                for (var z=0; z<3; z++){
                    matrix3x3x3[i][j][z] = i+j+z;
                      }
                        }
                          }
//wydruk

for (var i=0; i<matrix3x3x3.length; i++){
    for (var j=0; j<matrix3x3x3[i].length; j++){
          for (var z=0; z<matrix3x3x3[i][j].length; z++){
                      console.log(matrix3x3x3[i][j][z]);
                            }
                              }
                                }

                                ///łączenie tablic
                                var zero = 0;
                                var positiveNumbers = [1,2,3];
                                var negativeNumbers = [-3,-2,-1];
                                var numbers = negativeNumbers.concat(zero, positiveNumbers);
