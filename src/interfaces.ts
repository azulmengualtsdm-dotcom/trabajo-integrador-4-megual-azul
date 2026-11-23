//estructura de objetos
interface Persona {
  readonly id: number;
  nombre: string;
  telefono?: string; // opcional
}

interface Empleado extends Persona {
  puesto: string;
  salario: number;
}

const desarrollador: Empleado = {
  id: 101,
  nombre: "Sofia",
  puesto: "Frontend developer",
  salario: 2500,
};

console.log("Empleado (interface + extends):", desarrollador);

//uso de types
type Email = string; // alias de primitivo
type NivelAcceso = "LECTURA" | "ESCRITURA" | "TOTAL"; // tipo literal
type IdRecurso = string | number; // union

type Credenciales = {
  correo: Email;
  nivel: NivelAcceso;
};

// interseccion para combinar tipos
type CuentaCorporativa = Empleado & Credenciales;

const cuentaSofi: CuentaCorporativa = {
  ...desarrollador,
  correo: "sofia@empresa.com",
  nivel: "TOTAL",
};

console.log("Cuenta Corporativa (Type + Intersección &):", cuentaSofi);