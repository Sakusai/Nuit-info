"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Clicker: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [nbClick, setNbClick] = useState(0);
    const [buttonPosition, setButtonPosition] = useState({ x: 1000, y: 500 });
    const [island1Position, setIsland1Position] = useState({x : 1000, y : 200});
    const [island2Position, setIsland2Position] = useState({x : 508, y : 100});
    const [island3Position, setIsland3Position] = useState({x : 45, y : 18});
    const [island4Position, setIsland4Position] = useState({x : 800, y : 35});
    const [island5Position, setIsland5Position] = useState({x : 200, y : 700});
    const [island6Position, setIsland6Position] = useState({x : 900, y : 200});
    const [island7Position, setIsland7Position] = useState({x : 310, y : 400});
    const [coule, setCoule] = useState(false)

    const getRandomPosition = () => {
        const x = Math.random() * (window.innerWidth - 100); // 100 pour la largeur du bouton
        const y = Math.random() * (window.innerHeight - 50); // 50 pour la hauteur du bouton
        return { x, y };
    };

    const setRandomPosition = () => {
        const newPosition = getRandomPosition();
        setButtonPosition(newPosition);
        const new1Position = getRandomPosition();
        setIsland1Position(new1Position);
        const new2Position = getRandomPosition();
        setIsland2Position(new2Position);
        const new3Position = getRandomPosition();
        setIsland3Position(new3Position);
        const new4Position = getRandomPosition();
        setIsland4Position(new4Position);
        const new5Position = getRandomPosition();
        setIsland5Position(new5Position);
        const new6Position = getRandomPosition();
        setIsland6Position(new6Position);
        const new7Position = getRandomPosition();
        setIsland7Position(new7Position);
    }
    const handleMouseMove = (event: MouseEvent) => {
        setPosition({
            x: event.clientX,
            y: event.clientY,
        });
    };

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const incrementNbClick = () => {
        setNbClick(nbClick+1);
        setCoule(false)
        setRandomPosition()
    }

    const reset = () => {
        setNbClick(0)
        setCoule(true)
        setRandomPosition()
    }
    return (
        <div className="relative w-screen overflow-hidden bg-blue-500 clicker-page clicker-div">
            <img
                src="/clicker/img/bateau1-1.png"
                alt="Cursor Follower"
                className="fixed pointer-events-none transition-transform duration-75"
                style={{
                    top: position.y,
                    left: position.x,
                    transform: "translate(-50%, -50%)",
                    width: "80px",
                    height: "80px",
                    zIndex: 100,
                }}
            />
            <div className="clicker-div">
                <button className="clicker-button" onClick={incrementNbClick}
                        style={{
                            position: "absolute",
                            top: buttonPosition.y,
                            left: buttonPosition.x,
                        }}>
                    <Image src="/clicker/img/cookie.png"
                           width={150}
                           height={150}
                           alt="Island"
                    ></Image>
                </button>
                <div onMouseOver={reset}
                    style={{
                        borderRadius: "100%",
                        position: "absolute",
                        top: island1Position.y,
                        left: island1Position.x,
                    }}>
                    <Image src="/clicker/img/plastic.png"
                           width={150}
                           height={150}
                           alt="Island"
                    ></Image>
                </div>
                <div onMouseOver={reset}
                    style={{
                        borderRadius: "100%",
                        position: "absolute",
                        top: island2Position.y,
                        left: island2Position.x,
                    }}>
                    <Image src="/clicker/img/plastic.png"
                           width={150}
                           height={150}
                           alt="Island"
                    ></Image>
                </div>
                <div onMouseOver={reset}
                    style={{
                        borderRadius: "100%",
                        position: "absolute",
                        top: island3Position.y,
                        left: island3Position.x,
                    }}>
                    <Image src="/clicker/img/plastic.png"
                           width={150}
                           height={150}
                           alt="Island"
                    ></Image>
                </div>
                <div onMouseOver={reset}
                    style={{
                        borderRadius: "100%",
                        position: "absolute",
                        top: island4Position.y,
                        left: island4Position.x,
                    }}>
                    <Image src="/clicker/img/plastic.png"
                           width={150}
                           height={150}
                           alt="Island"
                    ></Image>
                </div>
                <div onMouseOver={reset}
                    style={{
                        borderRadius: "100%",
                        position: "absolute",
                        top: island5Position.y,
                        left: island5Position.x,
                    }}>
                    <Image src="/clicker/img/plastic.png"
                           width={150}
                           height={150}
                           alt="Island"
                    ></Image>
                </div>
                <div onMouseOver={reset}
                    style={{
                        borderRadius: "100%",
                        position: "absolute",
                        top: island6Position.y,
                        left: island6Position.x,
                    }}>
                    <Image src="/clicker/img/plastic.png"
                           width={150}
                           height={150}
                           alt="Island"
                    ></Image>
                </div>
                <div onMouseOver={reset}
                style={{
                    borderRadius: "100%",
                    position: "absolute",
                    top: island7Position.y,
                    left: island7Position.x,
                }}>
                    <Image src="/clicker/img/plastic.png"
                           width={150}
                           height={150}
                           alt="Island"
                    ></Image>
                </div>
            </div>

            <div className="clicker-point">{coule ? "Vous avez coulé à cause des déchets plastiques..." : `Cookie : ${nbClick}`}</div>
        </div>
    );
};

export default Clicker;