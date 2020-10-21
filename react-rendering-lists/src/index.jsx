import React from 'react';
import ReactDOM from 'react-dom';

const pokedex = [
  { number: '001', name: 'Bulbasaurs' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function PokemonListItem(props) {
  return <li>{props.name}</li>;
}

function PokemonList(props) {
  const pokedexArr = props.pokedex;
  return (
    <ul>
      {pokedexArr.map(mon =>
        <PokemonListItem key={mon.number} name={mon.name} />
      )}
    </ul>
  );
}

ReactDOM.render(
  <PokemonList pokedex={pokedex}/>,
  document.getElementById('root')
);
