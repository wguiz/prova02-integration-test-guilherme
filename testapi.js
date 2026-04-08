import fetch from 'node-fetch';

const apiUrl = 'https://dnd-combat-api-7f3660dcecb1.herokuapp.com/api';

async function getGoblin() {
  const res = await fetch(`${apiUrl}/monsters/goblin`);
  const data = await res.json();
  console.log(data);
}

getGoblin();