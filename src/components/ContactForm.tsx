import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after a few seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitted && (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg animate-fade-in">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors"
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-primary-300 focus:border-primary-500 outline-none transition-colors resize-none"
        />
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className={`btn btn-primary w-full ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
};

export default ContactForm;