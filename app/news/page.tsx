
import NewsList from "../components/NewsList";
import Pagenation from "../components/Pagenation";
import SearchFiled from "../components/SearchFiled";
import { NEWS_LIST_LIMIT } from "../constants";
import { getNewsList } from "../lib/microcms";

export default async function Page() {
    const { contents: news, totalCount } = await getNewsList({ limit: NEWS_LIST_LIMIT });

    return (
        <>
            <SearchFiled />
            <NewsList news={news} />
            <Pagenation totalCount={totalCount} />
        </>
    );
};