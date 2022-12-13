import React, { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";
import axios from "axios";
import { DataTable } from "react-native-paper";

//Firebase Imports
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth'

//Styles
import styles from "./analytics_styles";

//Section Imports

//Api Calls
import ApiCalls from "../../components/api_calls/calls";

const Analytics = () => {
  const [state, setState] = useState({
    results: [],
    selected: {},
  });

  //Token
  var token = ApiCalls.ApiToken.Token;

  //Includes
  var includes = "?include=stats&seasons=";

  var test =
    "https://soccer.sportmonks.com/api/v2.0/teams/" +
    62 +
    "?&include=stats&seasons=" +
    19735 +
    "&api_token=FYNhuIUF1XaTFKnLqL6WCkU2vyskoZoS0K6LVvmb5ggpQl0o5s8UGNut4GPe";

  const getTeamData = () => {
    axios(test).then(({ data }) => {
      let results = data.data.stats.data;
      console.log(results);
      setState((prevState) => {
        return { ...prevState, results: results };
      });
    });
  };

  useEffect(() => {
    getTeamData();
  }, []);

  return (
    <View>
      {state.results.map((result) => (
        <ScrollView key={result.team_id} style={styles.ContentContainer}>
          <View>
            {/* GENERAL SECTION */}
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={styles.title}>GENERAL</Text>
                </DataTable.Title>
              </DataTable.Header>

              {/* GOALS PER GAME */}
              <View key={result.id} style={styles.tableText}>
                <DataTable.Header style={styles.split}>
                  <DataTable.Title>
                    <Text style={styles.subtitle}>Goals Per Game</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Total</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.avg_goals_per_game_scored.total}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Home</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.avg_goals_per_game_scored.home}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Away</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.avg_goals_per_game_scored.away}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>

              {/* CONCEDED PER GAME */}
              <View key={result.id} style={styles.tableText}>
                <DataTable.Header style={styles.split}>
                  <DataTable.Title>
                    <Text style={styles.subtitle}>Conceded Per Game</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Total</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.avg_goals_per_game_conceded.total}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Home</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.avg_goals_per_game_conceded.home}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Away</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.avg_goals_per_game_conceded.away}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>

              {/* BOTH TEAMS TO SCORE */}
              <View key={result.id} style={styles.tableText}>
                <DataTable.Header style={styles.split}>
                  <DataTable.Title>
                    <Text style={styles.subtitle}>Both Teams To Score</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Both Scoring</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>{result.btts}%</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>

              {/* AVERAGE POSSESSION */}
              <View key={result.id} style={styles.tableText}>
                <DataTable.Header style={styles.split}>
                  <DataTable.Title>
                    <Text style={styles.subtitle}>Possession</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Average Possession</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>{result.avg_ball_possession_percentage}%</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>

              {/* FIRST GOAL */}
              <View key={result.id} style={styles.tableText}>
                <DataTable.Header style={styles.split}>
                  <DataTable.Title>
                    <Text style={styles.subtitle}>First Goal</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Average</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.avg_first_goal_scored.total}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Home</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.avg_first_goal_scored.home}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Away</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.avg_first_goal_scored.away}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>

              {/* FIRST CONCEDED */}
              <View key={result.id} style={styles.tableText}>
                <DataTable.Header style={styles.split}>
                  <DataTable.Title>
                    <Text style={styles.subtitle}>First Conceded</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Average</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.avg_first_goal_conceded.total}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Home</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.avg_first_goal_conceded.home}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Away</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.avg_first_goal_conceded.away}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>

              {/* PLAYER RATINGS */}
              <View key={result.id} style={styles.tableText}>
                <DataTable.Header style={styles.split}>
                  <DataTable.Title>
                    <Text style={styles.subtitle}>Player Ratings</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Average Rating</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.avg_player_rating}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>
            </DataTable>

            {/* ATTACKING SECTION */}
            <DataTable>
              <DataTable.Header style={styles.section}>
                <DataTable.Title>
                  <Text style={styles.title}>Attacking</Text>
                </DataTable.Title>
              </DataTable.Header>

              <View key={result.id} style={styles.tableText}>
                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Attacks</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>{result.attacks}</Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Dangerous Attacks</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>{result.dangerous_attacks}</Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Corners</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>{result.total_corners}</Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Average Corners</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>{result.avg_corners}</Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Offsides</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>{result.offsides}</Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Header style={styles.split}>
                  <DataTable.Title>
                    <Text style={styles.subtitle}>Shots</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Shots On Target</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>{result.shots_on_target}</Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Average Shots On Target</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.avg_shots_on_target_per_game}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Shots Off Target</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>{result.shots_off_target}</Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Average Shots Off Target</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.avg_shots_off_target_per_game}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>
            </DataTable>

            {/* DEFENDING SECTION */}
            <DataTable>
              <DataTable.Header style={styles.section}>
                <DataTable.Title>
                  <Text style={styles.title}>DEFENDING</Text>
                </DataTable.Title>
              </DataTable.Header>

              <View key={result.id} style={styles.tableText}>
                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Tackles</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>{result.tackles}</Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Fouls</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>{result.fouls}</Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Average Fouls Per Game</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>{result.avg_fouls_per_game}</Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Header style={styles.split}>
                  <DataTable.Title>
                    <Text style={styles.subtitle}>Cards</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Yellow Cards</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>{result.yellowcards}</Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Red Cards</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>{result.redcards}</Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>
            </DataTable>

            {/* GAME RESULTS */}
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>
                  <Text style={styles.title}>GAME RESULTS & GOALS</Text>
                </DataTable.Title>
              </DataTable.Header>

              {/* WINS */}
              <View key={result.id} style={styles.tableText}>
                <DataTable.Header style={styles.split}>
                  <DataTable.Title>
                    <Text style={styles.subtitle}>WINS</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Total</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.win.total}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Home</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.win.home}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Away</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.win.away}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>

              {/* DRAWS */}
              <View key={result.id} style={styles.tableText}>
                <DataTable.Header style={styles.split}>
                  <DataTable.Title>
                    <Text style={styles.subtitle}>DRAWS</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Total</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.draw.total}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Home</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.draw.home}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Away</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.draw.away}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>

              {/* LOSSES */}
              <View key={result.id} style={styles.tableText}>
                <DataTable.Header style={styles.split}>
                  <DataTable.Title>
                    <Text style={styles.subtitle}>LOSSES</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Total</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.lost.total}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Home</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.lost.home}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Away</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.lost.away}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>

              {/* GOALS SCORED */}
              <View key={result.id} style={styles.tableText}>
                <DataTable.Header style={styles.split}>
                  <DataTable.Title>
                    <Text style={styles.subtitle}>GOALS SCORED</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Total</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.goals_for.total}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Home</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.goals_for.home}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Away</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.goals_for.away}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>

              {/* GOALS CONCEDED */}
              <View key={result.id} style={styles.tableText}>
                <DataTable.Header style={styles.split}>
                  <DataTable.Title>
                    <Text style={styles.subtitle}>GOALS CONCEDED</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Total</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.goals_against.total}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Home</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.goals_against.home}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Away</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.goals_against.away}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>

              {/* CLEAN SHEETS */}
              <View key={result.id} style={styles.tableText}>
                <DataTable.Header style={styles.split}>
                  <DataTable.Title>
                    <Text style={styles.subtitle}>CLEAN SHEETS</Text>
                  </DataTable.Title>
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Total</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.clean_sheet.total}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Home</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.clean_sheet.home}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell style={{ flex: 1.8 }}>
                    <Text style={styles.body}>Away</Text>
                  </DataTable.Cell>

                  <DataTable.Cell style={{ justifyContent: "flex-end" }}>
                    <Text style={styles.body}>
                      {result.clean_sheet.away}
                    </Text>
                  </DataTable.Cell>
                </DataTable.Row>
              </View>
            </DataTable>
          </View>
        </ScrollView>
      ))}
    </View>
  );
};

export default Analytics;
