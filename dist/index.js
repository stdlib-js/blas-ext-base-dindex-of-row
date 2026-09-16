"use strict";var j=function(u,a){return function(){try{return a||u((a={exports:{}}).exports,a),a.exports}catch(v){throw (a=0, v)}};};var O=j(function(L,h){
var z=require('@stdlib/ndarray-base-assert-is-row-major/dist');function B(u,a,v,s,n,R,x,y,w,f,q,o){var m,c,e,g,l,i,d,r,t;if(u<=0||a<=0)return-1;if(z([s,n])){for(e=a,g=u,t=0;t<g;t++){for(l=R+t*s,d=w,r=0;r<e&&v[l]===x[d];r++)l+=n,d+=y;if(r===e)return t}return-1}for(e=u,g=a,m=s,c=n-e*s,i=o,r=0;r<e;r++)f[i]=1,i+=q;for(l=R,d=w,t=0;t<g;t++){for(i=o,r=0;r<e;r++)v[l]!==x[d]&&(f[i]=0),l+=m,i+=q;l+=c,d+=y}for(i=o,r=0;r<e&&f[i]!==1;r++)i+=q;return r===e?-1:r}h.exports=B
});var S=j(function(M,F){
var C=require('@stdlib/blas-base-layout-resolve-str/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),p=require('@stdlib/strided-base-stride2offset/dist'),H=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),I=O();function J(u,a,v,s,n,R,x,y,w){var f,q,o,m;if(m=C(u),m===null)throw new TypeError(E('2f5Fx',u));if(G(m)?(o=v,f=n,q=1):(o=a,f=1,q=n),n<H(1,o))throw new RangeError(E('2f5IR',o,n));return I(a,v,s,f,q,0,R,x,p(v,x),y,w,p(a,w))}F.exports=J
});var T=j(function(D,_){
var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),P=O();K(V,"ndarray",P);_.exports=V
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=T(),b,k=U(Q(__dirname,"./native.js"));Y(k)?b=Z:b=k;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
