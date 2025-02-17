import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='flex flex-col min-h-screen'>
      <nav className='bg-white shadow-lg'>
        <div className='max-w-6xl mx-auto px-4'>
          <div className='flex justify-between items-center py-4'>
            <Link to='/' className='text-2xl font-bold text-indian-orange'>Ruchi</Link>
            <div className='flex space-x-8'>
  <Link 
    to='/' 
    className='hover:text-indian-orange transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-indian-orange hover:after:w-full after:transition-all'
  >
    Home
  </Link>
  {/* Add same styling to other nav links */}
</div>
          </div>
        </div>
      </nav>

      <Outlet />

      <footer className='bg-gray-800 text-white mt-auto'>
        <div className='max-w-6xl mx-auto py-8 px-4'>
          <div className='grid md:grid-cols-3 gap-8'>
            <div>
              <h4 className='text-xl mb-4'>Contact Us</h4>
              <p>123 Spice Street</p>
              <p>New Delhi, India</p>
            </div>
            {/* Add more footer content */}
          </div>
        </div>
      </footer>
    </div>
  )
}