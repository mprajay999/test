export default function Home() {
  return (
    <div className='min-h-screen'>
      <section className='relative h-[600px]'>
        <img 
          src='https://via.placeholder.com/1920x600' 
          alt='Restaurant Interior'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
          <h1 className='text-6xl text-white font-bold'>Ruchi Indian Kitchen</h1>
        </div>
      </section>

      <section className='py-16 px-4 max-w-6xl mx-auto'>
  <h2 className='text-4xl text-center mb-8 fade-in'>Experience Authentic Flavors</h2>
  <div className='grid md:grid-cols-3 gap-8'>
    <div className='bg-white p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all duration-300'>
      <img 
        src='https://images.unsplash.com/photo-1589302168068-964664d93dc0' 
        alt='Butter Chicken' 
        className='mb-4 rounded-lg h-48 w-full object-cover'
      />
      <h3 className='text-xl font-semibold mb-2'>Signature Dishes</h3>
      <p className='text-gray-600'>Family recipes perfected over decades</p>
      <button className='mt-4 text-indian-orange hover:underline'>View Menu →</button>
    </div>
    {/* Add more enhanced cards */}
  </div>

  <Testimonials />

  <div className='mt-16 bg-golden-turmeric/10 p-12 rounded-xl text-center'>
    <h3 className='text-3xl mb-4'>Ready for a Flavor Journey?</h3>
    <p className='text-xl mb-8'>Book your table now and get 10% off your first visit</p>
    <button className='bg-indian-orange text-white px-8 py-3 rounded-full hover:bg-opacity-90 transition-all'>
      Make Reservation
    </button>
  </div>
</section>
    </div>
  )
}