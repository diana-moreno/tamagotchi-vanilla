import gameState, { handleUserAction } from "./gameState";

import { TICK_RATE } from "./constants";
import initButtons from "./buttons";

// not use setinterval

function tick() {
  console.log("tick", Date.now());
}

function init() {
  console.log("starting game");
  initButtons(handleUserAction);

  let newtTimeToTick = Date.now();

  function nextAnimationFrame() {
    const now = Date.now();

    if (newtTimeToTick <= now) {
      gameState.tick();
      newtTimeToTick = now + TICK_RATE;
    }
    requestAnimationFrame(nextAnimationFrame);
  }
  requestAnimationFrame(nextAnimationFrame); // first call
  // nextAnimationFrame()); // first call
}

init();
