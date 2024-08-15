import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="text-color-primary px-12 md:px-16 lg:px-32 py-4">
        <h1 className="text-4xl">Article</h1>
      </div>
      <div className="flex flex-col items-center text-color-primary lg:px-28 md:px-16">
        <div className="flex grid md:grid-cols-3 lg:grid-cols-4 grid-cols-1 gap-6">
          <div className="py-4">
            <Image
              src="https://placehold.co/600x400/png"
              width={300}
              height={150}
              className="rounded-lg"
            />
            <div className="py-2 text-2xl">
              <h3>Judul Article</h3>
            </div>
            <div>
              <h3>Cuplikan Article</h3>
            </div>
          </div>
          <div className="py-4">
            <Image
              src="https://placehold.co/600x400/png"
              width={300}
              height={150}
              className="rounded-lg"
            />
            <div className="py-2 text-2xl">
              <h3>Judul Article</h3>
            </div>
            <div>
              <h3>Cuplikan Article</h3>
            </div>
          </div>
          <div className="py-4">
            <Image
              src="https://placehold.co/600x400/png"
              width={300}
              height={150}
              className="rounded-lg"
            />
            <div className="py-2 text-2xl">
              <h3>Judul Article</h3>
            </div>
            <div>
              <h3>Cuplikan Article</h3>
            </div>
          </div>
          <div className="py-4">
            <Image
              src="https://placehold.co/600x400/png"
              width={300}
              height={150}
              className="rounded-lg"
            />
            <div className="py-2 text-2xl">
              <h3>Judul Article</h3>
            </div>
            <div>
              <h3>Cuplikan Article</h3>
            </div>
          </div>
          <div className="py-4">
            <Image
              src="https://placehold.co/600x400/png"
              width={300}
              height={150}
              className="rounded-lg"
            />
            <div className="py-2 text-2xl">
              <h3>Judul Article</h3>
            </div>
            <div>
              <h3>Cuplikan Article</h3>
            </div>
          </div>
          <div className="py-4">
            <Image
              src="https://placehold.co/600x400/png"
              width={300}
              height={150}
              className="rounded-lg"
            />
            <div className="py-2 text-2xl">
              <h3>Judul Article</h3>
            </div>
            <div>
              <h3>Cuplikan Article</h3>
            </div>
          </div>
          <div className="py-4">
            <Image
              src="https://placehold.co/600x400/png"
              width={300}
              height={150}
              className="rounded-lg"
            />
            <div className="py-2 text-2xl">
              <h3>Judul Article</h3>
            </div>
            <div>
              <h3>Cuplikan Article</h3>
            </div>
          </div>
          <div className="py-4">
            <Image
              src="https://placehold.co/600x400/png"
              width={300}
              height={150}
              className="rounded-lg"
            />
            <div className="py-2 text-2xl">
              <h3>Judul Article</h3>
            </div>
            <div>
              <h3>Cuplikan Article</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default page;
