import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  inverted = false,
  align = 'center',
}: {
  eyebrow: string
  title: string
  description?: string
  id?: string
  inverted?: boolean
  align?: 'center' | 'left'
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      <p className={cn('text-xs font-semibold uppercase tracking-[0.2em]', inverted ? 'text-teal' : 'text-teal')}>
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          'mt-3 text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl',
          inverted ? 'text-deep-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-pretty text-base leading-relaxed sm:text-lg',
            inverted ? 'text-deep-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
