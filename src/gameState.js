const gameState = {
  current: "INIT",
  clock: 1,
  tick() {
    console.log("clock", this.clock);
    this.clock++;
    return this.clock;
  },
};
// en diccionarios se accede con this

export default gameState;
