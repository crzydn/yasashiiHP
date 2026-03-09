import React from 'react';

const PricingSection = () => {
    const plans = [
        {
            title: 'Light',
            price: '$10/month',
            description: 'Basic access with limited features.'
        },
        {
            title: 'AI Coaching',
            price: '$30/month',
            description: 'Personalized coaching powered by AI.'
        },
        {
            title: 'Maintenance',
            price: '$50/month',
            description: 'All features with priority support.'
        }
    ];

    return (
        <div className="pricing-section">
            <h1>Pricing Plans</h1>
            <div className="plans">
                {plans.map((plan, index) => (
                    <div key={index} className="plan">
                        <h2>{plan.title}</h2>
                        <p>{plan.description}</p>
                        <p><strong>{plan.price}</strong></p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingSection;