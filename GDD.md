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
Ambientado en el **Japón contemporáneo**, encarnas a Kenji (47 años), un asalariado administrativo despedido en una reestructuración corporativa tras 25 años de servicio —reemplazado por un recién graduado que cobra un tercio de su sueldo gracias a la automatización digital—. Expulsado del sistema y sin poder pagar el alquiler de la metrópoli, Kenji vende su smartphone para comprar comida básica y empaca lo poco que le queda en su modesto **Toyota Probox de 1998**: el clásico y austero vehículo familiar de los oficinistas japoneses.

En la cajuela guarda una libreta arrugada con el número de su hijo, una vieja cámara analógica de rollo de 35mm (que compró con su esposa para unas vacaciones que nunca llegaron), un mapa de carreteras comprado en una gasolinera y **la máquina de escribir mecánica de ella**, quien soñó toda su vida con ser escritora. 

Con las cenizas y el retrato de su esposa en el tablero, Kenji toma la última fuerza que le queda para saldar sus promesas: llegar al extremo norte (Cabo Sōya). Para costear la gasolina y las refacciones sin un solo yen de saldo digital, abre la cajuela al anochecer vendiendo fideos instantáneos "tuneados" a trabajadores nocturnos; desde cabinas telefónicas públicas de monedas verdes enfrenta el dilema de confesarle su miseria a su hijo o mentir diciendo que «todo va bien»; y cada madrugada teclea a compás en la máquina de su esposa para terminar la novela que ella nunca pudo escribir.

---

## 2. Sinopsis Narrativa & Arco del Personaje

### Contexto Contemporáneo: 25 Años de Rutina Invisible
* **El Protagonista:** Kenji (47 años). Durante un cuarto de siglo fue un oficinista administrativo leal, puntual e invisible.
* **El Vehículo Real del Asalariado:** Un **Toyota Probox (プロボックス) de 1998** (o *Corolla Fielder* de 1.5L). En Japón, el Probox blanco con parachoques de plástico gris sin pintar es el símbolo por antonomasia del *sararīman* explotado: un coche compacto de apenas 4.2 metros, indestructible, de bajo consumo y con asientos traseros abatibles que quedan 100% planos (diseñados para transportar cajas de archivo o dormir siestas rápidas de 20 minutos). No es una van grande occidental que jamás cabría en los callejones japoneses, sino la herramienta austera de trabajo que Kenji compró cuando sus hijos eran pequeños. Huele a té verde frío, aire acondicionado añejo y carpetas de balance.
* **La Sentencia de la Era Digital:** *«Lo sabes perfectamente: un recién graduado cobra tres veces menos que tú, maneja software que tú tardas días en entender y no tiene la vista cansada. Para los algoritmos y la gerencia moderna, eres solo un costo operativo obsoleto.»*
* **El Aislamiento Forzado:** Sin dinero para pagar el alquiler de Tokio y negándose con orgullo silencioso a ser una carga para sus hijos adultos —quienes luchan con sus propias hipotecas y deudas—, Kenji entrega las llaves de su minúsculo piso. **Vende su smartphone en una casa de empeño** para comprar las últimas cajas de fideos, gas y garrafas de agua. En el bolsillo solo le queda una libreta de papel arrugada donde anotó a bolígrafo el número de teléfono fijo de su hijo.

### El Momento de Empacar: Los Cuatro Objetos de la Memoria
En el maletero del Probox solo caben los fragmentos de una vida:
1. **La Urna y el Retrato:** Las cenizas de su esposa en una urna de cerámica envuelta en tela de seda en el asiento del copiloto, y su foto sujeta con cinta adhesiva al salpicadero.
2. **El Mapa de Carreteras de Papel:** Comprado en una gasolinera rural de paso. Sin GPS ni datos móviles, el mapa doblado en cuatro sobre el volante es su única guía entre carreteras nacionales secundarias (*kokudō*).
3. **La Vieja Cámara de Rollo (35mm):** Una cámara mecánica que compraron juntos hace 15 años entre risas como «el primer preparativo para las vacaciones familiares por carretera» que postergaron cada año y que jamás llegaron a hacer. Le quedan exactamente 24 fotos en el carrete.
4. **La Máquina de Escribir de Ella:** El objeto más sagrado. Su difunta esposa siempre soñó con ser escritora y publicar una novela. Él le juró una y otra vez que le daría tiempo y tranquilidad para escribir, una promesa ahogada por 25 años de horas extra.

