import { Card, Image, Button } from "@nextui-org/react";

export default function App() {
  return (
    <Card className="relative bg-[#283851] rounded-none">
        <div className="absolute inset-0 bg-black bg-opacity-10 z-0"></div>
      <div className="flex items-center justify-center space-x-6 px-4">
        <Image
          alt="Feedback Image"
          className="object-cover"
          src="/images/feedback.png"
          width={235}
          height={235}
        />
        <div className="flex flex-col items-start text-left w-1/3">
          <div className="font-bold text-3xl pb-4 text-[#C8E1FF]">WE VALUE YOUR FEEDBACK</div>
          <div className="text-sm text-white">
            Share your feedback and stand a chance to win the latest Smartphones
            from SLTMOBITEL!
          </div>
        </div>

        <Button size="md" radius="full" className="bg-[#1055A7] text-white px-10">
          Give Feedback
        </Button>
      </div>
    </Card>
  );
}
