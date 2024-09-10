import React from 'react';
import Image from 'next/image';

const BreastCancerStatistics = () => {
  const stats = [
    {
      title: "People Affected",
      stat: "2.3 million",
      description: "Number of new cases worldwide in 2024."
    },
    {
      title: "Survival Rate",
      stat: "90%",
      description: "Five-year survival rate for early-stage breast cancer."
    },
    {
      title: "Early Detection",
      stat: "80%",
      description: "Success rate of early detection through screenings."
    },
    {
      title: "Annual Diagnoses",
      stat: "1.5 million",
      description: "Number of breast cancer diagnoses per year globally."
    },
    {
      title: "Men Affected",
      stat: "2%",
      description: "Percentage of breast cancer cases in men."
    },
    {
      title: "Research Funding",
      stat: "$1.5 billion",
      description: "Amount of research funding allocated in 2024."
    }
  ];

  return (
    <section className="mb-12">
      <h2 className="text-4xl font-semibold mb-6 text-center">Breast Cancer Statistics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-4xl font-semibold text-blue-600 mb-4">{item.stat}</p>
            {item.description && <p className="text-gray-600">{item.description}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BreastCancerStatistics;
