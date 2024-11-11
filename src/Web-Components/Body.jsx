import React from 'react';
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
                <button className="m-12 bg-[#0070f3] text-white text-lg px-6 py-1 rounded-xl">Registrarme</button>
            </div>
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
