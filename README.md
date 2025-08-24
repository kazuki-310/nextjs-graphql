# Next.js + GraphQL + Apollo Client Demo

Next.js App Router と Apollo を使用した React Server Components で fetch を行うデモンストレーションです。

demo: https://nextjs-graphql-xi.vercel.app/

## 技術スタック

- **Next.js** 15.5.0 (App Router)
- **React** 19
- **Apollo Client** 4.0.0
- **GraphQL Code Generator** (型安全性)
- **TypeScript**
- **Tailwind CSS**

## ページ構成

### `/graphql-no-store`
- **キャッシュオプション**: `no-store`
- **動作**: 毎回サーバーからデータを取得
- **ビルド時の分類**: Dynamic (ƒ)
- **用途**: リアルタイム性が重要なデータの取得

### `/graphql-force-cache`
- **キャッシュオプション**: `force-cache`
- **動作**: データをキャッシュして再利用
- **ビルド時の分類**: Static (○)
- **用途**: 変更頻度の低い静的データの取得

## キャッシュ動作の比較Next.js App RouterでRSCからGraphQLを呼ぶ
### Apollo Client との統合

Apollo Client は Next.js の fetch オプションを以下のように設定します：

```typescript
// No Store パターン
const { data, error } = await getClient().query<GetUsersQuery>({
  query: GetUsersDocument,
  context: {
    fetchOptions: {
      cache: "no-store", // 毎回取得
    },
  },
});

// Force Cache パターン
const { data, error } = await getClient().query<GetUsersQuery>({
  query: GetUsersDocument,
  context: {
    fetchOptions: {
      cache: "force-cache", // キャッシュ利用
    },
  },
});
```

### ビルド時の確認方法

```bash
pnpm build
```

実行後の出力で確認できます：
- `○` Static: ビルド時に静的生成（キャッシュされている）
- `ƒ` Dynamic: リクエスト毎に動的生成（キャッシュなし）
