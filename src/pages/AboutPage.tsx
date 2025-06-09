import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <img 
              src="/FFR-logo.jpeg" 
              alt="Fresh Face Roya" 
              className="w-24 h-24 rounded-full object-cover shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-medium mb-4 text-primary-900">Our Story</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Fresh Face Roya was born from a passion for clean beauty and the belief that skincare should be both effective and pure.
          </p>
        </div>
        
        {/* Founder Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img 
              src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
              alt="Our Founder" 
              className="w-full h-auto rounded-xl"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-display font-medium mb-4 text-primary-800">Meet Our Founder</h2>
            <p className="text-neutral-600 mb-4">
              After struggling with sensitive skin and being unable to find products that were both gentle and effective, our founder Roya decided to create her own solution.
            </p>
            <p className="text-neutral-600 mb-4">
              With a background in dermatology and a passion for natural ingredients, she spent years developing formulations that combine the best of science and nature.
            </p>
            <p className="text-neutral-600">
              What started as a personal quest to create effective skincare without harsh chemicals has grown into a brand trusted by thousands of women around the world.
            </p>
            
            <div className="mt-6">
              <p className="italic text-neutral-700 font-medium">
                "I believe skincare should enhance your natural beauty, not mask it. Every product I create is designed to help you reveal your freshest face."
              </p>
              <p className="mt-2 text-neutral-500">— Roya Patel, Founder</p>
            </div>
          </div>
        </div>
        
        {/* Values Section */}
        <div className="bg-secondary-50 rounded-xl p-8 md:p-12 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-medium mb-4 text-primary-800">Our Values</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              These core principles guide everything we do, from product development to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-primary-800">Clean Ingredients</h3>
              <p className="text-neutral-600">
                We carefully select every ingredient for its safety and efficacy, avoiding harmful additives and focusing on natural, skin-loving components.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-primary-800">Sustainability</h3>
              <p className="text-neutral-600">
                From responsibly sourced ingredients to eco-friendly packaging, we're committed to minimizing our environmental footprint at every step.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-2 text-primary-800">Cruelty-Free</h3>
              <p className="text-neutral-600">
                We never test on animals and only work with suppliers who share our commitment to cruelty-free practices and ethical standards.
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Process */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-medium mb-4 text-primary-800">Our Process</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Creating effective, clean skincare is a meticulous process that combines science, nature, and care.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img 
                src="https://images.pexels.com/photos/3735652/pexels-photo-3735652.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Skincare ingredients research" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            
            <div>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-medium">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary-800">Research & Development</h3>
                    <p className="text-neutral-600">
                      Our team of skincare experts and dermatologists research the most effective natural ingredients and innovative formulation techniques.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-medium">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary-800">Ingredient Selection</h3>
                    <p className="text-neutral-600">
                      We carefully source the highest quality ingredients from trusted suppliers who share our values of sustainability and ethical practices.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-medium">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary-800">Formulation & Testing</h3>
                    <p className="text-neutral-600">
                      Each product is meticulously formulated and tested to ensure effectiveness, stability, and safety without animal testing.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-8 h-8 rounded-full bg-primary-500 text-white flex items-center justify-center font-medium">
                      4
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2 text-primary-800">Production & Packaging</h3>
                    <p className="text-neutral-600">
                      Products are produced in small batches to ensure quality and freshness, then packaged in eco-friendly materials that minimize environmental impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-medium mb-4 text-primary-800">Our Team</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Meet the passionate individuals behind Fresh Face Roya who are dedicated to creating exceptional skincare.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Team Member" 
                className="w-full h-auto rounded-xl object-cover aspect-[3/4] mb-4"
              />
              <h3 className="text-xl font-medium text-primary-800">Emma Johnson</h3>
              <p className="text-neutral-500">Lead Formulator</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Team Member" 
                className="w-full h-auto rounded-xl object-cover aspect-[3/4] mb-4"
              />
              <h3 className="text-xl font-medium text-primary-800">David Chen</h3>
              <p className="text-neutral-500">Sustainability Director</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
                alt="Team Member" 
                className="w-full h-auto rounded-xl object-cover aspect-[3/4] mb-4"
              />
              <h3 className="text-xl font-medium text-primary-800">Sarah Patel</h3>
              <p className="text-neutral-500">Creative Director</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;