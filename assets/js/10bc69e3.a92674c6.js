"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7106],{2373:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(5250),t=n(720);const i={title:"MACI key change",description:"How key change messages work",sidebar_label:"Key change",sidebar_position:18},r="MACI Key Change",c={id:"key-change",title:"MACI key change",description:"How key change messages work",source:"@site/versioned_docs/version-v1.x/key-change.md",sourceDirName:".",slug:"/key-change",permalink:"/docs/key-change",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/key-change.md",tags:[],version:"v1.x",sidebarPosition:18,frontMatter:{title:"MACI key change",description:"How key change messages work",sidebar_label:"Key change",sidebar_position:18},sidebar:"version-1.x/mySidebar",previous:{title:"Specification",permalink:"/docs/spec"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},o={},l=[{value:"How MACI messages are processed",id:"how-maci-messages-are-processed",level:2},{value:"Why are messages processed in reverse order?",id:"why-are-messages-processed-in-reverse-order",level:2},{value:"Then how can a voter change their key and submit a new vote?",id:"then-how-can-a-voter-change-their-key-and-submit-a-new-vote",level:2}];function h(e){const s={a:"a",admonition:"admonition",annotation:"annotation",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mrow:"mrow",ol:"ol",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h1,{id:"maci-key-change",children:"MACI Key Change"}),"\n",(0,a.jsx)(s.p,{children:"MACI's voters are identified by their MACI public key. Together with their private key, they can sign and submit messages to live Polls."}),"\n",(0,a.jsx)(s.p,{children:"As MACI's main property is to provide collusion resistance in digital voting applications, it is important to have a mechanism for a user to change their voting key, should this become compromised, or they wish to revoke past actions."}),"\n",(0,a.jsx)(s.h2,{id:"how-maci-messages-are-processed",children:"How MACI messages are processed"}),"\n",(0,a.jsx)(s.p,{children:"In order to understand how key changing currently works in MACI, we need to understand how messages are processed."}),"\n",(0,a.jsx)(s.p,{children:"After a poll ends, the coordinator processes messages off chain in reverse order. To improve efficiency, messages are processed in batches, and correctness is proved for each batch using a zk-SNARK circuit."}),"\n",(0,a.jsx)(s.p,{children:"Due to messages being processed in reverse order, key change messages would work a bit differently than if they were processed in the same order as they were submitted."}),"\n",(0,a.jsx)(s.h2,{id:"why-are-messages-processed-in-reverse-order",children:"Why are messages processed in reverse order?"}),"\n",(0,a.jsx)(s.p,{children:"Reverse processing was introduced to prevent a type of attack where a briber would collude with a voter to sign up, and then submit a message to change their key to a key that the briber controls. This way the briber would have assurance that they could submit the vote they want."}),"\n",(0,a.jsx)(s.p,{children:"Let's take as an example the following:"}),"\n",(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["Alice signs up with pub key ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"b"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"pub1"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})})]})]}),"\n",(0,a.jsxs)(s.li,{children:["Bob (Briber) bribes Alice and asks her to submit a key change message to ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"b"}),(0,a.jsx)(s.mn,{children:"2"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"pub2"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,a.jsx)(s.span,{className:"mord",children:"2"})]})})]})," (owned by Bob)"]}),"\n",(0,a.jsxs)(s.li,{children:["Bob submits a vote with ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"b"}),(0,a.jsx)(s.mn,{children:"2"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"pub2"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,a.jsx)(s.span,{className:"mord",children:"2"})]})})]})]}),"\n",(0,a.jsxs)(s.li,{children:["Alice submits a vote with ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"b"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"pub1"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})})]})]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["If messages were processed in the same order as they were submitted, Alice's vote would not be valid, due to it being signed with a private key ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"v"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"priv1"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.854em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"v"}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})})]})," - which now would not be valid."]}),"\n",(0,a.jsxs)(s.p,{children:["On the other hand, due to messages being processed in reverse order, Alice's last message would be counted as valid as the key change would have not been processed yet. Then, Bob's vote would not be counted as valid as the current key for Alice would be ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"u"}),(0,a.jsx)(s.mi,{children:"b"}),(0,a.jsx)(s.mn,{children:"1"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"pub1"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"u"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,a.jsx)(s.span,{className:"mord",children:"1"})]})})]}),"."]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"Note that a key change message should have the nonce set to 1 in order for it to be valid. We'll see it a code example in the next sections."}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"then-how-can-a-voter-change-their-key-and-submit-a-new-vote",children:"Then how can a voter change their key and submit a new vote?"}),"\n",(0,a.jsx)(s.p,{children:"A user, can submit a key change message, by simply sending a new message signed with their signup key, and setting the nonce to 1. This is because the code checks that the first message to be processed has the nonce set to 1."}),"\n",(0,a.jsx)(s.p,{children:"Let's take a look into a code example:"}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"We have two users, and three keypairs"}),"\n"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Create three keypairs"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"const user1Keypair = new Keypair();\nconst user2Keypair = new Keypair();\nconst secondKeyPair = new Keypair();\n"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Votes will be"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"// user1 votes for project 0\nconst user1VoteOptionIndex = BigInt(0);\n// user2 votes for project 1\nconst user2VoteOptionIndex = BigInt(1);\n// user1 votes 9 for the first vote\nconst user1VoteWeight = BigInt(9);\n// user2 votes 3\nconst user2VoteWeight = BigInt(3);\n// user1 will change their vote to 5\nconst user1NewVoteWeight = BigInt(5);\n"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"What do we expect as result"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"project 0 = 5 * 5 -> 25\nproject 1 = 3 * 3 -> 9\n"})}),"\n",(0,a.jsx)(s.p,{children:"As seen above, we expect the first vote weight 9 to not be counted, but instead the second vote weight 5 to be counted."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Deploy a MaciState locally and sign up"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"const maciState: MaciState = new MaciState(STATE_TREE_DEPTH);\n// Sign up\nuser1StateIndex = maciState.signUp(user1Keypair.pubKey, voiceCreditBalance, BigInt(Math.floor(Date.now() / 1000)));\nuser2StateIndex = maciState.signUp(user2Keypair.pubKey, voiceCreditBalance, BigInt(Math.floor(Date.now() / 1000)));\n// deploy a poll\npollId = maciState.deployPoll(\n  duration,\n  BigInt(Math.floor(Date.now() / 1000) + duration),\n  maxValues,\n  treeDepths,\n  messageBatchSize,\n  coordinatorKeypair,\n);\n"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"User1 and user2 submit their first votes"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"const poll = maciState.polls[pollId];\nconst command1 = new PCommand(\n  BigInt(user1StateIndex),\n  user1Keypair.pubKey,\n  user1VoteOptionIndex,\n  user1VoteWeight,\n  BigInt(1),\n  BigInt(pollId),\n);\n\nconst signature1 = command1.sign(user1Keypair.privKey);\n\nconst ecdhKeypair1 = new Keypair();\nconst sharedKey1 = Keypair.genEcdhSharedKey(ecdhKeypair1.privKey, coordinatorKeypair.pubKey);\n\nconst message1 = command1.encrypt(signature1, sharedKey1);\npoll.publishMessage(message1, ecdhKeypair1.pubKey);\n\nconst command2 = new PCommand(\n  BigInt(user2StateIndex),\n  user2Keypair.pubKey,\n  user2VoteOptionIndex,\n  user2VoteWeight,\n  BigInt(1),\n  BigInt(pollId),\n);\n\nconst signature2 = command2.sign(user2Keypair.privKey);\n\nconst ecdhKeypair2 = new Keypair();\nconst sharedKey2 = Keypair.genEcdhSharedKey(ecdhKeypair2.privKey, coordinatorKeypair.pubKey);\n\nconst message2 = command2.encrypt(signature2, sharedKey2);\npoll.publishMessage(message2, ecdhKeypair2.pubKey);\n"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"User1 submits a key change message with the new vote"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"const poll = maciState.polls[pollId];\nconst command = new PCommand(\n  BigInt(user1StateIndex),\n  secondKeyPair.pubKey,\n  user1VoteOptionIndex,\n  user1NewVoteWeight,\n  BigInt(1),\n  BigInt(pollId),\n);\n\nconst signature = command.sign(user1Keypair.privKey);\n\nconst ecdhKeypair = new Keypair();\nconst sharedKey = Keypair.genEcdhSharedKey(ecdhKeypair.privKey, coordinatorKeypair.pubKey);\n\nconst message = command.encrypt(signature, sharedKey);\npoll.publishMessage(message, ecdhKeypair.pubKey);\n"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["We process the votes and check that the result is as expected (",(0,a.jsx)(s.code,{children:"user1NewVoteWeight"})," was 5 and ",(0,a.jsx)(s.code,{children:"user2VoteWeight"})," 3)"]}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"const poll = maciState.polls[pollId];\npoll.processMessages(pollId);\npoll.tallyVotes();\nexpect(poll.perVOSpentVoiceCredits[0].toString()).to.eq((user1NewVoteWeight * user1NewVoteWeight).toString());\nexpect(poll.perVOSpentVoiceCredits[1].toString()).to.eq((user2VoteWeight * user2VoteWeight).toString());\n"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Finally confirm that the keypair was changed for the user1"}),"\n"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ts",children:"const poll = maciState.polls[pollId];\nconst stateLeaf1 = poll.stateLeaves[user1StateIndex];\nconst stateLeaf2 = poll.stateLeaves[user2StateIndex];\nexpect(stateLeaf1.pubKey.equals(user1SecondKeypair.pubKey)).to.eq(true);\nexpect(stateLeaf2.pubKey.equals(user2Keypair.pubKey)).to.eq(true);\n"})}),"\n",(0,a.jsx)(s.p,{children:"We see that is important that we set the final message (the one with the new vote) with nonce 1, as this vote would be counted as the first vote."}),"\n",(0,a.jsx)(s.admonition,{type:"info",children:(0,a.jsxs)(s.p,{children:["Tests related to key changes have been added to the ",(0,a.jsx)(s.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/dev/core/ts/__tests__/",children:"core package"})," and to the ",(0,a.jsx)(s.a,{href:"https://github.com/privacy-scaling-explorations/maci/blob/dev/cli/tests/",children:"cli package"}),"."]})})]})}function d(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},720:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>r});var a=n(79);const t={},i=a.createContext(t);function r(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);