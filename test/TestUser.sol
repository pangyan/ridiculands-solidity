pragma solidity ^0.8.0;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/User.sol";

contract TestUser {

    function testInitialUserUsingDeployedContract() public {
        User user = User(DeployedAddresses.User());
        uint256 expected = 25;

        Assert.equal(user.getNumber(), expected, "Expected number is 25.");
    }

    function testInitialUserUsingNewContract() public {
        User user = new User();
        uint256 expected = 25;

        Assert.equal(user.getNumber(), expected, "Expected number is 25.");
    }
}
