---
title: Uno Catalog
summary: サイト横断的欲しいもの管理
github_url: https://github.com/uno-sw/uno_catalog_pf
tech_stack: [PHP, Laravel, TypeScript, React, Material UI, Heroku]
production_time:
  prefix: 約
  number: 3
  unit: か月
image:
  src: /projects/uno-catalog/top.png
  width: 520
  height: 300
---
多くのECサイトでは「ウィッシュリスト (欲しいものリスト)」の機能が用意されていますが、ECサイトに関係なく製品情報を一つの場所で管理したいという自分自身のニーズがあり、開発しました。

現在、製品情報の登録 (製品名/価格/タグ/メモ/製品サイトへのリンク)・製品一覧 (ソート可能)・タグによる絞り込みの機能があります。

REST APIサーバとしてPHP (Laravel)を使用しています。必要に応じてRequest・Policy・API Resourceなどの機能を活用しています。認証機能にはLaravel Sanctumを使用しています。また、各エンドポイントについて自動テストを書いています。

フロントエンドには、開発初期段階ではVue.jsを使用していました。そこからTypeScriptの導入を検討したのですが、Vue 2の段階ではTypeScriptのサポートが十分でなく、またVue 3は利用していたBootstrapVueをはじめ多くのUIフレームワークが対応していないという問題があったため、思い切ってReactへのリプレースを行いました。状態管理にReduxは使用せず、複数コンポーネントで参照する情報についてはHooks API (Context) で管理しています。開発時点ではあまり知識がなく選択肢にありませんでしたが、現時点ではreact-queryやSWRなど、APIレスポンスのキャッシュを目的としたライブラリを使用した方が適切だと考えています。

最終的なデプロイ先としては、コストがかからなくデプロイも簡単にできることからHerokuを選択しました。RDBMSとしてはHerokuが推奨しているPostgreSQLを使用しています。またセッションの管理にRedisを使用しています。Redisでのセッション管理は、Laravelのサポートにより簡単な設定だけで利用できました。

開発期間の内訳としては、APIとVue.jsの段階のフロントエンドの開発に約2か月、そこからReactへのリプレースや機能の追加などで約1か月です。

改善案や追加機能案としては、先にあげたAPIレスポンスのキャッシュ、全文検索、外部リンク設定時にタイトルとスクリーンショットを自動的に取得する、などが考えられます。さらに発展的な案としては、AIを用いて、製品ページのURLを貼り付けるだけで商品名や価格などの情報を認識して取得するということも考えています。