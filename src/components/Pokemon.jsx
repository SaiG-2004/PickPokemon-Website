import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

export const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchPokemon, setSearchPokemon] = useState("");

  const fetchPokemon = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=100"
      );
      const data = await response.json();
      console.log(data);

      const detailedPokemonData = data.results.map(async (item) => {
        const res = await fetch(item.url);
        const data = await res.json();
        return data;
      });

      const detailedResponse = await Promise.all(detailedPokemonData);
      setPokemon(detailedResponse);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);


const searchData = pokemon.filter((curPokemon) => 
    curPokemon.name.toLowerCase().includes(searchPokemon.toLowerCase())
)


  if (loading) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <>
      <div className="relative">
        <div className="sticky top-0 left-0 py-4 z-50 bg-[#eda3fa]">
        <header className="mt-4">
            <h1 className="text-5xl text-center text-purple-900 font-bold font-[Poppins]">Lets Catch Pokemon</h1>
            </header>

        <div className="text-center mt-6 ">
            <input type="text" placeholder="search pokemon"
             value={searchPokemon}
             onChange={(e) => setSearchPokemon(e.target.value)}
             className="w-96 p-2 outline-none rounded-lg"
             />
        </div>
             </div>
        <div className=" ">
          <ul className="grid grid-cols-4 mt-5 px-32 gap-8 py-4 ">
            {searchData.map((item) => {
              return <PokemonCard key={item.id} pokemonData={item} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
