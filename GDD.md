# OBSOLETO (Título Provisional)
### Game Design Document (GDD) — Versión 1.0
> *"Tienes 47 años, un coche viejo, cajas de fideos instantáneos en la cajuela y las cenizas de tu esposa en el asiento del copiloto."*

---

## 1. Resumen Ejecutivo & High Concept

* **Título:** Obsoleto (*Estás Despedido* / *Midnight Noodle*)
* **Género:** Slice-of-Life / Survival Narrativo / Conducción Contemplativa / Microgestión
* **Plataforma Objetivo:** PC (Steam / itch.io), con diseño adaptable a Steam Deck / Consolas.
* **Público Objetivo:** Jugadores de *Pacific Drive*, *Coffee Talk*, *Jalopy*, *Cart Life*, *A Short Hike*, *Euro Truck Simulator*.
* **Motor Recomendado:** Godot Engine 4.x o Unity (render pipeline liviano URP).
* **Estilo Visual:** Low-poly estilizado retro (inspiración PS1 / época 32-bit), sin texturas complejas, priorizando iluminación volumétrica, lluvia, neblina y reflejos sobre asfalto mojado.
* **Modelo de Negocio:** Compra única premium (10 - 15 USD), sin microtransacciones ni DLC invasivos.

### Elevator Pitch
Tras ser despedido y considerado "obsoleto" a los 47 años en una reestructuración corporativa que liquidó sus 25 años de servicio —reemplazado por un recién graduado que cobra tres veces menos aunque no sepa hacer la mitad de su trabajo—, Kenji pierde su departamento y se ve forzado a vivir en su viejo Toyota familiar de los 90. Al empacar lo que le queda, se enfrenta a la urna de su difunta esposa, a su retrato y a una montaña de promesas rotas, la más pesada de todas: el viaje por carretera hasta el final que siempre le juró hacer «este año» y que el trabajo postergó hasta que fue tarde. 

Junto a sus cenizas y a **la máquina de escribir mecánica de ella** —quien siempre soñó con ser escritora mientras él le prometía tiempo que nunca le dio—, Kenji toma la última fuerza que le queda: si ya es chatarra para el sistema, ahora vivirá para cumplir esas promesas. Recorrerá carreteras secundarias vendiendo fideos instantáneos "tuneados" desde la cajuela para pagar la gasolina, mientras cada noche golpea las teclas de la máquina de su esposa para terminar la historia que ella no pudo escribir.

---

## 2. Sinopsis Narrativa & Arco del Personaje

### Contexto: 25 Años de Rutina Invisible
* **El Protagonista:** Kenji (47 años). Durante un cuarto de siglo fue un oficinista administrativo leal, puntual e invisible.
* **El Vehículo del Asalariado:** Una vagoneta familiar japonesa de mediados de los 90 (un *Toyota Corolla Touring Wagon / Nissan AD Van* de motor 1.5L), color blanco comercial desteñido, con tapacubos rayados y parachoques de plástico gris. Lo compró a plazos hace casi dos décadas cuando sus hijos eran pequeños; luego se convirtió en el coche de diario que pasaba 12 horas bajo el sol en el estacionamiento corporativo mientras Kenji acumulaba horas extra. Huele a té verde embotellado, aire acondicionado añejo y papeles sellados. No es una camper de lujo ni un capricho bohemio: es el carromato honesto y desgastado de un asalariado común.
* **La Sentencia Corporativa:** La directiva convoca a reestructuración. *«Lo sabes perfectamente: un recién graduado cobra tres veces menos que tú, aunque no sepa hacer lo que tú haces ni entienda el peso de una responsabilidad real. Pero para la hoja de cálculo de la gerencia, eres solo un costo operativo obsoleto.»* Un apretón de manos tibio, una caja de cartón para sus pertenencias de escritorio y un modesto cheque de liquidación que se evapora de inmediato pagando pagarés atrasados del hospital.
* **La Soledad y el Desalojo:** Sin ingresos para el alquiler metropolitano y negándose con orgullo silencioso a pedir asilo a sus hijos adultos —quienes lidian con sus propias deudas, alquileres y problemas—, llega el día de entregar las llaves del minúsculo departamento.

