const User = artifacts.require("User");

contract("User", (accounts) => {
    it("should get user number", async () => {
        const user = await User.deployed();
        let userNumber = await user.getMyNumber();
        console.log(userNumber.toString());

        await user.setNumber(5);
        userNumber = await user.getMyNumber();
        console.log(userNumber.toString());
    });
});