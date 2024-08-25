"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
    name: string;
    email: string;
    message: string;
}

const ContactMe: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmissionStatus(null);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmissionStatus("success");
        }, 2000);
    };

    return (
        <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 p-8 bg-white rounded-lg shadow-lg max-w-lg w-full">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    Contáctame
                </h2>
                {submissionStatus === "success" && (
                    <div className="mb-4 text-green-600 text-center">¡Mensaje enviado con éxito!</div>
                )}
                {submissionStatus === "error" && (
                    <div className="mb-4 text-red-600 text-center">Hubo un error al enviar el mensaje.</div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className={`px-6 py-3 text-white font-bold rounded-lg transition-transform transform hover:scale-105 ${
                                isSubmitting ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
                            }`}
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactMe;
