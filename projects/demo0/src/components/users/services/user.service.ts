import type { Login, Register } from "../types/user";

// Simula la gestión del login (por ejemplo, llamada a una API)
export const manageLoginService = async (loginData: Login): Promise<void> => {
  console.log('Login data:', loginData);
};


// Simula el registro de un usuario (por ejemplo, llamada a una API)
export const registerUserService = async (
  userData: Register
): Promise<void> => {
  console.log('Registrando usuario', userData);
};
