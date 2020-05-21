const gameState = {
  current: "INIT",
  clock: 1,
  tick() {
    console.log("clock", this.clock);
    this.clock++;
    return this.clock;
  },
  startGame() {
    console.log("hatching");
    this.current = "HATCHING";
    this.wakeTime = this.clock + 3;
  },
  wake() {
    console.log("awoken");
    this.current = "IDLING";
    this.wakeTime = -1;
  },
  handleUserAction(icon) {
    if (
      ["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(this.current)
    ) {
      // do nothing
      return;
    }
    if (this.current === "INIT" || this.current === "DEAD") {
      this.startGame();
      return;
    }

    switch (icon) {
      case "weather":
        this.changeWeather();
        break;
      case "poop":
        this.cleanUpPoop();
        break;
      case "fish":
        this.feed();
        break;
    }
  },
  changeWeather() {
    console.log("change weather");
  },
  cheanUppoop() {
    console.log("clean up poop");
  },
  feed() {
    console.log("feed");
  },
};

// en diccionarios se accede con this

export const handleUserAction = handleUserAction.bind(gameState);
export default gameState;
