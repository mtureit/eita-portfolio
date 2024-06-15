# eita-portfolio

# branch 名の統一
-   master ブランチ
    -   安定ブランチ，本番用ブランチ
-   develop ブランチ
    -   開発用ブランチ，開発段階での安定ブランチ，これを公開するときに安定ブランチにマージ
-   feat/[NAME]/[ISUEE_NUM]-[TITLE]
    -   機能の追加や変更などを行うブランチ，develop ブランチから派生
    -   ex) feat/dodo/1-create-view-env
-   fix/[NAME]/[ISUEE_NUM]-[TITLE]
    -   バグの修正などを行うブランチ，develop ブランチから派生
    -   ex) fix/dodo/2-fix-view-env
# コミットの命名規則
-   コミットメッセージは issue 番号を載せる
-   コミットメッセージは行った開発を端的にわかりやすく書く（長すぎないように注意する）
-   コミットメッセージラベルを付ける
    -   [feat] file or directory の追加
    -   [fix] file or directory のバグや軽微な修正
-   ex)
    -   `git commit -m "[feat] model group (#1)"`
    -   `git commit -m "[fix] login page (#2)"`
#   参考サイト
- Gitコマンド一覧：https://qiita.com/fukumone/items/73e1a9a62c5e4454263b
