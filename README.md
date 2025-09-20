# Next.js + GraphQL + Apollo Client Demo

Next.js App Router と Apollo を使用した React Server Components で fetch を行うデモンストレーションです。

- [demo](https://nextjs-graphql-xi.vercel.app/)

- [apollo-client-integrations](https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs)

- [@apollo/client-integration-nextjs Officially Released Lenz Weber-Tronic](https://www.apollographql.com/blog/apollo-client-integration-nextjs-officially-released)



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

### `/graphql-force-cache`
- **キャッシュオプション**: `force-cache`
- **動作**: データをキャッシュして再利用
- **ビルド時の分類**: Static (○)

## キャッシュ動作の比較Next.js App RouterでRSCからGraphQLを呼ぶ
### Apollo Client との統合

Apollo Client は Next.js の fetch オプションを以下のように設定します：

```typescript
// No Store パターン
const { data, error } = await query<GetUsersQuery>({
  query: GetUsersDocument,
  context: {
    fetchOptions: {
      cache: "no-store", // 毎回取得
    },
  },
});

// Force Cache パターン
const { data, error } = await query<GetUsersQuery>({
  query: GetUsersDocument,
  context: {
    fetchOptions: {
      cache: "force-cache", // キャッシュ利用
    },
  },
});
```

