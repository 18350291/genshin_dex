function App() {
  const opciones = async () => {
    const respuesta = await fetch("https://api.genshin.dev/");
    const types = await respuesta.json();

    console.log({ types });
  };

  opciones();

  return (
    <div>
      <h3>Hola mundo</h3>
      <select>
        <option value="">Seleccione un elemento</option>
      </select>
    </div>
  );
}

export default App;
