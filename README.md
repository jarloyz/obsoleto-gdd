# OBSOLETO (時代遅れ) — Game Design Document

[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-brightgreen)](https://pages.github.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](https://opensource.org/licenses/MIT)
[![Status: Concept & GDD](https://img.shields.io/badge/Status-GDD%20v1.0-blue)](GDD.md)

> *"Tienes 47 años, un coche viejo de los 90, fideos instantáneos en la cajuela y las cenizas de tu esposa en el asiento del copiloto."*

---

## 📖 Acerca de este Repositorio

Este repositorio contiene el **Game Design Document (GDD)** completo, la arquitectura técnica y la página web interactiva de presentación para el videojuego indie **OBSOLETO** (*Estás Despedido* / *Midnight Noodle*).

El proyecto está diseñado desde su origen para ser **100% compatible y publicable en GitHub Pages** sin necesidad de configuraciones complicadas ni frameworks de compilación (`zero build tools`).

---

## 🚀 Cómo Publicar en GitHub Pages (Paso a Paso)

Una vez subas este repositorio a tu cuenta de GitHub, sigue estos 3 pasos sencillos para tener tu web en vivo:

1. Entra a tu repositorio en GitHub y haz clic en la pestaña **Settings** (Configuración).
2. En la barra lateral izquierda, busca la sección **Pages** (o dentro de *Code and automation* > *Pages*).
3. En **Build and deployment**:
   * **Source:** Selecciona `Deploy from a branch`.
   * **Branch:** Selecciona la rama `main` y la carpeta `/ (root)`.
   * Haz clic en **Save** (Guardar).

En aproximadamente 1 o 2 minutos, GitHub te dará una URL pública tipo:
```
https://<tu-usuario>.github.io/obsolette/
```
¡Y tu GDD interactivo ya estará visible para todo el mundo!

---

## 📂 Estructura del Proyecto

* **[`index.html`](file:///home/jarloyz/estudio/obsolette/index.html):** Página web interactiva del GDD (diseño responsivo, modo lluvia ambiental con Web Audio, pestañas del ciclo de 24h, simulador de grafo de nodos y modal para Reddit).
* **[`style.css`](file:///home/jarloyz/estudio/obsolette/style.css):** Sistema de diseño visual estilizado (paleta lo-fi ámbar y pizarra, tipografía *Inter*, *Shippori Mincho* y *JetBrains Mono*, animaciones sutiles y estilos de impresión para exportar a PDF).
* **[`script.js`](file:///home/jarloyz/estudio/obsolette/script.js):** Lógica interactiva (animación de gotas en Canvas, generador de audio ambiente de lluvia, pestañas interactivas del bucle diario y simulador de ruta).
* **[`GDD.md`](file:///home/jarloyz/estudio/obsolette/GDD.md):** Documento formal de diseño de videojuego en Markdown puro con tablas, diagramas y especificaciones técnicas.
* **`assets/`:** Arte conceptual y capturas visuales de la atmósfera del juego:
  * `cover.jpg`: El auto familiar en una curva de montaña al atardecer con la cajuela abierta y la tetera humeante.
  * `cockpit.jpg`: Vista en primera persona de la cabina de conducción bajo la lluvia nocturna con el retrato en el tablero.
  * `typewriter.jpg`: La cabina trasera convertida en estación creativa nocturna con la máquina de escribir mecánica.

---

## 💻 Vista Previa Local

Para ver la web en tu navegador de forma local, puedes abrir directamente el archivo `index.html`, o levantar un servidor web local liviano:

```bash
# Con Python 3:
python3 -m http.server 8080

# O con npx:
npx -y serve .
```
Luego abre tu navegador en `http://localhost:8080`.

---

## 📋 Compartir en Reddit o Comunidades de Devs

En la barra superior de la página web hay un botón llamado **"Pitch para Reddit"**. Al hacer clic, se abre una ventana con el texto en Markdown estructurado y sintetizado en inglés, listo para copiar con un solo clic y publicar en comunidades como [r/gamedev](https://reddit.com/r/gamedev) o [r/GameDesign](https://reddit.com/r/GameDesign).

---

## 🛠️ Tecnologías Sugeridas para el Prototipado

* **Motor:** Godot Engine 4.x (o Unity URP).
* **Modelado 3D:** Blender (modelado low-poly sin texturas pesadas, paleta plana con dithering).
* **Audio:** Reaper / Audacity (diseño sonoro foley y música lo-fi).
