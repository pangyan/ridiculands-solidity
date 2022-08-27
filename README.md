# ridiculands-solidity


## prerequsite
- node.js
- truffle (npm install -g truffle)
- ganache (npm install -g ganache)


## build and automated test

run ganache on the port specified for our development environment (7545)
```
$ ganache-cli -p 7545
```

compile the contracts located in the project's {{contracts}} directory to that network
```
$ truffle compile
```

// run all migrations located in the project's {{migrations}} directory
```
$ truffle migrate
```

// run all tests located in the project's {{test}} directory
```
$ truffle test
```
