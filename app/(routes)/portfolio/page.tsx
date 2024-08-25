import Image from "next/image";
import Link from "next/link";

import { dataPortfolio } from "@/data";

import AvatarPortfolio from "@/components/avatar-portfolio";
import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container-page";
import Projects from "@/components/proyectosJair";


const PortfolioPage = () => {

    return (
        <ContainerPage>
            <TransitionPage />
            <div className="flex flex-col justify-center h-full">
                <h1 className="text-2xl leading-tight text-center md:text-4xl md:mb-5">Mis últimos <span className="font-bold text-secondary">trabajos realizados</span></h1>
                <Projects />
                
            </div>
        </ContainerPage>
    );
}

export default PortfolioPage;