#!/bin/bash

npm init -y
npm install --save-dev typescript tslint @types/node

echo '{
  "compilerOptions": {
    "lib": ["es2015"],
    "module": "commonjs",
    "outDir": "dist",
    "sourceMap": true,
    "strict": true,
    "target": "es2015"
  },
  "include": [
    "src"
  ]
}
' > tsconfig.json

echo '{
  "defaultSeverity": "error",
  "extends": [
    "tslint:recommended"
  ],
  "rules": {
    "semicolon": false,
    "trailing-comma": false
  }
}' > tslint.json

mkdir src
touch src/index.ts

# package.jsonに書く
    "build": "npm run build:ts",
    "build:ts": "tsc ",
    "start": "npm run build && node ./dist/index.js",
