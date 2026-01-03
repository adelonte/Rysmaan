<script setup lang="ts">
const { isModalOpen } = useEarlyAccess()

const landingData = {
  hero: {
    title: "Simplified, Trusted Partnerships",
    description: "Rysmaan’s secure platform helps project managers find and evaluate qualified local vendors, while giving vendors visibility to projects that need their expertise. Streamline your RFQ process and build better partnerships",
    cta: {
      primary: { label: "Get Started as Project Manager", to: "/auth/signup?role=pm" },
      secondary: { label: "Join as Vendor", to: "/auth/signup?role=vendor" }
    }
  },
  valueProps: [
    {
      title: "Project Managers",
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
      title: "Vendors",
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
          title: "Define Your Requirements",
          description: "Create and share RFQs based on your project scope, qualifications, and compliance needs.",
          icon: "i-heroicons-clipboard-document-list"
        },
        {
          title: "Discover Qualified Vendors",
          description: "Find available vendors matched by expertise, qualifications, and compliance.",
          icon: "i-heroicons-magnifying-glass"
        },
        {
          title: "Review and Compare Responses",
          description: "Evaluate proposals side by side using your preferred criteria.",
          icon: "i-heroicons-chart-bar"
        },
        {
          title: "Award with Confidence",
          description: "Select the right vendor with clear documentation and decision history.",
          icon: "i-heroicons-trophy"
        }
      ]
    },
    vendor: {
      title: "For Vendors",
      steps: [
        {
          title: "Showcase Your Capabilities",
          description: "Present your services, qualifications, and compliance in a single profile.",
          icon: "i-heroicons-shield-check"
        },
        {
          title: "Get Discovered",
          description: "Be visible to project managers seeking qualified partners.",
          icon: "i-heroicons-cursor-arrow-ripple"
        },
        {
          title: "Respond and Communicate",
          description: "Submit quotes and communicate clearly in one place.",
          icon: "i-heroicons-chat-bubble-left-right"
        },
        {
          title: "Build Your Track Record",
          description: "Strengthen your reputation through performance metrics after project completion.",
          icon: "i-heroicons-chart-bar-square"
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
    title: "Ready to Experience Rysmaan?",
    description: "Join project managers and vendors connect more effectively on one platform",
    primary: { label: "Get Started" }
  }
}
</script>

<template>
  <div class="space-y-0">
    <HeroSection
      :title="landingData.hero.title"
      :description="landingData.hero.description"
      :cta="landingData.hero.cta"
    />

    <EarlyAccessModal v-model:is-open="isModalOpen" />

    <WhyRysmaanSection class="bg-gray-50 dark:bg-gray-900" />

    <ULandingSection :ui="{ wrapper: 'py-24 sm:py-32' }">
      <ValuePropsSection :value-props="landingData.valueProps" />
    </ULandingSection>

    <ULandingSection class="bg-gray-50 dark:bg-gray-900" :ui="{ wrapper: 'py-24 sm:py-32' }">
      <HowItWorksSection :how-it-works="landingData.howItWorks" />
    </ULandingSection>

    <ULandingSection :ui="{ wrapper: 'py-24 sm:py-32' }">
      <ScreenshotsSection />
    </ULandingSection>

    <ULandingSection class="bg-gray-50 dark:bg-gray-900" :ui="{ wrapper: 'py-24 sm:py-32' }">
      <CTASection :cta="landingData.cta" />
    </ULandingSection>
  </div>
</template>
