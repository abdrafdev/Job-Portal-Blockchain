import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Search, Settings, MessageCircle, MapPin, Clock, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-4 group cursor-pointer">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                <span className="text-white font-bold text-xl">T</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 group-hover:text-black transition-colors duration-300">Talentium</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              <a href="#" className="text-gray-900 font-semibold hover:text-black transition-colors duration-200 relative group text-lg">
                Home
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-100 transition-transform duration-300"></div>
              </a>
              <div className="relative">
                <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center transition-colors duration-200 group text-lg">
                  Messages
                  <div className="ml-2 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></div>
                </a>
              </div>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg">About us</a>
              <Button variant="outline" size="lg" className="rounded-full px-8 py-3 border-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 text-lg font-medium">
                Jobs
              </Button>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-lg">Community</a>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="lg" className="hover:bg-gray-50 transition-all duration-300 p-3">
                <Settings className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="lg" className="hover:bg-gray-50 transition-all duration-300 p-3">
                <MessageCircle className="h-6 w-6" />
              </Button>
              <Avatar className="cursor-pointer ring-2 ring-transparent hover:ring-gray-300 transition-all duration-300 w-12 h-12">
                <AvatarFallback className="bg-black text-white text-lg font-bold">U</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar - Filters */}
          <aside className="w-80 flex-shrink-0">
            <Card className="sticky top-28 bg-white shadow-xl border-0 rounded-2xl overflow-hidden">
              <CardHeader className="bg-gray-50 px-8 py-6 border-b border-gray-100">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-900">Filters</h2>
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-black hover:bg-white px-4 py-2 rounded-lg font-medium">
                    Reset all
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="px-8 py-6 space-y-8">
                {/* Work Schedule */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-6">Work schedule</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 group">
                      <Checkbox id="fulltime" defaultChecked className="w-5 h-5" />
                      <Label htmlFor="fulltime" className="text-base text-gray-700 group-hover:text-gray-900 transition-colors cursor-pointer font-medium">Full-time</Label>
                      <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">2,340</span>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <Checkbox id="parttime" defaultChecked className="w-5 h-5" />
                      <Label htmlFor="parttime" className="text-base text-gray-700 group-hover:text-gray-900 transition-colors cursor-pointer font-medium">Part-time</Label>
                      <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">892</span>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <Checkbox id="contract" className="w-5 h-5" />
                      <Label htmlFor="contract" className="text-base text-gray-700 group-hover:text-gray-900 transition-colors cursor-pointer font-medium">Contract</Label>
                      <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">456</span>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <Checkbox id="internship" className="w-5 h-5" />
                      <Label htmlFor="internship" className="text-base text-gray-700 group-hover:text-gray-900 transition-colors cursor-pointer font-medium">Internship</Label>
                      <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">134</span>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <Checkbox id="freelance" className="w-5 h-5" />
                      <Label htmlFor="freelance" className="text-base text-gray-700 group-hover:text-gray-900 transition-colors cursor-pointer font-medium">Freelance</Label>
                      <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">678</span>
                    </div>
                  </div>
                </div>

                <Separator className="bg-gray-200" />

                {/* Salary Range */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-6">Salary range</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm font-medium text-gray-700">Min: $2,500</span>
                        <span className="text-sm font-medium text-gray-700">Max: $15,000+</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-black h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                      <div className="mt-4 text-center">
                        <span className="text-lg font-bold text-gray-900">$3,500 - $12,000</span>
                      </div>
                    </div>
                  </div>
                </div>

                <Separator className="bg-gray-200" />

                {/* Experience Level */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-6">Experience level</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 group">
                      <Checkbox id="entry" className="w-5 h-5" />
                      <Label htmlFor="entry" className="text-base text-gray-700 group-hover:text-gray-900 transition-colors cursor-pointer font-medium">Entry level</Label>
                      <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">945</span>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <Checkbox id="mid" defaultChecked className="w-5 h-5" />
                      <Label htmlFor="mid" className="text-base text-gray-700 group-hover:text-gray-900 transition-colors cursor-pointer font-medium">Mid level</Label>
                      <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">1,234</span>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <Checkbox id="senior" defaultChecked className="w-5 h-5" />
                      <Label htmlFor="senior" className="text-base text-gray-700 group-hover:text-gray-900 transition-colors cursor-pointer font-medium">Senior level</Label>
                      <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">678</span>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <Checkbox id="lead" className="w-5 h-5" />
                      <Label htmlFor="lead" className="text-base text-gray-700 group-hover:text-gray-900 transition-colors cursor-pointer font-medium">Lead/Principal</Label>
                      <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">234</span>
                    </div>
                  </div>
                </div>

                <Separator className="bg-gray-200" />

                {/* Work Style */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-6">Work style</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 group">
                      <Checkbox id="office" className="w-5 h-5" />
                      <Label htmlFor="office" className="text-base text-gray-700 group-hover:text-gray-900 transition-colors cursor-pointer font-medium">On-site</Label>
                      <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">1,456</span>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <Checkbox id="hybrid" defaultChecked className="w-5 h-5" />
                      <Label htmlFor="hybrid" className="text-base text-gray-700 group-hover:text-gray-900 transition-colors cursor-pointer font-medium">Hybrid</Label>
                      <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">2,123</span>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <Checkbox id="remote" defaultChecked className="w-5 h-5" />
                      <Label htmlFor="remote" className="text-base text-gray-700 group-hover:text-gray-900 transition-colors cursor-pointer font-medium">Remote</Label>
                      <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">1,789</span>
                    </div>
                  </div>
                </div>

                <Separator className="bg-gray-200" />

                {/* Company Size */}
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-6">Company size</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 group">
                      <Checkbox id="startup" className="w-5 h-5" />
                      <Label htmlFor="startup" className="text-base text-gray-700 group-hover:text-gray-900 transition-colors cursor-pointer font-medium">Startup (1-50)</Label>
                      <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">445</span>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <Checkbox id="medium" defaultChecked className="w-5 h-5" />
                      <Label htmlFor="medium" className="text-base text-gray-700 group-hover:text-gray-900 transition-colors cursor-pointer font-medium">Medium (51-200)</Label>
                      <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">678</span>
                    </div>
                    <div className="flex items-center space-x-4 group">
                      <Checkbox id="large" className="w-5 h-5" />
                      <Label htmlFor="large" className="text-base text-gray-700 group-hover:text-gray-900 transition-colors cursor-pointer font-medium">Large (200+)</Label>
                      <span className="ml-auto text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">1,234</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            {/* Search Bar */}
            <div className="mb-12">
              <div className="relative group">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
                <Input
                  type="text"
                  placeholder="Search for jobs, companies, or skills..."
                  className="pl-16 pr-6 py-8 text-xl bg-white border-2 border-gray-200 rounded-2xl shadow-lg hover:shadow-xl focus:shadow-2xl transition-all duration-300 hover:border-gray-300 focus:border-black focus:ring-0 placeholder:text-gray-400"
                />
                <div className="absolute inset-y-0 right-0 flex items-center space-x-3 pr-6">
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 cursor-pointer px-4 py-2 text-sm font-medium rounded-xl">
                    United States
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200 cursor-pointer px-4 py-2 text-sm font-medium rounded-xl">
                    5+ years experience
                  </Badge>
                  <Button size="lg" className="bg-black text-white hover:bg-gray-800 transition-all duration-300 px-8 py-4 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl">
                    Search
                  </Button>
                </div>
              </div>
            </div>

            {/* Job Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Job Card 1 - Motorola */}
              <Card className="group cursor-pointer hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-out bg-white border-0 shadow-lg rounded-2xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center space-x-5">
                      <Avatar className="w-16 h-16 shadow-lg group-hover:shadow-xl transition-all duration-300 ring-2 ring-gray-100">
                        <AvatarFallback className="bg-black text-white font-bold text-xl group-hover:scale-105 transition-transform duration-300">
                          M
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-gray-900 text-xl group-hover:text-black transition-colors duration-300">UX Researcher</h3>
                        <p className="text-base text-gray-600 font-medium">Motorola</p>
                        <div className="flex items-center mt-2 space-x-1">
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className={`w-2 h-2 rounded-full ${i < 4 ? 'bg-yellow-400' : 'bg-gray-200'}`} />
                            ))}
                          </div>
                          <span className="text-sm text-gray-500 ml-2">4.8 (234 reviews)</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                        $7,800
                        <span className="text-base text-gray-600 font-normal">/month</span>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">$93,600/year</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8 text-base text-gray-600 mb-8">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5" />
                      <span className="font-medium">Houston, TX</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>5 September • 139 applicants</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-gray-700 text-base leading-relaxed">
                      Join our team to research and design user-centered experiences for millions of users worldwide. Work with cutting-edge technology...
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-3">
                      <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-200 px-4 py-2 text-sm font-medium rounded-xl">
                        Full-time
                      </Badge>
                      <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-200 px-4 py-2 text-sm font-medium rounded-xl">
                        Hybrid
                      </Badge>
                      <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-200 transition-all duration-200 px-4 py-2 text-sm font-medium rounded-xl">
                        4-6 years
                      </Badge>
                    </div>
                    <div className="flex space-x-3">
                      <Button size="lg" className="bg-black text-white hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-4 rounded-xl text-lg font-semibold">
                        Apply Now
                      </Button>
                      <Button variant="outline" size="lg" className="hover:bg-red-50 hover:text-red-500 hover:border-red-300 transition-all duration-300 group/heart p-4 rounded-xl border-2">
                        <Heart className="w-6 h-6 group-hover/heart:fill-current transition-all duration-300" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Featured Card - Premium */}
              <Card className="relative overflow-hidden bg-white shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 ease-out cursor-pointer group rounded-2xl border-0">
                <CardContent className="p-8 relative z-10">
                  <div className="text-center">
                    <div className="mb-8">
                      <div className="w-20 h-20 bg-black rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <span className="text-white font-bold text-2xl">✨</span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-black transition-colors duration-300">
                        Find your dream job
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Get hired faster with premium perks! Boost your visibility and connect with top employers.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gray-50 p-4 rounded-xl">
                          <div className="text-2xl font-bold text-gray-900">5x</div>
                          <div className="text-sm text-gray-600">More visibility</div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl">
                          <div className="text-2xl font-bold text-gray-900">24/7</div>
                          <div className="text-sm text-gray-600">Priority support</div>
                        </div>
                      </div>
                      <Button size="lg" className="w-full bg-black text-white hover:bg-gray-800 font-semibold py-6 text-xl shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl">
                        Get PRO for $12/month
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <div className="absolute top-4 right-4">
                  <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">POPULAR</div>
                </div>
              </Card>

              {/* Job Card 2 - PayPal */}
              <Card className="group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-14 h-14 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <AvatarFallback className="bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                          P
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg group-hover:text-blue-600 transition-colors duration-300">Lead UX Researcher</h3>
                        <p className="text-sm text-muted-foreground">PayPal</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-foreground group-hover:text-green-600 transition-colors duration-300">
                        $6,000
                        <span className="text-sm text-muted-foreground font-normal">/month</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Los Angeles, CA</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>3 September • 179 applicants</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="hover:bg-blue-100 hover:text-blue-700 transition-all duration-200">
                        Project work
                      </Badge>
                      <Badge variant="secondary" className="hover:bg-blue-100 hover:text-blue-700 transition-all duration-200">
                        Office
                      </Badge>
                      <Badge variant="secondary" className="hover:bg-blue-100 hover:text-blue-700 transition-all duration-200">
                        8+ years
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Apply now
                      </Button>
                      <Button variant="outline" size="icon" className="hover:bg-red-50 hover:text-red-500 hover:border-red-300 transition-all duration-300 group/heart">
                        <Heart className="w-5 h-5 group-hover/heart:fill-current transition-all duration-300" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job Card 3 - Microsoft */}
              <Card className="group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-14 h-14 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <AvatarFallback className="bg-gradient-to-br from-red-500 to-blue-500 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                          M
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg group-hover:text-blue-600 transition-colors duration-300">Middle UI Designer</h3>
                        <p className="text-sm text-muted-foreground">Microsoft</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-foreground group-hover:text-green-600 transition-colors duration-300">
                        $5,250
                        <span className="text-sm text-muted-foreground font-normal">/month</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Redmond, WA</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>2 September • 196 applicants</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="hover:bg-blue-100 hover:text-blue-700 transition-all duration-200">
                        Full-time
                      </Badge>
                      <Badge variant="secondary" className="hover:bg-blue-100 hover:text-blue-700 transition-all duration-200">
                        Office
                      </Badge>
                      <Badge variant="secondary" className="hover:bg-blue-100 hover:text-blue-700 transition-all duration-200">
                        4-6 years
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Apply now
                      </Button>
                      <Button variant="outline" size="icon" className="hover:bg-red-50 hover:text-red-500 hover:border-red-300 transition-all duration-300 group/heart">
                        <Heart className="w-5 h-5 group-hover/heart:fill-current transition-all duration-300" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job Card 4 - Netflix */}
              <Card className="group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-14 h-14 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <AvatarFallback className="bg-gradient-to-br from-red-600 to-red-700 text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                          N
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg group-hover:text-blue-600 transition-colors duration-300">Interface designer</h3>
                        <p className="text-sm text-muted-foreground">Netflix</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-foreground group-hover:text-green-600 transition-colors duration-300">
                        $3,700
                        <span className="text-sm text-muted-foreground font-normal">/month</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>San Francisco, CA</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>29 August • 115 applicants</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="hover:bg-blue-100 hover:text-blue-700 transition-all duration-200">
                        Part-time
                      </Badge>
                      <Badge variant="secondary" className="hover:bg-blue-100 hover:text-blue-700 transition-all duration-200">
                        Office
                      </Badge>
                      <Badge variant="secondary" className="hover:bg-blue-100 hover:text-blue-700 transition-all duration-200">
                        4-6 years
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Apply now
                      </Button>
                      <Button variant="outline" size="icon" className="hover:bg-red-50 hover:text-red-500 hover:border-red-300 transition-all duration-300 group/heart">
                        <Heart className="w-5 h-5 fill-current text-red-500 transition-all duration-300" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Job Card 5 - X Corp */}
              <Card className="group cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-out border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="w-14 h-14 shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <AvatarFallback className="bg-gradient-to-br from-gray-900 to-black text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                          X
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-foreground text-lg group-hover:text-blue-600 transition-colors duration-300">Art Director</h3>
                        <p className="text-sm text-muted-foreground">X Corp.</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-foreground group-hover:text-green-600 transition-colors duration-300">
                        $9,500
                        <span className="text-sm text-muted-foreground font-normal">/month</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>Houston, TX</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>28 August • 189 applicants</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="hover:bg-blue-100 hover:text-blue-700 transition-all duration-200">
                        Full-time
                      </Badge>
                      <Badge variant="secondary" className="hover:bg-blue-100 hover:text-blue-700 transition-all duration-200">
                        Hybrid
                      </Badge>
                      <Badge variant="secondary" className="hover:bg-blue-100 hover:text-blue-700 transition-all duration-200">
                        7-10 years
                      </Badge>
                    </div>
                    <div className="flex space-x-2">
                      <Button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                        Apply now
                      </Button>
                      <Button variant="outline" size="icon" className="hover:bg-red-50 hover:text-red-500 hover:border-red-300 transition-all duration-300 group/heart">
                        <Heart className="w-5 h-5 group-hover/heart:fill-current transition-all duration-300" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
