# Fundamentos de Bases de Datos



Documentación y Material ADICIONAL de la asignatura de Fundamentos de Bases de Datos. En este repositorio se incluirá toda la információn EXTRA de la asignatura que ayudará a su estudio y trabajo tanto para la parte de Teoría como para la parte de Prácticas.

Grado en Ingeniería Informática. Universidad de Granada.

Profesor Grupo A-A1: Manuel Parra-Royón  (manuelparra@cern.ch | manuelparra@ugr.es)

<HR>
	Tabla de Contenido
<HR>	


- [Material de Teoría](#material-de-teor-a)
  * [Tema 3 Modelo de Datos](#tema-3-modelo-de-datos)
  * [Proceso de análisis y diseño de la Base de Datos](#proceso-de-an-lisis-y-dise-o-de-la-base-de-datos)
  * [Transformación del modelo lógico de la base de datos](#transformaci-n-del-modelo-l-gico-de-la-base-de-datos)
  * [Modelos basados en Registros](#modelos-basados-en-registros)
  * [Modelo Jerárquico](#modelo-jerarquico)
  * [Modelo en red](#modelo-en-red)
- [Prácticas](#pr-cticas)
  * [Traspaso de Modelo E/R a Tablas](#traspaso-de-modelo-e-r-a-tablas)
    + [Traspaso de Entidades Fuertes](#traspaso-de-entidades-fuertes)
    + [Traspaso de Entidades Débiles](#traspaso-de-entidades-d-biles)
    + [Traspaso de Relaciones](#traspaso-de-relaciones)
    + [Traspaso de relaciones de Herencia](#traspaso-de-relaciones-de-herencia)
    + [Traspaso de agregaciones](#traspaso-de-agregaciones)
    + [Traspaso de relaciones con Cardinalidades N-arias](#traspaso-de-relaciones-con-cardinalidades-n-arias)
  * [Fusión de tablas](#fusi-n-de-tablas)
    + [Traspaso relaciones Muchos a Uno](#traspaso-relaciones-muchos-a-uno)
    + [Traspaso relaciones Muchos a Uno con atributo discriminadores](#traspaso-relaciones-muchos-a-uno-con-atributo-discriminadores)
    + [Traspaso relaciones Muchos (relación obligatoria) a Uno](#traspaso-relaciones-muchos--relaci-n-obligatoria--a-uno)
    + [Traspaso relaciones de Herencia](#traspaso-relaciones-de-herencia)
    + [Traspaso relaciones Uno a Uno](#traspaso-relaciones-uno-a-uno)
    + [Traspaso relaciones Muchos a Muchos](#traspaso-relaciones-muchos-a-muchos)
- [Problemas resueltos](#problemas-resueltos)
  * [Problema A](#problema-a-modelado-e-r-gestion-bancaria)
  


### Problema A: Modelado E/R Sistema de gestión bancaria.


# Material de Teoría

## Tema 3 Modelo de Datos

Cuando necesitamos desarrollar una aplicación, un software, o un sistema, lo más probable es que requiera de una Base de Datos. Para ello, antes de empezar directamente con la implementación en un SGBD, es necesario realizar un estudio del problema al que nos enfrentamos.

En ese estudio se traspasa la información del problema de mundo real a un problema a un esquema o modelo que permite representar esa información de un modo más preciso y estructurado que con lenguaje natural.

Por ejemplo tenemos un enunciado de problema:

- "Un autor escribe libros ....", "Los libros tienen título, isbn, ....", "Los libros tratan de materias ...." 

Este enunciado se puede transformar en algo como :

- Libros (isbn, título, ...)
- Autor (nombre, nacionalidad, ...)
- ...

Esta información puede ser transformada en un diagrama que corresponde a un Modelo Entidad/Relación:

El modelado de datos, debe constar de:
- Notación para describir los datos.
- Notación para describir operaciones.
- Notación para describir reglas de integridad.


## Proceso de análisis y diseño de la Base de Datos

El proceso completo de implementación (desde el planteamiento del problema, la creación del modelado E/R hasta el trabajo en la Base de Datos ) de una Base de Datos sigue el siguiente esquema de operaciones:

![Diagrama01](imagenes/diagrama07.png)

## Transformación del modelo lógico de la base de datos

Traducimos el Modelo E/R a una estructura implementable, como por ejemplo:

- Pasamos la Entidad `Libro` a una tabla:

![Diagrama01](imagenes/diagrama08.png)

- Se implementa en un sistema comercial (ORACLE, MySQL, PostgreSQL, etc).

```
CREATE TABLE LIBROS (
   titulo char(45) NOT NULL,
   ISBN char(10) PRIMARY KEY, 
   editorial char(30) REFERENCES 
   ...
);
```

**¿Por qué necesito un modelo de datos?**

Se requiere un modelo de datos para describir los datos de algún modo. Un esquema se describe utilizando un DDL (Lenguaje de Definición de Datos). Este lenguaje es de bajo nivel, ya que tiene que conocer detalles de la implementación de los datos, como el tipo de dato, el tamaño, etc. Además está muy ligado al SGDB; por ejemplo el SGBD ORACLE tiene una forma concreta de definir los datos, MySQL/MAriaDB otra forma y SQLite tiene otra distinta.

- Importante: El modelado de datos permiten describir los datos de un modo entendible y manipulable.

## Modelos basados en Registros

Son tres tipos de modelos basados en una estructura de Registros:
- Modelo Jerarquico.
- Modelo en RED.
- Modelo Relacional.


## Modelo Jerarquico

Fue la primera propuesta que se desarrolló. Para el nivel externo se usaba COBOL (muy utilizado en Bancos). La estructura sigue un modelo de Árbol:


![Diagrama01](imagenes/diagrama09.png)


El modelo jerarquico gestiona bien las relaciones uno-muchos, uno a uno, pero no es muy eficiente cuando se trata de relaciones muchos a muchos. Este tipo de relaciones Muchos a Muchos en modelo Jerárquico supone DUPLICAR TODA LA INFORMACIÓN (registros):

![Diagrama01](imagenes/diagrama10.png)

¿Cuáles son los problemas del modelo Jerárquico?

- El almacenamiento del modelo jerárquico (árbol) es complejo.
- El DDL (Data Definition Language) es complejo.
- Los registros existen siempre que exista un registro "padre" en el árbol.
- Contiene mucha redundancia, hay datos duplicados. Por lo que si modificamos un registro hay que modificarlo en todos los lugares donde aparece para que no se pierda la integridad de los datos.

## Modelo en red

Se fundamenta en el modelo de GRAFOS, es decir una estructura que contiene 
nodos, enlaces (o arcos, punteros) y relaciones entre nodos o conjuntos de nodos.

Algunas características:
- Conectores de las relaciones: enlazan a los atributos propios de la relación.
- Cada conector es una asociación diferente.
- Cualquier registro puede relacionarse con cualquier otro.

La base de datos está formada por un conjunto de GRAFOS.

El ejemplo genérico podría verse como la información de Facebook, relaciona a personas y eventos, amistades, comentarios, etc.:

![Link](https://2.bp.blogspot.com/-4vBwYHJIaKw/WlZC9xjVJ1I/AAAAAAAASMI/1xP4NY_7wy4lr-gbCY__6z_zB9CEuaGUACLcBGAs/s1600/antesss.png)

Un ejemplo concreto sería:

![Link](imagenes/diagrama17.png)

En el ejemplo, cada uno de los registros está conectado con otros registros de varias formas, de modo que si queremos conocer las notas del alumno  Juan Lopez, tenemos que seguir los "punteros"" que salen del alumno hacia los demás registros:
por ejemplo 7.5 en Sistemas Operativos.


## Modelo Relacional

### Claves del modelo relacional:

- Atributo: Son las columnas de una tabla.
- Dominio: El rango de valores que puede tomar un atributo. Por ejemplo si un atributo se especifica que solo puede ser entero de 0 a 100 el dominio será Entero de [0,100].
- Relación: 
- Tupla: Un conjunto de atributos en una relacion que forma una fila en una tabla.
- Cardinalidad: Numero de filas.
- Esquema de la relación: Los atributos y el Dominio.
- Grado de la relación: Numero de atributos de la relación.

### Nulos

Es posible que un valor de un atributo en una fila no se conozca, en este caso se indica como NULO. El valor NULO es un valor desconocido pero que puede formar parte del Dominio de valores de un atributo.

### Claves candidatas

Más de un conjunto de atributos son clave primaria, si esto ocurre, entonces se llaman claves candidatas.

Si hay más de una clave candidata, hay que elegir una como clave primaria de entre las que existan.

### SuperClave

Una superclave es un conjunto de uno o más atributos que, tomados todos, permiten identificar de forma única una entidad en el conjunto de entidades. Por ejemplo, el atributo id-cliente del conjunto de entidades cliente es suficiente para distinguir una entidad cliente de las otras.

### Integridad de entidad e Integridad referencial

** Integridad de entidad **

No se puede tener una entidad que no esté completa en cuanto a que tenga definida toda la información referente a que atributos son clave primaria y que estos además debe ser NO NULOS.

** Claves externas **

Son aquellas claves que conectan una entidad con otra pero que conectan atributos que son clave primaria en la tabla maestra.
Además la clave externa se puede ver como un conjunto de atributos de una relación cuyos valores en las tuplas deben coincidir con valores de la clave primaria de las tuplas de otra relación.



** Integridad referencial **

Si una relación incluye una clave externa conectada a una clave primaria, el valor de la clave externa debe ser, bien igual a un valor ya existente en el dominio activo de la clave primaria, o bien completamente nulo (si la semántica lo permite).

IMPORTANTE: La integridad referencial mantiene las conexiones de las entidades.

### SGBD y la integridad

El SGBD mantiene la integridad de todas las relaciones:

- No debe permitir insertar o actualizar valores que ya estén en las tablas para los atributos que son clave primaria o clave candidata.
- No se pueden insertar una nueva tupla que tenga la misma clave primaria que otra que existe y además esta no puede ser nula.
- No se puede insertar una tupla en una tabla si el valor de la clave externa no está como clave primaria en la tabla origen.
- Igualmente ocurre con los NULOS.
- Si se actualiza la clave primaria esta debe actualizarse en cadena en todas las tablas donde aparezca como clave candidata, pimaria o externa. Igual ocurre con el borrado.






### Llave primaria y NULOS

No puede existir atributos que sean llave primaria y sean NULOS.



# Prácticas 

## Traspaso de Modelo E/R a Tablas

Para concretar los pasos para hacer el paso de Modelo de E/R (diagrama) a paso a tablas, vamos a trabajar con el diagrama siguiente:

![Diagrama01](imagenes/diagrama01.png)

El procedimiento general para pasar a tablas un diagrama de un Modelo de E/R es el siguiente:

### Traspaso de Entidades Fuertes

1.- Vemos cuales son las Entidades Fuertes del Modelo E/R:
 - a) Anotamos cada una de las **entidades fuertes**.
 - b) Incluimos todos sus atributos.
 - c) Marcar el/los atributo/s que son Clave Primaria (**CP**)

Por tanto para le diagrama las Entidades Fuertes con los atributos y claves primarias son las siguientes: 

```
Asignaturas(Cod_asig,...);  

Aulas(Cod_aula,...);

Alumnos(DNI,...);

Profesores(NRP,...);

Departamentos(Cod_dep,...);
```

![Diagrama02](imagenes/diagrama02.png)

### Traspaso de Entidades Débiles

2.- Vemos cuales son las de entidades débiles del diagrama de E/R:
 - a) Anotamos todas  las entidades débiles.
 - b) Incluimos los atributos que son Clave Primaria de la entidad debil.
 - c) Buscamos en las Entidades Fuertes con las que está unida la relación:
 - c1) Anotamos  los atributos que son Clave Primara en las Entidades Fuertes conectadas.
 
```
Asignaturas(Cod_asig,...)
Grupos(Cod_asig, Cod_grupo, Tipo,...)
```

![Diagrama03](imagenes/diagrama03.png)

![Diagrama04](imagenes/diagrama04.png)


### Traspaso de Relaciones

3.- Tradución del conjunto de relaciones del modelo E/R:
 - a) Anotamos todas las relaciones que unen a las entidades.
 - b) Incluimos los atributos propios de la relación.
 - c) Añadimos los atributos de las claves primarias de las entidades que están conectadas.
	
A tener en cuenta (mucho cuidado):
 - **Si la relación es muchos a muchos**:
	- La clave primaria está formada por todos los atributos de las Entidades involucradas
 - **Si la relación es mucho a uno**:
	- La clave primaria está formada por todos los atributos de las Entidades con cardinalidad de tipo *muchos*.
 - **Relaciones uno a uno**:
	- Tiene al menos dos claves candidatas (de las relaciones involucradas). Pero hay que seleccionar una como clave primaria y otra como clave candidata.

Ejemplo para muchos a muchos:

![Diagrama05](imagenes/diagrama06.png)

![Diagrama05](imagenes/diagrama05.png)


### Traspaso de relaciones de Herencia

4.- Traducción del conjunto de relaciones de Herencia:
 - a) Anotamos las entidades más generales (padre) y sus atributos propios.
 - b) Anotamos las relaciones de los conjuntos heredados:
  - b1) Añadimos los atributos de la relación y los atributos de clave primaria que se heredan del padre.

![Diagrama05](imagenes/diagrama11.png)

### Traspaso de agregaciones

4.- Traducción del conjunto de agregación:
 - No se traducen a nuevas tablas

### Traspaso de relaciones con Cardinalidades N-arias

5.- Cardinalidad en relación Muchos a Muchos a Muchos
 - a) Se toma la relación que une varias entidades (mas de dos entidades).
 - b) Se anotan los atributos propios de la relación si existen.
 - c) Se anotan las claves primarias de las entidades involucradas como claves externas.
 - d) Se marcan como clave primaria única las claves externas del paso c
 
6.- Cardinalidad en relación Muchos a Muchos a Uno
 - a) Se toma la relación que une varias entidades (mas de dos entidades).
 - b) Se anotan los atributos propios de la relación si existen.
 - c) Se anotan las claves primarias de las entidades involucradas como claves externas.
 - d) Se marcan como clave primaria única las claves externas de las relaciones con cardinalidad Muchos.

7.- Cardinalidad en relación Muchos a Uno a Uno
 - a) Se toma la relación que une varias entidades (mas de dos entidades).
 - b) Se anotan los atributos propios de la relación si existen.
 - c) Se anotan las claves primarias de las entidades involucradas como claves externas.
 - d) Se marcan como clave primaria única las claves externas de las relaciones con cardinalidad Muchos.

