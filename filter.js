function isValidKeyword(keyword) {
    return keyword && keyword.trim() !== "";
}

function filterUsers(users, keyword, role = null) {
    if (!isValidKeyword(keyword)) return [];

    let filteredUsers = users.filter(user =>
        user.email.toLowerCase().includes(keyword.toLowerCase())
    );

    if (role) {
        filteredUsers = filteredUsers.filter(
            user => user.role.toLowerCase() === role.toLowerCase()
        );
    }

    return filteredUsers;
}



const users = [
    { name: "John", email: "john@mail.com", role: "admin" },
    { name: "Arun", email: "arun@mail.com", role: "user" }
];

console.log(filterUsers(users, "mail", "admin"));
console.log(filterUsers(users, "mail", "user"));
console.log(filterUsers(users, "", "admin"));

