# singleton-pattern-example-nodejs

Repositorio de aplicación en NodeJS Javascript (ES6) utilizando Singleton Pattern.


Definición:

Es un patrón de diseño que permite restringir la creación de objetos pertenecientes a una clase o el valor de un tipo a un único objeto.

Su intención consiste en garantizar que una clase solo tenga una instancia y proporcionar un punto de acceso global a ella.

Diagrama UML:

![Offer General Diagram](diagrams/UML.png)


Cuando usarla:

1) Cuando quieras solo una instancia de esa clase en la aplicación entera
2) Quieres que su información persista incluso si actualmente no hay referencias a ella.


Beneficios:

1) Acceso controlado a la instancia: Debido a que la clase Singleton encapsula su instancia, puede tener un control de cuándo y cómo los clientes acceden a ella.
2) Reduce el número de variables: El patrón Singleton evita tener variables globales que sólo guardan instancias de clases.
3) Permite cambiar el número de instancias: Este patrón facilita que se añadan más instancias de la clase Singleton en caso de que ya no queramos solo una. Además, se puede controlar el número de instancias que se usan. Lo único que hay que cambiar en la operación instance()

Otros ejemplos:

1) Carga inicial de recursos en memoria
2) Conexion a base de datos

Autor: Jesús Kahwati
