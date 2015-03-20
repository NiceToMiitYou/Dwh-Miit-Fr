var environment = 'development';

function getUrl() {
    var url = 'http://127.0.0.1:8080/';

    switch( environment ) {

        case 'qualification':
           url = 'http://app.qlf.priv.miit.fr/';
           break;

        case 'staging':
           url = 'http://app.stg.priv.miit.fr/';
           break;

        case 'production':
           url = 'http://app.miit.fr/';
           break;
    }

    return url;
}

// Create all data
function create( cb ) {

    async.waterfall( [

        createUsers,

        createRoles,

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
            id: 1,
            mail: 'viewer@itevents.fr',
            password: 'itevents'
        }, {
            id: 2,
            mail: 'master@itevents.fr',
            password: 'itevents'
        }, {
            id: 3,
            mail: 'live@itevents.fr',
            password: 'itevents'
        }, {
            id: 4,
            mail: 'demo@itevents.fr',
            password: 'itevents'
        }, {
            id: 5,
            mail: 'sncf@itevents.fr',
            password: 'itevents'
        } ] )
        .exec(
            function( err, created ){
                if( err ) {

                    throw err;
                }

                cb();
            });
}

// Create roles
function createRoles( cb ) {

    Role
        .create( [ {
            user: 2,
            conference: 1,
            roles: [ 'ROLE_MASTER' ]
        }, {
            user: 3,
            conference: 1,
            roles: [ 'ROLE_LIVE' ]
        }, {
            user: 4,
            conference: 1,
            roles: [ 'ROLE_MASTER', 'ROLE_LIVE' ]
        }, {
            user: 5,
            conference: 2,
            roles: [ 'ROLE_MASTER', 'ROLE_LIVE' ]
        }, {
            user: 5,
            conference: 3,
            roles: [ 'ROLE_MASTER', 'ROLE_LIVE' ]
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
        .create( [ {
            id: 1,
            name: 'ITEvents',
            colorScheme: 'html {}',
            logo: '//cdn.miit.fr/static/logo/990d99346dfa30601d31ac252ae697a3.png'
        }, {
            id: 2,
            name: 'SNCF',
            colorScheme: 'html {}',
            logo: '//cdn.miit.fr/static/logo/bec3edd9646e394e6b2e4d6dcb29fed6.png'
        } ] )
        .exec(
            function( err, created ) {
                if( err ) {

                    throw err;
                }

                cb();
            });
}

// Create the conference
function createConference( cb ) {

    Conference
        .create( [ {
            id: 1,
            name: 'Conférence Miit',
            token: 'DemoSNCF',
            description: 'ITEvents vous présente sa conférence de test grâce à Miit.',
            colorScheme: 'html {}',
            url: getUrl(),
            logo: '//cdn.miit.fr/static/logo/990d99346dfa30601d31ac252ae697a3.png',
            restrictions: [],
            client: 1
        }, {
            id: 2,
            name: 'Conférence SNCF',
            token: 'SNCF240315',
            description: 'Bienvenue sur la conférence du 24 mars 2015.',
            colorScheme: 'html {}',
            url: getUrl(),
            logo: '//cdn.miit.fr/static/logo/bec3edd9646e394e6b2e4d6dcb29fed6.png',
            restrictions: [],
            client: 2
        }, {
            id: 3,
            name: 'Convention Managers Fret',
            token: 'fret',
            description: 'Bienvenue sur la convention du 7 et 8 avril 2015.',
            colorScheme: 'html {}',
            url: getUrl(),
            logo: '//cdn.miit.fr/static/logo/bec3edd9646e394e6b2e4d6dcb29fed6.png',
            restrictions: [],
            client: 2
        } ] )
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
            id: 1,
            name: 'Nice to Miit you',
            description: 'Améliorez l\'interactivité de vos conférences grâce à l\'application Miit d\'ITEvents.',
            authors: 'Cortet Jordan',
            conference: 1
        }, {
            id: 2,
            name: 'Sans titre',
            description: 'Description en attente',
            authors: 'En attente',
            conference: 2
        }, {
            id: 3,
            name: 'Convention Managers Fret',
            description: 'Il faudra encore patienter jusqu\'au 7 avril avant découvrir à 100% Miit!',
            authors: 'Convention Managers Fret',
            conference: 3
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
        }, {
            id: 11,
            content: '<img src="/images/slides/Diapositive01.png">',
            presentation: 2
        }, {
            id: 12,
            content: '<img src="/images/slides/Diapositive01.png">',
            presentation: 3
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
        .create( [ {
            id: 1,
            name: 'ITEvents',
            conference: 1
        }, {
            id: 2,
            name: 'SNCF',
            type: 1,
            conference: 2
        }, {
            id: 3,
            name: 'FRET',
            type: 1,
            conference: 3
        } ] )
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
        .create( [ {
            id: 1,
            name: 'Social',
            conference: 1
        }, {
            id: 2,
            name: 'Politique',
            conference: 1
        }, {
            id: 3,
            name: 'Innovation',
            conference: 1
        }, {
            id: 4,
            name: 'Economie',
            conference: 1
        }, {
            id: 5,
            name: 'Social',
            conference: 2
        }, {
            id: 6,
            name: 'Convention',
            conference: 3
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
function createResourcesCategories( cb ) {

    ResourceCategory
        .create( [ {
            id: 1,
            name: 'NotVisible',
            isVisible: false,
            conference: 1
        }, {
            id: 2,
            name: 'Photos',
            conference: 1
        }, {
            id: 3,
            name: 'Vidéos',
            conference: 1
        }, {
            id: 4,
            name: 'Sans titre',
            conference: 2
        }, {
            id: 5,
            name: 'Informations pratiques',
            conference: 3
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
            id: 1,
            name: 'NotVisible',
            path: '//img.wikinut.com/img/gycf69_-6rv_5fol/jpeg/0/Best-Friends-Img-Src%3AImage%3A-FreeDigitalPhotos.net.jpeg',
            type: 'picture',
            category: 1
        }, {
            id: 2,
            name: 'Photo #1',
            path: '//captainkimo.com/wp-content/uploads/2010/09/hdr-photo-1.jpg',
            type: 'picture',
            category: 2
        }, {
            id: 3,
            name: 'Photo #2',
            path: '//cdn.miit.fr/static/logo/bec3edd9646e394e6b2e4d6dcb29fed6.png',
            type: 'picture',
            category: 2
        }, {
            id: 4,
            name: 'Vidéo #1',
            path: '//www.youtube.com/watch?v=y6Sxv-sUYtM',
            type: 'youtube',
            category: 3
        }, {
            id: 5,
            name: 'Temporim Lyon - cité internationale',
            path: '//cdn.miit.fr/static/documents/sncf/hotel_temporim.pdf',
            type: 'pdf',
            category: 5
        }, {
            id: 6,
            name: 'Park & suites élégance - cité internationale',
            path: '//cdn.miit.fr/static/documents/sncf/park_suites.pdf',
            type: 'pdf',
            category: 5
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
        .create( [ {
            id: 1,
            name: 'Premier quizz',
            description: 'Ceci est le questionnaire de test, il permet de tester les différentes fonctionnalités du quizz.',
            conference: 1
        }, {
            id: 2,
            name: 'Second quizz',
            description: 'Ceci est le deuxième questionnaire de test, il permet de tester les différentes fonctionnalités du quizz.',
            conference: 1
        }, {
            id: 3,
            name: 'Test de connaissances',
            description: 'Bienvenue sur le test de connaissances du 24 mars 2015.',
            conference: 2
        } ] )
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
            id: 1,
            question: 'Est-ce que ce formulaire vous convient?',
            quizz: 1,
            required: true,
            type: 1,
            conference: 1
        }, {
            id: 2,
            question: 'Est-ce que vous voulez choisir plusieurs réponses?',
            quizz: 1,
            required: true,
            type: 2,
            conference: 1
        }, {
            id: 3,
            question: 'Est-ce que ce vous aimez cette conférence?',
            quizz: 2,
            required: true,
            type: 1,
            conference: 1
        }, {
            id: 4,
            question: 'Qu\'est-ce qui pourrait vous aidez?',
            quizz: 2,
            required: true,
            type: 2,
            conference: 1
        }, {
            id: 5,
            question: 'Avez-vous une bonne connaissances de l\'organisation SNCF concernant:',
            quizz: 3,
            required: true,
            type: 0,
            conference: 2
        }, {
            id: 6,
            question: '1 - La réforme ferroviaire?',
            extra: {
                small: true
            },
            quizz: 3,
            required: true,
            type: 1,
            conference: 2
        }, {
            id: 7,
            question: '2 - L\'organisation des SI?',
            extra: {
                small: true
            },
            quizz: 3,
            required: true,
            type: 1,
            conference: 2
        }, {
            id: 8,
            question: '3 - L\'organisation DSP?',
            extra: {
                small: true
            },
            quizz: 3,
            required: true,
            type: 1,
            conference: 2
        }, {
            id: 9,
            question: '4 - L\'organisation ENVU?',
            extra: {
                small: true
            },
            quizz: 3,
            required: true,
            type: 1,
            conference: 2
        }, {
            id: 10,
            question: '5 - L\'organisation et fonctionnement TM?',
            extra: {
                small: true
            },
            quizz: 3,
            required: true,
            type: 1,
            conference: 2
        }, {
            id: 11,
            question: 'Vous sentez vous concernés/impactés par les réorganisations en cours?',
            quizz: 3,
            required: true,
            type: 1,
            conference: 2
        }, {
            id: 12,
            question: 'Avez-vous une bonne connaissance des offres au catalogue DSP SI TS:',
            quizz: 3,
            required: true,
            type: 0,
            conference: 2
        }, {
            id: 13,
            question: '1 - SC2',
            extra: {
                small: true
            },
            quizz: 3,
            required: true,
            type: 3,
            conference: 2
        }, {
            id: 14,
            question: '2 - Support',
            extra: {
                small: true
            },
            quizz: 3,
            required: true,
            type: 3,
            conference: 2
        }, {
            id: 15,
            question: '3 - Cloud / Hybridation',
            extra: {
                small: true
            },
            quizz: 3,
            required: true,
            type: 3,
            conference: 2
        }, {
            id: 16,
            question: '4 - PCIR',
            extra: {
                small: true
            },
            quizz: 3,
            required: true,
            type: 3,
            conference: 2
        }, {
            id: 17,
            question: 'Avez-vous une bonne connaissance des offres TM?',
            quizz: 3,
            required: true,
            type: 3,
            conference: 2
        }, {
            id: 18,
            question: 'Quels sont vos difficultés / irritants (relations fournisseurs, manque de visibilité, ...)?',
            quizz: 3,
            required: true,
            type: 3,
            conference: 2
        }, {
            id: 19,
            question: 'Quels sont les axes à développer (communication interne/externe, coordination inter offre, mise en qualité, ...)?',
            quizz: 3,
            required: true,
            type: 3,
            conference: 2
        }, {
            id: 20,
            question: 'Quelles thématiques souhaitez vous aborder?',
            quizz: 3,
            required: true,
            type: 3,
            conference: 2
        }, {
            id: 21,
            question: 'Divers, boîte à idées, suggestions...',
            quizz: 3,
            required: true,
            type: 3,
            conference: 2
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
            id: 1,
            answer: 'Absolument',
            question: 1
        }, {
            id: 2,
            answer: 'Pas du tout',
            question: 1
        }, {
            id: 3,
            answer: 'Avec',
            question: 2
        }, {
            id: 4,
            answer: 'Grand',
            question: 2
        }, {
            id: 5,
            answer: 'Plaisir',
            question: 2
        }, {
            id: 6,
            answer: 'Non',
            question: 2
        }, {
            id: 7,
            answer: 'J\'adore',
            question: 3
        }, {
            id: 8,
            answer: 'J\'ai vu mieux',
            question: 3
        }, {
            id: 9,
            answer: 'Je regrette d\'être venu',
            question: 3
        }, {
            id: 10,
            answer: 'Plus de choix',
            question: 4
        }, {
            id: 11,
            answer: 'Plus d\'interactivité',
            question: 4
        }, {
            id: 12,
            answer: 'Plus de fonctionnalités',
            question: 4
        }, {
            id: 13,
            answer: 'Plus de présentations',
            question: 4
        }, {
            id: 14,
            answer: 'Plus de conférences',
            question: 4
        }, {
            id: 15,
            answer: 'Plus de personnes',
            question: 4
        }, {
            id: 16,
            answer: 'Tout est parfait',
            question: 4
        }, {
            id: 17,
            answer: 'Très bonne',
            question: 6
        }, {
            id: 18,
            answer: 'Bonne',
            question: 6
        }, {
            id: 19,
            answer: 'Moyenne',
            question: 6
        }, {
            id: 20,
            answer: 'Faible',
            question: 6
        }, {
            id: 21,
            answer: 'Très bonne',
            question: 7
        }, {
            id: 22,
            answer: 'Bonne',
            question: 7
        }, {
            id: 23,
            answer: 'Moyenne',
            question: 7
        }, {
            id: 24,
            answer: 'Faible',
            question: 7
        }, {
            id: 25,
            answer: 'Très bonne',
            question: 8
        }, {
            id: 26,
            answer: 'Bonne',
            question: 8
        }, {
            id: 27,
            answer: 'Moyenne',
            question: 8
        }, {
            id: 28,
            answer: 'Faible',
            question: 8
        }, {
            id: 29,
            answer: 'Très bonne',
            question: 9
        }, {
            id: 30,
            answer: 'Bonne',
            question: 9
        }, {
            id: 31,
            answer: 'Moyenne',
            question: 9
        }, {
            id: 32,
            answer: 'Faible',
            question: 9
        }, {
            id: 33,
            answer: 'Très bonne',
            question: 10
        }, {
            id: 34,
            answer: 'Bonne',
            question: 10
        }, {
            id: 35,
            answer: 'Moyenne',
            question: 10
        }, {
            id: 36,
            answer: 'Faible',
            question: 10
        }, {
            id: 37,
            answer: 'Fortement',
            question: 11
        }, {
            id: 38,
            answer: 'Moyennement',
            question: 11
        }, {
            id: 39,
            answer: 'Peu',
            question: 11
        }, {
            id: 40,
            question: 13
        }, {
            id: 41,
            question: 14
        }, {
            id: 42,
            question: 15
        }, {
            id: 43,
            question: 16
        }, {
            id: 44,
            question: 17
        }, {
            id: 45,
            question: 18
        }, {
            id: 46,
            question: 19
        }, {
            id: 47,
            question: 20
        }, {
            id: 48,
            question: 21
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

        if( sails.config.environment === 'development'   ||
            sails.config.environment === 'qualification' ||
            sails.config.environment === 'staging'       ||
            sails.config.environment === 'production' ) {
            
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