### El Momento de Empacar: La Montaña de Promesas Rotas
En la penumbra del departamento vacío, Kenji apila lo poco que cabe en el maletero de la vagoneta: un colchón delgado, dos mantas, una olla pequeña y un hornillo de gas portátil. 

Al levantar la pequeña urna de cerámica con las cenizas de su esposa y el marco de madera con su fotografía, el peso del pasado le cae encima como plomo:
* **La Promesa de la Ruta:** Recuerda las noches que llegaba a casa a las 22:30 con la camisa empapada en sudor frío y la cena fría en la mesa. Cada año, al verla cansada, él le decía con tono reconfortante: *«Este año sí. Este año sí pedimos las vacaciones acumuladas, metemos las maletas a la vagoneta y recorremos toda la carretera nacional hasta el final, hasta donde el mar se congela»*. Pero ese año nunca llegó. Siempre hubo un balance trimestral que cuadrar, una auditoría interna, un ascenso prometido que nunca llegó. Y ella siempre estuvo ahí, mirándolo con esa sonrisa paciente, acariciándole el hombro y diciendo: *«No te preocupes, Kenji. El próximo año lo haremos»*. Hasta que el cáncer se la llevó hace tres años, dejándolo con las manos vacías y la casa en silencio.
* **La Máquina de Escribir de Ella:** En la última caja encuentra la vieja máquina de escribir mecánica portátil de su esposa. Ella siempre soñó con ser escritora; tenía cuadernos llenos de relatos a medio empezar, recortes de noticias y poemas en servilletas. Él le había jurado que cuando terminaran de pagar la hipoteca, ella podría renunciar a sus trabajos temporales y dedicarse por entero a su libro. *¿En cuánto le fallaste en vida? ¿Cuántas promesas quedaron sepultadas bajo el polvo de una oficina que al final te tiró a la calle como chatarra inútil?* Y aun así, en sus recuerdos, ella jamás le reprochó nada; siempre le sonrió.

### La Última Fuerza: Cumplir la Palabra
El dolor se transforma en una convicción silenciosa y férrea. La sociedad lo ha declarado obsoleto, pero para ella todavía tiene una deuda pendiente:
> *«Si para el mundo ya no sirvo, si ya no le debo un solo minuto a ninguna empresa... ahora voy a cumplir lo que te prometí. Te voy a llevar hasta el final de la ruta. Y en tu máquina voy a escribir la historia que no te di tiempo de contar.»*

Coloca la urna de cerámica envuelta en tela de seda en el asiento del copiloto, fija el retrato con cinta adhesiva al tablero junto a los conductos de ventilación, acomoda la máquina de escribir sobre el respaldo trasero y gira la llave del motor.

### El Giro de la Cajuela: La Primera Moneda
Estacionado bajo la lluvia en un muelle industrial de la periferia, sin dinero para una fonda, Kenji hierve agua en su hornillo para prepararse un vaso de fideos instantáneos de 100 yenes. Pica cebollín con su navaja sobre el cofre y le deja caer un huevo crudo para que cuaje con el calor residual. El vapor blanco llama la atención de dos estibadores que salen tiritando del turno nocturno:
> — *«Oiga, jefe... huele increíble. ¿A cuánto el tazón?»*

Kenji, titubeando, mira sus últimos fideos y murmura una cifra modesta. Tres monedas caen con un golpe seco en el portavasos de la consola central. En ese instante comprende: no necesita un restaurante millonario para vivir; necesita mantenerse en ruta, calentar el estómago de los que tienen frío en la noche y pagar la gasolina para llegar al Cabo Sōya.

---

## 3. Pilares Fundamentales de Diseño (Core Pillars)

