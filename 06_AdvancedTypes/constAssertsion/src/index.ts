let a = {x:3}               // [x: number]
let b: {X:3}                // {x: 3}
let c = {x:3} as const      // {readonly x: 3}

let d = [1, {x:2}]          // (number | {x: number})[]
let e = [1, {x:2}] as const // readonly [1, {readonly x:2}]
