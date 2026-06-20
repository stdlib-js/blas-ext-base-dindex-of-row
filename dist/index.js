"use strict";var g=function(e,a){return function(){try{return a||e((a={exports:{}}).exports,a),a.exports}catch(n){throw (a=0, n)}};};var j=g(function(L,h){
var k=require('@stdlib/ndarray-base-assert-is-row-major/dist');function z(e,a,n,m,v,w,x,R,d,f,q,o){var b,c,i,y,s,u,l,r,t;if(e<=0||a<=0)return-1;if(k([m,v])){for(i=a,y=e,t=0;t<y;t++){for(s=w+t*m,l=d,r=0;r<i&&n[s]===x[l];r++)s+=v,l+=R;if(r===i)return t}return-1}for(i=e,y=a,b=m,c=v-i*m,u=o,r=0;r<i;r++)f[u]=1,u+=q;for(s=w,l=d,t=0;t<y;t++){for(u=o,r=0;r<i;r++)n[s]!==x[l]&&(f[u]=0),s+=b,u+=q;s+=c,l+=R}for(u=o,r=0;r<i&&f[u]!==1;r++)u+=q;return r===i?-1:r}h.exports=z
});var S=g(function(D,F){
var B=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),H=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),p=require('@stdlib/strided-base-stride2offset/dist'),I=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),J=j();function K(e,a,n,m,v,w,x,R,d){var f,q,o;if(!B(e))throw new TypeError(E('2f5Fx',e));if(G(e)?o=n:o=a,v<I(1,o))throw new RangeError(E('2f5IR',o,v));return H(e)?(f=1,q=v):(f=v,q=1),J(a,n,m,f,q,0,w,x,p(n,x),R,d,p(a,d))}F.exports=K
});var C=g(function(X,_){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),Q=j();P(V,"ndarray",Q);_.exports=V
});var U=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=require('@stdlib/assert-is-error/dist'),$=C(),O,T=Y(U(__dirname,"./native.js"));Z(T)?O=$:O=T;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
