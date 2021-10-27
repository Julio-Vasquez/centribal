export const URL_API = import.meta.env.VITE_URL_API

export const MODE_DEV = import.meta.env.VITE_MODE === 'dev'

export const ErrorJson = {
  400: 'No se pudo interpretar la solicitud dada',
  401: 'No Autorizado',
  404: 'El servidor no pudo encontrar el contenido solicitado',
}
