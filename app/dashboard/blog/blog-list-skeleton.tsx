import { Skeleton } from "@/components/ui/skeleton";

export function SkelebloListSkeletontonText() {
  return (
    <div className="flex w-full max-w-7xl flex-col gap-2 p-6">
      {Array.from({ length: 8 }).map((_, id) => (
        <Skeleton key={id} className="h-16 w-full" />
      ))}
    </div>
  );
}
