import {API_KEY, API_URL} from './settings'

const apiResponse = apiResponse => {
    const { data = [] } = apiResponse
    return data
}

export default function getTrendTerms () {
    const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}`

    return fetch(apiURL)
        .then(res => res.json())
        .then(apiResponse)
}