var objetoLiteral = '{"nombre": "victor", "apellido": "Herrero"}';

console.info("String: " + objetoLiteral);

objetoLiteral = JSON.parse(objetoLiteral);

console.info("Objeto: " + objetoLiteral);

console.info("Caracteristica nombre del Objeto: " + objetoLiteral.nombre);

objetoLiteral = JSON.stringify(objetoLiteral);

console.info("De nuevo String: " + objetoLiteral);