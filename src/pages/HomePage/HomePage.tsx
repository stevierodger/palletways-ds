import { useState, type ReactNode } from "react";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Chat } from "../../components/Chat";
import { FooterNavigation } from "../../components/FooterNavigation";
import { HeaderNavigation } from "../../components/HeaderNavigation";
import { CaretCircleRight, ChevronRight, Search } from "../../components/Icon";
import badgeTrustpilot from "./assets/badge-trustpilot.png";
import iconNetwork from "./assets/icon-network.svg";
import photoFaqFeature from "./assets/photo-faq-feature.jpeg";
import photoHero from "./assets/photo-hero.png";
import photoProcess1 from "./assets/photo-process-1.png";
import photoProcess2 from "./assets/photo-process-2.png";
import photoProcess3 from "./assets/photo-process-3.jpeg";
import photoWarehouse from "./assets/photo-warehouse.png";
import "./HomePage.css";

const REVIEWS = [
  {
    initials: "HW",
    name: "Helen Worrall",
    date: "7 days ago",
    rating: 4,
    body: "Excellent delivery by Marcello! Thank you! Only criticism is for the depot system. I had to call the depot a few times to find out when the delivery was expected as I hadn't received any update...",
  },
  {
    initials: "MJ",
    name: "Mark James",
    date: "Jun 23, 2026",
    rating: 5,
    body: "Really polite and friendly driver. It's unusual for a delivery company to telephone you if they can't find the delivery address, they usually just go to their next delivery but the driver Marcello cal...",
  },
  {
    initials: "SP",
    name: "Stephen Parking",
    date: "Jun 23, 2026",
    rating: 5,
    body: "Marvello was extremely helpful in that he contacted us about his arrival at the property and agreed to hang on whilst I got there as I had to step away unexpectedly. He unloaded the pallet and posi...",
  },
  {
    initials: "MY",
    name: "Margaret Young",
    date: "Jul 30, 2026",
    rating: 5,
    body: "Marvello was extremely helpful in that he contacted us about his arrival at the property and agreed to hang on whilst I got there as I had to step away unexpectedly. He unloaded the pallet and posi...",
  },
] as const;

const BENEFITS = [
  {
    title: "Trusted network",
    body: "The Palletways network uses industry-leading technology and experienced delivery members to ensure your goods arrive safely and on time.",
    icon: (
      <img src={iconNetwork} alt="" width={32} height={32} />
    ),
  },
  {
    title: "Complete visibility",
    body: "Get full visibility from collection to delivery. It's easy to track your pallet's movements using your unique pallet ID.",
    icon: (
      <Search
        size={32}
        aria-hidden="true"
        className="pw-home__benefit-search"
      />
    ),
  },
  {
    title: "Award winning",
    body: "We are trusted by more customers than any other pallet network and receive awards for our exceptional customer service.",
    icon: (
      <span className="pw-home__award-icon" aria-hidden="true">
        ★
      </span>
    ),
  },
] as const;

const PROCESS_STEPS = [
  {
    step: 1,
    title: "Collection",
    body: "Sending a large or bulky item? With Palletways Online, it's easy to book pallet delivery from your home or small business. Simply prepare your goods, book a collection slot, and we'll take care of the rest. One of our trusted network members will come directly to your address to collect the pallet.",
    cta: "How do I pack a pallet?",
    image: photoProcess1,
  },
  {
    step: 2,
    title: "Hub & Processing",
    body: "Sending a large or bulky item? With Palletways Online, it's easy to book pallet delivery from your home or small business. Simply prepare your goods, book a collection slot, and we'll take care of the rest. One of our trusted network members will come directly to your address to collect the pallet.",
    cta: "Track a pallet",
    image: photoProcess2,
  },
  {
    step: 3,
    title: "Delivery",
    body: "Sending a large or bulky item? With Palletways Online, it's easy to book pallet delivery from your home or small business. Simply prepare your goods, book a collection slot, and we'll take care of the rest. One of our trusted network members will come directly to your address to collect the pallet.",
    cta: "Delivery Rules",
    image: photoProcess3,
  },
] as const;

type FaqItem = {
  title: string;
  tags: string[];
  body: string;
  cta: string;
};