8.- Cardinalidad en relación Muchos a Uno a Uno
 - a) Se toma la relación que une varias entidades (mas de dos entidades).
 - b) Se anotan los atributos propios de la relación si existen.
 - c) Se anotan las claves primarias de las entidades involucradas como claves externas.
 - d) Se marcan como clave primaria única las claves externas de las relaciones con cardinalidad Muchos.
 
8.- Cardinalidad en relación Uno a Uno a Uno
 - a) Se toma la relación que une varias entidades (mas de dos entidades).
 - b) Se anotan los atributos propios de la relación si existen.
 - c) Se anotan las claves primarias de las entidades involucradas como claves externas.
 - d) Se marcan como clave primaria cada una de las claves externas.
 


## Fusión de tablas

### Traspaso relaciones Muchos a Uno

Para ello tenemos:

![Diagrama05](imagenes/diagrama12.png)



### Traspaso relaciones Muchos a Uno con atributo discriminadores

Para ello tenemos:

![Diagrama05](imagenes/diagrama13.png)


### Traspaso relaciones Muchos (relación obligatoria) a Uno 

Para ello tenemos:

![Diagrama05](imagenes/diagrama14.png)


### Traspaso relaciones de Herencia

Para ello tenemos:

![Diagrama05](imagenes/diagrama15.png)



