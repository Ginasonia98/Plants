import Image from "next/image";

const HeaderSection: React.FC = () => {
  return (
    <div className="flex h-[81%] w-full">
      <section className="w-5/12">
        <p className="mt-[132px] font-Livvic text-[20px] leading-[25px] text-fifthGray">
          We offer you a wide range of artificial and natural flowers
        </p>
        <h1 className="mt-[24px] font-Lora text-[90px] leading-[115px] text-fourthBlack">
          Plants for your interior
        </h1>
        <div className="mt-[64px] flex items-center gap-[64px]">
          <button className="h-[72px] w-[236px] bg-primaryGreen font-Livvic text-[20px] font-semibold text-thirdWhite">
            Shop Now
          </button>
          <div className="flex items-center gap-[24px]">
            <Image src="/icons/icon.svg" alt="icon" width={64} height={64} />
            <h3 className="font-Livvic text-[20px] font-semibold text-fourthBlack">
              Watch Video
            </h3>
          </div>
        </div>
        <div className="mt-[56px] flex items-center gap-[80px]">
          <div className="items-left flex flex-col">
            <h2 className="font-Lora text-[56px] leading-[72px] text-fourthBlack">
              160+
            </h2>
            <h4 className="pt-2 font-Livvic text-[20px] leading-[25px] text-fifthGray">
              Plant Species
            </h4>
          </div>
          <div className="h-[102px] w-[2px] bg-fifthGray" />
          <div className="items-left flex flex-col">
            <h2 className="font-Lora text-[56px] leading-[72px] text-fourthBlack">
              100+
            </h2>
            <h4 className="pt-2 font-Livvic text-[20px] leading-[25px] text-fifthGray">
              Clients
            </h4>
          </div>
        </div>
      </section>
      <div className="flex w-7/12 flex-col items-end pt-[52px]">
        <Image
          src="/images/header-img.png"
          priority
          alt="flower"
          width={668}
          height={601}
        />
        <div className="mt-[48px] flex gap-[36px] pr-[80px]">
          <Image
            src="/icons/arrow-left.svg"
            alt="arrow-left"
            width={37}
            height={15}
          />
          <h3 className="font-Lora text-[24px] text-primaryGreen">
            1<span className="text-fifthGray">/4</span>
          </h3>
          <Image
            src="/icons/arrow-right.svg"
            alt="arrow-right"
            width={37}
            height={15}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
