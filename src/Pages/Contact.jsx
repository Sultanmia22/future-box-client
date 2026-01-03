import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaClock } from 'react-icons/fa';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
const Contact = () => {
    const position = [23.8103, 90.4125]; 

    const {register,handleSubmit,watch,formState: { errors },reset} = useForm()

    const handleContact = async (data) => {

        const contactInfo = {
            name : data.name,
            email: data.email,
            subject: data.subject,
            message: data.message
        }
        const res = await axios.post('http://localhost:4011/contacts',contactInfo) 
        reset()
        if(res.data.acknowledged){
            toast.success('Your Message Submited Successfully!')
        }
    }

    return (
        <div className="min-h-screen  dark:bg-gray-800 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                        Get In <span className="text-primary">Touch</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Have questions or want to collaborate? We'd love to hear from you.
                        Send us a message and we'll respond as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Contact Information Cards */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Email Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:-translate-y-1">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 p-4 rounded-2xl">
                                    <FaEnvelope className="text-3xl text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        Email Us
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                                        Drop us an email anytime
                                    </p>
                                    <a
                                        href="mailto:support@artify.com"
                                        className="text-primary hover:text-primary/80 hover:underline font-semibold transition-colors"
                                    >
                                        support@artify.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-2 border-primary/20 hover:-translate-y-1">
                            <div className="flex items-start space-x-4">
                                <div className="bg-primary/10 p-4 rounded-2xl">
                                    <FaPhone className="text-3xl text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        Call Us
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                                        Mon-Fri from 9am to 6pm
                                    </p>
                                    <a
                                        href="tel:+1234567890"
                                        className="text-primary hover:text-primary/80 hover:underline font-semibold transition-colors"
                                    >
                                        +1 (234) 567-890
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Location Card */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-2 border-secondary/20 hover:-translate-y-1">
                            <div className="flex items-start space-x-4">
                                <div className="bg-secondary/10 p-4 rounded-2xl">
                                    <FaMapMarkerAlt className="text-3xl text-secondary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                                        Visit Us
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                                        Come say hello
                                    </p>
                                    <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                                        123 Art Street<br />
                                        Creative District<br />
                                        New York, NY 10001
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Office Hours */}
                        <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl shadow-xl p-6 text-white">
                            <div className="flex items-center mb-4">
                                <FaClock className="text-3xl mr-3" />
                                <h3 className="text-xl font-bold">Office Hours</h3>
                            </div>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
                                    <span>Monday - Friday:</span>
                                    <span className="font-bold">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
                                    <span>Saturday:</span>
                                    <span className="font-bold">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between items-center bg-white/10 backdrop-blur-sm rounded-lg p-2">
                                    <span>Sunday:</span>
                                    <span className="font-bold">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-gray-800 shadow-2xl p-8 md:p-10 dark:border-gray-700 border-2 border-primary/30 rounded-3xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
                                Send Us a Message
                            </h2>
                            <form onSubmit={handleSubmit(handleContact)} className="space-y-6">
                                {/* Name Input */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Your Name
                                    </label>
                                    <input
                                    {...register('name')}
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                    {...register('email')}
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Subject Input */}
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Subject
                                    </label>
                                    <input
                                    {...register('subject')}
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
                                        placeholder="How can we help you?"
                                    />
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                    {...register('message')}
                                        id="message"
                                        name="message"
                                        required
                                        rows="6"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 transform hover:-translate-y-1"
                                >
                                    <FaPaperPlane className="text-xl" />
                                    <span className="text-lg">Send Message</span>
                                </button>
                            </form>
                        </div>

                        {/* FAQ Section */}
                        <div className="mt-8 bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-8 border-2 border-gray-100 dark:border-gray-700">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                Frequently Asked Questions
                            </h3>
                            <div className="space-y-5">
                                <div className="border-l-4 border-primary pl-5 hover:pl-6 transition-all duration-300">
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                                        How long does it take to get a response?
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        We typically respond within 24-48 hours during business days.
                                    </p>
                                </div>
                                <div className="border-l-4 border-secondary pl-5 hover:pl-6 transition-all duration-300">
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                                        Can I showcase my artwork on Artify?
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Absolutely! Simply register and start uploading your artworks to your gallery.
                                    </p>
                                </div>
                                <div className="border-l-4 border-primary pl-5 hover:pl-6 transition-all duration-300">
                                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                                        Is there a fee to use Artify?
                                    </h4>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Artify is free to use for all artists and art enthusiasts.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map Section */}

                <div className='w-full h-[500px]'>
                    <MapContainer center={position} zoom={13}  className='w-full h-[500px]'>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={position}>
                            <Popup>
                                A pretty CSS3 popup. <br /> Easily customizable.
                            </Popup>
                        </Marker>
                    </MapContainer>,
                </div>

                {/*  <div className="mt-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
                        Find Us Here
                    </h2>
                    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border-2 border-primary/20">
                        <div className="aspect-w-16 aspect-h-9 h-96 md:h-[500px]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Contact;