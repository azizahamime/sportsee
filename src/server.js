import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";
    this.get('/users', () => {
      return {
        users: [
          {
            id: 1,
            userInfos: {
              firstName: 'azi',
              lastName: 'coucou',
              age: 17,
            },
            todayScore: 0.12,
            keyData: {
              calorieCount: 1930,
              proteinCount: 155,
              carbohydrateCount: 290,
              lipidCount: 50
            }
          },
          {
            id: 2,
            userInfos: {
              firstName: 'vvvv',
              lastName: 'nom2',
              age: 20,
            },
            todayScore: 0.12,
            keyData: {
              calorieCount: 1930,
              proteinCount: 155,
              carbohydrateCount: 290,
              lipidCount: 50
            }
          }
        ]
      }
    })



  }

});