```
       ┌────────────────────────────────────────────────────────┐
       │                   OBSOLETO: PILARES                     │
       └────────────────────────────────────────────────────────┘
            │                       │                      │
 ┌──────────────────────┐ ┌───────────────────┐ ┌────────────────────┐
 │  Dignidad Cotidiana  │ │  Bucle Tripartito │ │ Diegesis Absoluta  │
 │  La victoria es el   │ │  Carretera ➔      │ │ Interfaz integrada │
 │  tanque lleno y 30m  │ │  Puesto ➔         │ │ en el coche y      │
 │  de paz nocturna.    │ │  Máquina Escribir │ │ las herramientas.  │
 └──────────────────────┘ └───────────────────┘ └────────────────────┘
```

1. **La Dignidad Cotidiana (Survival Humanista):** No se trata de crear un imperio gastronómico ni de acumular millones. El objetivo diario es ganar suficientes monedas para 15 litros de gasolina regular, un parche para la rueda pinchada, gas butano y un paquete de hojas limpias.
2. **El Bucle Tripartito de Ritmos:**
   * *La Carretera:* Hipnótica, lenta, física pesada, paisajes con lluvia y radio de casete.
   * *El Puesto (Cajuela):* Ágil, táctico, vapor humeante, pedidos a contrarreloj y micro-historias.
   * *La Noche:* Íntima, silenciosa, minijuego de ritmo con la máquina de escribir y descanso reparador.
3. **Diegesis Absoluta:** Casi no hay HUD flotante. El combustible se mira en la aguja del tablero; la salud del motor, en el termómetro analógico y el sonido del radiador; el dinero, en el conteo de monedas en el portavasos; el mapa, en una hoja de carreteras doblada sobre el volante.

---

## 4. El Bucle de Juego Diario (Core Loop)

Cada ciclo en el juego representa una jornada de 24 horas dividida en 4 fases orgánicas:

```
[08:00 - MAÑANA] ──────► [13:00 - LA RUTA] ──────► [19:00 - EL PUESTO] ──────► [23:30 - LA NOCHE]
• Despertar en frío     • Conducir a 60-80 km/h   • Abrir cajuela           • Encender candil
• Revisar mapa y ruta   • Vigilar temperatura     • Hervir agua y toppings  • Máquina de escribir
• Comprar insumos       • Escuchar radio/cassette • Atender clientes        • Minijuego de ritmo
• Aceite / Presión      • Autoestopistas / eventos • Cobrar monedas         • Dormir y guardar
```

| Fase | Horario Diegético | Mecánicas Activas | Estado Emocional del Jugador |
|---|---|---|---|
| **Mañana** | 07:30 – 11:00 | Desempañar cristales, revisar mapa de ruta, visitar colmado/gasolinera local para insumos. | Planificación, cautela, sobriedad. |
| **Ruta** | 11:00 – 18:30 | Conducción con inercia, control de marchas, radio FM con estática, eventos aleatorios en arcén. | Contemplación zen, alivio, disfrute del paisaje. |
| **Puesto** | 19:00 – 23:00 | Minijuego de cocina rápida, personalización de caldos, escucha de diálogos y anécdotas de clientes. | Tensión controlada, destreza manual, conexión social. |
| **Noche** | 23:30 – 03:00 | Redacción rítmica en máquina de escribir, gestión del calor interior, lectura de cartas, descanso. | Melancolía cálida, catarsis, introspección. |

---

## 5. Sistemas y Mecánicas Detalladas

### 5.1 La Conducción (La Ruta)
* **Física del Vehículo:** No es un arcade de carreras. Se maneja a velocidades moderadas (50 a 80 km/h) en una transmisión manual o automática simple. El coche tiene peso real: se siente pesado en subidas con la cajuela llena y patina ligeramente con aguanieve.
* **Variables del Auto:**
  * *Combustible:* Aguja analógica con testigo de reserva. Quedarse sin gasolina en carretera abierta obliga a pagar remolque costoso o esperar a un buen samaritano.
  * *Temperatura de Motor:* En puertos de montaña empinados o si el radiador tiene fugas, la aguja sube al rojo. Si no se detiene a tiempo para ventilar, el motor echa humo blanco y sufre daño permanente.
  * *Limpiaparabrisas:* Tienen dos velocidades. El cepillo del lado derecho puede estar desgastado y dejar marcas, entorpeciendo la visibilidad con lluvia nocturna hasta que se compre un repuesto.
  * *Radio / Casete:* Permite cambiar entre 3 frecuencias con estática variable según la región, o insertar cintas de casete encontradas o compradas con temas lo-fi, jazz melancólico y folk japonés.

