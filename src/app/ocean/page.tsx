/* eslint-disable */
"use client";

import ModalContent from "~/components/ModalContent";
import PointRadar from "~/components/Radar";
import TrueOfFalse from "~/components/TrueOrFalse";
import HoleQuestions from "~/components/HoleQuestions";
import useQuizStore from "~/app/state/useQuizStore";
import QCMModal from "~/components/QCMModal";

export default function Ocean() {
    const {getQuestionById} = useQuizStore()
    const question2 = getQuestionById(2)
    if (question2)
        return (
            <>
                <video
                    autoPlay loop muted
                    className="object-cover top-0 left-0 fixed z-[-1] w-full h-full opacity-50 blur-sm"
                    src="video/ocean.mp4"
                />
                <div
                    className="flex items-center justify-center w-full"
                    style={{
                        backgroundImage: "url('/img/human.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                        height: "90vh",
                    }}
                >
                    {/* Points Radar */}
                    <QCMModal questionId={3} posX={202} posY={13}/>
                    <PointRadar posX={110} posY={32}>
                        <HoleQuestions questionId={"id" in question2 ? question2.id : 0} questionText={question2.questionType} blanks={question2.blanks ?? []} />
                    </PointRadar>
                    <PointRadar posX={-9} posY={32}>
                        <TrueOfFalse idQuestion={1} />
                    </PointRadar>
                    <QCMModal questionId={5} posX={-90} posY={40}/>
                </div>
                <div className="fixed bottom-0 right-0 p-2 m-1 bg-black bg-opacity-50 rounded-lg">
                    <a href="https://www.pexels.com/video/bird-s-eye-view-of-ocean-waves-1918465/" className="link font-thin">© Bird's Eye View of Ocean Waves</a>
                </div>
            </>
        );
    return "";
}