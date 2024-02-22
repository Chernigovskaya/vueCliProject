import { createStore } from 'vuex'

export default createStore({
    state: {
        dataBlog: [
            {
                id: "1",
                photo: require('@/assets/img/blog1.png'),
                title: "Let’s Get Solution For Building Construction Work",
                date: "26 December, 2022",
                name: "Kitchan Design"
            },
            {
                id: "2",
                photo: require('@/assets/img/blog2.png'),
                title: "Low Cost Latest Invented Interior Designing Ideas",
                date: "22 December,2022 ",
                name: "Living Design"
            },
            {
                id: "3",
                photo: require('@/assets/img/blog3.png'),
                title: "Best For Any Office & Business Interior Solution",
                date: "25 December, 2022 ",
                name: "Interior Design"
            },
            {
                id: "4",
                photo: require('@/assets/img/blog3.png'),
                title: "Let’s Get Solution For Building Construction Work",
                date: "26 December, 2022",
                name: "Kitchan Design"
            },
            {
                id: "5",
                photo: require('@/assets/img/blog1.png'),
                title: "Low Cost Latest Invented Interior Designing Ideas",
                date: "22 December,2022 ",
                name: "Living Design"
            },
            {
                id: "6",
                photo: require('@/assets/img/blog2.png'),
                title: "Best For Any Office & Business Interior Solution",
                date: "25 December, 2022 ",
                name: "Interior Design"
            },
        ],
        projectEl: [
            {
                id: "1",
                photo: require('@/assets/img/pr1.png'),
                title: "Minimal Bedroom",
            },
            {
                id: "2",
                photo: require('@/assets/img/pr2.png'),
                title: "Minimal Bedroom",
            },
            {
                id: "3",
                photo: require('@/assets/img/pr3.png'),
                title: "Classic Minimal Bedroom",
            },
            {
                id: "",
                photo: require('@/assets/img/pr4.png'),
                title: "Modern Bedroom",
            },
            {
                id: "5",
                photo: require('@/assets/img/pr5.png'),
                title: "Minimal Bedroom table",
            },
            {
                id: "6",
                photo: require('@/assets/img/pr6.png'),
                title: "System Table",
            },
            {
                id: "7",
                photo: require('@/assets/img/pr7.png'),
                title: "Modern Medroom",
            },
            {
                id: "8",
                photo: require('@/assets/img/pr8.png'),
                title: "Modern Bedroom",
            }
        ],
        homeNum: [
            {
                id: 1,
                num: 12,
                text: 'Years Of Experiance'
            },
            {
                id: 2,
                num: 85,
                text: 'Success Project'
            },
            {
                id: 3,
                num: 15,
                text: 'Active Project'
            },
            {
                id: 1,
                num: 95,
                text: 'Happy Customers'
            },
        ],
        // homeEl: [
        //     {
        //         id:1,
        //         photo: require('@/assets/img/Photo1.png'),
        //         title: 'Modern Kitchan',
        //     },
        //     {
        //         id:2,
        //         photo: require('@/assets/img/Photo2.png'),
        //         title: 'Modern Kitchan',
        //     },
        //     {
        //         id:3,
        //         photo: require('@/assets/img/Photo3.png'),
        //         title: 'Modern Kitchan',
        //     },
        //     {
        //         id:4,
        //         photo: require('@/assets/img/Photo4.png'),
        //         title: 'Modern Kitchan',
        //     },
        // ],
        projectDetailTitle: 'Minimal Look Bedrooms',
        projectDetailText: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. ', 'In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.']

    },
    getters: {


    },
    mutations: {


    },
    actions: {

    },
    modules: {

    }
})
