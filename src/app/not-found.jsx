import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-green-400">
          404 Error
        </p>

        <h1 className="mb-4 text-6xl font-bold text-white">
          Page Not Found
        </h1>

        <p className="mx-auto mb-8 max-w-md text-gray-400">
          Sorry, the page you are looking for doesn&apos;t exist or may have
          been moved.
        </p>

        <Link
          href="/"
          className="inline-flex rounded-xl bg-green-500 px-6 py-3 font-semibold text-black transition hover:bg-green-400"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
