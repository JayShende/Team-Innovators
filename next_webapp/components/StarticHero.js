import FileUploader from "../components/uploadFile";
import { Card, Spacer } from "@nextui-org/react";
import Quotation from "@/components/Quotation";
import { Player } from "@lottiefiles/react-lottie-player";

export default function StarticHero({
  quotation__text,
  quotation_index,
  btnClick,
  imgLink,
  setImgLink,
  disableStarticHero,
}) {
  return (
    <>
      <Spacer y={3} />
      <main>
        <h1 className="heading">Going beyond the value of Plastic.</h1>
        <p className="discription">
          Developing a decentralized & transparent plastic credit ecosystem.
        </p>
        <Spacer y={2} />
        <Player
          autoplay
          loop
          src="Delete.json"
          style={{ height: "400px", width: "400px" }}
        ></Player>
        <Spacer y={3} />
        <Card isHoverable css={{ mw: "400px", p: "$6", borderRadius: "100px" }}>
          <Card.Body onClick={btnClick}>
            <FileUploader
              setImgLink={setImgLink}
              imgLink={imgLink}
              disableStarticHero={disableStarticHero}
            ></FileUploader>
          </Card.Body>
        </Card>
        <Spacer y={1} />
        <Quotation
          quotation__text={quotation__text}
          quotation_index={quotation_index}
        ></Quotation>
      </main>
      <Spacer y={3} />
    </>
  );
}
