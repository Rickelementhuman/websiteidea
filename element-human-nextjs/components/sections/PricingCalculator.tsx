'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

type Currency = 'USD' | 'GBP'

const pricingData = {
  USD: {
    symbol: '$',
    prices: { tier1: 1995, tier2: 1895, tier3: 1695 },
  },
  GBP: {
    symbol: '£',
    prices: { tier1: 1495, tier2: 1420, tier3: 1271 },
  },
}

const paymentTerms = {
  monthly: { label: 'Monthly in advance', discount: 0 },
  quarterly: { label: 'Quarterly in advance', discount: 5 },
  annual: { label: 'Annual in advance', discount: 10 },
}

export function PricingCalculator() {
  const [currency, setCurrency] = useState<Currency>('USD')
  const [campaigns, setCampaigns] = useState(1)
  const [creatives, setCreatives] = useState(5)
  const [dataAccess, setDataAccess] = useState(0)
  const [reports, setReports] = useState(0)
  const [paymentTerm, setPaymentTerm] = useState<keyof typeof paymentTerms>('monthly')

  // Calculate values
  const maxCreatives = campaigns * 12
  const maxReports = campaigns
  const maxDataAccess = campaigns

  // Adjust creatives if it exceeds the new max
  useEffect(() => {
    if (creatives > maxCreatives) {
      setCreatives(maxCreatives)
    }
  }, [campaigns, maxCreatives, creatives])

  // Validate reports + data access doesn't exceed campaigns
  useEffect(() => {
    if (reports + dataAccess > campaigns) {
      const maxData = Math.max(0, campaigns - reports)
      setDataAccess(maxData)
    }
  }, [reports, campaigns, dataAccess])

  const totalCredits = creatives + reports * 2 + dataAccess

  // Determine price per credit based on volume
  let pricePerCredit = pricingData[currency].prices.tier1
  let volumeDiscount = 0

  if (totalCredits >= 1 && totalCredits <= 50) {
    pricePerCredit = pricingData[currency].prices.tier1
    volumeDiscount = 0
  } else if (totalCredits >= 51 && totalCredits <= 150) {
    pricePerCredit = pricingData[currency].prices.tier2
    volumeDiscount = 5
  } else if (totalCredits > 150) {
    pricePerCredit = pricingData[currency].prices.tier3
    volumeDiscount = 15
  }

  const subtotal = totalCredits * pricePerCredit
  const paymentDiscount = paymentTerms[paymentTerm].discount
  const finalPrice = subtotal * (1 - paymentDiscount / 100)

  const symbol = pricingData[currency].symbol

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Credit Price Header */}
          <div className="text-center mb-12 p-8 bg-gradient-to-br from-brand-navy to-brand-cyan rounded-3xl shadow-2xl">
            <p className="text-white text-3xl font-bold">
              1 Credit = {symbol}{pricingData[currency].prices.tier1.toLocaleString()}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Tables */}
            <div className="space-y-8">
              {/* Credit Table */}
              <div className="glass-card overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-brand-navy text-white">
                      <th className="text-left p-4 text-sm font-semibold">What you get</th>
                      <th className="text-center p-4 text-sm font-semibold w-32">Credits</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                      <td className="p-4">
                        <div className="font-semibold text-brand-navy mb-1">Creative</div>
                        <ul className="text-sm text-neutral-600 list-disc list-inside space-y-1">
                          <li>Creative tested</li>
                          <li>Essentials snapshot included</li>
                        </ul>
                      </td>
                      <td className="p-4 text-center border-l border-neutral-200">
                        <span className="text-2xl font-bold text-brand-navy">1</span>
                      </td>
                    </tr>
                    <tr className="border-b border-neutral-200 hover:bg-neutral-50">
                      <td className="p-4">
                        <div className="font-semibold text-brand-navy mb-1">Data Access</div>
                        <ul className="text-sm text-neutral-600 list-disc list-inside space-y-1">
                          <li>Access to all results of your campaign</li>
                          <li>Insights Dashboard and Data Export</li>
                        </ul>
                      </td>
                      <td className="p-4 text-center border-l border-neutral-200">
                        <span className="text-2xl font-bold text-brand-navy">1</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-neutral-50">
                      <td className="p-4">
                        <div className="font-semibold text-brand-navy mb-1">Full Campaign Report</div>
                        <ul className="text-sm text-neutral-600 list-disc list-inside space-y-1">
                          <li>Deep diagnostics across attention, emotion and recall</li>
                          <li>Covers up to 12 creatives per report</li>
                          <li>Includes Data Access</li>
                        </ul>
                      </td>
                      <td className="p-4 text-center border-l border-neutral-200">
                        <span className="text-2xl font-bold text-brand-navy">2</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Volume Discounts */}
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Volume Discounts</h3>
                <div className="glass-card overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-brand-navy text-white">
                        <th className="text-left p-3 font-semibold"># Credits</th>
                        <th className="text-left p-3 font-semibold">Discount</th>
                        <th className="text-left p-3 font-semibold">Credit Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-neutral-200">
                        <td className="p-3">1–50</td>
                        <td className="p-3">0%</td>
                        <td className="p-3 font-semibold">{symbol}{pricingData[currency].prices.tier1.toLocaleString()}</td>
                      </tr>
                      <tr className="border-b border-neutral-200">
                        <td className="p-3">51–150</td>
                        <td className="p-3">5%</td>
                        <td className="p-3 font-semibold">{symbol}{pricingData[currency].prices.tier2.toLocaleString()}</td>
                      </tr>
                      <tr>
                        <td className="p-3">151+</td>
                        <td className="p-3">15%</td>
                        <td className="p-3 font-semibold">{symbol}{pricingData[currency].prices.tier3.toLocaleString()}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Payment Terms */}
              <div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">Pay in Advance</h3>
                <div className="glass-card overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-brand-navy text-white">
                        <th className="text-left p-3 font-semibold">Payment Term</th>
                        <th className="text-left p-3 font-semibold">Discount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-neutral-200">
                        <td className="p-3">Monthly in advance</td>
                        <td className="p-3 font-semibold">0%</td>
                      </tr>
                      <tr className="border-b border-neutral-200">
                        <td className="p-3">Quarterly in advance</td>
                        <td className="p-3 font-semibold">5%</td>
                      </tr>
                      <tr>
                        <td className="p-3">Annual in advance</td>
                        <td className="p-3 font-semibold">10%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column - Calculator */}
            <div className="space-y-6">
              {/* Currency Switcher */}
              <div>
                <label className="block text-brand-navy font-semibold mb-3">Currency</label>
                <div className="flex gap-2 glass-panel-light rounded-lg p-1">
                  <button
                    onClick={() => setCurrency('USD')}
                    className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${
                      currency === 'USD'
                        ? 'bg-brand-navy text-white'
                        : 'text-neutral-600 hover:text-brand-navy'
                    }`}
                  >
                    $ USD
                  </button>
                  <button
                    onClick={() => setCurrency('GBP')}
                    className={`flex-1 py-3 px-4 rounded-md font-semibold transition-all ${
                      currency === 'GBP'
                        ? 'bg-brand-navy text-white'
                        : 'text-neutral-600 hover:text-brand-navy'
                    }`}
                  >
                    £ GBP
                  </button>
                </div>
              </div>

              {/* Campaigns */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-brand-navy font-semibold">Number of Campaigns</label>
                  <span className="text-2xl font-bold text-brand-navy">{campaigns}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={campaigns}
                  onChange={(e) => setCampaigns(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-full appearance-none cursor-pointer accent-brand-navy"
                />
              </div>

              {/* Creatives */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-brand-navy font-semibold">Number of Creatives</label>
                  <span className="text-2xl font-bold text-brand-navy">{creatives}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max={maxCreatives}
                  value={creatives}
                  onChange={(e) => setCreatives(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-full appearance-none cursor-pointer accent-brand-navy"
                />
              </div>

              {/* Data Access */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-brand-navy font-semibold">Number of Data Access</label>
                  <span className="text-2xl font-bold text-brand-navy">{dataAccess}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={maxDataAccess}
                  value={dataAccess}
                  onChange={(e) => setDataAccess(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-full appearance-none cursor-pointer accent-brand-navy"
                />
              </div>

              {/* Reports */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-brand-navy font-semibold">Number of Full Reports</label>
                  <span className="text-2xl font-bold text-brand-navy">{reports}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max={maxReports}
                  value={reports}
                  onChange={(e) => setReports(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-full appearance-none cursor-pointer accent-brand-navy"
                />
              </div>

              <p className="text-sm text-neutral-600 text-center italic">
                1 credit = 1 creative. 2 credits = full campaign report (includes data access). 1 credit = data access only. Total reports + data access cannot exceed your campaign count.
              </p>

              {/* Payment Term */}
              <div>
                <label className="block text-brand-navy font-semibold mb-3">Payment Term</label>
                <select
                  value={paymentTerm}
                  onChange={(e) => setPaymentTerm(e.target.value as keyof typeof paymentTerms)}
                  className="w-full p-4 glass-panel-light rounded-lg border border-neutral-200 text-brand-navy font-medium focus:outline-none focus:ring-2 focus:ring-brand-navy"
                >
                  {Object.entries(paymentTerms).map(([key, { label, discount }]) => (
                    <option key={key} value={key}>
                      {label} ({discount}% discount)
                    </option>
                  ))}
                </select>
              </div>

              {/* Results */}
              <div className="glass-panel-light rounded-2xl p-6 space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                  <span className="text-neutral-600">Total Credits</span>
                  <span className="text-xl font-bold text-brand-navy">{totalCredits}</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                  <span className="text-neutral-600">Price per Credit</span>
                  <span className="text-xl font-bold text-brand-navy">
                    {symbol}{pricePerCredit.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                  <span className="text-neutral-600">Volume Discount</span>
                  <span className="text-xl font-bold text-brand-navy">{volumeDiscount}%</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-neutral-200">
                  <span className="text-neutral-600">Payment Term Discount</span>
                  <span className="text-xl font-bold text-brand-navy">{paymentDiscount}%</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t-2 border-brand-navy">
                  <span className="text-lg font-semibold text-brand-navy">Total Price</span>
                  <span className="text-3xl font-bold text-brand-navy">
                    {symbol}{finalPrice.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </span>
                </div>
                <p className="text-xs text-neutral-500 text-center italic mt-2">
                  *Prices exclude sales tax, where applicable.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
