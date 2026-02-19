import { Physics } from './Physics.js';

export class GameEngine {
  constructor(world, aiController, options = {}) {
    this.world = world;
    this.aiController = aiController;
    this.physics = new Physics(options.friction ?? 0.9);
    this.lastTime = null;
    this.running = false;
    this.onUpdate = null;
  }

  start() {
    this.running = true;
    this.lastTime = performance.now();

    const loop = (time) => {
      if (!this.running) return;

      const dt = (time - this.lastTime) / 1000;
      this.lastTime = time;

      this.aiController?.update(dt);
      this.physics.updateWorld(this.world, dt);

      this.onUpdate?.(this.world, dt, this);

      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);
  }

  stop() {
    this.running = false;
  }

  setUpdateCallback(fn) {
    this.onUpdate = fn;
  }
}
