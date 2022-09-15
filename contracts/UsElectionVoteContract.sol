// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/access/Ownable.sol";
//this the elections contract: 
contract UsElectionVote is Ownable {
    mapping(string => address[]) candidateVotes;
    mapping(address => bool) alreadyVote;
    uint256 totalVotes;
    event Vote(address voter, string candidate);
//this function has as a perpos storing the results of a vote 
    function vote(address _voter, string calldata _candidate) external {
        require(alreadyVote[_voter] == false, "the voter has already voted");
        require(
            keccak256(abi.encodePacked(_candidate)) ==
                keccak256(abi.encodePacked("condidate 1")) ||
                keccak256(abi.encodePacked(_candidate)) ==
                keccak256(abi.encodePacked("condidate 2")),
            "Invalid Candidate"
        );
        candidateVotes[_candidate].push(_voter);
        alreadyVote[_voter] = true;
        totalVotes++;
        emit Vote(_voter, _candidate);
    }
// the perpos of this function below is to get vote value for a condidate
    function getVote(string calldata _candidate)
        external
        view
        returns (uint256)
    {
        return candidateVotes[_candidate].length;
    }
// the killing function 
    function kill() public onlyOwner {
        selfdestruct(payable(owner()));
    }
}
