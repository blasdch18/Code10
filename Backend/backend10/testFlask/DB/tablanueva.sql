-- ASI SE CREA UNA BASE DE DATOS
CREATE DATABASE IF NOT EXISTS practicas;

USE practicas ;

 -- procedemos a crear la primera tabla
 -- Tipos de datos : ...
 -- AUTO_INCREMENT > solamente puede haber uno por tabla 

CREATE TABLE usuarios (
	id			INT		 	AUTO_INCREMENT UNIQUE PRIMARY KEY,
    nombre 		TEXT 		NOT NULL,
    dni 		CHAR(8) 	UNIQUE
);
