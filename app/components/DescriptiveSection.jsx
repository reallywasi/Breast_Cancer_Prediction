export default function DescriptiveSection() {
    const descriptions = [
      {
        title: 'What is Breast Cancer?',
        content: `Breast cancer originates in the breast tissues, primarily affecting the ducts and lobules. It involves the uncontrolled growth of abnormal cells that form a lump or mass. Unlike benign tumors, malignant tumors can spread to other parts of the body. Early detection through regular screenings and awareness of symptoms is crucial for successful treatment and management.`
      },
      {
        title: 'Risk Factors',
        content: `Risk factors for breast cancer include genetic predispositions (e.g., BRCA1 and BRCA2 mutations), family history, hormonal influences, and lifestyle choices such as smoking, excessive alcohol consumption, and obesity. While some factors are unavoidable, lifestyle changes and regular medical check-ups can help manage and mitigate risk.`
      },
      {
        title: 'Statistics',
        content: `Breast cancer is one of the most prevalent cancers worldwide. Approximately 1 in 8 women will be diagnosed with breast cancer during their lifetime. With advancements in early detection and treatment, the 5-year survival rate has risen to over 90% in many developed countries, thanks to improved medical interventions and greater public awareness.`
      }
    ];
  
    return (
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center text-blue-800">Breast Cancer Overview</h2>
          <p className="text-lg mb-12 text-center text-gray-700">
            Learn more about breast cancer, its risk factors, and key statistics to stay informed and proactive.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {descriptions.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:bg-blue-100 border-l-4 border-blue-500"
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-700">{item.title}</h3>
                <p className="text-gray-800">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  