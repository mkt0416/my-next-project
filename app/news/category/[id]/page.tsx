
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
        filters: `category[equals]${category.id}`,
        limit: NEWS_LIST_LIMIT
    });

    return (
        <>
            <NewsList news={news} />
            <Pagenation
                totalCount={totalCount}
                baseUrl={`/news/category/${category.id}`}
            />
        </>
    );
};