export default function Menu() {
  const dishes = [
    { name: 'Butter Chicken', price: '$18', image: 'https://via.placeholder.com/300' },
    { name: 'Biryani', price: '$20', image: 'https://via.placeholder.com/300' },
    // Add more dishes
  ]

  return (
    <div className='py-16 px-4 max-w-6xl mx-auto'>
      <h2 className='text-4xl text-center mb-12'>Our Menu</h2>
      <div className='grid md:grid-cols-3 gap-8'>
        {dishes.map((dish, index) => (
          <div key={index} className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'>
            <img src={dish.image} alt={dish.name} className='w-full h-48 object-cover'/>
            <div className='p-6'>
              <h3 className='text-xl font-semibold'>{dish.name}</h3>
              <p className='text-indian-orange mt-2'>{dish.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}