// 1. funcion con tipo de retorno explicito (: number)
function calcularPrecioConIva(precio: number, iva: number = 0.21): number {
  return precio + precio * iva;
}

console.log("Precio con IVA por defecto (21%):", calcularPrecioConIva(1000));
console.log("Precio con IVA reducido (10.5%):", calcularPrecioConIva(1000, 0.105));

// 2. funcion flecha con parametro por defecto y retorno string
const crearSaludo = (nombre: string, rol: string = "Invitado"): string => {
  return `Bienvenido, ${nombre}. Tu rol asignado es: ${rol}.`;
};

console.log(crearSaludo("Lucia"));
console.log(crearSaludo("Martin", "Administrador"));

// 3. funcion sin retorno (: void)
function registrarEvento(evento: string): void {
  console.log(`[LOG DEL SISTEMA]: ${evento}`);
}

registrarEvento("Sesion iniciada correctamente");
