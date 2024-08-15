import Image from "next/image";
import LogoJavascript from "/public/assets/logo javascript.svg";

const AboutHome = () => {
  return (
    <div className="text-color-primary py-14 sm:py-20 md:py-24 lg:py-28 my-8 sm:my-12 md:my-16 lg:my-20">
        <h1 className="flex justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl">About This Website</h1>
        <div className="flex justify-center pt-10 text-xl">
          <h1 className="max-w-6xl text-justify mx-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum ut
            eum labore maxime et pariatur, in earum distinctio soluta fuga
            saepe praesentium deserunt excepturi repellendus possimus corporis
            optio impedit blanditiis?
          </h1>
        </div>
        <div className="flex justify-center pt-10 text-xl">
          <h1 className="max-w-6xl text-center">
            Website ini dibuat menggunakan
          </h1>
        </div>
        <div className="flex justify-center pt-6 sm:pt-8 md:pt-10 lg:pt-12">
          <Image src={LogoJavascript} alt="svg" width={400} height={75} />
        </div>
      </div>
  );
};
export default AboutHome;
