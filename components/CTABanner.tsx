import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="bg-gradient-to-br from-ivory to-border-light text-charcoal section-padding border-t border-border-light">
      <div className="container-main text-center">
        <h2 className="text-h2 mb-4 text-charcoal">Your next audit could be free.</h2>
        <p className="text-body-lg mb-8 max-w-2xl mx-auto text-charcoal/80">
          We offer a no-obligation free security audit for qualifying East African fintechs and startups. One call. Real findings. No sales pitch.
        </p>
        <Link 
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-4 bg-dusty-rose text-charcoal font-bold rounded-button transition-transform hover:scale-105 shadow-sm hover:shadow-md"
        >
          Book Your Free Audit Now
        </Link>
      </div>
    </section>
  );
}
