import serviceImage from '../images/services.webp';
import roadmap from '../images/roadmap.webp';

export default function Component() {

    return (
        <div className="mt-10">
            <div>
                <h1 className="text-5xl">
                Nebulae
                </h1>
            </div>
            <div className="flex-auto mt-5">
                <p className="text-3xl mt-5 bg-[#5DADE2] text-[#F0F0F0] rounded-full px-5 py-5 inline-block">
                Tu seguridad, nuestra misión: confianza en cada conexión.
                </p>
                <div className='flex justify-items-center justify-center space-x-10 m-10'>
                    <div>
                    <h2 className="text-3xl mt-3 mb-5">
                        ¿Cómo funciona nuestra plataforma?
                    </h2>
                    <img src={roadmap} 
                        alt="services" 
                        className='h-auto max-w-screen-xl rounded-lg'/>    
                    </div>
                </div>
            </div>
        </div>
    );
}