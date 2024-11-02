import { AppearAnimation } from "@/lib/animation/AppearAnimation";

export default function Location() {
  return (
    <main className="container mx-auto max-w-7xl">
      <AppearAnimation from="top">
        <h1 className="py-4 text-center text-4xl font-bold">Our Location</h1>
      </AppearAnimation>
      <section className="body-font relative py-10 text-gray-600">
        <AppearAnimation delay={0.2} from="bottom">
          <div className="w-full bg-gray-300">
            <iframe
              className="h-[500px] w-full"
              width="100%"
              height="100%"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="map"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Bou+Saada%20City&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              loading="lazy"
            />
          </div>
        </AppearAnimation>
      </section>
    </main>
  );
}
