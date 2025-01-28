import React from "react";
import { DollarSign, TrendingUp, Package, Users, ArrowUp, ArrowDown } from "lucide-react";
export function Statistics() {
  const salesData = [{
    name: "Sarah Wilson",
    deals: 45,
    revenue: 125000,
    conversion: 68
  }, {
    name: "Michael Chen",
    deals: 38,
    revenue: 98000,
    conversion: 72
  }, {
    name: "Emily Rodriguez",
    deals: 42,
    revenue: 115000,
    conversion: 65
  }, {
    name: "James Carter",
    deals: 35,
    revenue: 88000,
    conversion: 70
  }, {
    name: "Alex Johnson",
    deals: 40,
    revenue: 105000,
    conversion: 69
  }];
  const productStats = [{
    name: "Product A",
    sales: 1200,
    revenue: 240000,
    growth: 15
  }, {
    name: "Product B",
    sales: 850,
    revenue: 170000,
    growth: -5
  }, {
    name: "Product C",
    sales: 945,
    revenue: 189000,
    growth: 8
  }, {
    name: "Product D",
    sales: 1100,
    revenue: 220000,
    growth: 12
  }];
  const companyMetrics = [{
    title: "Total Revenue",
    value: "$2.4M",
    change: "+12.5%",
    icon: DollarSign,
    trend: "up"
  }, {
    title: "Sales Growth",
    value: "24.5%",
    change: "+4.2%",
    icon: TrendingUp,
    trend: "up"
  }, {
    title: "Active Products",
    value: "45",
    change: "-2",
    icon: Package,
    trend: "down"
  }, {
    title: "Team Performance",
    value: "92%",
    change: "+5%",
    icon: Users,
    trend: "up"
  }];
  return <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
        Statistics & Analytics
      </h1>
      {/* Company Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {companyMetrics.map(metric => <div key={metric.title} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <metric.icon className="h-8 w-8 text-gray-400 dark:text-gray-500" />
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${metric.trend === "up" ? "bg-green-100 dark:bg-green-800/30 text-green-800 dark:text-green-400" : "bg-red-100 dark:bg-red-800/30 text-red-800 dark:text-red-400"}`}>
                {metric.change}
                {metric.trend === "up" ? <ArrowUp className="ml-1 h-3 w-3" /> : <ArrowDown className="ml-1 h-3 w-3" />}
              </span>
            </div>
            <p className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
              {metric.value}
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {metric.title}
            </p>
          </div>)}
      </div>
      {/* Sales Team Performance */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Sales Team Performance
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Sales Rep
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Deals Closed
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Revenue Generated
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Conversion Rate
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {salesData.map(rep => <tr key={rep.name}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {rep.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {rep.deals}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    ${rep.revenue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {rep.conversion}%
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
      {/* Product Performance */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
          Product Performance
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Total Sales
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Revenue
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Growth
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {productStats.map(product => <tr key={product.name}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    {product.sales}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                    ${product.revenue.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${product.growth >= 0 ? "bg-green-100 dark:bg-green-800/30 text-green-800 dark:text-green-400" : "bg-red-100 dark:bg-red-800/30 text-red-800 dark:text-red-400"}`}>
                      {product.growth >= 0 ? "+" : ""}
                      {product.growth}%
                    </span>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
}