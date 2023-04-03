import React from 'react';

const OutputElement = ({ input }) => {
  return (
    <div>
      <p>Hersteller: {input.hersteller}</p>
      <p>Fahrgestellnummer: {input.fahrgestellnummer}</p>
      <p>Kilometerstand: {input.kilometerstand}</p>
      <p>Kennzeichen: {input.kennzeichen}</p>
      <p>Last: {input.last}</p>
      <p>Farbe: {input.farbe}</p>
    </div>
  )
}

export default OutputElement