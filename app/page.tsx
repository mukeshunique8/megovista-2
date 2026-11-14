import { ThemeToggle } from '@/components/theme-toggle'

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-main)] flex flex-col items-center justify-center p-8 transition-colors">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <div className="max-w-md w-full text-center space-y-4">
        <div className="inline-block px-3 py-1 text-xs font-mono rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold tracking-wider uppercase">
          Clean Slate Ready
        </div>
        <h1 className="text-3xl font-bold tracking-tight">
          Megovista HR Solutions
        </h1>
        <p className="text-sm text-[var(--text-muted)] leading-relaxed">
          All previous components and pages have been removed. The theme provider, environment variables, design tokens, and Megovista content data are intact and ready for you to build step-by-step.
        </p>
      </div>
    </main>
  )
}
