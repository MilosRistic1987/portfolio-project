var pokemon1={
    Ime:'Kakuna',
    vrsta:'Otrovna buba',
    Sposobnosti:['mutacija','kamuflaza'],
    Karakteristike:{
        napad:25,
        odbrana:50,
        brzina:35
    }
}

var pokemon2={
    Ime:'Beedrill',
    vrsta:'Otrovna buba',
    Sposobnosti:['roj','sniper'],
    Karakteristike: {
        napad:90,
        odbrana:40,
        brzina:75,
    }
}

var pokemon3={
    Ime:'Jolteon',
    vrsta:'Elektricni',
    Sposobnosti:['apsorbuje voltazu', 'brze noge'],
    Karakteristike:{
        napad:65,
        odbrana:60,
        brzina:130
    }
}

var pokemon4={
    Ime:'Raikou',
    vrsta:'Elektricni',
    Sposobnosti:['trpi pritisak' ,'unutrasnji fokus'],
    Karakteristike:{
        napad:85,
        odbrana:75,
        brzina:110
    }
}

var nizPokemona=[pokemon1,pokemon2,pokemon3,pokemon4];

function vratiSveSposobnosti(pokemoni) {
    var sveSposobnosti=[];
pokemoni.forEach((el)=>{
    sveSposobnosti=sveSposobnosti.concat(el.Sposobnosti)  
}
)
  return sveSposobnosti;  
}
vratiSveSposobnosti(nizPokemona);
console.log(vratiSveSposobnosti(nizPokemona));



nizPokemona.sort((a,b) => {
         return a.Karakteristike.brzina - b.Karakteristike.brzina;
})
console.log(nizPokemona);



function uporediPokemone(nizPokemona) {
    var pobednik;
    var najjaciPokemon=0;
    nizPokemona.forEach((pokemon)=>{
        if(pokemon.Karakteristike.napad>najjaciPokemon){
            pobednik=pokemon;
            najjaciPokemon=pokemon.Karakteristike.napad;
        }
    })
    return pobednik;
    
}
 
// console.log(uporediPokemone(nizPokemona));

   
