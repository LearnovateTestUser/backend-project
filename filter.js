function isValidKeyword(keyword) {
    return keyword && keyword.trim() !== "";
}

function filterUsers(users, keyword) {
    if (!isValidKeyword(keyword)) return [];

    return users.filter(user =>
        user.email.toLowerCase().includes(keyword.toLowerCase())
    );
}

const users = [
    { name: "John", email: "john@mail.com", role: "admin" },
    { name: "Arun", email: "arun@mail.com", role: "user" }
];

console.log(filterUsers(users, "john"));
