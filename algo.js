const params = [4,8,10,11,-14,11,-46,1]
bigestSum(params)

//kadane algorithm

function bigestSum(arrayInput){

    let dp = [...Array(arrayInput.length)].fill(0);

    dp[0] = arrayInput[0]

    let globalSum = dp[0]

    for (let i = 1; i < arrayInput.length; i++) {
        
        dp[i] = dp[i-1]+arrayInput[i]

        if (dp[i]>globalSum) {
            globalSum = dp[i]
        }
        
    }

    for (let index = 0; index < dp.length; index++) {
        console.log(dp[index])
    }

    console.log("bigest sum globalSum"+globalSum)

}
