import { INIT_CODE_HASH } from '../src/constants'
import { keccak256 } from '@ethersproject/solidity'

const bytecode = '60806040526001600c5534801561001557600080fd5b5060405146908060526123518239604080519182900360520182208282018252600a83526948756244616f204c507360b01b6020938401528151808301835260018152603160f81b908401528151808401919091527f477aa6efa71365936221848e863763c15573fcb920eefb89565057260f1c8d52818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101949094523060a0808601919091528151808603909101815260c09094019052825192019190912060035550600580546001600160a01b0319163317905561224c806101056000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a714610534578063d505accf1461053c578063dd62ed3e1461058d578063fff6cae9146105bb576101a9565b8063ba9a7a56146104fe578063bc25cf7714610506578063c45a01551461052c576101a9565b80637ecebe00116100d35780637ecebe001461046557806389afcb441461048b57806395d89b41146104ca578063a9059cbb146104d2576101a9565b80636a6278421461041157806370a08231146104375780637464fc3d1461045d576101a9565b806323b872dd116101665780633644e515116101405780633644e515146103cb578063485cc955146103d35780635909c0d5146104015780635a3d549314610409576101a9565b806323b872dd1461036f57806330adf81f146103a5578063313ce567146103ad576101a9565b8063022c0d9f146101ae57806306fdde031461023c5780630902f1ac146102b9578063095ea7b3146102f15780630dfe16811461033157806318160ddd14610355575b600080fd5b61023a600480360360808110156101c457600080fd5b8135916020810135916001600160a01b0360408301351691908101906080810160608201356401000000008111156101fb57600080fd5b82018360208201111561020d57600080fd5b8035906020019184600183028401116401000000008311171561022f57600080fd5b5090925090506105c3565b005b610244610b0b565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561027e578181015183820152602001610266565b50505050905090810190601f1680156102ab5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c1610b31565b604080516001600160701b03948516815292909316602083015263ffffffff168183015290519081900360600190f35b61031d6004803603604081101561030757600080fd5b506001600160a01b038135169060200135610b5b565b604080519115158252519081900360200190f35b610339610b72565b604080516001600160a01b039092168252519081900360200190f35b61035d610b81565b60408051918252519081900360200190f35b61031d6004803603606081101561038557600080fd5b506001600160a01b03813581169160208101359091169060400135610b87565b61035d610c21565b6103b5610c45565b6040805160ff9092168252519081900360200190f35b61035d610c4a565b61023a600480360360408110156103e957600080fd5b506001600160a01b0381358116916020013516610c50565b61035d610cd1565b61035d610cd7565b61035d6004803603602081101561042757600080fd5b50356001600160a01b0316610cdd565b61035d6004803603602081101561044d57600080fd5b50356001600160a01b0316610fda565b61035d610fec565b61035d6004803603602081101561047b57600080fd5b50356001600160a01b0316610ff2565b6104b1600480360360208110156104a157600080fd5b50356001600160a01b0316611004565b6040805192835260208301919091528051918290030190f35b6102446113a7565b61031d600480360360408110156104e857600080fd5b506001600160a01b0381351690602001356113c9565b61035d6113d6565b61023a6004803603602081101561051c57600080fd5b50356001600160a01b03166113dc565b610339611544565b610339611553565b61023a600480360360e081101561055257600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611562565b61035d600480360360408110156105a357600080fd5b506001600160a01b0381358116916020013516611761565b61023a61177e565b600c5460011461060b576040805162461bcd60e51b815260206004820152600e60248201526d121d5891185bce881313d0d2d15160921b604482015290519081900360640190fd5b6000600c558415158061061e5750600084115b6106595760405162461bcd60e51b815260040180806020018281038252602281526020018061218b6022913960400191505060405180910390fd5b600080610664610b31565b5091509150816001600160701b0316871080156106895750806001600160701b031686105b6106da576040805162461bcd60e51b815260206004820152601e60248201527f48756244616f3a20494e53554646494349454e545f4c49515549444954590000604482015290519081900360640190fd5b60065460075460009182916001600160a01b039182169190811690891682148015906107185750806001600160a01b0316896001600160a01b031614155b61075e576040805162461bcd60e51b815260206004820152601260248201527148756244616f3a20494e56414c49445f544f60701b604482015290519081900360640190fd5b8a1561076f5761076f828a8d6118dd565b891561078057610780818a8c6118dd565b861561083b57886001600160a01b031663fd5cc49d338d8d8c8c6040518663ffffffff1660e01b815260040180866001600160a01b03166001600160a01b03168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b15801561082257600080fd5b505af1158015610836573d6000803e3d6000fd5b505050505b604080516370a0823160e01b815230600482015290516001600160a01b038416916370a08231916024808301926020929190829003018186803b15801561088157600080fd5b505afa158015610895573d6000803e3d6000fd5b505050506040513d60208110156108ab57600080fd5b5051604080516370a0823160e01b815230600482015290519195506001600160a01b038316916370a0823191602480820192602092909190829003018186803b1580156108f757600080fd5b505afa15801561090b573d6000803e3d6000fd5b505050506040513d602081101561092157600080fd5b5051925060009150506001600160701b0385168a90038311610944576000610953565b89856001600160701b03160383035b9050600089856001600160701b031603831161097057600061097f565b89856001600160701b03160383035b905060008211806109905750600081115b6109cb5760405162461bcd60e51b81526004018080602001828103825260218152602001806121f76021913960400191505060405180910390fd5b60006109ff6109e184600263ffffffff611a7716565b6109f3876103e863ffffffff611a7716565b9063ffffffff611ada16565b90506000610a176109e184600263ffffffff611a7716565b9050610a48620f4240610a3c6001600160701b038b8116908b1663ffffffff611a7716565b9063ffffffff611a7716565b610a58838363ffffffff611a7716565b1015610a97576040805162461bcd60e51b815260206004820152600960248201526848756244616f3a204b60b81b604482015290519081900360640190fd5b5050610aa584848888611b2a565b60408051838152602081018390528082018d9052606081018c905290516001600160a01b038b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280600a81526020016948756244616f204c507360b01b81525081565b6008546001600160701b0380821692600160701b830490911691600160e01b900463ffffffff1690565b6000610b68338484611cec565b5060015b92915050565b6006546001600160a01b031681565b60005481565b6001600160a01b038316600090815260026020908152604080832033845290915281205460001914610c0c576001600160a01b0384166000908152600260209081526040808320338452909152902054610be7908363ffffffff611ada16565b6001600160a01b03851660009081526002602090815260408083203384529091529020555b610c17848484611d4e565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60035481565b6005546001600160a01b03163314610ca3576040805162461bcd60e51b8152602060048201526011602482015270243ab12230b79d102327a92124a22222a760791b604482015290519081900360640190fd5b600680546001600160a01b039384166001600160a01b03199182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c54600114610d27576040805162461bcd60e51b815260206004820152600e60248201526d121d5891185bce881313d0d2d15160921b604482015290519081900360640190fd5b6000600c81905580610d37610b31565b50600654604080516370a0823160e01b815230600482015290519395509193506000926001600160a01b03909116916370a08231916024808301926020929190829003018186803b158015610d8b57600080fd5b505afa158015610d9f573d6000803e3d6000fd5b505050506040513d6020811015610db557600080fd5b5051600754604080516370a0823160e01b815230600482015290519293506000926001600160a01b03909216916370a0823191602480820192602092909190829003018186803b158015610e0857600080fd5b505afa158015610e1c573d6000803e3d6000fd5b505050506040513d6020811015610e3257600080fd5b505190506000610e51836001600160701b03871663ffffffff611ada16565b90506000610e6e836001600160701b03871663ffffffff611ada16565b90506000610e7c8787611e08565b60005490915080610eb957610ea56103e86109f3610ea0878763ffffffff611a7716565b611f66565b9850610eb460006103e8611fb8565b610f08565b610f056001600160701b038916610ed6868463ffffffff611a7716565b81610edd57fe5b046001600160701b038916610ef8868563ffffffff611a7716565b81610eff57fe5b0461204e565b98505b60008911610f475760405162461bcd60e51b81526004018080602001828103825260258152602001806121d26025913960400191505060405180910390fd5b610f518a8a611fb8565b610f5d86868a8a611b2a565b8115610f8d57600854610f89906001600160701b0380821691600160701b90041663ffffffff611a7716565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60016020526000908152604090205481565b600b5481565b60046020526000908152604090205481565b600080600c5460011461104f576040805162461bcd60e51b815260206004820152600e60248201526d121d5891185bce881313d0d2d15160921b604482015290519081900360640190fd5b6000600c8190558061105f610b31565b50600654600754604080516370a0823160e01b815230600482015290519496509294506001600160a01b039182169391169160009184916370a08231916024808301926020929190829003018186803b1580156110bb57600080fd5b505afa1580156110cf573d6000803e3d6000fd5b505050506040513d60208110156110e557600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b038516916370a08231916024808301926020929190829003018186803b15801561113357600080fd5b505afa158015611147573d6000803e3d6000fd5b505050506040513d602081101561115d57600080fd5b50513060009081526001602052604081205491925061117c8888611e08565b60005490915080611193848763ffffffff611a7716565b8161119a57fe5b049a50806111ae848663ffffffff611a7716565b816111b557fe5b04995060008b1180156111c8575060008a115b6112035760405162461bcd60e51b81526004018080602001828103825260258152602001806121ad6025913960400191505060405180910390fd5b61120d3084612066565b611218878d8d6118dd565b611223868d8c6118dd565b604080516370a0823160e01b815230600482015290516001600160a01b038916916370a08231916024808301926020929190829003018186803b15801561126957600080fd5b505afa15801561127d573d6000803e3d6000fd5b505050506040513d602081101561129357600080fd5b5051604080516370a0823160e01b815230600482015290519196506001600160a01b038816916370a0823191602480820192602092909190829003018186803b1580156112df57600080fd5b505afa1580156112f3573d6000803e3d6000fd5b505050506040513d602081101561130957600080fd5b5051935061131985858b8b611b2a565b811561134957600854611345906001600160701b0380821691600160701b90041663ffffffff611a7716565b600b555b604080518c8152602081018c905281516001600160a01b038f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b6040518060400160405280600681526020016504875622d4c560d41b81525081565b6000610b68338484611d4e565b6103e881565b600c54600114611424576040805162461bcd60e51b815260206004820152600e60248201526d121d5891185bce881313d0d2d15160921b604482015290519081900360640190fd5b6000600c55600654600754600854604080516370a0823160e01b815230600482015290516001600160a01b0394851694909316926114d392859287926114ce926001600160701b03169185916370a0823191602480820192602092909190829003018186803b15801561149657600080fd5b505afa1580156114aa573d6000803e3d6000fd5b505050506040513d60208110156114c057600080fd5b50519063ffffffff611ada16565b6118dd565b600854604080516370a0823160e01b8152306004820152905161153a92849287926114ce92600160701b90046001600160701b0316916001600160a01b038616916370a0823191602480820192602092909190829003018186803b15801561149657600080fd5b50506001600c5550565b6005546001600160a01b031681565b6007546001600160a01b031681565b428410156115a9576040805162461bcd60e51b815260206004820152600f60248201526e121d5891185bce8811561412549151608a1b604482015290519081900360640190fd5b6003546001600160a01b0380891660008181526004602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e08501825280519083012061190160f01b6101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e280820193601f1981019281900390910190855afa1580156116c4573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158015906116fa5750886001600160a01b0316816001600160a01b0316145b61174b576040805162461bcd60e51b815260206004820152601960248201527f48756244616f3a20494e56414c49445f5349474e415455524500000000000000604482015290519081900360640190fd5b611756898989611cec565b505050505050505050565b600260209081526000928352604080842090915290825290205481565b600c546001146117c6576040805162461bcd60e51b815260206004820152600e60248201526d121d5891185bce881313d0d2d15160921b604482015290519081900360640190fd5b6000600c55600654604080516370a0823160e01b815230600482015290516118d6926001600160a01b0316916370a08231916024808301926020929190829003018186803b15801561181757600080fd5b505afa15801561182b573d6000803e3d6000fd5b505050506040513d602081101561184157600080fd5b5051600754604080516370a0823160e01b815230600482015290516001600160a01b03909216916370a0823191602480820192602092909190829003018186803b15801561188e57600080fd5b505afa1580156118a2573d6000803e3d6000fd5b505050506040513d60208110156118b857600080fd5b50516008546001600160701b0380821691600160701b900416611b2a565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e74323536290000000000000060209182015281516001600160a01b0385811660248301526044808301869052845180840390910181526064909201845291810180516001600160e01b031663a9059cbb60e01b1781529251815160009460609489169392918291908083835b6020831061198a5780518252601f19909201916020918201910161196b565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146119ec576040519150601f19603f3d011682016040523d82523d6000602084013e6119f1565b606091505b5091509150818015611a1f575080511580611a1f5750808060200190516020811015611a1c57600080fd5b50515b611a70576040805162461bcd60e51b815260206004820152601760248201527f48756244616f3a205452414e534645525f4641494c4544000000000000000000604482015290519081900360640190fd5b5050505050565b6000811580611a9257505080820282828281611a8f57fe5b04145b610b6c576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6d756c2d6f766572666c6f7760601b604482015290519081900360640190fd5b80820382811115610b6c576040805162461bcd60e51b815260206004820152601560248201527464732d6d6174682d7375622d756e646572666c6f7760581b604482015290519081900360640190fd5b6001600160701b038411801590611b4857506001600160701b038311155b611b8c576040805162461bcd60e51b815260206004820152601060248201526f48756244616f3a204f564552464c4f5760801b604482015290519081900360640190fd5b60085463ffffffff42811691600160e01b90048116820390811615801590611bbc57506001600160701b03841615155b8015611bd057506001600160701b03831615155b15611c41578063ffffffff16611bfe85611be986612104565b6001600160e01b03169063ffffffff61211616565b600980546001600160e01b03929092169290920201905563ffffffff8116611c2984611be987612104565b600a80546001600160e01b0392909216929092020190555b600880546dffffffffffffffffffffffffffff19166001600160701b03888116919091176dffffffffffffffffffffffffffff60701b1916600160701b8883168102919091176001600160e01b0316600160e01b63ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b6001600160a01b03808416600081815260026020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316600090815260016020526040902054611d77908263ffffffff611ada16565b6001600160a01b038085166000908152600160205260408082209390935590841681522054611dac908263ffffffff61213b16565b6001600160a01b0380841660008181526001602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a90046001600160a01b03166001600160a01b031663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015611e5957600080fd5b505afa158015611e6d573d6000803e3d6000fd5b505050506040513d6020811015611e8357600080fd5b5051600b546001600160a01b038216158015945091925090611f52578015611f4d576000611ec6610ea06001600160701b0388811690881663ffffffff611a7716565b90506000611ed383611f66565b905080821115611f4a576000611f01611ef2848463ffffffff611ada16565b6000549063ffffffff611a7716565b90506000611f2683611f1a86600363ffffffff611a7716565b9063ffffffff61213b16565b90506000818381611f3357fe5b0490508015611f4657611f468782611fb8565b5050505b50505b611f5e565b8015611f5e576000600b555b505092915050565b60006003821115611fa9575080600160028204015b81811015611fa357809150600281828581611f9257fe5b040181611f9b57fe5b049050611f7b565b50611fb3565b8115611fb3575060015b919050565b600054611fcb908263ffffffff61213b16565b60009081556001600160a01b038316815260016020526040902054611ff6908263ffffffff61213b16565b6001600160a01b03831660008181526001602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b600081831061205d578161205f565b825b9392505050565b6001600160a01b03821660009081526001602052604090205461208f908263ffffffff611ada16565b6001600160a01b038316600090815260016020526040812091909155546120bc908263ffffffff611ada16565b60009081556040805183815290516001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef919081900360200190a35050565b6001600160701b0316600160701b0290565b60006001600160701b0382166001600160e01b0384168161213357fe5b049392505050565b80820182811015610b6c576040805162461bcd60e51b815260206004820152601460248201527364732d6d6174682d6164642d6f766572666c6f7760601b604482015290519081900360640190fdfe48756244616f3a20494e53554646494349454e545f4f55545055545f414d4f554e5448756244616f3a20494e53554646494349454e545f4c49515549444954595f4255524e454448756244616f3a20494e53554646494349454e545f4c49515549444954595f4d494e54454448756244616f3a20494e53554646494349454e545f494e5055545f414d4f554e54a265627a7a72315820c4d377e8f38058228d852d67b176bd2cf8b93533ccc3d23102881faff199e21364736f6c63430005100032454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429'


// this _could_ go in constants, except that it would cost every consumer of the sdk the CPU to compute the hash
// and load the JSON.
const COMPUTED_INIT_CODE_HASH = keccak256(['bytes'], [`0x${bytecode}`])

describe('constants', () => {
  describe('INIT_CODE_HASH', () => {
    it('matches computed bytecode hash', () => {
      expect(COMPUTED_INIT_CODE_HASH).toEqual(INIT_CODE_HASH)
    })
  })
})
