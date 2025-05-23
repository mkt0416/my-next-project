
import { createClient, MicroCMSQueries, MicroCMSImage, MicroCMSListContent } from "microcms-js-sdk";

export type Category = {
    name: string;
} & MicroCMSListContent;

export type News = {
    title: string;
    description: string;
    content: string;
    category: Category;
    thumbnail?: MicroCMSImage;
} & MicroCMSListContent;

export type Member = {
    name: string;
    position: string;
    profile: string;
    image: MicroCMSImage;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error('process.env.MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_APIKEY) {
    throw new Error('process.env.MICROCMS_APIKEY is required');
}

export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_APIKEY,
});

export const getMemberList = async (queries?: MicroCMSQueries) => {
    const listData = await client.getList<Member>({
        endpoint: 'member',
        queries,
    });
    return listData;
};

export const getNewsList = async (queries: MicroCMSQueries) => {
    const listData = await client.getList<News>({
        endpoint: 'news',
        queries,
    });
    return listData;
};

export const getNewsDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    const detailData = await client.getListDetail<News>({
        endpoint: 'news',
        contentId,
        queries,
    });
    return detailData;
};

export const getCategoryDetail = async (contentId: string, queries?: MicroCMSQueries) => {
    const detailData = await client.getListDetail<Category>({
        endpoint: 'categories',
        contentId,
        queries,
    });
    return detailData;
};