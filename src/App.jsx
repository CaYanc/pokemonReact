// component
import { Boton } from "./components/Boton";
import { Card } from "./components/Card";
// styles
import "./sass/App.scss";
// icons
import { TiArrowLeftOutline, TiArrowRightOutline } from "react-icons/ti";
// hooks
import { useState, useEffect } from "react";

const App = () => {
  // botones de nex and prev xxxxxxx
  const funtionPresionarMenos = () => {
    if (pokemonId == 1) {
      pokemonId = 1;
    } else {
      setPokemonId(pokemonId - 1);
    }
  };
  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  const [pokemonId, setPokemonId] = useState(1);
  const [pokemonEvol, setPokemonEvol] = useState([]);

  useEffect(() => {
    getEvolutions(pokemonId);
  }, [pokemonId]);

  async function getEvolutions(id) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/evolution-chain/${id}`
    );
    const data = await response.json();

    let arrayPoke = [];

    let pokeLevel1 = data.chain.species.name;
    let getPokeImgLevel1 = await getPokeImg(pokeLevel1);

    arrayPoke.push([pokeLevel1, getPokeImgLevel1]);

    if (data.chain.evolves_to.length !== 0) {
      let pokeLevel2 = data.chain.evolves_to[0].species.name;
      let getPokeImgLevel2 = await getPokeImg(pokeLevel2);

      arrayPoke.push([pokeLevel2, getPokeImgLevel2]);

      if (data.chain.evolves_to[0].evolves_to.length !== 0) {
        let pokeLevel3 = data.chain.evolves_to[0].evolves_to[0].species.name;
        let getPokeImgLevel3 = await getPokeImg(pokeLevel3);

        arrayPoke.push([pokeLevel3, getPokeImgLevel3]);

      }
    }
    setPokemonEvol(arrayPoke)
  }

  async function getPokeImg(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
    const data = await response.json();

    return data.sprites.other["official-artwork"].front_default;
  }

  return (
    <div className="content_all">
      <div className={`content_card cards${pokemonEvol.length}`}>
        {pokemonEvol.map(pokemon =>
           <Card key={pokemon[0]} name={pokemon[0]} imagen={pokemon[1]}/> 
           )}
        
      </div>
      <div className="contents-btn">
        <Boton
          icon={<TiArrowLeftOutline />}
          presionar={funtionPresionarMenos}
        />
        <Boton
          icon={<TiArrowRightOutline />}
          presionar={() => {
            setPokemonId(pokemonId + 1);
          }}
        />
      </div>
    </div>
  );
};

export { App };
