import { Card, CardBody, CardFooter, Image, Button } from "@nextui-org/react";
import Title from "./topic/title";

export default function Quicklinks() {
  const list = [
    {
      title: "eBill",
      img: "/images/picture1.png",
      description:
        "Subscribe to eBill service and get your monthly bill delivered to an email.",
    },
    {
      title: "MySLTMobitel",
      img: "/images/picture2.png",
      description:
        "Manage your SLT/Mobitel Account here without any hesitation.",
    },
    {
      title: "Broadband Selfcare",
      img: "/images/picture3.png",
      description:
        "Monitor your broadband usage, add ExtraGB and Data Bundles to your connection.",
    },
    {
      title: "Pay Online",
      img: "/images/picture4.png",
      description:
        "Simply pay your SLT bill using any VISA or Master card at your convenience.",
    },
    {
      title: "New Connection",
      img: "/images/picture5.png",
      description:
        "Apply for a new connection and get the best SLTMobitel services.",
    },
  ];

  return (
    <div className="p-6 bg-[#283851]">
      <Title text="Quick Links" />
      <div className="gap-6 grid grid-cols-1 sm:grid-cols-5 mt-10 pl-24 pr-24">
        {list.map((item, index) => (
          <Card
            shadow="sm"
            key={index}
            className="p-2 flex flex-col items-center bg-gradient-to-r from-[#3E4D65] to-[#283852]"
          >
            <CardBody className="flex justify-center items-center">
              <Image
                alt={item.title}
                className="rounded-md w-64 h-64 object-cover"
                src={item.img}
              />
            </CardBody>
            <CardFooter className="text-sm flex flex-col space-y-4 items-start">
              <p className="font-bold text-left text-[#DFECFF]">{item.title}</p>
              <p className="text-[#E4E4E4]">{item.description}</p>
              <Button
                radius="full"
                className="bg-[#1055A7] text-white px-10"
              >Register</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
