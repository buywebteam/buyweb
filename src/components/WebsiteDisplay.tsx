import { useState } from "react";
import Button from "./Button";
import { FiX } from "react-icons/fi";

type Website = {
  id: number;
  name: string;
  image: string;
  price: string;
  videoLink: string;
  chatLink: string;
};

interface Props {
  websites: Website[];
}

function WebsiteDisplay({ websites }: Props) {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <>
      {/* Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="bg-black rounded-lg p-6 max-w-3xl w-full relative">
            <button
              className="absolute top-2 right-2 text-black font-bold text-xl cursor-pointer"
              onClick={() => setActiveVideo(null)}
            >
              <FiX className="text-xl text-white" />
            </button>
            <video
              controls
              autoPlay
              className="w-full h-[400px] rounded-lg object-cover"
            >
              <source src={activeVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Website Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {websites.map((site) => (
          <div
            key={site.id}
            className="lg:w-96 w-full h-[380px] rounded-lg border flex flex-col items-center"
          >
            <img
              src={site.image}
              alt={site.name}
              className="lg:w-96 w-full h-56 rounded-t-lg object-cover"
            />
            <p className="font-bold text-2xl text-center pt-2.5">{site.name}</p>
            <p className="font-bold text-gray-700 text-3xl text-center py-2.5">
              {site.price}
            </p>

            <div className="flex justify-center gap-2.5">
              <Button
                label="Watch Website Video"
                onClick={() => setActiveVideo(site.videoLink)}
              />
              <a href={site.chatLink} target="_blank" rel="noopener noreferrer">
                <Button type="call" label="Chat With Admin" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default WebsiteDisplay;
