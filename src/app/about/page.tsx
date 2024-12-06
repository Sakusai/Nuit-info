"use client";

import Image from 'next/image';
import { useRef } from 'react';
import raceForWaterImage from '~/../public/img/logo/race_for_water.png';

const enum Role {
    Leader = 'Leader',
    Developer = 'Developer',
}

interface TeamMember {
    name: string;
    role: Role;
    lyreco?: boolean;
}

const teamMembers: TeamMember[] = [
    { name: 'Maton Erwann', role: Role.Leader },
    { name: 'Legros Enzo', role: Role.Developer },
    { name: 'Clochette Baptiste', role: Role.Developer },
    { name: 'Levis Lohan', role: Role.Developer },
    { name: 'Udycz Alexis', role: Role.Developer },
    { name: 'Brebant Noa', role: Role.Developer, lyreco: true },
];

export default function About() {
    const modalRef = useRef<HTMLDialogElement>(null);

    return (
        <div className="m-10 flex flex-col gap-5">
            <h1 className="text-4xl text-center font-bold">À propos</h1>
            <div className="flex flex-col gap-5">
                <Section title="L'association : Race for water">
                    <div className="flex gap-5 items-center">
                        <Image
                            src={raceForWaterImage}
                            alt="Race for Water"
                            width={500}
                            height={300}
                            className="m-auto rounded-xl"
                        />
                        <p className="text-justify">
                            Créée en <strong>2010</strong> par <strong>Marco Simeoni</strong>, entrepreneur suisse passionné par la mer, la Fondation <em>Race for Water</em> est une
                            organisation dédiée à la préservation des océans. Connue pour ses <em>Odyssées mondiales</em> à bord de navires
                            révolutionnaires au service des océans, la Fondation étudie, depuis plus de <strong>10 ans</strong>, l’impact de la pollution plastique
                            sur les écosystèmes et la santé humaine, tout en apportant aux communautés locales des solutions pertinentes afin
                            d&apos;empêcher les déchets plastiques d&apos;atteindre les cours d&apos;eau.
                        </p>
                    </div>
                </Section>
                <Section title="Le projet « Avenir Océan »">
                    <div className="flex flex-col gap-5 items-center">
                        <Image
                            src="https://placehold.co/600x400"
                            alt="placeholder"
                            width={600}
                            height={400}
                            className="m-auto rounded-xl shadow-lg"
                        />
                        <p className="text-justify">
                            Nous sommes <strong>EKIP</strong>, étudiants au CNAM de REIMS (ainsi que du CESI de REIMS). Notre équipe est composée de 6 membres :
                        </p>
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
                        <div className="flex flex-wrap gap-4 justify-center">
                            {teamMembers.map((member) => (
                                <TeamCard key={member.name} name={member.name} role={member.role} onLyreco={() => {
                                    if (member.lyreco) {
                                        modalRef.current?.showModal();
                                    }
                                }} isLyreco={Boolean(member.lyreco)} />
                            ))}
                        </div>
                    </div>
                </Section>
                <Section title="Le podcast">
                    <div className="flex flex-col items-center gap-5">
                        <p className="text-justify">
                            Notre podcast <strong>Avenir Océan</strong> est un projet de sensibilisation à la pollution plastique des océans. Nous avons pour objectif de
                            sensibiliser le grand public à la pollution plastique des océans, à ses conséquences et à ses solutions. Pour cela, nous
                            avons réalisé une série de podcasts qui abordent différents aspects de la pollution plastique des océans.
                        </p>
                        <div className="flex flex-wrap gap-5 justify-center">
                            <video
                                src="\videos\CaChauffe.mp4"
                                width={400} 
                                height={300}
                                className="rounded-xl shadow-lg"
                                controls
                            />
                            <video
                                src="\videos\Plancton.mp4"
                                width={400} 
                                height={300}
                                className="rounded-xl shadow-lg"
                                controls
                            />
                        </div>
                    </div>
                </Section>
                <Section title="Le jingle">
                    <div className="flex flex-col items-center gap-5">
                        <p className="text-justify">
                            Notre jingle a été créé par <strong>Udycz Alexis</strong>, membre de l'équipe EKIP. Il a été réalisé à l'aide du logiciel <strong>GarageBand</strong> d'Apple.
                        </p>
                        <audio
                            src="\videos\jingle.mp3"
                            className="rounded-xl shadow-lg"
                            controls
                        />
                    </div>
                    </Section>

            </div>
        </div>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-5">
            <h2 className="text-xl text-center font-bold hover:scale-105 transition-transform">{title}</h2>
            {children}
        </div>
    );
}

function TeamCard({ name, role, onLyreco, isLyreco }: { name: string; role: Role, onLyreco: () => void, isLyreco: boolean }) {
    const badge = role === Role.Leader ? 'badge-primary' : 'badge-secondary';
    return (
        <div className="card w-60 bg-base-100 shadow-xl hover:scale-105 transition-transform">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className="flex justify-center items-center gap-2">
                    <div className={`badge ${badge}`}>{role}</div>
                    {isLyreco && <a onClick={() => onLyreco()} className="badge badge-success cursor-pointer">🌟</a>}
                </div>
            </div>
        </div>
    );
}
