var environment = 'development';

function getUrl() { 
    return ( environment === 'qualification' ) ?
                'http://app.qlf.priv.miit.fr/' :
                'http://127.0.0.1:8080/';
};

// Create all data
function create( cb ) {

    async.waterfall( [

        createUsers,

        createClient,

        createConference,

        createPresentations,

        createSlides,

        createChatrooms,

        createTags,

        createResourcesCategories,

        createResources,

        createQuizzes,

        createQuizzQuestions,

        createQuizzQuestionAnswers

        ], cb );

}

// Create users
function createUsers( cb ) {

    User
        .create( [ {
            mail: 'viewer@itevents.fr',
            password: 'itevents',
            roles: [ 'ROLE_LOGIN', 'ROLE_VIEWER' ]
        }, {
            mail: 'master@itevents.fr',
            password: 'itevents',
            roles: [ 'ROLE_LOGIN', 'ROLE_MASTER' ]
        }, {
            mail: 'live@itevents.fr',
            password: 'itevents',
            roles: [ 'ROLE_LOGIN', 'ROLE_LIVE' ]
        }, {
            mail: 'all@itevents.fr',
            password: 'itevents',
            roles: [ 'ROLE_LOGIN', 'ROLE_LIVE', 'ROLE_MASTER', 'ROLE_VIEWER' ]
        } ] )
        .exec(
            function( err, created ){
                if( err ) {

                    throw err;
                }

                cb();
            });
}

// Create the client
function createClient( cb ) {

    Client
        .create({
            name: 'ITEvents',
            colorScheme: 'html {}',
            logo: getUrl() + '/images/logodark.png'
        })
        .exec(
            function( err, created ){
                if( err ) {

                    throw err;
                }

                cb();
            });
}

// Create the conference
function createConference( cb ) {

    Conference
        .create({
            name: 'Conférence Miit',
            token: 'ConfTest',
            description: 'ITEvents vous présente sa conférence de test grâce à Miit.',
            colorScheme: 'html {}',
            url: getUrl(),
            logo: getUrl() + 'images/logodark.png',
            restrictions: [],
            client: 1
        })
        .exec(
            function( err, created ) {
                if( err ) {

                    throw err;
                }

                cb();
            });
}

// Create the presentations
function createPresentations( cb ) {

    Presentation
        .create( [ {
            name: 'ITEvents presentation',
            description: 'ITEvents vous présente sa présentation de test avec Karim Bakrimi, Pascal Fossé et Jordan Cortet.',
            authors: 'Cortet Jordan, Tacyniak Boris',
            conference: 1
        } ] )
        .exec(
            function( err, created ){
                if( err ) {

                    throw err;
                }
                
                cb();
            });
}

// Create the slides
function createSlides( cb ) {

    Slide
        .create( [ {
            id: 1,
            content: '<img src="/images/slides/Diapositive01.png">',
            presentation: 1
        }, {
            id: 2,
            content: '<img src="/images/slides/Diapositive02.png">',
            presentation: 1
        }, {
            id: 3,
            content: '<img src="/images/slides/Diapositive03.png">',
            presentation: 1
        }, {
            id: 4,
            content: '<img src="/images/slides/Diapositive04.png">',
            presentation: 1
        }, {
            id: 5,
            content: '<img src="/images/slides/Diapositive05.png">',
            presentation: 1
        }, {
            id: 6,
            content: '<img src="/images/slides/Diapositive06.png">',
            presentation: 1
        }, {
            id: 7,
            content: '<img src="/images/slides/Diapositive07.png">',
            presentation: 1
        }, {
            id: 8,
            content: '<img src="/images/slides/Diapositive08.png">',
            presentation: 1
        }, {
            id: 9,
            content: '<img src="/images/slides/Diapositive09.png">',
            presentation: 1
        }, {
            id: 10,
            content: '<img src="/images/slides/Diapositive10.png">',
            presentation: 1
        } ] )
        .exec(
            function( err, created ){
                if( err ) {

                    throw err;
                }
                
                cb();
            });
}

// Create chatrooms
function createChatrooms( cb ) {

    Chatroom
        .create([ {
            name: 'ITEvents test',
            conference: 1
        }, {
            name: 'Support',
            type: 2,
            conference: 1
        } ])
        .exec(
            function( err, created ){
                if( err ) {

                    throw err;
                }
                
                cb();
            });
}

// Create tags
function createTags( cb ) {

    Tag
        .create([ {
            name: 'ITEvents',
            conference: 1
        }, {
            name: 'Conference',
            conference: 1
        }, {
            name: 'Prestation',
            conference: 1
        }, {
            name: 'Important',
            conference: 1
        }, {
            name: 'Presentation',
            conference: 1
        }, {
            name: 'Question',
            conference: 1
        }, {
            name: 'Temps-réel',
            conference: 1
        }, {
            name: 'Social',
            conference: 1
        }, {
            name: 'Politique',
            conference: 1
        }, {
            name: 'Innovation',
            conference: 1
        }, {
            name: 'Flexibilité',
            conference: 1
        }, {
            name: 'Economie',
            conference: 1
        } ])
        .exec(
            function( err, created ){
                if( err ) {

                    throw err;
                }
                
                cb();
            });
}

