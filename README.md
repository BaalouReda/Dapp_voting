# about the project :
# step1 :
  - setup the system install react via vite and start a hardhat project
# step2 :
  - create the smart contracts & deploy them in fake block chain on hardhat and getting the address
# step3 :
  - install & setup metamask to use localhost fake blockchain served by hardhat
# step4 :
  -dev the frontend with chakra ui and connect the react to the block chain and  usrs wallte via ethers.js
# dev dependecies : 
yarn v1.22.19
node v16.16.0
hardhat v2.11.1",
vite  v3.1.0"
react v18.2.0",
# how to run :
you need to have yarn and node installed 
in order to install the necessary packages you need to run in terminal : yarn 
#open terminal and run 
```shell
npx hardhat compile
```
than
```shell
npx hardhat node
```
keep the terminal opern and open a new terminale and tap
```shell
npx hardhat run scripts/deploy.js --network localhost
```
copy the useelction contract adress and put it in VoterForm.jsx and App.jsx in the contractAddress constant
set up your metamask to use local host
run the react script
```shell
npx run dev
```