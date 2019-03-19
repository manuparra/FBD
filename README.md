# Fundamentos de Bases de Datos

Documentación y Material ADICIONAL de la asignatura de Fundamentos de Bases de Datos. En este repositorio se incluirá toda la információn EXTRA de la asignatura que ayudará a su estudio y trabajo tanto para la parte de Teoría como para la parte de Prácticas.

Grado en Ingeniería Informática. Universidad de Granada.

Profesor Grupo A-A1: Manuel Parra-Royón  (manuelparra@cern.ch | manuelparra@ugr.es)


## Traspaso de Modelo E/R a Tablas

Para concretar los pasos para hacer el paso de Modelo de E/R (diagrama) a paso a tablas, vamos a trabajar con el diagrama siguiente:

![Diagrama01](imagenes/diagrama01.png)

El procedimiento general para pasar a tablas un diagrama de un Modelo de E/R es el siguiente:

1.- Vemos cuales son las Entidades Fuertes del Modelo E/R:

	- a) Extraer entidades fuertes
    - b) Incluir todos sus atributos
    - c) Marcar el atributo/s que son Clave Primaria

Por tanto para le diagrama las Entidades Fuertes con los atributos y claves primarias son las siguientes: 

```
Asignaturas(Cod_asig,...);  
Aulas(Cod_aula,...);
Alumnos(DNI,...);
Profesores(NRP,...);
Departamentos(Cod_dep,...);
```

2.- Traduccion del conjunto de entidades débiles del diagrama de E/R:
	a) Extraer las entidades débiles
	b) Marcar los atributos que son Clave Primaria de la entidad debil
	c) Buscar las Entidades Fuertes con las que están unidas		
		c1) Marcar los atributos que son Clave externa
	d) Incluir la clave externa en la lista de atributos de la entidad debil anterior

Asignaturas(Cod_asig,...)
Grupos(Cod_asig, Cod_grupo, Tipo,...)

3.- Tradución del conjunto de relaciones
	a) Extraer las relaciones que unen a las entidades
	b) Añadir los atributos propios de la relación
	c) Añadir los atributos de las claves primarias de las entidades que están conectadas
	
	A tener en cuenta:
	- Si la relación es muchos a muchos:
		La clave primaria está formada por todos los atributos de las Entidades involucradas
	- Si la relación es mucho a uno:
		La clave primaria está formada por todos los atributos de las Entidades con cardinalidad de tipo mucho.
	- Relaciones uno a uno:
		Tiene al menos dos claves candidatas (de las relaciones involucradas). Pero hay que seleccionar una como clave primaria y otra como clave candidata.