// Create Categories of resources
function createResourcesCategories( cb ) {

    ResourceCategory
        .create( [ {
            name: 'NotVisible',
            isVisible: false,
            conference: 1
        }, {
            name: 'Photos',
            conference: 1
        }, {
            name: 'Vidéos',
            conference: 1
        }, {
            name: 'Rapports',
            conference: 1
        } ] )
        .exec(
            function( err, created ){
                if( err ) {

                    throw err;
                }
                
                cb();
            });
}


// Create Categories of resources
function createResources( cb ) {

    Resource
        .create( [ {
            name: 'NotVisible',
            path: 'http://img.wikinut.com/img/gycf69_-6rv_5fol/jpeg/0/Best-Friends-Img-Src%3AImage%3A-FreeDigitalPhotos.net.jpeg',
            category: 1
        }, {
            name: 'Photo #1',
            path: 'http://captainkimo.com/wp-content/uploads/2010/09/hdr-photo-1.jpg',
            category: 2
        }, {
            name: 'Photo #2',
            path: 'http://captainkimo.com/wp-content/uploads/2010/09/hdr-photo-1.jpg',
            category: 2
        }, {
            name: 'Vidéo #1',
            path: 'https://www.youtube.com/watch?v=y6Sxv-sUYtM',
            category: 3
        }, {
            name: 'Rapport #1',
            path: 'http://www.nestle.com/asset-library/documents/library/documents/annual_reports/2013-annual-report-en.pdf',
            category: 4
        }, {
            name: 'Rapport #2',
            path: 'http://www.nestle.com/asset-library/documents/library/documents/annual_reports/2013-annual-report-en.pdf',
            category: 4
        }, {
            name: 'Rapport #3',
            path: 'http://www.nestle.com/asset-library/documents/library/documents/annual_reports/2013-annual-report-en.pdf',
            category: 4
        } ] )
        .exec(
            function( err, created ){
                if( err ) {

                    throw err;
                }
                
                cb();
            });
}

// Create quizzes
function createQuizzes( cb ) {

    Quizz
        .create([ {
            name: 'Quizz test',
            description: 'Ceci est le questionnaire de test, il permet de tester les différentes fonctionnalités du quizz.',
            conference: 1
        }, {
            name: 'Second quizz',
            description: 'Ceci est le deuxième questionnaire de test, il permet de tester les différentes fonctionnalités du quizz.',
            conference: 1
        } ])
        .exec(
            function( err, created ){
                if( err ) {

                    throw err;
                }
                
                cb();
            });
}

// Create quizz's questions
function createQuizzQuestions( cb ) {

    QuestionQuizz
        .create([ {
            question: 'Est-ce que ce formulaire vous convient?',
            quizz: 1,
            required: true,
            type: 1,
            conference: 1
        }, {
            question: 'Est-ce que vous voulez choisir plusieurs réponses?',
            quizz: 1,
            required: true,
            type: 2,
            conference: 1
        }, {
            question: 'Est-ce que ce vous aimez cette conférence?',
            quizz: 2,
            required: true,
            type: 1,
            conference: 1
        }, {
            question: 'Qu\'est-ce qui pourrait vous aidez?',
            quizz: 2,
            type: 2,
            conference: 1
        } ])
        .exec(
            function( err, created ){
                if( err ) {

                    throw err;
                }
                
                cb();
            });
}

// Create quizz's answers
function createQuizzQuestionAnswers( cb ) {

    QuestionQuizzAnswer
        .create([ {
            answer: 'Absolument',
            question: 1
        }, {
            answer: 'Pas du tout',
            question: 1
        }, {
            answer: 'Avec',
            question: 2
        }, {
            answer: 'Grand',
            question: 2
        }, {
            answer: 'Plaisir',
            question: 2
        }, {
            answer: 'Non',
            question: 2
        }, {
            answer: 'J\'adore',
            question: 3
        }, {
            answer: 'J\'ai vu mieux',
            question: 3
        }, {
            answer: 'Je regrette d\'être venu',
            question: 3
        }, {
            answer: 'Plus de choix',
            question: 4
        }, {
            answer: 'Plus d\'interactivité',
            question: 4
        }, {
            answer: 'Plus de fonctionnalités',
            question: 4
        }, {
            answer: 'Plus de présentations',
            question: 4
        }, {
            answer: 'Plus de conférence',
            question: 4
        }, {
            answer: 'Plus de personnes',
            question: 4
        }, {
            answer: 'Tout est parfait',
            question: 4
        } ])
        .exec(
            function( err, created ){
                if( err ) {

                    throw err;
                }
                
                cb();
            });
}

module.exports = {

    initialize: function( cb ) {

        if( sails.config.environment === 'development' ||
            sails.config.environment === 'qualification' ) {
            
            environment = sails.config.environment;

            Conference
                .findOne({
                    'where': {
                        'id': {
                            'not': null
                        }
                    }
                })
                .exec(
                    function(err, conference) {
                        if ( err || conference ) {
                         
                            return cb();
                        }

                        sails.log.debug('Initialize data...');

                        create( function() {

                            sails.log.debug('Initialize data... DONE!');
                            
                            cb();
                        } );
                    } ); 

        } else {

            cb();
        }
    }
};