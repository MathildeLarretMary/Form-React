// https://randomuser.me/api/?inc=login,name,cell,email

/**
 * 
 * @param {Object} usersArray - all users in dataBase
 * @param {string} userValue - from input UserName or Email
 * @param {(string|number)} userPassword - from input Password
 * @param {*} setCheck - takes the setter to be able to submit if a user is find
 * @param {*} setUser - takes the setter to return user checked values
 */
export const checkToSubmit = ( usersArray, userValue, userPassword, setCheck, setUser ) => {
    
    let userChecked

    usersArray.forEach(user => {
        if((userValue === user.login.username || userValue === user.email) && userPassword === user.login.password){
            userChecked = user
        } else { 
            return 
        }    
    })

    if(typeof userChecked === 'object') {
        setCheck(true)
        setUser(userChecked)
        console.log('check');
    } else {
        setCheck(false)
        setUser([])
        console.log('not check');
    }
}
