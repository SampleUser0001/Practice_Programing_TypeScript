class Zebra {
  trot() {
    console.log("Zebura")
  }
}

class Poodle {
  trot() {
    console.log("Poodle")
  }
}

function ambleAround(animal: Zebra){
  animal.trot()
}

ambleAround(new Zebra())
ambleAround(new Poodle())
