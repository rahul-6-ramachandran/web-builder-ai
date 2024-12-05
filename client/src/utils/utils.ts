export  function decodeJWT(token){
    try {
        
        const base64Payload = token.split('.')[1]
    
        const decodedPayload = atob(base64Payload)
    
        return JSON.parse(decodedPayload)

    } catch (error) {
        console.error("Invalid JWT" , error)
    }
   
}