### Traspaso relaciones Uno a Uno

Para ello tenemos:

![Diagrama05](imagenes/diagrama16.png)


## Prácticas de SQL

Esta parte contendrá diferentes materiales clave de consulta sobre ORACLE SQL del Cuaderno de prácticas:

### Tipos de datos admitidos para la creación de tablas

- INT, INTEGER , NUMERIC -- Enteros con signo (su rango depende del sistema).
- REAL , FLOAT -- Datos numéricos en coma flotante.
- CHAR(n) -- Cadena de longitud fija k.
- VARCHAR(n) -- Cadena de longitud variable de hasta n caracteres.
- VARCHAR2(n) -- Mínimo 1 carácter y máximo 4000.(Esta es una implementación de cadena más eficiente propia de Oracle􏰁)
- NUMBER(p,s) -- Número con precisión p y escala s, donde precisión indica el número de dígitos, y escala el número de cifras decimales.
- LONG -- Cadena de caracteres de longitud variable de hasta 2 gigabytes (específico de Oracle􏰁).
- LONG RAW(size) -- Cadena de datos binarios de longitud variable de hasta 2 gigabytes (específico de Oracle􏰁).
- DATE , TIME , TIMESTAMP -- Fechas.



### Crear una tabla


Creamos una tabla simple: 

