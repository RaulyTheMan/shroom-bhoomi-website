import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WHATSAPP_LINK } from "@/lib/constants";

export function WhatsAppCTA() {
  return (
    <section className="px-6 lg:px-[50px] py-16 lg:py-20">
      <Reveal className="flex flex-col lg:flex-row gap-10 items-center max-w-[1623px] mx-auto">
        <div className="flex-1 flex flex-col gap-8">
          <h2 className="font-metropolis font-bold text-4xl sm:text-6xl lg:text-[128px] leading-[1.05] text-ink">
            Connect With Us On WhatsApp
          </h2>
          <Button href={WHATSAPP_LINK} variant="whatsapp" className="w-fit h-[93px] px-16 text-2xl">
            WhatsApp
          </Button>
        </div>
        <div className="w-full lg:w-[804px] aspect-[804/875] rounded-chip bg-placeholder shrink-0" />
      </Reveal>
    </section>
  );
}
