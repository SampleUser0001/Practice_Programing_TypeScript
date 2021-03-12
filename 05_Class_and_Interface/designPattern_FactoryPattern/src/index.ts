type Shoe = {
  purpose: string
}
class BalletFlat implements Shoe {
  purpose = 'dancing'
}
class Boot implements Shoe {
  purpose = 'woodcutting'
}
class Sneaker implements Shoe {
  purpose = 'walking'
}

// ShoeのFactory.
let Shoe = {
  create(type: 'balletFlat' | 'boot' | 'sneaker' ): Shoe {
    switch (type) {
      case 'balletFlat': return new BalletFlat
      case 'boot': return new Boot
      case 'sneaker': return new Sneaker
    }
  }
}

// Factoryを使う
console.log(Shoe.create('boot'));
