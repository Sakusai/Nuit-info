/* eslint-disable */
import ModalContent from "~/components/ModalContent";
import QCMModal from "~/components/QCMModal";
import PointRadar from "~/components/Radar";
import TrueOfFalse from "~/components/TrueOrFalse";

export default function Ocean() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="fixed left-0 top-0 z-[-1] h-full w-full object-cover opacity-50 blur-sm"
        src="video/human.mp4"
      />
      <div className="flex flex-1 flex-col items-center justify-center">
        <div
          style={{
            backgroundImage: "url('/img/human.png')",
            backgroundSize: "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            width: "90vh",
            height: "90vh",
          }}
        >
          <QCMModal questionId={7} posX={52} posY={13} />
        </div>
      </div>

      <div className="fixed bottom-0 right-0 m-1 rounded-lg bg-black bg-opacity-50 p-2">
        <a
          href="https://www.pexels.com/video/scenic-mountain-hiking-adventure-in-washington-29650692/"
          className="link font-thin"
        >
          © Scenic Mountain Hiking Adventure in Washington
        </a>
      </div>
    </>
  );
}
