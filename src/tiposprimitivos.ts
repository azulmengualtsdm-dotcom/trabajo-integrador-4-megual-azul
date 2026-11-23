
//tipos primitivos
const nombreProducto: string = "Teclado mecánico";
const stock: number = 15;
const disponible: boolean = true;
console.log(`Producto: ${nombreProducto} | Stock: ${stock} | Disponible: ${disponible}`);
// 2. tipo union
type CodigoSeguimiento = string | number;

function imprimirCodigo(codigo: CodigoSeguimiento): void {
  if (typeof codigo === "string") {
    console.log("Codigo alfanumerico:", codigo.toUpperCase());
  } else {
    console.log("Codigo numerico:", codigo);
  }
}

// 3. por que evitar 'any' y usar 'unknown'
let datoExterno: unknown = "mensaje recibido de una api";

// para manipular 'unknown', typescript obliga a verificar su tipo primero
if (typeof datoExterno === "string") {
  console.log("Dato validado con unknown:", datoExterno.length, "caracteres");
}