import { Calendar, MapPin, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const EventsSection = () => {
  const events = [
    {
      id: 1,
      title: "Mestics",
      subtitle: "Annual Cultural Festival",
      date: "Dec 15-17",
      time: "10:00 AM",
      location: "Main Auditorium",
      attendees: "500+",
      category: "Cultural",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Coming Together",
      subtitle: "Freshers Welcome Event",
      date: "Dec 20",
      time: "6:00 PM",
      location: "Campus Grounds",
      attendees: "300+",
      category: "Social",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "Engraging Doterns",
      subtitle: "Technical Workshop Series",
      date: "Dec 22-23",
      time: "2:00 PM",
      location: "Computer Lab",
      attendees: "150+",
      category: "Technical",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 bg-muted/30 relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-16 left-12 w-28 h-28 bg-gradient-wave rounded-full opacity-25 blur-xl animate-pulse delay-600"></div>
      <div className="absolute bottom-20 right-24 w-36 h-36 bg-gradient-primary rounded-full opacity-20 blur-2xl animate-pulse delay-1300"></div>
      <div className="absolute top-1/3 left-1/4 w-22 h-22 bg-white/15 rounded-full opacity-40 blur-lg animate-pulse delay-200"></div>
      <div className="absolute bottom-1/3 right-1/3 w-30 h-30 bg-gradient-wave rounded-full opacity-18 blur-xl animate-pulse delay-900"></div>
      
      {/* More vibrant orbs */}
      <div className="absolute top-8 right-8 w-16 h-16 bg-cyan-400 rounded-full opacity-30 blur-lg animate-pulse delay-400"></div>
      <div className="absolute bottom-12 left-16 w-26 h-26 bg-lime-400 rounded-full opacity-25 blur-xl animate-pulse delay-1100"></div>
      <div className="absolute top-24 right-1/4 w-20 h-20 bg-yellow-400 rounded-full opacity-35 blur-lg animate-pulse delay-750"></div>
      <div className="absolute bottom-8 left-8 w-24 h-24 bg-pink-400 rounded-full opacity-22 blur-xl animate-pulse delay-1050"></div>
      <div className="absolute top-1/2 right-12 w-18 h-18 bg-emerald-400 rounded-full opacity-28 blur-lg animate-pulse delay-450"></div>
      <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-orange-400 rounded-full opacity-20 blur-2xl animate-pulse delay-1250"></div>
      <div className="absolute top-12 left-20 w-14 h-14 bg-purple-400 rounded-full opacity-33 blur-lg animate-pulse delay-650"></div>
      <div className="absolute bottom-32 right-12 w-28 h-28 bg-blue-400 rounded-full opacity-18 blur-xl animate-pulse delay-950"></div>
      <div className="absolute top-36 left-8 w-22 h-22 bg-rose-400 rounded-full opacity-30 blur-lg animate-pulse delay-350"></div>
      <div className="absolute bottom-36 right-16 w-26 h-26 bg-teal-400 rounded-full opacity-20 blur-xl animate-pulse delay-1150"></div>
      <div className="absolute top-44 right-1/3 w-16 h-16 bg-indigo-400 rounded-full opacity-25 blur-lg animate-pulse delay-550"></div>
      
      <div className="container px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Upcoming Events
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on the exciting events happening on campus
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {events.map((event) => (
            <Card key={event.id} className="group overflow-hidden border-0 hover:shadow-brand transition-all duration-300">
              <div className={`h-40 ${event.bgColor} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/20 text-white border-0">
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-white/90 text-sm">{event.subtitle}</p>
                </div>
              </div>
              
              <CardContent className="p-6 bg-gradient-card">
                <div className="space-y-3">
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date} at {event.time}
                  </div>
                  
                  <div className="flex items-center text-muted-foreground text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Users className="h-4 w-4 mr-2" />
                    {event.attendees} interested
                  </div>
                </div>

                <div className="flex gap-2 mt-6">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Learn More
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-primary hover:opacity-90 text-white border-0"
                  >
                    Register
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            Browse All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;