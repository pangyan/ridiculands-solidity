var UserContract = artifacts.require("User");

module.exports = function(deployer) {
  // Deploy the UserContract contract as our only task
  deployer.deploy(UserContract);
};