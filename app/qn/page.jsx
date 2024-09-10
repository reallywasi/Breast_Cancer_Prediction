// app/qn/page.jsx

import fs from 'fs';
import path from 'path';

const fetchData = async () => {
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return jsonData;
};

export default async function Page() {
    const data = await fetchData();

    return (
        <div className="container mx-auto p-6">
            <header className="mb-6">
                <h1 className="text-4xl font-bold text-blue-600 mb-2">LeetCode</h1>
                <h2 className="text-2xl text-gray-800">Two Sum - Problem #1</h2>
            </header>

            <nav className="mb-6">
                <ul className="flex space-x-6">
                    {data.navLinks.map(link => (
                        <li key={link.id}>
                            <a href={`#${link.id}`} className="text-blue-500 hover:underline font-medium">{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            {data.problem && (
                <section id={data.problem.id} className="mb-6 p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
                        {data.problem.title}
                    </h2>
                    <p className="text-gray-700 mb-4">{data.problem.content}</p>
                    {data.problem.example && (
                        <div className="mt-4">
                            <h3 className="text-xl font-semibold text-blue-600">Example:</h3>
                            <pre className="bg-gray-100 p-4 rounded-lg text-gray-800 mt-2">
                                <code>{data.problem.example.input}</code>
                                <code className="block mt-2">{data.problem.example.output}</code>
                                <code className="block mt-2">{data.problem.example.explanation}</code>
                            </pre>
                        </div>
                    )}
                </section>
            )}

            {data.overview && (
                <section id={data.overview.id} className="mb-6 p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
                        {data.overview.title}
                    </h2>
                    <p className="text-gray-700">{data.overview.content}</p>
                </section>
            )}

            {data.steps && (
                <section id={data.steps.id} className="mb-6 p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
                        {data.steps.title}
                    </h2>
                    <ol className="list-decimal pl-5 text-gray-700 mt-4">
                        {data.steps.steps.map((step, index) => (
                            <li key={index} className="mb-2">{step}</li>
                        ))}
                    </ol>
                </section>
            )}

            {data.algorithm && (
                <section id={data.algorithm.id} className="mb-6 p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
                        {data.algorithm.title}
                    </h2>
                    <pre className="bg-gray-100 p-4 rounded-lg text-gray-800 mt-2">
                        <code>{data.algorithm.code}</code>
                    </pre>
                </section>
            )}

            {data.explanation && (
                <section id={data.explanation.id} className="mb-6 p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
                        {data.explanation.title}
                    </h2>
                    <p className="text-gray-700">{data.explanation.content}</p>
                </section>
            )}

            {data.video && (
                <section id={data.video.id} className="mb-6 p-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
                        {data.video.title}
                    </h2>
                    <iframe
                        width="100%"
                        height="315"
                        src={data.video.videoUrl}
                        frameBorder="0"
                        allowFullScreen
                        className="mt-4 rounded-lg"
                    ></iframe>
                </section>
            )}

            {data.faq && data.faq.map((faq, index) => (
                <section id={`faq-${index}`} className="mb-6 p-6 bg-white shadow-lg rounded-lg" key={index}>
                    <h2 className="text-3xl font-semibold text-blue-600 mb-4 border-b-2 border-blue-600 pb-2">
                        FAQ
                    </h2>
                    <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-600">{faq.question}</h3>
                        <p className="text-gray-700">{faq.answer}</p>
                    </div>
                </section>
            ))}
        </div>
    );
}
