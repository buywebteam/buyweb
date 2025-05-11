import Button from "./Button";

function WebsiteDisplay() {
  return (
    <div>
      <div>
        <div className="w-96 h-60 rounded-lg border broder-black">
          <img src="" />
          <p className="font-bold text-gray-700 text-lg">#100,000</p>
          <div className="flex gap-2">
            <a href="/">
              <Button label="Watch Live Video" />
            </a>
            <a href="/">
              <Button type="call" label="Chat With Admin" />{" "}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebsiteDisplay;
