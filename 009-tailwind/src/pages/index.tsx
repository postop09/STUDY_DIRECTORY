import { Inter } from "next/font/google";
import LoginForm from "@/components/LoginForm";
import Button from "@/components/Button";
import tw from "tailwind-styled-components";
import CHAMPION from "@/data/champion.json";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const fetchTest = async () => {
    try {
      const res = await fetch("/api/hello");
      const json = await res.json();
      console.log(json);
    } catch (e) {
      console.log(e);
    }
  };

  const logItem = () => {
    console.log(CHAMPION);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
      <Wrapper>
        <Button onClick={fetchTest}>나야나</Button>
        <Button color="t-red" onClick={logItem}>
          너야너
        </Button>
        <Button color="t-dark">우리야우리</Button>
        {/*<Button color="t-dark">*/}
        <Link as="/mastery" href="/mastery?name=hideonbush">
          나야나
        </Link>
        {/*</Button>*/}
      </Wrapper>
    </main>
  );
}

const Wrapper = tw.div`
  flex
  flex-col 
  gap-1
`;
