function Titulo() {
    //jsx -> React
    const name = "";
    if (name) {
      return <h1  className="text-3xl font-bold underline">Hello {name}</h1>;
    }
    return <h1 className="text-3xl font-bold underline">Hello señor react</h1>;
  }
  
  export default Titulo;