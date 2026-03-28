function searchUsers(users, keyword) {
    return users.filter(user =>
        user.name.toLowerCase().includes(keyword.toLowerCase())
    );
}

const users = [
    { name: "John" },
    { name: "Swetha" },
    { name: "Arun" }
];

console.log(searchUsers(users, "sw"));
