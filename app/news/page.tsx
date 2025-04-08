
import NewsList from "../components/NewsList";
import Pagenation from "../components/Pagenation";
import SearchField from "../components/SearchField";
import { NEWS_LIST_LIMIT } from "../constants";
import { getNewsList } from "../lib/microcms";

export const revalidate = 0;

export default async function Page() {
    const { contents: news, totalCount } = await getNewsList({ limit: NEWS_LIST_LIMIT });

    return (
        <>
            <SearchField />
            <NewsList news={news} />
            <Pagenation totalCount={totalCount} />
        </>
    );
};