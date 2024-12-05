import Image from 'next/image';

export default function Humain() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Image 
                src="/img/human.svg" 
                alt="Human SVG" 
                width={500} 
                height={500} 
            />
        </div>
    );
}
