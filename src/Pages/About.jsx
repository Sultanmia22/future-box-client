import { FaPalette, FaUsers, FaHeart, FaRocket, FaLightbulb, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-[#16a085]">Artify</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A creative platform where artists showcase their masterpieces, connect with art enthusiasts, 
            and build a vibrant community of creativity and inspiration.
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-24 h-24 bg-[#16a085]/20 rounded-full opacity-50 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#f0932b]/20 rounded-full opacity-50 blur-2xl"></div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-lg">
                Artify was born from a simple idea: every artist deserves a beautiful space to share their work 
                with the world. Founded in 2024, we set out to create more than just another art platform.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-lg">
                We wanted to build a community where creativity flourishes, where artists of all levels feel 
                welcomed, and where art lovers can discover incredible talent from around the globe.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Today, Artify hosts thousands of artworks from talented creators worldwide, and we're just 
                getting started on this incredible journey.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80" 
                  alt="Art Gallery"
                  className="rounded-3xl shadow-2xl w-full h-96 object-cover border-4 border-[#16a085]/20"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#f0932b]/30 rounded-3xl blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-gray-800 rounded-3xl p-10 shadow-xl border-2 border-[#16a085]/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="bg-[#16a085] p-5 rounded-2xl shadow-lg">
                  <FaRocket className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white ml-5">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                To empower artists worldwide by providing them with a stunning platform to showcase their 
                creativity, connect with appreciators, and turn their passion into opportunities. We believe 
                every piece of art deserves to be seen and celebrated.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-gray-800 rounded-3xl p-10 shadow-xl border-2 border-[#f0932b]/30 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="bg-[#f0932b] p-5 rounded-2xl shadow-lg">
                  <FaLightbulb className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white ml-5">
                  Our Vision
                </h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                To become the world's most inspiring art community where creativity knows no bounds. 
                We envision a future where artists from every corner of the globe unite to share, learn, 
                and grow together in a supportive environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Artify in Numbers
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
            Growing together as a creative community
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 border-2 border-[#16a085]/20 hover:-translate-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#16a085] mb-3">
                10K+
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-semibold text-lg">Artists</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 border-2 border-[#16a085]/20 hover:-translate-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#16a085] mb-3">
                50K+
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-semibold text-lg">Artworks</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 border-2 border-[#f0932b]/20 hover:-translate-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#f0932b] mb-3">
                100K+
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-semibold text-lg">Users</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 border-2 border-[#f0932b]/20 hover:-translate-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#f0932b] mb-3">
                150+
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-semibold text-lg">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#16a085] to-[#f0932b] text-white mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Core Values
          </h2>
          <p className="text-center text-white/90 mb-12 text-lg max-w-2xl mx-auto">
            The principles that guide everything we do at Artify
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-10 hover:bg-white/30 transition-all duration-300 border-2 border-white/30 hover:-translate-y-2">
                <FaPalette className="text-6xl mx-auto mb-5" />
                <h3 className="text-2xl font-bold mb-4">Creativity First</h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  We celebrate artistic expression in all its forms and encourage artists to push boundaries 
                  and explore new horizons.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-10 hover:bg-white/30 transition-all duration-300 border-2 border-white/30 hover:-translate-y-2">
                <FaUsers className="text-6xl mx-auto mb-5" />
                <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  Our platform thrives on the connections between artists and art lovers, fostering 
                  meaningful relationships and collaborations.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-lg rounded-3xl p-10 hover:bg-white/30 transition-all duration-300 border-2 border-white/30 hover:-translate-y-2">
                <FaHeart className="text-6xl mx-auto mb-5" />
                <h3 className="text-2xl font-bold mb-4">Passion & Support</h3>
                <p className="text-white/90 leading-relaxed text-lg">
                  We're passionate about supporting artists at every stage of their journey, providing 
                  tools and opportunities for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-lg">
            Passionate individuals working together to make Artify the best platform for artists worldwide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#16a085]/20 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Alex Thompson</h3>
                <p className="text-[#16a085] font-semibold mb-3 text-lg">Founder & CEO</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Visionary leader with 10+ years in tech and art.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#16a085]/20 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" 
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sarah Martinez</h3>
                <p className="text-[#16a085] font-semibold mb-3 text-lg">Head of Design</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Award-winning designer passionate about UX.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#f0932b]/20 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" 
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Michael Chen</h3>
                <p className="text-[#f0932b] font-semibold mb-3 text-lg">Lead Developer</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Full-stack expert building scalable solutions.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#f0932b]/20 hover:-translate-y-2">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" 
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Emily Roberts</h3>
                <p className="text-[#f0932b] font-semibold mb-3 text-lg">Community Manager</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Building connections between artists globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-white dark:bg-gray-800 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Why Choose Artify?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 text-lg">
            Features that make us the perfect platform for your creative journey
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="border-l-4 border-[#16a085] pl-6 hover:pl-8 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Easy to Use
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Intuitive interface designed for artists of all skill levels. Upload and showcase your 
                work in minutes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border-l-4 border-[#16a085] pl-6 hover:pl-8 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Global Reach
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Connect with art lovers and fellow artists from around the world. Your work deserves 
                a global audience.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border-l-4 border-[#f0932b] pl-6 hover:pl-8 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Secure Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Your artwork is protected with industry-standard security. Focus on creating while 
                we handle the rest.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border-l-4 border-[#f0932b] pl-6 hover:pl-8 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Free Forever
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                No hidden fees, no subscriptions. Artify is completely free for all artists and 
                art enthusiasts.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="border-l-4 border-[#16a085] pl-6 hover:pl-8 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Active Community
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Join a vibrant community of creators who support, inspire, and collaborate with 
                each other daily.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="border-l-4 border-[#f0932b] pl-6 hover:pl-8 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Regular Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                We continuously improve Artify with new features based on community feedback and 
                industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-4 bg-gradient-to-br from-[#16a085] via-[#0e8c70] to-[#f0932b] mb-10">
        <div className="max-w-4xl mx-auto text-center">
          <FaHandshake className="text-7xl text-white mx-auto mb-8 drop-shadow-lg" />
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-white/95 mb-10 leading-relaxed max-w-2xl mx-auto">
            Start your creative journey today and connect with thousands of artists and art lovers worldwide.
          </p>
          <button className="bg-white text-[#16a085] font-bold px-12 py-5 rounded-full text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105">
            Get Started Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;