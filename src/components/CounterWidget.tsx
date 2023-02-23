import styles from "../styles/CounterWIdget.module.scss";

type Props = {
  text: string;
};

export const CounterWidget = ({ text }: Props) => {
  return (
    <>
      <div className={styles.base} id="base">
        <span className="whitespace-nowrap">
          スペースなし {text.replace(/\s+/g, "").length}文字
        </span>
      </div>
    </>
  );
};
