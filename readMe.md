# 🎨 Explorador de Llegats Artístics

## I si...?™️

Una aplicació interactiva que utilitza intel·ligència artificial per imaginar i visualitzar les possibles creacions futures d’artistes icònics de la història de l’art.

(/src/exploraLeg.png)(https://hatchcanvas.com/public/proj_cVYUEOp3Z3Z0dweMqSEQM/shape:Juc3bwwF84F1VfWFZv2jQ) 🚀 Prova l’Aplicació

### ✨ **🎨 [UTILITZA L’APLICACIÓ EN LÍNIA](https://hatchcanvas.com/public/proj_cVYUEOp3Z3Z0dweMqSEQM/shape:Juc3bwwF84F1VfWFZv2jQ)**

---

![exploraLeg](/src/exploraLeg.png)

**Explora ara mateix!** Fes clic a l’enllaç de dalt per accedir directament a l’aplicació web sense necessitat d’instal·lació.

### 📖 **📋 VEURE DOCUMENTACIÓ EN LÍNIA**

**Documentació completa** – Accedeix a aquest README.md en línia amb tota la informació del projecte.

### 🎯 Accés Ràpid

-   **No requereix instal·lació** – Funciona directament al teu navegador
-   **Experiència completa** – Totes les funcionalitats disponibles
-   **Interfície cyberpunk** – Disseny futurista i immersiu
-   **Generació d’art IA** – Crea obres instantàniament

----------

## 🌟 Característiques

### 🎯 Funcionalitats Principals

-   **Exploració d’Artistes**: Base de dades amb 5 artistes icònics preconfigurats
-   **Generació d’Art IA**: Creació d’imatges basades en projeccions artístiques històricament informades
-   **Cerca Personalitzada**: Capacitat per explorar qualsevol artista històric
-   **Galeria Interactiva**: Visualització immersiva de les obres generades
-   **Vista Modal**: Ampliació d’imatges amb informació detallada
-   **Descàrrega d’Imatges**: Exportació de les obres generades

### 🎨 Artistes Inclosos

-   **Vincent van Gogh** (1853-1890) – Postimpressionisme
-   **Pablo Picasso** (1881-1973) – Cubisme
-   **Frida Kahlo** (1907-1954) – Surrealisme mexicà
-   **Salvador Dalí** (1904-1989) – Surrealisme
-   **Leonardo da Vinci** (1452-1519) – Renaixement

### 🎭 Característiques Tècniques

-   **Interfície Cyberpunk**: Disseny futurista amb efectes de neó i glassmorphism
-   **Projeccions Històricament Informades**: Cada obra es basa en recerca històrica real
-   **Generació Seqüencial**: Procés optimitzat per evitar conflictes en la generació
-   **Estat Persistent**: Les imatges generades es mantenen entre sessions
-   **Disseny Responsive**: Optimitzat per a diferents mides de pantalla

## 🚀 Instal·lació

### Prerequisits

-   Node.js (v16 o superior)
-   npm o yarn
-   Accés a una API de generació d’imatges

### Passos d’Instal·lació

1.  **Clona el repositori**

```bash
git clone https://github.com/tu-usuario/explorador-legados-artisticos.git
cd explorador-legados-artisticos

```

2.  **Instal·la dependències**

```bash
npm install
# o
yarn install

```

3.  **Configura variables d’entorn**

```bash
cp .env.example .env
# Edita .env amb les teves claus d’API

```

4.  **Executa l’aplicació**

```bash
npm start
# o
yarn start

```

## 📖 Ús

### 🌐 Demo Online

**🎨 Accedeix a l’Aplicació Web**

**📋 Consulta la Documentació Online**

L’aplicació està disponible en línia i llesta per utilitzar. Simplement:

1.  **Fes clic a l’enllaç de l’aplicació** per accedir a la demo
2.  **Fes clic a l’enllaç de documentació** per veure aquest README en línia
3.  **Explora els artistes** des de la interfície cyberpunk
4.  **Genera art IA** inspirat pels mestres històrics
5.  **Descarrega les imatges** creades

### Exploració Bàsica

1.  **Selecciona Artista**: Tria un dels 5 artistes preconfigurats
2.  **Cerca Personalitzada**: Introdueix el nom de qualsevol artista històric
3.  **Visualització**: Explora les 3 obres projectades per a cada artista
4.  **Interacció**: Fes clic sobre les imatges per veure’n detalls ampliats

### Informació Inclosa

-   **Context Històric**: Tècniques, temes i evolució artística
-   **Projeccions Versemblants**: Obres basades en anàlisi històrica
-   **Detalls Tècnics**: Mitjans, anys hipotètics i descripcions
-   **Fonaments Acadèmics**: Referències a informació històrica verificada

## 🏗️ Arquitectura

### Components Principals

```
ExploradorLlegatsArtistics/
├── Estat de Cerca
├── Base de Dades d’Artistes
├── Generador d’Imatges
├── Galeria Interactiva
└── Sistema de Modals

```

### Flux de Dades

```
Usuari → Cerca → Base de Dades → Generació IA → Visualització

```

### Estructura de Dades

```javascript
const artistsDatabase = {
  'Nom de l’Artista': {
    bio: 'Informació biogràfica',
    style: 'Estil artístic',
    historicalContext: {
      techniques: ['Tècnica 1', 'Tècnica 2'],
      themes: ['Tema 1', 'Tema 2'],
      colors: ['Color 1', 'Color 2'],
      evolution: 'Evolució artística',
      interests: ['Interès 1', 'Interès 2']
    },
    futureWorks: [
      {
        title: 'Títol de l’obra',
        description: 'Descripció detallada',
        era: 'Any projectat',
        medium: 'Tècnica artística'
      }
    ]
  }
}
```

## 🎨 Disseny Visual

### Paleta de Colors

-   **Primaris**: Cian (#00FFFF), Rosa (#FF00FF), Verd (#00FF00)
-   **Secundaris**: Blau profund (#1E40AF), Porpra (#7C3AED)
-   **Neutres**: Slate (#0F172A), Gris (#374151)

### Efectes Visuals

-   **Glassmorphism**: Panells amb desenfocament i transparència
-   **Animacions**: Efectes de polsació i transicions suaus
-   **Tipografia**: Gradients multicolor i efectes de resplendor
-   **Interactivitat**: Hover effects i transformacions 3D

## 🔧 Configuració

### Variables d’Entorn

```env
REACT_APP_API_KEY=la_teva_clau_api
REACT_APP_IMAGE_ENDPOINT=https://api.exemple.com/generate
REACT_APP_MAX_GENERATIONS=10

```

### Personalització

```javascript
// Afegir nous artistes
const nouArtista = {
  bio: 'Informació biogràfica',
  style: 'Estil característic',
  historicalContext: { /* context */ },
  futureWorks: [ /* obres projectades */ ]
};

```

## 📊 Mètriques i Analítiques

### Característiques Mesurables

-   Artistes explorats
-   Imatges generades
-   Descàrregues realitzades
-   Temps de sessió
-   Interaccions per obra

### Optimitzacions

-   Generació seqüencial per evitar conflictes
-   Caché d’imatges generades
-   Lazy loading de contingut
-   Compressió d’imatges

## 🤝 Contribució

### Com Contribuir

1.  Fes un fork del repositori
2.  Crea una branca per a la teva feature (`git checkout -b feature/nova-funcionalitat`)
3.  Commit dels teus canvis (`git commit -m 'Afegir nova funcionalitat'`)
4.  Fes push a la branca (`git push origin feature/nova-funcionalitat`)
5.  Obre un Pull Request

### Àrees de Contribució

-   **Nous Artistes**: Afegir més artistes a la base de dades
-   **Millores UI/UX**: Refinament de la interfície
-   **Optimitzacions**: Millores de rendiment
-   **Documentació**: Ampliació de la documentació
-   **Testing**: Implementació de proves unitàries

## 📝 Documentació Addicional

### Context Històric

Cada projecció artística es basa en:

-   Recerca històrica verificada
-   Anàlisi d’evolució artística
-   Context cultural i temporal
-   Tècniques i materials característics

### Metodologia

1.  **Recerca**: Anàlisi d’obra històrica
2.  **Projecció**: Extrapolació lògica cap al futur
3.  **Generació**: Creació de prompts detallats
4.  **Validació**: Coherència amb l’estil artístic

## 🔮 Full de Ruta

### Versió 2.0

-   Integració amb més models d’IA
-   Sistema de favorits
-   Compartir a xarxes socials
-   Mode fosc/clar
-   Multillengua

### Versió 3.0

-   Col·laboració en temps real
-   Galeria comunitària
-   Anàlisi d’estil avançat
-   Realitat augmentada
-   Blockchain per a autenticitat

## 🐛 Problemes Coneguts

### Limitacions Actuals

-   Dependència d’APIs externes per a generació
-   Temps de generació variable
-   Limitacions de context window en prompts
-   Requeriments d’amplada de banda

### Solucions en Desenvolupament

-   Caché intel·ligent
-   Optimització de prompts
-   Fallbacks per a APIs
-   Compressió adaptativa

## 📜 Llicència

Aquest projecte està sota la llicència MIT – consulta l’arxiu LICENSE per a més detalls.

## 🙏 Agraïments

-   **Historiadors de l’Art**: Per la recerca acadèmica que fonamenta les projeccions
-   **Comunitat Open Source**: Per les eines i llibreries utilitzades
-   **Artistes Històrics**: Pel seu llegat impereceder que inspira aquesta exploració
-   **Desenvolupadors IA**: Per fer possible la generació d’art sintètic

## 📞 Contacte

-   **Demo Online**: 🎨 Explorador de Llegats Artístics
-   **Documentació**: 📋 README.md Online
-   **Desenvolupador**: Xesco Tejedor
-   **Projecte**: GitHub Repository

----------

_"L’art no reprodueix allò visible, sinó que fa visible allò invisible"_ – Paul Klee

**Explorador de Llegats Artístics** – On la història de l’art es troba amb la imaginació del futur. 🎨✨
