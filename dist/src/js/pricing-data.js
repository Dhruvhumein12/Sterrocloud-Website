const pricingData = {

    india: {

        ryzen9: {

            label: "AMD Ryzen™ 9 9950X",
            ramType: "DDR5",
            available: true,

            plans: [
                {
                    name: "Gravel",
                    ram: 2,
                    price: 2.58,
                    stock: true,
                    storage: 25,
                    cpu: "100%",
                    backups: 1,
                },

                {
                    name: "Cobblestone",
                    ram: 4,
                    price: 5.16,
                    stock: false,
                    storage: 25,
                    cpu: "180%",
                    backups: 2,
                },

                {
                    name: "Coal",
                    ram: 6,
                    price: 7.78,
                    stock: true,
                    storage: 36,
                    cpu: "250%",
                    backups: 3,
                },

                {
                    name: "Gold",
                    ram: 8,
                    price: 10.37,
                    stock: true,
                    storage: 48,
                    cpu: "300%",
                    backups: 4,
                },

                {
                    name: "Emerald",
                    ram: 12,
                    price: 15.56,
                    stock: true,
                    storage: 72,
                    cpu: "400%",
                    backups: 5,
                },

                {
                    name: "Netherite",
                    ram: 16,
                    price: 20.75,
                    stock: true,
                    storage: 96,
                    cpu: "450%",
                    backups: 5,
                },

                {
                    name: "Beacon",
                    ram: 24,
                    price: 31.12,
                    stock: true,
                    storage: 135,
                    cpu: "600%",
                    backups: 8,
                },

                {
                    name: "Crystal",
                    ram: 32,
                    price: 41.50,
                    stock: true,
                    storage: 160,
                    cpu: "NO LIMIT",
                    backups: 8,
                }
            ]

        },

        epyc: {

            label: "AMD EPYC Milan",
            ramType: "DDR4",
            available: true,

            plans: [
                {
                    name: "Gravel",
                    ram: 2,
                    price: 1.45,
                    stock: true,
                    storage: 25,
                    cpu: "100%",
                    backups: 1,
                },

                {
                    name: "Cobblestone",
                    ram: 4,
                    price: 2.90,
                    stock: true,
                    storage: 25,
                    cpu: "180%",
                    backups: 2,
                },

                {
                    name: "Coal",
                    ram: 6,
                    price: 4.35,
                    stock: true,
                    storage: 36,
                    cpu: "250%",
                    backups: 3,
                },

                {
                    name: "Gold",
                    ram: 8,
                    price: 5.81,
                    stock: true,
                    storage: 48,
                    cpu: "300%",
                    backups: 4,
                },

                {
                    name: "Emerald",
                    ram: 12,
                    price: 8.71,
                    stock: true,
                    storage: 72,
                    cpu: "400%",
                    backups: 5,
                },

                {
                    name: "Netherite",
                    ram: 16,
                    price: 11.62,
                    stock: true,
                    storage: 96,
                    cpu: "450%",
                    backups: 5,
                },

                {
                    name: "Beacon",
                    ram: 24,
                    price: 17.43,
                    stock: true,
                    storage: 135,
                    cpu: "600%",
                    backups: 8,
                },

                {
                    name: "Crystal",
                    ram: 32,
                    price: 23.24,
                    stock: true,
                    storage: 160,
                    cpu: "NO LIMIT",
                    backups: 8,
                }
            ]

        },

        xeon: {

            label: "Intel Xeon Platinum",
            ramType: "DDR4",
            available: true,

            plans: [
                {
                    name: "Gravel",
                    ram: 2,
                    price: 1.03,
                    stock: true,
                    storage: 25,
                    cpu: "100%",
                    backups: 1,
                },

                {
                    name: "Cobblestone",
                    ram: 4,
                    price: 2.07,
                    stock: true,
                    storage: 25,
                    cpu: "180%",
                    backups: 2,
                },

                {
                    name: "Coal",
                    ram: 6,
                    price: 3.10,
                    stock: true,
                    storage: 36,
                    cpu: "250%",
                    backups: 3,
                },

                {
                    name: "Gold",
                    ram: 8,
                    price: 4.13,
                    stock: true,
                    storage: 48,
                    cpu: "300%",
                    backups: 4,
                },

                {
                    name: "Emerald",
                    ram: 12,
                    price: 6.20,
                    stock: true,
                    storage: 72,
                    cpu: "400%",
                    backups: 5,
                },

                {
                    name: "Netherite",
                    ram: 16,
                    price: 8.26,
                    stock: true,
                    storage: 96,
                    cpu: "450%",
                    backups: 5,
                },

                {
                    name: "Beacon",
                    ram: 24,
                    price: 12.39,
                    stock: false,
                    storage: 135,
                    cpu: "600%",
                    backups: 8,
                },

                {
                    name: "Crystal",
                    ram: 32,
                    price: 16.52,
                    stock: true,
                    storage: 160,
                    cpu: "NO LIMIT",
                    backups: 8,
                }
            ]

        }

    },

    singapore: {

        ryzen9: {

            label: "AMD Ryzen™ 9 9950X",
            ramType: "DDR5",
            available: false,

            plans: []

        },

        epyc: {

            label: "AMD EPYC Milan",
            ramType: "DDR4",
            available: true,

            plans: [
                {
                    name: "Gravel",
                    ram: 2,
                    price: 2.90,
                    stock: true,
                    storage: 25,
                    cpu: "100%",
                    backups: 1,
                },

                {
                    name: "Cobblestone",
                    ram: 4,
                    price: 5.81,
                    stock: true,
                    storage: 25,
                    cpu: "180%",
                    backups: 2,
                },

                {
                    name: "Coal",
                    ram: 6,
                    price: 8.71,
                    stock: true,
                    storage: 36,
                    cpu: "250%",
                    backups: 3,
                },

                {
                    name: "Gold",
                    ram: 8,
                    price: 11.62,
                    stock: true,
                    storage: 48,
                    cpu: "300%",
                    backups: 4,
                },

                {
                    name: "Emerald",
                    ram: 12,
                    price: 17.43,
                    stock: true,
                    storage: 72,
                    cpu: "400%",
                    backups: 5,
                },

                {
                    name: "Netherite",
                    ram: 16,
                    price: 23.24,
                    stock: true,
                    storage: 96,
                    cpu: "450%",
                    backups: 5,
                },

                {
                    name: "Beacon",
                    ram: 24,
                    price: 34.86,
                    stock: true,
                    storage: 135,
                    cpu: "600%",
                    backups: 8,
                },

                {
                    name: "Crystal",
                    ram: 32,
                    price: 46.48,
                    stock: true,
                    storage: 160,
                    cpu: "NO LIMIT",
                    backups: 8,
                }
            ]

        },

        xeon: {

            label: "Intel Xeon Platinum",
            ramType: "DDR4",
            available: false,

            plans: []

        }

    }

};