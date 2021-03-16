class Animal {}
class Bird extends Animal {
  chirp() {}
}
class Crow extends Bird {
  caw() {}
}

function chirp(bird: Bird) {
  bird.chirp()
  return bird
}

// chirp(new Animal())
chirp(new Bird())
chirp(new Crow())


function clone(f: (b:Bird) => Bird):void {
  // 省略
}
clone(chirp)

function birdToBird(b: Bird): Bird{
  return b
}
clone(birdToBird)

function birdToCrow(b: Bird): Crow {
  return new Crow()
}
clone(birdToCrow)