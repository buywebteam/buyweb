import Button from "./Button";

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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {websites.map((site) => (
        <div
          key={site.id}
          className="lg:w-96 w-full h-[380px] rounded-lg border"
        >
          <div>
            <img
              src={site.image}
              className="lg:w-96 w-full h-56 rounded-t-lg object-cover"
            />
          </div>
          <p className="font-bold text-2xl text-center pt-2.5">{site.name}</p>
          <p className="font-bold text-gray-700 text-3xl text-center py-2.5">
            {site.price}
          </p>
          <div className="flex justify-center gap-2.5">
            <a href={site.videoLink}>
              <Button label="Watch Website Video" />
            </a>
            <a href={site.chatLink}>
              <Button type="call" label="Chat With Admin" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WebsiteDisplay;
