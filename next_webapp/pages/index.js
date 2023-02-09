import Head from "next/head";
import FileUploader from "./uploadFile";
import { Card, Text } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>GOSS</title>
        <meta name="description" content="Team-Innovators" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Card isHoverable css={{ mw: "400px" }}>
          <Card.Body>
            <FileUploader></FileUploader>
          </Card.Body>
        </Card>
      </main>
    </>
  );
}
