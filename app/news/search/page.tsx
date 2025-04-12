
import NewsList from "@/app/components/NewsList";
import SearchFiled from "@/app/components/SearchFiled";
import { NEWS_LIST_LIMIT } from "@/app/constants";
import { getNewsList } from "@/app/lib/microcms";

type Props = {
    searchParams: {
        q?: string;
    };
};

export default async function Page({ searchParams }: Props) {
    const { contents: news } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        q: searchParams.q,
    });

    return (
        <>
            <SearchFiled />
            <NewsList news={news} />
        </>
    )

};