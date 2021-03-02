/**
 * チェス盤
 */
class Game {
  private pieces = Game.makePieces()

  /**
   * 駒を並べる
   */
  private static makePieces() {
    const pieces = [
      ...this.makeBigPieces('White'), 
      ...this.makePawns('White'),
      ...this.makeBigPieces('Black'),
      ...this.makePawns('Black')
    ]
    return pieces
  }

  /**
   * 動作確認用関数。
   * スプレッド記法による駒の初期化がうまく動いているか確認する。
   */
  public static printPieces(){
    console.log(Game.makePieces())
  }

  /**
   * 大ゴマを並べる
   * @param color 
   */
  private static makeBigPieces(color: PieceColor) {
    let rank:Rank
    if (color === 'White') {
      rank = 1
    } else {
      rank = 8
    }
    // TODO: 出来ればFileもインクリメントしたい
    return [
      new Rook(color, 'A' ,rank),
      new Knight(color, 'B' ,rank),
      new Bishop(color, 'C' ,rank),
      new Queen(color, 'D' ,rank),
      new King(color, 'E' ,rank),
      new Bishop(color, 'F' ,rank),
      new Knight(color, 'G' ,rank),
      new Rook(color, 'H' ,rank)
    ]
  }

  /**
   * ポーンを並べる
   * @param color 
   */
  private static makePawns(color: PieceColor){
    let rank:Rank
    if (color === 'White') {
      rank = 2
    } else {
      rank = 7
    }
    // TODO: 出来ればFileもインクリメントしたい
    return [
      new Pawn(color, 'A' ,rank),
      new Pawn(color, 'B' ,rank),
      new Pawn(color, 'C' ,rank),
      new Pawn(color, 'D' ,rank),
      new Pawn(color, 'E' ,rank),
      new Pawn(color, 'F' ,rank),
      new Pawn(color, 'G' ,rank),
      new Pawn(color, 'H' ,rank)
    ]
  }

}

/**
 * 駒の位置
 */
class Position {
  constructor(
    // 列
    private file: File,
    // 行
    private rank: Rank
    ) {}

    /**
     * 自分自身のインスタンスと、引数の値の距離を返す。
     * @param position 
     */
    distanceFrom(position: Position){
      return {
        rank: Math.abs(position.rank - this.rank),
        file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
      }
    }
}

/**
 * 駒自体。
 * 駒の位置と色を持つ。
 * このクラス自体は生成してほしくない。
 */
abstract class Piece {
  protected position: Position
  constructor(
    private readonly color: PieceColor,
    file: File,
    rank: Rank
  ) {
    this.position = new Position(file, rank)
  }

  moveTo(position: Position){
    this.position = position
  }
  /**
   * 駒が指定した引数の位置に移動できるか確認する。
   * 駒ごとに移動力が違うため、abstractにしておく。
   * @param position 移動できる場合true。
   */
  abstract canMoveTo(position: Position): boolean
}

class King extends Piece {
  /**
   * 周囲1マスなら動ける。
   * TODO:移動先に自駒がある場合のパターンは未実装。
   * @param position 
   */
  canMoveTo(position: Position){
    let distance = this.position.distanceFrom(position)
    return distance.rank < 2 && distance.file < 2
  }
}

class Queen extends Piece {
  /**
   * 縦横斜めに無限に動ける.
   * TODO:未実装。本の対象外。
   * @param position 
   */
  canMoveTo(position: Position){
    return true
  }
}
class Bishop extends Piece {
  /**
   * 斜めに無限に動ける.
   * TODO:未実装。本の対象外。
   * @param position 
   */
  canMoveTo(position: Position){
    return true
  }

}
class Knight extends Piece {
  /**
   * 桂馬とび.
   * TODO:未実装。本の対象外。
   * @param position 
   */
  canMoveTo(position: Position){
    return true
  }
}
class Rook extends Piece {
  /**
   * 縦横に無限に動ける。
   * TODO:未実装。本の対象外。
   * @param position 
   */
  canMoveTo(position: Position){
    return true
  }
}

class Pawn extends Piece {
  /**
   * 前に1マスだけ動ける。
   * 1. 動いていない駒は2マス進める。
   * 2．色によって「前」の概念が異なる。
   * TODO:未実装。本の対象外。
   * @param position 
   */
  canMoveTo(position: Position){
    return true
  }
}

// 駒の色
type PieceColor = 'Black' | 'White'
// 列
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
// 行
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 
// チェスは左下がA1。

// スプレッド記法がうまく動いているか確認する。
// Game.printPieces()
