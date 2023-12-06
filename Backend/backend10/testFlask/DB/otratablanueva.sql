                                                                                                                                                               -- 1. CREAR UNA BASE DE DATOS LLAMADA MINIMARKET
-- CREATE DATABASE minimarket;
USE minimarket;

-- 3. CREAR UNA TABLA LLAMADA CATEGORIA:
-- id entero llave primaria y auto incrementable
-- nombre text

CREATE TABLE categorias (
	id 					INT				AUTO_INCREMENT PRIMARY KEY,
    nombre				TEXT
);

-- 2. CREAR UNA TABLA LLAMADA PRODUCTOS en la cual tengamos lo siguiente:
-- id entero llave primaria y auto incrementable
-- nombre text
-- imagen text
-- fecha_vencimiento date
-- precio Float 
-- disponible boolean defecto (verdadero)
CREATE TABLE productos (
	id 					INT				AUTO_INCREMENT PRIMARY KEY,
	nombre				TEXT,
	imagen 				TEXT,
    fecha_vencimiento   DATE,
    precio				FLOAT,
    disponible			BOOLEAN DEFAULT TRUE,
    
    categoria_id		INT,
    FOREIGN KEY (categoria_id) REFERENCES categorias(id)
);
ALTER TABLE almacen RENAME almacenes;
ALTER TABLE productos ADD COLUMN categoria_id INT;
ALTER TABLE productos ADD FOREIGN KEY (categoria_id) REFERENCES categorias(id);
-- Modificamos la tabla para agregar la columna categoria_id
-- ALTER TABLE productos  ADD COLUMN categoria_id INT;
-- Agregamos la relacion entre productos y categorias
-- ALTER TABLE productos ADD FOREIGN KEY (categoria_id) REFERENCES categorias(id);


-- 4. CREAR UNA TABLA LLAMADA ALMACEN en la cual seria de la sgte manera:
-- id entero llave primaria y auto incrementable
-- nombre text
-- direccion text

CREATE TABLE almacen (
	id 					INT				AUTO_INCREMENT PRIMARY KEY,
    nombre 				TEXT,
    direccion 			TEXT
);
-- Una categoria puede tener varios productos pero un producto pertenece a una sola categoria

CREATE TABLE almacen_producto(
	id					INT PRIMARY KEY AUTO_INCREMENT,
    almacen_id			INT NOT NULL,
    producto_id			INT NOT NULL,
    FOREIGN KEY (almacen_id) REFERENCES almacenes(id),
    FOREIGN KEY (producto_id) REFERENCES productos(id)
);

INSERT INTO categorias(id, nombre) VALUES (DEFAULT, 'Frutas'),
										  (DEFAULT, 'Legumbres'),
                                          (DEFAULT, 'Snacks'),
                                          (DEFAULT, 'Otros'); 
INSERT INTO productos (id, nombre, imagen, fecha_vencimiento, precio, disponible, categoria_id) VALUES (DEFAULT, 'Lechuga Carola','http://google.com','2022-01-10',2.90,TRUE,2),
																									   (DEFAULT, 'Beterraga','http://google.com','2022-02-14',1.90,TRUE,2),
                                                                                                       (DEFAULT, 'Papitas fritas','http://google.com','2025-01-10',2.90,TRUE,3),
                                                                                                       (DEFAULT, 'Platano de Seda','http://google.com','2022-01-10',4.75,TRUE,1),
                                                                                                       (DEFAULT, 'Short Playero','http://google.com','2022-12-31',39.90,TRUE,4),
                                                                                                       (DEFAULT, 'Mandarina','http://google.com','2022-05-23',2.90,TRUE,1);
INSERT INTO almacenes (id, nombre, direccion ) VALUES (DEFAULT, 'ALMACEN A' , 'calle los ruiseñores 1080'),
													  (DEFAULT, 'ALMACEN B' , 'calle los girasoles 570'),
                                                      (DEFAULT, 'ALMACEN C', 'Av Venezuela 3040');
                                                                                                       
INSERT INTO almacen_producto (id, almacen_id, producto_id) VALUES(DEFAULT, 1,1),
																 (DEFAULT, 1,2),
                                                                 (DEFAULT, 2,2),
                                                                 (DEFAULT, 2,3),
                                                                 (DEFAULT, 3,4),
                                                                 (DEFAULT, 1,5),
                                                                 (DEFAULT, 2,6),
                                                                 (DEFAULT, 3,5);
                                                                 
SELECT * FROM almacen_producto;

SELECT * FROM almacenes;

SELECT * FROM productos;
                                             
                                             -- EJERCICIOS
-- 1.- Mostrar todos los productos que tengan un precio mayor o igual que 3
SELECT * FROM productos WHERE precio >=3;
-- 2.- Mostrar todos los productos cuya fecha de vencimiento sea menor al 1 de agosto del 2022
SELECT * FROM productos WHERE fecha_vencimiento < '2022-08-01';
-- 3.- Mostrar los nombres de los productos concatenados con su url de la imagen en una sola columna que se llame 'producto imagen'
SELECT concat(nombre, ' ', imagen) AS 'producto imagen' FROM productos;
-- 4.- Devolver todos los prodcutos de la categoria 'Frutas'
SELECT * FROM productos AS p INNER JOIN categorias AS c ON p.categoria_id = c.id WHERE c.nombre = 'Frutas';
-- 5.- Devolver el nombre de la categoria , nombre del producto y el precio del producto si es mayor que 10
SELECT c.nombre AS 'Categoria nombre', 
	   p.nombre AS 'Producto nombre',
       p.precio
FROM productos AS p INNER JOIN categorias AS c ON p.categoria_id = c.id WHERE p.precio > 10;
-- 6.- Devolver los almacenes con sus productos.
SELECT a.* , p.* 
FROM almacenes AS a INNER JOIN almacen_producto AS ap ON a.id= ap.almacen_id
					INNER JOIN productos AS p ON ap.producto_id = p.id;

-- 7.- Mostrar los sgte:
	-- Tabla categorias:
    -- * nombre
    -- Tabla Productos:
    -- * nombre
    -- * precio
    -- Tabla Almacenes:
    -- * nombre
	-- * direccion
                                              
SELECT c.nombre ,p.nombre, p.precio	, a.nombre , a.direccion
FROM categorias AS c 
	INNER JOIN productos AS p ON c.id = p.categoria_id
	INNER JOIN almacen_producto AS ap ON p.id = ap.producto_id																								  
	INNER JOIN almacenes AS a ON ap.almacen_id = a.id;


