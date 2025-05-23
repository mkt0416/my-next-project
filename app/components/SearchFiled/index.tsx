
'use client'
import Image from 'next/image';
import styles from './index.module.css';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SearchFiledComponent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const q = e.currentTarget.elements.namedItem('q');
        if (q instanceof HTMLInputElement) {
            const params = new URLSearchParams();
            params.set('q', q.value.trim());
            router.push(`/news/search?${params.toString()}`);
        }
    };
    return (
        <form
            onSubmit={handleSubmit}
            className={styles.form}
        >
            <label className={styles.search}>
                <Image
                    src={'/search.svg'}
                    alt='検索'
                    width={16}
                    height={16}
                    priority
                />
                <input
                    className={styles.searchInput}
                    type="text"
                    name='q'
                    defaultValue={searchParams.get('q') || undefined}
                    placeholder='キーワードを入力'
                />
            </label>
        </form>
    );
};

export default function SearchFiled() {
    return (
        <Suspense>
            <SearchFiledComponent />
        </Suspense>
    );
}

