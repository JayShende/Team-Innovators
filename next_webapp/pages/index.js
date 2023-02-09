import Head from "next/head";
import FileUploader from "../components/uploadFile";
import { Card, Spacer } from "@nextui-org/react";
import Quotation from "@/components/Quotation";
import { useState } from "react";

export default function Home() {
  const [quotation__text, setQuotation__text] = useState(0);
  const [quotation_index, setQuotation__index] = useState(0);
  let btnClick = () => {
    if (quotation__text == 0) {
      setQuotation__index(Math.floor(Math.random() * 2));
      console.log(quotation_index);
    }
  };
  return (
    <>
      <Head>
        <title>GOSS</title>
        <meta name="description" content="Team-Innovators" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </Head>
      <main>
        <Card isHoverable css={{ mw: "400px", p: "$6", borderRadius: "100px" }}>
          <Card.Body onClick={btnClick}>
            <FileUploader></FileUploader>
          </Card.Body>
        </Card>
        <Spacer y={1} />
        <Quotation
          quotation__text={quotation__text}
          quotation_index={quotation_index}
        ></Quotation>
      </main>
    </>
  );
}