const FAQS: FaqItem[] = [
  {
    title: "What can I send?",
    tags: ["SECURITY"],
    body: "You can send most large or bulky items that can be safely secured to a pallet, including furniture, appliances, machinery and boxed goods. Hazardous materials, loose items and any prohibited goods cannot be shipped. To view our prohibited items,",
    cta: "View prohibited items",
  },
  {
    title: "What size pallet should I choose?",
    tags: ["AVAILABLE OPTIONS"],
    body: "We offer a range of pallet sizes to choose from. Each size has its own height and weight limits, and our quote system can help you choose carefully, helping you select the right option for your shipment. Extra large is only available for domestic deliveries, and gives you that flexibility to move how you need.",
    cta: "Find the right pallet size",
  },
  {
    title: "Do I need an account?",
    tags: ["ACCOUNTS"],
    body: "No account is required, you can book a one-off pallet delivery quickly and easily as a guest. When you're ready, you can create an account easily to view previous orders and save details and make your next order faster and easier.",
    cta: "Create an account",
  },
  {
    title: "How fast is delivery?",
    tags: ["SPEED", "EFFICIENCY"],
    body: "No account is required, you can book a one-off pallet delivery quickly and easily as a guest. When you're ready, you can create an account easily to view previous orders and save details and make your next order faster and easier.",
    cta: "Find the right pallet size",
  },
  {
    title: "Can I track it?",
    tags: ["EFFICIENCY"],
    body: "We offer a range of pallet sizes to choose from. Each size has its own height and weight limits, and our quote system can help you choose carefully, helping you select the right option for your shipment. Extra large is only available for domestic deliveries, and gives you that flexibility to move how you need.",
    cta: "Find the right pallet size",
  },
  {
    title: "Is the pallet signed-for on delivery?",
    tags: ["SECURITY"],
    body: "We offer a range of pallet sizes to choose from. Each size has its own height and weight limits, and our quote system can help you choose carefully, helping you select the right option for your shipment. Extra large is only available for domestic deliveries, and gives you that flexibility to move how you need.",
    cta: "Find the right pallet size",
  },
  {
    title: "Are my items insured?",
    tags: ["SECURITY"],
    body: "We offer a range of pallet sizes to choose from. Each size has its own height and weight limits, and our quote system can help you choose carefully, helping you select the right option for your shipment. Extra large is only available for domestic deliveries, and gives you that flexibility to move how you need.",
    cta: "Find the right pallet size",
  },
];

function StepBadge({ n }: { n: number }) {
  return (
    <span className="pw-home__step-badge" aria-hidden="true">
      {n}
    </span>
  );
}

function TextLink({
  children,
  href = "#",
}: {
  children: ReactNode;
  href?: string;
}) {
  return (
    <a className="pw-home__text-link" href={href}>
      <span>{children}</span>
      <CaretCircleRight size={24} aria-hidden="true" />
    </a>
  );
}

/**
 * Marketing homepage composition from Figma landingpage-new (2221:7819).
 */
