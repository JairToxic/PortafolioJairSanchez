"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Definir la interfaz para las propiedades del componente ProjectCard
interface ProjectCardProps {
    imageSrc: string;
    title: string;
    description: string;
    demoLink: string;
    githubLink: string;
    unlocked: boolean;
}

// Datos de los proyectos
const projects = [
    {
        id: 1,
        imageSrc: "/jair1.png",
        demoLink: "https://demo-proyecto1.com",
        githubLink: "https://github.com/usuario/proyecto1",
        title: "Sistema de Detección de Intrusos",
        description: "Sistema basado en visión por computadora que detecta intrusos en áreas restringidas, enviando alertas en tiempo real.",
    },
    {
        id: 2,
        imageSrc: "/jair1.png",
        demoLink: "https://demo-proyecto2.com",
        githubLink: "https://github.com/usuario/proyecto2",
        title: "Aplicación de Búsqueda de Imágenes",
        description: "Aplicación web para buscar imágenes similares utilizando modelos de aprendizaje profundo.",
    },
    {
        id: 3,
        imageSrc: "/jair1.png",
        demoLink: "https://demo-proyecto3.com",
        githubLink: "https://github.com/usuario/proyecto3",
        title: "Plataforma de Análisis de Sentimientos",
        description: "Plataforma que analiza sentimientos en tiempo real a partir de datos de redes sociales.",
    },
    {
        id: 4,
        imageSrc: "/jair1.png",
        demoLink: "https://demo-proyecto4.com",
        githubLink: "https://github.com/usuario/proyecto4",
        title: "Sistema de Recomendación de Películas",
        description: "Sistema que recomienda películas basado en preferencias del usuario y análisis de datos.",
    },
    {
        id: 5,
        imageSrc: "/jair1.png",
        demoLink: "https://demo-proyecto5.com",
        githubLink: "https://github.com/usuario/proyecto5",
        title: "Generador de Contenidos Automáticos",
        description: "Herramienta que genera textos automáticamente utilizando modelos de lenguaje avanzados.",
    },
    {
        id: 6,
        imageSrc: "/jair1.png",
        demoLink: "https://demo-proyecto6.com",
        githubLink: "https://github.com/usuario/proyecto6",
        title: "Aplicación de Seguimiento de Ejercicios",
        description: "Aplicación móvil para seguimiento de rutinas de ejercicios y análisis de progreso.",
    },
    // Añadir más proyectos si es necesario
];

// Componente para mostrar la tarjeta del proyecto
const ProjectCard = ({ imageSrc, title, description, demoLink, githubLink, unlocked }: ProjectCardProps) => (
    <motion.div
        whileHover={{ scale: 1.05, rotate: 2 }}
        className={`relative rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 ${unlocked ? '' : 'blur-sm'}`}
    >
        <div className="absolute top-2 right-2 text-xs bg-red-500 text-white py-1 px-2 rounded-full">
            {unlocked ? "Nuevo!" : "Bloqueado"}
        </div>
        <div className="overflow-hidden rounded-t-lg">
            <Image
                src={imageSrc}
                alt={title}
                layout="responsive"
                width={500}
                height={300}
                className="object-cover hover:scale-110 transition-transform duration-500"
            />
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-b-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
            <p className="text-gray-700 mb-6">{description}</p>
            <div className="flex justify-between">
                <Link href={unlocked ? demoLink : "#"} passHref>
                    <motion.a
                        whileHover={{ scale: 1.1, backgroundColor: '#3182CE', color: '#fff', boxShadow: '0px 0px 15px 4px #3182CE' }}
                        className={`text-blue-600 border border-blue-600 px-4 py-2 rounded-lg transition-colors ${unlocked ? 'hover:bg-blue-600 hover:text-white' : 'cursor-not-allowed opacity-50'}`}
                        target={unlocked ? "_blank" : ""}
                        rel="noopener noreferrer"
                    >
                        Ver Demo
                    </motion.a>
                </Link>
                <Link href={unlocked ? githubLink : "#"} passHref>
                    <motion.a
                        whileHover={{ scale: 1.1, backgroundColor: '#333333', color: '#fff', boxShadow: '0px 0px 15px 4px #333333' }}
                        className={`text-gray-900 border border-gray-600 px-4 py-2 rounded-lg transition-colors ${unlocked ? 'hover:bg-gray-900 hover:text-white' : 'cursor-not-allowed opacity-50'}`}
                        target={unlocked ? "_blank" : ""}
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </motion.a>
                </Link>
            </div>
        </div>
    </motion.div>
);

// Componente principal que renderiza los proyectos y el botón para desbloquear más
const Projects = () => {
    const [unlockedProjects, setUnlockedProjects] = useState<number[]>([1]);

    // Función para desbloquear proyectos
    const handleUnlockProject = (id: number) => {
        if (id <= projects.length) {
            setUnlockedProjects([...unlockedProjects, id]);
        }
    };

    return (
        <div className="relative">
            <section className="py-20 px-8 pb-24"> {/* Ajustar el padding bottom para evitar que el botón interfiera */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.map(project => (
                        <ProjectCard
                            key={project.id}
                            imageSrc={project.imageSrc}
                            title={project.title}
                            description={project.description}
                            demoLink={project.demoLink}
                            githubLink={project.githubLink}
                            unlocked={unlockedProjects.includes(project.id)}
                        />
                    ))}
                </div>
            </section>
            {/* Botón flotante para desbloquear proyectos */}
            <div className="fixed bottom-8 right-8 z-50 hidden md:block">
                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: '#2B6CB0', color: '#fff' }}
                    className="bg-blue-600 text-white border border-blue-700 px-6 py-3 rounded-full shadow-lg transition-colors hover:bg-blue-700"
                    onClick={() => handleUnlockProject(unlockedProjects.length + 1)}
                    disabled={unlockedProjects.length >= projects.length}
                >
                    {unlockedProjects.length >= projects.length ? "Todos los Proyectos Desbloqueados" : "Desbloquear Siguiente Proyecto"}
                </motion.button>
            </div>
            {/* Botón visible solo en móviles */}
            <div className="fixed top-8 right-8 md:hidden z-50">
                <motion.button
                    whileHover={{ scale: 1.1, backgroundColor: '#2B6CB0', color: '#fff' }}
                    className="bg-blue-600 text-white border border-blue-700 px-6 py-3 rounded-full shadow-lg transition-colors hover:bg-blue-700"
                    onClick={() => handleUnlockProject(unlockedProjects.length + 1)}
                    disabled={unlockedProjects.length >= projects.length}
                >
                    {unlockedProjects.length >= projects.length ? "Todos los Proyectos Desbloqueados" : "Desbloquear Siguiente Proyecto"}
                </motion.button>
            </div>
        </div>
    );
};

export default Projects;
