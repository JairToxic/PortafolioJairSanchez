import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import Particles, { initParticlesEngine } from "@tsparticles/react";

export const CoverParticles = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        const initParticles = async () => {
            await initParticlesEngine(async (engine) => {
                await loadSlim(engine);
            });
            setInit(true);
        };

        initParticles();
    }, []);

    const particlesOptions = {
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none", // Asegúrate de que este valor sea aceptado
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                },
                value: 100,
            },
            opacity: {
                value: 0.6,
            },
            shape: {
                type: "star", // Asegúrate de que "star" sea un tipo válido
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    };

    return (
        init && (
            <div className="relative w-full h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                <Particles id="tsparticles" options={particlesOptions} />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">Welcome to My Page</h1>
                </div>
            </div>
        )
    );
};
