import { Suspense } from 'react';

async function fetchData(id: string, delay: number = 0) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store'
  });
  const data = await res.json();
  return data;
}


export default async function Home() {

  const data = await fetchData("1", 6000);

  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Suspense>
  )
}
