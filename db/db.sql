CREATE database basta_app;
use basta_app;

CREATE TABLE Jugador(
  id_jugador VARCHAR(36) PRIMARY KEY,
  email VARCHAR(40),
  usuario VARCHAR(20)
);

CREATE TABLE Sesion(
  id_usuario VARCHAR(36) NOT NULL,
  access_token VARCHAR(36),
  
  FOREIGN KEY (id_usuario)
  REFERENCES Jugador(id_jugador)
  ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE Partida(
  id_partida VARCHAR(36) PRIMARY KEY,
  id_ganador VARCHAR(36),
  mejor_palabra VARCHAR(20),
  puntaje_palabra INT UNSIGNED

  FOREIGN KEY (id_ganador)
  REFERENCES Jugador(id_jugador)
  ON UPDATE CASCADE ON DELETE RESTRICT
);