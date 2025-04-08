
import NewsList from "@/app/components/NewsList";
import Pagenation from "@/app/components/Pagenation";
import { NEWS_LIST_LIMIT } from "@/app/constants";
import { getCategoryDetail, getNewsList } from "@/app/lib/microcms";
import { notFound } from "next/navigation";

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: Props) {
    const category = await getCategoryDetail(params.id).catch(notFound);

    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        filters: `category[equals]${category.id}`,
    });

    return (
        <>
            <NewsList news={news} />
            <Pagenation
                totalCount={totalCount}
                basePath={`/news/category/${category.id}`}
            />
        </>
    );
};