// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/access/Ownable.sol";
// voter smart contract
contract Voter is Ownable {
    mapping(string => address) voters;
    event RegisterVoter(address voter, string socialNumber);
// the minting function
    function _minting(address _voter) private {
        address payable voter = payable(_voter);
        voter.transfer(msg.value);
    }
// add a voter into the system (blockchain) with a value of his vote
    function registerVoter(address _voter, string calldata _socialNumber)
        external
        payable
        onlyOwner
    {
        require(
            voters[_socialNumber] == address(0x000),
            "The voter is already registered"
        );
        voters[_socialNumber] = _voter;
        _minting(_voter);
        emit RegisterVoter(_voter, _socialNumber);
    }
//kill function
    function kill() public onlyOwner {
        selfdestruct(payable(owner()));
    }
}