```
CREATE TABLE tabla1 (
  id INT,
  nombre varchar(40)
);
```

Creamos una tabla simple con un atributo clave primaria `id`:

```
CREATE TABLE tabla1 (
  id INT,
  nombre varchar(40),
  PRIMARY KEY id
);
```

Creamos una tabla simple con atributo no nulo:

```
CREATE TABLE tabla1 (
  id INT,
  nombre varchar(40) NOT NULL,
  PRIMARY KEY id
);
```

Creamos una tabla con un atributo que no puede tener valores repetidos `orden`:

```
CREATE TABLE tabla1 (
  id INT,
  nombre varchar(40) NOT NULL,
  orden INT NOT NULL,
  PRIMARY KEY id,
  UNIQUE orden
);
```


Creamos un par de tablas para verificar como se definen las claves externas, siguiendo el siguiente esquema:


![Diagrama05](imagenes/diagrama17.png)


CREATE TABLE usuarios (
  id INT,
  nombre varchar(40) NOT NULL,
  PRIMARY KEY id
);
```

y 


CREATE TABLE pagos (
  idPago INT,
  idUsuario INT,
  pago INT,
  PRIMARY KEY (idPago),
  FOREIGN KEY idUsuario 
    REFERENCES usuarios(id)
);
```
En la creación de tabla anterior, con respecto al esquema, hay que tener en cuenta que por un lado definimos las claves primarias y poro otro lado las claves externas marcadas del paso a tablas .


