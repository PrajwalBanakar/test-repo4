const user = {
    name: "Raj",
    age: 21,
};

test("Prajwal is 23", () => {
    expect(user.name).toBe("Raj");
    expect(user.age).toBe(21);
})

