# 8章 非同期プログラミングと並行、並列処理

- [8章 非同期プログラミングと並行、並列処理](#8章-非同期プログラミングと並行並列処理)
  - [イベントループ](#イベントループ)
  - [コールバック](#コールバック)
  - [Promiseを使う](#promiseを使う)
  - [asyncとawait](#asyncとawait)
  - [非同期プログラミング](#非同期プログラミング)
    - [イベントエミッター](#イベントエミッター)
      - [参考](#参考)

## イベントループ

[08_Asynchronous_programming_and_parallel_processing/eventloop/src/index.ts](08_Asynchronous_programming_and_parallel_processing/eventloop/src/index.ts)

## コールバック

[08_Asynchronous_programming_and_parallel_processing/callback/src/index.ts](08_Asynchronous_programming_and_parallel_processing/callback/src/index.ts)

## Promiseを使う

[08_Asynchronous_programming_and_parallel_processing/usePromise/src/index.ts](08_Asynchronous_programming_and_parallel_processing/usePromise/src/index.ts)

引用。

``` txt
最新のJavaScriptプラットフォームの多くは、プロミスを標準でサポートしています。この節では、練習として、部分的な独自のPromiseを実装しますが、現実では、代わりに組み込みの実装または既成の実装を使用すべきです。
```

## asyncとawait

JavaScriptが用意しているPromiseの実装。

[08_Asynchronous_programming_and_parallel_processing/asyncAndAwait/src/index.ts](08_Asynchronous_programming_and_parallel_processing/asyncAndAwait/src/index.ts)

引用。

``` txt
awaitは、.thenに対する言語レベルのシンタックスシュガー（人間にとって読み書きしやすいように簡略化された構文）と考えてください。awaitを使ってPromiseを待機する場合は、asyncブロックの中でそれを行う必要があります。また、.catchの代わりに、通常のtry/catchブロックの中にawaitをラップすることもできます。
```

await = then, async内で使用する必要がある。

## 非同期プログラミング

### イベントエミッター

わからんし、うまく動かん・・・

[08_Asynchronous_programming_and_parallel_processing/eventEmitter/src/index.ts](08_Asynchronous_programming_and_parallel_processing/eventEmitter/src/index.ts)

#### 参考

- [Typesafe Event Emitter:TypeScript Deep Dive 日本語版](https://typescript-jp.gitbook.io/deep-dive/main-1/typed-event)