### 5.2 El Puesto Rodante (Cajuela & Minijuegos de Cocina)
Al llegar a un apeadero, plaza de pueblo o estación de tren, el jugador presiona `[E]` para aparcar, abrir la cajuela y encender el farolillo a pilas y el hornillo.
* **Componentes del Minijuego de Fideos:**
  1. *El Hervor:* Mantener presionado el gatillo/tecla para servir agua hirviendo desde la tetera hasta la línea interna exacta del vaso. Pasar o quedarse corto altera la textura del fideo.
  2. *El Cronómetro:* Dejar reposar los fideos 3 minutos exactos (acelerados a 15-20 segundos de tiempo de juego).
  3. *Toppings de Valor Agregado:* Con una tabla de picar sobre la rueda de repuesto o el borde de la cajuela:
     * *Cebollín fresco:* Corte rítmico con navaja.
     * *Huevo pochado en calor residual:* Momento exacto de romper la cáscara.
     * *Gotas de aceite de sésamo / chile casero / nori:* Eleva la puntuación de satisfacción del cliente, generando propinas o conversaciones íntimas.
* **Tipología de Clientes:**
  * *Obreros del turno de noche:* Quieren comida caliente rápido y con mucho caldo salado.
  * *Estudiantes trasnochadores:* Buscan precio accesible y algo dulce o reconfortante.
  * *Camioneros cansados:* Valoran un café soluble bien caliente y charlar sobre el estado de la carretera más adelante.
  * *Ancianos locales:* Comen despacio, dejan ingredientes de sus huertas como trueque y cuentan la historia del pueblo.

### 5.3 La Estación Creativa (La Máquina de Escribir de Ella)
Cuando se apaga el hornillo y se baja la compuerta de la cajuela, Kenji pasa a la cabina trasera con el candil a pilas. Sobre una tabla de madera descansa la vieja máquina de escribir mecánica de su difunta esposa, rodeada de sus cuadernos de notas con letra apretada y páginas amarillentas.
* **El Sentido Emocional:** Ella siempre soñó con ser escritora y publicar su historia; Kenji le prometió durante años que le daría el tiempo y la tranquilidad para hacerlo, una promesa ahogada por las horas extra en la oficina. Cada noche no escribe por vanidad, sino para tejer los fragmentos que ella dejó inconclusos con las vivencias y conversaciones de la gente solitaria que conoció durante el día.
* **Mecánica Rítmica:**
  * Las palabras clave e impresiones recolectadas flotan como compases rítmicos sobre el papel.
  * El jugador presiona las teclas al compás de una melodía sutil de piano y lluvia.
  * Cada pulsación reproduce el sonido metálico y seco del tipo de plomo chocando contra el rodillo: *clack-clack-clack*.
  * Al llegar al final de la línea, suena la clásica campanilla (*¡ding!*), y el jugador debe pulsar `[Enter]` para accionar la palanca de retorno (*shhh-clack*).
  * Si se falla el ritmo consecutivamente, los tipos mecánicos de plomo se cruzan y se atascan físicamente; el jugador debe desatorarlos manualmente con el ratón o stick.
* **El Destino de las Páginas:**
  * Al juntar cuartillas completas, se pueden enviar por correo postal en las oficinas de los pueblos hacia pequeños certámenes o publicaciones locales bajo el nombre de ella.
  * Respuestas realistas llegan días después a apartados postales: desde rechazos amables hasta pequeños pagos simbólicos de colaboración que permiten cambiar un filtro de aceite o comprar gas butano.

