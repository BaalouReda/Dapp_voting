import { Button } from '@chakra-ui/button';
import { FormControl, FormLabel } from '@chakra-ui/form-control';
import { Heading } from '@chakra-ui/layout';
import { Select } from '@chakra-ui/select';
import React, { useState } from 'react';
import { toastSuccess } from '../utils/toastSuccess';
import { toastError } from '../utils/toastError';
import { ethers, Signer } from 'ethers';
import UsElectionVote from '../artifacts/contracts/UsElectionVoteContract.sol/UsElectionVote.json'
const contractAddress = "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract

const addr = signer.getAddress;

const contract = new ethers.Contract(contractAddress, UsElectionVote.abi, signer);

function VoteForm({setVoted, voted }) {
  const [candidate, setCandidate] = useState('');
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (!candidate) {
      console.log('Must select a candidate');
    }
    try {
      setLoading(true);
      await contract.vote(addr,candidate)
      toastSuccess(`${addr} has voted for ${candidate}`);
      setVoted(!voted);
    } catch (e) {
      console.log(e.response.data.error);
      toastError(e.response.data.error);
    }
    setSocialNumber('');
    setLoading(false);
  };
  return (
    <>
      <Heading as='h3' size='lg'>
        Here is the US Election vote, choose your candidate
      </Heading>
      <form onSubmit={onSubmit}>
        <FormControl>
          <FormLabel mt={4}>Choose one</FormLabel>
          <Select
            defaultValue=''
            onChange={(e) => setCandidate(e.target.value)}
          >
            <option value=''></option>
            <option value='Condidte 1'>Condidte 1</option>
            <option value='Condidate 2'>Condidate 2</option>
          </Select>
        </FormControl>
        <Button
          colorScheme='yellow'
          type='submit'
          isLoading={loading}
          mt={4}
          mb={4}
        >
          Vote
        </Button>
      </form>
    </>
  );
};

export { VoteForm };
