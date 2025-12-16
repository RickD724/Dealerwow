import React, { createContext, useContext, useState, useEffect } from 'react'
import mockData from '../data/mockListings.json'

const AppContext = createContext()

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}

export const AppProvider = ({ children }) => {
  const [listings, setListings] = useState([])
  const [dealers, setDealers] = useState([])
  const [user, setUser] = useState(null)
  const [filters, setFilters] = useState({
    make: '',
    model: '',
    minDiscount: 0,
    maxPrice: 300000,
    location: '',
    condition: 'all'
  })
  const [unlockedListings, setUnlockedListings] = useState([])

  useEffect(() => {
    // Load mock data
    setListings(mockData.listings)
    setDealers(mockData.dealers)
    
    // Load unlocked listings from localStorage
    const stored = localStorage.getItem('unlockedListings')
    if (stored) {
      setUnlockedListings(JSON.parse(stored))
    }
  }, [])

  const unlockListing = (listingId) => {
    if (!unlockedListings.includes(listingId)) {
      const updated = [...unlockedListings, listingId]
      setUnlockedListings(updated)
      localStorage.setItem('unlockedListings', JSON.stringify(updated))
      
      // Update the listing
      setListings(prevListings =>
        prevListings.map(listing =>
          listing.id === listingId
            ? { ...listing, unlocked: true, unlockCount: listing.unlockCount + 1 }
            : listing
        )
      )
    }
  }

  const isListingUnlocked = (listingId) => {
    return unlockedListings.includes(listingId)
  }

  const getFilteredListings = () => {
    return listings.filter(listing => {
      const matchesMake = !filters.make || listing.vehicle.make.toLowerCase().includes(filters.make.toLowerCase())
      const matchesModel = !filters.model || listing.vehicle.model.toLowerCase().includes(filters.model.toLowerCase())
      const matchesDiscount = listing.pricing.discountPercent >= filters.minDiscount
      const matchesPrice = listing.pricing.sellingPrice <= filters.maxPrice
      const matchesLocation = !filters.location || listing.dealerLocation.toLowerCase().includes(filters.location.toLowerCase())
      const matchesCondition = filters.condition === 'all' || listing.vehicle.condition === filters.condition

      return matchesMake && matchesModel && matchesDiscount && matchesPrice && matchesLocation && matchesCondition
    })
  }

  const getListingById = (id) => {
    return listings.find(listing => listing.id === id)
  }

  const getDealerById = (id) => {
    return dealers.find(dealer => dealer.id === id)
  }

  const calculateDealHeatScore = (daysInStock, discountPercent) => {
    // Simple algorithm: higher discount + more days = hotter deal
    const dayScore = Math.min((daysInStock / 180) * 50, 50)
    const discountScore = Math.min((discountPercent / 15) * 50, 50)
    return Math.round(dayScore + discountScore)
  }

  const value = {
    listings,
    dealers,
    user,
    setUser,
    filters,
    setFilters,
    unlockedListings,
    unlockListing,
    isListingUnlocked,
    getFilteredListings,
    getListingById,
    getDealerById,
    calculateDealHeatScore
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
