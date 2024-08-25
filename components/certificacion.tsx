    "use client";

    import Image from 'next/image';
    import Link from 'next/link';
    import { motion } from 'framer-motion';

    // Array de certificaciones con imágenes y enlaces
    const certifications = [
        {
            id: 1,
            imageSrc: "/english.png",
            link: "https://aps.cec-epn.edu.ec/diplomas/2023/LINGUISTICA/2/diploma_208657_52284-signed.pdf",
            alt: "English B2",
            name: "English B2",
            date: "2023"
        },
        {
            id: 2,
            imageSrc: "/Industria4.0.png",
            link: "https://www.udemy.com/certificate/UC-de835214-b594-4b53-82ea-46ea5acde99d/",
            alt: "Certificación de nuevas Tecnologías",
            name: "Certificación de nuevas Tecnologías",
            date: "2024"
        },
        {
            id: 3,
            imageSrc: "/Industria.png",
            link: "https://www.udemy.com/certificate/UC-52f431ba-e7fd-4dca-940d-3d85552a747d/",
            alt: "Certificación de Industria 4.0",
            name: "Certificación de Industria 4.0",
            date: "2024"
        },
        {
            id: 4,
            imageSrc: "/CopilotSecurity.png",
            link: "https://www.credly.com/badges/76202c98-7abe-44e2-aad8-22169bdbaebb/linked_in_profile",
            alt: "Participante del año fiscal 2024 de Microsoft Copilot for Security Sales Training",
            name: "Microsoft Copilot for Security Sales Training",
            date: "2024"
        },
        {
            id: 5,
            imageSrc: "/sc900.png",
            link: "https://learn.microsoft.com/es-es/users/jairsanchez-7034/credentials/a1310d58a4978a31?ref=https%3A%2F%2Fwww.linkedin.com%2F",
            alt: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
            name: "Security, Compliance, and Identity Fundamentals",
            date: "2024"
        },
        {
            id: 6,
            imageSrc: "/Cyberseguridad.png",
            link: "https://www.udemy.com/certificate/UC-ba1c6182-39d0-42cc-897b-45e76be5da2e/",
            alt: "Cyberseguridad",
            name: "Cyberseguridad",
            date: "2024"
        },
        {
            id: 7,
            imageSrc: "/Criptografia.png",
            link: "https://www.udemy.com/certificate/UC-b5dfb9b5-fd9f-4a96-817b-55ddab6e427c/",
            alt: "Criptografía",
            name: "Criptografía",
            date: "2024"
        },
        {
            id: 8,
            imageSrc: "/NetworkDefense.png",
            link: "file:///C:/Users/algui/Downloads/ECC-NDE-Certificate.pdf",
            alt: "Network Defense Essentials",
            name: "Network Defense Essentials",
            date: "2024"
        },
        {
            id: 9,
            imageSrc: "/ai102.png",
            link: "https://learn.microsoft.com/es-es/users/jairsanchez-7034/credentials/b34757764241fdd2?ref=https%3A%2F%2Fwww.linkedin.com%2F",
            alt: "Microsoft Certified: Azure AI Engineer Associate",
            name: "Microsoft Certified: Azure AI Engineer Associate",
            date: "2024"
        },
        {
            id: 10,
            imageSrc: "/Copilot.png",
            link: "https://www.credly.com/badges/f6b4ac0b-22c9-43be-a551-3dc26ec24ed0/linked_in_profile",
            alt: "Level Up CSP Copilot for M365 Technical Champion",
            name: "Level Up CSP Copilot for M365 Technical Champion",
            date: "2024"
        },
        {
            id: 11,
            imageSrc: "/Azure Data Scientist Associate.png",
            link: "https://learn.microsoft.com/es-es/users/jairsanchez-7034/credentials/4674fa0ec4efd2d4?ref=https%3A%2F%2Fwww.linkedin.com%2F",
            alt: "Microsoft Certified: Azure Data Scientist Associate",
            name: "Microsoft Certified: Azure Data Scientist Associate",
            date: "2024"
        },
        {
            id: 12,
            imageSrc: "/Azure Cosmos DB Developer Specialty.png",
            link: "https://learn.microsoft.com/api/credentials/share/es-es/jairsanchez-7034/C0F7E60CBCFCCD2B?sharingId",
            alt: "Microsoft Certified: Azure Cosmos DB Developer Specialty",
            name: "Microsoft Certified: Azure Cosmos DB Developer Specialty",
            date: "2024"
        },
        {
            id: 13,
            imageSrc: "/Azure Data Engineer Associate.png",
            link: "https://learn.microsoft.com/es-es/users/jairsanchez-7034/credentials/767AEA03F2F3FAB1?ref=https%3A%2F%2Fwww.linkedin.com%2F",
            alt: "Microsoft Certified: Azure Data Engineer Associate",
            name: "Microsoft Certified: Azure Data Engineer Associate",
            date: "2024"
        },
        {
            id: 14,
            imageSrc: "/Fabric.png",
            link: "https://learn.microsoft.com/es-es/users/jairsanchez-7034/credentials/certification/fabric-analytics-engineer-associate?tab=credentials-tab",
            alt: "Microsoft Certified: Fabric Analytics Engineer Associate",
            name: "Microsoft Certified: Fabric Analytics Engineer Associate",
            date: "2024"
        },
    ];

    const Certifications = () => {
        return (
            <section className="py-10 px-5 mb-16">
                <h2 className="text-3xl font-bold mb-8 text-center">Mis Certificaciones</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {certifications.map(cert => (
                        <motion.div
                            key={cert.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative overflow-hidden rounded-lg shadow-lg"
                        >
                            <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={cert.imageSrc}
                                    alt={cert.alt}
                                    layout="responsive"
                                    width={500}
                                    height={300}
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gray-800 bg-opacity-75 text-white text-center py-2">
                                    <p className="text-sm font-semibold">{cert.name}</p>
                                    <p className="text-xs">{cert.date}</p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>
        );
    };

    export default Certifications;
