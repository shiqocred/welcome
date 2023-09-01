import { Skeleton } from "../ui/skeleton";

const LoadingQuotes = () => {
  return (
    <div className={"w-[305px] flex-col justify-between flex pt-8 h-full"}>
      <div className="flex flex-col space-y-8">
        <div className="flex space-x-4">
          <div className="flex items-center space-x-2">
            <Skeleton className="w-2 h-2 rotate-45 rounded-[2px]" />
            <Skeleton className="w-[14px] h-[14px] rotate-45 rounded-[4px]" />
            <Skeleton className="w-2 h-2 rotate-45 rounded-[2px]" />
          </div>
          <Skeleton className="h-5 w-full" />
        </div>
        <div className="space-y-3">
          <div className="space-y-1">
            <Skeleton className="h-16 w-4/5" />
            <Skeleton className="h-16 w-full" />
            <Skeleton className="h-16 w-2/3" />
          </div>
          <div className="space-y-1">
            <Skeleton className="h-5 w-full" />
            <Skeleton className="h-5 w-1/2" />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <Skeleton className="w-10 h-10" />
        <Skeleton className="h-5 w-12" />
      </div>
    </div>
  );
};

export default LoadingQuotes;
