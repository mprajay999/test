export default function Contact() {
  return (
    <div className='py-16 px-4 max-w-6xl mx-auto'>
      <div className='grid md:grid-cols-2 gap-12'>
        <div className='space-y-8'>
          <h2 className='text-4xl font-bold'>Get in Touch</h2>
          
          <div className='space-y-4'>
            <div className='flex items-center space-x-4'>
              <div className='bg-indian-orange p-3 rounded-full'>
                <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6 text-white' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                </svg>
              </div>
              <div>
                <h3 className='text-xl font-semibold'>Visit Us</h3>
                <p className='text-gray-600'>123 Spice Street, New Delhi</p>
              </div>
            </div>
            {/* Add more contact methods */}
          </div>
        </div>

        <form className='bg-white p-8 rounded-xl shadow-lg'>
          <div className='space-y-6'>
            <div>
              <label className='block text-gray-700 mb-2'>Full Name</label>
              <input type='text' className='w-full p-3 border rounded-lg focus:ring-2 focus:ring-indian-orange' />
            </div>
            {/* Add more form fields */}
            <button className='w-full bg-indian-orange text-white py-3 rounded-lg hover:bg-opacity-90 transition-all'>
              Send Message
            </button>
          </div>
        </form>
      </div>

      <div className='mt-16 rounded-xl overflow-hidden'>
        <iframe 
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.098041714526!2d77.20986431542593!3d28.646739390955755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1647420554985!5m2!1sen!2sin' 
          className='w-full h-96 border-0' 
          allowFullScreen 
          loading='lazy'
        />
      </div>
    </div>
  )
}