const siteConfig = {
  // ============================================================
  // BUSINESS INFO — Update these values for each client
  // ============================================================
  businessName: "Spark & Co Electrical",
  tagline: "Licensed Electricians Serving Brisbane Since 2009",
  phone: "0412 345 678",
  phoneHref: "tel:+61412345678",
  email: "info@sparkandco.com.au",
  address: "14 Voltage Lane, Newstead QLD 4006",
  licenseNumber: "Lic. #78432",
  yearEstablished: 2009,
  hoursOfOperation: "Mon-Fri: 7am - 5pm | Sat: 8am - 12pm",
  emergencyAvailable: true,

  // ============================================================
  // TRUST BAR
  // ============================================================
  trustBar: {
    googleRating: 4.9,
    googleReviewCount: 366,
    yearsInBusiness: 16,
    credential: "Master Electricians",
  },

  // ============================================================
  // SERVICES
  // ============================================================
  services: [
    {
      title: "Residential Electrical",
      description:
        "Complete home wiring, rewiring, and electrical upgrades for houses and apartments.",
      icon: "House",
    },
    {
      title: "Commercial Fit-Outs",
      description:
        "Office, retail, and warehouse electrical installations and maintenance.",
      icon: "Building2",
    },
    {
      title: "24/7 Emergency",
      description:
        "Power outages, sparking outlets, tripped breakers. We come to you fast, day or night.",
      icon: "Siren",
    },
    {
      title: "Switchboard Upgrades",
      description:
        "Replace old fuse boxes with modern safety switches and circuit breakers.",
      icon: "PlugZap",
    },
    {
      title: "EV Charger Installation",
      description:
        "Certified installation of home and commercial electric vehicle charging stations.",
      icon: "BatteryCharging",
    },
    {
      title: "Lighting Design",
      description:
        "LED upgrades, downlights, outdoor lighting, and smart lighting systems.",
      icon: "Lightbulb",
    },
  ],

  // ============================================================
  // ABOUT
  // ============================================================
  about: {
    headline: "Family Owned. Locally Operated.",
    text: "With over 16 years serving Brisbane and surrounding suburbs, Spark & Co Electrical is a family-owned business built on honest work and fair pricing. Every job is completed by licensed, insured electricians who treat your property like their own.",
    image: null, // Replace with actual image path e.g. "/images/team.jpg"
  },

  // ============================================================
  // GOOGLE REVIEWS
  // ============================================================
  reviews: {
    businessName: "Spark & Co Electrical",
    rating: 4.9,
    totalReviews: 366,
    googleMapsUrl:
      "https://search.google.com/local/writereview?placeid=PLACE_ID",
    items: [
      {
        author: "Jasen Dillon",
        rating: 5,
        date: "a year ago",
        text: "Spark & Co rewired our entire Queenslander. The team was professional, punctual, and cleaned up every day before leaving. Highly recommend for any residential work.",
        avatar: null,
      },
      {
        author: "Michelle Tran",
        rating: 5,
        date: "3 months ago",
        text: "Called them for an emergency at 10pm when our power went out. They were at our door within 40 minutes and had everything fixed in under an hour. Lifesavers.",
        avatar: null,
      },
      {
        author: "David Khoury",
        rating: 5,
        date: "6 months ago",
        text: "Had an EV charger installed in our garage. Fair price, quick install, and they walked me through everything. Really knowledgeable team.",
        avatar: null,
      },
      {
        author: "Sarah Mitchell",
        rating: 5,
        date: "2 months ago",
        text: "Upgraded our old fuse box to a modern switchboard. The quote was accurate, no hidden costs, and the work was done in half a day. Will use again.",
        avatar: null,
      },
      {
        author: "Tom Brennan",
        rating: 4,
        date: "8 months ago",
        text: "Great job on our office lighting fit-out. Only reason for 4 stars is the initial quote took a few days, but the actual work was top-notch.",
        avatar: null,
      },
    ],
  },

  // ============================================================
  // SERVICE AREA
  // ============================================================
  serviceArea: {
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226297.0824580858!2d152.84835045!3d-27.4710107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD!5e0!3m2!1sen!2sau!4v1234567890",
    suburbs: [
      "Brisbane CBD",
      "Newstead",
      "Fortitude Valley",
      "New Farm",
      "Paddington",
      "Milton",
      "Toowong",
      "Indooroopilly",
      "Chermside",
      "Nundah",
      "Wynnum",
      "Carindale",
      "Mount Gravatt",
      "Sunnybank",
      "Springfield",
      "Ipswich",
    ],
  },

  // ============================================================
  // CONTACT FORM
  // ============================================================
  contactForm: {
    serviceOptions: [
      "Residential Electrical",
      "Commercial Fit-Out",
      "Emergency Call-Out",
      "Switchboard Upgrade",
      "EV Charger Installation",
      "Lighting",
      "Other",
    ],
    recipientEmail: "info@sparkandco.com.au",
  },
};

export default siteConfig;