### El Dilema de la Cabina Pública NTT (Verde de Monedas)
En cada pueblo y área de descanso (*Michi-no-Eki*), hay una cabina telefónica pública verde de monedas. Con 100 yenes ganados con el caldo, Kenji puede descolgar el auricular y marcar el número de su hijo. 
* ¿Tendrá el valor de decirle la verdad? (*«Hijo... me quedé sin trabajo, me echaron del departamento y estoy viviendo en el auto»*).
* ¿O se tragará las lágrimas escuchando la estática de la línea para decirle: *«Todo marcha de maravilla por aquí, hijo. Solo llamaba para escuchar tu voz. Cuídate mucho»*?

### La Última Fuerza: Cumplir la Palabra
El dolor se transforma en una convicción silenciosa:
> *«Si para el mundo hiperconectado ya no existo, si ya no le debo un solo minuto a ninguna oficina... ahora voy a cumplir lo que te prometí. Te voy a llevar hasta el Cabo Sōya. Usaré las fotos que nunca nos tomamos. Y en tu máquina de escribir, voy a terminar la novela que te prometí que escribirías.»*

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

### 5.1 La Conducción (La Ruta & Micro-Decisiones del Camino)
* **Física del Vehículo:** No es un arcade de carreras. Se maneja a velocidades moderadas (50 a 80 km/h) en una transmisión manual o automática simple. El Probox tiene peso real: se siente pesado en subidas con la cajuela cargada y patina ligeramente con aguanieve.
* **Variables del Auto:**
  * *Combustible:* Aguja analógica con testigo de reserva. Quedarse sin gasolina en carretera abierta obliga a pagar remolque costoso o esperar a un buen samaritano.
  * *Temperatura de Motor:* En puertos de montaña empinados o si el radiador tiene fugas, la aguja sube al rojo. Si no se detiene a tiempo para ventilar, el motor echa humo blanco y sufre daño permanente.
  * *Limpiaparabrisas:* Tienen dos velocidades. El cepillo del lado derecho puede estar desgastado y dejar marcas, entorpeciendo la visibilidad con lluvia nocturna hasta que se compre un repuesto.
  * *Radio / Casete:* Permite cambiar entre 3 frecuencias con estática variable según la región, o insertar cintas de casete encontradas o compradas con temas lo-fi, jazz melancólico y folk japonés.
* **Micro-Decisiones y Curiosidad en Ruta:**
  * *¿Le darás el rait a ese anciano que camina solo por el arcén de la carretera bajo la llovizna?* Ganarás su compañía y una anécdota entrañable sobre el Japón rural que ya no existe, pero tendrás que reacomodar las cajas del maletero al piso para hacerle espacio.
  * *¿Te detendrás a comprar en ese puesto solitario en medio de la autopista?* Gastar tus últimas monedas contadas en setas silvestres o pescado seco puede dejarte al borde de no tener para gasolina, pero eleva el sabor del caldo nocturno.
  * *¿Seguirás tu plan trazado en el mapa o tomarás el desvío que dice "Pueblo X: Entrada a 200m" solo por la curiosidad de ver qué hay detrás de esa montaña?* Explorar caminos secundarios desgasta los frenos y consume tiempo, pero es donde se encuentran los miradores más conmovedores y los clientes más agradecidos.

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

