export default function Testimonials() {
  const reviews = [
    {
      text: 'The best Indian dining experience outside of India!',
      author: 'Food Critic Magazine',
      role: 'Top Restaurant Guide'
    }
  ]

  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-6xl mx-auto px-4'>
        <h2 className='text-4xl text-center mb-12'>Rave Reviews</h2>
        <div className='grid md:grid-cols-3 gap-8'>
          {reviews.map((review, index) => (
            <div key={index} className='bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow'>
              <div className='text-4xl text-indian-orange mb-4'>“</div>
              <p className='text-gray-600 mb-6'>{review.text}</p>
              <div className='border-t pt-4'>
                <p className='font-semibold'>{review.author}</p>
                <p className='text-gray-500 text-sm'>{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}