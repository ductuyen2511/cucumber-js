class UserHelper{
    
    readTextFile(username) {
        try {
            const jsonString = fs.readFileSync('.data/test_data/login/Index.js')
            const customer = JSON.parse(jsonString)
          } catch(err) {
            console.log(err)
            return
          }
        
    }
    
}