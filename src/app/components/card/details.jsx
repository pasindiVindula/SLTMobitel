import {Card, CardHeader, CardBody, Button, CardFooter} from "@nextui-org/react";

export default function App() {
  return (
    <div className="w-1/3">
        <Card className="py-4">
      <CardHeader className="pb-0 pt-4flex-col items-start">
        <h4 className="font-bold text-4xl pb-4 pl-4">Mobitel Offers Banner</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
      <p className="text-tiny pl-4">Lörem ipsum laktigt vaska. Ott neresamma ifall fyning. Diheten pseudotion. Hotelljournalist ibel äns inte gåktiga i är. Preligen esk .</p>
      </CardBody>
      <CardFooter className="pl-8">
      <Button className="text-white bg-blue-500" variant="flat" color="default" radius="lg" size="m">
          Explore More
        </Button>
      </CardFooter>
    </Card>
    </div>
    
  );
}