import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const ButtonWrapper = ({ children }: Props) => {
  return (
    <>
      <div className="w-full flex flex-col lg:flex-row font-semibold absolute top-[590px] lg:top-[730px] justify-center gap-4 pb-24">
        {children}
      </div>
    </>
  );
};
