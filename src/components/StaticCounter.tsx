type Props = {
  text: string;
};

export const StaticCounter = ({ text }: Props) => {
  return (
    <>
      <span className="inline-block text-gray-600 absolute top-[526px] lg:top-[660px] left-[50%] translate-x-[-50%] whitespace-nowrap lg:hidden">
        スペース含 {text.length}文字
      </span>
      <span className="inline-block text-gray-600 absolute top-[550px] lg:top-[688px] left-[50%] translate-x-[-50%] whitespace-nowrap lg:hidden">
        <span className="font-semibold">ES向け: </span>
        スペースなし {text.replace(/\s+/g, "").length}文字
      </span>
    </>
  );
};
