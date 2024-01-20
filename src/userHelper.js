function getUserData(){
    return JSON.parse(sessionStorage.getItem('userData'));
}

function setUserData(userData){
    sessionStorage.setItem('userData', JSON.stringify(userData));
}

// function getUserId(){
//     const userData = getUserData();
//     return userData._id;
// }

function getUserId(){
    const userData = getUserData();
    return userData ? userData._id : null;
}

function removeUserData(){
    sessionStorage.removeItem('userData');
}

export const userHelper = {
    getUserData,
    setUserData,
    getUserId,
    removeUserData
}