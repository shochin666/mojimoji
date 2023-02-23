import { useState } from "react";
import { Logo } from "./Logo";
import { CopyButton } from "./CopyButton";
import { DeleteButton } from "./DeleteButton";
import { TextArea } from "./TextArea";
import { ContentsWrapper } from "./ContentsWrapper";
import { ButtonWrapper } from "./ButtonWrapper";

export const Top = () => {
  const [textContent, setTextContent] = useState("");
  const [showCounterWidget, setShowCounterWidget] = useState(false);

  return (
    <>
      <ContentsWrapper>
        <Logo />
        <TextArea
          text={textContent}
          setTextContent={setTextContent}
          showCounterWidget={showCounterWidget}
          setShowCounterWidget={setShowCounterWidget}
        />
        <ButtonWrapper>
          <CopyButton text={textContent} />
          <DeleteButton setTextContent={setTextContent} />
        </ButtonWrapper>
      </ContentsWrapper>
    </>
  );
};
