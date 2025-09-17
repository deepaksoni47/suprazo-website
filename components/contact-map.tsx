"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";

export function ContactMap() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Office
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visit us at our office in Nagpur or connect with us virtually from
            anywhere in the world.
          </p>
        </div>

        <Card className="glass-card border-0 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Map Placeholder */}
              <div className="relative h-96 lg:h-auto bg-gradient-to-br from-primary/10 to-secondary/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mb-4 mx-auto animate-glow">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-foreground mb-2">
                      Nagpur, Maharashtra
                    </h3>
                    <p className="text-muted-foreground">
                      SuPrazo Technologies Office
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-primary rounded-full animate-pulse" />
                <div
                  className="absolute top-8 right-8 w-2 h-2 bg-secondary rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute bottom-12 left-12 w-4 h-4 bg-primary/50 rounded-full animate-pulse"
                  style={{ animationDelay: "2s" }}
                />
                <div
                  className="absolute bottom-4 right-4 w-2 h-2 bg-secondary/50 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
              </div>

              {/* Location Info */}
              <div className="p-8 lg:p-12">
                <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
                  Our Office
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        Visit Us
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Drop by our office for face-to-face consultations and
                        project discussions.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Navigation className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        Easy Access
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Conveniently located in Nagpur with good connectivity
                        and parking facilities.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Navigation className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground mb-1">
                        Local & Global
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Serving local businesses in Maharashtra and clients
                        worldwide.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 glass rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-foreground">Address:</strong>{" "}
                    Mehandibagh Colony, Nagpur, Maharashtra, India 440017
                    <br />
                    <strong className="text-foreground">City:</strong> Nagpur
                    <br />
                    <strong className="text-foreground">State:</strong>{" "}
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