### Descripción de tablas

Para mostrar los atributos, tipos de datos de las tablas almacenadas usamos:

```
DESCRIBE usuarios;
```

Lo que mostraría el conjunto de campos que contienen la tabla usuarios.

### Mostrar todas las tablas almacenadas

```
SELECT table_name FROM all_tables WHERE owner='TU USUARIO';
```

En esta consulta debes cambiar ``TU USUARIO`` por tu login a la Base de Datos de Oracle.

### Eliminar una tabla

```
DROP TABLE tabla1;
```

Permite eliminar una tabla completa.

### Añadir atributo nuevo a tabla

Esta operación añade un nuevo campo llamado ``orden`` a la tabla1.

```
ALTER TABLE tabla 1 ADD (orden INT) ;
```

### Importar sentencias SQL desde fichero

Crea un fichero de texto plano (usa un editor básico, como notepad, sublitext, textmate, ...) y añade las sentencias que quieras y guarda el fichero  con la extensión SQL. Luego desde el shell de SQLPlus, haz lo siguiente:

```
start c:\ruta\fichero.sql
```



## Problemas resueltos

### Problema A Modelado E-R Sistema de gestión bancaria.

Queremos gestionar una parte de un sistema bancario, para ello contamos con los siguientes elementos que deseamos modelar (añade los atributos que consideres necesarios):

- a) El banco tiene varias sucursales identificadas por un ID de sucursal, y una dirección.
- b) Cada sucursal tiene una cartera de clientes, caracterizados por su DNI, teléfono, email y
dirección y estado civil.
- c) En el banco, además trabajan empleados que a su vez también pueden ser clientes de la
sucursal donde trabajan). Los empleados tiene un ID de empleado, un nombre, y una
dirección.
- d) Los empleados atienden a los clientes en las sucursales, además los empleado solo
pueden atender a un cliente en un momento determinado (fecha de visita).
- e) En banco posee tres productos para su clientes:
 - i) Préstamos
 - ii) Depósitos
- f) Los préstamos son de dos tipos 1) Hipoteca y 2) Préstamos personal; si es un tipo de préstamo hipotecario, se identifica con un ID de préstamo, un porcentaje de interés, una cantidad de dinero hipotecado y una vivienda a la que está asociado. Para el caso de Préstamo personal, tenemos ID de préstamo, interés, cantidad de dinero prestado.
- g) Una cuenta en una sucursal puede ser de de dos tipos Cuenta de Ahorro y Cuenta de Corriente. Las cuentas de los clientes están identificadas por un ID de cuenta o CCC y el valor del balance de la cuenta. Cada cuenta de Ahorro tiene asociado un porcentaje de interés y cada cada cuenta corriente tiene asociado un valor de descubierto.
- h) Un cliente puede tener una única una cuenta en una sucursal.
- i) Los clientes para ser clientes de una sucursal deben contratar al menos una cuenta.
- j) El banco controla los préstamos y depósitos de los clientes. Para los préstamos se
necesita guardar cada pago realizado desde una cuenta, con datos de la fecha, la cantidad pagada y un ID de transacción. Para los depósitos se necesita guardar los datos de la transacción como la cantidad depositada, el ID de transacción y la cantidad. Estos datos se controlan a modo de histórico de movimientos.
- k) Los clientes pueden tener como máximo 5 préstamos en total, ya sean Hipotecas, o Préstamos normales.
- l) Las cuentas puede tener hasta 3 clientes asociados a la misma cuenta.
- m) Los préstamos y los depósitos están asociados a la cuenta de los clientes.
- n) Una Hipoteca, tiene asociado un inmueble que puede ser una vivienda, finca rústica o local
comercial. Los inmuebles están identificados por un ID de vivienda, metros cuadrados y dirección. Si es una vivienda hay que incluir un número de habitaciones del inmueble, y el tipo de vivienda: piso o casa.

**Se pide:**
- A) realizar el modelado de Entidad/Relación, y
- B) realizar el paso a tablas (y fusión, siempre que sea posible).















