import {useState} from 'react';

const InputForm = ({ setInputValue }) => {
  const [fahrgestellnummer, setFahrgestellnummer] = useState();
  const [hersteller, setHersteller] = useState();
  const [kilometerstand, setKilometerstand] = useState();
  const [kennzeichen, setKennzeichen] = useState();
  const [last, setLast] = useState();
  const [farbe, setFarbe] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()

    const newInputValue = {
      fahrgestellnummer,
      hersteller,
      kilometerstand,
      kennzeichen,
      last,
      farbe
    }

    fetch("http://localhost:9999/api/v1/lkw", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newInputValue)
    })
    .then(res => res.json())
    .then(data => {
      setInputValue(data)
      console.log(data)
    })
  }

  return (
    <section>
      <form>
      <input type="text" placeholder='Hersteller' onChange={(e) => setHersteller(e.target.value)}></input>
        <input type="number" placeholder='Fahrgestellnummer' onChange={(e) => setFahrgestellnummer(e.target.value)}></input>
        <input type="number" placeholder='Kilometerstand' onChange={(e) => setKilometerstand(e.target.value)}></input>
        <input type="text" placeholder='Kennzeichen' onChange={(e) => setKennzeichen(e.target.value)}></input>
        <input type="number" placeholder='Last' onChange={(e) => setLast(e.target.value)}></input>
        <input type="text" placeholder='Farbe' onChange={(e) => setFarbe(e.target.value)}></input>
        <button onClick={handleSubmit}>weg damit</button>
      </form>
    </section>
  )
}

export default InputForm