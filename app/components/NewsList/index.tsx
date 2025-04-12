
import Link from 'next/link';
import styles from './index.module.css';
import { News } from '@/app/lib/microcms';
import Image from 'next/image';
import Category from '../Category';
import Date from '../Date';

type Props = {
    news: News[];
};

export default function NewsList({ news }: Props) {
    if (news.length === 0) {
        return <p>記事がありません</p>
    }

    return (
        <ul>
            {news.map((article) => (
                <li key={article.id} className={styles.list}>
                    <Link
                        className={styles.link}
                        href={`/news/${article.id}`}
                    >
                        {article.thumbnail
                            ? (
                                <Image
                                    className={styles.image}
                                    src={article.thumbnail.url}
                                    alt=''
                                    width={article.thumbnail.width}
                                    height={article.thumbnail.height}
                                    priority
                                />
                            )
                            : (
                                <Image
                                    className={styles.image}
                                    src={'/no-image.png'}
                                    alt='no-image'
                                    width={1200}
                                    height={630}
                                    priority
                                />
                            )
                        }
                        <dl>
                            <dt className={styles.title}>{article.title}</dt>
                            <dd className={styles.meta}>
                                <Category category={article.category} />
                                <Date date={article.publishedAt ?? article.createdAt} />
                            </dd>
                        </dl>
                    </Link>
                </li>
            ))}
        </ul>
    );
};