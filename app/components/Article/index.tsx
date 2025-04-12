
import { News } from '@/app/lib/microcms';
import styles from './index.module.css';
import Link from 'next/link';
import Category from '../Category';
import Date from '../Date';
import Image from 'next/image';

type Props = {
    data: News;
};

export default function Article({ data }: Props) {
    return (
        <main>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.description}>{data.description}</p>
            <div className={styles.meta}>
                <Link href={`/news/category/${data.category.id}`}>
                    <Category category={data.category} />
                </Link>
                <Date date={data.publishedAt ?? data.createdAt} />
            </div>
            {data.thumbnail && (
                <Image
                    className={styles.thumbnail}
                    src={data.thumbnail.url}
                    alt=''
                    width={data.thumbnail?.width}
                    height={data.thumbnail?.height}
                    priority
                />
            )}
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{
                    __html: data.content
                }}
            ></div>
        </main>
    );
};