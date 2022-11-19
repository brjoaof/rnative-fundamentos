export const login = () => {
    // if(username == "brjoaof" && password == "senha@123")
    //return await api.post("/login", { login: username, password: password})
    return new Promise( resolve => {
        setTimeout(() => {
            resolve({
                token: "eykasljdapisjadsl.ldhapsaisjasdpja1231wsda",
                user: {
                    name: "João Felipe",
                    email: "brjoaof@gmail.com"
                }
            })
        }, 1000)
    })
}