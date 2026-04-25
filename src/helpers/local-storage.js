export const guardarEnLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}
 
export const obtenerDeLocalStorage = (key) => {
  const data = localStorage.getItem(key)
  return data ? JSON.parse(data) : null
}
 
export const eliminarDeLocalStorage = (key) => {
  localStorage.removeItem(key)
}