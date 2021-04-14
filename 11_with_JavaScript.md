# 11章 JavaScriptとの相互運用

ちょっとずつ導入しましょう…

- [11章 JavaScriptとの相互運用](#11章-javascriptとの相互運用)
  - [型宣言](#型宣言)
    - [アンビエント変数宣言](#アンビエント変数宣言)
  - [JavaScriptからTypeScriptへの漸進的な移行](#javascriptからtypescriptへの漸進的な移行)
  - [JavaScriptの型の探索](#javascriptの型の探索)
    - [型が同一プロジェクトに存在する場合](#型が同一プロジェクトに存在する場合)
  - [サードパーティーのJavaScriptモジュールを使う](#サードパーティーのjavascriptモジュールを使う)

## 型宣言

型「だけ」を導入できる。  
*.d.tsファイル

### アンビエント変数宣言

別の機会に実施する。

## JavaScriptからTypeScriptへの漸進的な移行

別の機会に実施する。  
Node.jsのプロジェクトを移行するときとかに実施。

## JavaScriptの型の探索

### 型が同一プロジェクトに存在する場合

コンパイルすると、tsファイルから*.d.tsファイルと*.jsファイルが生成される。この*.d.tsファイルをimportする。方法はjsと同じ。

## サードパーティーのJavaScriptモジュールを使う

node_modules配下に導入されるもの達。

別の機会に実施する。
