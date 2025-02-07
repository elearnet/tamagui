// deno-lint-ignore-file
/* eslint-disable */
// biome-ignore: needed import
import type { OneRouter } from 'one'

declare module 'one' {
  export namespace OneRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(blog)` | `/(blog)/blog` | `/(blog)/draft` | `/(docs)` | `/(site)` | `/(site)/` | `/(site)/(blog)` | `/(site)/(blog)/blog` | `/(site)/(blog)/draft` | `/(site)/(docs)` | `/(site)/account` | `/(site)/account/items` | `/(site)/bento` | `/(site)/bento-license` | `/(site)/bento-policy` | `/(site)/bento/(home)` | `/(site)/blog` | `/(site)/community` | `/(site)/dpa` | `/(site)/draft` | `/(site)/login` | `/(site)/payment-finished` | `/(site)/privacy` | `/(site)/studio` | `/(site)/takeout` | `/(site)/takeout-license` | `/(site)/takeout-policy` | `/(site)/theme` | `/_sitemap` | `/account` | `/account/items` | `/admin` | `/admin/user` | `/bento` | `/bento-license` | `/bento-policy` | `/bento/(home)` | `/blog` | `/community` | `/dpa` | `/draft` | `/invoice` | `/login` | `/payment-finished` | `/privacy` | `/responsive-demo` | `/sandbox` | `/sandbox2` | `/studio` | `/takeout` | `/takeout-license` | `/takeout-policy` | `/talk` | `/test` | `/theme`
      DynamicRoutes: `/(blog)/blog/${OneRouter.SingleRoutePart<T>}` | `/(docs)/docs/core/${OneRouter.SingleRoutePart<T>}` | `/(docs)/docs/guides/${OneRouter.SingleRoutePart<T>}` | `/(docs)/docs/intro/${OneRouter.SingleRoutePart<T>}` | `/(docs)/ui/${string}` | `/(site)/(blog)/blog/${OneRouter.SingleRoutePart<T>}` | `/(site)/(docs)/docs/core/${OneRouter.SingleRoutePart<T>}` | `/(site)/(docs)/docs/guides/${OneRouter.SingleRoutePart<T>}` | `/(site)/(docs)/docs/intro/${OneRouter.SingleRoutePart<T>}` | `/(site)/(docs)/ui/${string}` | `/(site)/bento/${string}` | `/(site)/blog/${OneRouter.SingleRoutePart<T>}` | `/(site)/docs/core/${OneRouter.SingleRoutePart<T>}` | `/(site)/docs/guides/${OneRouter.SingleRoutePart<T>}` | `/(site)/docs/intro/${OneRouter.SingleRoutePart<T>}` | `/(site)/ui/${string}` | `/bento/${string}` | `/blog/${OneRouter.SingleRoutePart<T>}` | `/docs/core/${OneRouter.SingleRoutePart<T>}` | `/docs/guides/${OneRouter.SingleRoutePart<T>}` | `/docs/intro/${OneRouter.SingleRoutePart<T>}` | `/ui/${string}`
      DynamicRouteTemplate: `/(blog)/blog/[slug]` | `/(docs)/docs/core/[slug]` | `/(docs)/docs/guides/[slug]` | `/(docs)/docs/intro/[slug]` | `/(docs)/ui/[...subpath]` | `/(site)/(blog)/blog/[slug]` | `/(site)/(docs)/docs/core/[slug]` | `/(site)/(docs)/docs/guides/[slug]` | `/(site)/(docs)/docs/intro/[slug]` | `/(site)/(docs)/ui/[...subpath]` | `/(site)/bento/[...parts]` | `/(site)/blog/[slug]` | `/(site)/docs/core/[slug]` | `/(site)/docs/guides/[slug]` | `/(site)/docs/intro/[slug]` | `/(site)/ui/[...subpath]` | `/bento/[...parts]` | `/blog/[slug]` | `/docs/core/[slug]` | `/docs/guides/[slug]` | `/docs/intro/[slug]` | `/ui/[...subpath]`
      IsTyped: true
    }
  }
}