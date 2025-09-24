# Next.js + GraphQL + Apollo Client Demo

Next.js App Router と Apollo を使用した React Server Components で fetch を行うデモンストレーションです。

- [demo](https://nextjs-graphql-xi.vercel.app/)
- [apollo-client](https://www.apollographql.com/docs/react)
- [apollo-client-integrations](https://github.com/apollographql/apollo-client-integrations/tree/main/packages/nextjs)
- [@apollo/client-integration-nextjs Officially Released Lenz Weber-Tronic](https://www.apollographql.com/blog/apollo-client-integration-nextjs-officially-released)


## 調査
`apollo-client-integrations` を使った構成か、Vercel が作った構成で endpoint に対して、 fetch でラップして使う方法の２種類がある
このレポジトリでは、`apollo-client-integrations` を使った構成の確認をしてます

## ページ構成

### `/graphql-no-store`
- **キャッシュオプション**: `no-store`
- **動作**: 毎回サーバーからデータを取得
- **ビルド時の分類**: Dynamic (ƒ)

### `/graphql-force-cache`
- **キャッシュオプション**: `force-cache`
- **動作**: データをキャッシュして再利用
- **ビルド時の分類**: Static (○)

### `/client-fetch`
- **動作**: useQuery フックを使ってクライアントサイドでデータを取得

## キャッシュ動作の比較 Next.js App Router で RSC から GraphQLを呼ぶ
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

// Client-side fetch パターン
const { loading, error, data } = useQuery<GetUsersQuery, GetUsersQueryVariables>(GET_USERS);
```


### その他
上記の方法は mutation は未検証です。Server Actions で `getClient().mutation` を呼び出す方法は非推奨なのかもしれない。(https://github.com/apollographql/apollo-client-integrations/issues/78)もしかしたら問題なく動作するかもしれないが。
推奨されてる方針は、`useSuspenseQuery` で SSR して client cache させて、client 側で mutation する方針なのかな？これだと、 `getClient()`, `useSuspenseQuery` の使い分けが複雑になるのと、ちゃんと理解できてない人が使うと予期せぬエラーが起きそう。あとは、要件変更時に修正も大変になりそう。。

別の対応方針としては以下の Vercel が出してる Template Repository を参考にしてもいい
https://github.com/vercel/commerce
上記 repository を参考にもう少し工夫した記事
https://zenn.dev/takumiyoshikawa/articles/07ea671817e6ae

以前試した Repository: https://github.com/kazuki-310/learn-nextjs-graphql
deploy 先が Vercel なのでキャッシュ周りは問題なく動くが ECS だと機能はしないかもしれない。