### 5.4 Gestión de Espacio (Tetris en la Cajuela)
El espacio de la vagoneta es un recurso finito modelado en una cuadrícula tipo inventario táctico:
* El saco de dormir ocupa 6 casillas.
* La urna y el portarretratos siempre ocupan el asiento delantero (no removibles).
* Las cajas de 24 vasos de fideos ocupan 4 casillas cada una.
* El tanque de gas y el bidón de 5L de reserva de gasolina compiten por el espacio ventilado.
* **Dilema del Pasajero:** Si Kenji acepta llevar a un autoestopista para ganar dinero extra o escuchar una historia, debe reorganizar el maletero para liberar el asiento trasero, sacrificando la posibilidad de llevar provisiones extra.

---

## 6. Estructura del Mundo: Grafo de Nodos & Biomas

En lugar de construir un mundo abierto de cientos de kilómetros inabarcable para un equipo pequeño, el mapa utiliza una arquitectura de **Grafo de Nodos con Generación Modular por Biomas**:

```
[ REGIÓN 1: SUR INDUSTRIAL ]
     (Puerto Chiba) ───► (Cruce Fábricas) ───► (Estación Rural)
                               │                     │
                               ▼                     ▼
[ REGIÓN 2: VALLE CENTRAL ]
     (Paso Neblinoso) ──► (Pueblo Onsen) ────► (Apeadero Ferrocarril)
                               │                     │
                               ▼                     ▼
[ REGIÓN 3: PASO DE MONTAÑA ]
     (Túnel Viejo) ────► (Mirador de Pinos) ──► (Pueblo Abandonado)
                               │                     │
                               ▼                     ▼
[ REGIÓN 4: COSTA NORTE (HOKKAIDO) ]
     (Puerto Pesquero) ──► (Carretera Helada) ─► [CABO SŌYA - FIN]
```

### Tipos de Nodos
1. **Nodos Urbanos / Industriales:** Mucha clientela, poco espacio de aparcamiento legal, riesgo de que la policía pida desalojar, repuestos de coche fáciles de conseguir.
2. **Nodos Rurales / Agrícolas:** Venta moderada, trueque de hortalizas frescas (puerros, huevos, setas), ritmo pausado, noches tranquilas.
3. **Nodos de Montaña / Onsen:** Clima frío que desgasta el radiador, pero gran demanda de sopa hirviendo por turistas o trabajadores aislados.
4. **Nodos de Descanso (*Michi-no-Eki*):** Áreas de descanso seguras con baños públicos y máquinas expendedoras. Cero ventas de comida, pero descanso 100% garantizado y tiempo de escritura prolongado.

### Generación Modular de Tramos (Carretera 3D)
Cuando el jugador viaja entre dos nodos, el motor selecciona de una librería de 20 segmentos prefabricados modulares (recta de bosque, curva con guardarraíl, puente de hormigón, túnel estrecho, repecho montañoso) concatenados según las propiedades del tramo (ej. 70% bosque, 30% lluvia, 40 km de recorrido diegético).

---

## 7. Modos de Juego y Final

### Modos
1. **El Peregrinaje (Campaña Principal - 6 a 8 Horas):**
   * Travesía completa desde el sur urbano hasta el extremo norte de Japón.
   * Dificultad equilibrada de supervivencia económica y mantenimiento mecánico.
   * Final narrativo canónico.
2. **Ruta Corta (Modo Relato - 2 Horas):**
   * Experiencia contenida de 2 regiones seleccionadas para sesiones directas.
3. **Camino Infinito (Endless Zen Mode):**
   * Se desbloquea tras finalizar la campaña. Carreteras continuas con clima dinámico procedural, sin urgencia de fin de trayecto, ideal para relajación y streaming.

