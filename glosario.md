1. TypeScript (TS)
Superconjunto (*superset*) de JavaScript desarrollado por Microsoft que añade tipado estático opcional y características avanzadas, compilando finalmente a código JavaScript estándar.

const mensaje: string = "Hola, TypeScript";


2. Transpilacion tsc
Proceso mediante el cual el compilador oficial de TypeScript (`tsc`) verifica los errores de tipos en los archivos `.ts` y los traduce a archivos `.js` compatibles con navegadores y Node.js.

// Código en archivo.ts
const sumar = (a: number, b: number): number => a + b;

// Resultado transpilado en archivo.js (sin tipos)
// const sumar = (a, b) => a + b;

3. Inferencia de tipos
Capacidad de TypeScript para deducir automáticamente el tipo de dato de una variable o función a partir del valor inicial asignado, sin necesidad de escribirlo explícitamente.

let ciudad = "Formosa"; // TypeScript infiere automáticamente que es de tipo 'string'
// ciudad = 3600;       // no se puede asignar un 'number' a un 'string'


4. Tipos primitivos (`string`, `number`, `boolean`)
Son los tipos de datos básicos fundamentales que representan cadenas de texto, valores numéricos (enteros o decimales) y valores lógicos (`true` o `false`).

const nombre: string = "Lucas";
const edad: number = 25;
const esEstudiante: boolean = true;


5.Tipo Unión (`|`)
Operador que permite que una variable o parámetro acepte dos o más tipos de datos diferentes, funcionando como un "O" lógico.

let identificador: string | number;
identificador = "ABC-123"; // Válido
identificador = 123;       // Válido


 6. Tipo `any` vs. `unknown`
Mientras que `any` desactiva por completo la verificación de tipos (práctica desaconsejada), `unknown` representa un valor desconocido de forma segura, obligando a comprobar su tipo antes de usarlo

let datoSeguro: unknown = "Texto recibido";

if (typeof datoSeguro === "string") {
  console.log(datoSeguro.toUpperCase()); // Válido tras comprobar el tipo
}

7. Tipo de Retorno y void

Especificación explícita del tipo de dato que devolverá una función al finalizar su ejecución. Si la función no devuelve ningún valor, se utiliza `void`.

function multiplicar(x: number, y: number): number {
  return x * y;
}

function logMensaje(texto: string): void {
  console.log(texto);
}


 8. Parametro por defecto
Valor inicial asignado a un argumento en la declaración de una función, el cual se utiliza automáticamente si dicho argumento no es enviado al llamarla.


function saludar(nombre: string, saludo: string = "Hola"): string {
  return `${saludo}, ${nombre}`;
}

saludar("Ana"); // Devuelve: "Hola, Ana"


9. Interfaz (`interface`)
Contrato estructural que define qué propiedades y métodos debe tener un objeto o una clase. Permite reutilizar y ampliar estructuras mediante la palabra clave `extends`.

interface Usuario {
  id: number;
  nombre: string;
}

interface Admin extends Usuario {
  permisos: string[];
}


10. Alias de tipo (`type`)
Palabra clave que permite asignar un nombre personalizado a cualquier tipo de dato, incluyendo tipos primitivos, uniones, intersecciones o estructuras de objetos

type CorreoElectronico = string;
type Coordenadas = [number, number];

const miCorreo: CorreoElectronico = "usuario@dominio.com";

 11. Intersección de Tipos 

Operador utilizado principalmente con `type` para combinar múltiples tipos en uno solo, exigiendo que el objeto resultante posea todas las propiedades de los tipos unidos

type ConNombre = { nombre: string };
type ConEdad = { edad: number };
type Persona = ConNombre & ConEdad;

const individuo: Persona = { nombre: "Elena", edad: 30 };

 12. Tipos literales y enum

 Mecanismos para restringir una variable a un conjunto cerrado de valores exactos. Los tipos literales desaparecen al compilar, mientras que los enum generan un objeto real en javascript

// Tipo literal (solo en tiempo de compilación)
type Semaforo = "ROJO" | "AMARILLO" | "VERDE";

// Enum (existe también en tiempo de ejecución)
enum Direccion {
  Norte = "NORTE",
  Sur = "SUR",
}
```
