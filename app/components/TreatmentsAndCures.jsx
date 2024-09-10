export default function TreatmentsAndCures() {
    const treatments = [
      {
        title: 'Surgery',
        description: 'Surgery is used to remove the tumor from the breast. This may involve a lumpectomy, which removes the tumor and some surrounding tissue, or a mastectomy, which removes the entire breast.'
      },
      {
        title: 'Chemotherapy',
        description: 'Chemotherapy uses drugs to target and kill cancer cells throughout the body. It is often used before or after surgery to shrink tumors or kill remaining cells.'
      },
      {
        title: 'Radiation Therapy',
        description: 'Radiation therapy uses high-energy rays to destroy cancer cells that may remain after surgery. It helps to reduce the risk of cancer returning.'
      },
      {
        title: 'Hormone Therapy',
        description: 'Hormone therapy blocks or removes hormones that fuel cancer growth. It is used for cancers that are hormone receptor-positive.'
      },
      {
        title: 'Targeted Therapy',
        description: 'Targeted therapy attacks specific cancer cells with minimal damage to surrounding healthy cells. It targets the changes in cancer cells that help them grow and survive.'
      }
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-6 text-center">Treatments and Cures</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {treatments.map((treatment, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:bg-blue-100 hover:border-green-500 hover:border-2 border-transparent"
              >
                <h3 className="text-2xl font-semibold mb-2 text-blue-800">{treatment.title}</h3>
                <p className="text-gray-700">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  