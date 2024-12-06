"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const LyrecoChecker: React.FC = () => {
    const [typedCharacters, setTypedCharacters] = useState<string>('');
    const [isLyreco, setIsLyreco] = useState<boolean>(false);
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            const newTypedCharacters = typedCharacters + event.key;
            setTypedCharacters(newTypedCharacters);

            const lastSixCharacters = newTypedCharacters.slice(-6);
            if (lastSixCharacters === 'lyreco') {
                setIsLyreco(true);
            } else {
                setIsLyreco(false);
            }
        };

        document.body.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.removeEventListener('keydown', handleKeyDown);
        };
    }, [typedCharacters]);

    useEffect(() => {
        if (isLyreco && modalRef.current) {
            modalRef.current.showModal();
        }
    }, [typedCharacters, isLyreco]);

    return (
        <dialog className="modal" ref={modalRef}>
            <div className="modal-box">
                <h3 className="text-lg font-bold">Lyreco 💖</h3>
                <div className="flex flex-col items-center">
                    <a href="https://www.lyreco.com" target="_blank" rel="noreferrer">
                        <Image src="/img/logo/lyreco.png" alt="Lyreco" width={300} height={300} />
                    </a>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </div>
        </dialog>
    );
};

export default LyrecoChecker;
