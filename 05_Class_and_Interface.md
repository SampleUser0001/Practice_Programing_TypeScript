# 5章 クラスとインターフェース

- [5章 クラスとインターフェース](#5章-クラスとインターフェース)
  - [チェスのプログラムを作成する](#チェスのプログラムを作成する)
    - [src](#src)
    - [メモ](#メモ)
  - [super](#super)
  - [戻り値の型としてthisを使う](#戻り値の型としてthisを使う)
  - [interface](#interface)
    - [宣言のマージ](#宣言のマージ)
    - [implements](#implements)
  - [クラスの判定方法](#クラスの判定方法)
  - [クラスは値と型の両方を宣言する](#クラスは値と型の両方を宣言する)
  - [ポリモーフィズム](#ポリモーフィズム)
  - [ミックスイン](#ミックスイン)
    - [他の例](#他の例)
      - [参考](#参考)
    - [役割指向プログラミング](#役割指向プログラミング)
  - [デコレーター](#デコレーター)
  - [finalのシミュレート](#finalのシミュレート)
  - [デザインパターン](#デザインパターン)
    - [Factoryパターン](#factoryパターン)
    - [Builderパターン](#builderパターン)

## チェスのプログラムを作成する

### src

[./05_Class_and_Interface/chess_class_and_interface/src/index.ts](./05_Class_and_Interface/chess_class_and_interface/src/index.ts)

### メモ

- privateとprotectedはJavaと同じ。
- デフォルトはpublic。

## super

親クラスのメソッドを呼ぶ。  
プロパティは参照できない。

[./05_Class_and_Interface/useSuper/src/index.ts](./05_Class_and_Interface/useSuper/src/index.ts)

## 戻り値の型としてthisを使う

Setの実装

``` TypeScript
class Set {
  /**
   * 引数の値をプロパティに追加して、自分自身を返す。
   */
  add(value: unknown): Set {
    // 
  }
}
```

Setのサブクラスを作りたい場合

こうじゃなくて…

``` TypeScript
class SubSet {
  add(value: unknown): SubSet {
    // override
  }
}
```

こう書いていい。

``` TypeScript
class SubSet {
  add(value: unknown): this {
    // override
  }
}
```

Setクラスの使用例はこちら。  
[./05_Class_and_Interface/useThisByReturnType/src/index.ts](./05_Class_and_Interface/useThisByReturnType/src/index.ts)

## interface

TypeScriptにもinterfaceは有るが、交差型でも同じことができる。

[./05_Class_and_Interface/useInterface/src/index.ts](./05_Class_and_Interface/useInterface/src/index.ts)

### 宣言のマージ

[./05_Class_and_Interface/useInterface/src/index.ts](./05_Class_and_Interface/useInterface/src/index.ts)

interfaceと交差型の違いの一つ。
同じinterfaceを分割して宣言すると、マージされる。

### implements

Javaのinterface, implementsと同じに見える…

[./05_Class_and_Interface/useInterfaceImplements/src/index.ts](./05_Class_and_Interface/useInterfaceImplements/src/index.ts)

## クラスの判定方法

TypeScriptのクラスは、**クラス名ではなく、構造によって判定される。**（JavaScriptに変換される都合かな…？）

[./05_Class_and_Interface/classStructure/src/index.ts](./05_Class_and_Interface/classStructure/src/index.ts)

## クラスは値と型の両方を宣言する

??? よくわからん…

[./05_Class_and_Interface/StringDatabase/src/index.ts](./05_Class_and_Interface/StringDatabase/src/index.ts)

## ポリモーフィズム

Javaと同じに見えるが…よくわからん。

[./05_Class_and_Interface/chess_class_and_interface/src/index.ts](./05_Class_and_Interface/chess_class_and_interface/src/index.ts)

## ミックスイン

多重継承をシミュレートする。役割指向プログラミングをサポートする。

[./05_Class_and_Interface/useMixin/src/index.ts](./05_Class_and_Interface/useMixin/src/index.ts)

これも難しい…

クラス名が出力されない。多分バージョンの問題。  
[Github:TypeScript-issues-14099](https://github.com/microsoft/TypeScript/issues/14099)

### 他の例

[./others/restudy_mixin/src/index.ts](./others/restudy_mixin/src/index.ts)

#### 参考

- [TypeScript Deep Dive 日本語版:ミックスイン](https://typescript-jp.gitbook.io/deep-dive/type-system/mixins)

### 役割指向プログラミング

クラス名ではなく、パラメータや振る舞いに注目する。  
パラメータや振る舞いを別々に宣言して、多重継承させてクラスを作成する。

## デコレーター

TypeScriptの実験的な機能。  
うまく動いてくれないぞ？別の機会にやる。

[./05_Class_and_Interface/useDecorater/src/index.ts](./05_Class_and_Interface/useDecorater/src/index.ts)

[Qiita:TypeScriptによるデコレータの基礎と実践](https://qiita.com/taqm/items/4bfd26dfa1f9610128bc)

## finalのシミュレート

TypeScriptはfinal自体はサポートしていない。privateをうまく使う。

[./05_Class_and_Interface/likeFinal/src/index.ts](./05_Class_and_Interface/likeFinal/src/index.ts)

## デザインパターン

### Factoryパターン

[./05_Class_and_Interface/designPattern_FactoryPattern/src/index.ts](./05_Class_and_Interface/designPattern_FactoryPattern/src/index.ts)

### Builderパターン

[./05_Class_and_Interface/designPattern_BuilderPattern/src/index.ts](./05_Class_and_Interface/designPattern_BuilderPattern/src/index.ts)

