import Logo from "../logo";
import  "./footer.css"
export default function Footer({className}:any) {
  return (
    <footer className={`${className} bg-gray-100`}>
      <div className=" mx-auto flex flex-col md:flex-row !items-center md:items-start justify-between py-5">
        
        {/* Logo Section */}
        <Logo className="hidden lg:block" />

        {/* Navigation Sections */}
        <div className="flex gap-12 md:mt-0 text-gray-600 text-sm">
          <div>
            <h6 className="font-semibold text-gray-800 mb-2">ABOUT</h6>
            <ul>
              <li><a href="https://www.linkedin.com/in/tinah-andriamarosoa-842055214/" className="hover:text-blue-900">Tinah Andriamarosoa</a></li>
              <li><a href="#" className="hover:text-blue-900">Writers</a></li>
              <li><a href="#" className="hover:text-blue-900">Annual Conference</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-gray-800 mb-2">CONTACT</h6>
            <ul>
              <li><a href="#" className="hover:text-blue-900">Get in Touch</a></li>
              <li><a href="#" className="hover:text-blue-900">Send News Tip</a></li>
              <li><a href="#" className="hover:text-blue-900">Advertise</a></li>
            </ul>
          </div>

          <div>
            <h6 className="font-semibold text-gray-800 mb-2">MORE</h6>
            <ul>
              <li><a href="#" className="hover:text-blue-900">Radio Show</a></li>
              <li><a href="#" className="hover:text-blue-900">Videos</a></li>
              <li><a href="#" className="hover:text-blue-900">Donate</a></li>
            </ul>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className=" md:mt-0 hidden md:block">
          <h6 className="font-semibold text-gray-800 mb-2">SUBSCRIBE FOR UPDATES</h6>
          <div className="flex items-center border border-gray-300 overflow-hidden">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="px-3 py-2 w-48 text-sm focus:outline-none bg-white"
            />
            <button className=" bg-white px-3 py-2">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-x-4 mt-3 text-lg text-gray-800">
            <a href="#" className="hover:text-blue-900"><i className="bi bi-facebook"></i></a>
            <a href="#" className="hover:text-blue-900"><i className="bi bi-twitter"></i></a>
            <a href="#" className="hover:text-blue-900"><i className="bi bi-youtube"></i></a>
            <a href="#" className="hover:text-blue-900"><i className="bi bi-rss"></i></a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
