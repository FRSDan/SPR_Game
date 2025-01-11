# Shattered Paradox: Rebirth

## Project Overview
*Shattered Paradox: Rebirth* is an ambitious real-time strategy (RTS) and role-playing game (RPG) hybrid. Set in a dystopian universe, players navigate the intricate politics and conflicts of five unique factions, each with its own philosophies, goals, and playstyles. The game emphasizes resource scarcity, strategic decision-making, and a richly woven narrative that unfolds across multiple timelines.

---

## Current File Structure
```
Shattered-Paradox-Rebirth/
├── assets/
│   ├── images/
│   │   ├── main-menu-bg.jpg
│   │   ├── faction-selection-bg.jpg
│   │   ├── flesh-render-studios.jpg
│   ├── audio/
│   └── video/
├── scripts/
│   ├── core/
│   │   ├── SPR_Core.ts
│   │   ├── SPR_MainMenu.ts
│   │   ├── SPR_SplashScreen.ts
│   │   ├── SPR_FactionSelection.ts
│   └── modules/
│       ├── SPR_Accolades.ts
│       ├── SPR_Buildings.ts
│       ├── SPR_Missions.ts
│       ├── SPR_Propaganda.ts
│       ├── SPR_Resources.ts
│       ├── SPR_Units.ts
│       ├── SPR_Upgrades.ts
│       └── utils/
│           ├── SPR_Module_Exporter.ts
│           ├── SPR_Core_Exporter.ts
│           ├── SPR_Utils_Exporter.ts
├── styles/
│   ├── SPR_Dark_SciFi.css
│   ├── SPR_PostApoc_Theme.css
│   └── styles.css
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

---

## Current Plan for the Game
1. **Core Mechanics**:
   - Establish the core gameplay loop, which includes resource management, faction building, and narrative progression.
   - Emphasize the scarcity of resources to enhance strategic gameplay.

2. **Narrative Development**:
   - Fully flesh out the five factions, including their philosophies, histories, and relationships.

3. **UI and Design**:
   - Design and implement a dark sci-fi aesthetic for menus and user interfaces.
   - Create unique visual elements for each faction to distinguish their style and gameplay.

4. **Music and Audio**:
   - Curate a soundtrack inspired by Kevin MacLeod and Frank Klepacki.
   - Incorporate dynamic audio that reacts to in-game events.

---

## Current Challenges
- **Music Composition**:
  Creating unique, high-quality tracks to match the desired theme is proving challenging due to a lack of in-house music production expertise.

- **Code Integration**:
  Ensuring seamless imports using barrel files while avoiding cyclic dependencies is a persistent hurdle.

- **Balancing Resource Scarcity**:
  Developing a system that maintains resource scarcity without frustrating players requires careful tuning.

- **Faction Dynamics**:
  Maintaining continuity across the faction timelines and narratives while allowing player-driven changes to the world.

---

## How to Compile and Run the Code

### Prerequisites
1. [Node.js](https://nodejs.org/) (Latest LTS version recommended)
2. [TypeScript](https://www.typescriptlang.org/) (Version 5.7.2 or later)
3. A modern web browser (e.g., Chrome, Firefox, or Edge)
4. A code editor (e.g., [Visual Studio Code](https://code.visualstudio.com/))

### Step-by-Step Guide

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/Shattered-Paradox-Rebirth.git
   cd Shattered-Paradox-Rebirth
   ```

2. **Install Dependencies**:
   Ensure you are in the project root directory and run:
   ```bash
   npm install
   ```

3. **Compile TypeScript Code**:
   Use the TypeScript compiler to transpile the `.ts` files into `.js` files:
   ```bash
   npx tsc
   ```

4. **Set Up a Localhost Environment**:
   Use a lightweight development server (e.g., `http-server` or `live-server`):
   ```bash
   npx http-server
   ```
   Alternatively, use the built-in Live Server extension in Visual Studio Code.

5. **Access the Game**:
   Open your browser and navigate to `http://localhost:8080` (or the port provided by your development server).

6. **Test Functionality**:
   Ensure the splash screen transitions smoothly to the main menu and that navigation to other menus works as expected.

---

## Contributing
Contributions are welcome! Please create a fork of the repository, make your changes, and submit a pull request. For significant changes, open an issue to discuss your ideas.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

