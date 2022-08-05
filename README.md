# 3itGonzaloTajmuch

## Configuración de API KEY

Reemplazar variable `apiKey` en src/environments/environment.ts con el valor de la API Key obtenida de https://api.cmfchile.cl/documentacion/index.html

## Comentarios

-   Usé Bootstrap, creo que materialize sigue instalado. En un principio instalé ambos pensando en que se pedían ambos, después encontré que no tenía sentido usar dos herramientas para, a grandes rasgos, lo mismo.

-   Está hecho mobile-first pero sin ninguna consideración a una pantalla grande, please ver con el "device toolbar" de chrome :p

-   Cuando se pide por los datos de los últimos 10 o 30 días, la api no entrega los del fin de semana y festivos. Por lo que no llegan 10 o 30 datos, respectivamente, cuando se consulta. Esto no se manejó para traer exactamente la cantidad de días, por temas de simpleza y poca claridad a la hora de interpretar el requerimiento, ya que tiene sentido entregar 8 datos en vez de 10, si la api tiene 8 datos desde hace 10 días, pero el cliente también podría especificar que quiere una lista con 10 datos por sobre que se cumpla hace 10 días, por ejemplo.

Por temas de tiempo no agregué unas cosas que tenía pensadas en un principio pero listo aquí:

-   Animaciones para la navegación como las de una app nativa. Medio fome que instantáneamente cambie la pantalla

-   Usar tabs para historial/información. Nada complejo, pero partí con rutas para no complicarme con ng-bootstrap que no lo uso hace un tiempo, y no me dio el tiempo para ver como se vería con tabs en vez de dos pantallas separadas

-   Configuracion de indicadores en `IndicadoresService` que incluya la configuración de cada indicador a la hora de buscar su data histórica y data para el gráfico. Así se podrían agregar divisas con distintas configuraciones, y reconfigurar las existentes. Para esto el servicio necesitaría funciones más genéricas y un mapa para identificarlas desde la configuración, o bien manejar un set de opciones disponibles (cada x dias, los ultimos 12 meses, este año) para simplificar el codigo.

-   Filtrar indicadores. Mi idea era permitir buscar/filtrar los indicadores en la lista principal, donde el usuario apreta una lupa y se despliega un input sobre o bajo el header. Según el término ingresado ahí por el usuario, se filtrarían las opciones a mostrarse en el template al filtrar los indicadores en el get `listaIndicadoresId` en el componente ``.
