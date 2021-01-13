/*

This was the code challenge for Jake Quain of Parachute Health

*/

const fs = require("fs").promises;

const boroughTweetsHash = {}

const analyzeTweetFiles = async () => {
    try {
        for(filePath of ["./tweets_aa", "./tweets_ab", "./tweets_ac"]){
            // would change this to a read stream instead for large files
            const data = await fs.readFile(filePath, 'utf-8')
            const tweetArray = data.split("\n")
            for(tweet of tweetArray){
               const tweetObj = parseTweet(tweet)
               tabulateBoroughUrls(tweetObj)
            }
        }
    }
    catch(err){
        throw err;
    }
}

const parseTweet = (tweet) => {
    // would add more error checking
    const tweetParts = tweet.split("\t")
    return { borough: tweetParts[0], tweetString: tweetParts[1]}
}

const tabulateBoroughUrls = (tweetObj) => {
    // would add more error checking
    if (tweetObj.tweetString && tweetObj.tweetString.includes("http")) {
        boroughTweetsHash[tweetObj.borough] = boroughTweetsHash[tweetObj.borough] ? boroughTweetsHash[tweetObj.borough] + 1 : 1
    }
    return
}

analyzeTweetFiles()
.then(() => {
    console.log({boroughTweetsHash})
})
.catch((err) => {
    console.error(err)
})
