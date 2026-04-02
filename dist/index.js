"use strict";var g=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var j=g(function(L,h){
var k=require('@stdlib/ndarray-base-assert-is-row-major/dist');function z(e,a,s,m,n,w,x,R,d,t,f,v){var b,c,i,y,q,u,l,r,o;if(e<=0||a<=0)return-1;if(k([m,n])){for(i=a,y=e,o=0;o<y;o++){for(q=w+o*m,l=d,r=0;r<i&&s[q]===x[l];r++)q+=n,l+=R;if(r===i)return o}return-1}for(i=e,y=a,b=m,c=n-i*m,u=v,r=0;r<i;r++)t[u]=1,u+=f;for(q=w,l=d,o=0;o<y;o++){for(u=v,r=0;r<i;r++)s[q]!==x[l]&&(t[u]=0),q+=b,u+=f;q+=c,l+=R}for(u=v,r=0;r<i&&t[u]!==1;r++)u+=f;return r===i?-1:r}h.exports=z
});var S=g(function(D,F){
var B=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),H=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),p=require('@stdlib/strided-base-stride2offset/dist'),I=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),J=j();function K(e,a,s,m,n,w,x,R,d){var t,f,v;if(!B(e))throw new TypeError(E('nullFx',e));if(G(e)?v=s:v=a,n<I(1,v))throw new RangeError(E('nullIR',v,n));return H(e)?(t=1,f=n):(t=n,f=1),J(a,s,m,t,f,0,w,x,p(s,x),R,d,p(a,d))}F.exports=K
});var C=g(function(X,_){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),Q=j();P(V,"ndarray",Q);_.exports=V
});var U=require("path").join,Y=require('@stdlib/utils-try-require/dist'),Z=require('@stdlib/assert-is-error/dist'),$=C(),O,T=Y(U(__dirname,"./native.js"));Z(T)?O=$:O=T;module.exports=O;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
