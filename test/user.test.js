const User = artifacts.require("User");

contract("User", (accounts) => {
    it("should get user number", async () => {
        const user = await User.deployed();
        console.log(user.getNumber());
    });
});