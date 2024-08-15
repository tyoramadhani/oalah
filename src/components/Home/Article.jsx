import Image from "next/image";
import ShowMore from "./ShowMore";

const Article = () => {
  return (
    <div className="text-color-primary px-40">
      <div className="py-8 text-4xl">
        <h3>Article</h3>
      </div>
      <div className="flex flex-row py-2">
        <Image src="https://placehold.co/600x400/png" width={200} height={50} className="rounded-lg"/>
        <div className="flex flex-col px-10">
          <div className="text-2xl">
            <h3>Judul Article</h3>
          </div>
          <div className="py-2">
            <h3>Cuplikan isi Article</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-row py-2">
        <Image src="https://placehold.co/600x400/png" width={200} height={50} className="rounded-lg"/>
        <div className="flex flex-col px-10">
          <div className="text-2xl">
            <h3>Judul Article</h3>
          </div>
          <div className="py-2">
            <h3>Cuplikan isi Article</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-row py-2">
        <Image src="https://placehold.co/600x400/png" width={200} height={50} className="rounded-lg"/>
        <div className="flex flex-col px-10">
          <div className="text-2xl">
            <h3>Judul Article</h3>
          </div>
          <div className="py-2">
            <h3>Cuplikan isi Article</h3>
          </div>
        </div>
      </div>
      <ShowMore/>
    </div>
  );
};
export default Article;
