#Data layer:

- Array de robots.
- Robot:
  - Objeto:
    - Propiedades: - Name: String - Url (imagen) String - Velocidad: Del 0 al 10 NUmber - Resistencia: Number - Del 0 al 10 - Fecha de creación - String

#Components:

- App:

  - Recibe: Nada
  - Muestra: El resto de componentes
  - Estado: En qué página está
  - Acciones del usuario: Nada

- Lista:

  - Recibe: Array de robots
  - Muestra: Listado de robots
  - Estado:
    - En qué página está
    - Array de robots
  - Acciones del usuario: Nada

- Tarjeta:

  - Recibe: Datos del robot (por props)
  - Muestra: Datos del robot y la imagen
  - Estado: Nada
  - Acciones del usuario:
    - Borrar
    - Modificar
    - Crear

- Botón:

  - Recibe:
    - Texto (por props)
    - Acción
  - Muestra:
    - Texto recibido
  - Estado:
    - Nada
  - Acciones del usuario:
    - Clicar
