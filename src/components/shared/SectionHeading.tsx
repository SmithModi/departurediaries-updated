
import { cn } from '@/lib/utils';
import { useInView } from '@/utils/animations';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = false,
  className,
}: SectionHeadingProps) => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      <h2 
        className={cn(
          "text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-700",
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p 
          className={cn(
            "text-lg text-muted-foreground max-w-2xl transition-all duration-700 delay-200",
            centered && "mx-auto",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
