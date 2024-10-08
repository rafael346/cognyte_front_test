export function maskDate(value: string) {
  return value.replace(/^([\d]{2})\/*([\d]{2})/, '$1/$2'); // Coloca barra após 2 caracteres
}
