import { unstable_noStore as noStore } from "next/cache";

export default async function Home() {
  noStore();

  return (
    <main>
      This is Raunak
    </main>
  );
}
