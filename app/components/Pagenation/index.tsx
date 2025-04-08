
import { NEWS_LIST_LIMIT } from '@/app/constants';
import styles from './index.module.css';
import Link from 'next/link';

type Props = {
    totalCount: number;
    current?: number;
    basePath?: string;
};

export default function Pagenation({ totalCount, current = 1, basePath = '/news' }: Props) {
    const page = Array.from(
        { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
        (_, i) => i + 1,
    );

    return (
        <nav>
            <ul className={styles.container}>
                {page.map((p) => (
                    <li key={p} className={styles.list}>
                        {current !== p
                            ? (
                                <Link href={`${basePath}/p/${p}`} className={styles.item}>
                                    {p}
                                </Link>
                            )
                            : (
                                <span className={`${styles.current} ${styles.item}`}>
                                    {p}
                                </span>
                            )
                        }
                    </li>
                ))}
            </ul>
        </nav>
    );
};