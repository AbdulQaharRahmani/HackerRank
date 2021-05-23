'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
    // Write your code here
    const ranks = [];
    ranks[0] = 1;
    let playerRanks = [];
    for (let i = 1; i<ranked.length;i++){
        if(ranked[i]=== ranked[i-1]){
            ranks[i] = ranks[i-1];
        }else{
            ranks[i] = ranks[i-1] + 1;
        }
    }
    let arrow = ranked.length -1;
    for(let i = 0;i<player.length;i++){
        while(ranked[arrow] <= player[i] && arrow >=0){
            arrow--;
        }
        if(player[i]>=ranked[0]){
            playerRanks.push(1);
        }else{     
              playerRanks.push(ranks[arrow]+1);   
      }
    }
    
    return playerRanks;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const rankedCount = parseInt(readLine().trim(), 10);

    const ranked = readLine().replace(/\s+$/g, '').split(' ').map(rankedTemp => parseInt(rankedTemp, 10));

    const playerCount = parseInt(readLine().trim(), 10);

    const player = readLine().replace(/\s+$/g, '').split(' ').map(playerTemp => parseInt(playerTemp, 10));

    const result = climbingLeaderboard(ranked, player);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
