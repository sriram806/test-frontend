"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { ArrowRight, Star, MapPin, Clock, Search, FilterX } from 'lucide-react';
import { travelPackages, TravelPackage } from '@/lib/data';

export default function PackagesPage() {
  const searchParams = useSearchParams();
  const locationParam = searchParams.get('location');
  const searchQuery = searchParams.get('search');

  const [packages, setPackages] = useState<TravelPackage[]>([]);
  const [filteredPackages, setFilteredPackages] = useState<TravelPackage[]>([]);
  const [searchTerm, setSearchTerm] = useState(searchQuery || '');
  const [filters, setFilters] = useState({
    location: locationParam || 'all',
    priceRange: [0, 50000],
    duration: 'any',
    sortBy: 'recommended'
  });

  useEffect(() => {
    // In a real app, this would be an API call with filters
    setPackages(travelPackages);
  }, []);

  useEffect(() => {
    if (locationParam) {
      setFilters(prev => ({ ...prev, location: locationParam }));
    }
    if (searchQuery) {
      setSearchTerm(searchQuery);
    }
  }, [locationParam, searchQuery]);

  useEffect(() => {
    applyFilters();
  }, [packages, filters, searchTerm]);

  const applyFilters = () => {
    let result = [...packages];

    // Apply search term
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      result = result.filter(pkg =>
        pkg.name.toLowerCase().includes(search) ||
        pkg.description.toLowerCase().includes(search) ||
        pkg.location.toLowerCase().includes(search)
      );
    }

    // Apply location filter
    if (filters.location && filters.location !== 'all') {
      result = result.filter(pkg => pkg.location === filters.location);
    }

    // Apply price range filter
    result = result.filter(pkg =>
      pkg.price >= filters.priceRange[0] && pkg.price <= filters.priceRange[1]
    );

    // Apply duration filter
    if (filters.duration && filters.duration !== 'any') {
      // Simple parsing of duration strings
      result = result.filter(pkg => {
        const days = parseInt(pkg.duration.split('Days')[0].split('/')[1].trim());
        if (filters.duration === '1-3') return days <= 3;
        if (filters.duration === '4-6') return days >= 4 && days <= 6;
        if (filters.duration === '7-10') return days >= 7 && days <= 10;
        if (filters.duration === '10+') return days > 10;
        return true;
      });
    }

    // Apply sorting
    if (filters.sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (filters.sortBy === 'rating') {
      result.sort((a, b) => b.rating - a.rating);
    }

    setFilteredPackages(result);
  };

  const resetFilters = () => {
    setFilters({
      location: 'all',
      priceRange: [0, 50000],
      duration: 'any',
      sortBy: 'recommended'
    });
    setSearchTerm('');
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="bg-gray-100 dark:bg-gray-900 py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-wide bg-gradient-to-r from-blue-800 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            Explore Our Curated Travel Escapes
          </h1>
          <p className="max-w-2xl mx-auto text-lg leading-relaxed text-gray-900 dark:text-gray-50 bg-clip-text">
            Embark on unforgettable journeys across India with our handpicked travel packages.
            Refine your search by destination, budget, or trip length to uncover the adventure that suits you best.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 sticky top-24">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetFilters}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <FilterX className="h-4 w-4 mr-1" />
                  Reset
                </Button>
              </div>

              <div className="space-y-6">
                {/* Search */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input
                      type="text"
                      placeholder="Search packages"
                      className="pl-10"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Destination
                  </label>
                  <Select
                    value={filters.location}
                    onValueChange={(value) => setFilters({ ...filters, location: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All destinations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All destinations</SelectItem>
                      <SelectItem value="Goa">Goa</SelectItem>
                      <SelectItem value="Kerala">Kerala</SelectItem>
                      <SelectItem value="Kashmir">Kashmir</SelectItem>
                      <SelectItem value="Himachal Pradesh">Himachal Pradesh</SelectItem>
                      <SelectItem value="Andaman">Andaman</SelectItem>
                      <SelectItem value="Delhi-Agra-Jaipur">Golden Triangle</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range Filter */}
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="block text-sm font-medium">
                      Price Range
                    </label>
                    <span className="text-sm text-gray-500">
                      ₹{filters.priceRange[0].toLocaleString()} - ₹{filters.priceRange[1].toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    defaultValue={[0, 50000]}
                    max={50000}
                    step={1000}
                    value={filters.priceRange}
                    onValueChange={(value) => setFilters({ ...filters, priceRange: value })}
                    className="py-4"
                  />
                </div>

                {/* Duration Filter */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Duration
                  </label>
                  <Select
                    value={filters.duration}
                    onValueChange={(value) => setFilters({ ...filters, duration: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Any duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="any">Any duration</SelectItem>
                      <SelectItem value="1-3">1-3 Days</SelectItem>
                      <SelectItem value="4-6">4-6 Days</SelectItem>
                      <SelectItem value="7-10">7-10 Days</SelectItem>
                      <SelectItem value="10+">10+ Days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort By */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Sort By
                  </label>
                  <Select
                    value={filters.sortBy}
                    onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Recommended" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Package Listings */}
          <div className="w-full lg:w-3/4">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-lg font-semibold">
                    {filteredPackages.length} Packages Found
                  </h2>
                  {(searchTerm || filters.location || filters.duration || filters.priceRange[0] > 0 || filters.priceRange[1] < 50000) && (
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Showing filtered results
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Sort by:</span>
                  <Select
                    value={filters.sortBy}
                    onValueChange={(value) => setFilters({ ...filters, sortBy: value })}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Recommended" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="recommended">Recommended</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {filteredPackages.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPackages.map((pkg) => (
                  <Card key={pkg.id} className="overflow-hidden transition-shadow hover:shadow-xl">
                    <CardHeader className="p-0">
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-48 object-cover"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold mb-1">{pkg.name}</h3>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {pkg.location}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                        {pkg.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {pkg.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          {pkg.rating.toFixed(1)}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 flex justify-between items-center">
                      <span className="text-base font-semibold text-blue-600 dark:text-blue-400">
                        ₹{pkg.price.toLocaleString()}
                      </span>
                      <Link href={`/packages/${pkg.id}`}>
                        <Button size="sm">
                          View <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 dark:text-gray-400 py-12">
                <p className="text-lg">No packages match your criteria.</p>
                <p className="text-sm mt-2">Try adjusting your filters or search terms.</p>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}