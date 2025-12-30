<script setup lang="ts">
const landingData = {
  hero: {
    title: "Streamline Your RFQ Process",
    description: "Rysmaan’s secure platform helps project managers find and evaluate qualified local vendors, while giving vendors visibility to projects that need their expertise. Streamline your RFQ process and build better partnerships.",
    cta: {
      primary: { label: "Get Started as Project Manager", to: "/auth/signup?role=pm" },
      secondary: { label: "Join as Vendor", to: "/auth/signup?role=vendor" }
    }
  },
  valueProps: [
    {
      title: "For Project Managers",
      description: "Post your requirements once and receive competitive quotes from qualified vendors",
      features: [
        "Save time with streamlined RFQ creation",
        "Compare detailed quotes side-by-side",
        "Centralized communication with all vendors",
        "Track project lifecycle from quote to completion"
      ],
      icon: "i-heroicons-briefcase"
    },
    {
      title: "For Vendors",
      description: "Discover new opportunities and grow your business with professional bidding tools",
      features: [
        "Access to quality RFQ opportunities",
        "Submit professional quotes with line items",
        "Direct messaging with project managers",
        "Build your reputation with performance metrics"
      ],
      icon: "i-heroicons-building-office"
    }
  ],
  features: {
    title: "Everything You Need",
    description: "A complete platform for managing the entire RFQ-to-project lifecycle",
    items: [
      {
        title: "Smart RFQ Management",
        description: "Create detailed RFQs with service types, locations, budgets, and deadlines. Track status from draft to awarded.",
        icon: "i-heroicons-document-text"
      },
      {
        title: "Detailed Quote Comparison",
        description: "Review quotes with line-item breakdowns, delivery dates, and payment terms. Accept or reject with feedback.",
        icon: "i-heroicons-calculator"
      },
      {
        title: "Built-in Messaging",
        description: "Communicate directly with vendors or project managers. Thread-based conversations keep everything organized.",
        icon: "i-heroicons-chat-bubble-left-right"
      },
      {
        title: "Quote Versioning",
        description: "Vendors can update quotes based on feedback. Track all versions and changes transparently.",
        icon: "i-heroicons-arrow-path"
      },
      {
        title: "Project Management",
        description: "Seamless transition from accepted quote to active project with milestone tracking and status updates.",
        icon: "i-heroicons-rectangle-group"
      },
      {
        title: "Performance Analytics",
        description: "Track response rates, win rates, and response times. Make data-driven decisions.",
        icon: "i-heroicons-chart-bar"
      }
    ]
  },
  howItWorks: {
    pm: {
      title: "For Project Managers",
      steps: [
        {
          title: "Post Your RFQ",
          description: "Create a detailed request with service type, location, budget, and requirements",
          icon: "i-heroicons-document-plus"
        },
        {
          title: "Receive Competitive Quotes",
          description: "Qualified vendors submit detailed quotes with line-item pricing",
          icon: "i-heroicons-inbox"
        },
        {
          title: "Compare & Communicate",
          description: "Review quotes side-by-side and message vendors for clarification",
          icon: "i-heroicons-arrows-right-left"
        },
        {
          title: "Award & Manage",
          description: "Accept the best quote and manage the project through completion",
          icon: "i-heroicons-check-circle"
        }
      ]
    },
    vendor: {
      title: "For Vendors",
      steps: [
        {
          title: "Browse Opportunities",
          description: "Filter RFQs by service type, location, and other criteria",
          icon: "i-heroicons-magnifying-glass"
        },
        {
          title: "Submit Your Quote",
          description: "Create professional quotes with detailed line items and pricing",
          icon: "i-heroicons-document-text"
        },
        {
          title: "Engage with PMs",
          description: "Answer questions and refine your quote based on feedback",
          icon: "i-heroicons-chat-bubble-left-ellipsis"
        },
        {
          title: "Win Projects",
          description: "Get notified when your quote is accepted and start the project",
          icon: "i-heroicons-trophy"
        }
      ]
    }
  },
  testimonials: [
    {
      name: "Sarah Johnson",
      role: "Construction Project Manager",
      company: "BuildCo",
      avatar: "https://avatar.vercel.sh/sarah",
      quote: "Rysmaan cut our procurement time in half. We now receive 3-5 competitive quotes for every project."
    },
    {
      name: "Michael Chen",
      role: "General Contractor",
      company: "Chen Construction",
      avatar: "https://avatar.vercel.sh/michael",
      quote: "The platform helped us find consistent work. The messaging system makes it easy to clarify requirements."
    },
    {
      name: "Emily Rodriguez",
      role: "Facilities Manager",
      company: "Metro Properties",
      avatar: "https://avatar.vercel.sh/emily",
      quote: "Quote comparison is incredibly detailed. We can see exactly what we're paying for with line-item breakdowns."
    }
  ],
  cta: {
    title: "Ready to Streamline Your Procurement?",
    description: "Join project managers and vendors who are already saving time and building better partnerships.",
    primary: { label: "Get Started for Free", to: "/auth/signup" },
    secondary: { label: "Learn More", to: "/docs" }
  }
}
</script>

<template>
  <div>
    <HeroSection
      :title="landingData.hero.title"
      :description="landingData.hero.description"
      :cta="landingData.hero.cta"
    />

    <ULandingSection class="bg-gray-50 dark:bg-gray-900">
      <ValuePropsSection :value-props="landingData.valueProps" />
    </ULandingSection>

    <ULandingSection>
      <FeaturesSection :features="landingData.features" />
    </ULandingSection>

    <ULandingSection class="bg-gray-50 dark:bg-gray-900">
      <ScreenshotsSection />
    </ULandingSection>

    <ULandingSection>
      <HowItWorksSection :how-it-works="landingData.howItWorks" />
    </ULandingSection>

    <ULandingSection>
      <TestimonialsSection :testimonials="landingData.testimonials" />
    </ULandingSection>

    <ULandingSection class="bg-gray-50 dark:bg-gray-900">
      <CTASection :cta="landingData.cta" />
    </ULandingSection>
  </div>
</template>
