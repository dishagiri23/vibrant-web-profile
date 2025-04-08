
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ 
  title, 
  subtitle, 
  className 
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-12", className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg">{subtitle}</p>}
      <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
    </div>
  );
}
