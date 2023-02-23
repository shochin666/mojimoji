type Props = {
  setTextContent: React.Dispatch<React.SetStateAction<string>>;
};

export const DeleteButton = ({ setTextContent }: Props) => {
  return (
    <>
      <button
        className="rounded-lg border-0 lg:border-4 border-red-500 bg-white lg:text-red-500 mx-[10%] lg:mx-0 px-8 py-3 shadow-lg"
        onClick={() => {
          if (window.confirm("全ての文章を削除してもよろしいですか？")) {
            (document.getElementById("content") as HTMLInputElement).value = "";
            setTextContent("");
          }
        }}
      >
        DELETE
      </button>
    </>
  );
};
