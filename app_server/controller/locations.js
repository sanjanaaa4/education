module.exports.homelist = function(req, res) {
    res.render('location-list', {
        title: 'Udemy Find courses here to learn!',
        pageHeader: {
            title: 'Udemy',
            strapline: 'Udemy Find courses'
        },
        sidebar: "Looking for courses?Udemy helps to learn something new.Let Udemy help you what are looking for.",
        locations: [{
            name: 'Python',
            address: 'Through zoom',
            rating: 3,
            facilities: ['Basics', 'Matplot', 'Pandas'],
            
        }, {
            name: 'Java',
            address: 'Through website',
            rating: 4,
            facilities: ['Basics', 'classes and Interfaces', 'OOPs'],
            
        }, {
            name: 'HTML',
            address: 'Through liveclasses',
            rating: 2,
            facilities: ['creating websites', 'graphics'],
            
        }]
    });
};
//locationInfo//
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Python',
        pageHeader: {
            title: 'Python'
        },
        sidebar: {
            context: 'Python is a object-oriented programming language and high-level general purpose programming language.',
            callToAction: 'Python is dynamically typed and garbage collected.'
        },
        location: {
            name: 'python',
            address: 'Through zoom',
            rating: 3,
            facilities: ['Basics', 'Matplot', 'Pandas'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great website. Im completely loving it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay.'
            }]
        }
    });
};

//locationInfo2//
module.exports.locationInfo2 = function(req, res) {
    res.render('location-info2', {
        title: 'Java',
        pageHeader: {
            title: 'Java'
        },
        sidebar: {
            context: 'Java is a high-level,class based,object-oriented programing language.',
            callToAction: 'It has been a popular choice among dvelopers for over two decades.'
        },
        location: {
            name: 'Java',
            address: 'Through website',
            rating: 3,
            facilities: ['Basics', 'classes and Interfaces', 'OOPs'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Nick Jonas',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great course. Iam enjoying it.'
            }, {
                author: 'Karthik Aryan',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'Im unable to catch the speed of teaching.'
            }]
        }
    });
};
//locationInfo3//
module.exports.locationInfo3 = function(req, res) {
        res.render('location-info3', {
            title: 'HTML',
            pageHeader: {
                title: 'HTML'
            },
            sidebar: {
                context: 'HTML is the standard markup language for documents design to be displayed in the web browser.',
                callToAction: 'It defines the meaning and structure of web content.'
            },
            location: {
                name: 'HTML',
                address: 'Through google meet',
                rating: 3,
                facilities: ['Basics', 'Website', 'Graphics'],
                coords: {
                    lat: 51.455041,
                    lng: -0.9690884
                },
                openingTimes: [{
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                }, {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                }, {
                    days: 'Sunday',
                    closed: true
                }],
                reviews: [{
                    author: 'Nick',
                    rating: 5,
                    timestamp: '16 July 2013',
                    reviewText:'It is a good platform for learning.'
                }, {
                    author: 'Charlie Chaplin',
                    rating: 3,
                    timestamp: '16 June 2013',
                    reviewText: 'This platform is very useful.'
                }]
            }
        });
    };
//addReview//    
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Course on udemy',
        pageHeader: {
            title: 'Review Course'
        }
    });
};