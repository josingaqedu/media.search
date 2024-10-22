import { Card, CardBody, CardFooter, Skeleton } from "@nextui-org/react";

export const MovieCardSkeleton = () => {
  return (
    <Card shadow="sm">
      <CardBody className="p-0">
        <Skeleton className="w-full h-[468px] sm:h-[468px] md:h-[450px] lg:h-[400px] xl:h-[350px] rounded-large" />
      </CardBody>
      <CardFooter className="text-xs flex-col space-y-2">
        <Skeleton className="w-full h-4 rounded-large" />
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-6 h-6 rounded-full" />
          </div>
          <div className="flex gap-2 items-center">
            <Skeleton className="w-6 h-6 rounded-full" />
            <Skeleton className="w-6 h-6 rounded-full" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
