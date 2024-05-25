'use client';

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  console.log(error);
  return (
    <div>
      <h2>Something went wrong! Refresh the page</h2>
    </div>
  );
}
