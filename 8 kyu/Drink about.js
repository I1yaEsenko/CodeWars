function peopleWithAgeDrink(old) {
    return old < 14 ? "drink toddy" : old <18 ?"drink coke" :
        old < 21 ? "drink beer" : "drink whisky" ;

    //const peopleWithAgeDrink = old => 'drink ' + (old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky')
};