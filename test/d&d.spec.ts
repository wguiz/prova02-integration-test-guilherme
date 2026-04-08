import pactum from 'pactum';

describe('D&D Combat API - Battle Goblin', () => {

  const apiUrl = 'https://dnd-combat-api-7f3660dcecb1.herokuapp.com/api';

  it('should fetch a page of monster names', async () => {
    await pactum.spec()
      .get(`${apiUrl}/monsters/names/1`)
      .expectStatus(200)
      .expectJsonLike([
        /.*/,
      ]);
  });

  it('should fetch Goblin details', async () => {
    await pactum.spec()
      .get(`${apiUrl}/monsters/goblin`)
      .expectStatus(200)
      .expectJson({
        name: 'Goblin',
        strength: 8,
        dexterity: 14,
        hit_points: 7,
        armor_class: 15
      });
  });

  it('should validate the character Aragorn', async () => {
    const character = {
      name: 'Aragorn',
      strength: 12,
      dexterity: 14,
      hitPoints: 30,
      armorClass: 15
    };

    await pactum.spec()
      .post(`${apiUrl}/characters/check`)
      .withJson(character)
      .expectStatus(200)
      .expectJsonLike({
        name: 'Aragorn',
        strength: 12,
        dexterity: 14,
        hitPoints: 30,
        armorClass: 15
      });
  });

});