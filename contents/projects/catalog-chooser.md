---
title: Catalog Chooser
summary: 複数の選択肢から消去法で選ぶ
github_url: https://github.com/uno-sw/catalog_chooser
tech_stack: [Dart, Flutter]
production_time:
  prefix: 約
  number: 1
  unit: か月
image:
  src: /projects/catalog-chooser/top.jpg
  width: 360
  height: 640
external_video:
  width: 560
  height: 315
  src: https://www.youtube.com/embed/5iQF4InJOic
---
ごく個人的なユースケースにはなりますが、複数の選択肢から一つを選びたいときに、ランダムに一つ選んで評価し、それがOKなら決定・NGなら他の項目を選択……といった選び方をすることがよくあったので、それを助けるアプリとして開発しました。

Flutterで開発し、Android向けにビルドしました。Flutterを使用しているためその他iOS・Web・macOS向けにもビルドできます。

選択肢の数を入力するとランダムに項目を選び、その候補が最初から数えて何番目か、最後から数えて何番目か、前の候補から(前後に)数えて何番目かという情報を表示します。それらの情報は数の少ない順に大きいサイズで表示されるため、例えば番号の振られていない選択肢から選ぶ場合でも項目を探しやすくなっています。左にスワイプしていくことで次の候補が表示されます。
