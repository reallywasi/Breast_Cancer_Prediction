// import TreatmentsAndCures from '../app/components/TreatmentsAndCures';
// import Image from 'next/image';
// import Link from 'next/link';
// import SymptomsTile from './components/SymptomsTile';
// import PreventionSteps from './components/PreventionSteps';
// import MalignantBenignInfo from './components/MalignantBenignInfo';
// import DescriptiveSection from './components/DescriptiveSection';
// import BreastCancerStatistics from './components/BreastCancerStatistics ';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <nav className="bg-blue-900 text-white p-4">
//         <div className="container mx-auto flex justify-between items-center">
//           <Link href="/" className="text-xl font-bold">Breast Cancer Awareness</Link>
//           <Link href="/prediction" className="bg-green-500 px-4 py-2 rounded">Breast Cancer Prediction</Link>
//         </div>
//       </nav>

//       <main className="container mx-auto px-4 py-12">
//         {/* Introduction */}
//         <section className="mb-12 text-center">
//           <h1 className="text-5xl font-bold mb-6">Understanding Breast Cancer</h1>
//           <p className="text-lg mb-6">
//             Breast cancer is a type of cancer that forms in the cells of the breasts. It is one of the most common cancers affecting women worldwide, though it can also occur in men. Early detection and treatment are crucial for a better prognosis.
//           </p>
//           <img src="https://news.yale.edu/sites/default/files/styles/featured_media/public/ynews-cancer-healthy_137381816.jpg?itok=HN73dW20&c=a75e254fe1da31f2732f6b0d7bce1413" alt="Breast Cancer Awareness" width={1200} height={600} className="w-full h-auto rounded-lg shadow-lg" />
//         </section>
//         <BreastCancerStatistics/>

// <DescriptiveSection/>
//         {/* What is Breast Cancer? */}
//         <section className="mb-12">
//           <h2 className="text-4xl font-semibold mb-4">What is Breast Cancer?</h2>
//           <p className="text-lg mb-6">
//             Breast cancer starts when cells in the breast begin to grow uncontrollably. These cells can form a tumor that can often be felt as a lump or detected through imaging. There are different types of breast cancer, each with its own characteristics.
//           </p>
//           <Image src="/breast-cancer-definition.jpg" alt="Breast Cancer Definition" width={1200} height={600} className="w-full h-auto rounded-lg shadow-lg" />
//         </section>
// <BreastCancerStatistics/>
//         {/* Malignant vs Benign Tumors */}
//        <MalignantBenignInfo/>
//         {/* Symptoms */}
//         <section className="mb-12">
//           <h2 className="text-4xl font-semibold mb-6 text-center">Symptoms of Breast Cancer</h2>
//           <p className="text-lg mb-6">
//             Recognizing the symptoms of breast cancer early can improve the chances of successful treatment. Common symptoms include:
//           </p>

//           <img 
//   src="https://images.everydayhealth.com/images/seo-graphic-content-initiative/eh-symptoms-of-early-breast-cancer-seo-graphic.png" 
//   alt="Breast Cancer Symptoms" 
//   className="w-[70vw] max-w-[70%] h-auto rounded-lg shadow-lg" 
// />
//         </section>
// <SymptomsTile/>
//         {/* Diagnosis */}
//         <section className="mb-12">
//           <h2 className="text-4xl font-semibold mb-6">Diagnosis</h2>
//           <p className="text-lg mb-6">
//             Diagnosing breast cancer typically involves a combination of physical exams, imaging tests (like mammograms), and biopsy procedures. Early detection through regular screenings is crucial.
//           </p>
//           <img src="https://scx2.b-cdn.net/gfx/news/2023/early-stage-breast-can.jpg" alt="Breast Cancer Diagnosis" width={1200} height={600} className="w-full h-auto rounded-lg shadow-lg" />
//         </section>

//         {/* Treatments and Cures */}
//         <TreatmentsAndCures />

//         {/* Prevention */}
//   <PreventionSteps/>

//         {/* Support and Resources */}
//         <section className="mb-12">
//           <h2 className="text-4xl font-semibold mb-6">Support and Resources</h2>
//           <p className="text-lg mb-6">
//             Support is crucial for those affected by breast cancer. There are numerous resources available, including support groups, counseling services, and informational websites.
//           </p>
//           <Image src="/breast-cancer-support.jpg" alt="Breast Cancer Support" width={1200} height={600} className="w-full h-auto rounded-lg shadow-lg" />
//         </section>
//         <footer className="bg-blue-900 text-white py-12">
//       <div className="container mx-auto px-6">
//         <div className="flex flex-col md:flex-row justify-between items-center mb-8">
//           <div className="text-center md:text-left">
//             <h2 className="text-3xl font-bold mb-2">Breast Cancer Awareness</h2>
//             <p className="text-lg">Dedicated to providing information and support for breast cancer awareness and prevention.</p>
//           </div>
//           <div className="flex space-x-4 mt-6 md:mt-0">
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
//               <FaFacebookF size={20} />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
//               <FaTwitter size={20} />
//             </a>
//             <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
//               <FaLinkedinIn size={20} />
//             </a>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
//               <FaInstagram size={20} />
//             </a>
//           </div>
//         </div>
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
//             <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
//             <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
//             <li><Link href="/prevention" className="hover:text-blue-400">Prevention</Link></li>
//             <li><Link href="/treatments" className="hover:text-blue-400">Treatments</Link></li>
//             <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
//           </ul>
//         </div>
//         <div className="mt-8 text-center text-gray-400">
//           <p>&copy; {new Date().getFullYear()} Breast Cancer Awareness. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//       </main>
//     </div>
//   );
// }










