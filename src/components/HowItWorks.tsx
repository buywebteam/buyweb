import { FaSearch, FaPlayCircle, FaComments } from "react-icons/fa";

const steps = [
  {
    id: 1,
    title: "Select Website",
    description:
      "Browse and choose your preferred website from our Explore Website category.",
    icon: <FaSearch className="w-6 h-6" />,
  },
  {
    id: 2,
    title: "Watch Website Video",
    description:
      "Preview exactly how the website looks and works through a detailed demo video.",
    icon: <FaPlayCircle className="w-6 h-6" />,
  },
  {
    id: 3,
    title: "Chat with Admin",
    description:
      "Ready to proceed? Chat directly with our admin for fast and secure payment.",
    icon: <FaComments className="w-6 h-6" />,
  },
];

const HowItWorks = () => {
  return (
    <section className="py-6 bg-gray-50 " id="how-it-works">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300 ease-in-out text-center"
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-purple-100 text-purple-600">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
