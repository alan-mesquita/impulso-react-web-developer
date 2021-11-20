function getAdmins(map) {
    let admins = [];
    for([key, value] of map) {
        if(value === "Admin") {
            admins.push(key);
        }
    }
    return admins;
}

const users = new Map()

    users.set('Alan', 'Admin',);
    users.set('Andrerlane', 'Admin')
    users.set('Alisson', 'programmer')
    users.set('Arlane', 'User')

console.log(getAdmins(users))