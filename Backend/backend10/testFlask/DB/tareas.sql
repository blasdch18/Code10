USE practicas;

CREATE TABLE tareas(
	id			INT				AUTO_INCREMENT PRIMARY KEY,
    titulo 		VARCHAR(100) 	UNIQUE,
    descripcion TEXT,
    usuario_id	INT,
    -- CREO LA RELACION ENTRE LAS TABLAS
    -- indico entre parentesis la columna de esta tabla y luego la tabla(su columna)
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

-- SUBLENGUAJES 
-- DDL (Data Definition Languaje)
-- Es un lenguaje que sirve para definir estructuras de datos (crear bd, crear tablas,
-- actualizar tablas, eliminar tablas)
-- CREATE (crear)
-- ALTER (Actualizar)
-- DROP (ELiminar) eliminar absolutamente TODO
-- DML (Data Manipulation Languaje)
-- Es un lenguaje que sirve para definir la informacion que ira dentro de las estructuras 
-- Insertar datos, actualizar datos, eliminar datos y leer datos
-- INSERT (Insert)
-- SELECT (Visualizar)
-- UPDATE (Actualizar)
-- DELETE (Eliminar)

-- En este caso como el 'id' es auto_increment no le pondremos un valor
INSERT INTO usuarios (nombre, dni) VALUES ('Eduardo','73510746');
INSERT INTO usuarios (id, nombre, dni) VALUES(DEFAULT, 'Juana','54151522');
INSERT INTO usuarios (id, nombre, dni) VALUES (DEFAULT, 'Roberto', '31351003'),
											  (DEFAULT, 'Maria', '33513131'),
                                              (DEFAULT, 'Roxana', '13132139');

                                              
INSERT INTO tareas (id, titulo, descripcion, usuario_id) VALUES
					(DEFAULT, 'ir a la playa', 'ire a la playa el fin de semana', 1),
                    (DEFAULT, 'ir a la piscina', 'ire a la piscina a mi clases de natacion',3);

-- Visualizar la informacion                    
SELECT nombre, dni, id, id FROM usuarios;                    

-- Visualizar la totalidad de las columnas
SELECT * FROM usuarios;

INSERT INTO usuarios (id, nombre, dni) VALUES (DEFAULT, 'Juana', '33265946'),
											  (DEFAULT, 'Maria', '52698524');
                                              
-- Selecciona todas las columnas de la tabla usuarios donde nombre sea juana
SELECT * FROM usuarios WHERE nombre='Juana' AND id = 3;        

-- Visualizar todas las tareas del usuario 1 Y/o del usuario 2

SELECT  * FROM  tareas WHERE usuario_id=1 OR usuario_id=2;

INSERT INTO tareas(id, titulo, descripcion, usuario_id) VALUES (DEFAULT, 'Ir a comer', 'Comer un sabroso pollito a la brasa',1),
															   (DEFAULT, 'Comer pizza', 'Comer una sabrosa pizza con peperoni',1);
SELECT * FROM tareas WHERE usuario_id=1;	
SELECT * FROM tareas ;	

SELECT * FROM tareas WHERE usuario_id=1 AND titulo LIKE '%comer%';
SELECT * FROM usuarios WHERE nombre LIKE '%o';
SELECT * FROM usuarios WHERE nombre LIKE 'J%';
-- Si queremos hacer la distincion entremayus y minus entonces antes de poner el texto colocaremos la palabra
-- BINARY y esto sirve para que haga la comparacion a  nivel de numeros de caracteres(formato ASCII) 
SELECT * FROM usuarios WHERE nombre LIKE BINARY 'j%';

-- _> indico cuando caracteres debe de 'saltar' para que busque el caracter indicado 
SELECT * FROM usuarios WHERE nombre LIKE '__u%';
SELECT * FROM usuarios WHERE nombre  NOT LIKE '__u%';

-- Ahora insertamos una tarea sin dueño
INSERT INTO  tareas (id, titulo, descripcion, usuario_id) VALUES (DEFAULT, 'no hacer nada', 'no hacer nada por que es dia domingo', null);

SELECT *FROM  tareas;
-- Interseccion entre las tablas usuarios con la tabla tareas donde usuarios 
SELECT * FROM usuarios INNER JOIN tareas ON usuarios.id = tareas.usuario_id;

INSERT INTO tareas (id, titulo, descripcion, usuario_id) VALUES
				   (DEFAULT, 'Jugar LOL', 'Jugar con mis amigos pros', 3);
                   
SELECT * FROM usuarios LEFT JOIN  tareas ON usuarios.id = tareas.usuario_id;
SELECT * FROM usuarios RIGHT JOIN  tareas ON usuarios.id = tareas.usuario_id;

-- FULL OUTER JOIN 
-- Selecciona todos los usuarios aun asi no tengan tareas  y todas las tareas aun asi no tengan usuarios
-- Hace una mezcla completa entre los usuarios y las tareas respetando sus conexiones
SELECT * FROM usuarios LEFT JOIN  tareas ON usuarios.id = tareas.usuario_id UNION
SELECT * FROM usuarios RIGHT JOIN  tareas ON usuarios.id = tareas.usuario_id;


-- UNION  mezcla o combina las dos  o mas consultas en una sola 'tabla virtual' pero estas consultas tienen
-- que tener el mismo numero de columnas, sino el union sera incorrecto

SELECT nombre FROM usuarios UNION
SELECT titulo FROM tareas;

-- CONCATENAR > juntar combinar 
SELECT CONCAT(titulo, ' ' , descripcion) AS 'nombre completo' FROM tareas;

-- 1. Devolver todos los usuarios cuyo dni contengan el numero 5
SELECT * FROM usuarios WHERE dni LIKE '%5%';
-- 2. Devolver todos los usuarios cuyo dni contengan el tercer digito 8
SELECT * FROM usuarios WHERE dni LIKE '__8%';
-- 3. Devolver todas las tareas del usuario 'Eduardo'
SELECT * FROM usuarios INNER JOIN tareas ON usuarios.id = tareas.usuario_id WHERE nombre='Eduardo';

				