const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Contact</h1>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info Section */}
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in touch</h2>
            <p className="text-lg text-gray-600 mb-8">
              Have questions or ready to transform your business with AI automation?
            </p>
            
            <ul className="space-y-6">
              <li className="flex flex-col">
                <span className="font-bold text-gray-800">Email us</span>
                <a href="mailto:johnnyjugorov@gmail.com" className="text-blue-600 hover:underline">
                  johnnyjugorov@gmail.com
                </a>
              </li>
              
              <li className="flex flex-col">
                <span className="font-bold text-gray-800">Call us</span>
                <a href="tel:5011234687" className="text-blue-600 hover:underline">
                  (501) 123.4687
                </a>
              </li>
              
              <li className="flex flex-col">
                <span className="font-bold text-gray-800">Our location</span>
                <span className="text-gray-600">Crosby Street, NY, US</span>
              </li>
            </ul>
          </div>
          
          {/* Contact Form Section with divider line */}
          <div className="md:w-1/2 relative">
            {/* Horizontal divider for mobile */}
            <div className="my-8 h-px bg-gray-200 md:hidden"></div>
            
            {/* Vertical divider for desktop */}
            <div className="hidden md:block absolute w-px h-full bg-gray-200 -left-6 top-0"></div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;