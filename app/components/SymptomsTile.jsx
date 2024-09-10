export default function SymptomsTile() {
    const symptoms = [
      {
        title: 'Persistent Lump',
        description: 'A persistent lump or swelling in the breast or underarm area.'
      },
      {
        title: 'Changes in Size or Shape',
        description: 'Changes in the size or shape of the breast.'
      },
      {
        title: 'Unusual Discharge',
        description: 'Unusual discharge from the nipple.'
      },
      {
        title: 'Skin Changes',
        description: 'Skin changes such as redness, dimpling, or puckering.'
      },
      {
        title: 'Swelling',
        description: 'Swelling in or near the breast or underarm area.'
      },
      {
        title: 'Pain',
        description: 'Persistent pain in the breast or nipple area that does not go away.'
      },
      {
        title: 'Nipple Retraction',
        description: 'Inverted or pulled-in nipple.'
      },
      {
        title: 'Enlarged Lymph Nodes',
        description: 'Swollen lymph nodes under the arm or near the collarbone.'
      }
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-6 text-center"></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {symptoms.map((symptom, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:bg-blue-100 hover:border-green-500 hover:border-2 border-transparent">
                <h3 className="text-2xl font-semibold mb-2 text-blue-800">{symptom.title}</h3>
                <p className="text-gray-700">{symptom.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  