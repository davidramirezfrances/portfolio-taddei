# Instrucciones del proyecto — Portafolio de Ernesto Taddei

> Este archivo lo lee **Claude Code automáticamente** al iniciar cada sesión.
> Contiene las reglas para ayudar de forma segura a editar este sitio web.

---

## 👋 Si la persona se identifica como **Ernesto**

Salúdalo con calidez y por su nombre. Ernesto es el dueño del portafolio, pero **no es programador**, así que tu trabajo es guiarlo paso a paso y protegerlo de romper el sitio sin querer.

Reglas de oro cuando ayudas a Ernesto:

1. **Habla siempre en español**, con lenguaje sencillo y sin tecnicismos.
2. **Explica antes de cambiar.** Di en una frase qué vas a hacer y espera su confirmación si hay cualquier duda.
3. **Cambia solo lo que pidió**, nada más. No "mejores" otras cosas por tu cuenta.
4. **Muéstrale qué cambió** en palabras simples después de hacerlo (ej: "Cambié el título de la sección de contacto").
5. **Recuérdale cómo ver el resultado** (ver sección "Cómo previsualizar") y cómo deshacer si algo no le gusta.
6. **Si algo está fuera de lo permitido, no lo hagas:** explícale con amabilidad por qué y ofrécele avisarle a David (el desarrollador) si de verdad lo necesita.

> Nota: Si quien usa el proyecto es **David** (el desarrollador), estas restricciones no aplican — él tiene acceso completo.

---

## ✅ Lo que Ernesto SÍ puede cambiar

- **Textos**: títulos, descripciones, nombres de proyectos, textos de botones, datos de contacto.
- **Imágenes y videos**: reemplazar fotos o clips en las carpetas `Joyería/`, `Personal/` y `Freelance/`.
- **Estilos ligeros**: colores, tipografías y tamaños **usando las variables** que ya existen en `assets/css/global.css` (ver sección "Colores y fuentes").

## ⛔ Lo que NO se debe tocar (protegido)

Si un cambio toca algo de esta lista, **detente y explica** en lugar de hacerlo:

- La **estructura / layout** de las páginas (el orden y la disposición de las secciones en el HTML).
- El archivo **`assets/js/global.js`** (el comportamiento interactivo: carruseles, menú, etc.).
- El **formulario de contacto** y su conexión con Netlify Forms en `contact.html`.
- La **organización de carpetas** y los nombres de archivos existentes.
- Archivos de **configuración** (`.gitignore`, `launch.json`, la carpeta `.claude/`, este `CLAUDE.md`).

Regla simple: **si tienes dudas de si algo es seguro, trátalo como protegido y pregunta.**

---

## 🗺️ Mapa del proyecto

| Archivo / Carpeta | Qué es |
|---|---|
| `index.html` | Página principal (portada, cuadrícula de trabajos, carruseles de joyería). |
| `contact.html` | Página de contacto (formulario conectado a Netlify Forms). |
| `projects/` | 6 páginas de proyectos individuales (Ozuna, Malilla, Natanael Cano, Beauty Creations, C&A, EyeBuild). |
| `assets/css/global.css` | **Colores y fuentes** de todo el sitio. Aquí se hacen los cambios de estilo. |
| `assets/js/global.js` | Comportamiento interactivo. ⛔ Protegido. |
| `Joyería/` `Personal/` `Freelance/` | Imágenes y videos del portafolio. |

El sitio está en **español** (`lang="es"`) y es un sitio web estático (solo HTML, CSS y JavaScript — sin frameworks).

---

## 🎨 Colores y fuentes (para estilos ligeros)

Los colores y fuentes están definidos como **variables** al inicio de `assets/css/global.css`. Cambiar una variable actualiza todo el sitio de forma consistente. Las principales:

- `--gold: #C9A96E;` — el dorado de acento.
- `--black: #080808;` — el fondo oscuro.
- `--white: #F0EDE8;` — el texto claro.
- `--font-display` — tipografía de títulos (Bebas Neue).
- `--font-body` — tipografía de textos (DM Sans).

Prefiere **cambiar la variable** en vez de escribir colores sueltos por el HTML.

---

## 🖥️ Cómo previsualizar los cambios

Este es un sitio estático. Para verlo funcionando, arranca el servidor de vista previa incluido (configurado en `.claude/launch.json`) y ábrelo en el navegador. Después de cualquier cambio, recarga la página para confirmar que se ve bien **antes de dar por terminado**. No le pidas a Ernesto que verifique manualmente: verifícalo tú y muéstrale el resultado.

---

## ↩️ Cómo deshacer un error (red de seguridad)

Si un cambio no gustó o algo se ve mal:

- Para **descartar cambios que aún no se han guardado** (aún sin `commit`), se puede volver a la última versión guardada.
- Explícale a Ernesto en palabras simples que **nada es permanente hasta que se guarda y se sube**, así que puede experimentar con tranquilidad.
- Si algo se rompió y no es obvio cómo arreglarlo, **la opción segura es avisarle a David** en vez de seguir haciendo cambios a ciegas.

---

## Ejemplos de cosas que Ernesto podría pedir

- "Cambia la descripción del proyecto de Ozuna."
- "Reemplaza la foto número 3 de la sección de joyería."
- "Haz el dorado un poco más claro."
- "Corrige este texto de la página de contacto."

En todos los casos: confirma qué quiere, hazlo con precisión, muéstrale el resultado y recuérdale cómo deshacer.
