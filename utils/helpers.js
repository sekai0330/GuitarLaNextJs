
export const FormatearFecha = fecha => {
  const fechaNueva = new Date(fecha)
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  }
  return fechaNueva.toLocaleDateString('es-ES', opciones)
}
