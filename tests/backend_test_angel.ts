
Feature('Pruebas de backend APIs REST y GRAPHQL con assertions')

Scenario('Test of backend REST GET', async ({ I }) => { //
	const response = await I.sendGetRequest(
		'https://pokeapi.co/api/v2/pokemon/'
		//'https://rickandmortyapi.com/api/character/'
	)

	// Validamos el codigo de respuesta correcto
	I.assertEqual(response?.status, 200)

	// Validacion sobre la data por individual
	I.assertEqual(response?.data?.results?.[0]?.name, 'bulbasaur')
	I.assertEqual(response?.data?.results?.[0]?.url, 'https://pokeapi.co/api/v2/pokemon/1/')

	// Validacion negativa sobre la data por individual
	I.assertNotEqual(response?.data?.results?.[1]?.name, 'ivisaur')
	I.assertNotEqual(response?.data?.results?.[1]?.url, 'ttps://pokeapi.co/api/v2/pokemon/2/')

	// Validacion de solo una parte si contiene esa cadena
	I.assertContain(response?.data?.results?.[2]?.name, 'venu')

	// Validar tipo de Dato
	I.assertToBeA(response?.data?.results?.[3]?.name, 'string')

})



Scenario('Test of backend GRAPHQL GET', async ({ I }) => {
	const response = await I.sendQuery(`
	query pokemon {
  pokemon(name: "ditto") {
    id
    name
    sprites {
      front_default
    }
    moves {
      move {
        name
      }
    }
    types {
      type {
        name
      }
    }
  }
}`)

	// Validamos el codigo de respuesta correcto y no regresa nada
	//
	I.assertEqual(response?.status, 200)
	I.assertEqual(response?.data?.data?.pokemon?.name, 'ditto')
	I.assertEqual(response?.data?.data?.pokemon?.id, 132)

})


