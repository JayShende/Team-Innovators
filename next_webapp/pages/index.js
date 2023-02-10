import Head from "next/head";
import { useEffect, useState } from "react";
import StarticHero from "@/components/StarticHero";
import DynamicHero from "@/components/DynamicHero";
import { Spacer } from "@nextui-org/react";

export default function Home() {
  const [quotation__text, setQuotation__text] = useState(0);
  const [quotation_index, setQuotation__index] = useState(0);
  let btnClick = () => {
    if (quotation__text == 0) {
      setQuotation__index(Math.floor(Math.random() * 2));
      console.log(quotation_index);
    }
  };
  const [startic_hero, setStartic_hero] = useState(true);
  const [imgLink, setImgLink] = useState("");
  const [garbageName, setGarbageName] = useState("");
  useEffect(() => {
    if (imgLink != "" && garbageName != "") {
      setStartic_hero(false);
    }
  }, [imgLink]);

  return (
    <>
      <Head>
        <title>GOSS</title>
        <meta name="description" content="Team-Innovators" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      {startic_hero ? (
        <StarticHero
          quotation__text={quotation__text}
          quotation_index={quotation_index}
          btnClick={btnClick}
          imgLink={imgLink}
          setImgLink={setImgLink}
          setGarbageName={setGarbageName}
          garbageName={garbageName}
        ></StarticHero>
      ) : (
        <DynamicHero imgLink={imgLink} garbageName={garbageName}></DynamicHero>
      )}

      <Spacer y={3} />
    </>
  );
}
