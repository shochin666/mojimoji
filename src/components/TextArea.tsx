import mello from "../images/undraw_mello_otq1.svg";
import { CounterWidget } from "./CounterWidget";
import { StaticCounter } from "./StaticCounter";

type Props = {
  setTextContent: React.Dispatch<React.SetStateAction<string>>;
  text: string;
  showCounterWidget: boolean;
  setShowCounterWidget: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TextArea = ({
  setTextContent,
  text,
  showCounterWidget,
  setShowCounterWidget,
}: Props) => {
  return (
    <>
      <div className="relative">
        <img
          src={mello}
          alt="mello"
          width={200}
          height={200}
          className="inline-block absolute top-[96px] lg:top-[36px] right-[50%] left-[50%] translate-x-[-50%] lg:w-[20%]"
        />
        <textarea
          name="content"
          id="content"
          className="outline-none border-2 focus:border-4 border-blue-300 focus:border-blue-500 absolute top-[240px] lg:top-[260px] w-[90%] lg:w-[80%] h-[280px] lg:h-[380px] right-[50%] left-[50%] translate-x-[-50%] rounded-lg p-[4px] text-NotoSansJp text-[16px] font-semibold bg-slate-800 text-white"
          onChange={(e) => {
            setTextContent(e.target.value);
          }}
          onClick={() => {
            setShowCounterWidget(true);
          }}
          onBlur={() => {
            setShowCounterWidget(false);
          }}
        />
      </div>
      {showCounterWidget && <CounterWidget text={text} />}
      <span className="lg:inline-block text-gray-600 absolute top-[526px] lg:top-[660px] left-[50%] translate-x-[-50%] whitespace-nowrap hidden">
        スペース含 {text.length}文字
      </span>
      <span className="lg:inline-block text-gray-600 absolute top-[550px] lg:top-[688px] left-[50%] translate-x-[-50%] whitespace-nowrap hidden">
        <span className="font-semibold">ES向け: </span>
        スペースなし {text.replace(/\s+/g, "").length}文字
      </span>
      {showCounterWidget || <StaticCounter text={text} />}
    </>
  );
};