### 5.3 La Estación Creativa (Escribir la Verdad sin Adornos)
Cuando se apaga el hornillo y se baja la compuerta de la cajuela, Kenji pasa a la cabina trasera con el candil a pilas. Sobre una tabla de madera descansa la vieja máquina de escribir mecánica de su difunta esposa, rodeada de sus cuadernos de notas con letra apretada y páginas amarillentas.
* **Escribir sin Ficción, Solo la Verdad:** Kenji no es un novelista profesional, no sabe inventar tramas fantasiosas ni figuras retóricas complejas. Es simplemente un hombre común rememorando su día a día: el frío del volante por la mañana, el crujido de las hojas bajo las llantas, las tres monedas dejadas por el camionero, el dolor sordo de espalda y el silencio al colgar la cabina telefónica. **Escribe su historia cruda, honesta y sin adornos.** Ya que su esposa no está para escribir su libro, él cumplirá su sueño regalándole al mundo la crónica viva del viaje que nunca pudieron hacer juntos.
* **Mecánica Rítmica:**
  * Las frases de su memoria cotidiana flotan como compases rítmicos sobre el papel.
  * El jugador presiona las teclas al compás de una melodía sutil de piano y lluvia.
  * Cada pulsación reproduce el sonido metálico y seco del tipo de plomo chocando contra el rodillo: *clack-clack-clack*.
  * Al llegar al final de la línea, suena la clásica campanilla (*¡ding!*), y el jugador debe pulsar `[Enter]` para accionar la palanca de retorno (*shhh-clack*).
  * Si se falla el ritmo consecutivamente, los tipos mecánicos de plomo se cruzan y se atascan físicamente; el jugador debe desatorarlos manualmente con el ratón o stick.
* **El Destino de las Páginas:**
  * Al juntar cuartillas completas, se pueden enviar por correo postal en las oficinas de los pueblos hacia pequeños certámenes o publicaciones locales firmadas bajo el nombre de ella.
  * Respuestas realistas llegan días después a apartados postales: desde rechazos amables hasta pequeños pagos simbólicos de colaboración que permiten cambiar un filtro de aceite o comprar gas butano.

### 5.4 Gestión de Espacio (Tetris en la Cajuela del Probox)
El maletero del Toyota Probox tiene piso plano al abatir los asientos traseros, pero el espacio sigue siendo rigurosamente limitado:
* El saco de dormir ocupa 6 casillas.
* La urna y el portarretratos siempre ocupan el asiento delantero (no removibles).
* Las cajas de 24 vasos de fideos ocupan 4 casillas cada una.
* El tanque de gas y el bidón de 5L de reserva de gasolina compiten por el espacio ventilado.
* **Dilema del Pasajero:** Si Kenji acepta llevar a un autoestopista para ganar dinero extra o escuchar una historia, debe reorganizar el maletero para liberar el asiento trasero, sacrificando la posibilidad de llevar provisiones extra.

### 5.5 Las Cabinas Telefónicas NTT & La Cámara de 35mm
Dos mecánicas adicionales ancladas en objetos físicos:
* **La Cabina Verde NTT (El Vínculo con el Hijo):**
  * Presente en áreas de servicio (*Michi-no-Eki*) y esquinas de pueblos.
  * Funciona insertando monedas de 100 yenes del portavasos.
  * Abre un sistema de diálogo ramificado: Kenji saca la libreta arrugada, marca el número fijo de su hijo y el jugador decide si confesar la verdad sobre su desalojo o mantener la mentira piadosa (*«Todo va bien, hijo»*) mientras el medidor de tiempo de la llamada baja segundo a segundo.
* **La Cámara de Rollo de 35mm (24 Exposiciones):**
  * Comprada hace 15 años para las vacaciones que nunca ocurrieron.
  * Solo quedan **24 fotografías en el carrete** para todo el viaje.
  * El jugador puede asomarse por el visor óptico analógico para retratar paisajes, amaneceres, clientes memorables o el coche frente a un mirador.
  * Estas 24 fotos tomadas por el jugador son reveladas durante los créditos finales al llegar a Cabo Sōya, convirtiéndose en el álbum fotográfico real de la travesía.

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
