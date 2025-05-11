import Button from "./Button";
import { websites } from "../websitedata/data";

function WebsiteDisplay() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {websites.map((site) => (
          <div key={site.id} className="lg:w-96 w-full h-72 rounded-lg border">
            <div>
              <img
                src={site.image}
                className="lg:w-96 w-full h-44 rounded-t-lg object-cover"
              />
            </div>
            <p className="font-bold text-gray-700 text-2xl text-center py-2.5">
              {site.price}
            </p>
            <div className="flex justify-center gap-3">
              <a href={site.videoLink}>
                <Button label="Watch Live Video" />
              </a>
              <a href={site.chatLink}>
                <Button type="call" label="Chat With Admin" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WebsiteDisplay;
