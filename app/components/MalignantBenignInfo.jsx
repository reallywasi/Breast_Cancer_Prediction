import Image from 'next/image';

export default function MalignantBenignInfo() {
  const info = [
    {
      type: 'Malignant Tumors',
      description: `Malignant tumors are cancerous growths that have the potential to invade and destroy surrounding tissues. They can spread (metastasize) to other parts of the body through the bloodstream or lymphatic system. Malignant tumors often grow rapidly and require aggressive treatment approaches, such as surgery, chemotherapy, radiation therapy, and targeted therapies. Early detection and treatment are crucial for improving outcomes and managing the disease effectively.`,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOKft23mr4l3yneGoEUSiTT39xhBBJp_Cq0A&s'
    },
    {
      type: 'Benign Tumors',
      description: `Benign tumors are non-cancerous growths that do not invade surrounding tissues or spread to other parts of the body. They generally grow slowly and have well-defined boundaries. Although benign tumors are not life-threatening, they may cause symptoms or discomfort depending on their size and location. Treatment may be required if they cause pain, interfere with normal functions, or affect a person's quality of life. Common treatments include surgical removal and monitoring for any changes.`,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9JTsT0ldFw2nIk2UxCKAlqL8i5sVQoIH6NQ&s'
    }
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-6 text-center text-blue-900">Understanding Malignant and Benign Tumors</h2>
        <p className="text-lg mb-8 text-center text-gray-700">
          Tumors can be classified into two main categories: malignant and benign. Each type has distinct characteristics, behaviors, and treatment approaches. Understanding these differences is crucial for effective diagnosis and treatment.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {info.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:bg-blue-50 hover:border-green-500 hover:border-2 border-transparent"
            >
              <img src={item.image} alt={item.type} width={600} height={400} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-blue-800">{item.type}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
