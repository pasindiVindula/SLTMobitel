import { Card, CardHeader, CardBody, Image, Button } from "@nextui-org/react";

export default function App() {
  return (
    <Card className="py-4 bg-[#283851] mb-4">
      {/* <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">Frontend Radio</h4>
      </CardHeader> */}
      
      <CardBody className="overflow-visible py-4 flex flex-row items-center space-x-16 px-10">
        {/* Multiple images with labels */}
        {[
          { src: "/images/Mobile Icon.png", label: "Mobile Plan" },
          { src: "/images/fixed call.png", label: "Fixed Plans" },
          { src: "/images/internet.png", label: "Internet" },
          { src: "/images/PEOTV.png", label: "PEO TV" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              alt={`Icon ${index + 1}`}
              className="object-cover rounded-xl"
              src={item.src}
              width={40}
              height={40}
            />
            <span className="mt-2 text-sm text-custom-blue">{item.label}</span>
          </div>
        ))}
        <Button radius="full" className="mt-4 bg-[#1055A7] text-white">
          Pay Your Bill or Reload
        </Button>
      </CardBody>
    </Card>
  );
}
