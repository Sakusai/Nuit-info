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
                    className="object-cover top-0 left-0 fixed z-[-1] w-full h-full opacity-50"
                    src="video/ocean.mp4"
                />
                <div
                    className="flex items-center justify-center w-full h-screen"
                    style={{
                        backgroundImage: "url('/img/human.png')",
                        backgroundSize: "contain",
                        backgroundPosition: "center center",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* Points Radar */}
                    <PointRadar posX={202} posY={13}>
                        <QCMModal questionId={4}  />
                    </PointRadar>
                    <PointRadar posX={110} posY={32}>
                        <HoleQuestions questionId={"id" in question2 ? question2.id : 0} questionText={question2.questionType} blanks={question2.blanks ?? []} />
                    </PointRadar>
                    <PointRadar posX={-9} posY={32}>
                        <TrueOfFalse idQuestion={1} />
                    </PointRadar>
                    <PointRadar posX={-90} posY={40}>
                        <ModalContent title="jambe" content="Mountains rise high into the atmosphere.">
                            <p>They are natural wonders on Earth.</p>
                        </ModalContent>
                    </PointRadar>
                </div>
            </>
        );
    return "";
}