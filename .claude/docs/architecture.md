# アーキテクチャ概要

Next.js 15のApp Routerパターンを使用したフルスタックGraphQLアプリケーションです。

## 主要技術スタック

- **フロントエンド**: Next.js 15（React 19、TypeScript、Tailwind CSS）
- **バックエンド**: Next.js API routesと統合されたApollo Server
- **データベース**: PostgreSQL（Prisma ORM使用）
- **UI**: shadcn/uiコンポーネント（Radix UIプリミティブ）
- **フォーム**: React Hook Formとの統合
- **GraphQL**: スキーマファーストアプローチとコード生成

## 主要アーキテクチャパターン

### Container/Presentationalパターン

アプリケーションは関心の分離を明確にするContainer/Presentationalパターンを採用：

- `_containers/` ディレクトリにデータフェッチを担当するContainerコンポーネントを配置
- `_components/` ディレクトリに表示ロジックを担当するPresentationalコンポーネントを配置  
- Containerコンポーネントは GraphQL クエリの実行とデータの取得に特化
- Presentationalコンポーネントは props で受け取ったデータの表示とUIロジックに特化
- page.tsx は該当するContainerコンポーネントをimportするだけの簡潔な構成

### GraphQL統合とデータフェッチパターン

- `src/app/_lib/` ディレクトリにページ固有のGraphQL操作ファイル（`.graphql`）を格納
- Apollo Client 使用: Server Components には `getClient()` 、Client Components には `useSuspenseQuery` 
- GraphQL Code Generator によるスキーマからの型自動生成で型安全性を確保
- キャッシュ戦略の設定可能 (force-cache, revalidate等)

### スキーマ管理

- `src/graphql/schema.graphql` でGraphQLスキーマ定義
- Apollo Server は `/api/graphql` ルートで実行
- GraphQL Code Generator による `src/graphql/generated/` への型自動生成

### データモデル

- 主要エンティティ：`User` と `Post`
- User: id, name, email
- Post: id, title, content, author, createdAt

### フォーム処理

- すべてのフォームでzodResolverによる検証とReact Hook Formを使用
- 各ページの `_lib/schemas.ts` でバリデーションスキーマをコロケーション管理
- 一貫したUIとアクセシビリティのためのshadcn/ui Formコンポーネント
- `withServerAction` ラッパーによる統一エラーハンドリングでサーバーアクションがフォーム送信を処理

### キャッシュ戦略

- 設定可能なキャッシュオプション付きカスタムGraphQLリクエスタ（`src/lib/graphql/index.ts`）
- `cacheOptions` ヘルパー：
  - `static(tags)` - 再検証タグ付き静的キャッシュ
  - `revalidate(seconds, tags)` - 時間ベース再検証
  - `noCache()` - 動的コンテンツ用キャッシュなし
- すべてのデータフェッチャーはリクエスト重複排除のためReactの `cache()` を使用

### ユーザーエクスペリエンス

- すべてのCRUD操作での `sonner` を使用したトースト通知
- エンティティ名を表示する成功メッセージ（例：「Project Name」を作成しました）
- ユーザーフレンドリーな日本語エラーメッセージ
- すべての非同期操作でのローディング状態とスケルトン

### Container/Presentationalパターン

- `_containers/` でデータフェッチを担当するContainerコンポーネント
- `_components/` で表示ロジックを担当するPresentationalコンポーネント
- Containerはデータフェッチのみに集中、Presentationalは表示とエラー状態処理に集中
- エラー状態（null/undefined）と空状態（空配列）を適切に区別して処理

### 共有コンポーネントとユーティリティ

- `DataTable` コンポーネント（`src/components/shared/data-table.tsx`）によるアクション付き汎用テーブルレンダリング
- 一貫した日付表示のための日付フォーマットユーティリティ（`src/lib/utils/date-format.ts`）
- 適切なラベル-入力関連付けのためのフォームフィールドコンポーネント（`src/components/form/`）
- DRYエラーハンドリングとキャッシュ再検証のためのサーバーアクションラッパー（`src/lib/utils/server-action-wrapper.ts`）

### 認証システム

- NextAuth v4を使用したセッション管理
- `/signin` と `/signup` ページで認証フロー
- `(auth)` ルートグループで認証が必要なページを保護
- サーバーサイドでのセッション確認とリダイレクト処理

## ディレクトリ構造ガイドライン

このプロジェクトのディレクトリ構造：

- `src/app/` - Next.js App Router構造
  - `page.tsx` - ページコンポーネント（Containerをimportするのみでロジックレス）
  - `layout.tsx` - ページレイアウト（sidebar等の共通UI含む）
  - `_containers/` - データフェッチを担当するContainer
  - `_components/` - 表示ロジックを担当するPresentational
  - `_lib/` - ページ固有のGraphQL操作
    - `*.graphql` - GraphQLクエリ定義
- `src/components/` - 再利用可能なコンポーネント
  - `layouts/` - レイアウト関連コンポーネント（sidebar等）
  - `ui/` - 汎用UIコンポーネント
- `src/lib/` - ライブラリとユーティリティ
  - `apollo-client.ts` - Apollo Client設定
  - `utils.ts` - ユーティリティ関数
- `src/graphql/` - GraphQL関連
  - `schema.graphql` - スキーマ定義
  - `generated/` - 自動生成された型定義
- `src/provider/` - React Context プロバイダー

### 追加パターン
- 認証が必要なページは `(auth)` ルートグループ下に配置
- サーバーアクションは `_lib/` ディレクトリで整理
- バリデーションスキーマは各ページの `_lib/schemas.ts` でコロケーション管理

## 環境設定

- 型安全な環境変数にT3 Envを使用
- 現在 `NEXT_PUBLIC_API_URL` が設定済み
- 必要に応じてデータベースURLやその他のシークレットを追加