import TreatmentsAndCures from '../app/components/TreatmentsAndCures';
import Image from 'next/image';
import Link from 'next/link';
import SymptomsTile from './components/SymptomsTile';
import PreventionSteps from './components/PreventionSteps';
import MalignantBenignInfo from './components/MalignantBenignInfo';
import DescriptiveSection from './components/DescriptiveSection';
import BreastCancerStatistics from './components/BreastCancerStatistics ';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-900 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">Breast Cancer Awareness</Link>
          <Link href="/prediction" className="bg-green-500 px-4 py-2 rounded">Breast Cancer Prediction</Link>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <section className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-6">Understanding Breast Cancer</h1>
          <p className="text-lg mb-6">
            Breast cancer is a type of cancer that forms in the cells of the breasts. It is one of the most common cancers affecting women worldwide, though it can also occur in men. Early detection and treatment are crucial for a better prognosis.
          </p>
          <img 
            src="https://news.yale.edu/sites/default/files/styles/featured_media/public/ynews-cancer-healthy_137381816.jpg?itok=HN73dW20&c=a75e254fe1da31f2732f6b0d7bce1413" 
            alt="Breast Cancer Awareness" 
            className="w-full max-w-3xl h-auto rounded-lg shadow-lg mx-auto" 
          />
        </section>
        <BreastCancerStatistics />
        <DescriptiveSection />

        {/* What is Breast Cancer? */}
        {/* <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-4">What is Breast Cancer?</h2>
          <p className="text-lg mb-6">
            Breast cancer starts when cells in the breast begin to grow uncontrollably. These cells can form a tumor that can often be felt as a lump or detected through imaging. There are different types of breast cancer, each with its own characteristics.
          </p>
          <Image 
            src="/breast-cancer-definition.jpg" 
            alt="Breast Cancer Definition" 
            width={1200} 
            height={600} 
            className="w-full max-w-3xl h-auto rounded-lg shadow-lg mx-auto" 
          />
        </section> */}
        <BreastCancerStatistics />

        {/* Malignant vs Benign Tumors */}
        <MalignantBenignInfo />

        {/* Symptoms */}
        <section className="mb-12">
          <h1 className="text-4xl font-semibold mb-6 text-center">Symptoms of Breast Cancer</h1>
          <h2 className="text-lg mb-6 text-center">
            Recognizing the symptoms of breast cancer early can improve the chances of successful treatment. Common symptoms include:
          </h2>
          <img 
            src="https://images.everydayhealth.com/images/seo-graphic-content-initiative/eh-symptoms-of-early-breast-cancer-seo-graphic.png" 
            alt="Breast Cancer Symptoms" 
            className="w-[50vw] max-w-[50%] h-auto rounded-lg shadow-lg mx-auto" 
          />
        </section>
        <SymptomsTile />

        {/* Diagnosis */}
        <section className="mb-12">
          <h2 className="text-4xl font-semibold mb-6 text-center" >Diagnosis</h2>
          <p className="text-lg mb-6">
            Diagnosing breast cancer typically involves a combination of physical exams, imaging tests (like mammograms), and biopsy procedures. Early detection through regular screenings is crucial.
          </p>
          <img 
            src="https://scx2.b-cdn.net/gfx/news/2023/early-stage-breast-can.jpg" 
            alt="Breast Cancer Diagnosis" 
            className="w-full max-w-3xl h-auto rounded-lg shadow-lg mx-auto" 
          />
        </section>

        {/* Treatments and Cures */}
        <TreatmentsAndCures />

        {/* Prevention */}
        <PreventionSteps />

  
 
      </main>
      <footer className="bg-blue-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold mb-2">Breast Cancer Awareness</h2>
                <p className="text-lg">Dedicated to providing information and support for breast cancer awareness and prevention.</p>
              </div>
              <div className="flex space-x-4 mt-6 md:mt-0">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                  <FaTwitter size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                  <FaLinkedinIn size={20} />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400">
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
                <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                <li><Link href="/about" className="hover:text-blue-400">About</Link></li>
                <li><Link href="/prevention" className="hover:text-blue-400">Prevention</Link></li>
                <li><Link href="/treatments" className="hover:text-blue-400">Treatments</Link></li>
                <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
              </ul>
            </div>
            <div className="mt-8 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Breast Cancer Awareness. All rights reserved.</p>
            </div>
          </div>
        </footer>
    </div>
  );
}
