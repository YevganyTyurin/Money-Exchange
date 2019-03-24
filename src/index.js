// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let H = 0, Q = 0, D = 0, N = 0, P = 0; 
    let errorString = {error: "You are rich, my friend! We don't have so much coins for exchange"}; 
    
    if (currency > 10000) return errorString; 
    
    let zero = []; 
    if(currency <= 0) return zero; 
    
    if (currency > 0) { 
    
        while (currency >= 50) { 
            currency -= 50; 
            H++; 
        } 
    
        while (currency >= 25) { 
            currency -=25; 
            Q++; 
        } 
    
        while (currency >= 10) { 
            currency -=10; 
            D++; 
        } 
    
        while (currency >= 5) { 
            currency -=5; 
            N++; 
        } 
    
        while (currency >= 1) { 
            currency -=1; 
            P++; 
        } 
    
        let result = []; 
        if(H > 0) result.H = H; 
        if(Q > 0) result.Q = Q; 
        if(D > 0) result.D = D; 
        if(N > 0) result.N = N; 
        if(P > 0) result.P = P; 
    
    return result; 
    }
}
