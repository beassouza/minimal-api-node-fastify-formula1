import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true});

server.register(cors, {
    origin: "*",
})

const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
  { id: 4, name: "Ferrari", base: "Maranello, Italy" },
  { id: 5, name: "Aston Martin", base: "Silverstone, United Kingdom" },
  { id: 6, name: "Alpine", base: "Enstone, United Kingdom" },
  { id: 7, name: "Williams", base: "Grove, United Kingdom" },
  { id: 8, name: "Racing Bulls (RB)", base: "Faenza, Italy" },
  { id: 9, name: "Sauber", base: "Hinwil, Switzerland" },
  { id: 10, name: "Haas", base: "Kannapolis, United States" }
];

const drivers = [
  // Red Bull Racing
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing", number: 1, country: "Netherlands", code: "VER" },
  { id: 2, name: "Liam Lawson", team: "Red Bull Racing", number: 30, country: "New Zealand", code: "LAW" },

  // Ferrari
  { id: 3, name: "Lewis Hamilton", team: "Ferrari", number: 44, country: "United Kingdom", code: "HAM" },
  { id: 4, name: "Charles Leclerc", team: "Ferrari", number: 16, country: "Monaco", code: "LEC" },

  // McLaren
  { id: 5, name: "Lando Norris", team: "McLaren", number: 4, country: "United Kingdom", code: "NOR" },
  { id: 6, name: "Oscar Piastri", team: "McLaren", number: 81, country: "Australia", code: "PIA" },

  // Mercedes
  { id: 7, name: "George Russell", team: "Mercedes", number: 63, country: "United Kingdom", code: "RUS" },
  { id: 8, name: "Andrea Kimi Antonelli", team: "Mercedes", number: 12, country: "Italy", code: "ANT" },

  // Aston Martin
  { id: 9, name: "Fernando Alonso", team: "Aston Martin", number: 14, country: "Spain", code: "ALO" },
  { id: 10, name: "Lance Stroll", team: "Aston Martin", number: 18, country: "Canada", code: "STR" },

  // Alpine
  { id: 11, name: "Pierre Gasly", team: "Alpine", number: 10, country: "France", code: "GAS" },
  { id: 12, name: "Jack Doohan", team: "Alpine", number: 7, country: "Australia", code: "DOO" },

  // Williams
  { id: 13, name: "Alexander Albon", team: "Williams", number: 23, country: "Thailand", code: "ALB" },
  { id: 14, name: "Carlos Sainz", team: "Williams", number: 55, country: "Spain", code: "SAI" },

  // Racing Bulls (RB)
  { id: 15, name: "Yuki Tsunoda", team: "Racing Bulls (RB)", number: 22, country: "Japan", code: "TSU" },
  { id: 16, name: "Isack Hadjar", team: "Racing Bulls (RB)", number: 6, country: "France", code: "HAD" },

  // Sauber
  { id: 17, name: "Nico Hülkenberg", team: "Sauber", number: 27, country: "Germany", code: "HUL" },
  { id: 18, name: "Gabriel Bortoleto", team: "Sauber", number: 5, country: "Brazil", code: "BOR" },

  // Haas
  { id: 19, name: "Esteban Ocon", team: "Haas", number: 31, country: "France", code: "OCO" },
  { id: 20, name: "Oliver Bearman", team: "Haas", number: 87, country: "United Kingdom", code: "BEA" }
];

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return { teams };
});

server.get("/drivers", async(request, response)=> {
    response.type("application/json").code(200);
    return { drivers };
});

interface DriversParams {
    id: string;
}

interface TeamsParams {
    name: string;
}

server.get<{ Params: TeamsParams}>(
    "/teams/:name",
    async (request, response) => {
        const { name } = request.params;

        const team = teams.find ( (t) => t.name.toLowerCase () === decodeURIComponent(name).toLowerCase());
        
        if(!team){
            response.type("application/json").code(404);
            return { message: "Team Not Found"};
        } else {
            response.type("application/json").code(200);
            return { team };
        }
    }
);   

server.get<{ Params: DriversParams}>(
    "/drivers/:id",
    async (request, response) => {
        const id = parseInt(request.params.id);
        const driver = drivers.find((d) => d.id === id);
        
        if(!driver){
            response.type("application/json").code(404);
            return { message: "Driver Not Found"};
        } else {
            response.type("application/json").code(200);
            return { driver };
        }
    }
);

server.listen({ port: 3636}, () => {
    console.log("Server init");
});