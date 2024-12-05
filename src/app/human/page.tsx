import Image from 'next/image';

export default function Humain() {
    return (
        <div 
            className="flex justify-center items-center flex-1"
            style={{
                backgroundImage: "url('/img/background.svg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex justify-center items-center" style={{ maxHeight: '80vh' }}>
                <Image 
                    src="/img/human.svg" 
                    alt="Human SVG" 
                    width={0}  
                    height={0} 
                    style={{
                        width: 'auto',   
                        height: 'auto',  
                        maxHeight: '70vh' 
                    }}
                />
            </div>
        </div>
    );
}
