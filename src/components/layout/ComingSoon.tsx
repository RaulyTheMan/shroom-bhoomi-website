import { Button } from "@/components/ui/Button";

export function ComingSoon({ title }: { title: string }) {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="font-metropolis font-bold text-3xl md:text-5xl text-ink">
        {title}
      </h1>
      <p className="font-metropolis font-light text-lg text-ink-soft max-w-md">
        We&apos;re growing this page. Check back soon.
      </p>
      <Button href="/" variant="outline">
        Back to Home
      </Button>
    </section>
  );
}
