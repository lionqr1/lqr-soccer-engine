md
# ⚽ Soccer Engine (JavaScript)

A lightweight, modular soccer game engine designed for **2D or 3D games**.  
Perfect for HTML Canvas, Three.js, Babylon.js, or any custom renderer.

This engine handles the **logic**, not the graphics — you plug it into your own renderer.

---

## 🚀 How to Use This Engine in Your Own Game

### Option 1 — Import directly from GitHub

```js
import {
  GameEngine,
  World,
  Ball,
  Player,
  Team,
  AIController
} from "https://raw.githubusercontent.com/YOUR_USERNAME/soccer-engine/main/src/index.js";
Replace YOUR_USERNAME with your GitHub username.

Option 2 — Clone the repo
bash
git clone https://github.com/YOUR_USERNAME/soccer-engine
Then:

js
import {
  GameEngine,
  World,
  Ball,
  Player,
  Team,
  AIController
} from "./soccer-engine/src/index.js";
🧪 Quick Example
js
const world = new World(105, 68);
const ball = new Ball("ball", 52.5, 34);
world.setBall(ball);

const teamA = new Team("A");
teamA.addPlayer(new Player("A1", 20, 20, "A"));
teamA.addPlayer(new Player("A2", 20, 40, "A"));

const teamB = new Team("B");
teamB.addPlayer(new Player("B1", 85, 20, "B"));
teamB.addPlayer(new Player("B2", 85, 40, "B"));

world.addTeam(teamA);
world.addTeam(teamB);

const ai = new AIController(world);
const engine = new GameEngine(world, ai);

engine.setUpdateCallback((world, dt) => {
  // Update your canvas or 3D scene here
});

engine.start();
