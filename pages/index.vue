<script setup lang="ts">
const { isModalOpen } = useEarlyAccess()

const landingData = {
  hero: {
    title: "Simplified, Trusted Partnerships",
    description: "Rysmaan’s secure platform helps project managers find and evaluate qualified local vendors, while giving vendors visibility to projects that need their expertise. Streamline your RFQ process and build better partnerships.",
    cta: {
      primary: { label: "Get Started as Project Manager", to: "/auth/signup?role=pm" },
      secondary: { label: "Join as Vendor", to: "/auth/signup?role=vendor" }
    }
  },
  valueProps: [
    {
      title: "For Project Managers",
      description: "One platform to manage your RFQ from start to finish",
      features: [
        "Find qualified vendors matched to your project needs",
        "Build tailored RFQs that reflect your project’s scope and complexity",
        "Share RFQs with trusted and newly qualified vendors in one step",
        "Compare responses side-by-side using your preferred criteria",
        "Keep all vendor communication organized in one place",
        "Award work confidently to the right vendor"
      ],
      icon: "i-heroicons-briefcase"
    },
    {
      title: "For Vendors",
      description: "One platform to connect your expertise with the right projects",
      features: [
        "Showcase your services, qualifications, and compliance to project managers",
        "Keep your profile and certifications up to date with a few clicks",
        "Discover RFQ opportunities that match your expertise",
        "Prepare quotes, communicate, and track responses in one place",
        "Build your reputation with performance metrics after project completion"
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

    <EarlyAccessModal v-model:is-open="isModalOpen" />

    <WhyRysmaanSection />

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
