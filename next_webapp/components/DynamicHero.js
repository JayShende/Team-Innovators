/* eslint-disable @next/next/no-img-element */
import { Image, Card, Text, Row, Button, Spacer } from "@nextui-org/react";
import { useEffect, useState } from "react";
import styles from "../styles/dynamic.module.css";
import { Player } from "@lottiefiles/react-lottie-player";

export default function DynamicHero({ imgLink, garbageName }) {
  const quotation__text = [
    "Garbage classification reduces the mutual pollution between different garbage, which is beneficial to the recycling of materials.",
    "Garbage classification is conducive to the separation of ecological waste and non-ecological waste, reducing the difficulty of waste disposal.",
    "Harmful garbage separation reduces the content of heavy metal pathogenic bacteria in the garbage and reduces the risk of secondary pollution of water, air and soil. ",
    "Garbage classification is conducive to reducing the final waste disposal volume.",
    " Garbage classification is conducive to enhancing the degree of social civilization.",
  ];
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    
    setTimeout(() => {
      setLoading(true);
    }, 4000);
  }, []);
  return loading ? (
    <main>
      <Image
        css={{
          w: "30vw",
        }}
        className={styles.logo}
        src="logo.png"
        alt=""
      ></Image>
      <div className={styles.disc}>
        <img src={imgLink} alt="" className={styles.discImage} />
        <div className={styles.discText}>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, #39b54a -20%, #1b8d73 50%",
            }}
            weight="bold"
          >
            {garbageName}
          </Text>
          <Spacer y={1} />
          <Text size="$2xl">
            {
              quotation__text[
                Math.floor(Math.random() * quotation__text.length)
              ]
            }
            <br />
            <br />
            <b>Did you know ???</b>
            <Spacer y={0.5} />
            Official numbers say that we generate more tha n 62 million tonnes
            of municipal solid waste but only 43 million tonnes is collected. Of
            the 43 million tonnes collected, municipalities are forced to dump
            more than 31 million in landfills due to its mixed nature.
          </Text>
        </div>
      </div>
    </main>
  ) : (
    <div className={styles.loading}>
      <Player
        autoplay
        loop
        src="bin.json"
        style={{ height: "400px", width: "400px" }}
      ></Player>
      <Text h1>Processing...</Text>
    </div>
  );
}
