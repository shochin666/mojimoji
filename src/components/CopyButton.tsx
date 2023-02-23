type Props = {
  text: string;
};

export const CopyButton = ({ text }: Props) => {
  const copyToClipboard = (text: string) => {
    const result = navigator.clipboard.writeText(text);
    return result;
  };
  const handleCopy = () => {
    const element = document.getElementById("copy-button") as HTMLButtonElement;
    copyToClipboard(text);
    setTimeout(() => {
      element.innerText = "COPIED!";
    }, 500);
    setTimeout(() => {
      element.innerText = "COPY";
    }, 1500);
  };
  return (
    <>
      <button
        className="rounded-lg shadow-2xl bg-green-500 mx-[10%] lg:mx-0 px-8 py-3 text-white"
        id="copy-button"
        onClick={() => {
          handleCopy();
        }}
      >
        COPY
      </button>
    </>
  );
};
