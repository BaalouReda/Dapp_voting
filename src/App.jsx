import React, { useState, useEffect } from 'react';
import { VoteForm } from './components/VoteForm';
import { Result } from './components/Result';
import { Layout } from './components/Layout';
import { Flex } from '@chakra-ui/layout';
import { ethers } from 'ethers';
import UsElectionVote from './artifacts/contracts/UsElectionVoteContract.sol/UsElectionVote.json'
const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, UsElectionVote.abi, signer);
const App = () => {
  const [condidate1Vote, setcondidate1tVote] = useState(0);
  const [condidate2Vote, setcondidate2Vote] = useState(0);
  const [voted, setVoted] = useState(false);
  useEffect(async () => {
    const value1 = await contract.getVote('condidate 1')
    setcondidate1tVote(value1)
    const value2 = await contract.getVote('condidate 2') 
    setcondidate2Vote(value2)
  }, [voted]);
  return (
    <Layout>
      <VoteForm voted={voted} setVoted={setVoted} />
      <Flex>
        <Result
          voteNumber={condidate1Vote}
          candidateHeading='condidate 1'
        />
        <Result
          voteNumber={condidate2Vote}
          imageAlt='condidate'
          candidateHeading='condidate 2'
        />
      </Flex>
    </Layout>
  );
};

export default App;
