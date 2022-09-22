-- crear tabla de usuarios

CREATE TABLE `sitio`.`usuarios` (
  `username` VARCHAR(16) NOT NULL,
  `email` VARCHAR(255) NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NULL,
  `apellido` VARCHAR(45) NULL,
  `telefono` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

-- crea tabla de login

CREATE TABLE `sitio`.`login` (
  `username` VARCHAR(16) NOT NULL,
  `password` VARCHAR(45) NULL,
  PRIMARY KEY (`username`));

-- creo la foreign key de usuarios a login

ALTER TABLE `sitio`.`usuarios` 
ADD INDEX `username_idx` (`username` ASC) VISIBLE;
;
ALTER TABLE `sitio`.`usuarios` 
ADD CONSTRAINT `username`
  FOREIGN KEY (`username`)
  REFERENCES `sitio`.`login` (`username`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;


-- insertar 5 usuarios de prueba

INSERT INTO `sitio`.`login` (`username`, `password`) VALUES ('alejo86a', '01cfcd4f6b8770febfb40cb906715822');
INSERT INTO `sitio`.`usuarios` (`username`, `email`,  `nombre`, `apellido`, `telefono`) VALUES ('alejo86a', 'alejo86a@hotmail.com', '', 'alejo', 'marin', '3131234567');

INSERT INTO `sitio`.`login` (`username`, `password`) VALUES ('glorgiib', '01cfcd4f6b8770febfb40cb906715822');
INSERT INTO `sitio`.`usuarios` (`username`, `email`, `nombre`, `apellido`, `telefono`) VALUES ('glorgiib', 'glorgiib@hotmail.com', 'gloria', 'gil', '3139876543');

INSERT INTO `sitio`.`login` (`username`, `password`) VALUES ('fredyho', '01cfcd4f6b8770febfb40cb906715822');
INSERT INTO `sitio`.`usuarios` (`username`, `email`, `nombre`, `apellido`, `telefono`) VALUES ('fredyho', 'fredyho@hotmail.com', 'fredy', 'hoyos', '3138526974');

INSERT INTO `sitio`.`login` (`username`, `password`) VALUES ('santilo', '01cfcd4f6b8770febfb40cb906715822');
INSERT INTO `sitio`.`usuarios` (`username`, `email`,  `nombre`, `apellido`, `telefono`) VALUES ('santilo', 'santilo@hotmail.com', 'santiago', 'lopez', '3136542171');

INSERT INTO `sitio`.`login` (`username`, `password`) VALUES ('marire', '01cfcd4f6b8770febfb40cb906715822');
INSERT INTO `sitio`.`usuarios` (`username`, `email`, `nombre`, `apellido`, `telefono`) VALUES ('marire', 'marire@hotmail.com',  'mariana', 'restrepo', '3133691281');

-- obtener los usuario y sus datos de login

select u.id,u.nombre, u.apellido, concat(u.nombre, " " , u.apellido, " ") as nombre_completo, u.email, u.telefono, i.username, i.password 
from `sitio`.`usuarios` as u INNER JOIN `sitio`.`login` as i ON
u.username = i.username;

-- contar la cantidad de usuarios

select count(*) as total_usuarios from sitio.login;
