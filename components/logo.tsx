import { Eye } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Rahud Superspeciality Eye Center home">
      <span
        className={cn(
          'flex size-10 items-center justify-center rounded-xl',
          inverted ? 'bg-teal/20 text-teal' : 'bg-primary text-primary-foreground',
        )}
      >
        <Eye className="size-5" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-tight">
        <span
          className={cn(
            'font-display text-base font-semibold tracking-tight',
            inverted ? 'text-deep-foreground' : 'text-foreground',
          )}
        >
          Rahud Eye Center
        </span>
        <span
          className={cn(
            'text-[11px] font-medium uppercase tracking-[0.18em]',
            inverted ? 'text-deep-foreground/60' : 'text-teal',
          )}
        >
          Superspeciality
        </span>
      </span>
    </a>
  )
}
