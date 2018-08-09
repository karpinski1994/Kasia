//Napisz funkcję create2DArray, która przyjmuje dwa argumenty w postaci dwóch liczb całkowitych rows i columns. 
//Zadaniem funkcji jest stworzenie i zwrócenie dwuwymiarowej tablicy o podanej liczbie rzędów i kolumn. 
//Każda komórka ma być wypełniona kolejną liczbą całkowitą. 
//Pamiętaj o tym, że tablica ta ma zostać zwrócona przez funkcję inaczej zadanie będzie nie zaliczone. 
//Hint: Musisz użyć pętli zagnieżdżonych. Rozwiązanie: 

function create2DArray(rows, columns) {
    var output = [];
    for(var i = 1; i <= rows; i++) {

        var liter = 0;
        var pomoc = [];
        output[i] = [];

        for(var j = 0; j < columns; j++) {
            liter += 1;
            pomoc[j] = liter;
        }

        output[i].push(
            pomoc
        )
    }
    
};

create2DArray(2,4);