import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ContentsWrapper = ({ children }: Props) => {
  return (
    <>
      <div className="relative">{children}</div>
    </>
  );
};
