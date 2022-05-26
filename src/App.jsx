import { useState } from "react";

const tipos = {
  artifacts: "Artefactos",
  boss: "Jefe",
  characters: "Personajes",
  consumables: "Consumibles",
  domains: "Dominios",
  elements: "Elementos",
  enemies: "Enemigos",
  materials: "Materiales",
  nations: "Naciones",
  weapons: "Armas",
};

function App() {
  const [genshinState, setGenshinState] = useState({
    types: [],
  });

  const fetchGenshinApi = async (item, url = "https://api.genshin.dev/") => {
    const respuesta = await fetch(url);
    const respJson = await respuesta.json();

    if (item === "types") {
      setGenshinState({
        types: respJson.types,
      });
    } else {
      setGenshinState({
        [item]: respJson,
      });
    }

    //console.log({ types });
  };

  fetchGenshinApi("types");

  const handleChangeType = ({ target }) => {
    const url = `https://api.genshin.dev/${target.value}`;
    fetchGenshinApi(target.value, url);
  };

  return (
    <div>
      <h3>350 71l1n</h3>
      <select name="types" onChange={handleChangeType}>
        <option value="">Seleccione un elemento</option>
        {genshinState.types.map((type) => (
          <option key={type} value={type}>
            {tipos[type]}
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
