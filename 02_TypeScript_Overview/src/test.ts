import { hasUncaughtExceptionCaptureCallback } from "process"

let a = 1+2
let b = a+1

let c = {
    apple: a,
    banana: b
}

let d = c.apple * 4
