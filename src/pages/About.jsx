export default function About() {
  return (
    <div className='py-16 px-4 max-w-6xl mx-auto'>
      <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
        <div className='space-y-6'>
          <h2 className='text-4xl font-bold'>Our Story</h2>
          <p className='text-lg text-gray-600'>
            Founded in 2010 by Master Chef Rajesh Kapoor, Ruchi Indian Kitchen brings
            generations of culinary expertise to modern dining. Our spices are
            directly sourced from Kerala's markets, ensuring authentic flavors.
          </p>
        </div>
        <img 
          src='https://images.unsplash.com/photo-1552566626-52f8b828add9' 
          alt='Chef Rajesh' 
          className='rounded-xl shadow-xl h-96 object-cover'
        />
      </div>

      <div className='bg-spice-red text-white p-8 rounded-xl text-center'>
        <h3 className='text-3xl mb-4'>Awards & Recognition</h3>
        <div className='grid md:grid-cols-3 gap-8'>
          <div className='p-4'>
            <div className='text-4xl mb-2'>🏆</div>
            <h4 className='text-xl mb-2'>Best Indian Restaurant 2023</h4>
            <p className='text-gray-200'>Delhi Food Awards</p>
          </div>
          {/* Add more awards */}
        </div>
      </div>
    </div>
  )
}