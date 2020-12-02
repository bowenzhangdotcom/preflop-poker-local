

export const fetchData = async (username, password, inputChartType, inputPlayerCount, inputHeroPosition, inputVillianPosition, inputSizing) => {
    let url = `https://poker-preflop.herokuapp.com/api/getChartRange/?chartType=${inputChartType}&playerCount=${inputPlayerCount}&heroPosition=${inputHeroPosition}&villianPosition=${inputVillianPosition}&sizing=${inputSizing}`
    let authString = `${username}:${password}`
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(authString))
    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            headers: headers,
        });
        let data = await response.json();
        return data[0];
    } catch (error) {
        console.log(error);
    }
};

export const defaultChart = {
    'AA': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'AKs': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'AQs': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'AJs': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'ATs': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A9s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A8s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A7s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A6s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A5s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A4s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A3s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A2s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'AKo': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'KK': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'KQs': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'KJs': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'KTs': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K9s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K8s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K7s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K6s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K5s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K4s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K3s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K2s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'AQo': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'KQo': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'QQ': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'QJs': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'QTs': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q9s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q8s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q7s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q6s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q5s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q4s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q3s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q2s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'AJo': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'KJo': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'QJo': {'Raise': 0, 'Call': 0, 'Fold': 1},                    
    'JJ': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'JTs': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J9s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J8s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J7s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J6s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J5s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J4s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J3s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J2s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'ATo': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'KTo': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'QTo': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'JTo': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'TT': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T9s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T8s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T7s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T6s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T5s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T4s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T3s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T2s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A9o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K9o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q9o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J9o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T9o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '99': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '98s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '97s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '96s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '95s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '94s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '93s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '92s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A8o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K8o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q8o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J8o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T8o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '98o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '88': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '87s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '86s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '85s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '84s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '83s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '82s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A7o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K7o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q7o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J7o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T7o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '97o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '87o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '77': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '76s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '75s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '74s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '73s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '72s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A6o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K6o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q6o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J6o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T6o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '96o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '86o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '76o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '66': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '65s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '64s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '63s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '62s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A5o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K5o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q5o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J5o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T5o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '95o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '85o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '75o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '65o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '55': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '54s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '53s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '52s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A4o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K4o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q4o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J4o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T4o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '94o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '84o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '74o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '64o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '54o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '44': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '43s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '42s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A3o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K3o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q3o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J3o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T3o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '93o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '83o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '73o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '63o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '53o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '43o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '33': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '32s': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'A2o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'K2o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'Q2o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'J2o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    'T2o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '92o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '82o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '72o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '62o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '52o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '42o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '32o': {'Raise': 0, 'Call': 0, 'Fold': 1},
    '22': {'Raise': 0, 'Call': 0, 'Fold': 1}
};