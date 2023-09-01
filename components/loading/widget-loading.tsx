import { Skeleton } from "../ui/skeleton";

const WidgetLoading = () => {
  return (
    <div className="w-[764px] h-full flex flex-col space-y-4">
      <div className="w-full flex space-x-4 h-[374px]">
        <div className="w-full flex space-x-4 h-full flex-1">
          <div className="flex h-full w-full flex-col space-y-4">
            <Skeleton className="w-full h-full" />
            <Skeleton className="w-full h-full" />
            <Skeleton className="w-full h-full" />
          </div>
          <div className="flex h-full w-full flex-col space-y-4">
            <Skeleton className="w-full h-full" />
            <Skeleton className="w-full h-full" />
            <Skeleton className="w-full h-full" />
          </div>
          <div className="flex h-full w-full flex-col space-y-4">
            <Skeleton className="w-full h-full" />
            <Skeleton className="w-full h-full" />
            <Skeleton className="w-full h-full" />
          </div>
          <div className="flex h-full w-full flex-col space-y-4">
            <Skeleton className="w-full h-full" />
            <Skeleton className="w-full h-full" />
            <Skeleton className="w-full h-full" />
          </div>
        </div>
        <div className="h-full w-[244px] flex flex-col space-y-4 flex-none">
          <div className="w-full h-[114px] flex-none relative">
            <Skeleton className="w-full h-full" />
          </div>
          <div className="w-full h-full flex-1 ">
            <Skeleton className="w-full h-full" />
          </div>
        </div>
      </div>
      <div className="w-full flex-1">
        <Skeleton className="w-full h-full" />
      </div>
    </div>
  );
};

export default WidgetLoading;
