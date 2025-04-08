
import { getNewsDetail } from '@/app/lib/microcms';
import styles from './page.module.css';
import Article from '@/app/components/Article';
import ButtonLink from '@/app/components/ButtonLink';

export const revalidate = 0;

type Props = {
    params: {
        slug: string;
    };
};

export default async function Page({ params }: Props) {
    const data = await getNewsDetail(params.slug);

    return (
        <>
            <Article data={data} />
            <div className={styles.footer}>
                <ButtonLink href='/news'>ニュース一覧</ButtonLink>
            </div>
        </>
    );
};