import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="my-6 flex flex-col items-center gap-x-12 xl:mb-12 xl:flex-row">
          <div className="pt-6">
            <h1 className="pb-6 text-3xl leading-9 font-bold tracking-tight text-gray-700 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14 dark:text-gray-300">
              Hi, I'm Harry!
            </h1>
            <h2 className="w-3/4 text-lg text-gray-600 dark:text-gray-400">
              我期望自己是一位登山者。我相信每一次的攀登，都是一場與知識的對話；而恐懼與風險，不過是因為我們尚未看清前方的路。
              <br />
              <br />
              在 ERP 的群山中，我擁有從 TIPTOP 到 Odoo 的完整攀登經驗。我不畏懼新技術的陡峭，因為我深知只要透徹理解、掌握脈絡，險峻的山稜也能成為絕佳的展望台。
              <br />
              <br />
              為了消除大家對於 ERP 的陌生與不安，我曾將多年的引路經驗透過 iThome 鐵人賽分享我的路徑，並集結成《顧問教你做 - Odoo 在台教戰手冊》。
              <br />
              <br />
              歡迎來到我的基地營。這裡記錄我過往經驗的{' '}
              <Link
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href="/projects"
              >
                專案
              </Link>{' '}
              與{' '}
              <Link
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                href="/blog"
              >
                技術文章
              </Link>{' '}
              ，有些不務正業的專案，歡迎你隨意瀏覽，一同交流。
            </h2>
          </div>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
