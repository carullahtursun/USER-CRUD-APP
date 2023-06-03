const userData = [
    {
        id: 1,
        name: "John Doe",
        email: "johndoe@example.com",
        password: "password123",
        phone: "1234567890",
        active: true,
        role: "Admin",
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "janesmith@example.com",
        password: "pass4321",
        phone: "9876543210",
        active: false,
        role: "User",
    },
    {
        id: 3,
        name: "Alice Johnson",
        email: "alice@example.com",
        password: "secretword",
        phone: "5555555555",
        active: true,
        role: "User",
    },
    {
        id: 4,
        name: "Bob Anderson",
        email: "bob@example.com",
        password: "securepass",
        phone: "9999999999",
        active: false,
        role: "Admin",
    },
  
    // Add more user objects here...
];

for (let i = 5; i <= 300; i++) {
    const user = {
        id: i,
        name: `User ${i}`,
        email: `user${i}@example.com`,
        password: `password${i}`,
        phone: `123456789${i}`,
        active: i % 2 === 0 ? true : false,
        role: i % 3 === 0 ? "Admin" : "User",
    };
    userData.push(user);
}
export default userData;
