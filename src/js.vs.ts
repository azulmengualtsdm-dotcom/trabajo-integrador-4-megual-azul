// 1. inferencia de tipos: TypeScript deduce que es string
let lenguaje = "TypeScript";
console.log("Lenguaje actual:", lenguaje);

 //lenguaje = 2026;  //error en TS (en js esto pasaría silenciosamente)

// 2. prevención de errores con propiedades y operaciones
function calcularTotal(precio: number, cantidad: number): number {
  return precio * cantidad;
}

const totalCompra = calcularTotal(1500, 3);
console.log("Total de la compra ($):", totalCompra);

//calcularTotal("1500", 3); //  ts evita concatenaciones o resultados NaN inesperados