export function HomePage() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="pw-home">
      <a className="pw-home__ds-link" href="#/button">
        Design system →
      </a>

      <HeaderNavigation state="desktop-cta" />

      <section className="pw-home__hero" aria-labelledby="pw-home-hero-title">
        <div className="pw-home__hero-media" aria-hidden="true">
          <img src={photoHero} alt="" className="pw-home__hero-img" />
        </div>
        <div className="pw-home__hero-inner">
          <div className="pw-home__hero-copy">
            <h1 id="pw-home-hero-title" className="pw-home__h1 pw-motion-1">
              Pallets from your door to anywhere in the UK.
            </h1>
            <p className="pw-home__hero-lede pw-motion-2">
              Part of Europe&apos;s largest pallet network, moving over 20,000
              pallets a day. Book in minutes, track every step, and trust the
              delivery to the people who do it best.
            </p>
          </div>
          <div className="pw-home__hero-actions">
            <Button
              variant="secondary"
              size="lg"
              trailingIcon={<ChevronRight size={24} aria-hidden="true" />}
            >
              Track an order
            </Button>
            <Button
              variant="primary"
              size="lg"
              trailingIcon={<ChevronRight size={24} aria-hidden="true" />}
            >
              Get a quote
            </Button>
          </div>
        </div>
      </section>

      <div className="pw-home__rule" aria-hidden="true" />

      <section
        className="pw-home__section pw-home__section--natural"
        aria-labelledby="pw-home-network-title"
      >
        <div className="pw-home__container">
          <h2 id="pw-home-network-title" className="pw-home__h2 pw-home__h2--center">
            Europe&apos;s most trusted pallet network
          </h2>

          <div className="pw-home__who">
            <div className="pw-home__who-media">
              <img src={photoWarehouse} alt="" />
            </div>
            <div className="pw-home__who-copy">
              <h3 className="pw-home__h3">Who we are</h3>
              <div className="pw-home__body-strong">
                <p>
                  Your shipment stays within the Palletways network from start
                  to finish, so you never pay more than you should.
                </p>
                <p>
                  Choose a collection time that fits your schedule. Our quick,
                  reliable service helps you plan with confidence and avoid
                  unnecessary delays. End customers are almost always within 6
                  miles of one of our members, ensuring a fast delivery.
                </p>
              </div>
              <div className="pw-home__body">
                <p>
                  Palletways Online is part of Europe&apos;s most trusted pallet
                  delivery network, helping individuals and small businesses
                  ship large or bulky items quickly, affordably, and with
                  complete peace of mind. Whether you&apos;re returning a
                  bathroom item, moving something big, or sending stock for your
                  small business, our online platform gives you an instant pallet
                  delivery quote in just a few clicks. No contract or expected
                  volumes, just enter your details and book your collection.
                </p>
                <p>
                  We also offer flexible pallet size options so you only pay for
                  the space you need, making Palletways Online the easiest and
                  most cost-effective way to send a pallet.
                </p>
              </div>
            </div>
          </div>

          <div className="pw-home__reviews">
            <div className="pw-home__reviews-header">
              <h3 className="pw-home__h3">
                Trusted by individuals and businesses across the UK
              </h3>
              <img
                className="pw-home__trustpilot-badge"
                src={badgeTrustpilot}
                alt="Trustpilot Excellent rating 4.6 out of 5"
                width={304}
                height={69}
              />
            </div>
            <div className="pw-home__reviews-grid">
              {REVIEWS.map((review) => (
                <Card
                  key={review.name}
                  variant="trustpilot-card"
                  reviewerInitials={review.initials}
                  reviewerName={review.name}
                  reviewDate={review.date}
                  rating={review.rating}
                  reviewBody={review.body}
                />
              ))}
            </div>
          </div>

          <div className="pw-home__benefits">
            <h3 className="pw-home__h3">
              The benefits of shipping a pallet with us
            </h3>
            <div className="pw-home__benefits-grid">
              {BENEFITS.map((item) => (
                <Card
                  key={item.title}
                  className="pw-home__benefit-card"
                  title={item.title}
                  body={item.body}
                  showLeadingIcon
                  leadingIcon={item.icon}
                  showStrongText={false}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="pw-home__section pw-home__section--subtle"
        aria-labelledby="pw-home-process-title"
      >
        <div className="pw-home__container">
          <h2 id="pw-home-process-title" className="pw-home__h2">
            What happens to your pallet?
          </h2>
          <div className="pw-home__process-grid">
            {PROCESS_STEPS.map((step) => (
              <Card
                key={step.step}
                className="pw-home__process-card"
                title={step.title}
                body={step.body}
                showImage
                imageSrc={step.image}
                showLeadingIcon
                leadingIcon={<StepBadge n={step.step} />}
                showCallToAction
                callToAction={
                  <button type="button" className="pw-home__process-cta">
                    <span>{step.cta}</span>
                    <CaretCircleRight size={24} aria-hidden="true" />
                  </button>
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="pw-home__section pw-home__section--bold"
        aria-labelledby="pw-home-faq-title"
      >
        <div className="pw-home__container">
          <h2 id="pw-home-faq-title" className="pw-home__h2">
            Sending a pallet - frequently asked questions
          </h2>
          <div className="pw-home__faq-grid">
            {FAQS.map((faq) => (
              <Card
                key={faq.title}
                className="pw-home__faq-card"
                title={faq.title}
                body={faq.body}
                showTags
                tags={faq.tags.map((tag) => (
                  <Badge key={tag} label={tag} />
                ))}
                showCallToAction
                callToAction={<TextLink>{faq.cta}</TextLink>}
              />
            ))}
            <a className="pw-home__faq-feature" href="#faqs">
              <img src={photoFaqFeature} alt="" />
              <span className="pw-home__faq-feature-title">Read all the FAQs</span>
            </a>
          </div>
        </div>
      </section>

      <FooterNavigation state="desktop" />

      <div className="pw-home__chat">
        <Chat
          state={chatOpen ? "expanded" : "collapsed"}
          onOpen={() => setChatOpen(true)}
          onClose={() => setChatOpen(false)}
        />
      </div>
    </div>
  );
}
