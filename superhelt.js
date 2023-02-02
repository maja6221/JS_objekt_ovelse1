
// Array med superhelte

const superhelte = [

    {
        
        navn: "Batman",
        superevne: "intelligens",
        færdigheder: "kampsport",
        udstyr: "batmobilen",
        fjender: ["Jokeren", "Bane", "Penguin", "Harley Quinn", "Riddler"],
    
    },
    
    {
        navn: "Superman",
        superevne: "flyve",
        færdigheder: "superhørelse",
        udstyr: "kappe",
        fjender: ["Lex Luthor", " Braniac", "zoc"],
    
    },
    
    
    { 
        navn: "Spiderman",
        superevne: "Skyder med spindelhvæv",
        færdigheder: "klatring",
        udstyr: "Spider-dragt",
        fjender: ["Green Goblin", "Jackal", "Venom", "Carnage"],
    
    }
    ];
    


    const skabelon = document.querySelector("#myTemplate").content;

    superhelte.forEach(visSuperhelte);


    function visSuperhelte(superhelte) {
        const klon = skabelon.cloneNode(true);
        klon.querySelector("h1").textContent = superhelte.navn;
        klon.querySelector("h2").textContent = superhelte.superevne;
        klon.querySelector("div").textContent = superhelte.fjender;
        document.querySelector("main").appendChild(klon);
    }

// const liste = document.querySelector("ul");

// superhelte.forEach(visSuperhelte);


// function visSuperhelte(superhelte) {
//     liste.innerHTML += "<li>" + superhelte + "</li>";
// }





