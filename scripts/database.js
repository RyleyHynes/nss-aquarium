/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
//all sizes are in inches
const database = {
    fish: [
        {
            id: 1,
            name: "Nemo",
            species: "Clown Fish",
            location: "Red Sea",
            mainColor: "Orange",
            food: "Small Zooplankton",
            length: 4,
            image: "https://www.buildyouraquarium.com/wp-content/uploads/2020/02/clownfish-ocellaris.jpg"
        }, 
        {
            id: 2,
            name: "Dory",
            species: "Royal Blue Tang",
            location: "Indo-Pacific Waters",
            mainColor: "Blue",
            food: "Algae",
            length: 10,
            image: "https://cdn.mos.cms.futurecdn.net/BgZFhT7piMqXpyzfWrdKyP.jpg"
        },
        {
            id: 3,
            name: "Bruce",
            species: "Great White Shark",
            location: "Australia",
            mainColor: "Gray",
            food: "Seal",
            length: 252,
            image: "https://th-thumbnailer.cdn-si-edu.com/JSCi8yHXWnaczxVFAYrDwuiPqLk=/fit-in/1600x0/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/ae/98/ae980f74-fa29-4c42-9aff-eea13c2c1971/great_white_shark_south_africa.jpg"
        }, 
    {
            id: 4,
            name: "Gill",
            species: "Moorish Idol",
            location: "Africa",
            mainColor: "Black",
            food: "Coral",
            length: 7,
            image: "https://media.istockphoto.com/photos/idol1-picture-id147688045?k=20&m=147688045&s=612x612&w=0&h=FGsFR07l8eJuCzAjVtrE9Crxex0ZH_kVNMtlTWtIWdY="
    }, {
            id: 5,
            name: "Bubbles",
            species: "Yellow Tang",
            location: "Pacific Ocean",
            mainColor: "Yellow",
            food: "Seaweed",
            length: 8,
            image: "https://images.liverpoolmuseums.org.uk/styles/focal_point_4_3/public/import-blog-articles/yellow-tang-bubbles_1.jpg"
    }, 
    {
            id: 6,
            name: "Gurgle",
            species: "Royal Gramma Basslet",
            location: "Bahamas",
            mainColor: "Purple",
            food: "Phytoplankton",
            length: 3,
            image: "https://www.liveaquaria.com/images/categories/large/lg_72329_Royal_Gramma_Basslet.jpg"
    },
    {
            id: 7,
            name: "Bloat",
            species: "Pufferfish",
            location: "Indian ocean",
            mainColor: "Brown",
            food: "Mussels",
            length: 16,
            image: "https://i.natgeofe.com/k/b7a6ee44-f96f-434a-8606-6ae742f6ab23/pufferfish-inflated-closeup_4x3.jpg"
    },
    {
            id: 8,
            name: "Flo",
            species: "Striped Damselfish",
            location: "Indonesia",
            mainColor: "White",
            food: "Shrimp",
            length: 5,
            image: "https://www.saltwaterfishshop.com/wp-content/uploads/2021/01/3-striped-damselfish-1.jpg"
    }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}


