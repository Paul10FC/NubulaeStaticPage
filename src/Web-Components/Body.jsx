import React, {useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import robberImage from '../images/estafa.webp';
import contract from '../images/contratacion.webp';
import electrico from '../images/electrico.webp';
import services from '../images/services-variety.webp';
import community from '../images/community.webp';
import customer from '../images/customer.webp';

function ServiceSection() {
    const [showForm, setShowForm] = useState(false);
    const [SubmitedEvent, setSubmitedEvent] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        location: ''
    });

    const handleRegisterClick = () => {
        setShowForm(prevShowForm => !prevShowForm);
        setSubmitedEvent(false);
    };

    const handleSubmit = async () => {
        setSubmitedEvent(true);

        try {
            const response = await fetch('http://localhost:8080/register/new', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Formulario enviado');
            } else {
                console.log('Error al enviar el formulario');
            }
        } catch (error) {
            console.log('Error de red:', error);
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmitedEvent = () => {
        handleRegisterClick();
        handleSubmit();
        setFormData({
            name: '',
            email: '',
            message: '',
            location: ''
        });
    }


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1
    }

    return (
        <div className="w-3/4 m-auto mb-20">
            <div className="mt-20 rounded-lg">
                <h1 className='text-3xl mb-10'>Nuestra visión</h1>
                <Slider {...settings}>
                    {data.map(d => (
                    <div className="bg-white h-[350px] text-black rounded-xl">
                        <div className="rounded-t-xl bg-whit flex justify-center items-center">
                            <img src={d.image} alt="" className="h-44 rounded-full"/>
                        </div>

                        <div className={`flex flex-col justify-center items-center gap-4 p-4 bg-[#ffffff]`}>
                            <p className="text-xl font-semibold text-[#003366]">{d.title}</p>
                            <p className="h-20 overflow-hidden">{d.description}</p>
                        </div>
                    </div>
                    ))}
                </Slider>
                <button 
                    className="m-12 bg-[#0070f3] text-white text-lg px-6 py-1 rounded-xl"
                    onClick={handleRegisterClick}
                >
                    Registrarme
                </button>
            </div>

            {showForm && (
                <div className="bg-white w-1/2 m-auto p-4 rounded-xl transition-all duration-500">
                    <h1 className='text-3xl mb-10'>Regístrate</h1>
                    <form className="flex flex-col gap-4">
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Nombre" 
                            onChange={handleChange}
                            value={formData.name}
                            className="p-2 rounded-xl"
                        />

                        <input 
                            type="text" 
                            name='email'
                            placeholder="Correo" 
                            value={formData.email}
                            onChange={handleChange}
                            className="p-2 rounded-xl"
                        />

                        <input 
                            name='message'
                            type="text" 
                            placeholder="Que esperas de la plataforma" 
                            value={formData.message}
                            onChange={handleChange}
                            className="p-2 rounded-xl"
                        />

                        <input 
                            name='location'
                            type="location"
                            placeholder="¿En donde te interesa que demos servicio?" 
                            value={formData.location}
                            onChange={handleChange}
                            className="p-2 rounded-xl"
                        />

                        <button
                            type='button' 
                            className="bg-[#0070f3] text-white text-lg px-6 py-1 rounded-xl"
                            onClick={handleSubmitedEvent}
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            )}

            {SubmitedEvent && (
                <div className="bg-white w-1/2 m-auto p-4 rounded-xl transition-all duration-500">
                    <h3 className='text-2xl mb-10'>
                        Gracias por registrarte<br/><br />
                        Tu correo se encuentra en nuestra base de datos y seras notificado cuando la plataforma este lista<br /><br />
                        😎
                    </h3>
                </div>
            )}
        </div>
    );
}

const data = [
    {
        "title": "Evita Estafas",
        "description": "Nuestra plataforma incluye un sistema de calificaciones y reseñas para garantizar que solo los profesionales honestos y capacitados prosperen.",
        "image": robberImage
    },
    {
        "title": "Contratación Segura",
        "description": "El pago se retiene hasta que el trabajo se complete satisfactoriamente, protegiendo tu dinero y asegurando que recibas el servicio acordado.",
        "image": contract
    },
    {
        "title": "Verificación de Profesionales",
        "description": "Ofrecemos un proceso de verificación de antecedentes y certificaciones para asegurar que los proveedores de servicios sean confiables y calificados.",
        "image": electrico
    },
    {
        "title": "Variedad de Servicios",
        "description": "Encuentra y contrata fácilmente a electricistas, plomeros, mecánicos, albañiles y más, todo en un solo lugar.",
        "image": services
    },
    {
        "title": "Construcción de Comunidad",
        "description": "Crea confianza con una comunidad que recomienda y califica a los profesionales, fomentando un entorno de calidad y honestidad.",
        "image": community
    },
    {
        "title": "Protección al Consumidor",
        "description": "Si no estás satisfecho con el trabajo, te devolvemos tu dinero. Queremos asegurarnos de que siempre recibas lo que esperas.",
        "image": customer
    }
]
    


export default ServiceSection;
