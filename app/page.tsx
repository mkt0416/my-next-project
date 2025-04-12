
import Image from 'next/image';
import styles from './page.module.css';
import ButtonLink from './components/ButtonLink';
import { getNewsList, News } from './lib/microcms';
import NewsList from './components/NewsList';
import { TOP_NEWS_LIMIt } from './constants';

export const revalidate = 0;

export default async function Page() {
    const data = await getNewsList({ limit: TOP_NEWS_LIMIt });

    return (
        <>
            <section className={styles.top}>
                <div>
                    <h1 className={styles.title}>テクノロジーの力で世界を変える</h1>
                    <p className={styles.description}>私たちは市場をリードしているグローバルテックカンパニーです</p>
                    <Image
                        className={styles.bgimg}
                        src={'/img-mv.jpg'}
                        alt=''
                        width={4000}
                        height={1200}
                        priority
                    />
                </div>
            </section>
            <section className={styles.news}>
                <h2 className={styles.newsTitle}>News</h2>
                <NewsList news={data.contents} />
                <div className={styles.newsLink}>
                    <ButtonLink href='/news'>もっとみる</ButtonLink>
                </div>
            </section>
        </>
    );
};