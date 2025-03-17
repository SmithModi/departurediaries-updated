
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import SectionHeading from '@/components/shared/SectionHeading';

const Contact = () => {
  // Define form
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  // Handle form submission
  const onSubmit = (data: any) => {
    console.log('Form submitted:', data);
    // In a real app, you would send this data to your backend
    form.reset();
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
  };

  // Add page title
  useEffect(() => {
    document.title = 'Contact Us - Departure Diaries';
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-travel-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg text-travel-100">
            We're here to answer any questions you have about our travel experiences. 
            Get in touch with us and start planning your dream journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Contact Information & Map in one column */}
            <div className="lg:col-span-4 space-y-6">
              <SectionHeading
                subtitle="Reach Out To Us"
                title="Get in Touch"
                centered={false}
                className="text-left"
              />
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Have questions about a destination or need help planning your 
                trip? Our travel experts are ready to assist you.
              </p>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-travel-100 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-travel-600" size={16} />
                    </div>
                    <div>
                      <h3 className="font-medium text-base mb-1">Address</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Office No 1018, 10th Floor, RK World Tower<br />
                        Near Sheetal Park BRTS, 150 Feet Ring Rd,<br />
                        above Zudio, Rajkot, Gujarat 360006
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-travel-100 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-travel-600" size={16} />
                    </div>
                    <div>
                      <h3 className="font-medium text-base mb-1">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        <a href="tel:+919898048778" className="hover:text-travel-600 transition-colors">
                          +91 98980 48778
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-travel-100 flex items-center justify-center flex-shrink-0">
                      <Mail className="text-travel-600" size={16} />
                    </div>
                    <div>
                      <h3 className="font-medium text-base mb-1">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        <a href="mailto:info@departurediaries.com" className="hover:text-travel-600 transition-colors">
                          info@departurediaries.com
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="h-8 w-8 rounded-full bg-travel-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-travel-600" size={16} />
                    </div>
                    <div>
                      <h3 className="font-medium text-base mb-1">Hours</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Monday - Friday: 9:00 AM - 7:30 PM<br />
                        Saturday: 10:00 AM - 5:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Mini Map */}
              <Card className="mt-6 shadow-md overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-[240px] w-full">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6768508953726!2d70.77235287514757!3d22.290715479741465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0x44f7d73464f8da8c!2sRK%20World%20Tower%2C%20150%20Feet%20Ring%20Rd%2C%20above%20Zudio%2C%20Rajkot%2C%20Gujarat%20360005!5e0!3m2!1sen!2sin!4v1710934068309!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <Card className="shadow-lg border-0 h-full">
                <CardContent className="p-6 md:p-8">
                  <h2 className="font-display text-2xl font-semibold mb-6">Send Us a Message</h2>
                  
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="john@example.com" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input placeholder="How can we help you?" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us more about your travel plans..." 
                                className="min-h-[150px]" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" className="w-full bg-travel-600 hover:bg-travel-700">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
