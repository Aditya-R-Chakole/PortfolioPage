export interface PricingPlan {
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly description: string;
  readonly features: readonly string[];
}

export const pricingData = {
  plans: [
    {
      id: 'personal',
      name: 'Personal',
      price: 39,
      description: "The perfect plan if you're just getting started with our product.",
      features: [
        '25 products',
        'Up to 10,000 subscribers',
        'Audience segmentation',
        'Advanced analytics',
        'Email support',
        'Marketing automations'
      ]
    },
    {
      id: 'team',
      name: 'Team',
      price: 99,
      description: 'A plan that scales with your rapidly growing business.',
      features: [
        'Priority support',
        'Single sign-on',
        'Enterprise integrations',
        'Custom reporting tools'
      ]
    }
  ]
} as const;
