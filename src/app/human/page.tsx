import ModalContent from "~/components/ModalContent";
import PointRadar from "~/components/Radar";

export default function Ocean() {
    return (
        <>
            <video
                autoPlay loop muted
                className="object-cover top-0 left-0 fixed z-[-1] w-full h-full opacity-50 blur-sm"
                src="video/ocean.mp4"
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
                    <PointRadar posX={51} posY={13}>
                        <ModalContent title="Ocean" content="The ocean is a vast body of saltwater that">
                            <p>covers 71 percent of the Earth's surface.</p>
                        </ModalContent>
                    </PointRadar>
                </div>
            </div>

            <div className="fixed bottom-0 right-0 p-2 m-1 bg-black bg-opacity-50 rounded-lg">
                <a href="https://www.pexels.com/video/bird-s-eye-view-of-ocean-waves-1918465/" className="link font-thin">© Bird's Eye View of Ocean Waves</a>
            </div>
        </>
    );
}