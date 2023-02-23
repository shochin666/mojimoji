import mello from "../images/undraw_mello_otq1.svg";

export const Header = () => {
  return (
    <>
      <head>
        <title>mojimoji</title>
        <meta name="description" content="高速文字数確認＋らくらくコピペ！" />
        <meta name="keyword" content="ES, 就活, 文字数, カウント, 数える" />
        <meta property="twitter:title" content="mojimoji" />
        <meta name="twitter:createor" content="mojimoji" />
        <meta property="twitter:image" content={mello} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="ES書くのにこれだけ！" />
        <link rel="canonical" href="https://powerplant-f5557.web.app/" />
        <link rel="icon" href={mello} />
      </head>
    </>
  );
};
