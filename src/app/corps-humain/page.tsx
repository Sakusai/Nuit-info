import ModalContent from "~/components/ModalContent";
import PointRadar from "~/components/Radar";

export default function Ocean() {
    return (
        <>
            <video
                autoPlay loop muted
                className="object-cover top-0 left-0 fixed z-[-1] w-full h-full opacity-50 blur-sm"
                src="video/human.mp4"
            />
            <div className="flex flex-col items-center justify-center flex-1">
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
                </div>
            </div>

            <div className="fixed bottom-0 right-0 p-2 m-1 bg-black bg-opacity-50 rounded-lg">
                <a href="https://www.pexels.com/video/scenic-mountain-hiking-adventure-in-washington-29650692/" className="link font-thin">© Scenic Mountain Hiking Adventure in Washington
                </a>
            </div>
        </>
    );
}