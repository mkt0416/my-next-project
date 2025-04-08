
import Hero from "../components/Hero";
import Sheet from "../components/Sheet";

type Props = {
    children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <>
            <Hero title="Member" sub="メンバー" />
            <Sheet>{children}</Sheet>
        </>
    );
};