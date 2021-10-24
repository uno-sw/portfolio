---
title: Portfolio
summary: 本ポートフォリオサイト
github_url: https://github.com/uno-sw/portfolio
tech_stack: [Markdown, TypeScript, React, Next.js, Windi CSS, Vercel]
production_time:
  prefix: 約
  number: 1
  unit: 週間
image:
  src: /projects/portfolio/top.png
  width: 520
  height: 300
---
就職活動にあたりスキルPRのために作成したポートフォリオです。JAMstackアーキテクチャで構築しています。レスポンシブデザインになっています。

コンテンツ管理は、Headless CMSを使うという選択肢もありますが、今回はシンプルさを優先してファイルシステム上のMarkdownファイルで行なっています。

SSGフレームワークはNext.jsの他にGatsby・Hugo・Jekyllなどがありますが、最も使い慣れており、画像最適化機能もある[Next.js](https://nextjs.org/)を使用しています。

UIフレームワークとしては、導入の容易さやスタイルの柔軟性を重視してTailwind CSSベースのUIフレームワークである[Windi CSS](https://windicss.org/)を使用しています。

最終的なデプロイ先としては、Next.jsとの統合性を重視して[Vercel](https://vercel.com/)を選択しました。

Next.jsでファイルシステムベースでSSGを行うにあたっては、ファイルの読み込み処理を自分で書く必要がありました。しかし、それはAPIの扱いにおいてフレキシビリティがあるということで、今後CMSに移行する可能性も考えると利点だと思います。

デザインについては基本的なカラーをモノトーンで統一したり、ホワイトスペースを多めにとったりと、シンプルで見やすいデザインを心がけました。
