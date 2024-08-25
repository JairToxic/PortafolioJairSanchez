"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle } from 'react-icons/fa';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface Skill {
    name: string;
    level: string;
    percentage: number;
}

const useAnimatedProgress = (percentage: number): number => {
    const [animatedPercentage, setAnimatedPercentage] = useState<number>(0);

    useEffect(() => {
        let start = 0;
        const end = percentage;
        const duration = 1000; // Duration of the animation in ms
        const stepTime = 50; // Time between each step in ms

        const step = () => {
            if (start < end) {
                start += 1;
                setAnimatedPercentage(start);
                setTimeout(step, stepTime);
            }
        };

        step();
    }, [percentage]);

    return animatedPercentage;
};

interface SkillCardProps {
    skill: Skill;
    onClick: () => void;
}

const SkillCard = ({ skill, onClick }: SkillCardProps) => {
    const animatedPercentage = useAnimatedProgress(skill.percentage);

    return (
        <motion.div
            className="relative w-72 h-72 p-6 bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white rounded-lg shadow-lg flex flex-col items-center justify-center cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent opacity-30"></div>
            <div className="relative w-36 h-36 mb-4 flex items-center justify-center">
                <CircularProgressbar
                    value={animatedPercentage}
                    text={`${animatedPercentage}%`}
                    styles={buildStyles({
                        pathColor: 'rgb(245, 116, 28)', // Tomate
                        textColor: 'rgb(245, 116, 28)', // Tomate
                        trailColor: '#ffffff', // Fondo
                        strokeLinecap: 'round',
                    })}
                />
                <div className="absolute top-2 right-2 text-lg font-semibold text-gray-300">
                    <FaInfoCircle size={24} />
                </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{skill.name}</h3>
            <div className={`mt-1 text-sm font-medium ${skill.level === "Avanzado" ? "text-blue-300" : "text-gray-200"}`}>
                {skill.level}
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-100 text-sm opacity-0 hover:opacity-100 transition-opacity">
                ¡Haz clic para descubrir más!
            </div>
        </motion.div>
    );
};

interface SkillDetailsModalProps {
    skill: Skill;
    onClose: () => void;
}

const SkillDetailsModal = ({ skill, onClose }: SkillDetailsModalProps) => {
    const animatedPercentage = useAnimatedProgress(skill.percentage);

    return (
        <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                className="bg-white p-8 rounded-lg shadow-lg w-80 max-w-md relative"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                <div className="absolute top-4 right-4 text-gray-500 cursor-pointer hover:text-gray-700" onClick={onClose}>
                    &times;
                </div>
                <h2 className="text-2xl font-bold mb-4">{skill.name}</h2>
                <p className="text-gray-700 mb-4">Nivel: {skill.level}</p>
                <p className="text-gray-700 mb-4">Porcentaje: {skill.percentage}%</p>
                <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden mb-4">
                    <motion.div
                        className="absolute h-full bg-blue-600"
                        style={{ width: `${animatedPercentage}%` }}
                        initial={{ width: 0 }}
                        animate={{ width: `${animatedPercentage}%` }}
                        transition={{ duration: 1 }}
                    ></motion.div>
                </div>
                <h4 className="text-lg font-semibold mb-2">Subhabilidades:</h4>
                <ul className="list-disc list-inside mb-4">
                    <li>Subhabilidad 1</li>
                    <li>Subhabilidad 2</li>
                    <li>Subhabilidad 3</li>
                </ul>
                <button
                    className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </motion.div>
        </motion.div>
    );
};

const SkillsList = () => {
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

    const skills: Skill[] = [
        { name: "Inteligencia Artificial", level: "Avanzado", percentage: 90 },
        { name: "Azure Machine Learning", level: "Avanzado", percentage: 85 },
        { name: "Python", level: "Avanzado", percentage: 80 },
        { name: "JavaScript", level: "Intermedio", percentage: 70 },
        { name: "React.js", level: "Intermedio", percentage: 65 },
        { name: "Next.js", level: "Intermedio", percentage: 60 },
        { name: "Azure DevOps", level: "Intermedio", percentage: 70 },
        { name: "SQL", level: "Intermedio", percentage: 75 },
        { name: "HTML5", level: "Intermedio", percentage: 70 },
        { name: "CSS", level: "Intermedio", percentage: 65 },
    ].sort((a, b) => b.percentage - a.percentage);

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 pt-32 pb-32">
            <div className="relative z-10 w-full max-w-6xl">
                <h2 className="text-4xl font-extrabold mb-12 text-center text-white shadow-lg">
                    Mis Habilidades
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard
                            key={index}
                            skill={skill}
                            onClick={() => setSelectedSkill(skill)}
                        />
                    ))}
                </div>
                {selectedSkill && (
                    <SkillDetailsModal
                        skill={selectedSkill}
                        onClose={() => setSelectedSkill(null)}
                    />
                )}
            </div>
        </div>
    );
};

export default SkillsList;
