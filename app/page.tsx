import Link from "next/link";

const Home = () => {
  return (
    <section>
      <div className="text-lg font-bold">تست فونت فارسی وزیرمتن</div>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/company">About Company</Link>
        </li>
      </ul>
    </section>
  );
};

export default Home;
