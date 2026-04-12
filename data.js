/**
 * ============================================================
 *  サイトデータ設定ファイル
 *  （楽天 + Amazon 両対応・自作カード方式）
 * ============================================================
 *
 * ▼ 商品の追加方法
 *
 *   1. 楽天アフィリエイトで楽天アフィリエイトURLを取得
 *      (https://affiliate.rakuten.co.jp/)
 *      → 楽天会員なら審査なしで即利用可能
 *
 *   2. （審査通過後）Amazonアソシエイトで商品リンクを取得
 *      (https://affiliate.amazon.co.jp/)
 *      → Amazonはまだ未承認なら amazonUrl は null のままでOK
 *
 *   3. 商品画像URLを取得
 *      ◎ 楽天の商品ページから画像URLをコピー
 *        （楽天商品ページを右クリック→画像アドレスをコピー）
 *      ◎ または images/ フォルダに画像を置いてパスを指定
 *
 *   4. 下の products 配列に追加：
 *
 *   {
 *     number:      2,
 *     title:       "商品名をここに入力",
 *     description: "短い説明文（省略可）",
 *     image:       "画像URL または images/xxx.jpg",
 *     rakutenUrl:  "https://hb.afl.rakuten.co.jp/...",
 *     amazonUrl:   null  // Amazon未承認時は null、承認後にURLを追加
 *   },
 *
 *   ※ amazonUrl を null または省略すると、楽天ボタンのみ表示されます
 *   ※ rakutenUrl を null にすると、Amazonボタンのみ表示されます
 *   ※ 両方 null にすると「リンク準備中」と表示されます
 *   ※ 上にある商品ほど先に表示されます
 *
 * ▼ プロフィール画像の設定
 *   images フォルダを作成して画像を入れ、
 *   profile.image を "images/profile.jpg" に変更してください
 *
 * ============================================================
 */

var SITE_DATA = {

  /* ===== プロフィール ===== */
  profile: {
    name:  "ハナのおすすめ",
    image: "images/profile.png",
    bio:   null
  },

  /* ===== お知らせバナー ===== */
  notice: {
    text:            "※このページには楽天・Amazonアフィリエイトリンクが含まれています。",
    backgroundColor: "#343434",
    textColor:       "#e8f9fc"
  },

  /* ===== フッターの表記（nullで非表示。上部バナーで開示済み） ===== */
  disclosure: null,

  /* ===== 商品リスト ===== */
  products: [

    {
      number:      2,
      title:       "Scrub Daddy スクラブダディ スポンジ",
      description: null,
      image:       "https://thumbnail.image.rakuten.co.jp/@0_mall/scrubdaddy/cabinet/12631742/imgrc0113129781.jpg?_ex=400x400",
      rakutenUrl:  "https://a.r10.to/hkl0On",
      amazonUrl:   "https://amzn.to/3Qil3Rb"
    },

    {
      number:      1,
      title:       "Fanttik G9 Nano 電動スピンスクラバー",
      description: null,
      image:       "https://thumbnail.image.rakuten.co.jp/@0_mall/drivetouring/cabinet/12668278/12668301/g9_nano_main.jpg?_ex=400x400",
      rakutenUrl:  "https://a.r10.to/hPdmB0",
      amazonUrl:   "https://amzn.to/3PTdq3H"
    }

    // ▼ 新しい商品を追加する場合は、上の } の後ろに「,」を付けて追加 ▼
    //
    // ,{
    //   number:      2,
    //   title:       "新しい商品名",
    //   description: "短い説明文",
    //   image:       "https://thumbnail.image.rakuten.co.jp/...",
    //   rakutenUrl:  "https://hb.afl.rakuten.co.jp/...",
    //   amazonUrl:   "https://www.amazon.co.jp/..."
    // }

  ]

};
