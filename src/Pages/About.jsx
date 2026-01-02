import { FaPalette, FaUsers, FaHeart, FaRocket, FaLightbulb, FaHandshake } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen  dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-primary dark:text-white mb-6">
            About Artify
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A creative platform where artists showcase their masterpieces, connect with art enthusiasts, 
            and build a vibrant community of creativity and inspiration.
          </p>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20  bg-primary dark:bg-purple-800 rounded-full opacity-50 blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary dark:bg-blue-800 rounded-full opacity-50 blur-xl"></div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                Artify was born from a simple idea: every artist deserves a beautiful space to share their work 
                with the world. Founded in 2024, we set out to create more than just another art platform.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                We wanted to build a community where creativity flourishes, where artists of all levels feel 
                welcomed, and where art lovers can discover incredible talent from around the globe.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Today, Artify hosts thousands of artworks from talented creators worldwide, and we're just 
                getting started on this incredible journey.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80" 
                  alt="Art Gallery"
                  className="rounded-2xl shadow-2xl w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl opacity-20 blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-primary/30 dark:from-purple-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-primary p-4 rounded-full">
                  <FaRocket className="text-3xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white ml-4">
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
            <div className="bg-secondary/30 from-blue-100 bg-transp to-blue-50 dark:from-blue-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-secondary p-4 rounded-full">
                  <FaLightbulb className="text-3xl text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white ml-4">
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
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-secondary dark:text-white mb-12">
            Artify in Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold  bg-primary bg-clip-text text-transparent mb-2">
                10K+
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Artists</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold bg-primary bg-clip-text text-transparent mb-2">
                50K+
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Artworks</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold  bg-primary bg-clip-text text-transparent mb-2">
                100K+
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Users</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-5xl font-bold  bg-primary bg-clip-text text-transparent mb-2">
                150+
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">Countries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 bg-secondary/30 text-gray-600">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/30 transition-all duration-300">
                <FaPalette className="text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Creativity First</h3>
                <p className="text-white/90 leading-relaxed">
                  We celebrate artistic expression in all its forms and encourage artists to push boundaries 
                  and explore new horizons.
                </p>
              </div>
            </div>

            {/* Value 2 */}
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/30 transition-all duration-300">
                <FaUsers className="text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Community Driven</h3>
                <p className="text-white/90 leading-relaxed">
                  Our platform thrives on the connections between artists and art lovers, fostering 
                  meaningful relationships and collaborations.
                </p>
              </div>
            </div>

            {/* Value 3 */}
            <div className="text-center">
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/30 transition-all duration-300">
                <FaHeart className="text-5xl mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Passion & Support</h3>
                <p className="text-white/90 leading-relaxed">
                  We're passionate about supporting artists at every stage of their journey, providing 
                  tools and opportunities for growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Passionate individuals working together to make Artify the best platform for artists worldwide.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" 
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Alex Thompson</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">Founder & CEO</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Visionary leader with 10+ years in tech and art.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" 
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Sarah Martinez</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">Head of Design</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Award-winning designer passionate about UX.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" 
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Michael Chen</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">Lead Developer</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Full-stack expert building scalable solutions.
                </p>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" 
                alt="Team Member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Emily Roberts</h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">Community Manager</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Building connections between artists globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-white dark:bg-gray-800 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose Artify?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="border-l-4 border-purple-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Easy to Use
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Intuitive interface designed for artists of all skill levels. Upload and showcase your 
                work in minutes.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Global Reach
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Connect with art lovers and fellow artists from around the world. Your work deserves 
                a global audience.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Secure Platform
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Your artwork is protected with industry-standard security. Focus on creating while 
                we handle the rest.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="border-l-4 border-yellow-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Free Forever
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                No hidden fees, no subscriptions. Artify is completely free for all artists and 
                art enthusiasts.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="border-l-4 border-red-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Active Community
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Join a vibrant community of creators who support, inspire, and collaborate with 
                each other daily.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="border-l-4 border-indigo-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Regular Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We continuously improve Artify with new features based on community feedback and 
                industry trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <FaHandshake className="text-6xl text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Start your creative journey today and connect with thousands of artists and art lovers worldwide.
          </p>
          <button className="bg-primary text-gray-50 font-bold px-10 py-4 rounded-full text-lg hover:bg-secondary transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
            Get Started Now
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;