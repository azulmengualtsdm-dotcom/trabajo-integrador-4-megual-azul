// 1. enum: genera un objeto real en javascript 
enum EstadoPedido {
  Pendiente = "PENDIENTE",
  EnCamino = "EN_CAMINO",
  Entregado = "ENTREGADO",
  Cancelado = "CANCELADO",
}

const estadoActual: EstadoPedido = EstadoPedido.EnCamino;
console.log("Estado usando Enum:", estadoActual);
console.log("Valores disponibles en el Enum (runtime):", Object.values(EstadoPedido));

// 2. tipo literal: solo existe en typescript 
type MetodoPago = "TARJETA" | "TRANSFERENCIA" | "EFECTIVO";

function procesarPago(monto: number, metodo: MetodoPago): void {
  console.log(`Procesando pago de $${monto} mediante ${metodo}.`);
}

procesarPago(4500, "TRANSFERENCIA");
// procesarPago(4500, "CRIPTO");
// error: no pertenece al tipo literal
