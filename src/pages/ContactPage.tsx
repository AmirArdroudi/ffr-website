import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-display font-medium mb-4 text-primary-900">Contact Us</h1>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help! Fill out the form below and our team will get back to you as soon as possible.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
            <h2 className="text-2xl font-display font-medium mb-6 text-primary-800">Send Us a Message</h2>
            <ContactForm />
          </div>
          
          <div>
            <div className="bg-gradient-to-br from-secondary-50 to-primary-50 p-8 rounded-xl mb-8 border border-neutral-100">
              <h2 className="text-2xl font-display font-medium mb-6 text-primary-800">Our Information</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-800 mb-1">Address</h3>
                    <address className="not-italic text-neutral-600">
                      Ontario, Canada
                    </address>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-800 mb-1">Email</h3>
                    <p className="text-neutral-600">
                      <a href="mailto:Freshfaceroya@gmail.com" className="hover:text-primary-500 transition-colors">
                        Freshfaceroya@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-primary-800 mb-1">Phone</h3>
                    <p className="text-neutral-600">
                      <a href="tel:+16479280641" className="hover:text-primary-500 transition-colors">
                        +1 (647) 928-0641
                      </a>
                    </p>
                    <p className="text-neutral-600">Monday - Friday: 9am - 6pm EST</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Professional Services Notice */}
            <div className="bg-primary-50 p-6 rounded-xl shadow-sm border border-primary-200 mb-8">
              <h3 className="text-lg font-medium text-primary-800 mb-3">Professional Services</h3>
              <p className="text-primary-700 leading-relaxed">
                For clinic orders and partnership opportunities, please contact us directly. We offer special pricing and customized solutions for bulk orders and professional establishments.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-neutral-100">
              <h2 className="text-2xl font-display font-medium mb-6 text-primary-800">Follow Us</h2>
              
              <div className="space-y-4">
                <a 
                  href="https://instagram.com/fresh.face.roya" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-neutral-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-800">Instagram</h3>
                    <p className="text-sm text-neutral-500">@fresh.face.roya</p>
                  </div>
                </a>
                
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-4 border border-neutral-200 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-neutral-800">Facebook</h3>
                    <p className="text-sm text-neutral-500">Fresh Face Roya</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;