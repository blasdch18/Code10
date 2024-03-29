-- FUNCIONES DE AGREGACION 
-- Funciones que permiten efectuar operaciones sobre algunas columnas para obtener resultados
 USE  minimarket;
 
 SELECT * FROM productos;
 -- Para utilizar  cualquier funcion de agregacion se tiene que indicar la clausula GROUP BY y esta clausula
 -- servira para indicar como queremos que se realice la agrupacion antes de usar la funcion 
 -- si solamente queremos obtener un solo resultado entonces la clausula GROUP BY no puede tomar en consideracion
 
 -- AVG (columna) > Promedio de esa columna
 SELECT  categoria_id, AVG(precio) FROM productos GROUP BY categoria_id;
 
 -- MAX (column ) > El valor maximo  de esa columna
 SELECT MIN(precio) FROM productos;
 
 -- MIN (columna)
 SELECT MIN(precio) FROM productos;
 
 -- COUNT(columna) > cuenta cuantos registros tenemos
 SELECT COUNT(nombre) FROM productos;
 
 -- SUM(columna) > suma el contenido de esa columna
 -- PostgreSQL o SQL server intentamos hacer una sumatoria  de una columna que no es numerica arrojara un error
 SELECT SUM(precio) FROM productos;
 
 -- PAGINACION
 SELECT * FROM productos LIMIT 6  -- Indica  cuantos quiero devolver
						 OFFSET 1; -- Indica cuantos quiero saltarme

-- ORDENAMIENTO
SELECT * FROM productos
ORDER BY  fecha_vencimiento DESC, nombre DESC; -- ASC > Ascendente | DESC > Descendente

SELECT SUM(p.precio)
FROM productos AS p INNER JOIN categorias AS c ON p.categoria_id = c.id
WHERE c.nombre = 'Otros'
GROUP BY p.id
ORDER BY fecha_vencimiento DESC
LIMIT 1  -- En MySQL obligatoriamente para utilizar el OFFSET debemos indicar el LIMIT
OFFSET 0;

