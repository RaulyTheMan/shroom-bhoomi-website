import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function ValueProp() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <Reveal>
        <SectionHeading>
          Locally grown and sourced, our range of offerings fit perfectly across
          kitchens and cuisines!
        </SectionHeading>
      </Reveal>
    </section>
  );
}
