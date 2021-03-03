
interface Animal {
  readonly name: string
  eat(food: string): void
  sleep(hours: number):void
}

// Felineはネコ科の動物を指すらしい。
interface Feline {
  meow(): void
}

class Cat implements Animal, Feline {
  name = 'Mochimaru'
  eat(food: string) {
    console.log('Ate some', food, 'Mmm!')
  }
  sleep(hours: number) {
    console.log('Slept for', hours, 'hours')
  }
  meow() {
    console.log('Meow')
  }
}
