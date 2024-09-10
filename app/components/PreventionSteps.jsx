export default function PreventionSteps() {
    const steps = [
      {
        step: 1,
        title: 'Maintain a Healthy Diet',
        description: 'Eat a balanced diet rich in fruits, vegetables, and whole grains. Limit your intake of saturated fats, processed foods, and red meats.'
      },
      {
        step: 2,
        title: 'Exercise Regularly',
        description: 'Engage in regular physical activity. Aim for at least 30 minutes of moderate exercise most days of the week to maintain a healthy weight and overall health.'
      },
      {
        step: 3,
        title: 'Limit Alcohol Intake',
        description: 'Reduce alcohol consumption as excessive drinking is associated with an increased risk of breast cancer. The general recommendation is no more than one drink per day.'
      },
      {
        step: 4,
        title: 'Avoid Smoking',
        description: 'Smoking is linked to many types of cancer. Avoid tobacco use to reduce your risk of breast cancer and other health issues.'
      },
      {
        step: 5,
        title: 'Get Regular Screenings',
        description: 'Participate in regular breast cancer screenings, such as mammograms and clinical breast exams, especially if you have a family history or other risk factors.'
      },
      {
        step: 6,
        title: 'Manage Stress',
        description: 'Chronic stress can negatively impact your health. Engage in stress-reducing activities like meditation, yoga, or hobbies to maintain mental well-being.'
      },
      {
        step: 7,
        title: 'Know Your Family History',
        description: 'Be aware of your family’s medical history. If you have a family history of breast cancer, discuss it with your healthcare provider for personalized risk assessment and preventive measures.'
      }
    ];
  
    return (
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold mb-6 text-center">Steps for Preventing Breast Cancer</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div 
                key={step.step} 
                className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:bg-blue-100 hover:border-green-500 hover:border-2 border-transparent"
              >
                <h3 className="text-2xl font-semibold mb-2 text-blue-800">Step {step.step}</h3>
                <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                <p className="text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  