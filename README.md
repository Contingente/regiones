# regiones
JS con regiones y comunas de chile

## Uso
Agrega el objeto global "Regiones" en window y con eso se pueden usar los siguientes metodos
- getDatos() devuelve la lista completa de comunas
- getArbol() devuelve la lista de comunas en formato arbol region > comuna y region > provincia > comuna3
- getComunas(codigosRegionesProvincias = []) devuelve la lista de comunas filtradas por las regiones o provincias entregadas (o todas) 
- getProvincias(codigosRegionesProvincias = []) devuelve la lista de provincias filtradas por las regiones entregadas (o todas)
- getRegiones()

## Pendientes
- Agregar opciones para los getters (ejemplo, columna para ordenar, direccion del orden, filtro por texto, etc..)
