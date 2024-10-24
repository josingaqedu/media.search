import { Card, CardBody, CardHeader, Skeleton } from "@nextui-org/react";

export const DetailMediaSkeleton = () => {
  return (
    <section className="bg-black bg-opacity-50 dark:bg-opacity-70">
      <div className="max-w-screen-xl mx-auto px-6 py-2">
        <Card className="w-full bg-white/50 dark:bg-black/50 p-4">
          <CardHeader className="flex justify-center">
            <Skeleton className="w-full md:w-1/4 h-8 rounded-large" />
          </CardHeader>
          <CardBody className="space-y-4">
            <div className="flex space-x-2 py-2">
              <Skeleton className="w-28 h-7 rounded-large" />
              <Skeleton className="size-7 rounded-large" />
              <Skeleton className="size-7 rounded-large" />
            </div>
            <div className="space-y-2">
              <Skeleton className="w-40 h-8 rounded-large" />
              <div className="space-y-2">
                <div className="flex space-x-2">
                  <Skeleton className="w-1/4 h-6 rounded-large" />
                  <Skeleton className="w-3/4 h-6 rounded-large" />
                </div>
                <div className="flex space-x-2">
                  <Skeleton className="w-1/2 h-6 rounded-large" />
                  <Skeleton className="w-1/2 h-6 rounded-large" />
                </div>
                <Skeleton className="w-1/3 h-6 rounded-large" />
              </div>
            </div>
            <div className="space-y-2">
              <Skeleton className="w-40 h-8 rounded-large" />
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div className="space-y-2" key={index}>
                    <Skeleton className="w-full h-40 rounded-large" />
                    <Skeleton className="w-full h-4 rounded-large" />
                    <div className="flex justify-between">
                      <Skeleton className="w-1/4 h-4 rounded-large" />
                      <Skeleton className="w-1/3 h-4 rounded-large" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};
