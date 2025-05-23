
import styles from './index.module.css';
import type { Category } from '@/app/lib/microcms';

type Props = {
    category: Category;
};

export default function Category({ category }: Props) {
    return (
        <span className={styles.tag}>{category.name}</span>
    );
};