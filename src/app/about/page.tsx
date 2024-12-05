import Image from 'next/image';
import raceForWaterImage from '~/../public/img/logo/race_for_water.png';

const enum Role {
    Leader = 'Leader',
    Developer = 'Developer',
}

const teamMembers = [
    { name: 'Maton Erwann', role: Role.Leader },
    { name: 'Legros Enzo', role: Role.Developer },
    { name: 'Clochette Baptiste', role: Role.Developer },
    { name: 'Levis Lohan', role: Role.Developer },
    { name: 'Udycz Alexis', role: Role.Developer },
    { name: 'Brebant Noa', role: Role.Developer },
];

export default function About() {
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
                            d'empêcher les déchets plastiques d’atteindre les cours d’eau.
                        </p>
                    </div>
                </Section>
                <Section title="Le projet : NOM_DU_PROJET">
                    <div className="flex flex-col gap-5 items-center">
                        <img src="https://placehold.co/600x400" alt="placeholder" className="m-auto rounded-xl shadow-lg" />
                        <p className="text-justify">
                            Nous sommes <strong>EKIP</strong>, étudiants au CNAM de REIMS (ainsi que du CESI de REIMS). Notre équipe est composée de 6 membres :
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            {teamMembers.map((member) => (
                                <TeamCard key={member.name} name={member.name} role={member.role}/>
                            ))}
                        </div>
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

function TeamCard({ name, role }: { name: string; role: Role }) {
    const badge = role === Role.Leader ? 'badge-primary' : 'badge-secondary';
    return (
        <div className="card w-60 bg-base-100 shadow-xl hover:scale-105 transition-transform">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <div className={`badge ${badge}`}>{role}</div>
            </div>
        </div>
    );
}