### El Clímax: El Cabo Sōya y las Dos Promesas
El camino termina donde acaba el asfalto frente al mar gris y helado del norte. El viento polar sacude la chapa de la vagoneta. Kenji aparca en el mirador desierto, apaga el motor que cruje enfriándose tras miles de kilómetros y contempla el horizonte que siempre le juró mostrarle.
Baja del auto, monta el hornillo sobre el cofre y prepara dos tazones humeantes: uno para él y otro que coloca con reverencia junto a la urna de cerámica y el retrato de ella.
Dentro del auto, con el candil iluminando el vapor de su propio aliento, teclea en la máquina de escribir de su esposa los últimos párrafos del manuscrito que ella empezó hace dos décadas: un desenlace tejido con las voces, penas y silencios de los trabajadores, ancianos y viajeros que conoció en cada pueblo.
Al amanecer, cuando el sol pálido asoma sobre las olas del mar del norte, Kenji esparce sus cenizas al viento. Ha cumplido las dos promesas que más le pesaban en el alma: llevarla hasta el fin del camino y regalarle al mundo el libro que ella siempre soñó escribir. No hay fanfarria ni victoria comercial; solo el murmullo del mar, el sonido del motor arrancando en paz y los créditos rodando sobre fotografías instantáneas de la ruta.

---

## 8. Identidad Artística & Sonora

* **Visuales:** Estilo retro low-poly (conteo bajo de polígonos, paletas de colores sobrias y evocadoras). Sin texturas realistas pesadas; la fuerza gráfica reside en:
  * Niebla volumétrica densa que se corta con los conos de luz amarilla de los faros halógenos.
  * El resplandor naranja y el vapor blanco de la olla contra la oscuridad azul de la noche.
  * Gotas de lluvia que resbalan en tiempo real sobre los cristales del coche.
* **Sonido & Música (El 50% de la Inmersión):**
  * *Efectos Diegéticos:* El goteo de la lluvia en el techo de chapa, el sonido apagado del limpiaparabrisas (*chwic-chwic*), el chisporroteo del quemador de gas, el chasquido seco de la máquina de escribir (*clack-ding*).
  * *Banda Sonora:* Pistas suaves de guitarra acústica solitaria, piano melancólico y jazz lo-fi analógico que entran de forma sutil en momentos de soledad en carretera o al atardecer.

---

## 9. Viabilidad Técnica para Solo Dev o Equipo Pequeño

| Reto Típico en Desarrollo | Solución Pragmática en OBSOLETO |
|---|---|
| Mapear un país o mundo abierto completo | **Grafo de Nodos + Tramos Modulares 3D**. Solo se modelan ~20 tramos de carretera reutilizables y nodos estáticos. |
| Costo de actores de voz y cinemáticas | **Narrativa ambiental y texto diegético**. Sonidos y animaciones simples transmiten emoción sin doblaje costoso. |
| Modelado complejo de personajes | **Modelos low-poly con animaciones cinemáticas mínimas**. Rostros sugeridos con iluminación y retratos 2D ilustrados en los diálogos. |
| Simulación compleja de cocina | **Micro-juegos precisos basados en timing y controles simples** (fáciles de programar y muy satisfactorios). |

---

## 10. Hoja de Ruta de Prototipado (Roadmap en 4 Fases)

* **Fase 1: El Tablero y la Ruta (Semanas 1-4):**
  * Controlador básico del coche con inercia pesada y medidores analógicos en cámara interior.
  * Generador de 3 tramos de carretera modulares con lluvia y niebla.
* **Fase 2: La Cajuela y los Fideos (Semanas 5-8):**
  * Cámara fija de cajuela abierta, hornillo funcional, minijuego de hervido y topping.
  * Sistema básico de monedas en portavasos y cliente con diálogo sencillo.
* **Fase 3: La Máquina de Escribir y el Mapa (Semanas 9-12):**
  * Minijuego rítmico con retroalimentación sonora para la máquina de escribir.
  * Interfaz de mapa de carreteras 2D con selección de nodos.
* **Fase 4: Pulido Vertical Slice (Semanas 13-16):**
  * Unión de las 3 fases en un ciclo diario completo (1 pueblo, 1 ruta, 1 noche).
  * Presentación para demo pública o campaña de micro-financiamiento / publishers.
