import { Logo } from "./Logo";
import { Button } from "@/components/ui/Button";
import { FOOTER_INFO_LINKS, CONTACT, WHATSAPP_LINK } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-red text-white">
      <div className="max-w-[1728px] mx-auto px-6 lg:px-[50px] py-12 lg:py-16 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
        <div className="order-2 md:order-1">
          <Logo variant="footer" />
        </div>

        <div className="order-1 md:order-2 flex flex-col sm:flex-row gap-10 sm:gap-16">
          <div className="font-display space-y-1">
            <p className="text-[20px]">Info</p>
            <p className="h-2" />
            <nav className="flex flex-col gap-1">
              {FOOTER_INFO_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[20px] transition-colors duration-150 ease-out hover:text-cream/70 hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="font-display space-y-1">
            <p className="text-[20px]">Contact</p>
            <p className="h-2" />
            <p className="text-[20px]">{CONTACT.email}</p>
            <p className="h-2" />
            <p className="text-[20px]">{CONTACT.phone}</p>
            <div className="pt-4">
              <Button href={WHATSAPP_LINK} variant="whatsapp">
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
