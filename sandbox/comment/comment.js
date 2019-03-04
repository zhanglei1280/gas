const request = require("superagent")

const API = {
    comment: "https://api.acplay.net/api/v2/comment/",
    search: "https://api.acplay.net/api/v2/search/episodes"
}

const searchEpisode = (anime, episode) => {
    return request
        .get(API.search)
        .query({anime, episode})
}

const getCommentByID = episode => {
    return request
        .get(API.comment+episode)
        .query({withRelated: true})
        .then(res => res.body)
}

const episodeList = (anime, episode) => {
    return searchEpisode(anime, episode)
        .then(res => {
            const {animes} = res.body
            if(animes.length === 0){
                return []
            }
            else{
                const list = []
                animes.forEach(e => {
                    list.push({
                        anime: e.animeTitle,
                        episode: e.episodes[0].episodeTitle,
                        eid: e.episodes[0].episodeId
                    })
                });

                return list
            }
        })     
}

module.exports = {
    episodeList,
    getCommentByID
}
