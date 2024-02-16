import starwars from "../src/img/Starwars.png"
import notedo from "../src/img/Notedo.png"
import books from "../src/img/Sitioweb.png" 
/* import Starwars from "../src/imgStarwars.png";
import Notedo from "../src/Notedo.png";
import SitioWeb from "../src/Sitioweb.png" */


export const ProjectsJSON = [
    {    id:1,
        title:"Star Wars",
        img:starwars,
        content:"Star Wars website where you can find information about all the characters.",
        technologies:"React - Redux - Node.js - Express - Tailwind",
        website: "https://starwars-5y16.vercel.app/",
        github:"https://github.com/NereaMansilla/Starwars"

    },
    {    id:2,
        title:"NoteDo",
        img:notedo,
        content:"Website where you can jot down your tasks and to-dos",
        technologies:"React.js - Node.js - Express - Material UI ",
        website:"https://no-tedo-app-j2o1.vercel.app/",
        github:"https://github.com/NereaMansilla/NoTedoApp"

    },
    {    id:3,
        title:"Books Website",
        img:books,
        content:"Website for book registration",
        technologies:"Php - Boostrap",
        website:"#",
        github:"#"

    },
  
]