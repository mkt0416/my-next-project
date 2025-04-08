
import Hero from "../components/Hero";
import Sheet from "../components/Sheet";

type Props = {
    children: React.ReactNode;
};

export default function NewsLayout({ children }: Props) {
    return (
        <>
            <Hero title="News" sub="ニュース" />
            <Sheet>{children}</Sheet>
        </>
    );
};