const VPSPricingData = {

    india: {

        ryzen9950x: {

            name: "AMD Ryzen™ 9 9950X",

            ramType: "DDR5",

            virtualization: "KVM",

            features: [

                "Advanced DDoS Protection",
                "Instant Deployment",
                "IPv4 Included",
                "Full Root Access"

            ],

            plans: [

                {
                    name: "Ryzen XS",
                    ram: 4,
                    cpu: 1,
                    storage: 50,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 6.79,

                    available: true,

                    featured: false,

                    badge: "High Frequency"
                },

                {
                    name: "Ryzen S",
                    ram: 8,
                    cpu: 2,
                    storage: 80,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 12.53,

                    available: true,
                    badge: "Most Popular"
                },

                {
                    name: "Ryzen L",
                    ram: 16,
                    cpu: 4,
                    storage: 150,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 18.80,

                    comingSoon: false,
                    discount: "15% OFF",

                    badge: "Performance Focused"
                },

                {
                    name: "Ryzen XL",
                    ram: 24,
                    cpu: 5,
                    storage: 180,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 24.03,

                    comingSoon: false,

                    badge: "Heavy Workloads"
                },

                {
                    name: "Ryzen XXL",
                    ram: 32,
                    cpu: 6,
                    storage: 200,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 36.57,

                    comingSoon: false,

                    badge: "Power User"
                },


                {
                    name: "Ryzen 2XL",
                    ram: 48,
                    cpu: 8,
                    storage: 250,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 48.06,

                    comingSoon: false,

                    badge: "Extreme Performance"
                },

                {
                    name: "Ryzen 3XL",
                    ram: 64,
                    cpu: 10,
                    storage: 350,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 56.42,

                    comingSoon: true,

                    badge: "Ultimate Compute"
                }

            ]

        },

        epycMilan: {

            name: "AMD EPYC Milan / 7K62",

            ramType: "DDR4",

            virtualization: "KVM",

            features: [

                "Advanced DDoS Protection",
                "Enterprise Hardware",
                "IPv4 Included",
                "Instant Setup"

            ],

            plans: [

                {
                    name: "EPYC Premium XS",
                    ram: 6,
                    cpu: 2,
                    storage: 50,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 4.70,

                    available: true,

                    featured: false,

                    badge: "Enterprise Starter"
                },

                {
                    name: "XEPYC Premium S",
                    ram: 8,
                    cpu: 2,
                    storage: 80,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 6.26,

                    available: true,
                    badge: "Recommended"
                },

                {
                    name: "EPYC Premium M",
                    ram: 12,
                    cpu: 4,
                    storage: 100,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 8.35,

                    comingSoon: false,

                    badge: "Balanced Compute"
                },

                {
                    name: "EPYC Premium L",
                    ram: 16,
                    cpu: 6,
                    storage: 150,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 11.49,

                    comingSoon: false,

                    badge: "Professional Grade"
                },

                {
                    name: "EPYC Premium XL",
                    ram: 24,
                    cpu: 6,
                    storage: 200,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 12.58,

                    comingSoon: false,

                    badge: "Production Ready"
                },


                {
                    name: "EPYC Premium XXL",
                    ram: 32,
                    cpu: 8,
                    storage: 300,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 18.80,

                    comingSoon: false,
                    featured: false,

                    badge: "High Performance"
                },

                {
                    name: "EPYC Premium 2XL",
                    ram: 48,
                    cpu: 10,
                    storage: 350,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 26.12,

                    comingSoon: false,

                    badge: "Infrastructure Optimized"
                },

                {
                    name: "EPYC Premium 3XL",
                    ram: 64,
                    cpu: 12,
                    storage: 400,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 36.57,

                    comingSoon: false,
                    discount: "10% OFF",

                    badge: "Enterprise Infrastructure"
                }

            ]

        },

        xeonPlatinum: {

            name: "Intel Xeon Platinum",

            ramType: "DDR4",

            virtualization: "KVM",

            cpuOptions: [

                "Intel® Xeon® E5-2673 v4 @ 2.30 GHz",
                "Intel® Xeon® E5-2682 v4 @ 2.50 GHz",
                "Intel® Xeon® Platinum 8168 @ 2.70 GHz",
                "Intel® Xeon® Platinum 8269CY @ 2.50 GHz"

            ],

            features: [

                "Budget Optimized",
                "DDoS Protected",
                "IPv4 Included",
                "Instant Deployment"

            ],

            plans: [

                {
                    name: "Xeon Standard XS",
                    ram: 6,
                    cpu: 2,
                    storage: 50,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 3.65,

                    available: true,

                    featured: false,

                    badge: "Budget Starter"
                },

                {
                    name: "Xeon Standard S",
                    ram: 8,
                    cpu: 2,
                    storage: 80,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 4.17,

                    available: true,
                    badge: "Best Budget"
                },

                {
                    name: "Xeon Standard M",
                    ram: 12,
                    cpu: 4,
                    storage: 100,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 6.79,

                    comingSoon: false,

                    badge: "Value Performance"
                },

                {
                    name: "Xeon Standard L",
                    ram: 16,
                    cpu: 6,
                    storage: 150,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 8.88,

                    comingSoon: false,

                    badge: "Small Business"
                },

                {
                    name: "Xeon Standard XL",
                    ram: 24,
                    cpu: 6,
                    storage: 200,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 12.53,

                    comingSoon: false,

                    badge: "Professional"
                },


                {
                    name: "Xeon Standard XXL",
                    ram: 32,
                    cpu: 8,
                    storage: 300,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 13.58,

                    comingSoon: false,
                    featured: true,

                    badge: "High Capacity"
                },

                {
                    name: "Xeon Standard 2XL",
                    ram: 48,
                    cpu: 10,
                    storage: 350,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 17.76,

                    comingSoon: false,

                    badge: "Enterprise Ready"
                },

                {
                    name: "Xeon Standard 3XL",
                    ram: 64,
                    cpu: 12,
                    storage: 400,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 26.12,

                    comingSoon: false,
                    discount: "10% OFF",

                    badge: "Dedicated Workloads"
                }

            ]

        }

    },

    singapore: {

        epycMilan: {

            name: "AMD EPYC Milan",

            ramType: "DDR4",

            virtualization: "KVM",

            features: [

                "Asia Optimized Network",
                "Advanced DDoS Protection",
                "IPv4 Included",
                "Instant Deployment"

            ],

            plans: [

                {
                    name: "EPYC Standard XS",
                    ram: 8,
                    cpu: 4,
                    storage: 64,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 10.44,

                    available: true,
                    badge: "Recommended"
                },

                {
                    name: "EPYC Standard S",
                    ram: 16,
                    cpu: 8,
                    storage: 128,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 22.98,

                    comingSoon: false,

                    badge: "Small Business"
                },

                {
                    name: "EPYC Standard M",
                    ram: 32,
                    cpu: 12,
                    storage: 256,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 38.66,

                    comingSoon: false,
                    featured: false,

                    badge: "High Performance"
                },

                {
                    name: "EPYC Standard L",
                    ram: 64,
                    cpu: 16,
                    storage: 512,
                    bandwidth: "Unmetered",
                    uplink: "1 Gbps",
                    price: 55.38,

                    comingSoon: false,
                    badge: "Enterprise Infrastructure"
                }
            ]

        }

    }

};