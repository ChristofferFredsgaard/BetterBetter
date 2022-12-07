export default {
    ApiToken:{
        Token: "?&api_token=FYNhuIUF1XaTFKnLqL6WCkU2vyskoZoS0K6LVvmb5ggpQl0o5s8UGNut4GPe"
    },

    LeagueCalls: {
        AllLeagues: "https://soccer.sportmonks.com/api/v2.0/leagues?include=country&api_token=FYNhuIUF1XaTFKnLqL6WCkU2vyskoZoS0K6LVvmb5ggpQl0o5s8UGNut4GPe",
        
    },

    Fixtures:{
        DecToApril: "https://soccer.sportmonks.com/api/v2.0/fixtures/between/2022-12-01/2023-04-01?include=localTeam,visitorTeam&api_token=FYNhuIUF1XaTFKnLqL6WCkU2vyskoZoS0K6LVvmb5ggpQl0o5s8UGNut4GPe",
        All2023: "https://soccer.sportmonks.com/api/v2.0/fixtures/between/2023-01-01/2024-12-31?include=localTeam,visitorTeam&api_token=FYNhuIUF1XaTFKnLqL6WCkU2vyskoZoS0K6LVvmb5ggpQl0o5s8UGNut4GPe",
    },
    
    Predictions:{
        //Id goes into the end, to get predictions for X game
        GamePrediction: "https://soccer.sportmonks.com/api/v2.0/predictions/probabilities/fixture/",
    },

    ClubSearch:{
        Search: "https://soccer.sportmonks.com/api/v2.0/teams/search/",
    },
}