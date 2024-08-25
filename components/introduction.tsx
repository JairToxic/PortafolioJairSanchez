import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Introduction = () => {
    return (
        <div className="z-20 w-full bg-darkBg/60">
            <div className="z-20 grid grid-cols-1 md:grid-cols-2 items-center h-full p-6 py-20 md:py-0">
                {/* Ajuste de la sección de la imagen */}
                <div className="flex justify-center md:justify-start mb-6 md:mb-0">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: -50 }}
                        whileInView={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                        className="relative w-60 h-60 md:w-72 md:h-72" // Tamaño de la imagen ajustado
                    >
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full h-full overflow-hidden" // Asegura que la imagen se recorte correctamente
                        >
                            <Image
                                src="/jair1.png"
                                layout="fill"
                                objectFit="cover" // Mantiene la proporción de la imagen
                                className="rounded-full"
                                alt="Avatar"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                </div>
                <div className="flex flex-col justify-center max-w-md">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">
                        Si puedes pensarlo, <br />
                        <TypeAnimation
                            sequence={[
                                'puedes programarlo',
                                1000,
                                'puedes optimizarlo',
                                1000,
                                'puedes implementarlo',
                                1000,
                                'puedes desarrollarlo',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>
                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8">
                        Con más de 2 años de experiencia en el campo de la tecnología y la informática, he desarrollado una sólida base de conocimientos en inteligencia artificial (IA) y ciberseguridad. Actualmente, me desempeño como Desarrollador de IA, donde aplico mi experiencia en IA para crear soluciones innovadoras y escalables.
                    </p>
                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Ver proyectos
                        </a>
                        <a href="/contact" className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary">
                            Contacta conmigo
                        </a>
                    </div>
                </div>
                {/* Eliminado el espacio extra al final */}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            
        </div>
    );
}

export default Introduction;
