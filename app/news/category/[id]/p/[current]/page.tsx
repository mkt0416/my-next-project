
import NewsList from "@/app/components/NewsList";
import Pagenation from "@/app/components/Pagenation";
import { NEWS_LIST_LIMIT } from "@/app/constants";
import { getCategoryDetail, getNewsList } from "@/app/lib/microcms";
import { notFound } from "next/navigation";

type Props = {
    params: {
        id: string;
        current: string;
    };
};

export default async function Page({ params }: Props) {
    const current = parseInt(params.current, 10);

    const category = await getCategoryDetail(params.id);

    if (Number.isNaN(current) || current < 1) {
        notFound();
    }

    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        offset: NEWS_LIST_LIMIT * (current - 1),
    });

    if (news.length === 0) {
        notFound();
    }

    return (
        <>
            <NewsList news={news} />
            <Pagenation
                totalCount={totalCount}
                current={current}
                basePath={`/news/category/${category.id}`}
            />
        </>
    );
};