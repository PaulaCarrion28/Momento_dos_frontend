import Swal from 'sweetalert2'
 
export const alertaExito = (titulo, texto) => {
  return Swal.fire({
    icon: 'success',
    title: titulo,
    text: texto,
    background: '#1a1a1a',
    color: '#fff',
    confirmButtonColor: '#ffffff',
    confirmButtonText: '<span style="color:#000">OK</span>',
  })
}
 
export const alertaError = (titulo, texto) => {
  return Swal.fire({
    icon: 'error',
    title: titulo,
    text: texto,
    background: '#1a1a1a',
    color: '#fff',
    confirmButtonColor: '#ffffff',
    confirmButtonText: '<span style="color:#000">OK</span>',
  })
}