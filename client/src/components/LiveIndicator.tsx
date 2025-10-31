import { Badge } from "@/components/ui/badge";

export default function LiveIndicator() {
  return (
    <Badge variant="outline" className="gap-2" data-testid="badge-live">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-profit opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-profit"></span>
      </span>
      LIVE
    </Badge>
  );
}
