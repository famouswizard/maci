"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1429],{3853:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var l=r(5250),s=r(2459);const t={},i="AccQueue",d={id:"solidity-docs/trees/AccQueue",title:"AccQueue",description:"This contract defines a Merkle tree where each leaf insertion only updates a",source:"@site/versioned_docs/version-v1.x/solidity-docs/trees/AccQueue.md",sourceDirName:"solidity-docs/trees",slug:"/solidity-docs/trees/AccQueue",permalink:"/docs/solidity-docs/trees/AccQueue",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/trees/AccQueue.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"IVkRegistry",permalink:"/docs/solidity-docs/interfaces/IVkRegistry"},next:{title:"AccQueueBinary",permalink:"/docs/solidity-docs/trees/AccQueueBinary"}},h={},a=[{value:"MAX_DEPTH",id:"max_depth",level:3},{value:"Queue",id:"queue",level:3},{value:"subDepth",id:"subdepth",level:3},{value:"hashLength",id:"hashlength",level:3},{value:"subTreeCapacity",id:"subtreecapacity",level:3},{value:"isBinary",id:"isbinary",level:3},{value:"currentSubtreeIndex",id:"currentsubtreeindex",level:3},{value:"leafQueue",id:"leafqueue",level:3},{value:"subRootQueue",id:"subrootqueue",level:3},{value:"subRoots",id:"subroots",level:3},{value:"mainRoots",id:"mainroots",level:3},{value:"subTreesMerged",id:"subtreesmerged",level:3},{value:"treeMerged",id:"treemerged",level:3},{value:"smallSRTroot",id:"smallsrtroot",level:3},{value:"nextSubRootIndex",id:"nextsubrootindex",level:3},{value:"numLeaves",id:"numleaves",level:3},{value:"SubDepthCannotBeZero",id:"subdepthcannotbezero",level:3},{value:"SubdepthTooLarge",id:"subdepthtoolarge",level:3},{value:"InvalidHashLength",id:"invalidhashlength",level:3},{value:"DepthCannotBeZero",id:"depthcannotbezero",level:3},{value:"SubTreesAlreadyMerged",id:"subtreesalreadymerged",level:3},{value:"NothingToMerge",id:"nothingtomerge",level:3},{value:"SubTreesNotMerged",id:"subtreesnotmerged",level:3},{value:"DepthTooLarge",id:"depthtoolarge",level:3},{value:"DepthTooSmall",id:"depthtoosmall",level:3},{value:"InvalidIndex",id:"invalidindex",level:3},{value:"InvalidLevel",id:"invalidlevel",level:3},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"hashLevel",id:"hashlevel",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Return Values",id:"return-values",level:4},{value:"hashLevelLeaf",id:"hashlevelleaf",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Return Values",id:"return-values-1",level:4},{value:"getZero",id:"getzero",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Return Values",id:"return-values-2",level:4},{value:"enqueue",id:"enqueue",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Return Values",id:"return-values-3",level:4},{value:"_enqueue",id:"_enqueue",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"fill",id:"fill",level:3},{value:"_fill",id:"_fill",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"insertSubTree",id:"insertsubtree",level:3},{value:"calcMinHeight",id:"calcminheight",level:3},{value:"Return Values",id:"return-values-4",level:4},{value:"mergeSubRoots",id:"mergesubroots",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"queueSubRoot",id:"queuesubroot",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"merge",id:"merge",level:3},{value:"Parameters",id:"parameters-9",level:4},{value:"Return Values",id:"return-values-5",level:4},{value:"getSubRoot",id:"getsubroot",level:3},{value:"Parameters",id:"parameters-10",level:4},{value:"Return Values",id:"return-values-6",level:4},{value:"getSmallSRTroot",id:"getsmallsrtroot",level:3},{value:"Return Values",id:"return-values-7",level:4},{value:"getMainRoot",id:"getmainroot",level:3},{value:"Parameters",id:"parameters-11",level:4},{value:"Return Values",id:"return-values-8",level:4},{value:"getSrIndices",id:"getsrindices",level:3}];function c(e){const n={code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"accqueue",children:"AccQueue"}),"\n",(0,l.jsx)(n.p,{children:"This contract defines a Merkle tree where each leaf insertion only updates a\nsubtree. To obtain the main tree root, the contract owner must merge the\nsubtrees together. Merging subtrees requires at least 2 operations:\nmergeSubRoots(), and merge(). To get around the gas limit,\nthe mergeSubRoots() can be performed in multiple transactions."}),"\n",(0,l.jsx)(n.h3,{id:"max_depth",children:"MAX_DEPTH"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"uint256 MAX_DEPTH\n"})}),"\n",(0,l.jsx)(n.h3,{id:"queue",children:"Queue"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"struct Queue {\n  uint256[4][33] levels;\n  uint256[33] indices;\n}\n"})}),"\n",(0,l.jsx)(n.h3,{id:"subdepth",children:"subDepth"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"uint256 subDepth\n"})}),"\n",(0,l.jsx)(n.h3,{id:"hashlength",children:"hashLength"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"uint256 hashLength\n"})}),"\n",(0,l.jsx)(n.h3,{id:"subtreecapacity",children:"subTreeCapacity"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"uint256 subTreeCapacity\n"})}),"\n",(0,l.jsx)(n.h3,{id:"isbinary",children:"isBinary"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"bool isBinary\n"})}),"\n",(0,l.jsx)(n.h3,{id:"currentsubtreeindex",children:"currentSubtreeIndex"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"uint256 currentSubtreeIndex\n"})}),"\n",(0,l.jsx)(n.h3,{id:"leafqueue",children:"leafQueue"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"struct AccQueue.Queue leafQueue\n"})}),"\n",(0,l.jsx)(n.h3,{id:"subrootqueue",children:"subRootQueue"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"struct AccQueue.Queue subRootQueue\n"})}),"\n",(0,l.jsx)(n.h3,{id:"subroots",children:"subRoots"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"mapping(uint256 => uint256) subRoots\n"})}),"\n",(0,l.jsx)(n.h3,{id:"mainroots",children:"mainRoots"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"uint256[33] mainRoots\n"})}),"\n",(0,l.jsx)(n.h3,{id:"subtreesmerged",children:"subTreesMerged"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"bool subTreesMerged\n"})}),"\n",(0,l.jsx)(n.h3,{id:"treemerged",children:"treeMerged"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"bool treeMerged\n"})}),"\n",(0,l.jsx)(n.h3,{id:"smallsrtroot",children:"smallSRTroot"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"uint256 smallSRTroot\n"})}),"\n",(0,l.jsx)(n.h3,{id:"nextsubrootindex",children:"nextSubRootIndex"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"uint256 nextSubRootIndex\n"})}),"\n",(0,l.jsx)(n.h3,{id:"numleaves",children:"numLeaves"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"uint256 numLeaves\n"})}),"\n",(0,l.jsx)(n.h3,{id:"subdepthcannotbezero",children:"SubDepthCannotBeZero"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"error SubDepthCannotBeZero()\n"})}),"\n",(0,l.jsx)(n.p,{children:"custom errors"}),"\n",(0,l.jsx)(n.h3,{id:"subdepthtoolarge",children:"SubdepthTooLarge"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"error SubdepthTooLarge(uint256 _subDepth, uint256 max)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"invalidhashlength",children:"InvalidHashLength"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"error InvalidHashLength()\n"})}),"\n",(0,l.jsx)(n.h3,{id:"depthcannotbezero",children:"DepthCannotBeZero"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"error DepthCannotBeZero()\n"})}),"\n",(0,l.jsx)(n.h3,{id:"subtreesalreadymerged",children:"SubTreesAlreadyMerged"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"error SubTreesAlreadyMerged()\n"})}),"\n",(0,l.jsx)(n.h3,{id:"nothingtomerge",children:"NothingToMerge"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"error NothingToMerge()\n"})}),"\n",(0,l.jsx)(n.h3,{id:"subtreesnotmerged",children:"SubTreesNotMerged"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"error SubTreesNotMerged()\n"})}),"\n",(0,l.jsx)(n.h3,{id:"depthtoolarge",children:"DepthTooLarge"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"error DepthTooLarge(uint256 _depth, uint256 max)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"depthtoosmall",children:"DepthTooSmall"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"error DepthTooSmall(uint256 _depth, uint256 min)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"invalidindex",children:"InvalidIndex"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"error InvalidIndex(uint256 _index)\n"})}),"\n",(0,l.jsx)(n.h3,{id:"invalidlevel",children:"InvalidLevel"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"error InvalidLevel()\n"})}),"\n",(0,l.jsx)(n.h3,{id:"constructor",children:"constructor"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"constructor(uint256 _subDepth, uint256 _hashLength) internal payable\n"})}),"\n",(0,l.jsx)(n.p,{children:"Create a new AccQueue"}),"\n",(0,l.jsx)(n.h4,{id:"parameters",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_subDepth"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The depth of each subtree."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_hashLength"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The number of leaves per node (2 or 5)."})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"hashlevel",children:"hashLevel"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function hashLevel(uint256 _level, uint256 _leaf) internal virtual returns (uint256 _hash)\n"})}),"\n",(0,l.jsx)(n.p,{children:"Hash the contents of the specified level and the specified leaf.\nThis is a virtual function as the hash function which the overriding\ncontract uses will be either hashLeftRight or hash5, which require\ndifferent input array lengths."}),"\n",(0,l.jsx)(n.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_level"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The level to hash."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_leaf"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The leaf include with the level."})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"return-values",children:"Return Values"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_hash"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The hash of the level and leaf."})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"hashlevelleaf",children:"hashLevelLeaf"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function hashLevelLeaf(uint256 _level, uint256 _leaf) public view virtual returns (uint256 _hash)\n"})}),"\n",(0,l.jsx)(n.p,{children:"Hash the contents of the specified level and the specified leaf.\nThis is a virtual function as the hash function which the overriding\ncontract uses will be either hashLeftRight or hash5, which require\ndifferent input array lengths."}),"\n",(0,l.jsx)(n.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_level"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The level to hash."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_leaf"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The leaf include with the level."})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"return-values-1",children:"Return Values"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_hash"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The hash of the level and leaf."})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"getzero",children:"getZero"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function getZero(uint256 _level) internal virtual returns (uint256 zero)\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns the zero leaf at a specified level.\nThis is a virtual function as the hash function which the overriding\ncontract uses will be either hashLeftRight or hash5, which will produce\ndifferent zero values (e.g. hashLeftRight(0, 0) vs\nhash5([0, 0, 0, 0, 0]). Moreover, the zero value may be a\nnothing-up-my-sleeve value."}),"\n",(0,l.jsx)(n.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_level"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The level at which to return the zero leaf."})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"return-values-2",children:"Return Values"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"zero"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The zero leaf at the specified level."})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"enqueue",children:"enqueue"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function enqueue(uint256 _leaf) public returns (uint256 leafIndex)\n"})}),"\n",(0,l.jsx)(n.p,{children:"Add a leaf to the queue for the current subtree."}),"\n",(0,l.jsx)(n.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_leaf"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The leaf to add."})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"return-values-3",children:"Return Values"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"leafIndex"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The index of the leaf in the queue."})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"_enqueue",children:"_enqueue"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function _enqueue(uint256 _leaf, uint256 _level) internal\n"})}),"\n",(0,l.jsx)(n.p,{children:"Updates the queue at a given level and hashes any subroots\nthat need to be hashed."}),"\n",(0,l.jsx)(n.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_leaf"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The leaf to add."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_level"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The level at which to queue the leaf."})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"fill",children:"fill"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function fill() public\n"})}),"\n",(0,l.jsx)(n.p,{children:"Fill any empty leaves of the current subtree with zeros and store the\nresulting subroot."}),"\n",(0,l.jsx)(n.h3,{id:"_fill",children:"_fill"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function _fill(uint256 _level) internal virtual\n"})}),"\n",(0,l.jsx)(n.p,{children:"A function that queues zeros to the specified level, hashes,\nthe level, and enqueues the hash to the next level."}),"\n",(0,l.jsx)(n.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_level"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The level at which to queue zeros."})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"insertsubtree",children:"insertSubTree"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function insertSubTree(uint256 _subRoot) public\n"})}),"\n",(0,l.jsx)(n.p,{children:"Insert a subtree. Used for batch enqueues."}),"\n",(0,l.jsx)(n.h3,{id:"calcminheight",children:"calcMinHeight"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function calcMinHeight() public view returns (uint256 depth)\n"})}),"\n",(0,l.jsx)(n.p,{children:"Calculate the lowest possible height of a tree with\nall the subroots merged together."}),"\n",(0,l.jsx)(n.h4,{id:"return-values-4",children:"Return Values"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"depth"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The lowest possible height of a tree with all the"})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"mergesubroots",children:"mergeSubRoots"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function mergeSubRoots(uint256 _numSrQueueOps) public\n"})}),"\n",(0,l.jsx)(n.p,{children:"Merge all subtrees to form the shortest possible tree.\nThis function can be called either once to merge all subtrees in a\nsingle transaction, or multiple times to do the same in multiple\ntransactions."}),"\n",(0,l.jsx)(n.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_numSrQueueOps"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The number of times this function will call                       queueSubRoot(), up to the maximum number of times                       necessary. If it is set to 0, it will call                       queueSubRoot() as many times as is necessary. Set                       this to a low number and call this function                       multiple times if there are many subroots to                       merge, or a single transaction could run out of                       gas."})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"queuesubroot",children:"queueSubRoot"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function queueSubRoot(uint256 _leaf, uint256 _level, uint256 _maxDepth) internal\n"})}),"\n",(0,l.jsx)(n.p,{children:"Queues a subroot into the subroot tree."}),"\n",(0,l.jsx)(n.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_leaf"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The value to queue."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_level"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The level at which to queue _leaf."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_maxDepth"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The depth of the tree."})]})]})]}),"\n",(0,l.jsx)(n.h3,{id:"merge",children:"merge"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function merge(uint256 _depth) public returns (uint256 root)\n"})}),"\n",(0,l.jsx)(n.p,{children:"Merge all subtrees to form a main tree with a desired depth."}),"\n",(0,l.jsx)(n.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_depth"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The depth of the main tree. It must fit all the leaves or               this function will revert."})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"return-values-5",children:"Return Values"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"root"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The root of the main tree."})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"getsubroot",children:"getSubRoot"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function getSubRoot(uint256 _index) public view returns (uint256 subRoot)\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns the subroot at the specified index. Reverts if the index refers\nto a subtree which has not been filled yet."}),"\n",(0,l.jsx)(n.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_index"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The subroot index."})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"return-values-6",children:"Return Values"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"subRoot"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The subroot at the specified index."})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"getsmallsrtroot",children:"getSmallSRTroot"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function getSmallSRTroot() public view returns (uint256 smallSubTreeRoot)\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns the subroot tree (SRT) root. Its value must first be computed\nusing mergeSubRoots."}),"\n",(0,l.jsx)(n.h4,{id:"return-values-7",children:"Return Values"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"smallSubTreeRoot"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The SRT root."})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"getmainroot",children:"getMainRoot"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function getMainRoot(uint256 _depth) public view returns (uint256 mainRoot)\n"})}),"\n",(0,l.jsx)(n.p,{children:"Return the merged Merkle root of all the leaves at a desired depth."}),"\n",(0,l.jsxs)(n.p,{children:["_merge() or merged(",(0,l.jsx)(n.em,{children:"depth) must be called first."})]}),"\n",(0,l.jsx)(n.h4,{id:"parameters-11",children:"Parameters"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"_depth"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The depth of the main tree. It must first be computed               using mergeSubRoots() and merge()."})]})})]}),"\n",(0,l.jsx)(n.h4,{id:"return-values-8",children:"Return Values"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Name"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsx)(n.tbody,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"mainRoot"}),(0,l.jsx)(n.td,{children:"uint256"}),(0,l.jsx)(n.td,{children:"The root of the main tree."})]})})]}),"\n",(0,l.jsx)(n.h3,{id:"getsrindices",children:"getSrIndices"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-solidity",children:"function getSrIndices() public view returns (uint256 next, uint256 current)\n"})}),"\n",(0,l.jsx)(n.p,{children:"Get the next subroot index and the current subtree index."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},2459:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>i});var l=r(79);const s={},t=l.createContext(s);function i(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);