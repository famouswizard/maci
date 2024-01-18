"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4911],{1302:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>o});var r=n(5250),t=n(2459);const l={},s="Pairing",a={id:"solidity-docs/crypto/Pairing",title:"Pairing",description:"A library implementing the alt_bn128 elliptic curve operations.",source:"@site/versioned_docs/version-v1.x/solidity-docs/crypto/Pairing.md",sourceDirName:"solidity-docs/crypto",slug:"/solidity-docs/crypto/Pairing",permalink:"/docs/solidity-docs/crypto/Pairing",draft:!1,unlisted:!1,editUrl:"https://github.com/privacy-scaling-explorations/maci/edit/dev/website/versioned_docs/version-v1.x/solidity-docs/crypto/Pairing.md",tags:[],version:"v1.x",frontMatter:{},sidebar:"version-1.x/mySidebar",previous:{title:"MockVerifier",permalink:"/docs/solidity-docs/crypto/MockVerifier"},next:{title:"PoseidonT3",permalink:"/docs/solidity-docs/crypto/PoseidonT3"}},d={},o=[{value:"PRIME_Q",id:"prime_q",level:3},{value:"G1Point",id:"g1point",level:3},{value:"G2Point",id:"g2point",level:3},{value:"PairingAddFailed",id:"pairingaddfailed",level:3},{value:"PairingMulFailed",id:"pairingmulfailed",level:3},{value:"PairingOpcodeFailed",id:"pairingopcodefailed",level:3},{value:"negate",id:"negate",level:3},{value:"plus",id:"plus",level:3},{value:"scalarMul",id:"scalarmul",level:3},{value:"pairing",id:"pairing-1",level:3},{value:"Return Values",id:"return-values",level:4}];function c(i){const e={code:"code",h1:"h1",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...i.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"pairing",children:"Pairing"}),"\n",(0,r.jsx)(e.p,{children:"A library implementing the alt_bn128 elliptic curve operations."}),"\n",(0,r.jsx)(e.h3,{id:"prime_q",children:"PRIME_Q"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-solidity",children:"uint256 PRIME_Q\n"})}),"\n",(0,r.jsx)(e.h3,{id:"g1point",children:"G1Point"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-solidity",children:"struct G1Point {\n  uint256 x;\n  uint256 y;\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"g2point",children:"G2Point"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-solidity",children:"struct G2Point {\n  uint256[2] x;\n  uint256[2] y;\n}\n"})}),"\n",(0,r.jsx)(e.h3,{id:"pairingaddfailed",children:"PairingAddFailed"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-solidity",children:"error PairingAddFailed()\n"})}),"\n",(0,r.jsx)(e.p,{children:"custom errors"}),"\n",(0,r.jsx)(e.h3,{id:"pairingmulfailed",children:"PairingMulFailed"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-solidity",children:"error PairingMulFailed()\n"})}),"\n",(0,r.jsx)(e.h3,{id:"pairingopcodefailed",children:"PairingOpcodeFailed"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-solidity",children:"error PairingOpcodeFailed()\n"})}),"\n",(0,r.jsx)(e.h3,{id:"negate",children:"negate"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-solidity",children:"function negate(struct Pairing.G1Point p) internal pure returns (struct Pairing.G1Point)\n"})}),"\n",(0,r.jsx)(e.p,{children:"The negation of p, i.e. p.plus(p.negate()) should be zero."}),"\n",(0,r.jsx)(e.h3,{id:"plus",children:"plus"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-solidity",children:"function plus(struct Pairing.G1Point p1, struct Pairing.G1Point p2) internal view returns (struct Pairing.G1Point r)\n"})}),"\n",(0,r.jsx)(e.p,{children:"r Returns the sum of two points of G1."}),"\n",(0,r.jsx)(e.h3,{id:"scalarmul",children:"scalarMul"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-solidity",children:"function scalarMul(struct Pairing.G1Point p, uint256 s) internal view returns (struct Pairing.G1Point r)\n"})}),"\n",(0,r.jsx)(e.p,{children:"r Return the product of a point on G1 and a scalar, i.e.\np == p.scalarMul(1) and p.plus(p) == p.scalarMul(2) for all\npoints p."}),"\n",(0,r.jsx)(e.h3,{id:"pairing-1",children:"pairing"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-solidity",children:"function pairing(struct Pairing.G1Point a1, struct Pairing.G2Point a2, struct Pairing.G1Point b1, struct Pairing.G2Point b2, struct Pairing.G1Point c1, struct Pairing.G2Point c2, struct Pairing.G1Point d1, struct Pairing.G2Point d2) internal view returns (bool isValid)\n"})}),"\n",(0,r.jsx)(e.h4,{id:"return-values",children:"Return Values"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"Name"}),(0,r.jsx)(e.th,{children:"Type"}),(0,r.jsx)(e.th,{children:"Description"})]})}),(0,r.jsx)(e.tbody,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"isValid"}),(0,r.jsx)(e.td,{children:"bool"}),(0,r.jsx)(e.td,{children:"The result of computing the pairing check         e(p1[0], p2[0]) *  .... * e(p1[n], p2[n]) == 1        For example,        pairing([P1(), P1().negate()], [P2(), P2()]) should return true."})]})})]})]})}function u(i={}){const{wrapper:e}={...(0,t.a)(),...i.components};return e?(0,r.jsx)(e,{...i,children:(0,r.jsx)(c,{...i})}):c(i)}},2459:(i,e,n)=>{n.d(e,{Z:()=>a,a:()=>s});var r=n(79);const t={},l=r.createContext(t);function s(i){const e=r.useContext(l);return r.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function a(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(t):i.components||t:s(i.components),r.createElement(l.Provider,{value:e},i.children)}}}]);