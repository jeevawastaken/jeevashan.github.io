var ax=Object.defineProperty,cx=Object.defineProperties;var lx=Object.getOwnPropertyDescriptors;var Mp=Object.getOwnPropertySymbols;var ux=Object.prototype.hasOwnProperty,dx=Object.prototype.propertyIsEnumerable;var bp=(n,e,t)=>e in n?ax(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t,fe=(n,e)=>{for(var t in e||={})ux.call(e,t)&&bp(n,t,e[t]);if(Mp)for(var t of Mp(e))dx.call(e,t)&&bp(n,t,e[t]);return n},xt=(n,e)=>cx(n,lx(e));var Yl=(n,e,t)=>new Promise((i,r)=>{var s=c=>{try{a(t.next(c))}catch(l){r(l)}},o=c=>{try{a(t.throw(c))}catch(l){r(l)}},a=c=>c.done?i(c.value):Promise.resolve(c.value).then(s,o);a((t=t.apply(n,e)).next())});var wp=null;var Zl=1,Sp=Symbol("SIGNAL");function lt(n){let e=wp;return wp=n,e}var Ep={version:0,lastCleanEpoch:0,dirty:!1,producerNode:void 0,producerLastReadVersion:void 0,producerIndexOfThis:void 0,nextProducerIndex:0,liveConsumerNode:void 0,liveConsumerIndexOfThis:void 0,consumerAllowSignalWrites:!1,consumerIsAlwaysLive:!1,producerMustRecompute:()=>!1,producerRecomputeValue:()=>{},consumerMarkedDirty:()=>{},consumerOnSignalRead:()=>{}};function hx(n){if(!(Ql(n)&&!n.dirty)&&!(!n.dirty&&n.lastCleanEpoch===Zl)){if(!n.producerMustRecompute(n)&&!Jl(n)){n.dirty=!1,n.lastCleanEpoch=Zl;return}n.producerRecomputeValue(n),n.dirty=!1,n.lastCleanEpoch=Zl}}function Tp(n){return n&&(n.nextProducerIndex=0),lt(n)}function Cp(n,e){if(lt(e),!(!n||n.producerNode===void 0||n.producerIndexOfThis===void 0||n.producerLastReadVersion===void 0)){if(Ql(n))for(let t=n.nextProducerIndex;t<n.producerNode.length;t++)Kl(n.producerNode[t],n.producerIndexOfThis[t]);for(;n.producerNode.length>n.nextProducerIndex;)n.producerNode.pop(),n.producerLastReadVersion.pop(),n.producerIndexOfThis.pop()}}function Jl(n){fa(n);for(let e=0;e<n.producerNode.length;e++){let t=n.producerNode[e],i=n.producerLastReadVersion[e];if(i!==t.version||(hx(t),i!==t.version))return!0}return!1}function Ap(n){if(fa(n),Ql(n))for(let e=0;e<n.producerNode.length;e++)Kl(n.producerNode[e],n.producerIndexOfThis[e]);n.producerNode.length=n.producerLastReadVersion.length=n.producerIndexOfThis.length=0,n.liveConsumerNode&&(n.liveConsumerNode.length=n.liveConsumerIndexOfThis.length=0)}function Kl(n,e){if(fx(n),fa(n),n.liveConsumerNode.length===1)for(let i=0;i<n.producerNode.length;i++)Kl(n.producerNode[i],n.producerIndexOfThis[i]);let t=n.liveConsumerNode.length-1;if(n.liveConsumerNode[e]=n.liveConsumerNode[t],n.liveConsumerIndexOfThis[e]=n.liveConsumerIndexOfThis[t],n.liveConsumerNode.length--,n.liveConsumerIndexOfThis.length--,e<n.liveConsumerNode.length){let i=n.liveConsumerIndexOfThis[e],r=n.liveConsumerNode[e];fa(r),r.producerIndexOfThis[i]=e}}function Ql(n){return n.consumerIsAlwaysLive||(n?.liveConsumerNode?.length??0)>0}function fa(n){n.producerNode??=[],n.producerIndexOfThis??=[],n.producerLastReadVersion??=[]}function fx(n){n.liveConsumerNode??=[],n.liveConsumerIndexOfThis??=[]}function px(){throw new Error}var mx=px;function Dp(n){mx=n}function Ie(n){return typeof n=="function"}function Vr(n){let t=n(i=>{Error.call(i),i.stack=new Error().stack});return t.prototype=Object.create(Error.prototype),t.prototype.constructor=t,t}var pa=Vr(n=>function(t){n(this),this.message=t?`${t.length} errors occurred during unsubscription:
${t.map((i,r)=>`${r+1}) ${i.toString()}`).join(`
  `)}`:"",this.name="UnsubscriptionError",this.errors=t});function no(n,e){if(n){let t=n.indexOf(e);0<=t&&n.splice(t,1)}}var Ct=class n{constructor(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let e;if(!this.closed){this.closed=!0;let{_parentage:t}=this;if(t)if(this._parentage=null,Array.isArray(t))for(let s of t)s.remove(this);else t.remove(this);let{initialTeardown:i}=this;if(Ie(i))try{i()}catch(s){e=s instanceof pa?s.errors:[s]}let{_finalizers:r}=this;if(r){this._finalizers=null;for(let s of r)try{Ip(s)}catch(o){e=e??[],o instanceof pa?e=[...e,...o.errors]:e.push(o)}}if(e)throw new pa(e)}}add(e){var t;if(e&&e!==this)if(this.closed)Ip(e);else{if(e instanceof n){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(t=this._finalizers)!==null&&t!==void 0?t:[]).push(e)}}_hasParent(e){let{_parentage:t}=this;return t===e||Array.isArray(t)&&t.includes(e)}_addParent(e){let{_parentage:t}=this;this._parentage=Array.isArray(t)?(t.push(e),t):t?[t,e]:e}_removeParent(e){let{_parentage:t}=this;t===e?this._parentage=null:Array.isArray(t)&&no(t,e)}remove(e){let{_finalizers:t}=this;t&&no(t,e),e instanceof n&&e._removeParent(this)}};Ct.EMPTY=(()=>{let n=new Ct;return n.closed=!0,n})();var eu=Ct.EMPTY;function ma(n){return n instanceof Ct||n&&"closed"in n&&Ie(n.remove)&&Ie(n.add)&&Ie(n.unsubscribe)}function Ip(n){Ie(n)?n():n.unsubscribe()}var Cn={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var zr={setTimeout(n,e,...t){let{delegate:i}=zr;return i?.setTimeout?i.setTimeout(n,e,...t):setTimeout(n,e,...t)},clearTimeout(n){let{delegate:e}=zr;return(e?.clearTimeout||clearTimeout)(n)},delegate:void 0};function ga(n){zr.setTimeout(()=>{let{onUnhandledError:e}=Cn;if(e)e(n);else throw n})}function io(){}var Rp=tu("C",void 0,void 0);function Np(n){return tu("E",void 0,n)}function Pp(n){return tu("N",n,void 0)}function tu(n,e,t){return{kind:n,value:e,error:t}}var sr=null;function Hr(n){if(Cn.useDeprecatedSynchronousErrorHandling){let e=!sr;if(e&&(sr={errorThrown:!1,error:null}),n(),e){let{errorThrown:t,error:i}=sr;if(sr=null,t)throw i}}else n()}function Lp(n){Cn.useDeprecatedSynchronousErrorHandling&&sr&&(sr.errorThrown=!0,sr.error=n)}var or=class extends Ct{constructor(e){super(),this.isStopped=!1,e?(this.destination=e,ma(e)&&e.add(this)):this.destination=yx}static create(e,t,i){return new Gr(e,t,i)}next(e){this.isStopped?iu(Pp(e),this):this._next(e)}error(e){this.isStopped?iu(Np(e),this):(this.isStopped=!0,this._error(e))}complete(){this.isStopped?iu(Rp,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(e){this.destination.next(e)}_error(e){try{this.destination.error(e)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}},gx=Function.prototype.bind;function nu(n,e){return gx.call(n,e)}var ru=class{constructor(e){this.partialObserver=e}next(e){let{partialObserver:t}=this;if(t.next)try{t.next(e)}catch(i){va(i)}}error(e){let{partialObserver:t}=this;if(t.error)try{t.error(e)}catch(i){va(i)}else va(e)}complete(){let{partialObserver:e}=this;if(e.complete)try{e.complete()}catch(t){va(t)}}},Gr=class extends or{constructor(e,t,i){super();let r;if(Ie(e)||!e)r={next:e??void 0,error:t??void 0,complete:i??void 0};else{let s;this&&Cn.useDeprecatedNextContext?(s=Object.create(e),s.unsubscribe=()=>this.unsubscribe(),r={next:e.next&&nu(e.next,s),error:e.error&&nu(e.error,s),complete:e.complete&&nu(e.complete,s)}):r=e}this.destination=new ru(r)}};function va(n){Cn.useDeprecatedSynchronousErrorHandling?Lp(n):ga(n)}function vx(n){throw n}function iu(n,e){let{onStoppedNotification:t}=Cn;t&&zr.setTimeout(()=>t(n,e))}var yx={closed:!0,next:io,error:vx,complete:io};var Wr=typeof Symbol=="function"&&Symbol.observable||"@@observable";function sn(n){return n}function su(...n){return ou(n)}function ou(n){return n.length===0?sn:n.length===1?n[0]:function(t){return n.reduce((i,r)=>r(i),t)}}var ot=(()=>{class n{constructor(t){t&&(this._subscribe=t)}lift(t){let i=new n;return i.source=this,i.operator=t,i}subscribe(t,i,r){let s=xx(t)?t:new Gr(t,i,r);return Hr(()=>{let{operator:o,source:a}=this;s.add(o?o.call(s,a):a?this._subscribe(s):this._trySubscribe(s))}),s}_trySubscribe(t){try{return this._subscribe(t)}catch(i){t.error(i)}}forEach(t,i){return i=Op(i),new i((r,s)=>{let o=new Gr({next:a=>{try{t(a)}catch(c){s(c),o.unsubscribe()}},error:s,complete:r});this.subscribe(o)})}_subscribe(t){var i;return(i=this.source)===null||i===void 0?void 0:i.subscribe(t)}[Wr](){return this}pipe(...t){return ou(t)(this)}toPromise(t){return t=Op(t),new t((i,r)=>{let s;this.subscribe(o=>s=o,o=>r(o),()=>i(s))})}}return n.create=e=>new n(e),n})();function Op(n){var e;return(e=n??Cn.Promise)!==null&&e!==void 0?e:Promise}function _x(n){return n&&Ie(n.next)&&Ie(n.error)&&Ie(n.complete)}function xx(n){return n&&n instanceof or||_x(n)&&ma(n)}function au(n){return Ie(n?.lift)}function Qe(n){return e=>{if(au(e))return e.lift(function(t){try{return n(t,this)}catch(i){this.error(i)}});throw new TypeError("Unable to lift unknown Observable type")}}function et(n,e,t,i,r){return new cu(n,e,t,i,r)}var cu=class extends or{constructor(e,t,i,r,s,o){super(e),this.onFinalize=s,this.shouldUnsubscribe=o,this._next=t?function(a){try{t(a)}catch(c){e.error(c)}}:super._next,this._error=r?function(a){try{r(a)}catch(c){e.error(c)}finally{this.unsubscribe()}}:super._error,this._complete=i?function(){try{i()}catch(a){e.error(a)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var e;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){let{closed:t}=this;super.unsubscribe(),!t&&((e=this.onFinalize)===null||e===void 0||e.call(this))}}};function jr(){return Qe((n,e)=>{let t=null;n._refCount++;let i=et(e,void 0,void 0,void 0,()=>{if(!n||n._refCount<=0||0<--n._refCount){t=null;return}let r=n._connection,s=t;t=null,r&&(!s||r===s)&&r.unsubscribe(),e.unsubscribe()});n.subscribe(i),i.closed||(t=n.connect())})}var $r=class extends ot{constructor(e,t){super(),this.source=e,this.subjectFactory=t,this._subject=null,this._refCount=0,this._connection=null,au(e)&&(this.lift=e.lift)}_subscribe(e){return this.getSubject().subscribe(e)}getSubject(){let e=this._subject;return(!e||e.isStopped)&&(this._subject=this.subjectFactory()),this._subject}_teardown(){this._refCount=0;let{_connection:e}=this;this._subject=this._connection=null,e?.unsubscribe()}connect(){let e=this._connection;if(!e){e=this._connection=new Ct;let t=this.getSubject();e.add(this.source.subscribe(et(t,void 0,()=>{this._teardown(),t.complete()},i=>{this._teardown(),t.error(i)},()=>this._teardown()))),e.closed&&(this._connection=null,e=Ct.EMPTY)}return e}refCount(){return jr()(this)}};var Fp=Vr(n=>function(){n(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"});var $t=(()=>{class n extends ot{constructor(){super(),this.closed=!1,this.currentObservers=null,this.observers=[],this.isStopped=!1,this.hasError=!1,this.thrownError=null}lift(t){let i=new ya(this,this);return i.operator=t,i}_throwIfClosed(){if(this.closed)throw new Fp}next(t){Hr(()=>{if(this._throwIfClosed(),!this.isStopped){this.currentObservers||(this.currentObservers=Array.from(this.observers));for(let i of this.currentObservers)i.next(t)}})}error(t){Hr(()=>{if(this._throwIfClosed(),!this.isStopped){this.hasError=this.isStopped=!0,this.thrownError=t;let{observers:i}=this;for(;i.length;)i.shift().error(t)}})}complete(){Hr(()=>{if(this._throwIfClosed(),!this.isStopped){this.isStopped=!0;let{observers:t}=this;for(;t.length;)t.shift().complete()}})}unsubscribe(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null}get observed(){var t;return((t=this.observers)===null||t===void 0?void 0:t.length)>0}_trySubscribe(t){return this._throwIfClosed(),super._trySubscribe(t)}_subscribe(t){return this._throwIfClosed(),this._checkFinalizedStatuses(t),this._innerSubscribe(t)}_innerSubscribe(t){let{hasError:i,isStopped:r,observers:s}=this;return i||r?eu:(this.currentObservers=null,s.push(t),new Ct(()=>{this.currentObservers=null,no(s,t)}))}_checkFinalizedStatuses(t){let{hasError:i,thrownError:r,isStopped:s}=this;i?t.error(r):s&&t.complete()}asObservable(){let t=new ot;return t.source=this,t}}return n.create=(e,t)=>new ya(e,t),n})(),ya=class extends $t{constructor(e,t){super(),this.destination=e,this.source=t}next(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.next)===null||i===void 0||i.call(t,e)}error(e){var t,i;(i=(t=this.destination)===null||t===void 0?void 0:t.error)===null||i===void 0||i.call(t,e)}complete(){var e,t;(t=(e=this.destination)===null||e===void 0?void 0:e.complete)===null||t===void 0||t.call(e)}_subscribe(e){var t,i;return(i=(t=this.source)===null||t===void 0?void 0:t.subscribe(e))!==null&&i!==void 0?i:eu}};var Ut=class extends $t{constructor(e){super(),this._value=e}get value(){return this.getValue()}_subscribe(e){let t=super._subscribe(e);return!t.closed&&e.next(this._value),t}getValue(){let{hasError:e,thrownError:t,_value:i}=this;if(e)throw t;return this._throwIfClosed(),i}next(e){super.next(this._value=e)}};var on=new ot(n=>n.complete());function Up(n){return n&&Ie(n.schedule)}function kp(n){return n[n.length-1]}function Bp(n){return Ie(kp(n))?n.pop():void 0}function wi(n){return Up(kp(n))?n.pop():void 0}function zp(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(d){o(d)}}function c(u){try{l(i.throw(u))}catch(d){o(d)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})}function Vp(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function ar(n){return this instanceof ar?(this.v=n,this):new ar(n)}function Hp(n,e,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var i=t.apply(n,e||[]),r,s=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(h){i[h]&&(r[h]=function(m){return new Promise(function(g,y){s.push([h,m,g,y])>1||a(h,m)})})}function a(h,m){try{c(i[h](m))}catch(g){d(s[0][3],g)}}function c(h){h.value instanceof ar?Promise.resolve(h.value.v).then(l,u):d(s[0][2],h)}function l(h){a("next",h)}function u(h){a("throw",h)}function d(h,m){h(m),s.shift(),s.length&&a(s[0][0],s[0][1])}}function Gp(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=n[Symbol.asyncIterator],t;return e?e.call(n):(n=typeof Vp=="function"?Vp(n):n[Symbol.iterator](),t={},i("next"),i("throw"),i("return"),t[Symbol.asyncIterator]=function(){return this},t);function i(s){t[s]=n[s]&&function(o){return new Promise(function(a,c){o=n[s](o),r(a,c,o.done,o.value)})}}function r(s,o,a,c){Promise.resolve(c).then(function(l){s({value:l,done:a})},o)}}var _a=n=>n&&typeof n.length=="number"&&typeof n!="function";function xa(n){return Ie(n?.then)}function Ma(n){return Ie(n[Wr])}function ba(n){return Symbol.asyncIterator&&Ie(n?.[Symbol.asyncIterator])}function wa(n){return new TypeError(`You provided ${n!==null&&typeof n=="object"?"an invalid object":`'${n}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}function Mx(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Sa=Mx();function Ea(n){return Ie(n?.[Sa])}function Ta(n){return Hp(this,arguments,function*(){let t=n.getReader();try{for(;;){let{value:i,done:r}=yield ar(t.read());if(r)return yield ar(void 0);yield yield ar(i)}}finally{t.releaseLock()}})}function Ca(n){return Ie(n?.getReader)}function Rt(n){if(n instanceof ot)return n;if(n!=null){if(Ma(n))return bx(n);if(_a(n))return wx(n);if(xa(n))return Sx(n);if(ba(n))return Wp(n);if(Ea(n))return Ex(n);if(Ca(n))return Tx(n)}throw wa(n)}function bx(n){return new ot(e=>{let t=n[Wr]();if(Ie(t.subscribe))return t.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function wx(n){return new ot(e=>{for(let t=0;t<n.length&&!e.closed;t++)e.next(n[t]);e.complete()})}function Sx(n){return new ot(e=>{n.then(t=>{e.closed||(e.next(t),e.complete())},t=>e.error(t)).then(null,ga)})}function Ex(n){return new ot(e=>{for(let t of n)if(e.next(t),e.closed)return;e.complete()})}function Wp(n){return new ot(e=>{Cx(n,e).catch(t=>e.error(t))})}function Tx(n){return Wp(Ta(n))}function Cx(n,e){var t,i,r,s;return zp(this,void 0,void 0,function*(){try{for(t=Gp(n);i=yield t.next(),!i.done;){let o=i.value;if(e.next(o),e.closed)return}}catch(o){r={error:o}}finally{try{i&&!i.done&&(s=t.return)&&(yield s.call(t))}finally{if(r)throw r.error}}e.complete()})}function Zt(n,e,t,i=0,r=!1){let s=e.schedule(function(){t(),r?n.add(this.schedule(null,i)):this.unsubscribe()},i);if(n.add(s),!r)return s}function Aa(n,e=0){return Qe((t,i)=>{t.subscribe(et(i,r=>Zt(i,n,()=>i.next(r),e),()=>Zt(i,n,()=>i.complete(),e),r=>Zt(i,n,()=>i.error(r),e)))})}function Da(n,e=0){return Qe((t,i)=>{i.add(n.schedule(()=>t.subscribe(i),e))})}function jp(n,e){return Rt(n).pipe(Da(e),Aa(e))}function $p(n,e){return Rt(n).pipe(Da(e),Aa(e))}function qp(n,e){return new ot(t=>{let i=0;return e.schedule(function(){i===n.length?t.complete():(t.next(n[i++]),t.closed||this.schedule())})})}function Xp(n,e){return new ot(t=>{let i;return Zt(t,e,()=>{i=n[Sa](),Zt(t,e,()=>{let r,s;try{({value:r,done:s}=i.next())}catch(o){t.error(o);return}s?t.complete():t.next(r)},0,!0)}),()=>Ie(i?.return)&&i.return()})}function Ia(n,e){if(!n)throw new Error("Iterable cannot be null");return new ot(t=>{Zt(t,e,()=>{let i=n[Symbol.asyncIterator]();Zt(t,e,()=>{i.next().then(r=>{r.done?t.complete():t.next(r.value)})},0,!0)})})}function Yp(n,e){return Ia(Ta(n),e)}function Zp(n,e){if(n!=null){if(Ma(n))return jp(n,e);if(_a(n))return qp(n,e);if(xa(n))return $p(n,e);if(ba(n))return Ia(n,e);if(Ea(n))return Xp(n,e);if(Ca(n))return Yp(n,e)}throw wa(n)}function Mt(n,e){return e?Zp(n,e):Rt(n)}function Te(...n){let e=wi(n);return Mt(n,e)}function qr(n,e){let t=Ie(n)?n:()=>n,i=r=>r.error(t());return new ot(e?r=>e.schedule(i,0,r):i)}function lu(n){return!!n&&(n instanceof ot||Ie(n.lift)&&Ie(n.subscribe))}var ni=Vr(n=>function(){n(this),this.name="EmptyError",this.message="no elements in sequence"});function tt(n,e){return Qe((t,i)=>{let r=0;t.subscribe(et(i,s=>{i.next(n.call(e,s,r++))}))})}var{isArray:Ax}=Array;function Dx(n,e){return Ax(e)?n(...e):n(e)}function Jp(n){return tt(e=>Dx(n,e))}var{isArray:Ix}=Array,{getPrototypeOf:Rx,prototype:Nx,keys:Px}=Object;function Kp(n){if(n.length===1){let e=n[0];if(Ix(e))return{args:e,keys:null};if(Lx(e)){let t=Px(e);return{args:t.map(i=>e[i]),keys:t}}}return{args:n,keys:null}}function Lx(n){return n&&typeof n=="object"&&Rx(n)===Nx}function Qp(n,e){return n.reduce((t,i,r)=>(t[i]=e[r],t),{})}function ro(...n){let e=wi(n),t=Bp(n),{args:i,keys:r}=Kp(n);if(i.length===0)return Mt([],e);let s=new ot(Ox(i,e,r?o=>Qp(r,o):sn));return t?s.pipe(Jp(t)):s}function Ox(n,e,t=sn){return i=>{em(e,()=>{let{length:r}=n,s=new Array(r),o=r,a=r;for(let c=0;c<r;c++)em(e,()=>{let l=Mt(n[c],e),u=!1;l.subscribe(et(i,d=>{s[c]=d,u||(u=!0,a--),a||i.next(t(s.slice()))},()=>{--o||i.complete()}))},i)},i)}}function em(n,e,t){n?Zt(t,n,e):e()}function tm(n,e,t,i,r,s,o,a){let c=[],l=0,u=0,d=!1,h=()=>{d&&!c.length&&!l&&e.complete()},m=y=>l<i?g(y):c.push(y),g=y=>{s&&e.next(y),l++;let p=!1;Rt(t(y,u++)).subscribe(et(e,f=>{r?.(f),s?m(f):e.next(f)},()=>{p=!0},void 0,()=>{if(p)try{for(l--;c.length&&l<i;){let f=c.shift();o?Zt(e,o,()=>g(f)):g(f)}h()}catch(f){e.error(f)}}))};return n.subscribe(et(e,m,()=>{d=!0,h()})),()=>{a?.()}}function St(n,e,t=1/0){return Ie(e)?St((i,r)=>tt((s,o)=>e(i,s,r,o))(Rt(n(i,r))),t):(typeof e=="number"&&(t=e),Qe((i,r)=>tm(i,r,n,t)))}function Xr(n=1/0){return St(sn,n)}function nm(){return Xr(1)}function Yr(...n){return nm()(Mt(n,wi(n)))}function Ra(n){return new ot(e=>{Rt(n()).subscribe(e)})}function gn(n,e){return Qe((t,i)=>{let r=0;t.subscribe(et(i,s=>n.call(e,s,r++)&&i.next(s)))})}function Si(n){return Qe((e,t)=>{let i=null,r=!1,s;i=e.subscribe(et(t,void 0,void 0,o=>{s=Rt(n(o,Si(n)(e))),i?(i.unsubscribe(),i=null,s.subscribe(t)):r=!0})),r&&(i.unsubscribe(),i=null,s.subscribe(t))})}function im(n,e,t,i,r){return(s,o)=>{let a=t,c=e,l=0;s.subscribe(et(o,u=>{let d=l++;c=a?n(c,u,d):(a=!0,u),i&&o.next(c)},r&&(()=>{a&&o.next(c),o.complete()})))}}function cr(n,e){return Ie(e)?St(n,e,1):St(n,1)}function Ei(n){return Qe((e,t)=>{let i=!1;e.subscribe(et(t,r=>{i=!0,t.next(r)},()=>{i||t.next(n),t.complete()}))})}function ii(n){return n<=0?()=>on:Qe((e,t)=>{let i=0;e.subscribe(et(t,r=>{++i<=n&&(t.next(r),n<=i&&t.complete())}))})}function uu(n){return tt(()=>n)}function Na(n=Fx){return Qe((e,t)=>{let i=!1;e.subscribe(et(t,r=>{i=!0,t.next(r)},()=>i?t.complete():t.error(n())))})}function Fx(){return new ni}function so(n){return Qe((e,t)=>{try{e.subscribe(t)}finally{t.add(n)}})}function Vn(n,e){let t=arguments.length>=2;return i=>i.pipe(n?gn((r,s)=>n(r,s,i)):sn,ii(1),t?Ei(e):Na(()=>new ni))}function Zr(n){return n<=0?()=>on:Qe((e,t)=>{let i=[];e.subscribe(et(t,r=>{i.push(r),n<i.length&&i.shift()},()=>{for(let r of i)t.next(r);t.complete()},void 0,()=>{i=null}))})}function du(n,e){let t=arguments.length>=2;return i=>i.pipe(n?gn((r,s)=>n(r,s,i)):sn,Zr(1),t?Ei(e):Na(()=>new ni))}function hu(n,e){return Qe(im(n,e,arguments.length>=2,!0))}function fu(...n){let e=wi(n);return Qe((t,i)=>{(e?Yr(n,t,e):Yr(n,t)).subscribe(i)})}function vn(n,e){return Qe((t,i)=>{let r=null,s=0,o=!1,a=()=>o&&!r&&i.complete();t.subscribe(et(i,c=>{r?.unsubscribe();let l=0,u=s++;Rt(n(c,u)).subscribe(r=et(i,d=>i.next(e?e(c,d,u,l++):d),()=>{r=null,a()}))},()=>{o=!0,a()}))})}function pu(n){return Qe((e,t)=>{Rt(n).subscribe(et(t,()=>t.complete(),io)),!t.closed&&e.subscribe(t)})}function kt(n,e,t){let i=Ie(n)||e||t?{next:n,error:e,complete:t}:n;return i?Qe((r,s)=>{var o;(o=i.subscribe)===null||o===void 0||o.call(i);let a=!0;r.subscribe(et(s,c=>{var l;(l=i.next)===null||l===void 0||l.call(i,c),s.next(c)},()=>{var c;a=!1,(c=i.complete)===null||c===void 0||c.call(i),s.complete()},c=>{var l;a=!1,(l=i.error)===null||l===void 0||l.call(i,c),s.error(c)},()=>{var c,l;a&&((c=i.unsubscribe)===null||c===void 0||c.call(i)),(l=i.finalize)===null||l===void 0||l.call(i)}))}):sn}var xe=class extends Error{constructor(e,t){super(id(e,t)),this.code=e}};function id(n,e){return`${`NG0${Math.abs(n)}`}${e?": "+e:""}`}function _o(n){return{toString:n}.toString()}var Pa="__parameters__";function Ux(n){return function(...t){if(n){let i=n(...t);for(let r in i)this[r]=i[r]}}}function km(n,e,t){return _o(()=>{let i=Ux(e);function r(...s){if(this instanceof r)return i.apply(this,s),this;let o=new r(...s);return a.annotation=o,a;function a(c,l,u){let d=c.hasOwnProperty(Pa)?c[Pa]:Object.defineProperty(c,Pa,{value:[]})[Pa];for(;d.length<=u;)d.push(null);return(d[u]=d[u]||[]).push(o),c}}return t&&(r.prototype=Object.create(t.prototype)),r.prototype.ngMetadataName=n,r.annotationCls=r,r})}var an=globalThis;function ut(n){for(let e in n)if(n[e]===ut)return e;throw Error("Could not find renamed property on target object.")}function cn(n){if(typeof n=="string")return n;if(Array.isArray(n))return"["+n.map(cn).join(", ")+"]";if(n==null)return""+n;if(n.overriddenName)return`${n.overriddenName}`;if(n.name)return`${n.name}`;let e=n.toString();if(e==null)return""+e;let t=e.indexOf(`
`);return t===-1?e:e.substring(0,t)}function rm(n,e){return n==null||n===""?e===null?"":e:e==null||e===""?n:n+" "+e}var kx=ut({__forward_ref__:ut});function Bm(n){return n.__forward_ref__=Bm,n.toString=function(){return cn(this())},n}function _n(n){return Vm(n)?n():n}function Vm(n){return typeof n=="function"&&n.hasOwnProperty(kx)&&n.__forward_ref__===Bm}function Me(n){return{token:n.token,providedIn:n.providedIn||null,factory:n.factory,value:void 0}}function In(n){return{providers:n.providers||[],imports:n.imports||[]}}function rc(n){return sm(n,Hm)||sm(n,Gm)}function zm(n){return rc(n)!==null}function sm(n,e){return n.hasOwnProperty(e)?n[e]:null}function Bx(n){let e=n&&(n[Hm]||n[Gm]);return e||null}function om(n){return n&&(n.hasOwnProperty(am)||n.hasOwnProperty(Vx))?n[am]:null}var Hm=ut({\u0275prov:ut}),am=ut({\u0275inj:ut}),Gm=ut({ngInjectableDef:ut}),Vx=ut({ngInjectorDef:ut}),Ne=class{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.\u0275prov=void 0,typeof t=="number"?this.__NG_ELEMENT_ID__=t:t!==void 0&&(this.\u0275prov=Me({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}get multi(){return this}toString(){return`InjectionToken ${this._desc}`}};function Wm(n){return n&&!!n.\u0275providers}var zx=ut({\u0275cmp:ut}),Hx=ut({\u0275dir:ut}),Gx=ut({\u0275pipe:ut}),Wx=ut({\u0275mod:ut}),Va=ut({\u0275fac:ut}),oo=ut({__NG_ELEMENT_ID__:ut}),cm=ut({__NG_ENV_ID__:ut});function jx(n){return typeof n=="string"?n:n==null?"":String(n)}function $x(n){return typeof n=="function"?n.name||n.toString():typeof n=="object"&&n!=null&&typeof n.type=="function"?n.type.name||n.type.toString():jx(n)}function qx(n,e){let t=e?`. Dependency path: ${e.join(" > ")} > ${n}`:"";throw new xe(-200,n)}function rd(n,e){throw new xe(-201,!1)}var $e=function(n){return n[n.Default=0]="Default",n[n.Host=1]="Host",n[n.Self=2]="Self",n[n.SkipSelf=4]="SkipSelf",n[n.Optional=8]="Optional",n}($e||{}),Su;function jm(){return Su}function yn(n){let e=Su;return Su=n,e}function $m(n,e,t){let i=rc(n);if(i&&i.providedIn=="root")return i.value===void 0?i.value=i.factory():i.value;if(t&$e.Optional)return null;if(e!==void 0)return e;rd(n,"Injector")}var Xx={},co=Xx,Eu="__NG_DI_FLAG__",za="ngTempTokenPath",Yx="ngTokenPath",Zx=/\n/gm,Jx="\u0275",lm="__source",ts;function Kx(){return ts}function Ti(n){let e=ts;return ts=n,e}function Qx(n,e=$e.Default){if(ts===void 0)throw new xe(-203,!1);return ts===null?$m(n,void 0,e):ts.get(n,e&$e.Optional?null:void 0,e)}function we(n,e=$e.Default){return(jm()||Qx)(_n(n),e)}function oe(n,e=$e.Default){return we(n,sc(e))}function sc(n){return typeof n>"u"||typeof n=="number"?n:0|(n.optional&&8)|(n.host&&1)|(n.self&&2)|(n.skipSelf&&4)}function Tu(n){let e=[];for(let t=0;t<n.length;t++){let i=_n(n[t]);if(Array.isArray(i)){if(i.length===0)throw new xe(900,!1);let r,s=$e.Default;for(let o=0;o<i.length;o++){let a=i[o],c=eM(a);typeof c=="number"?c===-1?r=a.token:s|=c:r=a}e.push(we(r,s))}else e.push(we(i))}return e}function qm(n,e){return n[Eu]=e,n.prototype[Eu]=e,n}function eM(n){return n[Eu]}function tM(n,e,t,i){let r=n[za];throw e[lm]&&r.unshift(e[lm]),n.message=nM(`
`+n.message,r,t,i),n[Yx]=r,n[za]=null,n}function nM(n,e,t,i=null){n=n&&n.charAt(0)===`
`&&n.charAt(1)==Jx?n.slice(2):n;let r=cn(e);if(Array.isArray(e))r=e.map(cn).join(" -> ");else if(typeof e=="object"){let s=[];for(let o in e)if(e.hasOwnProperty(o)){let a=e[o];s.push(o+":"+(typeof a=="string"?JSON.stringify(a):cn(a)))}r=`{${s.join(", ")}}`}return`${t}${i?"("+i+")":""}[${r}]: ${n.replace(Zx,`
  `)}`}var sd=qm(km("Optional"),8);var Xm=qm(km("SkipSelf"),4);function rs(n,e){let t=n.hasOwnProperty(Va);return t?n[Va]:null}function od(n,e){n.forEach(t=>Array.isArray(t)?od(t,e):e(t))}function Ym(n,e,t){e>=n.length?n.push(t):n.splice(e,0,t)}function Ha(n,e){return e>=n.length-1?n.pop():n.splice(e,1)[0]}var lo={},zn=[],ss=new Ne(""),Zm=new Ne("",-1),Jm=new Ne(""),Ga=class{get(e,t=co){if(t===co){let i=new Error(`NullInjectorError: No provider for ${cn(e)}!`);throw i.name="NullInjectorError",i}return t}},Km=function(n){return n[n.OnPush=0]="OnPush",n[n.Default=1]="Default",n}(Km||{}),Gn=function(n){return n[n.Emulated=0]="Emulated",n[n.None=2]="None",n[n.ShadowDom=3]="ShadowDom",n}(Gn||{}),Di=function(n){return n[n.None=0]="None",n[n.SignalBased=1]="SignalBased",n[n.HasDecoratorInputTransform=2]="HasDecoratorInputTransform",n}(Di||{});function iM(n,e,t){let i=n.length;for(;;){let r=n.indexOf(e,t);if(r===-1)return r;if(r===0||n.charCodeAt(r-1)<=32){let s=e.length;if(r+s===i||n.charCodeAt(r+s)<=32)return r}t=r+1}}function Cu(n,e,t){let i=0;for(;i<t.length;){let r=t[i];if(typeof r=="number"){if(r!==0)break;i++;let s=t[i++],o=t[i++],a=t[i++];n.setAttribute(e,o,a,s)}else{let s=r,o=t[++i];sM(s)?n.setProperty(e,s,o):n.setAttribute(e,s,o),i++}}return i}function rM(n){return n===3||n===4||n===6}function sM(n){return n.charCodeAt(0)===64}function ad(n,e){if(!(e===null||e.length===0))if(n===null||n.length===0)n=e.slice();else{let t=-1;for(let i=0;i<e.length;i++){let r=e[i];typeof r=="number"?t=r:t===0||(t===-1||t===2?um(n,t,r,null,e[++i]):um(n,t,r,null,null))}}return n}function um(n,e,t,i,r){let s=0,o=n.length;if(e===-1)o=-1;else for(;s<n.length;){let a=n[s++];if(typeof a=="number"){if(a===e){o=-1;break}else if(a>e){o=s-1;break}}}for(;s<n.length;){let a=n[s];if(typeof a=="number")break;if(a===t){if(i===null){r!==null&&(n[s+1]=r);return}else if(i===n[s+1]){n[s+2]=r;return}}s++,i!==null&&s++,r!==null&&s++}o!==-1&&(n.splice(o,0,e),s=o+1),n.splice(s++,0,t),i!==null&&n.splice(s++,0,i),r!==null&&n.splice(s++,0,r)}var Qm="ng-template";function oM(n,e,t,i){let r=0;if(i){for(;r<e.length&&typeof e[r]=="string";r+=2)if(e[r]==="class"&&iM(e[r+1].toLowerCase(),t,0)!==-1)return!0}else if(cd(n))return!1;if(r=e.indexOf(1,r),r>-1){let s;for(;++r<e.length&&typeof(s=e[r])=="string";)if(s.toLowerCase()===t)return!0}return!1}function cd(n){return n.type===4&&n.value!==Qm}function aM(n,e,t){let i=n.type===4&&!t?Qm:n.value;return e===i}function cM(n,e,t){let i=4,r=n.attrs,s=r!==null?dM(r):0,o=!1;for(let a=0;a<e.length;a++){let c=e[a];if(typeof c=="number"){if(!o&&!An(i)&&!An(c))return!1;if(o&&An(c))continue;o=!1,i=c|i&1;continue}if(!o)if(i&4){if(i=2|i&1,c!==""&&!aM(n,c,t)||c===""&&e.length===1){if(An(i))return!1;o=!0}}else if(i&8){if(r===null||!oM(n,r,c,t)){if(An(i))return!1;o=!0}}else{let l=e[++a],u=lM(c,r,cd(n),t);if(u===-1){if(An(i))return!1;o=!0;continue}if(l!==""){let d;if(u>s?d="":d=r[u+1].toLowerCase(),i&2&&l!==d){if(An(i))return!1;o=!0}}}}return An(i)||o}function An(n){return(n&1)===0}function lM(n,e,t,i){if(e===null)return-1;let r=0;if(i||!t){let s=!1;for(;r<e.length;){let o=e[r];if(o===n)return r;if(o===3||o===6)s=!0;else if(o===1||o===2){let a=e[++r];for(;typeof a=="string";)a=e[++r];continue}else{if(o===4)break;if(o===0){r+=4;continue}}r+=s?1:2}return-1}else return hM(e,n)}function uM(n,e,t=!1){for(let i=0;i<e.length;i++)if(cM(n,e[i],t))return!0;return!1}function dM(n){for(let e=0;e<n.length;e++){let t=n[e];if(rM(t))return e}return n.length}function hM(n,e){let t=n.indexOf(4);if(t>-1)for(t++;t<n.length;){let i=n[t];if(typeof i=="number")return-1;if(i===e)return t;t++}return-1}function dm(n,e){return n?":not("+e.trim()+")":e}function fM(n){let e=n[0],t=1,i=2,r="",s=!1;for(;t<n.length;){let o=n[t];if(typeof o=="string")if(i&2){let a=n[++t];r+="["+o+(a.length>0?'="'+a+'"':"")+"]"}else i&8?r+="."+o:i&4&&(r+=" "+o);else r!==""&&!An(o)&&(e+=dm(s,r),r=""),i=o,s=s||!An(i);t++}return r!==""&&(e+=dm(s,r)),e}function pM(n){return n.map(fM).join(",")}function mM(n){let e=[],t=[],i=1,r=2;for(;i<n.length;){let s=n[i];if(typeof s=="string")r===2?s!==""&&e.push(s,n[++i]):r===8&&t.push(s);else{if(!An(r))break;r=s}i++}return{attrs:e,classes:t}}function ds(n){return _o(()=>{let e=rg(n),t=xt(fe({},e),{decls:n.decls,vars:n.vars,template:n.template,consts:n.consts||null,ngContentSelectors:n.ngContentSelectors,onPush:n.changeDetection===Km.OnPush,directiveDefs:null,pipeDefs:null,dependencies:e.standalone&&n.dependencies||null,getStandaloneInjector:null,signals:n.signals??!1,data:n.data||{},encapsulation:n.encapsulation||Gn.Emulated,styles:n.styles||zn,_:null,schemas:n.schemas||null,tView:null,id:""});sg(t);let i=n.dependencies;return t.directiveDefs=fm(i,!1),t.pipeDefs=fm(i,!0),t.id=yM(t),t})}function gM(n){return Ii(n)||eg(n)}function vM(n){return n!==null}function Rn(n){return _o(()=>({type:n.type,bootstrap:n.bootstrap||zn,declarations:n.declarations||zn,imports:n.imports||zn,exports:n.exports||zn,transitiveCompileScopes:null,schemas:n.schemas||null,id:n.id||null}))}function hm(n,e){if(n==null)return lo;let t={};for(let i in n)if(n.hasOwnProperty(i)){let r=n[i],s,o,a=Di.None;Array.isArray(r)?(a=r[0],s=r[1],o=r[2]??s):(s=r,o=r),e?(t[s]=a!==Di.None?[i,a]:i,e[s]=o):t[s]=i}return t}function ld(n){return _o(()=>{let e=rg(n);return sg(e),e})}function Ii(n){return n[zx]||null}function eg(n){return n[Hx]||null}function tg(n){return n[Gx]||null}function ng(n){let e=Ii(n)||eg(n)||tg(n);return e!==null?e.standalone:!1}function ig(n,e){let t=n[Wx]||null;if(!t&&e===!0)throw new Error(`Type ${cn(n)} does not have '\u0275mod' property.`);return t}function rg(n){let e={};return{type:n.type,providersResolver:null,factory:null,hostBindings:n.hostBindings||null,hostVars:n.hostVars||0,hostAttrs:n.hostAttrs||null,contentQueries:n.contentQueries||null,declaredInputs:e,inputTransforms:null,inputConfig:n.inputs||lo,exportAs:n.exportAs||null,standalone:n.standalone===!0,signals:n.signals===!0,selectors:n.selectors||zn,viewQuery:n.viewQuery||null,features:n.features||null,setInput:null,findHostDirectiveDefs:null,hostDirectives:null,inputs:hm(n.inputs,e),outputs:hm(n.outputs),debugInfo:null}}function sg(n){n.features?.forEach(e=>e(n))}function fm(n,e){if(!n)return null;let t=e?tg:gM;return()=>(typeof n=="function"?n():n).map(i=>t(i)).filter(vM)}function yM(n){let e=0,t=[n.selectors,n.ngContentSelectors,n.hostVars,n.hostAttrs,n.consts,n.vars,n.decls,n.encapsulation,n.standalone,n.signals,n.exportAs,JSON.stringify(n.inputs),JSON.stringify(n.outputs),Object.getOwnPropertyNames(n.type.prototype),!!n.contentQueries,!!n.viewQuery].join("|");for(let r of t)e=Math.imul(31,e)+r.charCodeAt(0)<<0;return e+=2147483648,"c"+e}function _M(...n){return{\u0275providers:og(!0,n),\u0275fromNgModule:!0}}function og(n,...e){let t=[],i=new Set,r,s=o=>{t.push(o)};return od(e,o=>{let a=o;Au(a,s,[],i)&&(r||=[],r.push(a))}),r!==void 0&&ag(r,s),t}function ag(n,e){for(let t=0;t<n.length;t++){let{ngModule:i,providers:r}=n[t];ud(r,s=>{e(s,i)})}}function Au(n,e,t,i){if(n=_n(n),!n)return!1;let r=null,s=om(n),o=!s&&Ii(n);if(!s&&!o){let c=n.ngModule;if(s=om(c),s)r=c;else return!1}else{if(o&&!o.standalone)return!1;r=n}let a=i.has(r);if(o){if(a)return!1;if(i.add(r),o.dependencies){let c=typeof o.dependencies=="function"?o.dependencies():o.dependencies;for(let l of c)Au(l,e,t,i)}}else if(s){if(s.imports!=null&&!a){i.add(r);let l;try{od(s.imports,u=>{Au(u,e,t,i)&&(l||=[],l.push(u))})}finally{}l!==void 0&&ag(l,e)}if(!a){let l=rs(r)||(()=>new r);e({provide:r,useFactory:l,deps:zn},r),e({provide:Jm,useValue:r,multi:!0},r),e({provide:ss,useValue:()=>we(r),multi:!0},r)}let c=s.providers;if(c!=null&&!a){let l=n;ud(c,u=>{e(u,l)})}}else return!1;return r!==n&&n.providers!==void 0}function ud(n,e){for(let t of n)Wm(t)&&(t=t.\u0275providers),Array.isArray(t)?ud(t,e):e(t)}var xM=ut({provide:String,useValue:ut});function cg(n){return n!==null&&typeof n=="object"&&xM in n}function MM(n){return!!(n&&n.useExisting)}function bM(n){return!!(n&&n.useFactory)}function Du(n){return typeof n=="function"}var oc=new Ne(""),Oa={},wM={},mu;function dd(){return mu===void 0&&(mu=new Ga),mu}var ln=class{},uo=class extends ln{get destroyed(){return this._destroyed}constructor(e,t,i,r){super(),this.parent=t,this.source=i,this.scopes=r,this.records=new Map,this._ngOnDestroyHooks=new Set,this._onDestroyHooks=[],this._destroyed=!1,Ru(e,o=>this.processProvider(o)),this.records.set(Zm,Jr(void 0,this)),r.has("environment")&&this.records.set(ln,Jr(void 0,this));let s=this.records.get(oc);s!=null&&typeof s.value=="string"&&this.scopes.add(s.value),this.injectorDefTypes=new Set(this.get(Jm,zn,$e.Self))}destroy(){this.assertNotDestroyed(),this._destroyed=!0;let e=lt(null);try{for(let i of this._ngOnDestroyHooks)i.ngOnDestroy();let t=this._onDestroyHooks;this._onDestroyHooks=[];for(let i of t)i()}finally{this.records.clear(),this._ngOnDestroyHooks.clear(),this.injectorDefTypes.clear(),lt(e)}}onDestroy(e){return this.assertNotDestroyed(),this._onDestroyHooks.push(e),()=>this.removeOnDestroy(e)}runInContext(e){this.assertNotDestroyed();let t=Ti(this),i=yn(void 0),r;try{return e()}finally{Ti(t),yn(i)}}get(e,t=co,i=$e.Default){if(this.assertNotDestroyed(),e.hasOwnProperty(cm))return e[cm](this);i=sc(i);let r,s=Ti(this),o=yn(void 0);try{if(!(i&$e.SkipSelf)){let c=this.records.get(e);if(c===void 0){let l=DM(e)&&rc(e);l&&this.injectableDefInScope(l)?c=Jr(Iu(e),Oa):c=null,this.records.set(e,c)}if(c!=null)return this.hydrate(e,c)}let a=i&$e.Self?dd():this.parent;return t=i&$e.Optional&&t===co?null:t,a.get(e,t)}catch(a){if(a.name==="NullInjectorError"){if((a[za]=a[za]||[]).unshift(cn(e)),s)throw a;return tM(a,e,"R3InjectorError",this.source)}else throw a}finally{yn(o),Ti(s)}}resolveInjectorInitializers(){let e=lt(null),t=Ti(this),i=yn(void 0),r;try{let s=this.get(ss,zn,$e.Self);for(let o of s)o()}finally{Ti(t),yn(i),lt(e)}}toString(){let e=[],t=this.records;for(let i of t.keys())e.push(cn(i));return`R3Injector[${e.join(", ")}]`}assertNotDestroyed(){if(this._destroyed)throw new xe(205,!1)}processProvider(e){e=_n(e);let t=Du(e)?e:_n(e&&e.provide),i=EM(e);if(!Du(e)&&e.multi===!0){let r=this.records.get(t);r||(r=Jr(void 0,Oa,!0),r.factory=()=>Tu(r.multi),this.records.set(t,r)),t=e,r.multi.push(e)}this.records.set(t,i)}hydrate(e,t){let i=lt(null);try{return t.value===Oa&&(t.value=wM,t.value=t.factory()),typeof t.value=="object"&&t.value&&AM(t.value)&&this._ngOnDestroyHooks.add(t.value),t.value}finally{lt(i)}}injectableDefInScope(e){if(!e.providedIn)return!1;let t=_n(e.providedIn);return typeof t=="string"?t==="any"||this.scopes.has(t):this.injectorDefTypes.has(t)}removeOnDestroy(e){let t=this._onDestroyHooks.indexOf(e);t!==-1&&this._onDestroyHooks.splice(t,1)}};function Iu(n){let e=rc(n),t=e!==null?e.factory:rs(n);if(t!==null)return t;if(n instanceof Ne)throw new xe(204,!1);if(n instanceof Function)return SM(n);throw new xe(204,!1)}function SM(n){if(n.length>0)throw new xe(204,!1);let t=Bx(n);return t!==null?()=>t.factory(n):()=>new n}function EM(n){if(cg(n))return Jr(void 0,n.useValue);{let e=TM(n);return Jr(e,Oa)}}function TM(n,e,t){let i;if(Du(n)){let r=_n(n);return rs(r)||Iu(r)}else if(cg(n))i=()=>_n(n.useValue);else if(bM(n))i=()=>n.useFactory(...Tu(n.deps||[]));else if(MM(n))i=()=>we(_n(n.useExisting));else{let r=_n(n&&(n.useClass||n.provide));if(CM(n))i=()=>new r(...Tu(n.deps));else return rs(r)||Iu(r)}return i}function Jr(n,e,t=!1){return{factory:n,value:e,multi:t?[]:void 0}}function CM(n){return!!n.deps}function AM(n){return n!==null&&typeof n=="object"&&typeof n.ngOnDestroy=="function"}function DM(n){return typeof n=="function"||typeof n=="object"&&n instanceof Ne}function Ru(n,e){for(let t of n)Array.isArray(t)?Ru(t,e):t&&Wm(t)?Ru(t.\u0275providers,e):e(t)}function si(n,e){n instanceof uo&&n.assertNotDestroyed();let t,i=Ti(n),r=yn(void 0);try{return e()}finally{Ti(i),yn(r)}}function lg(){return jm()!==void 0||Kx()!=null}function IM(n){if(!lg())throw new xe(-203,!1)}function RM(n){let e=an.ng;if(e&&e.\u0275compilerFacade)return e.\u0275compilerFacade;throw new Error("JIT compiler unavailable")}function NM(n){return typeof n=="function"}var oi=0,nt=1,Re=2,zt=3,Dn=4,Nn=5,Wa=6,pm=7,Ri=8,os=9,Wn=10,ri=11,ho=12,mm=13,xo=14,jn=15,hd=16,Kr=17,ac=18,cc=19,ug=20,Ai=21,gu=22,ur=23,as=25,dg=1;var dr=7,ja=8,$a=9,xn=10,fd=function(n){return n[n.None=0]="None",n[n.HasTransplantedViews=2]="HasTransplantedViews",n}(fd||{});function ns(n){return Array.isArray(n)&&typeof n[dg]=="object"}function ai(n){return Array.isArray(n)&&n[dg]===!0}function hg(n){return(n.flags&4)!==0}function pd(n){return n.componentOffset>-1}function PM(n){return(n.flags&1)===1}function Mo(n){return!!n.template}function LM(n){return(n[Re]&512)!==0}var Nu=class{constructor(e,t,i){this.previousValue=e,this.currentValue=t,this.firstChange=i}isFirstChange(){return this.firstChange}};function fg(n,e,t,i){e!==null?e.applyValueToInputSignal(e,i):n[t]=i}function lc(){return pg}function pg(n){return n.type.prototype.ngOnChanges&&(n.setInput=FM),OM}lc.ngInherit=!0;function OM(){let n=gg(this),e=n?.current;if(e){let t=n.previous;if(t===lo)n.previous=e;else for(let i in e)t[i]=e[i];n.current=null,this.ngOnChanges(e)}}function FM(n,e,t,i,r){let s=this.declaredInputs[i],o=gg(n)||UM(n,{previous:lo,current:null}),a=o.current||(o.current={}),c=o.previous,l=c[s];a[s]=new Nu(l&&l.currentValue,t,c===lo),fg(n,e,r,t)}var mg="__ngSimpleChanges__";function gg(n){return n[mg]||null}function UM(n,e){return n[mg]=e}var gm=null;var Ci=function(n,e,t){gm?.(n,e,t)},kM="svg",BM="math",VM=!1;function zM(){return VM}function Ni(n){for(;Array.isArray(n);)n=n[oi];return n}function ci(n,e){return Ni(e[n.index])}function HM(n,e){return n.data[e]}function bo(n,e){let t=e[n];return ns(t)?t:t[oi]}function md(n){return(n[Re]&128)===128}function GM(n){return ai(n[zt])}function vm(n,e){return e==null?null:n[e]}function vg(n){n[Kr]=0}function WM(n){n[Re]&1024||(n[Re]|=1024,md(n)&&fo(n))}function gd(n){return!!(n[Re]&9216||n[ur]?.dirty)}function Pu(n){n[Wn].changeDetectionScheduler?.notify(1),gd(n)?fo(n):n[Re]&64&&(zM()?(n[Re]|=1024,fo(n)):n[Wn].changeDetectionScheduler?.notify())}function fo(n){n[Wn].changeDetectionScheduler?.notify();let e=po(n);for(;e!==null&&!(e[Re]&8192||(e[Re]|=8192,!md(e)));)e=po(e)}function yg(n,e){if((n[Re]&256)===256)throw new xe(911,!1);n[Ai]===null&&(n[Ai]=[]),n[Ai].push(e)}function jM(n,e){if(n[Ai]===null)return;let t=n[Ai].indexOf(e);t!==-1&&n[Ai].splice(t,1)}function po(n){let e=n[zt];return ai(e)?e[zt]:e}var at={lFrame:Tg(null),bindingsEnabled:!0,skipHydrationRootTNode:null};function $M(){return at.lFrame.elementDepthCount}function qM(){at.lFrame.elementDepthCount++}function XM(){at.lFrame.elementDepthCount--}function _g(){return at.bindingsEnabled}function YM(){return at.skipHydrationRootTNode!==null}function ZM(n){return at.skipHydrationRootTNode===n}function JM(){at.skipHydrationRootTNode=null}function $n(){return at.lFrame.lView}function xg(){return at.lFrame.tView}function Li(){let n=Mg();for(;n!==null&&n.type===64;)n=n.parent;return n}function Mg(){return at.lFrame.currentTNode}function KM(){let n=at.lFrame,e=n.currentTNode;return n.isParent?e:e.parent}function vd(n,e){let t=at.lFrame;t.currentTNode=n,t.isParent=e}function bg(){return at.lFrame.isParent}function QM(){at.lFrame.isParent=!1}function eb(n){return at.lFrame.bindingIndex=n}function tb(){return at.lFrame.inI18n}function nb(n,e){let t=at.lFrame;t.bindingIndex=t.bindingRootIndex=n,Lu(e)}function ib(){return at.lFrame.currentDirectiveIndex}function Lu(n){at.lFrame.currentDirectiveIndex=n}function wg(n){at.lFrame.currentQueryIndex=n}function rb(n){let e=n[nt];return e.type===2?e.declTNode:e.type===1?n[Nn]:null}function Sg(n,e,t){if(t&$e.SkipSelf){let r=e,s=n;for(;r=r.parent,r===null&&!(t&$e.Host);)if(r=rb(s),r===null||(s=s[xo],r.type&10))break;if(r===null)return!1;e=r,n=s}let i=at.lFrame=Eg();return i.currentTNode=e,i.lView=n,!0}function yd(n){let e=Eg(),t=n[nt];at.lFrame=e,e.currentTNode=t.firstChild,e.lView=n,e.tView=t,e.contextLView=n,e.bindingIndex=t.bindingStartIndex,e.inI18n=!1}function Eg(){let n=at.lFrame,e=n===null?null:n.child;return e===null?Tg(n):e}function Tg(n){let e={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:n,child:null,inI18n:!1};return n!==null&&(n.child=e),e}function Cg(){let n=at.lFrame;return at.lFrame=n.parent,n.currentTNode=null,n.lView=null,n}var Ag=Cg;function _d(){let n=Cg();n.isParent=!0,n.tView=null,n.selectedIndex=-1,n.contextLView=null,n.elementDepthCount=0,n.currentDirectiveIndex=-1,n.currentNamespace=null,n.bindingRootIndex=-1,n.bindingIndex=-1,n.currentQueryIndex=0}function sb(){return at.lFrame.selectedIndex}function hr(n){at.lFrame.selectedIndex=n}function ob(){return at.lFrame.currentNamespace}var Dg=!0;function ab(){return Dg}function cb(n){Dg=n}function lb(n,e,t){let{ngOnChanges:i,ngOnInit:r,ngDoCheck:s}=e.type.prototype;if(i){let o=pg(e);(t.preOrderHooks??=[]).push(n,o),(t.preOrderCheckHooks??=[]).push(n,o)}r&&(t.preOrderHooks??=[]).push(0-n,r),s&&((t.preOrderHooks??=[]).push(n,s),(t.preOrderCheckHooks??=[]).push(n,s))}function Ig(n,e){for(let t=e.directiveStart,i=e.directiveEnd;t<i;t++){let s=n.data[t].type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:a,ngAfterViewInit:c,ngAfterViewChecked:l,ngOnDestroy:u}=s;o&&(n.contentHooks??=[]).push(-t,o),a&&((n.contentHooks??=[]).push(t,a),(n.contentCheckHooks??=[]).push(t,a)),c&&(n.viewHooks??=[]).push(-t,c),l&&((n.viewHooks??=[]).push(t,l),(n.viewCheckHooks??=[]).push(t,l)),u!=null&&(n.destroyHooks??=[]).push(t,u)}}function Fa(n,e,t){Rg(n,e,3,t)}function Ua(n,e,t,i){(n[Re]&3)===t&&Rg(n,e,t,i)}function vu(n,e){let t=n[Re];(t&3)===e&&(t&=16383,t+=1,n[Re]=t)}function Rg(n,e,t,i){let r=i!==void 0?n[Kr]&65535:0,s=i??-1,o=e.length-1,a=0;for(let c=r;c<o;c++)if(typeof e[c+1]=="number"){if(a=e[c],i!=null&&a>=i)break}else e[c]<0&&(n[Kr]+=65536),(a<s||s==-1)&&(ub(n,t,e,c),n[Kr]=(n[Kr]&4294901760)+c+2),c++}function ym(n,e){Ci(4,n,e);let t=lt(null);try{e.call(n)}finally{lt(t),Ci(5,n,e)}}function ub(n,e,t,i){let r=t[i]<0,s=t[i+1],o=r?-t[i]:t[i],a=n[o];r?n[Re]>>14<n[Kr]>>16&&(n[Re]&3)===e&&(n[Re]+=16384,ym(a,s)):ym(a,s)}var is=-1,mo=class{constructor(e,t,i){this.factory=e,this.resolving=!1,this.canSeeViewProviders=t,this.injectImpl=i}};function db(n){return n instanceof mo}function hb(n){return(n.flags&8)!==0}function fb(n){return(n.flags&16)!==0}function Ng(n){return n!==is}function qa(n){return n&32767}function pb(n){return n>>16}function Xa(n,e){let t=pb(n),i=e;for(;t>0;)i=i[xo],t--;return i}var Ou=!0;function _m(n){let e=Ou;return Ou=n,e}var mb=256,Pg=mb-1,Lg=5,gb=0,Hn={};function vb(n,e,t){let i;typeof t=="string"?i=t.charCodeAt(0)||0:t.hasOwnProperty(oo)&&(i=t[oo]),i==null&&(i=t[oo]=gb++);let r=i&Pg,s=1<<r;e.data[n+(r>>Lg)]|=s}function Og(n,e){let t=Fg(n,e);if(t!==-1)return t;let i=e[nt];i.firstCreatePass&&(n.injectorIndex=e.length,yu(i.data,n),yu(e,null),yu(i.blueprint,null));let r=xd(n,e),s=n.injectorIndex;if(Ng(r)){let o=qa(r),a=Xa(r,e),c=a[nt].data;for(let l=0;l<8;l++)e[s+l]=a[o+l]|c[o+l]}return e[s+8]=r,s}function yu(n,e){n.push(0,0,0,0,0,0,0,0,e)}function Fg(n,e){return n.injectorIndex===-1||n.parent&&n.parent.injectorIndex===n.injectorIndex||e[n.injectorIndex+8]===null?-1:n.injectorIndex}function xd(n,e){if(n.parent&&n.parent.injectorIndex!==-1)return n.parent.injectorIndex;let t=0,i=null,r=e;for(;r!==null;){if(i=zg(r),i===null)return is;if(t++,r=r[xo],i.injectorIndex!==-1)return i.injectorIndex|t<<16}return is}function yb(n,e,t){vb(n,e,t)}function Ug(n,e,t){if(t&$e.Optional||n!==void 0)return n;rd(e,"NodeInjector")}function kg(n,e,t,i){if(t&$e.Optional&&i===void 0&&(i=null),!(t&($e.Self|$e.Host))){let r=n[os],s=yn(void 0);try{return r?r.get(e,i,t&$e.Optional):$m(e,i,t&$e.Optional)}finally{yn(s)}}return Ug(i,e,t)}function Bg(n,e,t,i=$e.Default,r){if(n!==null){if(e[Re]&2048&&!(i&$e.Self)){let o=wb(n,e,t,i,Hn);if(o!==Hn)return o}let s=Vg(n,e,t,i,Hn);if(s!==Hn)return s}return kg(e,t,i,r)}function Vg(n,e,t,i,r){let s=Mb(t);if(typeof s=="function"){if(!Sg(e,n,i))return i&$e.Host?Ug(r,t,i):kg(e,t,i,r);try{let o;if(o=s(i),o==null&&!(i&$e.Optional))rd(t);else return o}finally{Ag()}}else if(typeof s=="number"){let o=null,a=Fg(n,e),c=is,l=i&$e.Host?e[jn][Nn]:null;for((a===-1||i&$e.SkipSelf)&&(c=a===-1?xd(n,e):e[a+8],c===is||!Mm(i,!1)?a=-1:(o=e[nt],a=qa(c),e=Xa(c,e)));a!==-1;){let u=e[nt];if(xm(s,a,u.data)){let d=_b(a,e,t,o,i,l);if(d!==Hn)return d}c=e[a+8],c!==is&&Mm(i,e[nt].data[a+8]===l)&&xm(s,a,e)?(o=u,a=qa(c),e=Xa(c,e)):a=-1}}return r}function _b(n,e,t,i,r,s){let o=e[nt],a=o.data[n+8],c=i==null?pd(a)&&Ou:i!=o&&(a.type&3)!==0,l=r&$e.Host&&s===a,u=xb(a,o,t,c,l);return u!==null?go(e,o,u,a):Hn}function xb(n,e,t,i,r){let s=n.providerIndexes,o=e.data,a=s&1048575,c=n.directiveStart,l=n.directiveEnd,u=s>>20,d=i?a:a+u,h=r?a+u:l;for(let m=d;m<h;m++){let g=o[m];if(m<c&&t===g||m>=c&&g.type===t)return m}if(r){let m=o[c];if(m&&Mo(m)&&m.type===t)return c}return null}function go(n,e,t,i){let r=n[t],s=e.data;if(db(r)){let o=r;o.resolving&&qx($x(s[t]));let a=_m(o.canSeeViewProviders);o.resolving=!0;let c,l=o.injectImpl?yn(o.injectImpl):null,u=Sg(n,i,$e.Default);try{r=n[t]=o.factory(void 0,s,n,i),e.firstCreatePass&&t>=i.directiveStart&&lb(t,s[t],e)}finally{l!==null&&yn(l),_m(a),o.resolving=!1,Ag()}}return r}function Mb(n){if(typeof n=="string")return n.charCodeAt(0)||0;let e=n.hasOwnProperty(oo)?n[oo]:void 0;return typeof e=="number"?e>=0?e&Pg:bb:e}function xm(n,e,t){let i=1<<n;return!!(t[e+(n>>Lg)]&i)}function Mm(n,e){return!(n&$e.Self)&&!(n&$e.Host&&e)}var lr=class{constructor(e,t){this._tNode=e,this._lView=t}get(e,t,i){return Bg(this._tNode,this._lView,e,sc(i),t)}};function bb(){return new lr(Li(),$n())}function Md(n){return _o(()=>{let e=n.prototype.constructor,t=e[Va]||Fu(e),i=Object.prototype,r=Object.getPrototypeOf(n.prototype).constructor;for(;r&&r!==i;){let s=r[Va]||Fu(r);if(s&&s!==t)return s;r=Object.getPrototypeOf(r)}return s=>new s})}function Fu(n){return Vm(n)?()=>{let e=Fu(_n(n));return e&&e()}:rs(n)}function wb(n,e,t,i,r){let s=n,o=e;for(;s!==null&&o!==null&&o[Re]&2048&&!(o[Re]&512);){let a=Vg(s,o,t,i|$e.Self,Hn);if(a!==Hn)return a;let c=s.parent;if(!c){let l=o[ug];if(l){let u=l.get(t,Hn,i);if(u!==Hn)return u}c=zg(o),o=o[xo]}s=c}return r}function zg(n){let e=n[nt],t=e.type;return t===2?e.declTNode:t===1?n[Nn]:null}function bm(n,e=null,t=null,i){let r=Hg(n,e,t,i);return r.resolveInjectorInitializers(),r}function Hg(n,e=null,t=null,i,r=new Set){let s=[t||zn,_M(n)];return i=i||(typeof n=="object"?void 0:cn(n)),new uo(s,e||dd(),i||null,r)}var Xn=(()=>{let e=class e{static create(i,r){if(Array.isArray(i))return bm({name:""},r,i,"");{let s=i.name??"";return bm({name:s},i.parent,i.providers,s)}}};e.THROW_IF_NOT_FOUND=co,e.NULL=new Ga,e.\u0275prov=Me({token:e,providedIn:"any",factory:()=>we(Zm)}),e.__NG_ELEMENT_ID__=-1;let n=e;return n})();var Sb="ngOriginalError";function _u(n){return n[Sb]}var qn=class{constructor(){this._console=console}handleError(e){let t=this._findOriginalError(e);this._console.error("ERROR",e),t&&this._console.error("ORIGINAL ERROR",t)}_findOriginalError(e){let t=e&&_u(e);for(;t&&_u(t);)t=_u(t);return t||null}},Gg=new Ne("",{providedIn:"root",factory:()=>oe(qn).handleError.bind(void 0)}),bd=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=Eb,e.__NG_ENV_ID__=i=>i;let n=e;return n})(),Uu=class extends bd{constructor(e){super(),this._lView=e}onDestroy(e){return yg(this._lView,e),()=>jM(this._lView,e)}};function Eb(){return new Uu($n())}function Tb(){return wd(Li(),$n())}function wd(n,e){return new hs(ci(n,e))}var hs=(()=>{let e=class e{constructor(i){this.nativeElement=i}};e.__NG_ELEMENT_ID__=Tb;let n=e;return n})();var ku=class extends $t{constructor(e=!1){super(),this.destroyRef=void 0,this.__isAsync=e,lg()&&(this.destroyRef=oe(bd,{optional:!0})??void 0)}emit(e){let t=lt(null);try{super.next(e)}finally{lt(t)}}subscribe(e,t,i){let r=e,s=t||(()=>null),o=i;if(e&&typeof e=="object"){let c=e;r=c.next?.bind(c),s=c.error?.bind(c),o=c.complete?.bind(c)}this.__isAsync&&(s=xu(s),r&&(r=xu(r)),o&&(o=xu(o)));let a=super.subscribe({next:r,error:s,complete:o});return e instanceof Ct&&e.add(a),a}};function xu(n){return e=>{setTimeout(n,void 0,e)}}var qt=ku;function Wg(n){return(n.flags&128)===128}var jg=new Map,Cb=0;function Ab(){return Cb++}function Db(n){jg.set(n[cc],n)}function Ib(n){jg.delete(n[cc])}var wm="__ngContext__";function cs(n,e){ns(e)?(n[wm]=e[cc],Db(e)):n[wm]=e}function $g(n){return Xg(n[ho])}function qg(n){return Xg(n[Dn])}function Xg(n){for(;n!==null&&!ai(n);)n=n[Dn];return n}var Bu;function Yg(n){Bu=n}function Rb(){if(Bu!==void 0)return Bu;if(typeof document<"u")return document;throw new xe(210,!1)}var uc=new Ne("",{providedIn:"root",factory:()=>Nb}),Nb="ng",Sd=new Ne(""),Oi=new Ne("",{providedIn:"platform",factory:()=>"unknown"});var Ed=new Ne("",{providedIn:"root",factory:()=>Rb().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce")||null});var Pb="h",Lb="b";var Ob=()=>null;function Td(n,e,t=!1){return Ob(n,e,t)}var Zg=!1,Fb=new Ne("",{providedIn:"root",factory:()=>Zg});function Jg(n){return n instanceof Function?n():n}function Ub(n){return(n??oe(Xn)).get(Oi)==="browser"}var fr=function(n){return n[n.Important=1]="Important",n[n.DashCase=2]="DashCase",n}(fr||{}),kb;function Cd(n,e){return kb(n,e)}function Qr(n,e,t,i,r){if(i!=null){let s,o=!1;ai(i)?s=i:ns(i)&&(o=!0,i=i[oi]);let a=Ni(i);n===0&&t!==null?r==null?nv(e,t,a):Ya(e,t,a,r||null,!0):n===1&&t!==null?Ya(e,t,a,r||null,!0):n===2?ew(e,a,o):n===3&&e.destroyNode(a),s!=null&&nw(e,n,s,t,r)}}function Kg(n,e,t){return n.createElement(e,t)}function Bb(n,e){Qg(n,e),e[oi]=null,e[Nn]=null}function Vb(n,e,t,i,r,s){i[oi]=r,i[Nn]=e,dc(n,i,t,1,r,s)}function Qg(n,e){e[Wn].changeDetectionScheduler?.notify(1),dc(n,e,e[ri],2,null,null)}function zb(n){let e=n[ho];if(!e)return Mu(n[nt],n);for(;e;){let t=null;if(ns(e))t=e[ho];else{let i=e[xn];i&&(t=i)}if(!t){for(;e&&!e[Dn]&&e!==n;)ns(e)&&Mu(e[nt],e),e=e[zt];e===null&&(e=n),ns(e)&&Mu(e[nt],e),t=e&&e[Dn]}e=t}}function Hb(n,e,t,i){let r=xn+i,s=t.length;i>0&&(t[r-1][Dn]=e),i<s-xn?(e[Dn]=t[r],Ym(t,xn+i,e)):(t.push(e),e[Dn]=null),e[zt]=t;let o=e[hd];o!==null&&t!==o&&Gb(o,e);let a=e[ac];a!==null&&a.insertView(n),Pu(e),e[Re]|=128}function Gb(n,e){let t=n[$a],r=e[zt][zt][jn];e[jn]!==r&&(n[Re]|=fd.HasTransplantedViews),t===null?n[$a]=[e]:t.push(e)}function ev(n,e){let t=n[$a],i=t.indexOf(e);t.splice(i,1)}function Vu(n,e){if(n.length<=xn)return;let t=xn+e,i=n[t];if(i){let r=i[hd];r!==null&&r!==n&&ev(r,i),e>0&&(n[t-1][Dn]=i[Dn]);let s=Ha(n,xn+e);Bb(i[nt],i);let o=s[ac];o!==null&&o.detachView(s[nt]),i[zt]=null,i[Dn]=null,i[Re]&=-129}return i}function tv(n,e){if(!(e[Re]&256)){let t=e[ri];t.destroyNode&&dc(n,e,t,3,null,null),zb(e)}}function Mu(n,e){if(e[Re]&256)return;let t=lt(null);try{e[Re]&=-129,e[Re]|=256,e[ur]&&Ap(e[ur]),jb(n,e),Wb(n,e),e[nt].type===1&&e[ri].destroy();let i=e[hd];if(i!==null&&ai(e[zt])){i!==e[zt]&&ev(i,e);let r=e[ac];r!==null&&r.detachView(n)}Ib(e)}finally{lt(t)}}function Wb(n,e){let t=n.cleanup,i=e[pm];if(t!==null)for(let s=0;s<t.length-1;s+=2)if(typeof t[s]=="string"){let o=t[s+3];o>=0?i[o]():i[-o].unsubscribe(),s+=2}else{let o=i[t[s+1]];t[s].call(o)}i!==null&&(e[pm]=null);let r=e[Ai];if(r!==null){e[Ai]=null;for(let s=0;s<r.length;s++){let o=r[s];o()}}}function jb(n,e){let t;if(n!=null&&(t=n.destroyHooks)!=null)for(let i=0;i<t.length;i+=2){let r=e[t[i]];if(!(r instanceof mo)){let s=t[i+1];if(Array.isArray(s))for(let o=0;o<s.length;o+=2){let a=r[s[o]],c=s[o+1];Ci(4,a,c);try{c.call(a)}finally{Ci(5,a,c)}}else{Ci(4,r,s);try{s.call(r)}finally{Ci(5,r,s)}}}}}function $b(n,e,t){return qb(n,e.parent,t)}function qb(n,e,t){let i=e;for(;i!==null&&i.type&40;)e=i,i=e.parent;if(i===null)return t[oi];{let{componentOffset:r}=i;if(r>-1){let{encapsulation:s}=n.data[i.directiveStart+r];if(s===Gn.None||s===Gn.Emulated)return null}return ci(i,t)}}function Ya(n,e,t,i,r){n.insertBefore(e,t,i,r)}function nv(n,e,t){n.appendChild(e,t)}function Sm(n,e,t,i,r){i!==null?Ya(n,e,t,i,r):nv(n,e,t)}function Xb(n,e,t,i){n.removeChild(e,t,i)}function Ad(n,e){return n.parentNode(e)}function Yb(n,e){return n.nextSibling(e)}function Zb(n,e,t){return Kb(n,e,t)}function Jb(n,e,t){return n.type&40?ci(n,t):null}var Kb=Jb,Em;function Qb(n,e,t,i){let r=$b(n,i,e),s=e[ri],o=i.parent||e[Nn],a=Zb(o,i,e);if(r!=null)if(Array.isArray(t))for(let c=0;c<t.length;c++)Sm(s,r,t[c],a,!1);else Sm(s,r,t,a,!1);Em!==void 0&&Em(s,i,e,t,r)}function ka(n,e){if(e!==null){let t=e.type;if(t&3)return ci(e,n);if(t&4)return zu(-1,n[e.index]);if(t&8){let i=e.child;if(i!==null)return ka(n,i);{let r=n[e.index];return ai(r)?zu(-1,r):Ni(r)}}else{if(t&32)return Cd(e,n)()||Ni(n[e.index]);{let i=iv(n,e);if(i!==null){if(Array.isArray(i))return i[0];let r=po(n[jn]);return ka(r,i)}else return ka(n,e.next)}}}return null}function iv(n,e){if(e!==null){let i=n[jn][Nn],r=e.projection;return i.projection[r]}return null}function zu(n,e){let t=xn+n+1;if(t<e.length){let i=e[t],r=i[nt].firstChild;if(r!==null)return ka(i,r)}return e[dr]}function ew(n,e,t){let i=Ad(n,e);i&&Xb(n,i,e,t)}function Dd(n,e,t,i,r,s,o){for(;t!=null;){let a=i[t.index],c=t.type;if(o&&e===0&&(a&&cs(Ni(a),i),t.flags|=2),(t.flags&32)!==32)if(c&8)Dd(n,e,t.child,i,r,s,!1),Qr(e,n,r,a,s);else if(c&32){let l=Cd(t,i),u;for(;u=l();)Qr(e,n,r,u,s);Qr(e,n,r,a,s)}else c&16?tw(n,e,i,t,r,s):Qr(e,n,r,a,s);t=o?t.projectionNext:t.next}}function dc(n,e,t,i,r,s){Dd(t,i,n.firstChild,e,r,s,!1)}function tw(n,e,t,i,r,s){let o=t[jn],c=o[Nn].projection[i.projection];if(Array.isArray(c))for(let l=0;l<c.length;l++){let u=c[l];Qr(e,n,r,u,s)}else{let l=c,u=o[zt];Wg(i)&&(l.flags|=128),Dd(n,e,l,u,r,s,!0)}}function nw(n,e,t,i,r){let s=t[dr],o=Ni(t);s!==o&&Qr(e,n,i,s,r);for(let a=xn;a<t.length;a++){let c=t[a];dc(c[nt],c,n,e,i,s)}}function iw(n,e,t){n.setAttribute(e,"style",t)}function rv(n,e,t){t===""?n.removeAttribute(e,"class"):n.setAttribute(e,"class",t)}function sv(n,e,t){let{mergedAttrs:i,classes:r,styles:s}=t;i!==null&&Cu(n,e,i),r!==null&&rv(n,e,r),s!==null&&iw(n,e,s)}var ov={};function rw(n,e,t,i){if(!i)if((e[Re]&3)===3){let s=n.preOrderCheckHooks;s!==null&&Fa(e,s,t)}else{let s=n.preOrderHooks;s!==null&&Ua(e,s,0,t)}hr(t)}function wo(n,e=$e.Default){let t=$n();if(t===null)return we(n,e);let i=Li();return Bg(i,t,_n(n),e)}function av(){let n="invalid";throw new Error(n)}function cv(n,e,t,i,r,s){let o=lt(null);try{let a=null;r&Di.SignalBased&&(a=e[i][Sp]),a!==null&&a.transformFn!==void 0&&(s=a.transformFn(s)),r&Di.HasDecoratorInputTransform&&(s=n.inputTransforms[i].call(e,s)),n.setInput!==null?n.setInput(e,a,s,t,i):fg(e,a,i,s)}finally{lt(o)}}function sw(n,e){let t=n.hostBindingOpCodes;if(t!==null)try{for(let i=0;i<t.length;i++){let r=t[i];if(r<0)hr(~r);else{let s=r,o=t[++i],a=t[++i];nb(o,s);let c=e[s];a(2,c)}}}finally{hr(-1)}}function Id(n,e,t,i,r,s,o,a,c,l,u){let d=e.blueprint.slice();return d[oi]=r,d[Re]=i|4|128|8|64,(l!==null||n&&n[Re]&2048)&&(d[Re]|=2048),vg(d),d[zt]=d[xo]=n,d[Ri]=t,d[Wn]=o||n&&n[Wn],d[ri]=a||n&&n[ri],d[os]=c||n&&n[os]||null,d[Nn]=s,d[cc]=Ab(),d[Wa]=u,d[ug]=l,d[jn]=e.type==2?n[jn]:d,d}function lv(n,e,t,i,r){let s=n.data[e];if(s===null)s=ow(n,e,t,i,r),tb()&&(s.flags|=32);else if(s.type&64){s.type=t,s.value=i,s.attrs=r;let o=KM();s.injectorIndex=o===null?-1:o.injectorIndex}return vd(s,!0),s}function ow(n,e,t,i,r){let s=Mg(),o=bg(),a=o?s:s&&s.parent,c=n.data[e]=fw(n,a,t,e,i,r);return n.firstChild===null&&(n.firstChild=c),s!==null&&(o?s.child==null&&c.parent!==null&&(s.child=c):s.next===null&&(s.next=c,c.prev=s)),c}function uv(n,e,t,i){if(t===0)return-1;let r=e.length;for(let s=0;s<t;s++)e.push(i),n.blueprint.push(i),n.data.push(null);return r}function dv(n,e,t,i,r){let s=sb(),o=i&2;try{hr(-1),o&&e.length>as&&rw(n,e,as,!1),Ci(o?2:0,r),t(i,r)}finally{hr(s),Ci(o?3:1,r)}}function hv(n,e,t){if(hg(e)){let i=lt(null);try{let r=e.directiveStart,s=e.directiveEnd;for(let o=r;o<s;o++){let a=n.data[o];if(a.contentQueries){let c=t[o];a.contentQueries(1,c,o)}}}finally{lt(i)}}}function aw(n,e,t){_g()&&(yw(n,e,t,ci(t,e)),(t.flags&64)===64&&gv(n,e,t))}function cw(n,e,t=ci){let i=e.localNames;if(i!==null){let r=e.index+1;for(let s=0;s<i.length;s+=2){let o=i[s+1],a=o===-1?t(e,n):n[o];n[r++]=a}}}function fv(n){let e=n.tView;return e===null||e.incompleteFirstPass?n.tView=pv(1,null,n.template,n.decls,n.vars,n.directiveDefs,n.pipeDefs,n.viewQuery,n.schemas,n.consts,n.id):e}function pv(n,e,t,i,r,s,o,a,c,l,u){let d=as+i,h=d+r,m=lw(d,h),g=typeof l=="function"?l():l;return m[nt]={type:n,blueprint:m,template:t,queries:null,viewQuery:a,declTNode:e,data:m.slice().fill(null,d),bindingStartIndex:d,expandoStartIndex:h,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:typeof s=="function"?s():s,pipeRegistry:typeof o=="function"?o():o,firstChild:null,schemas:c,consts:g,incompleteFirstPass:!1,ssrId:u}}function lw(n,e){let t=[];for(let i=0;i<e;i++)t.push(i<n?null:ov);return t}function uw(n,e,t,i){let s=i.get(Fb,Zg)||t===Gn.ShadowDom,o=n.selectRootElement(e,s);return dw(o),o}function dw(n){hw(n)}var hw=()=>null;function fw(n,e,t,i,r,s){let o=e?e.injectorIndex:-1,a=0;return YM()&&(a|=128),{type:t,index:i,insertBeforeIndex:null,injectorIndex:o,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,componentOffset:-1,propertyBindings:null,flags:a,providerIndexes:0,value:r,attrs:s,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tView:null,next:null,prev:null,projectionNext:null,child:null,parent:e,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0}}function Tm(n,e,t,i,r){for(let s in e){if(!e.hasOwnProperty(s))continue;let o=e[s];if(o===void 0)continue;i??={};let a,c=Di.None;Array.isArray(o)?(a=o[0],c=o[1]):a=o;let l=s;if(r!==null){if(!r.hasOwnProperty(s))continue;l=r[s]}n===0?Cm(i,t,l,a,c):Cm(i,t,l,a)}return i}function Cm(n,e,t,i,r){let s;n.hasOwnProperty(t)?(s=n[t]).push(e,i):s=n[t]=[e,i],r!==void 0&&s.push(r)}function pw(n,e,t){let i=e.directiveStart,r=e.directiveEnd,s=n.data,o=e.attrs,a=[],c=null,l=null;for(let u=i;u<r;u++){let d=s[u],h=t?t.get(d):null,m=h?h.inputs:null,g=h?h.outputs:null;c=Tm(0,d.inputs,u,c,m),l=Tm(1,d.outputs,u,l,g);let y=c!==null&&o!==null&&!cd(e)?Cw(c,u,o):null;a.push(y)}c!==null&&(c.hasOwnProperty("class")&&(e.flags|=8),c.hasOwnProperty("style")&&(e.flags|=16)),e.initialInputs=a,e.inputs=c,e.outputs=l}function mw(n,e,t,i){if(_g()){let r=i===null?null:{"":-1},s=xw(n,t),o,a;s===null?o=a=null:[o,a]=s,o!==null&&mv(n,e,t,o,r,a),r&&Mw(t,i,r)}t.mergedAttrs=ad(t.mergedAttrs,t.attrs)}function mv(n,e,t,i,r,s){for(let l=0;l<i.length;l++)yb(Og(t,e),n,i[l].type);ww(t,n.data.length,i.length);for(let l=0;l<i.length;l++){let u=i[l];u.providersResolver&&u.providersResolver(u)}let o=!1,a=!1,c=uv(n,e,i.length,null);for(let l=0;l<i.length;l++){let u=i[l];t.mergedAttrs=ad(t.mergedAttrs,u.hostAttrs),Sw(n,t,e,c,u),bw(c,u,r),u.contentQueries!==null&&(t.flags|=4),(u.hostBindings!==null||u.hostAttrs!==null||u.hostVars!==0)&&(t.flags|=64);let d=u.type.prototype;!o&&(d.ngOnChanges||d.ngOnInit||d.ngDoCheck)&&((n.preOrderHooks??=[]).push(t.index),o=!0),!a&&(d.ngOnChanges||d.ngDoCheck)&&((n.preOrderCheckHooks??=[]).push(t.index),a=!0),c++}pw(n,t,s)}function gw(n,e,t,i,r){let s=r.hostBindings;if(s){let o=n.hostBindingOpCodes;o===null&&(o=n.hostBindingOpCodes=[]);let a=~e.index;vw(o)!=a&&o.push(a),o.push(t,i,s)}}function vw(n){let e=n.length;for(;e>0;){let t=n[--e];if(typeof t=="number"&&t<0)return t}return 0}function yw(n,e,t,i){let r=t.directiveStart,s=t.directiveEnd;pd(t)&&Ew(e,t,n.data[r+t.componentOffset]),n.firstCreatePass||Og(t,e),cs(i,e);let o=t.initialInputs;for(let a=r;a<s;a++){let c=n.data[a],l=go(e,n,a,t);if(cs(l,e),o!==null&&Tw(e,a-r,l,c,t,o),Mo(c)){let u=bo(t.index,e);u[Ri]=go(e,n,a,t)}}}function gv(n,e,t){let i=t.directiveStart,r=t.directiveEnd,s=t.index,o=ib();try{hr(s);for(let a=i;a<r;a++){let c=n.data[a],l=e[a];Lu(a),(c.hostBindings!==null||c.hostVars!==0||c.hostAttrs!==null)&&_w(c,l)}}finally{hr(-1),Lu(o)}}function _w(n,e){n.hostBindings!==null&&n.hostBindings(1,e)}function xw(n,e){let t=n.directiveRegistry,i=null,r=null;if(t)for(let s=0;s<t.length;s++){let o=t[s];if(uM(e,o.selectors,!1))if(i||(i=[]),Mo(o))if(o.findHostDirectiveDefs!==null){let a=[];r=r||new Map,o.findHostDirectiveDefs(o,a,r),i.unshift(...a,o);let c=a.length;Hu(n,e,c)}else i.unshift(o),Hu(n,e,0);else r=r||new Map,o.findHostDirectiveDefs?.(o,i,r),i.push(o)}return i===null?null:[i,r]}function Hu(n,e,t){e.componentOffset=t,(n.components??=[]).push(e.index)}function Mw(n,e,t){if(e){let i=n.localNames=[];for(let r=0;r<e.length;r+=2){let s=t[e[r+1]];if(s==null)throw new xe(-301,!1);i.push(e[r],s)}}}function bw(n,e,t){if(t){if(e.exportAs)for(let i=0;i<e.exportAs.length;i++)t[e.exportAs[i]]=n;Mo(e)&&(t[""]=n)}}function ww(n,e,t){n.flags|=1,n.directiveStart=e,n.directiveEnd=e+t,n.providerIndexes=e}function Sw(n,e,t,i,r){n.data[i]=r;let s=r.factory||(r.factory=rs(r.type,!0)),o=new mo(s,Mo(r),wo);n.blueprint[i]=o,t[i]=o,gw(n,e,i,uv(n,t,r.hostVars,ov),r)}function Ew(n,e,t){let i=ci(e,n),r=fv(t),s=n[Wn].rendererFactory,o=16;t.signals?o=4096:t.onPush&&(o=64);let a=Rd(n,Id(n,r,null,o,i,e,null,s.createRenderer(i,t),null,null,null));n[e.index]=a}function Tw(n,e,t,i,r,s){let o=s[e];if(o!==null)for(let a=0;a<o.length;){let c=o[a++],l=o[a++],u=o[a++],d=o[a++];cv(i,t,c,l,u,d)}}function Cw(n,e,t){let i=null,r=0;for(;r<t.length;){let s=t[r];if(s===0){r+=4;continue}else if(s===5){r+=2;continue}if(typeof s=="number")break;if(n.hasOwnProperty(s)){i===null&&(i=[]);let o=n[s];for(let a=0;a<o.length;a+=3)if(o[a]===e){i.push(s,o[a+1],o[a+2],t[r+1]);break}}r+=2}return i}function Aw(n,e,t,i){return[n,!0,0,e,null,i,null,t,null,null]}function vv(n,e){let t=n.contentQueries;if(t!==null){let i=lt(null);try{for(let r=0;r<t.length;r+=2){let s=t[r],o=t[r+1];if(o!==-1){let a=n.data[o];wg(s),a.contentQueries(2,e[o],o)}}}finally{lt(i)}}}function Rd(n,e){return n[ho]?n[mm][Dn]=e:n[ho]=e,n[mm]=e,e}function Gu(n,e,t){wg(0);let i=lt(null);try{e(n,t)}finally{lt(i)}}function Dw(n,e){let t=n[os],i=t?t.get(qn,null):null;i&&i.handleError(e)}function yv(n,e,t,i,r){for(let s=0;s<t.length;){let o=t[s++],a=t[s++],c=t[s++],l=e[o],u=n.data[o];cv(u,l,i,a,c,r)}}function Iw(n,e){let t=bo(e,n),i=t[nt];Rw(i,t);let r=t[oi];r!==null&&t[Wa]===null&&(t[Wa]=Td(r,t[os])),_v(i,t,t[Ri])}function Rw(n,e){for(let t=e.length;t<n.blueprint.length;t++)e.push(n.blueprint[t])}function _v(n,e,t){yd(e);try{let i=n.viewQuery;i!==null&&Gu(1,i,t);let r=n.template;r!==null&&dv(n,e,r,1,t),n.firstCreatePass&&(n.firstCreatePass=!1),e[ac]?.finishViewCreation(n),n.staticContentQueries&&vv(n,e),n.staticViewQueries&&Gu(2,n.viewQuery,t);let s=n.components;s!==null&&Nw(e,s)}catch(i){throw n.firstCreatePass&&(n.incompleteFirstPass=!0,n.firstCreatePass=!1),i}finally{e[Re]&=-5,_d()}}function Nw(n,e){for(let t=0;t<e.length;t++)Iw(n,e[t])}function Am(n,e){return!e||e.firstChild===null||Wg(n)}function Pw(n,e,t,i=!0){let r=e[nt];if(Hb(r,e,n,t),i){let o=zu(t,n),a=e[ri],c=Ad(a,n[dr]);c!==null&&Vb(r,n[Nn],a,e,c,o)}let s=e[Wa];s!==null&&s.firstChild!==null&&(s.firstChild=null)}function Za(n,e,t,i,r=!1){for(;t!==null;){let s=e[t.index];s!==null&&i.push(Ni(s)),ai(s)&&Lw(s,i);let o=t.type;if(o&8)Za(n,e,t.child,i);else if(o&32){let a=Cd(t,e),c;for(;c=a();)i.push(c)}else if(o&16){let a=iv(e,t);if(Array.isArray(a))i.push(...a);else{let c=po(e[jn]);Za(c[nt],c,a,i,!0)}}t=r?t.projectionNext:t.next}return i}function Lw(n,e){for(let t=xn;t<n.length;t++){let i=n[t],r=i[nt].firstChild;r!==null&&Za(i[nt],i,r,e)}n[dr]!==n[oi]&&e.push(n[dr])}var xv=[];function Ow(n){return n[ur]??Fw(n)}function Fw(n){let e=xv.pop()??Object.create(kw);return e.lView=n,e}function Uw(n){n.lView[ur]!==n&&(n.lView=null,xv.push(n))}var kw=xt(fe({},Ep),{consumerIsAlwaysLive:!0,consumerMarkedDirty:n=>{fo(n.lView)},consumerOnSignalRead(){this.lView[ur]=this}}),Mv=100;function bv(n,e=!0,t=0){let i=n[Wn],r=i.rendererFactory,s=!1;s||r.begin?.();try{Bw(n,t)}catch(o){throw e&&Dw(n,o),o}finally{s||(r.end?.(),i.inlineEffectRunner?.flush())}}function Bw(n,e){Wu(n,e);let t=0;for(;gd(n);){if(t===Mv)throw new xe(103,!1);t++,Wu(n,1)}}function Vw(n,e,t,i){let r=e[Re];if((r&256)===256)return;let s=!1;!s&&e[Wn].inlineEffectRunner?.flush(),yd(e);let o=null,a=null;!s&&zw(n)&&(a=Ow(e),o=Tp(a));try{vg(e),eb(n.bindingStartIndex),t!==null&&dv(n,e,t,2,i);let c=(r&3)===3;if(!s)if(c){let d=n.preOrderCheckHooks;d!==null&&Fa(e,d,null)}else{let d=n.preOrderHooks;d!==null&&Ua(e,d,0,null),vu(e,0)}if(Hw(e),wv(e,0),n.contentQueries!==null&&vv(n,e),!s)if(c){let d=n.contentCheckHooks;d!==null&&Fa(e,d)}else{let d=n.contentHooks;d!==null&&Ua(e,d,1),vu(e,1)}sw(n,e);let l=n.components;l!==null&&Ev(e,l,0);let u=n.viewQuery;if(u!==null&&Gu(2,u,i),!s)if(c){let d=n.viewCheckHooks;d!==null&&Fa(e,d)}else{let d=n.viewHooks;d!==null&&Ua(e,d,2),vu(e,2)}if(n.firstUpdatePass===!0&&(n.firstUpdatePass=!1),e[gu]){for(let d of e[gu])d();e[gu]=null}s||(e[Re]&=-73)}catch(c){throw fo(e),c}finally{a!==null&&(Cp(a,o),Uw(a)),_d()}}function zw(n){return n.type!==2}function wv(n,e){for(let t=$g(n);t!==null;t=qg(t))for(let i=xn;i<t.length;i++){let r=t[i];Sv(r,e)}}function Hw(n){for(let e=$g(n);e!==null;e=qg(e)){if(!(e[Re]&fd.HasTransplantedViews))continue;let t=e[$a];for(let i=0;i<t.length;i++){let r=t[i],s=r[zt];WM(r)}}}function Gw(n,e,t){let i=bo(e,n);Sv(i,t)}function Sv(n,e){md(n)&&Wu(n,e)}function Wu(n,e){let i=n[nt],r=n[Re],s=n[ur],o=!!(e===0&&r&16);if(o||=!!(r&64&&e===0),o||=!!(r&1024),o||=!!(s?.dirty&&Jl(s)),s&&(s.dirty=!1),n[Re]&=-9217,o)Vw(i,n,i.template,n[Ri]);else if(r&8192){wv(n,1);let a=i.components;a!==null&&Ev(n,a,1)}}function Ev(n,e,t){for(let i=0;i<e.length;i++)Gw(n,e[i],t)}function Tv(n){for(n[Wn].changeDetectionScheduler?.notify();n;){n[Re]|=64;let e=po(n);if(LM(n)&&!e)return n;n=e}return null}var ls=class{get rootNodes(){let e=this._lView,t=e[nt];return Za(t,e,t.firstChild,[])}constructor(e,t,i=!0){this._lView=e,this._cdRefInjectingView=t,this.notifyErrorHandler=i,this._appRef=null,this._attachedToViewContainer=!1}get context(){return this._lView[Ri]}set context(e){this._lView[Ri]=e}get destroyed(){return(this._lView[Re]&256)===256}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){let e=this._lView[zt];if(ai(e)){let t=e[ja],i=t?t.indexOf(this):-1;i>-1&&(Vu(e,i),Ha(t,i))}this._attachedToViewContainer=!1}tv(this._lView[nt],this._lView)}onDestroy(e){yg(this._lView,e)}markForCheck(){Tv(this._cdRefInjectingView||this._lView)}detach(){this._lView[Re]&=-129}reattach(){Pu(this._lView),this._lView[Re]|=128}detectChanges(){this._lView[Re]|=1024,bv(this._lView,this.notifyErrorHandler)}checkNoChanges(){}attachToViewContainerRef(){if(this._appRef)throw new xe(902,!1);this._attachedToViewContainer=!0}detachFromAppRef(){this._appRef=null,Qg(this._lView[nt],this._lView)}attachToAppRef(e){if(this._attachedToViewContainer)throw new xe(902,!1);this._appRef=e,Pu(this._lView)}};var DU=new RegExp(`^(\\d+)*(${Lb}|${Pb})*(.*)`);var Ww=()=>null;function Dm(n,e){return Ww(n,e)}var Ja=class{},ju=class{},Ka=class{};function jw(n){let e=Error(`No component factory found for ${cn(n)}.`);return e[$w]=n,e}var $w="ngComponent";var $u=class{resolveComponentFactory(e){throw jw(e)}},hc=(()=>{let e=class e{};e.NULL=new $u;let n=e;return n})(),vo=class{};var qw=(()=>{let e=class e{};e.\u0275prov=Me({token:e,providedIn:"root",factory:()=>null});let n=e;return n})(),bu={};var Im=new Set;function Nd(n){Im.has(n)||(Im.add(n),performance?.mark?.("mark_feature_usage",{detail:{feature:n}}))}function Rm(...n){}function Xw(){let n=typeof an.requestAnimationFrame=="function",e=an[n?"requestAnimationFrame":"setTimeout"],t=an[n?"cancelAnimationFrame":"clearTimeout"];if(typeof Zone<"u"&&e&&t){let i=e[Zone.__symbol__("OriginalDelegate")];i&&(e=i);let r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}var ft=class n{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:i=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new qt(!1),this.onMicrotaskEmpty=new qt(!1),this.onStable=new qt(!1),this.onError=new qt(!1),typeof Zone>"u")throw new xe(908,!1);Zone.assertZonePatched();let r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!i&&t,r.shouldCoalesceRunChangeDetection=i,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=Xw().nativeRequestAnimationFrame,Jw(r)}static isInAngularZone(){return typeof Zone<"u"&&Zone.current.get("isAngularZone")===!0}static assertInAngularZone(){if(!n.isInAngularZone())throw new xe(909,!1)}static assertNotInAngularZone(){if(n.isInAngularZone())throw new xe(909,!1)}run(e,t,i){return this._inner.run(e,t,i)}runTask(e,t,i,r){let s=this._inner,o=s.scheduleEventTask("NgZoneEvent: "+r,e,Yw,Rm,Rm);try{return s.runTask(o,t,i)}finally{s.cancelTask(o)}}runGuarded(e,t,i){return this._inner.runGuarded(e,t,i)}runOutsideAngular(e){return this._outer.run(e)}},Yw={};function Pd(n){if(n._nesting==0&&!n.hasPendingMicrotasks&&!n.isStable)try{n._nesting++,n.onMicrotaskEmpty.emit(null)}finally{if(n._nesting--,!n.hasPendingMicrotasks)try{n.runOutsideAngular(()=>n.onStable.emit(null))}finally{n.isStable=!0}}}function Zw(n){n.isCheckStableRunning||n.lastRequestAnimationFrameId!==-1||(n.lastRequestAnimationFrameId=n.nativeRequestAnimationFrame.call(an,()=>{n.fakeTopEventTask||(n.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{n.lastRequestAnimationFrameId=-1,qu(n),n.isCheckStableRunning=!0,Pd(n),n.isCheckStableRunning=!1},void 0,()=>{},()=>{})),n.fakeTopEventTask.invoke()}),qu(n))}function Jw(n){let e=()=>{Zw(n)};n._inner=n._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(t,i,r,s,o,a)=>{if(Kw(a))return t.invokeTask(r,s,o,a);try{return Nm(n),t.invokeTask(r,s,o,a)}finally{(n.shouldCoalesceEventChangeDetection&&s.type==="eventTask"||n.shouldCoalesceRunChangeDetection)&&e(),Pm(n)}},onInvoke:(t,i,r,s,o,a,c)=>{try{return Nm(n),t.invoke(r,s,o,a,c)}finally{n.shouldCoalesceRunChangeDetection&&e(),Pm(n)}},onHasTask:(t,i,r,s)=>{t.hasTask(r,s),i===r&&(s.change=="microTask"?(n._hasPendingMicrotasks=s.microTask,qu(n),Pd(n)):s.change=="macroTask"&&(n.hasPendingMacrotasks=s.macroTask))},onHandleError:(t,i,r,s)=>(t.handleError(r,s),n.runOutsideAngular(()=>n.onError.emit(s)),!1)})}function qu(n){n._hasPendingMicrotasks||(n.shouldCoalesceEventChangeDetection||n.shouldCoalesceRunChangeDetection)&&n.lastRequestAnimationFrameId!==-1?n.hasPendingMicrotasks=!0:n.hasPendingMicrotasks=!1}function Nm(n){n._nesting++,n.isStable&&(n.isStable=!1,n.onUnstable.emit(null))}function Pm(n){n._nesting--,Pd(n)}var Xu=class{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new qt,this.onMicrotaskEmpty=new qt,this.onStable=new qt,this.onError=new qt}run(e,t,i){return e.apply(t,i)}runGuarded(e,t,i){return e.apply(t,i)}runOutsideAngular(e){return e()}runTask(e,t,i,r){return e.apply(t,i)}};function Kw(n){return!Array.isArray(n)||n.length!==1?!1:n[0].data?.__ignore_ng_zone__===!0}function Qw(n="zone.js",e){return n==="noop"?new Xu:n==="zone.js"?new ft(e):n}var es=function(n){return n[n.EarlyRead=0]="EarlyRead",n[n.Write=1]="Write",n[n.MixedReadWrite=2]="MixedReadWrite",n[n.Read=3]="Read",n}(es||{}),eS={destroy(){}};function Ld(n,e){!e&&IM(Ld);let t=e?.injector??oe(Xn);if(!Ub(t))return eS;Nd("NgAfterNextRender");let i=t.get(Od),r=i.handler??=new Zu,s=e?.phase??es.MixedReadWrite,o=()=>{r.unregister(c),a()},a=t.get(bd).onDestroy(o),c=si(t,()=>new Yu(s,()=>{o(),n()}));return r.register(c),{destroy:o}}var Yu=class{constructor(e,t){this.phase=e,this.callbackFn=t,this.zone=oe(ft),this.errorHandler=oe(qn,{optional:!0}),oe(Ja,{optional:!0})?.notify(1)}invoke(){try{this.zone.runOutsideAngular(this.callbackFn)}catch(e){this.errorHandler?.handleError(e)}}},Zu=class{constructor(){this.executingCallbacks=!1,this.buckets={[es.EarlyRead]:new Set,[es.Write]:new Set,[es.MixedReadWrite]:new Set,[es.Read]:new Set},this.deferredCallbacks=new Set}register(e){(this.executingCallbacks?this.deferredCallbacks:this.buckets[e.phase]).add(e)}unregister(e){this.buckets[e.phase].delete(e),this.deferredCallbacks.delete(e)}execute(){this.executingCallbacks=!0;for(let e of Object.values(this.buckets))for(let t of e)t.invoke();this.executingCallbacks=!1;for(let e of this.deferredCallbacks)this.buckets[e.phase].add(e);this.deferredCallbacks.clear()}destroy(){for(let e of Object.values(this.buckets))e.clear();this.deferredCallbacks.clear()}},Od=(()=>{let e=class e{constructor(){this.handler=null,this.internalCallbacks=[]}execute(){this.executeInternalCallbacks(),this.handler?.execute()}executeInternalCallbacks(){let i=[...this.internalCallbacks];this.internalCallbacks.length=0;for(let r of i)r()}ngOnDestroy(){this.handler?.destroy(),this.handler=null,this.internalCallbacks.length=0}};e.\u0275prov=Me({token:e,providedIn:"root",factory:()=>new e});let n=e;return n})();function Ju(n,e,t){let i=t?n.styles:null,r=t?n.classes:null,s=0;if(e!==null)for(let o=0;o<e.length;o++){let a=e[o];if(typeof a=="number")s=a;else if(s==1)r=rm(r,a);else if(s==2){let c=a,l=e[++o];i=rm(i,c+": "+l+";")}}t?n.styles=i:n.stylesWithoutHost=i,t?n.classes=r:n.classesWithoutHost=r}var Qa=class extends hc{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){let t=Ii(e);return new us(t,this.ngModule)}};function Lm(n){let e=[];for(let t in n){if(!n.hasOwnProperty(t))continue;let i=n[t];i!==void 0&&e.push({propName:Array.isArray(i)?i[0]:i,templateName:t})}return e}function tS(n){let e=n.toLowerCase();return e==="svg"?kM:e==="math"?BM:null}var Ku=class{constructor(e,t){this.injector=e,this.parentInjector=t}get(e,t,i){i=sc(i);let r=this.injector.get(e,bu,i);return r!==bu||t===bu?r:this.parentInjector.get(e,t,i)}},us=class extends Ka{get inputs(){let e=this.componentDef,t=e.inputTransforms,i=Lm(e.inputs);if(t!==null)for(let r of i)t.hasOwnProperty(r.propName)&&(r.transform=t[r.propName]);return i}get outputs(){return Lm(this.componentDef.outputs)}constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=pM(e.selectors),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}create(e,t,i,r){let s=lt(null);try{r=r||this.ngModule;let o=r instanceof ln?r:r?.injector;o&&this.componentDef.getStandaloneInjector!==null&&(o=this.componentDef.getStandaloneInjector(o)||o);let a=o?new Ku(e,o):e,c=a.get(vo,null);if(c===null)throw new xe(407,!1);let l=a.get(qw,null),u=a.get(Od,null),d=a.get(Ja,null),h={rendererFactory:c,sanitizer:l,inlineEffectRunner:null,afterRenderEventManager:u,changeDetectionScheduler:d},m=c.createRenderer(null,this.componentDef),g=this.componentDef.selectors[0][0]||"div",y=i?uw(m,i,this.componentDef.encapsulation,a):Kg(m,g,tS(g)),p=512;this.componentDef.signals?p|=4096:this.componentDef.onPush||(p|=16);let f=null;y!==null&&(f=Td(y,a,!0));let S=pv(0,null,null,1,0,null,null,null,null,null,null),x=Id(null,S,null,p,null,null,h,m,a,null,f);yd(x);let w,I;try{let C=this.componentDef,T,k=null;C.findHostDirectiveDefs?(T=[],k=new Map,C.findHostDirectiveDefs(C,T,k),T.push(C)):T=[C];let K=nS(x,y),_=iS(K,y,C,T,x,h,m);I=HM(S,as),y&&oS(m,C,y,i),t!==void 0&&aS(I,this.ngContentSelectors,t),w=sS(_,C,T,k,x,[cS]),_v(S,x,null)}finally{_d()}return new Qu(this.componentType,w,wd(I,x),x,I)}finally{lt(s)}}},Qu=class extends ju{constructor(e,t,i,r,s){super(),this.location=i,this._rootLView=r,this._tNode=s,this.previousInputValues=null,this.instance=t,this.hostView=this.changeDetectorRef=new ls(r,void 0,!1),this.componentType=e}setInput(e,t){let i=this._tNode.inputs,r;if(i!==null&&(r=i[e])){if(this.previousInputValues??=new Map,this.previousInputValues.has(e)&&Object.is(this.previousInputValues.get(e),t))return;let s=this._rootLView;yv(s[nt],s,r,e,t),this.previousInputValues.set(e,t);let o=bo(this._tNode.index,s);Tv(o)}}get injector(){return new lr(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}};function nS(n,e){let t=n[nt],i=as;return n[i]=e,lv(t,i,2,"#host",null)}function iS(n,e,t,i,r,s,o){let a=r[nt];rS(i,n,e,o);let c=null;e!==null&&(c=Td(e,r[os]));let l=s.rendererFactory.createRenderer(e,t),u=16;t.signals?u=4096:t.onPush&&(u=64);let d=Id(r,fv(t),null,u,r[n.index],n,s,l,null,null,c);return a.firstCreatePass&&Hu(a,n,i.length-1),Rd(r,d),r[n.index]=d}function rS(n,e,t,i){for(let r of n)e.mergedAttrs=ad(e.mergedAttrs,r.hostAttrs);e.mergedAttrs!==null&&(Ju(e,e.mergedAttrs,!0),t!==null&&sv(i,t,e))}function sS(n,e,t,i,r,s){let o=Li(),a=r[nt],c=ci(o,r);mv(a,r,o,t,null,i);for(let u=0;u<t.length;u++){let d=o.directiveStart+u,h=go(r,a,d,o);cs(h,r)}gv(a,r,o),c&&cs(c,r);let l=go(r,a,o.directiveStart+o.componentOffset,o);if(n[Ri]=r[Ri]=l,s!==null)for(let u of s)u(l,e);return hv(a,o,r),l}function oS(n,e,t,i){if(i)Cu(n,t,["ng-version","17.3.1"]);else{let{attrs:r,classes:s}=mM(e.selectors[0]);r&&Cu(n,t,r),s&&s.length>0&&rv(n,t,s.join(" "))}}function aS(n,e,t){let i=n.projection=[];for(let r=0;r<e.length;r++){let s=t[r];i.push(s!=null?Array.from(s):null)}}function cS(){let n=Li();Ig($n()[nt],n)}var fc=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=lS;let n=e;return n})();function lS(){let n=Li();return dS(n,$n())}var uS=fc,Cv=class extends uS{constructor(e,t,i){super(),this._lContainer=e,this._hostTNode=t,this._hostLView=i}get element(){return wd(this._hostTNode,this._hostLView)}get injector(){return new lr(this._hostTNode,this._hostLView)}get parentInjector(){let e=xd(this._hostTNode,this._hostLView);if(Ng(e)){let t=Xa(e,this._hostLView),i=qa(e),r=t[nt].data[i+8];return new lr(r,t)}else return new lr(null,this._hostLView)}clear(){for(;this.length>0;)this.remove(this.length-1)}get(e){let t=Om(this._lContainer);return t!==null&&t[e]||null}get length(){return this._lContainer.length-xn}createEmbeddedView(e,t,i){let r,s;typeof i=="number"?r=i:i!=null&&(r=i.index,s=i.injector);let o=Dm(this._lContainer,e.ssrId),a=e.createEmbeddedViewImpl(t||{},s,o);return this.insertImpl(a,r,Am(this._hostTNode,o)),a}createComponent(e,t,i,r,s){let o=e&&!NM(e),a;if(o)a=t;else{let g=t||{};a=g.index,i=g.injector,r=g.projectableNodes,s=g.environmentInjector||g.ngModuleRef}let c=o?e:new us(Ii(e)),l=i||this.parentInjector;if(!s&&c.ngModule==null){let y=(o?l:this.parentInjector).get(ln,null);y&&(s=y)}let u=Ii(c.componentType??{}),d=Dm(this._lContainer,u?.id??null),h=d?.firstChild??null,m=c.create(l,r,h,s);return this.insertImpl(m.hostView,a,Am(this._hostTNode,d)),m}insert(e,t){return this.insertImpl(e,t,!0)}insertImpl(e,t,i){let r=e._lView;if(GM(r)){let a=this.indexOf(e);if(a!==-1)this.detach(a);else{let c=r[zt],l=new Cv(c,c[Nn],c[zt]);l.detach(l.indexOf(e))}}let s=this._adjustIndex(t),o=this._lContainer;return Pw(o,r,s,i),e.attachToViewContainerRef(),Ym(wu(o),s,e),e}move(e,t){return this.insert(e,t)}indexOf(e){let t=Om(this._lContainer);return t!==null?t.indexOf(e):-1}remove(e){let t=this._adjustIndex(e,-1),i=Vu(this._lContainer,t);i&&(Ha(wu(this._lContainer),t),tv(i[nt],i))}detach(e){let t=this._adjustIndex(e,-1),i=Vu(this._lContainer,t);return i&&Ha(wu(this._lContainer),t)!=null?new ls(i):null}_adjustIndex(e,t=0){return e??this.length+t}};function Om(n){return n[ja]}function wu(n){return n[ja]||(n[ja]=[])}function dS(n,e){let t,i=e[n.index];return ai(i)?t=i:(t=Aw(i,e,null,n),e[n.index]=t,Rd(e,t)),fS(t,e,n,i),new Cv(t,n,e)}function hS(n,e){let t=n[ri],i=t.createComment(""),r=ci(e,n),s=Ad(t,r);return Ya(t,s,i,Yb(t,r),!1),i}var fS=pS;function pS(n,e,t,i){if(n[dr])return;let r;t.type&8?r=Ni(i):r=hS(e,t),n[dr]=r}function mS(n){let e=[],t=new Map;function i(r){let s=t.get(r);if(!s){let o=n(r);t.set(r,s=o.then(_S))}return s}return ec.forEach((r,s)=>{let o=[];r.templateUrl&&o.push(i(r.templateUrl).then(l=>{r.template=l}));let a=typeof r.styles=="string"?[r.styles]:r.styles||[];if(r.styles=a,r.styleUrl&&r.styleUrls?.length)throw new Error("@Component cannot define both `styleUrl` and `styleUrls`. Use `styleUrl` if the component has one stylesheet, or `styleUrls` if it has multiple");if(r.styleUrls?.length){let l=r.styles.length,u=r.styleUrls;r.styleUrls.forEach((d,h)=>{a.push(""),o.push(i(d).then(m=>{a[l+h]=m,u.splice(u.indexOf(d),1),u.length==0&&(r.styleUrls=void 0)}))})}else r.styleUrl&&o.push(i(r.styleUrl).then(l=>{a.push(l),r.styleUrl=void 0}));let c=Promise.all(o).then(()=>xS(s));e.push(c)}),vS(),Promise.all(e).then(()=>{})}var ec=new Map,gS=new Set;function vS(){let n=ec;return ec=new Map,n}function yS(){return ec.size===0}function _S(n){return typeof n=="string"?n:n.text()}function xS(n){gS.delete(n)}var Pi=class{},yo=class{};var tc=class extends Pi{constructor(e,t,i){super(),this._parent=t,this._bootstrapComponents=[],this.destroyCbs=[],this.componentFactoryResolver=new Qa(this);let r=ig(e);this._bootstrapComponents=Jg(r.bootstrap),this._r3Injector=Hg(e,t,[{provide:Pi,useValue:this},{provide:hc,useValue:this.componentFactoryResolver},...i],cn(e),new Set(["environment"])),this._r3Injector.resolveInjectorInitializers(),this.instance=this._r3Injector.get(e)}get injector(){return this._r3Injector}destroy(){let e=this._r3Injector;!e.destroyed&&e.destroy(),this.destroyCbs.forEach(t=>t()),this.destroyCbs=null}onDestroy(e){this.destroyCbs.push(e)}},nc=class extends yo{constructor(e){super(),this.moduleType=e}create(e){return new tc(this.moduleType,e,[])}};function MS(n,e,t){return new tc(n,e,t)}var ed=class extends Pi{constructor(e){super(),this.componentFactoryResolver=new Qa(this),this.instance=null;let t=new uo([...e.providers,{provide:Pi,useValue:this},{provide:hc,useValue:this.componentFactoryResolver}],e.parent||dd(),e.debugName,new Set(["environment"]));this.injector=t,e.runEnvironmentInitializers&&t.resolveInjectorInitializers()}destroy(){this.injector.destroy()}onDestroy(e){this.injector.onDestroy(e)}};function pc(n,e,t=null){return new ed({providers:n,parent:e,debugName:t,runEnvironmentInitializers:!0}).injector}var mc=(()=>{let e=class e{constructor(){this.taskId=0,this.pendingTasks=new Set,this.hasPendingTasks=new Ut(!1)}get _hasPendingTasks(){return this.hasPendingTasks.value}add(){this._hasPendingTasks||this.hasPendingTasks.next(!0);let i=this.taskId++;return this.pendingTasks.add(i),i}remove(i){this.pendingTasks.delete(i),this.pendingTasks.size===0&&this._hasPendingTasks&&this.hasPendingTasks.next(!1)}ngOnDestroy(){this.pendingTasks.clear(),this._hasPendingTasks&&this.hasPendingTasks.next(!1)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function bS(n){return(n.flags&32)===32}function Fm(n,e,t,i,r){let s=e.inputs,o=r?"class":"style";yv(n,t,s[o],o,i)}function wS(n,e,t,i,r,s){let o=e.consts,a=vm(o,r),c=lv(e,n,2,i,a);return mw(e,t,c,vm(o,s)),c.attrs!==null&&Ju(c,c.attrs,!1),c.mergedAttrs!==null&&Ju(c,c.mergedAttrs,!0),e.queries!==null&&e.queries.elementStart(e,c),c}function gc(n,e,t,i){let r=$n(),s=xg(),o=as+n,a=r[ri],c=s.firstCreatePass?wS(o,s,r,e,t,i):s.data[o],l=SS(s,r,c,a,e,n);r[o]=l;let u=PM(c);return vd(c,!0),sv(a,l,c),!bS(c)&&ab()&&Qb(s,r,l,c),$M()===0&&cs(l,r),qM(),u&&(aw(s,r,c),hv(s,c,r)),i!==null&&cw(r,c),gc}function vc(){let n=Li();bg()?QM():(n=n.parent,vd(n,!1));let e=n;ZM(e)&&JM(),XM();let t=xg();return t.firstCreatePass&&(Ig(t,n),hg(n)&&t.queries.elementEnd(n)),e.classesWithoutHost!=null&&hb(e)&&Fm(t,e,$n(),e.classesWithoutHost,!0),e.stylesWithoutHost!=null&&fb(e)&&Fm(t,e,$n(),e.stylesWithoutHost,!1),vc}function pr(n,e,t,i){return gc(n,e,t,i),vc(),pr}var SS=(n,e,t,i,r,s)=>(cb(!0),Kg(i,r,ob()));var ic="en-US";var ES=ic;function TS(n){typeof n=="string"&&(ES=n.toLowerCase().replace(/_/g,"-"))}var CS=(()=>{let e=class e{constructor(i){this._injector=i,this.cachedInjectors=new Map}getOrCreateStandaloneInjector(i){if(!i.standalone)return null;if(!this.cachedInjectors.has(i)){let r=og(!1,i.type),s=r.length>0?pc([r],this._injector,`Standalone[${i.type.name}]`):null;this.cachedInjectors.set(i,s)}return this.cachedInjectors.get(i)}ngOnDestroy(){try{for(let i of this.cachedInjectors.values())i!==null&&i.destroy()}finally{this.cachedInjectors.clear()}}};e.\u0275prov=Me({token:e,providedIn:"environment",factory:()=>new e(we(ln))});let n=e;return n})();function Av(n){Nd("NgStandalone"),n.getStandaloneInjector=e=>e.get(CS).getOrCreateStandaloneInjector(n)}var La=null;function AS(n){La!==null&&(n.defaultEncapsulation!==La.defaultEncapsulation||n.preserveWhitespaces!==La.preserveWhitespaces)||(La=n)}var yc=(()=>{let e=class e{log(i){console.log(i)}warn(i){console.warn(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();var Fd=new Ne(""),So=new Ne(""),_c=(()=>{let e=class e{constructor(i,r,s){this._ngZone=i,this.registry=r,this._pendingCount=0,this._isZoneStable=!0,this._callbacks=[],this.taskTrackingZone=null,Ud||(DS(s),s.addToWindow(r)),this._watchAngularEvents(),i.run(()=>{this.taskTrackingZone=typeof Zone>"u"?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{ft.assertNotInAngularZone(),queueMicrotask(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&this._pendingCount===0&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())queueMicrotask(()=>{for(;this._callbacks.length!==0;){let i=this._callbacks.pop();clearTimeout(i.timeoutId),i.doneCb()}});else{let i=this.getPendingTasks();this._callbacks=this._callbacks.filter(r=>r.updateCb&&r.updateCb(i)?(clearTimeout(r.timeoutId),!1):!0)}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(i=>({source:i.source,creationLocation:i.creationLocation,data:i.data})):[]}addCallback(i,r,s){let o=-1;r&&r>0&&(o=setTimeout(()=>{this._callbacks=this._callbacks.filter(a=>a.timeoutId!==o),i()},r)),this._callbacks.push({doneCb:i,timeoutId:o,updateCb:s})}whenStable(i,r,s){if(s&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');this.addCallback(i,r,s),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}registerApplication(i){this.registry.registerApplication(i,this)}unregisterApplication(i){this.registry.unregisterApplication(i)}findProviders(i,r,s){return[]}};e.\u0275fac=function(r){return new(r||e)(we(ft),we(xc),we(So))},e.\u0275prov=Me({token:e,factory:e.\u0275fac});let n=e;return n})(),xc=(()=>{let e=class e{constructor(){this._applications=new Map}registerApplication(i,r){this._applications.set(i,r)}unregisterApplication(i){this._applications.delete(i)}unregisterAllApplications(){this._applications.clear()}getTestability(i){return this._applications.get(i)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(i,r=!0){return Ud?.findTestabilityInTree(this,i,r)??null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})();function DS(n){Ud=n}var Ud;function Eo(n){return!!n&&typeof n.then=="function"}function Dv(n){return!!n&&typeof n.subscribe=="function"}var Mc=new Ne(""),Iv=(()=>{let e=class e{constructor(){this.initialized=!1,this.done=!1,this.donePromise=new Promise((i,r)=>{this.resolve=i,this.reject=r}),this.appInits=oe(Mc,{optional:!0})??[]}runInitializers(){if(this.initialized)return;let i=[];for(let s of this.appInits){let o=s();if(Eo(o))i.push(o);else if(Dv(o)){let a=new Promise((c,l)=>{o.subscribe({complete:c,error:l})});i.push(a)}}let r=()=>{this.done=!0,this.resolve()};Promise.all(i).then(()=>{r()}).catch(s=>{this.reject(s)}),i.length===0&&r(),this.initialized=!0}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),kd=new Ne("");function IS(){Dp(()=>{throw new xe(600,!1)})}function RS(n){return n.isBoundToModule}function NS(n,e,t){try{let i=t();return Eo(i)?i.catch(r=>{throw e.runOutsideAngular(()=>n.handleError(r)),r}):i}catch(i){throw e.runOutsideAngular(()=>n.handleError(i)),i}}function Rv(n,e){return Array.isArray(e)?e.reduce(Rv,n):fe(fe({},n),e)}var fs=(()=>{let e=class e{constructor(){this._bootstrapListeners=[],this._runningTick=!1,this._destroyed=!1,this._destroyListeners=[],this._views=[],this.internalErrorHandler=oe(Gg),this.afterRenderEffectManager=oe(Od),this.externalTestViews=new Set,this.beforeRender=new $t,this.afterTick=new $t,this.componentTypes=[],this.components=[],this.isStable=oe(mc).hasPendingTasks.pipe(tt(i=>!i)),this._injector=oe(ln)}get destroyed(){return this._destroyed}get injector(){return this._injector}bootstrap(i,r){let s=i instanceof Ka;if(!this._injector.get(Iv).done){let m=!s&&ng(i),g=!1;throw new xe(405,g)}let a;s?a=i:a=this._injector.get(hc).resolveComponentFactory(i),this.componentTypes.push(a.componentType);let c=RS(a)?void 0:this._injector.get(Pi),l=r||a.selector,u=a.create(Xn.NULL,[],l,c),d=u.location.nativeElement,h=u.injector.get(Fd,null);return h?.registerApplication(d),u.onDestroy(()=>{this.detachView(u.hostView),Ba(this.components,u),h?.unregisterApplication(d)}),this._loadComponent(u),u}tick(){this._tick(!0)}_tick(i){if(this._runningTick)throw new xe(101,!1);let r=lt(null);try{this._runningTick=!0,this.detectChangesInAttachedViews(i)}catch(s){this.internalErrorHandler(s)}finally{this.afterTick.next(),this._runningTick=!1,lt(r)}}detectChangesInAttachedViews(i){let r=0,s=this.afterRenderEffectManager;for(;;){if(r===Mv)throw new xe(103,!1);if(i){let o=r===0;this.beforeRender.next(o);for(let{_lView:a,notifyErrorHandler:c}of this._views)PS(a,o,c)}if(r++,s.executeInternalCallbacks(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>td(o))&&(s.execute(),![...this.externalTestViews.keys(),...this._views].some(({_lView:o})=>td(o))))break}}attachView(i){let r=i;this._views.push(r),r.attachToAppRef(this)}detachView(i){let r=i;Ba(this._views,r),r.detachFromAppRef()}_loadComponent(i){this.attachView(i.hostView),this.tick(),this.components.push(i);let r=this._injector.get(kd,[]);[...this._bootstrapListeners,...r].forEach(s=>s(i))}ngOnDestroy(){if(!this._destroyed)try{this._destroyListeners.forEach(i=>i()),this._views.slice().forEach(i=>i.destroy())}finally{this._destroyed=!0,this._views=[],this._bootstrapListeners=[],this._destroyListeners=[]}}onDestroy(i){return this._destroyListeners.push(i),()=>Ba(this._destroyListeners,i)}destroy(){if(this._destroyed)throw new xe(406,!1);let i=this._injector;i.destroy&&!i.destroyed&&i.destroy()}get viewCount(){return this._views.length}warnIfDestroyed(){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function Ba(n,e){let t=n.indexOf(e);t>-1&&n.splice(t,1)}function PS(n,e,t){!e&&!td(n)||LS(n,t,e)}function td(n){return gd(n)}function LS(n,e,t){let i;t?(i=0,n[Re]|=1024):n[Re]&64?i=0:i=1,bv(n,e,i)}var nd=class{constructor(e,t){this.ngModuleFactory=e,this.componentFactories=t}},bc=(()=>{let e=class e{compileModuleSync(i){return new nc(i)}compileModuleAsync(i){return Promise.resolve(this.compileModuleSync(i))}compileModuleAndAllComponentsSync(i){let r=this.compileModuleSync(i),s=ig(i),o=Jg(s.declarations).reduce((a,c)=>{let l=Ii(c);return l&&a.push(new us(l)),a},[]);return new nd(r,o)}compileModuleAndAllComponentsAsync(i){return Promise.resolve(this.compileModuleAndAllComponentsSync(i))}clearCache(){}clearCacheFor(i){}getModuleId(i){}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),OS=new Ne("");function FS(n,e,t){let i=new nc(t);return Promise.resolve(i)}function Um(n){for(let e=n.length-1;e>=0;e--)if(n[e]!==void 0)return n[e]}var US=(()=>{let e=class e{constructor(){this.zone=oe(ft),this.applicationRef=oe(fs)}initialize(){this._onMicrotaskEmptySubscription||(this._onMicrotaskEmptySubscription=this.zone.onMicrotaskEmpty.subscribe({next:()=>{this.zone.run(()=>{this.applicationRef.tick()})}}))}ngOnDestroy(){this._onMicrotaskEmptySubscription?.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function kS(n){return[{provide:ft,useFactory:n},{provide:ss,multi:!0,useFactory:()=>{let e=oe(US,{optional:!0});return()=>e.initialize()}},{provide:ss,multi:!0,useFactory:()=>{let e=oe(zS);return()=>{e.initialize()}}},{provide:Gg,useFactory:BS}]}function BS(){let n=oe(ft),e=oe(qn);return t=>n.runOutsideAngular(()=>e.handleError(t))}function VS(n){return{enableLongStackTrace:!1,shouldCoalesceEventChangeDetection:n?.eventCoalescing??!1,shouldCoalesceRunChangeDetection:n?.runCoalescing??!1}}var zS=(()=>{let e=class e{constructor(){this.subscription=new Ct,this.initialized=!1,this.zone=oe(ft),this.pendingTasks=oe(mc)}initialize(){if(this.initialized)return;this.initialized=!0;let i=null;!this.zone.isStable&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(i=this.pendingTasks.add()),this.zone.runOutsideAngular(()=>{this.subscription.add(this.zone.onStable.subscribe(()=>{ft.assertNotInAngularZone(),queueMicrotask(()=>{i!==null&&!this.zone.hasPendingMacrotasks&&!this.zone.hasPendingMicrotasks&&(this.pendingTasks.remove(i),i=null)})}))}),this.subscription.add(this.zone.onUnstable.subscribe(()=>{ft.assertInAngularZone(),i??=this.pendingTasks.add()}))}ngOnDestroy(){this.subscription.unsubscribe()}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function HS(){return typeof $localize<"u"&&$localize.locale||ic}var Bd=new Ne("",{providedIn:"root",factory:()=>oe(Bd,$e.Optional|$e.SkipSelf)||HS()});var Nv=new Ne(""),Pv=(()=>{let e=class e{constructor(i){this._injector=i,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(i,r){let s=Qw(r?.ngZone,VS({eventCoalescing:r?.ngZoneEventCoalescing,runCoalescing:r?.ngZoneRunCoalescing}));return s.run(()=>{let o=MS(i.moduleType,this.injector,kS(()=>s)),a=o.injector.get(qn,null);return s.runOutsideAngular(()=>{let c=s.onError.subscribe({next:l=>{a.handleError(l)}});o.onDestroy(()=>{Ba(this._modules,o),c.unsubscribe()})}),NS(a,s,()=>{let c=o.injector.get(Iv);return c.runInitializers(),c.donePromise.then(()=>{let l=o.injector.get(Bd,ic);return TS(l||ic),this._moduleDoBootstrap(o),o})})})}bootstrapModule(i,r=[]){let s=Rv({},r);return FS(this.injector,s,i).then(o=>this.bootstrapModuleFactory(o,s))}_moduleDoBootstrap(i){let r=i.injector.get(fs);if(i._bootstrapComponents.length>0)i._bootstrapComponents.forEach(s=>r.bootstrap(s));else if(i.instance.ngDoBootstrap)i.instance.ngDoBootstrap(r);else throw new xe(-403,!1);this._modules.push(i)}onDestroy(i){this._destroyListeners.push(i)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new xe(404,!1);this._modules.slice().forEach(r=>r.destroy()),this._destroyListeners.forEach(r=>r());let i=this._injector.get(Nv,null);i&&(i.forEach(r=>r()),i.clear()),this._destroyed=!0}get destroyed(){return this._destroyed}};e.\u0275fac=function(r){return new(r||e)(we(Xn))},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"platform"});let n=e;return n})(),ao=null,Lv=new Ne("");function GS(n){if(ao&&!ao.get(Lv,!1))throw new xe(400,!1);IS(),ao=n;let e=n.get(Pv);return $S(n),e}function Vd(n,e,t=[]){let i=`Platform: ${e}`,r=new Ne(i);return(s=[])=>{let o=Ov();if(!o||o.injector.get(Lv,!1)){let a=[...t,...s,{provide:r,useValue:!0}];n?n(a):GS(WS(a,i))}return jS(r)}}function WS(n=[],e){return Xn.create({name:e,providers:[{provide:oc,useValue:"platform"},{provide:Nv,useValue:new Set([()=>ao=null])},...n]})}function jS(n){let e=Ov();if(!e)throw new xe(401,!1);return e}function Ov(){return ao?.get(Pv)??null}function $S(n){n.get(Sd,null)?.forEach(t=>t())}var To=(()=>{let e=class e{};e.__NG_ELEMENT_ID__=qS;let n=e;return n})();function qS(n){return XS(Li(),$n(),(n&16)===16)}function XS(n,e,t){if(pd(n)&&!t){let i=bo(n.index,e);return new ls(i,i)}else if(n.type&47){let i=e[jn];return new ls(i,e)}return null}var Fv=Vd(null,"core",[]),Uv=(()=>{let e=class e{constructor(i){}};e.\u0275fac=function(r){return new(r||e)(we(fs))},e.\u0275mod=Rn({type:e}),e.\u0275inj=In({});let n=e;return n})();function kv(n){let e=Ii(n);if(!e)return null;let t=new us(e);return{get selector(){return t.selector},get type(){return t.componentType},get inputs(){return t.inputs},get outputs(){return t.outputs},get ngContentSelectors(){return t.ngContentSelectors},get isStandalone(){return e.standalone},get isSignal(){return e.signals}}}var Gv=null;function gr(){return Gv}function Wv(n){Gv??=n}var wc=class{};var Jt=new Ne(""),Gd=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:()=>oe(QS),providedIn:"platform"});let n=e;return n})(),jv=new Ne(""),QS=(()=>{let e=class e extends Gd{constructor(){super(),this._doc=oe(Jt),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return gr().getBaseHref(this._doc)}onPopState(i){let r=gr().getGlobalEventTarget(this._doc,"window");return r.addEventListener("popstate",i,!1),()=>r.removeEventListener("popstate",i)}onHashChange(i){let r=gr().getGlobalEventTarget(this._doc,"window");return r.addEventListener("hashchange",i,!1),()=>r.removeEventListener("hashchange",i)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(i){this._location.pathname=i}pushState(i,r,s){this._history.pushState(i,r,s)}replaceState(i,r,s){this._history.replaceState(i,r,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(i=0){this._history.go(i)}getState(){return this._history.state}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:()=>new e,providedIn:"platform"});let n=e;return n})();function Wd(n,e){if(n.length==0)return e;if(e.length==0)return n;let t=0;return n.endsWith("/")&&t++,e.startsWith("/")&&t++,t==2?n+e.substring(1):t==1?n+e:n+"/"+e}function Bv(n){let e=n.match(/#|\?|$/),t=e&&e.index||n.length,i=t-(n[t-1]==="/"?1:0);return n.slice(0,i)+n.slice(t)}function li(n){return n&&n[0]!=="?"?"?"+n:n}var vr=(()=>{let e=class e{historyGo(i){throw new Error("")}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:()=>oe(jd),providedIn:"root"});let n=e;return n})(),$v=new Ne(""),jd=(()=>{let e=class e extends vr{constructor(i,r){super(),this._platformLocation=i,this._removeListenerFns=[],this._baseHref=r??this._platformLocation.getBaseHrefFromDOM()??oe(Jt).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}prepareExternalUrl(i){return Wd(this._baseHref,i)}path(i=!1){let r=this._platformLocation.pathname+li(this._platformLocation.search),s=this._platformLocation.hash;return s&&i?`${r}${s}`:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+li(o));this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+li(o));this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(we(Gd),we($v,8))},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),qv=(()=>{let e=class e extends vr{constructor(i,r){super(),this._platformLocation=i,this._baseHref="",this._removeListenerFns=[],r!=null&&(this._baseHref=r)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(i){this._removeListenerFns.push(this._platformLocation.onPopState(i),this._platformLocation.onHashChange(i))}getBaseHref(){return this._baseHref}path(i=!1){let r=this._platformLocation.hash??"#";return r.length>0?r.substring(1):r}prepareExternalUrl(i){let r=Wd(this._baseHref,i);return r.length>0?"#"+r:r}pushState(i,r,s,o){let a=this.prepareExternalUrl(s+li(o));a.length==0&&(a=this._platformLocation.pathname),this._platformLocation.pushState(i,r,a)}replaceState(i,r,s,o){let a=this.prepareExternalUrl(s+li(o));a.length==0&&(a=this._platformLocation.pathname),this._platformLocation.replaceState(i,r,a)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(i=0){this._platformLocation.historyGo?.(i)}};e.\u0275fac=function(r){return new(r||e)(we(Gd),we($v,8))},e.\u0275prov=Me({token:e,factory:e.\u0275fac});let n=e;return n})(),ps=(()=>{let e=class e{constructor(i){this._subject=new qt,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=i;let r=this._locationStrategy.getBaseHref();this._basePath=nE(Bv(Vv(r))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(i=!1){return this.normalize(this._locationStrategy.path(i))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(i,r=""){return this.path()==this.normalize(i+li(r))}normalize(i){return e.stripTrailingSlash(tE(this._basePath,Vv(i)))}prepareExternalUrl(i){return i&&i[0]!=="/"&&(i="/"+i),this._locationStrategy.prepareExternalUrl(i)}go(i,r="",s=null){this._locationStrategy.pushState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+li(r)),s)}replaceState(i,r="",s=null){this._locationStrategy.replaceState(s,"",i,r),this._notifyUrlChangeListeners(this.prepareExternalUrl(i+li(r)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(i=0){this._locationStrategy.historyGo?.(i)}onUrlChange(i){return this._urlChangeListeners.push(i),this._urlChangeSubscription??=this.subscribe(r=>{this._notifyUrlChangeListeners(r.url,r.state)}),()=>{let r=this._urlChangeListeners.indexOf(i);this._urlChangeListeners.splice(r,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(i="",r){this._urlChangeListeners.forEach(s=>s(i,r))}subscribe(i,r,s){return this._subject.subscribe({next:i,error:r,complete:s})}};e.normalizeQueryParams=li,e.joinWithSlash=Wd,e.stripTrailingSlash=Bv,e.\u0275fac=function(r){return new(r||e)(we(vr))},e.\u0275prov=Me({token:e,factory:()=>eE(),providedIn:"root"});let n=e;return n})();function eE(){return new ps(we(vr))}function tE(n,e){if(!n||!e.startsWith(n))return e;let t=e.substring(n.length);return t===""||["/",";","?","#"].includes(t[0])?t:e}function Vv(n){return n.replace(/\/index.html$/,"")}function nE(n){if(new RegExp("^(https?:)?//").test(n)){let[,t]=n.split(/\/\/[^\/]+/);return t}return n}function Xv(n,e){e=encodeURIComponent(e);for(let t of n.split(";")){let i=t.indexOf("="),[r,s]=i==-1?[t,""]:[t.slice(0,i),t.slice(i+1)];if(r.trim()===e)return decodeURIComponent(s)}return null}var Yv=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Rn({type:e}),e.\u0275inj=In({});let n=e;return n})(),$d="browser",iE="server";function rE(n){return n===$d}function qd(n){return n===iE}var Zv=(()=>{let e=class e{};e.\u0275prov=Me({token:e,providedIn:"root",factory:()=>rE(oe(Oi))?new zd(oe(Jt),window):new Hd});let n=e;return n})(),zd=class{constructor(e,t){this.document=e,this.window=t,this.offset=()=>[0,0]}setOffset(e){Array.isArray(e)?this.offset=()=>e:this.offset=e}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(e){this.window.scrollTo(e[0],e[1])}scrollToAnchor(e){let t=sE(this.document,e);t&&(this.scrollToElement(t),t.focus())}setHistoryScrollRestoration(e){this.window.history.scrollRestoration=e}scrollToElement(e){let t=e.getBoundingClientRect(),i=t.left+this.window.pageXOffset,r=t.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(i-s[0],r-s[1])}};function sE(n,e){let t=n.getElementById(e)||n.getElementsByName(e)[0];if(t)return t;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let i=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),r=i.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(e)||s.querySelector(`[name="${e}"]`);if(o)return o}r=i.nextNode()}}return null}var Hd=class{setOffset(e){}getScrollPosition(){return[0,0]}scrollToPosition(e){}scrollToAnchor(e){}setHistoryScrollRestoration(e){}},Sc=class{};var Zd=class extends wc{constructor(){super(...arguments),this.supportsDOMEvents=!0}},Jd=class n extends Zd{static makeCurrent(){Wv(new n)}onAndCancel(e,t,i){return e.addEventListener(t,i),()=>{e.removeEventListener(t,i)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return t=t||this.getDefaultDocument(),t.createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return t==="window"?window:t==="document"?e:t==="body"?e.body:null}getBaseHref(e){let t=aE();return t==null?null:cE(t)}resetBaseElement(){Co=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return Xv(document.cookie,e)}},Co=null;function aE(){return Co=Co||document.querySelector("base"),Co?Co.getAttribute("href"):null}function cE(n){return new URL(n,document.baseURI).pathname}var Kd=class{addToWindow(e){an.getAngularTestability=(i,r=!0)=>{let s=e.findTestabilityInTree(i,r);if(s==null)throw new xe(5103,!1);return s},an.getAllAngularTestabilities=()=>e.getAllTestabilities(),an.getAllAngularRootElements=()=>e.getAllRootElements();let t=i=>{let r=an.getAllAngularTestabilities(),s=r.length,o=function(){s--,s==0&&i()};r.forEach(a=>{a.whenStable(o)})};an.frameworkStabilizers||(an.frameworkStabilizers=[]),an.frameworkStabilizers.push(t)}findTestabilityInTree(e,t,i){if(t==null)return null;let r=e.getTestability(t);return r??(i?gr().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null)}},lE=(()=>{let e=class e{build(){return new XMLHttpRequest}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac});let n=e;return n})(),Qd=new Ne(""),ey=(()=>{let e=class e{constructor(i,r){this._zone=r,this._eventNameToPlugin=new Map,i.forEach(s=>{s.manager=this}),this._plugins=i.slice().reverse()}addEventListener(i,r,s){return this._findPluginFor(r).addEventListener(i,r,s)}getZone(){return this._zone}_findPluginFor(i){let r=this._eventNameToPlugin.get(i);if(r)return r;if(r=this._plugins.find(o=>o.supports(i)),!r)throw new xe(5101,!1);return this._eventNameToPlugin.set(i,r),r}};e.\u0275fac=function(r){return new(r||e)(we(Qd),we(ft))},e.\u0275prov=Me({token:e,factory:e.\u0275fac});let n=e;return n})(),Ec=class{constructor(e){this._doc=e}},Xd="ng-app-id",ty=(()=>{let e=class e{constructor(i,r,s,o={}){this.doc=i,this.appId=r,this.nonce=s,this.platformId=o,this.styleRef=new Map,this.hostNodes=new Set,this.styleNodesInDOM=this.collectServerRenderedStyles(),this.platformIsServer=qd(o),this.resetHostNodes()}addStyles(i){for(let r of i)this.changeUsageCount(r,1)===1&&this.onStyleAdded(r)}removeStyles(i){for(let r of i)this.changeUsageCount(r,-1)<=0&&this.onStyleRemoved(r)}ngOnDestroy(){let i=this.styleNodesInDOM;i&&(i.forEach(r=>r.remove()),i.clear());for(let r of this.getAllStyles())this.onStyleRemoved(r);this.resetHostNodes()}addHost(i){this.hostNodes.add(i);for(let r of this.getAllStyles())this.addStyleToHost(i,r)}removeHost(i){this.hostNodes.delete(i)}getAllStyles(){return this.styleRef.keys()}onStyleAdded(i){for(let r of this.hostNodes)this.addStyleToHost(r,i)}onStyleRemoved(i){let r=this.styleRef;r.get(i)?.elements?.forEach(s=>s.remove()),r.delete(i)}collectServerRenderedStyles(){let i=this.doc.head?.querySelectorAll(`style[${Xd}="${this.appId}"]`);if(i?.length){let r=new Map;return i.forEach(s=>{s.textContent!=null&&r.set(s.textContent,s)}),r}return null}changeUsageCount(i,r){let s=this.styleRef;if(s.has(i)){let o=s.get(i);return o.usage+=r,o.usage}return s.set(i,{usage:r,elements:[]}),r}getStyleElement(i,r){let s=this.styleNodesInDOM,o=s?.get(r);if(o?.parentNode===i)return s.delete(r),o.removeAttribute(Xd),o;{let a=this.doc.createElement("style");return this.nonce&&a.setAttribute("nonce",this.nonce),a.textContent=r,this.platformIsServer&&a.setAttribute(Xd,this.appId),i.appendChild(a),a}}addStyleToHost(i,r){let s=this.getStyleElement(i,r),o=this.styleRef,a=o.get(r)?.elements;a?a.push(s):o.set(r,{elements:[s],usage:1})}resetHostNodes(){let i=this.hostNodes;i.clear(),i.add(this.doc.head)}};e.\u0275fac=function(r){return new(r||e)(we(Jt),we(uc),we(Ed,8),we(Oi))},e.\u0275prov=Me({token:e,factory:e.\u0275fac});let n=e;return n})(),Yd={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/MathML/"},th=/%COMP%/g,ny="%COMP%",uE=`_nghost-${ny}`,dE=`_ngcontent-${ny}`,hE=!0,fE=new Ne("",{providedIn:"root",factory:()=>hE});function pE(n){return dE.replace(th,n)}function mE(n){return uE.replace(th,n)}function iy(n,e){return e.map(t=>t.replace(th,n))}var Jv=(()=>{let e=class e{constructor(i,r,s,o,a,c,l,u=null){this.eventManager=i,this.sharedStylesHost=r,this.appId=s,this.removeStylesOnCompDestroy=o,this.doc=a,this.platformId=c,this.ngZone=l,this.nonce=u,this.rendererByCompId=new Map,this.platformIsServer=qd(c),this.defaultRenderer=new Ao(i,a,l,this.platformIsServer)}createRenderer(i,r){if(!i||!r)return this.defaultRenderer;this.platformIsServer&&r.encapsulation===Gn.ShadowDom&&(r=xt(fe({},r),{encapsulation:Gn.Emulated}));let s=this.getOrCreateRenderer(i,r);return s instanceof Tc?s.applyToHost(i):s instanceof Do&&s.applyStyles(),s}getOrCreateRenderer(i,r){let s=this.rendererByCompId,o=s.get(r.id);if(!o){let a=this.doc,c=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,d=this.removeStylesOnCompDestroy,h=this.platformIsServer;switch(r.encapsulation){case Gn.Emulated:o=new Tc(l,u,r,this.appId,d,a,c,h);break;case Gn.ShadowDom:return new eh(l,u,i,r,a,c,this.nonce,h);default:o=new Do(l,u,r,d,a,c,h);break}s.set(r.id,o)}return o}ngOnDestroy(){this.rendererByCompId.clear()}};e.\u0275fac=function(r){return new(r||e)(we(ey),we(ty),we(uc),we(fE),we(Jt),we(Oi),we(ft),we(Ed))},e.\u0275prov=Me({token:e,factory:e.\u0275fac});let n=e;return n})(),Ao=class{constructor(e,t,i,r){this.eventManager=e,this.doc=t,this.ngZone=i,this.platformIsServer=r,this.data=Object.create(null),this.throwOnSyntheticProps=!0,this.destroyNode=null}destroy(){}createElement(e,t){return t?this.doc.createElementNS(Yd[t]||t,e):this.doc.createElement(e)}createComment(e){return this.doc.createComment(e)}createText(e){return this.doc.createTextNode(e)}appendChild(e,t){(Kv(e)?e.content:e).appendChild(t)}insertBefore(e,t,i){e&&(Kv(e)?e.content:e).insertBefore(t,i)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let i=typeof e=="string"?this.doc.querySelector(e):e;if(!i)throw new xe(-5104,!1);return t||(i.textContent=""),i}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,i,r){if(r){t=r+":"+t;let s=Yd[r];s?e.setAttributeNS(s,t,i):e.setAttribute(t,i)}else e.setAttribute(t,i)}removeAttribute(e,t,i){if(i){let r=Yd[i];r?e.removeAttributeNS(r,t):e.removeAttribute(`${i}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,i,r){r&(fr.DashCase|fr.Important)?e.style.setProperty(t,i,r&fr.Important?"important":""):e.style[t]=i}removeStyle(e,t,i){i&fr.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,i){e!=null&&(e[t]=i)}setValue(e,t){e.nodeValue=t}listen(e,t,i){if(typeof e=="string"&&(e=gr().getGlobalEventTarget(this.doc,e),!e))throw new Error(`Unsupported event target ${e} for event ${t}`);return this.eventManager.addEventListener(e,t,this.decoratePreventDefault(i))}decoratePreventDefault(e){return t=>{if(t==="__ngUnwrap__")return e;(this.platformIsServer?this.ngZone.runGuarded(()=>e(t)):e(t))===!1&&t.preventDefault()}}};function Kv(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var eh=class extends Ao{constructor(e,t,i,r,s,o,a,c){super(e,s,o,c),this.sharedStylesHost=t,this.hostEl=i,this.shadowRoot=i.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let l=iy(r.id,r.styles);for(let u of l){let d=document.createElement("style");a&&d.setAttribute("nonce",a),d.textContent=u,this.shadowRoot.appendChild(d)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,i){return super.insertBefore(this.nodeOrShadowRoot(e),t,i)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},Do=class extends Ao{constructor(e,t,i,r,s,o,a,c){super(e,s,o,a),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=r,this.styles=c?iy(c,i.styles):i.styles}applyStyles(){this.sharedStylesHost.addStyles(this.styles)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles)}},Tc=class extends Do{constructor(e,t,i,r,s,o,a,c){let l=r+"-"+i.id;super(e,t,i,s,o,a,c,l),this.contentAttr=pE(l),this.hostAttr=mE(l)}applyToHost(e){this.applyStyles(),this.setAttribute(e,this.hostAttr,"")}createElement(e,t){let i=super.createElement(e,t);return super.setAttribute(i,this.contentAttr,""),i}},gE=(()=>{let e=class e extends Ec{constructor(i){super(i)}supports(i){return!0}addEventListener(i,r,s){return i.addEventListener(r,s,!1),()=>this.removeEventListener(i,r,s)}removeEventListener(i,r,s){return i.removeEventListener(r,s)}};e.\u0275fac=function(r){return new(r||e)(we(Jt))},e.\u0275prov=Me({token:e,factory:e.\u0275fac});let n=e;return n})(),Qv=["alt","control","meta","shift"],vE={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},yE={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},_E=(()=>{let e=class e extends Ec{constructor(i){super(i)}supports(i){return e.parseEventName(i)!=null}addEventListener(i,r,s){let o=e.parseEventName(r),a=e.eventCallback(o.fullKey,s,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>gr().onAndCancel(i,o.domEventName,a))}static parseEventName(i){let r=i.toLowerCase().split("."),s=r.shift();if(r.length===0||!(s==="keydown"||s==="keyup"))return null;let o=e._normalizeKey(r.pop()),a="",c=r.indexOf("code");if(c>-1&&(r.splice(c,1),a="code."),Qv.forEach(u=>{let d=r.indexOf(u);d>-1&&(r.splice(d,1),a+=u+".")}),a+=o,r.length!=0||o.length===0)return null;let l={};return l.domEventName=s,l.fullKey=a,l}static matchEventFullKeyCode(i,r){let s=vE[i.key]||i.key,o="";return r.indexOf("code.")>-1&&(s=i.code,o="code."),s==null||!s?!1:(s=s.toLowerCase(),s===" "?s="space":s==="."&&(s="dot"),Qv.forEach(a=>{if(a!==s){let c=yE[a];c(i)&&(o+=a+".")}}),o+=s,o===r)}static eventCallback(i,r,s){return o=>{e.matchEventFullKeyCode(o,i)&&s.runGuarded(()=>r(o))}}static _normalizeKey(i){return i==="esc"?"escape":i}};e.\u0275fac=function(r){return new(r||e)(we(Jt))},e.\u0275prov=Me({token:e,factory:e.\u0275fac});let n=e;return n})();function xE(){Jd.makeCurrent()}function ME(){return new qn}function bE(){return Yg(document),document}var wE=[{provide:Oi,useValue:$d},{provide:Sd,useValue:xE,multi:!0},{provide:Jt,useFactory:bE,deps:[]}],ry=Vd(Fv,"browser",wE),SE=new Ne(""),EE=[{provide:So,useClass:Kd,deps:[]},{provide:Fd,useClass:_c,deps:[ft,xc,So]},{provide:_c,useClass:_c,deps:[ft,xc,So]}],TE=[{provide:oc,useValue:"root"},{provide:qn,useFactory:ME,deps:[]},{provide:Qd,useClass:gE,multi:!0,deps:[Jt,ft,Oi]},{provide:Qd,useClass:_E,multi:!0,deps:[Jt]},Jv,ty,ey,{provide:vo,useExisting:Jv},{provide:Sc,useClass:lE,deps:[]},[]],sy=(()=>{let e=class e{constructor(i){}static withServerTransition(i){return{ngModule:e,providers:[{provide:uc,useValue:i.appId}]}}};e.\u0275fac=function(r){return new(r||e)(we(SE,12))},e.\u0275mod=Rn({type:e}),e.\u0275inj=In({providers:[...TE,...EE],imports:[Yv,Uv]});let n=e;return n})();var oy=(()=>{let e=class e{constructor(i){this._doc=i}getTitle(){return this._doc.title}setTitle(i){this._doc.title=i||""}};e.\u0275fac=function(r){return new(r||e)(we(Jt))},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var Fe="primary",Wo=Symbol("RouteTitle"),oh=class{constructor(e){this.params=e||{}}has(e){return Object.prototype.hasOwnProperty.call(this.params,e)}get(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t[0]:t}return null}getAll(e){if(this.has(e)){let t=this.params[e];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function _s(n){return new oh(n)}function CE(n,e,t){let i=t.path.split("/");if(i.length>n.length||t.pathMatch==="full"&&(e.hasChildren()||i.length<n.length))return null;let r={};for(let s=0;s<i.length;s++){let o=i[s],a=n[s];if(o.startsWith(":"))r[o.substring(1)]=a;else if(o!==a.path)return null}return{consumed:n.slice(0,i.length),posParams:r}}function AE(n,e){if(n.length!==e.length)return!1;for(let t=0;t<n.length;++t)if(!Yn(n[t],e[t]))return!1;return!0}function Yn(n,e){let t=n?ah(n):void 0,i=e?ah(e):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let s=0;s<t.length;s++)if(r=t[s],!gy(n[r],e[r]))return!1;return!0}function ah(n){return[...Object.keys(n),...Object.getOwnPropertySymbols(n)]}function gy(n,e){if(Array.isArray(n)&&Array.isArray(e)){if(n.length!==e.length)return!1;let t=[...n].sort(),i=[...e].sort();return t.every((r,s)=>i[s]===r)}else return n===e}function vy(n){return n.length>0?n[n.length-1]:null}function Bi(n){return lu(n)?n:Eo(n)?Mt(Promise.resolve(n)):Te(n)}var DE={exact:_y,subset:xy},yy={exact:IE,subset:RE,ignored:()=>!0};function cy(n,e,t){return DE[t.paths](n.root,e.root,t.matrixParams)&&yy[t.queryParams](n.queryParams,e.queryParams)&&!(t.fragment==="exact"&&n.fragment!==e.fragment)}function IE(n,e){return Yn(n,e)}function _y(n,e,t){if(!_r(n.segments,e.segments)||!Dc(n.segments,e.segments,t)||n.numberOfChildren!==e.numberOfChildren)return!1;for(let i in e.children)if(!n.children[i]||!_y(n.children[i],e.children[i],t))return!1;return!0}function RE(n,e){return Object.keys(e).length<=Object.keys(n).length&&Object.keys(e).every(t=>gy(n[t],e[t]))}function xy(n,e,t){return My(n,e,e.segments,t)}function My(n,e,t,i){if(n.segments.length>t.length){let r=n.segments.slice(0,t.length);return!(!_r(r,t)||e.hasChildren()||!Dc(r,t,i))}else if(n.segments.length===t.length){if(!_r(n.segments,t)||!Dc(n.segments,t,i))return!1;for(let r in e.children)if(!n.children[r]||!xy(n.children[r],e.children[r],i))return!1;return!0}else{let r=t.slice(0,n.segments.length),s=t.slice(n.segments.length);return!_r(n.segments,r)||!Dc(n.segments,r,i)||!n.children[Fe]?!1:My(n.children[Fe],e,s,i)}}function Dc(n,e,t){return e.every((i,r)=>yy[t](n[r].parameters,i.parameters))}var Fi=class{constructor(e=new rt([],{}),t={},i=null){this.root=e,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=_s(this.queryParams),this._queryParamMap}toString(){return LE.serialize(this)}},rt=class{constructor(e,t){this.segments=e,this.children=t,this.parent=null,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return Ic(this)}},yr=class{constructor(e,t){this.path=e,this.parameters=t}get parameterMap(){return this._parameterMap??=_s(this.parameters),this._parameterMap}toString(){return wy(this)}};function NE(n,e){return _r(n,e)&&n.every((t,i)=>Yn(t.parameters,e[i].parameters))}function _r(n,e){return n.length!==e.length?!1:n.every((t,i)=>t.path===e[i].path)}function PE(n,e){let t=[];return Object.entries(n.children).forEach(([i,r])=>{i===Fe&&(t=t.concat(e(r,i)))}),Object.entries(n.children).forEach(([i,r])=>{i!==Fe&&(t=t.concat(e(r,i)))}),t}var jo=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:()=>new Fo,providedIn:"root"});let n=e;return n})(),Fo=class{parse(e){let t=new lh(e);return new Fi(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(e){let t=`/${Io(e.root,!0)}`,i=UE(e.queryParams),r=typeof e.fragment=="string"?`#${OE(e.fragment)}`:"";return`${t}${i}${r}`}},LE=new Fo;function Ic(n){return n.segments.map(e=>wy(e)).join("/")}function Io(n,e){if(!n.hasChildren())return Ic(n);if(e){let t=n.children[Fe]?Io(n.children[Fe],!1):"",i=[];return Object.entries(n.children).forEach(([r,s])=>{r!==Fe&&i.push(`${r}:${Io(s,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=PE(n,(i,r)=>r===Fe?[Io(n.children[Fe],!1)]:[`${r}:${Io(i,!1)}`]);return Object.keys(n.children).length===1&&n.children[Fe]!=null?`${Ic(n)}/${t[0]}`:`${Ic(n)}/(${t.join("//")})`}}function by(n){return encodeURIComponent(n).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Cc(n){return by(n).replace(/%3B/gi,";")}function OE(n){return encodeURI(n)}function ch(n){return by(n).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function Rc(n){return decodeURIComponent(n)}function ly(n){return Rc(n.replace(/\+/g,"%20"))}function wy(n){return`${ch(n.path)}${FE(n.parameters)}`}function FE(n){return Object.entries(n).map(([e,t])=>`;${ch(e)}=${ch(t)}`).join("")}function UE(n){let e=Object.entries(n).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Cc(t)}=${Cc(r)}`).join("&"):`${Cc(t)}=${Cc(i)}`).filter(t=>t);return e.length?`?${e.join("&")}`:""}var kE=/^[^\/()?;#]+/;function nh(n){let e=n.match(kE);return e?e[0]:""}var BE=/^[^\/()?;=#]+/;function VE(n){let e=n.match(BE);return e?e[0]:""}var zE=/^[^=?&#]+/;function HE(n){let e=n.match(zE);return e?e[0]:""}var GE=/^[^&#]+/;function WE(n){let e=n.match(GE);return e?e[0]:""}var lh=class{constructor(e){this.url=e,this.remaining=e}parseRootSegment(){return this.consumeOptional("/"),this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new rt([],{}):new rt([],this.parseChildren())}parseQueryParams(){let e={};if(this.consumeOptional("?"))do this.parseQueryParam(e);while(this.consumeOptional("&"));return e}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(){if(this.remaining==="")return{};this.consumeOptional("/");let e=[];for(this.peekStartsWith("(")||e.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),e.push(this.parseSegment());let t={};this.peekStartsWith("/(")&&(this.capture("/"),t=this.parseParens(!0));let i={};return this.peekStartsWith("(")&&(i=this.parseParens(!1)),(e.length>0||Object.keys(t).length>0)&&(i[Fe]=new rt(e,t)),i}parseSegment(){let e=nh(this.remaining);if(e===""&&this.peekStartsWith(";"))throw new xe(4009,!1);return this.capture(e),new yr(Rc(e),this.parseMatrixParams())}parseMatrixParams(){let e={};for(;this.consumeOptional(";");)this.parseParam(e);return e}parseParam(e){let t=VE(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=nh(this.remaining);r&&(i=r,this.capture(i))}e[Rc(t)]=Rc(i)}parseQueryParam(e){let t=HE(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=WE(this.remaining);o&&(i=o,this.capture(i))}let r=ly(t),s=ly(i);if(e.hasOwnProperty(r)){let o=e[r];Array.isArray(o)||(o=[o],e[r]=o),o.push(s)}else e[r]=s}parseParens(e){let t={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let i=nh(this.remaining),r=this.remaining[i.length];if(r!=="/"&&r!==")"&&r!==";")throw new xe(4010,!1);let s;i.indexOf(":")>-1?(s=i.slice(0,i.indexOf(":")),this.capture(s),this.capture(":")):e&&(s=Fe);let o=this.parseChildren();t[s]=Object.keys(o).length===1?o[Fe]:new rt([],o),this.consumeOptional("//")}return t}peekStartsWith(e){return this.remaining.startsWith(e)}consumeOptional(e){return this.peekStartsWith(e)?(this.remaining=this.remaining.substring(e.length),!0):!1}capture(e){if(!this.consumeOptional(e))throw new xe(4011,!1)}};function Sy(n){return n.segments.length>0?new rt([],{[Fe]:n}):n}function Ey(n){let e={};for(let[i,r]of Object.entries(n.children)){let s=Ey(r);if(i===Fe&&s.segments.length===0&&s.hasChildren())for(let[o,a]of Object.entries(s.children))e[o]=a;else(s.segments.length>0||s.hasChildren())&&(e[i]=s)}let t=new rt(n.segments,e);return jE(t)}function jE(n){if(n.numberOfChildren===1&&n.children[Fe]){let e=n.children[Fe];return new rt(n.segments.concat(e.segments),e.children)}return n}function xs(n){return n instanceof Fi}function $E(n,e,t=null,i=null){let r=Ty(n);return Cy(r,e,t,i)}function Ty(n){let e;function t(s){let o={};for(let c of s.children){let l=t(c);o[c.outlet]=l}let a=new rt(s.url,o);return s===n&&(e=a),a}let i=t(n.root),r=Sy(i);return e??r}function Cy(n,e,t,i){let r=n;for(;r.parent;)r=r.parent;if(e.length===0)return ih(r,r,r,t,i);let s=qE(e);if(s.toRoot())return ih(r,r,new rt([],{}),t,i);let o=XE(s,r,n),a=o.processChildren?Po(o.segmentGroup,o.index,s.commands):Dy(o.segmentGroup,o.index,s.commands);return ih(r,o.segmentGroup,a,t,i)}function Nc(n){return typeof n=="object"&&n!=null&&!n.outlets&&!n.segmentPath}function Uo(n){return typeof n=="object"&&n!=null&&n.outlets}function ih(n,e,t,i,r){let s={};i&&Object.entries(i).forEach(([c,l])=>{s[c]=Array.isArray(l)?l.map(u=>`${u}`):`${l}`});let o;n===e?o=t:o=Ay(n,e,t);let a=Sy(Ey(o));return new Fi(a,s,r)}function Ay(n,e,t){let i={};return Object.entries(n.children).forEach(([r,s])=>{s===e?i[r]=t:i[r]=Ay(s,e,t)}),new rt(n.segments,i)}var Pc=class{constructor(e,t,i){if(this.isAbsolute=e,this.numberOfDoubleDots=t,this.commands=i,e&&i.length>0&&Nc(i[0]))throw new xe(4003,!1);let r=i.find(Uo);if(r&&r!==vy(i))throw new xe(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function qE(n){if(typeof n[0]=="string"&&n.length===1&&n[0]==="/")return new Pc(!0,0,n);let e=0,t=!1,i=n.reduce((r,s,o)=>{if(typeof s=="object"&&s!=null){if(s.outlets){let a={};return Object.entries(s.outlets).forEach(([c,l])=>{a[c]=typeof l=="string"?l.split("/"):l}),[...r,{outlets:a}]}if(s.segmentPath)return[...r,s.segmentPath]}return typeof s!="string"?[...r,s]:o===0?(s.split("/").forEach((a,c)=>{c==0&&a==="."||(c==0&&a===""?t=!0:a===".."?e++:a!=""&&r.push(a))}),r):[...r,s]},[]);return new Pc(t,e,i)}var vs=class{constructor(e,t,i){this.segmentGroup=e,this.processChildren=t,this.index=i}};function XE(n,e,t){if(n.isAbsolute)return new vs(e,!0,0);if(!t)return new vs(e,!1,NaN);if(t.parent===null)return new vs(t,!0,0);let i=Nc(n.commands[0])?0:1,r=t.segments.length-1+i;return YE(t,r,n.numberOfDoubleDots)}function YE(n,e,t){let i=n,r=e,s=t;for(;s>r;){if(s-=r,i=i.parent,!i)throw new xe(4005,!1);r=i.segments.length}return new vs(i,!1,r-s)}function ZE(n){return Uo(n[0])?n[0].outlets:{[Fe]:n}}function Dy(n,e,t){if(n??=new rt([],{}),n.segments.length===0&&n.hasChildren())return Po(n,e,t);let i=JE(n,e,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<n.segments.length){let s=new rt(n.segments.slice(0,i.pathIndex),{});return s.children[Fe]=new rt(n.segments.slice(i.pathIndex),n.children),Po(s,0,r)}else return i.match&&r.length===0?new rt(n.segments,{}):i.match&&!n.hasChildren()?uh(n,e,t):i.match?Po(n,0,r):uh(n,e,t)}function Po(n,e,t){if(t.length===0)return new rt(n.segments,{});{let i=ZE(t),r={};if(Object.keys(i).some(s=>s!==Fe)&&n.children[Fe]&&n.numberOfChildren===1&&n.children[Fe].segments.length===0){let s=Po(n.children[Fe],e,t);return new rt(n.segments,s.children)}return Object.entries(i).forEach(([s,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[s]=Dy(n.children[s],e,o))}),Object.entries(n.children).forEach(([s,o])=>{i[s]===void 0&&(r[s]=o)}),new rt(n.segments,r)}}function JE(n,e,t){let i=0,r=e,s={match:!1,pathIndex:0,commandIndex:0};for(;r<n.segments.length;){if(i>=t.length)return s;let o=n.segments[r],a=t[i];if(Uo(a))break;let c=`${a}`,l=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&l&&typeof l=="object"&&l.outlets===void 0){if(!dy(c,l,o))return s;i+=2}else{if(!dy(c,{},o))return s;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function uh(n,e,t){let i=n.segments.slice(0,e),r=0;for(;r<t.length;){let s=t[r];if(Uo(s)){let c=KE(s.outlets);return new rt(i,c)}if(r===0&&Nc(t[0])){let c=n.segments[e];i.push(new yr(c.path,uy(t[0]))),r++;continue}let o=Uo(s)?s.outlets[Fe]:`${s}`,a=r<t.length-1?t[r+1]:null;o&&a&&Nc(a)?(i.push(new yr(o,uy(a))),r+=2):(i.push(new yr(o,{})),r++)}return new rt(i,{})}function KE(n){let e={};return Object.entries(n).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(e[t]=uh(new rt([],{}),0,i))}),e}function uy(n){let e={};return Object.entries(n).forEach(([t,i])=>e[t]=`${i}`),e}function dy(n,e,t){return n==t.path&&Yn(e,t.parameters)}var Lo="imperative",Nt=function(n){return n[n.NavigationStart=0]="NavigationStart",n[n.NavigationEnd=1]="NavigationEnd",n[n.NavigationCancel=2]="NavigationCancel",n[n.NavigationError=3]="NavigationError",n[n.RoutesRecognized=4]="RoutesRecognized",n[n.ResolveStart=5]="ResolveStart",n[n.ResolveEnd=6]="ResolveEnd",n[n.GuardsCheckStart=7]="GuardsCheckStart",n[n.GuardsCheckEnd=8]="GuardsCheckEnd",n[n.RouteConfigLoadStart=9]="RouteConfigLoadStart",n[n.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",n[n.ChildActivationStart=11]="ChildActivationStart",n[n.ChildActivationEnd=12]="ChildActivationEnd",n[n.ActivationStart=13]="ActivationStart",n[n.ActivationEnd=14]="ActivationEnd",n[n.Scroll=15]="Scroll",n[n.NavigationSkipped=16]="NavigationSkipped",n}(Nt||{}),Mn=class{constructor(e,t){this.id=e,this.url=t}},Ms=class extends Mn{constructor(e,t,i="imperative",r=null){super(e,t),this.type=Nt.NavigationStart,this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},ui=class extends Mn{constructor(e,t,i){super(e,t),this.urlAfterRedirects=i,this.type=Nt.NavigationEnd}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},dn=function(n){return n[n.Redirect=0]="Redirect",n[n.SupersededByNewNavigation=1]="SupersededByNewNavigation",n[n.NoDataFromResolver=2]="NoDataFromResolver",n[n.GuardRejected=3]="GuardRejected",n}(dn||{}),Lc=function(n){return n[n.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",n[n.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",n}(Lc||{}),Ui=class extends Mn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=Nt.NavigationCancel}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}},ki=class extends Mn{constructor(e,t,i,r){super(e,t),this.reason=i,this.code=r,this.type=Nt.NavigationSkipped}},ko=class extends Mn{constructor(e,t,i,r){super(e,t),this.error=i,this.target=r,this.type=Nt.NavigationError}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Oc=class extends Mn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Nt.RoutesRecognized}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},dh=class extends Mn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Nt.GuardsCheckStart}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},hh=class extends Mn{constructor(e,t,i,r,s){super(e,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=s,this.type=Nt.GuardsCheckEnd}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},fh=class extends Mn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Nt.ResolveStart}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ph=class extends Mn{constructor(e,t,i,r){super(e,t),this.urlAfterRedirects=i,this.state=r,this.type=Nt.ResolveEnd}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},mh=class{constructor(e){this.route=e,this.type=Nt.RouteConfigLoadStart}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},gh=class{constructor(e){this.route=e,this.type=Nt.RouteConfigLoadEnd}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},vh=class{constructor(e){this.snapshot=e,this.type=Nt.ChildActivationStart}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},yh=class{constructor(e){this.snapshot=e,this.type=Nt.ChildActivationEnd}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},_h=class{constructor(e){this.snapshot=e,this.type=Nt.ActivationStart}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},xh=class{constructor(e){this.snapshot=e,this.type=Nt.ActivationEnd}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},Fc=class{constructor(e,t,i){this.routerEvent=e,this.position=t,this.anchor=i,this.type=Nt.Scroll}toString(){let e=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${e}')`}},Bo=class{},Vo=class{constructor(e){this.url=e}};var Mh=class{constructor(){this.outlet=null,this.route=null,this.injector=null,this.children=new $o,this.attachRef=null}},$o=(()=>{let e=class e{constructor(){this.contexts=new Map}onChildOutletCreated(i,r){let s=this.getOrCreateContext(i);s.outlet=r,this.contexts.set(i,s)}onChildOutletDestroyed(i){let r=this.getContext(i);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let i=this.contexts;return this.contexts=new Map,i}onOutletReAttached(i){this.contexts=i}getOrCreateContext(i){let r=this.getContext(i);return r||(r=new Mh,this.contexts.set(i,r)),r}getContext(i){return this.contexts.get(i)||null}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Uc=class{constructor(e){this._root=e}get root(){return this._root.value}parent(e){let t=this.pathFromRoot(e);return t.length>1?t[t.length-2]:null}children(e){let t=bh(e,this._root);return t?t.children.map(i=>i.value):[]}firstChild(e){let t=bh(e,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(e){let t=wh(e,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==e)}pathFromRoot(e){return wh(e,this._root).map(t=>t.value)}};function bh(n,e){if(n===e.value)return e;for(let t of e.children){let i=bh(n,t);if(i)return i}return null}function wh(n,e){if(n===e.value)return[e];for(let t of e.children){let i=wh(n,t);if(i.length)return i.unshift(e),i}return[]}var un=class{constructor(e,t){this.value=e,this.children=t}toString(){return`TreeNode(${this.value})`}};function gs(n){let e={};return n&&n.children.forEach(t=>e[t.value.outlet]=t),e}var kc=class extends Uc{constructor(e,t){super(e),this.snapshot=t,Ph(this,e)}toString(){return this.snapshot.toString()}};function Iy(n){let e=QE(n),t=new Ut([new yr("",{})]),i=new Ut({}),r=new Ut({}),s=new Ut({}),o=new Ut(""),a=new bs(t,i,s,o,r,Fe,n,e.root);return a.snapshot=e.root,new kc(new un(a,[]),e)}function QE(n){let e={},t={},i={},r="",s=new zo([],e,i,r,t,Fe,n,null,{});return new Bc("",new un(s,[]))}var bs=class{constructor(e,t,i,r,s,o,a,c){this.urlSubject=e,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=s,this.outlet=o,this.component=a,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(tt(l=>l[Wo]))??Te(void 0),this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(tt(e=>_s(e))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(tt(e=>_s(e))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function Nh(n,e,t="emptyOnly"){let i,{routeConfig:r}=n;return e!==null&&(t==="always"||r?.path===""||!e.component&&!e.routeConfig?.loadComponent)?i={params:fe(fe({},e.params),n.params),data:fe(fe({},e.data),n.data),resolve:fe(fe(fe(fe({},n.data),e.data),r?.data),n._resolvedData)}:i={params:fe({},n.params),data:fe({},n.data),resolve:fe(fe({},n.data),n._resolvedData??{})},r&&Ny(r)&&(i.resolve[Wo]=r.title),i}var zo=class{get title(){return this.data?.[Wo]}constructor(e,t,i,r,s,o,a,c,l){this.url=e,this.params=t,this.queryParams=i,this.fragment=r,this.data=s,this.outlet=o,this.component=a,this.routeConfig=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=_s(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=_s(this.queryParams),this._queryParamMap}toString(){let e=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${e}', path:'${t}')`}},Bc=class extends Uc{constructor(e,t){super(t),this.url=e,Ph(this,t)}toString(){return Ry(this._root)}};function Ph(n,e){e.value._routerState=n,e.children.forEach(t=>Ph(n,t))}function Ry(n){let e=n.children.length>0?` { ${n.children.map(Ry).join(", ")} } `:"";return`${n.value}${e}`}function rh(n){if(n.snapshot){let e=n.snapshot,t=n._futureSnapshot;n.snapshot=t,Yn(e.queryParams,t.queryParams)||n.queryParamsSubject.next(t.queryParams),e.fragment!==t.fragment&&n.fragmentSubject.next(t.fragment),Yn(e.params,t.params)||n.paramsSubject.next(t.params),AE(e.url,t.url)||n.urlSubject.next(t.url),Yn(e.data,t.data)||n.dataSubject.next(t.data)}else n.snapshot=n._futureSnapshot,n.dataSubject.next(n._futureSnapshot.data)}function Sh(n,e){let t=Yn(n.params,e.params)&&NE(n.url,e.url),i=!n.parent!=!e.parent;return t&&!i&&(!n.parent||Sh(n.parent,e.parent))}function Ny(n){return typeof n.title=="string"||n.title===null}var eT=(()=>{let e=class e{constructor(){this.activated=null,this._activatedRoute=null,this.name=Fe,this.activateEvents=new qt,this.deactivateEvents=new qt,this.attachEvents=new qt,this.detachEvents=new qt,this.parentContexts=oe($o),this.location=oe(fc),this.changeDetector=oe(To),this.environmentInjector=oe(ln),this.inputBinder=oe(Wc,{optional:!0}),this.supportsBindingToComponentInputs=!0}get activatedComponentRef(){return this.activated}ngOnChanges(i){if(i.name){let{firstChange:r,previousValue:s}=i.name;if(r)return;this.isTrackedInParentContexts(s)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(s)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(i){return this.parentContexts.getContext(i)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let i=this.parentContexts.getContext(this.name);i?.route&&(i.attachRef?this.attach(i.attachRef,i.route):this.activateWith(i.route,i.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new xe(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new xe(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new xe(4012,!1);this.location.detach();let i=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(i.instance),i}attach(i,r){this.activated=i,this._activatedRoute=r,this.location.insert(i.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(i.instance)}deactivate(){if(this.activated){let i=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(i)}}activateWith(i,r){if(this.isActivated)throw new xe(4013,!1);this._activatedRoute=i;let s=this.location,a=i.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,l=new Eh(i,c,s.injector);this.activated=s.createComponent(a,{index:s.length,injector:l,environmentInjector:r??this.environmentInjector}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=ld({type:e,selectors:[["router-outlet"]],inputs:{name:"name"},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],standalone:!0,features:[lc]});let n=e;return n})(),Eh=class{constructor(e,t,i){this.route=e,this.childContexts=t,this.parent=i}get(e,t){return e===bs?this.route:e===$o?this.childContexts:this.parent.get(e,t)}},Wc=new Ne(""),hy=(()=>{let e=class e{constructor(){this.outletDataSubscriptions=new Map}bindActivatedRouteToOutletComponent(i){this.unsubscribeFromRouteData(i),this.subscribeToRouteData(i)}unsubscribeFromRouteData(i){this.outletDataSubscriptions.get(i)?.unsubscribe(),this.outletDataSubscriptions.delete(i)}subscribeToRouteData(i){let{activatedRoute:r}=i,s=ro([r.queryParams,r.params,r.data]).pipe(vn(([o,a,c],l)=>(c=fe(fe(fe({},o),a),c),l===0?Te(c):Promise.resolve(c)))).subscribe(o=>{if(!i.isActivated||!i.activatedComponentRef||i.activatedRoute!==r||r.component===null){this.unsubscribeFromRouteData(i);return}let a=kv(r.component);if(!a){this.unsubscribeFromRouteData(i);return}for(let{templateName:c}of a.inputs)i.activatedComponentRef.setInput(c,o[c])});this.outletDataSubscriptions.set(i,s)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac});let n=e;return n})();function tT(n,e,t){let i=Ho(n,e._root,t?t._root:void 0);return new kc(i,e)}function Ho(n,e,t){if(t&&n.shouldReuseRoute(e.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=e.value;let r=nT(n,e,t);return new un(i,r)}else{if(n.shouldAttach(e.value)){let s=n.retrieve(e.value);if(s!==null){let o=s.route;return o.value._futureSnapshot=e.value,o.children=e.children.map(a=>Ho(n,a)),o}}let i=iT(e.value),r=e.children.map(s=>Ho(n,s));return new un(i,r)}}function nT(n,e,t){return e.children.map(i=>{for(let r of t.children)if(n.shouldReuseRoute(i.value,r.value.snapshot))return Ho(n,i,r);return Ho(n,i)})}function iT(n){return new bs(new Ut(n.url),new Ut(n.params),new Ut(n.queryParams),new Ut(n.fragment),new Ut(n.data),n.outlet,n.component,n)}var Py="ngNavigationCancelingError";function Ly(n,e){let{redirectTo:t,navigationBehaviorOptions:i}=xs(e)?{redirectTo:e,navigationBehaviorOptions:void 0}:e,r=Oy(!1,dn.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function Oy(n,e){let t=new Error(`NavigationCancelingError: ${n||""}`);return t[Py]=!0,t.cancellationCode=e,t}function rT(n){return Fy(n)&&xs(n.url)}function Fy(n){return!!n&&n[Py]}var sT=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=ds({type:e,selectors:[["ng-component"]],standalone:!0,features:[Av],decls:1,vars:0,template:function(r,s){r&1&&pr(0,"router-outlet")},dependencies:[eT],encapsulation:2});let n=e;return n})();function oT(n,e){return n.providers&&!n._injector&&(n._injector=pc(n.providers,e,`Route: ${n.path}`)),n._injector??e}function Lh(n){let e=n.children&&n.children.map(Lh),t=e?xt(fe({},n),{children:e}):fe({},n);return!t.component&&!t.loadComponent&&(e||t.loadChildren)&&t.outlet&&t.outlet!==Fe&&(t.component=sT),t}function Zn(n){return n.outlet||Fe}function aT(n,e){let t=n.filter(i=>Zn(i)===e);return t.push(...n.filter(i=>Zn(i)!==e)),t}function qo(n){if(!n)return null;if(n.routeConfig?._injector)return n.routeConfig._injector;for(let e=n.parent;e;e=e.parent){let t=e.routeConfig;if(t?._loadedInjector)return t._loadedInjector;if(t?._injector)return t._injector}return null}var cT=(n,e,t,i)=>tt(r=>(new Th(e,r.targetRouterState,r.currentRouterState,t,i).activate(n),r)),Th=class{constructor(e,t,i,r,s){this.routeReuseStrategy=e,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=s}activate(e){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,e),rh(this.futureState.root),this.activateChildRoutes(t,i,e)}deactivateChildRoutes(e,t,i){let r=gs(t);e.children.forEach(s=>{let o=s.value.outlet;this.deactivateRoutes(s,r[o],i),delete r[o]}),Object.values(r).forEach(s=>{this.deactivateRouteAndItsChildren(s,i)})}deactivateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(r===s)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(e,t,o.children)}else this.deactivateChildRoutes(e,t,i);else s&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(e,t){e.value.component&&this.routeReuseStrategy.shouldDetach(e.value.snapshot)?this.detachAndStoreRouteSubtree(e,t):this.deactivateRouteAndOutlet(e,t)}detachAndStoreRouteSubtree(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=gs(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),a=i.children.onOutletDeactivated();this.routeReuseStrategy.store(e.value.snapshot,{componentRef:o,route:e,contexts:a})}}deactivateRouteAndOutlet(e,t){let i=t.getContext(e.value.outlet),r=i&&e.value.component?i.children:t,s=gs(e);for(let o of Object.values(s))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(e,t,i){let r=gs(t);e.children.forEach(s=>{this.activateRoutes(s,r[s.value.outlet],i),this.forwardEvent(new xh(s.value.snapshot))}),e.children.length&&this.forwardEvent(new yh(e.value.snapshot))}activateRoutes(e,t,i){let r=e.value,s=t?t.value:null;if(rh(r),r===s)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(e,t,o.children)}else this.activateChildRoutes(e,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let a=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(a.contexts),o.attachRef=a.componentRef,o.route=a.route.value,o.outlet&&o.outlet.attach(a.componentRef,a.route.value),rh(a.route.value),this.activateChildRoutes(e,null,o.children)}else{let a=qo(r.snapshot);o.attachRef=null,o.route=r,o.injector=a,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(e,null,o.children)}}else this.activateChildRoutes(e,null,i)}},Vc=class{constructor(e){this.path=e,this.route=this.path[this.path.length-1]}},ys=class{constructor(e,t){this.component=e,this.route=t}};function lT(n,e,t){let i=n._root,r=e?e._root:null;return Ro(i,r,t,[i.value])}function uT(n){let e=n.routeConfig?n.routeConfig.canActivateChild:null;return!e||e.length===0?null:{node:n,guards:e}}function Ss(n,e){let t=Symbol(),i=e.get(n,t);return i===t?typeof n=="function"&&!zm(n)?n:e.get(n):i}function Ro(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=gs(e);return n.children.forEach(o=>{dT(o,s[o.value.outlet],t,i.concat([o.value]),r),delete s[o.value.outlet]}),Object.entries(s).forEach(([o,a])=>Oo(a,t.getContext(o),r)),r}function dT(n,e,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let s=n.value,o=e?e.value:null,a=t?t.getContext(n.value.outlet):null;if(o&&s.routeConfig===o.routeConfig){let c=hT(o,s,s.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new Vc(i)):(s.data=o.data,s._resolvedData=o._resolvedData),s.component?Ro(n,e,a?a.children:null,i,r):Ro(n,e,t,i,r),c&&a&&a.outlet&&a.outlet.isActivated&&r.canDeactivateChecks.push(new ys(a.outlet.component,o))}else o&&Oo(e,a,r),r.canActivateChecks.push(new Vc(i)),s.component?Ro(n,null,a?a.children:null,i,r):Ro(n,null,t,i,r);return r}function hT(n,e,t){if(typeof t=="function")return t(n,e);switch(t){case"pathParamsChange":return!_r(n.url,e.url);case"pathParamsOrQueryParamsChange":return!_r(n.url,e.url)||!Yn(n.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!Sh(n,e)||!Yn(n.queryParams,e.queryParams);case"paramsChange":default:return!Sh(n,e)}}function Oo(n,e,t){let i=gs(n),r=n.value;Object.entries(i).forEach(([s,o])=>{r.component?e?Oo(o,e.children.getContext(s),t):Oo(o,null,t):Oo(o,e,t)}),r.component?e&&e.outlet&&e.outlet.isActivated?t.canDeactivateChecks.push(new ys(e.outlet.component,r)):t.canDeactivateChecks.push(new ys(null,r)):t.canDeactivateChecks.push(new ys(null,r))}function Xo(n){return typeof n=="function"}function fT(n){return typeof n=="boolean"}function pT(n){return n&&Xo(n.canLoad)}function mT(n){return n&&Xo(n.canActivate)}function gT(n){return n&&Xo(n.canActivateChild)}function vT(n){return n&&Xo(n.canDeactivate)}function yT(n){return n&&Xo(n.canMatch)}function Uy(n){return n instanceof ni||n?.name==="EmptyError"}var Ac=Symbol("INITIAL_VALUE");function ws(){return vn(n=>ro(n.map(e=>e.pipe(ii(1),fu(Ac)))).pipe(tt(e=>{for(let t of e)if(t!==!0){if(t===Ac)return Ac;if(t===!1||t instanceof Fi)return t}return!0}),gn(e=>e!==Ac),ii(1)))}function _T(n,e){return St(t=>{let{targetSnapshot:i,currentSnapshot:r,guards:{canActivateChecks:s,canDeactivateChecks:o}}=t;return o.length===0&&s.length===0?Te(xt(fe({},t),{guardsResult:!0})):xT(o,i,r,n).pipe(St(a=>a&&fT(a)?MT(i,s,n,e):Te(a)),tt(a=>xt(fe({},t),{guardsResult:a})))})}function xT(n,e,t,i){return Mt(n).pipe(St(r=>TT(r.component,r.route,t,e,i)),Vn(r=>r!==!0,!0))}function MT(n,e,t,i){return Mt(e).pipe(cr(r=>Yr(wT(r.route.parent,i),bT(r.route,i),ET(n,r.path,t),ST(n,r.route,t))),Vn(r=>r!==!0,!0))}function bT(n,e){return n!==null&&e&&e(new _h(n)),Te(!0)}function wT(n,e){return n!==null&&e&&e(new vh(n)),Te(!0)}function ST(n,e,t){let i=e.routeConfig?e.routeConfig.canActivate:null;if(!i||i.length===0)return Te(!0);let r=i.map(s=>Ra(()=>{let o=qo(e)??t,a=Ss(s,o),c=mT(a)?a.canActivate(e,n):si(o,()=>a(e,n));return Bi(c).pipe(Vn())}));return Te(r).pipe(ws())}function ET(n,e,t){let i=e[e.length-1],s=e.slice(0,e.length-1).reverse().map(o=>uT(o)).filter(o=>o!==null).map(o=>Ra(()=>{let a=o.guards.map(c=>{let l=qo(o.node)??t,u=Ss(c,l),d=gT(u)?u.canActivateChild(i,n):si(l,()=>u(i,n));return Bi(d).pipe(Vn())});return Te(a).pipe(ws())}));return Te(s).pipe(ws())}function TT(n,e,t,i,r){let s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||s.length===0)return Te(!0);let o=s.map(a=>{let c=qo(e)??r,l=Ss(a,c),u=vT(l)?l.canDeactivate(n,e,t,i):si(c,()=>l(n,e,t,i));return Bi(u).pipe(Vn())});return Te(o).pipe(ws())}function CT(n,e,t,i){let r=e.canLoad;if(r===void 0||r.length===0)return Te(!0);let s=r.map(o=>{let a=Ss(o,n),c=pT(a)?a.canLoad(e,t):si(n,()=>a(e,t));return Bi(c)});return Te(s).pipe(ws(),ky(i))}function ky(n){return su(kt(e=>{if(xs(e))throw Ly(n,e)}),tt(e=>e===!0))}function AT(n,e,t,i){let r=e.canMatch;if(!r||r.length===0)return Te(!0);let s=r.map(o=>{let a=Ss(o,n),c=yT(a)?a.canMatch(e,t):si(n,()=>a(e,t));return Bi(c)});return Te(s).pipe(ws(),ky(i))}var Go=class{constructor(e){this.segmentGroup=e||null}},zc=class extends Error{constructor(e){super(),this.urlTree=e}};function ms(n){return qr(new Go(n))}function DT(n){return qr(new xe(4e3,!1))}function IT(n){return qr(Oy(!1,dn.GuardRejected))}var Ch=class{constructor(e,t){this.urlSerializer=e,this.urlTree=t}lineralizeSegments(e,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return Te(i);if(r.numberOfChildren>1||!r.children[Fe])return DT(e.redirectTo);r=r.children[Fe]}}applyRedirectCommands(e,t,i){let r=this.applyRedirectCreateUrlTree(t,this.urlSerializer.parse(t),e,i);if(t.startsWith("/"))throw new zc(r);return r}applyRedirectCreateUrlTree(e,t,i,r){let s=this.createSegmentGroup(e,t.root,i,r);return new Fi(s,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(e,t){let i={};return Object.entries(e).forEach(([r,s])=>{if(typeof s=="string"&&s.startsWith(":")){let a=s.substring(1);i[r]=t[a]}else i[r]=s}),i}createSegmentGroup(e,t,i,r){let s=this.createSegments(e,t.segments,i,r),o={};return Object.entries(t.children).forEach(([a,c])=>{o[a]=this.createSegmentGroup(e,c,i,r)}),new rt(s,o)}createSegments(e,t,i,r){return t.map(s=>s.path.startsWith(":")?this.findPosParam(e,s,r):this.findOrReturn(s,i))}findPosParam(e,t,i){let r=i[t.path.substring(1)];if(!r)throw new xe(4001,!1);return r}findOrReturn(e,t){let i=0;for(let r of t){if(r.path===e.path)return t.splice(i),r;i++}return e}},Ah={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function RT(n,e,t,i,r){let s=Oh(n,e,t);return s.matched?(i=oT(e,i),AT(i,e,t,r).pipe(tt(o=>o===!0?s:fe({},Ah)))):Te(s)}function Oh(n,e,t){if(e.path==="**")return NT(t);if(e.path==="")return e.pathMatch==="full"&&(n.hasChildren()||t.length>0)?fe({},Ah):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(e.matcher||CE)(t,n,e);if(!r)return fe({},Ah);let s={};Object.entries(r.posParams??{}).forEach(([a,c])=>{s[a]=c.path});let o=r.consumed.length>0?fe(fe({},s),r.consumed[r.consumed.length-1].parameters):s;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function NT(n){return{matched:!0,parameters:n.length>0?vy(n).parameters:{},consumedSegments:n,remainingSegments:[],positionalParamSegments:{}}}function fy(n,e,t,i){return t.length>0&&OT(n,t,i)?{segmentGroup:new rt(e,LT(i,new rt(t,n.children))),slicedSegments:[]}:t.length===0&&FT(n,t,i)?{segmentGroup:new rt(n.segments,PT(n,t,i,n.children)),slicedSegments:t}:{segmentGroup:new rt(n.segments,n.children),slicedSegments:t}}function PT(n,e,t,i){let r={};for(let s of t)if(jc(n,e,s)&&!i[Zn(s)]){let o=new rt([],{});r[Zn(s)]=o}return fe(fe({},i),r)}function LT(n,e){let t={};t[Fe]=e;for(let i of n)if(i.path===""&&Zn(i)!==Fe){let r=new rt([],{});t[Zn(i)]=r}return t}function OT(n,e,t){return t.some(i=>jc(n,e,i)&&Zn(i)!==Fe)}function FT(n,e,t){return t.some(i=>jc(n,e,i))}function jc(n,e,t){return(n.hasChildren()||e.length>0)&&t.pathMatch==="full"?!1:t.path===""}function UT(n,e,t,i){return Zn(n)!==i&&(i===Fe||!jc(e,t,n))?!1:Oh(e,n,t).matched}function kT(n,e,t){return e.length===0&&!n.children[t]}var Dh=class{};function BT(n,e,t,i,r,s,o="emptyOnly"){return new Ih(n,e,t,i,r,o,s).recognize()}var VT=31,Ih=class{constructor(e,t,i,r,s,o,a){this.injector=e,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=s,this.paramsInheritanceStrategy=o,this.urlSerializer=a,this.applyRedirects=new Ch(this.urlSerializer,this.urlTree),this.absoluteRedirectCount=0,this.allowRedirects=!0}noMatchError(e){return new xe(4002,`'${e.segmentGroup}'`)}recognize(){let e=fy(this.urlTree.root,[],[],this.config).segmentGroup;return this.match(e).pipe(tt(t=>{let i=new zo([],Object.freeze({}),Object.freeze(fe({},this.urlTree.queryParams)),this.urlTree.fragment,{},Fe,this.rootComponentType,null,{}),r=new un(i,t),s=new Bc("",r),o=$E(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,s.url=this.urlSerializer.serialize(o),this.inheritParamsAndData(s._root,null),{state:s,tree:o}}))}match(e){return this.processSegmentGroup(this.injector,this.config,e,Fe).pipe(Si(i=>{if(i instanceof zc)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof Go?this.noMatchError(i):i}))}inheritParamsAndData(e,t){let i=e.value,r=Nh(i,t,this.paramsInheritanceStrategy);i.params=Object.freeze(r.params),i.data=Object.freeze(r.data),e.children.forEach(s=>this.inheritParamsAndData(s,i))}processSegmentGroup(e,t,i,r){return i.segments.length===0&&i.hasChildren()?this.processChildren(e,t,i):this.processSegment(e,t,i,i.segments,r,!0).pipe(tt(s=>s instanceof un?[s]:[]))}processChildren(e,t,i){let r=[];for(let s of Object.keys(i.children))s==="primary"?r.unshift(s):r.push(s);return Mt(r).pipe(cr(s=>{let o=i.children[s],a=aT(t,s);return this.processSegmentGroup(e,a,o,s)}),hu((s,o)=>(s.push(...o),s)),Ei(null),du(),St(s=>{if(s===null)return ms(i);let o=By(s);return zT(o),Te(o)}))}processSegment(e,t,i,r,s,o){return Mt(t).pipe(cr(a=>this.processSegmentAgainstRoute(a._injector??e,t,a,i,r,s,o).pipe(Si(c=>{if(c instanceof Go)return Te(null);throw c}))),Vn(a=>!!a),Si(a=>{if(Uy(a))return kT(i,r,s)?Te(new Dh):ms(i);throw a}))}processSegmentAgainstRoute(e,t,i,r,s,o,a){return UT(i,r,s,o)?i.redirectTo===void 0?this.matchSegmentAgainstRoute(e,r,i,s,o):this.allowRedirects&&a?this.expandSegmentAgainstRouteUsingRedirect(e,r,t,i,s,o):ms(r):ms(r)}expandSegmentAgainstRouteUsingRedirect(e,t,i,r,s,o){let{matched:a,consumedSegments:c,positionalParamSegments:l,remainingSegments:u}=Oh(t,r,s);if(!a)return ms(t);r.redirectTo.startsWith("/")&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>VT&&(this.allowRedirects=!1));let d=this.applyRedirects.applyRedirectCommands(c,r.redirectTo,l);return this.applyRedirects.lineralizeSegments(r,d).pipe(St(h=>this.processSegment(e,i,t,h.concat(u),o,!1)))}matchSegmentAgainstRoute(e,t,i,r,s){let o=RT(t,i,r,e,this.urlSerializer);return i.path==="**"&&(t.children={}),o.pipe(vn(a=>a.matched?(e=i._injector??e,this.getChildConfig(e,i,r).pipe(vn(({routes:c})=>{let l=i._loadedInjector??e,{consumedSegments:u,remainingSegments:d,parameters:h}=a,m=new zo(u,h,Object.freeze(fe({},this.urlTree.queryParams)),this.urlTree.fragment,GT(i),Zn(i),i.component??i._loadedComponent??null,i,WT(i)),{segmentGroup:g,slicedSegments:y}=fy(t,u,d,c);if(y.length===0&&g.hasChildren())return this.processChildren(l,c,g).pipe(tt(f=>f===null?null:new un(m,f)));if(c.length===0&&y.length===0)return Te(new un(m,[]));let p=Zn(i)===s;return this.processSegment(l,c,g,y,p?Fe:s,!0).pipe(tt(f=>new un(m,f instanceof un?[f]:[])))}))):ms(t)))}getChildConfig(e,t,i){return t.children?Te({routes:t.children,injector:e}):t.loadChildren?t._loadedRoutes!==void 0?Te({routes:t._loadedRoutes,injector:t._loadedInjector}):CT(e,t,i,this.urlSerializer).pipe(St(r=>r?this.configLoader.loadChildren(e,t).pipe(kt(s=>{t._loadedRoutes=s.routes,t._loadedInjector=s.injector})):IT(t))):Te({routes:[],injector:e})}};function zT(n){n.sort((e,t)=>e.value.outlet===Fe?-1:t.value.outlet===Fe?1:e.value.outlet.localeCompare(t.value.outlet))}function HT(n){let e=n.value.routeConfig;return e&&e.path===""}function By(n){let e=[],t=new Set;for(let i of n){if(!HT(i)){e.push(i);continue}let r=e.find(s=>i.value.routeConfig===s.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):e.push(i)}for(let i of t){let r=By(i.children);e.push(new un(i.value,r))}return e.filter(i=>!t.has(i))}function GT(n){return n.data||{}}function WT(n){return n.resolve||{}}function jT(n,e,t,i,r,s){return St(o=>BT(n,e,t,i,o.extractedUrl,r,s).pipe(tt(({state:a,tree:c})=>xt(fe({},o),{targetSnapshot:a,urlAfterRedirects:c}))))}function $T(n,e){return St(t=>{let{targetSnapshot:i,guards:{canActivateChecks:r}}=t;if(!r.length)return Te(t);let s=new Set(r.map(c=>c.route)),o=new Set;for(let c of s)if(!o.has(c))for(let l of Vy(c))o.add(l);let a=0;return Mt(o).pipe(cr(c=>s.has(c)?qT(c,i,n,e):(c.data=Nh(c,c.parent,n).resolve,Te(void 0))),kt(()=>a++),Zr(1),St(c=>a===o.size?Te(t):on))})}function Vy(n){let e=n.children.map(t=>Vy(t)).flat();return[n,...e]}function qT(n,e,t,i){let r=n.routeConfig,s=n._resolve;return r?.title!==void 0&&!Ny(r)&&(s[Wo]=r.title),XT(s,n,e,i).pipe(tt(o=>(n._resolvedData=o,n.data=Nh(n,n.parent,t).resolve,null)))}function XT(n,e,t,i){let r=ah(n);if(r.length===0)return Te({});let s={};return Mt(r).pipe(St(o=>YT(n[o],e,t,i).pipe(Vn(),kt(a=>{s[o]=a}))),Zr(1),uu(s),Si(o=>Uy(o)?on:qr(o)))}function YT(n,e,t,i){let r=qo(e)??i,s=Ss(n,r),o=s.resolve?s.resolve(e,t):si(r,()=>s(e,t));return Bi(o)}function sh(n){return vn(e=>{let t=n(e);return t?Mt(t).pipe(tt(()=>e)):Te(e)})}var zy=(()=>{let e=class e{buildTitle(i){let r,s=i.root;for(;s!==void 0;)r=this.getResolvedTitleForRoute(s)??r,s=s.children.find(o=>o.outlet===Fe);return r}getResolvedTitleForRoute(i){return i.data[Wo]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:()=>oe(ZT),providedIn:"root"});let n=e;return n})(),ZT=(()=>{let e=class e extends zy{constructor(i){super(),this.title=i}updateTitle(i){let r=this.buildTitle(i);r!==void 0&&this.title.setTitle(r)}};e.\u0275fac=function(r){return new(r||e)(we(oy))},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Yo=new Ne("",{providedIn:"root",factory:()=>({})}),Hc=new Ne(""),Fh=(()=>{let e=class e{constructor(){this.componentLoaders=new WeakMap,this.childrenLoaders=new WeakMap,this.compiler=oe(bc)}loadComponent(i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Te(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=Bi(i.loadComponent()).pipe(tt(Hy),kt(o=>{this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o}),so(()=>{this.componentLoaders.delete(i)})),s=new $r(r,()=>new $t).pipe(jr());return this.componentLoaders.set(i,s),s}loadChildren(i,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Te({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let o=JT(r,this.compiler,i,this.onLoadEndListener).pipe(so(()=>{this.childrenLoaders.delete(r)})),a=new $r(o,()=>new $t).pipe(jr());return this.childrenLoaders.set(r,a),a}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function JT(n,e,t,i){return Bi(n.loadChildren()).pipe(tt(Hy),St(r=>r instanceof yo||Array.isArray(r)?Te(r):Mt(e.compileModuleAsync(r))),tt(r=>{i&&i(n);let s,o,a=!1;return Array.isArray(r)?(o=r,a=!0):(s=r.create(t).injector,o=s.get(Hc,[],{optional:!0,self:!0}).flat()),{routes:o.map(Lh),injector:s}}))}function KT(n){return n&&typeof n=="object"&&"default"in n}function Hy(n){return KT(n)?n.default:n}var Uh=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:()=>oe(QT),providedIn:"root"});let n=e;return n})(),QT=(()=>{let e=class e{shouldProcessUrl(i){return!0}extract(i){return i}merge(i,r){return i}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),Gy=new Ne(""),Wy=new Ne("");function eC(n,e,t){let i=n.get(Wy),r=n.get(Jt);return n.get(ft).runOutsideAngular(()=>{if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,Promise.resolve();let s,o=new Promise(l=>{s=l}),a=r.startViewTransition(()=>(s(),tC(n))),{onViewTransitionCreated:c}=i;return c&&si(n,()=>c({transition:a,from:e,to:t})),o})}function tC(n){return new Promise(e=>{Ld(e,{injector:n})})}var kh=(()=>{let e=class e{get hasRequestedNavigation(){return this.navigationId!==0}constructor(){this.currentNavigation=null,this.currentTransition=null,this.lastSuccessfulNavigation=null,this.events=new $t,this.transitionAbortSubject=new $t,this.configLoader=oe(Fh),this.environmentInjector=oe(ln),this.urlSerializer=oe(jo),this.rootContexts=oe($o),this.location=oe(ps),this.inputBindingEnabled=oe(Wc,{optional:!0})!==null,this.titleStrategy=oe(zy),this.options=oe(Yo,{optional:!0})||{},this.paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly",this.urlHandlingStrategy=oe(Uh),this.createViewTransition=oe(Gy,{optional:!0}),this.navigationId=0,this.afterPreactivation=()=>Te(void 0),this.rootComponentType=null;let i=s=>this.events.next(new mh(s)),r=s=>this.events.next(new gh(s));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=i}complete(){this.transitions?.complete()}handleNavigationRequest(i){let r=++this.navigationId;this.transitions?.next(xt(fe(fe({},this.transitions.value),i),{id:r}))}setupNavigations(i,r,s){return this.transitions=new Ut({id:0,currentUrlTree:r,currentRawUrl:r,extractedUrl:this.urlHandlingStrategy.extract(r),urlAfterRedirects:this.urlHandlingStrategy.extract(r),rawUrl:r,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:Lo,restoredState:null,currentSnapshot:s.snapshot,targetSnapshot:null,currentRouterState:s,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.transitions.pipe(gn(o=>o.id!==0),tt(o=>xt(fe({},o),{extractedUrl:this.urlHandlingStrategy.extract(o.rawUrl)})),vn(o=>{let a=!1,c=!1;return Te(o).pipe(vn(l=>{if(this.navigationId>o.id)return this.cancelNavigationTransition(o,"",dn.SupersededByNewNavigation),on;this.currentTransition=o,this.currentNavigation={id:l.id,initialUrl:l.rawUrl,extractedUrl:l.extractedUrl,trigger:l.source,extras:l.extras,previousNavigation:this.lastSuccessfulNavigation?xt(fe({},this.lastSuccessfulNavigation),{previousNavigation:null}):null};let u=!i.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),d=l.extras.onSameUrlNavigation??i.onSameUrlNavigation;if(!u&&d!=="reload"){let h="";return this.events.next(new ki(l.id,this.urlSerializer.serialize(l.rawUrl),h,Lc.IgnoredSameUrlNavigation)),l.resolve(null),on}if(this.urlHandlingStrategy.shouldProcessUrl(l.rawUrl))return Te(l).pipe(vn(h=>{let m=this.transitions?.getValue();return this.events.next(new Ms(h.id,this.urlSerializer.serialize(h.extractedUrl),h.source,h.restoredState)),m!==this.transitions?.getValue()?on:Promise.resolve(h)}),jT(this.environmentInjector,this.configLoader,this.rootComponentType,i.config,this.urlSerializer,this.paramsInheritanceStrategy),kt(h=>{o.targetSnapshot=h.targetSnapshot,o.urlAfterRedirects=h.urlAfterRedirects,this.currentNavigation=xt(fe({},this.currentNavigation),{finalUrl:h.urlAfterRedirects});let m=new Oc(h.id,this.urlSerializer.serialize(h.extractedUrl),this.urlSerializer.serialize(h.urlAfterRedirects),h.targetSnapshot);this.events.next(m)}));if(u&&this.urlHandlingStrategy.shouldProcessUrl(l.currentRawUrl)){let{id:h,extractedUrl:m,source:g,restoredState:y,extras:p}=l,f=new Ms(h,this.urlSerializer.serialize(m),g,y);this.events.next(f);let S=Iy(this.rootComponentType).snapshot;return this.currentTransition=o=xt(fe({},l),{targetSnapshot:S,urlAfterRedirects:m,extras:xt(fe({},p),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.finalUrl=m,Te(o)}else{let h="";return this.events.next(new ki(l.id,this.urlSerializer.serialize(l.extractedUrl),h,Lc.IgnoredByUrlHandlingStrategy)),l.resolve(null),on}}),kt(l=>{let u=new dh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot);this.events.next(u)}),tt(l=>(this.currentTransition=o=xt(fe({},l),{guards:lT(l.targetSnapshot,l.currentSnapshot,this.rootContexts)}),o)),_T(this.environmentInjector,l=>this.events.next(l)),kt(l=>{if(o.guardsResult=l.guardsResult,xs(l.guardsResult))throw Ly(this.urlSerializer,l.guardsResult);let u=new hh(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects),l.targetSnapshot,!!l.guardsResult);this.events.next(u)}),gn(l=>l.guardsResult?!0:(this.cancelNavigationTransition(l,"",dn.GuardRejected),!1)),sh(l=>{if(l.guards.canActivateChecks.length)return Te(l).pipe(kt(u=>{let d=new fh(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}),vn(u=>{let d=!1;return Te(u).pipe($T(this.paramsInheritanceStrategy,this.environmentInjector),kt({next:()=>d=!0,complete:()=>{d||this.cancelNavigationTransition(u,"",dn.NoDataFromResolver)}}))}),kt(u=>{let d=new ph(u.id,this.urlSerializer.serialize(u.extractedUrl),this.urlSerializer.serialize(u.urlAfterRedirects),u.targetSnapshot);this.events.next(d)}))}),sh(l=>{let u=d=>{let h=[];d.routeConfig?.loadComponent&&!d.routeConfig._loadedComponent&&h.push(this.configLoader.loadComponent(d.routeConfig).pipe(kt(m=>{d.component=m}),tt(()=>{})));for(let m of d.children)h.push(...u(m));return h};return ro(u(l.targetSnapshot.root)).pipe(Ei(null),ii(1))}),sh(()=>this.afterPreactivation()),vn(()=>{let{currentSnapshot:l,targetSnapshot:u}=o,d=this.createViewTransition?.(this.environmentInjector,l.root,u.root);return d?Mt(d).pipe(tt(()=>o)):Te(o)}),tt(l=>{let u=tT(i.routeReuseStrategy,l.targetSnapshot,l.currentRouterState);return this.currentTransition=o=xt(fe({},l),{targetRouterState:u}),this.currentNavigation.targetRouterState=u,o}),kt(()=>{this.events.next(new Bo)}),cT(this.rootContexts,i.routeReuseStrategy,l=>this.events.next(l),this.inputBindingEnabled),ii(1),kt({next:l=>{a=!0,this.lastSuccessfulNavigation=this.currentNavigation,this.events.next(new ui(l.id,this.urlSerializer.serialize(l.extractedUrl),this.urlSerializer.serialize(l.urlAfterRedirects))),this.titleStrategy?.updateTitle(l.targetRouterState.snapshot),l.resolve(!0)},complete:()=>{a=!0}}),pu(this.transitionAbortSubject.pipe(kt(l=>{throw l}))),so(()=>{!a&&!c&&this.cancelNavigationTransition(o,"",dn.SupersededByNewNavigation),this.currentTransition?.id===o.id&&(this.currentNavigation=null,this.currentTransition=null)}),Si(l=>{if(c=!0,Fy(l))this.events.next(new Ui(o.id,this.urlSerializer.serialize(o.extractedUrl),l.message,l.cancellationCode)),rT(l)?this.events.next(new Vo(l.url)):o.resolve(!1);else{this.events.next(new ko(o.id,this.urlSerializer.serialize(o.extractedUrl),l,o.targetSnapshot??void 0));try{o.resolve(i.errorHandler(l))}catch(u){this.options.resolveNavigationPromiseOnError?o.resolve(!1):o.reject(u)}}return on}))}))}cancelNavigationTransition(i,r,s){let o=new Ui(i.id,this.urlSerializer.serialize(i.extractedUrl),r,s);this.events.next(o),i.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){return this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))).toString()!==this.currentTransition?.extractedUrl.toString()&&!this.currentTransition?.extras.skipLocationChange}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function nC(n){return n!==Lo}var iC=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:()=>oe(rC),providedIn:"root"});let n=e;return n})(),Rh=class{shouldDetach(e){return!1}store(e,t){}shouldAttach(e){return!1}retrieve(e){return null}shouldReuseRoute(e,t){return e.routeConfig===t.routeConfig}},rC=(()=>{let e=class e extends Rh{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=Md(e)))(s||e)}})(),e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),jy=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:()=>oe(sC),providedIn:"root"});let n=e;return n})(),sC=(()=>{let e=class e extends jy{constructor(){super(...arguments),this.location=oe(ps),this.urlSerializer=oe(jo),this.options=oe(Yo,{optional:!0})||{},this.canceledNavigationResolution=this.options.canceledNavigationResolution||"replace",this.urlHandlingStrategy=oe(Uh),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.currentUrlTree=new Fi,this.rawUrlTree=this.currentUrlTree,this.currentPageId=0,this.lastSuccessfulId=-1,this.routerState=Iy(null),this.stateMemento=this.createStateMemento()}getCurrentUrlTree(){return this.currentUrlTree}getRawUrlTree(){return this.rawUrlTree}restoredState(){return this.location.getState()}get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}getRouterState(){return this.routerState}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}registerNonRouterCurrentEntryChangeListener(i){return this.location.subscribe(r=>{r.type==="popstate"&&i(r.url,r.state)})}handleRouterEvent(i,r){if(i instanceof Ms)this.stateMemento=this.createStateMemento();else if(i instanceof ki)this.rawUrlTree=r.initialUrl;else if(i instanceof Oc){if(this.urlUpdateStrategy==="eager"&&!r.extras.skipLocationChange){let s=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl);this.setBrowserUrl(s,r)}}else i instanceof Bo?(this.currentUrlTree=r.finalUrl,this.rawUrlTree=this.urlHandlingStrategy.merge(r.finalUrl,r.initialUrl),this.routerState=r.targetRouterState,this.urlUpdateStrategy==="deferred"&&(r.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,r))):i instanceof Ui&&(i.code===dn.GuardRejected||i.code===dn.NoDataFromResolver)?this.restoreHistory(r):i instanceof ko?this.restoreHistory(r,!0):i instanceof ui&&(this.lastSuccessfulId=i.id,this.currentPageId=this.browserPageId)}setBrowserUrl(i,r){let s=this.urlSerializer.serialize(i);if(this.location.isCurrentPathEqualTo(s)||r.extras.replaceUrl){let o=this.browserPageId,a=fe(fe({},r.extras.state),this.generateNgRouterState(r.id,o));this.location.replaceState(s,"",a)}else{let o=fe(fe({},r.extras.state),this.generateNgRouterState(r.id,this.browserPageId+1));this.location.go(s,"",o)}}restoreHistory(i,r=!1){if(this.canceledNavigationResolution==="computed"){let s=this.browserPageId,o=this.currentPageId-s;o!==0?this.location.historyGo(o):this.currentUrlTree===i.finalUrl&&o===0&&(this.resetState(i),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(r&&this.resetState(i),this.resetUrlToCurrentUrlTree())}resetState(i){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,i.finalUrl??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(i,r){return this.canceledNavigationResolution==="computed"?{navigationId:i,\u0275routerPageId:r}:{navigationId:i}}};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=Md(e)))(s||e)}})(),e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),No=function(n){return n[n.COMPLETE=0]="COMPLETE",n[n.FAILED=1]="FAILED",n[n.REDIRECTING=2]="REDIRECTING",n}(No||{});function $y(n,e){n.events.pipe(gn(t=>t instanceof ui||t instanceof Ui||t instanceof ko||t instanceof ki),tt(t=>t instanceof ui||t instanceof ki?No.COMPLETE:(t instanceof Ui?t.code===dn.Redirect||t.code===dn.SupersededByNewNavigation:!1)?No.REDIRECTING:No.FAILED),gn(t=>t!==No.REDIRECTING),ii(1)).subscribe(()=>{e()})}function oC(n){throw n}var aC={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},cC={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"},xr=(()=>{let e=class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}constructor(){this.disposed=!1,this.isNgZoneEnabled=!1,this.console=oe(yc),this.stateManager=oe(jy),this.options=oe(Yo,{optional:!0})||{},this.pendingTasks=oe(mc),this.urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred",this.navigationTransitions=oe(kh),this.urlSerializer=oe(jo),this.location=oe(ps),this.urlHandlingStrategy=oe(Uh),this._events=new $t,this.errorHandler=this.options.errorHandler||oC,this.navigated=!1,this.routeReuseStrategy=oe(iC),this.onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore",this.config=oe(Hc,{optional:!0})?.flat()??[],this.componentInputBindingEnabled=!!oe(Wc,{optional:!0}),this.eventsSubscription=new Ct,this.isNgZoneEnabled=oe(ft)instanceof ft&&ft.isInAngularZone(),this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this,this.currentUrlTree,this.routerState).subscribe({error:i=>{this.console.warn(i)}}),this.subscribeToNavigationEvents()}subscribeToNavigationEvents(){let i=this.navigationTransitions.events.subscribe(r=>{try{let s=this.navigationTransitions.currentTransition,o=this.navigationTransitions.currentNavigation;if(s!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof Ui&&r.code!==dn.Redirect&&r.code!==dn.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof ui)this.navigated=!0;else if(r instanceof Vo){let a=this.urlHandlingStrategy.merge(r.url,s.currentRawUrl),c={info:s.extras.info,skipLocationChange:s.extras.skipLocationChange,replaceUrl:this.urlUpdateStrategy==="eager"||nC(s.source)};this.scheduleNavigation(a,Lo,null,c,{resolve:s.resolve,reject:s.reject,promise:s.promise})}}uC(r)&&this._events.next(r)}catch(s){this.navigationTransitions.transitionAbortSubject.next(s)}});this.eventsSubscription.add(i)}resetRootComponentType(i){this.routerState.root.component=i,this.navigationTransitions.rootComponentType=i}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Lo,this.stateManager.restoredState())}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((i,r)=>{setTimeout(()=>{this.navigateToSyncWithBrowser(i,"popstate",r)},0)})}navigateToSyncWithBrowser(i,r,s){let o={replaceUrl:!0},a=s?.navigationId?s:null;if(s){let l=fe({},s);delete l.navigationId,delete l.\u0275routerPageId,Object.keys(l).length!==0&&(o.state=l)}let c=this.parseUrl(i);this.scheduleNavigation(c,r,a,o)}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.navigationTransitions.currentNavigation}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(i){this.config=i.map(Lh),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription&&(this.nonRouterCurrentEntryChangeSubscription.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0),this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(i,r={}){let{relativeTo:s,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:l}=r,u=l?this.currentUrlTree.fragment:a,d=null;switch(c){case"merge":d=fe(fe({},this.currentUrlTree.queryParams),o);break;case"preserve":d=this.currentUrlTree.queryParams;break;default:d=o||null}d!==null&&(d=this.removeEmptyProps(d));let h;try{let m=s?s.snapshot:this.routerState.snapshot.root;h=Ty(m)}catch{(typeof i[0]!="string"||!i[0].startsWith("/"))&&(i=[]),h=this.currentUrlTree.root}return Cy(h,i,d,u??null)}navigateByUrl(i,r={skipLocationChange:!1}){let s=xs(i)?i:this.parseUrl(i),o=this.urlHandlingStrategy.merge(s,this.rawUrlTree);return this.scheduleNavigation(o,Lo,null,r)}navigate(i,r={skipLocationChange:!1}){return lC(i),this.navigateByUrl(this.createUrlTree(i,r),r)}serializeUrl(i){return this.urlSerializer.serialize(i)}parseUrl(i){try{return this.urlSerializer.parse(i)}catch{return this.urlSerializer.parse("/")}}isActive(i,r){let s;if(r===!0?s=fe({},aC):r===!1?s=fe({},cC):s=r,xs(i))return cy(this.currentUrlTree,i,s);let o=this.parseUrl(i);return cy(this.currentUrlTree,o,s)}removeEmptyProps(i){return Object.entries(i).reduce((r,[s,o])=>(o!=null&&(r[s]=o),r),{})}scheduleNavigation(i,r,s,o,a){if(this.disposed)return Promise.resolve(!1);let c,l,u;a?(c=a.resolve,l=a.reject,u=a.promise):u=new Promise((h,m)=>{c=h,l=m});let d=this.pendingTasks.add();return $y(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(d))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:s,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:i,extras:o,resolve:c,reject:l,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(h=>Promise.reject(h))}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();function lC(n){for(let e=0;e<n.length;e++)if(n[e]==null)throw new xe(4008,!1)}function uC(n){return!(n instanceof Bo)&&!(n instanceof Vo)}var Gc=class{};var dC=(()=>{let e=class e{constructor(i,r,s,o,a){this.router=i,this.injector=s,this.preloadingStrategy=o,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe(gn(i=>i instanceof ui),cr(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}processRoutes(i,r){let s=[];for(let o of r){o.providers&&!o._injector&&(o._injector=pc(o.providers,i,`Route: ${o.path}`));let a=o._injector??i,c=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&s.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&s.push(this.processRoutes(c,o.children??o._loadedRoutes))}return Mt(s).pipe(Xr())}preloadConfig(i,r){return this.preloadingStrategy.preload(r,()=>{let s;r.loadChildren&&r.canLoad===void 0?s=this.loader.loadChildren(i,r):s=Te(null);let o=s.pipe(St(a=>a===null?Te(void 0):(r._loadedRoutes=a.routes,r._loadedInjector=a.injector,this.processRoutes(a.injector??i,a.routes))));if(r.loadComponent&&!r._loadedComponent){let a=this.loader.loadComponent(r);return Mt([o,a]).pipe(Xr())}else return o})}};e.\u0275fac=function(r){return new(r||e)(we(xr),we(bc),we(ln),we(Gc),we(Fh))},e.\u0275prov=Me({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),qy=new Ne(""),hC=(()=>{let e=class e{constructor(i,r,s,o,a={}){this.urlSerializer=i,this.transitions=r,this.viewportScroller=s,this.zone=o,this.options=a,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},a.scrollPositionRestoration||="disabled",a.anchorScrolling||="disabled"}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(i=>{i instanceof Ms?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=i.navigationTrigger,this.restoredId=i.restoredState?i.restoredState.navigationId:0):i instanceof ui?(this.lastId=i.id,this.scheduleScrollEvent(i,this.urlSerializer.parse(i.urlAfterRedirects).fragment)):i instanceof ki&&i.code===Lc.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(i,this.urlSerializer.parse(i.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(i=>{i instanceof Fc&&(i.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0]):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(i.position):i.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(i.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(i,r){this.zone.runOutsideAngular(()=>{setTimeout(()=>{this.zone.run(()=>{this.transitions.events.next(new Fc(i,this.lastSource==="popstate"?this.store[this.restoredId]:null,r))})},0)})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}};e.\u0275fac=function(r){av()},e.\u0275prov=Me({token:e,factory:e.\u0275fac});let n=e;return n})();function fC(n){return n.routerState.root}function Zo(n,e){return{\u0275kind:n,\u0275providers:e}}function pC(){let n=oe(Xn);return e=>{let t=n.get(fs);if(e!==t.components[0])return;let i=n.get(xr),r=n.get(Xy);n.get(Bh)===1&&i.initialNavigation(),n.get(Yy,null,$e.Optional)?.setUpPreloading(),n.get(qy,null,$e.Optional)?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Xy=new Ne("",{factory:()=>new $t}),Bh=new Ne("",{providedIn:"root",factory:()=>1});function mC(){return Zo(2,[{provide:Bh,useValue:0},{provide:Mc,multi:!0,deps:[Xn],useFactory:e=>{let t=e.get(jv,Promise.resolve());return()=>t.then(()=>new Promise(i=>{let r=e.get(xr),s=e.get(Xy);$y(r,()=>{i(!0)}),e.get(kh).afterPreactivation=()=>(i(!0),s.closed?Te(void 0):s),r.initialNavigation()}))}}])}function gC(){return Zo(3,[{provide:Mc,multi:!0,useFactory:()=>{let e=oe(xr);return()=>{e.setUpLocationChangeListener()}}},{provide:Bh,useValue:2}])}var Yy=new Ne("");function vC(n){return Zo(0,[{provide:Yy,useExisting:dC},{provide:Gc,useExisting:n}])}function yC(){return Zo(8,[hy,{provide:Wc,useExisting:hy}])}function _C(n){let e=[{provide:Gy,useValue:eC},{provide:Wy,useValue:fe({skipNextTransition:!!n?.skipInitialTransition},n)}];return Zo(9,e)}var py=new Ne("ROUTER_FORROOT_GUARD"),xC=[ps,{provide:jo,useClass:Fo},xr,$o,{provide:bs,useFactory:fC,deps:[xr]},Fh,[]],Vh=(()=>{let e=class e{constructor(i){}static forRoot(i,r){return{ngModule:e,providers:[xC,[],{provide:Hc,multi:!0,useValue:i},{provide:py,useFactory:SC,deps:[[xr,new sd,new Xm]]},{provide:Yo,useValue:r||{}},r?.useHash?bC():wC(),MC(),r?.preloadingStrategy?vC(r.preloadingStrategy).\u0275providers:[],r?.initialNavigation?EC(r):[],r?.bindToComponentInputs?yC().\u0275providers:[],r?.enableViewTransitions?_C().\u0275providers:[],TC()]}}static forChild(i){return{ngModule:e,providers:[{provide:Hc,multi:!0,useValue:i}]}}};e.\u0275fac=function(r){return new(r||e)(we(py,8))},e.\u0275mod=Rn({type:e}),e.\u0275inj=In({});let n=e;return n})();function MC(){return{provide:qy,useFactory:()=>{let n=oe(Zv),e=oe(ft),t=oe(Yo),i=oe(kh),r=oe(jo);return t.scrollOffset&&n.setOffset(t.scrollOffset),new hC(r,i,n,e,t)}}}function bC(){return{provide:vr,useClass:qv}}function wC(){return{provide:vr,useClass:jd}}function SC(n){return"guarded"}function EC(n){return[n.initialNavigation==="disabled"?gC().\u0275providers:[],n.initialNavigation==="enabledBlocking"?mC().\u0275providers:[]]}var my=new Ne("");function TC(){return[{provide:my,useFactory:pC},{provide:kd,multi:!0,useExisting:my}]}var CC=[],Zy=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Rn({type:e}),e.\u0275inj=In({imports:[Vh.forRoot(CC),Vh]});let n=e;return n})();var op="162";var AC=0,Jy=1,DC=2;var I0=1,IC=2,vi=3,Ki=0,nn=1,_i=2,Yi=0,Ws=1,Ky=2,Qy=3,e_=4,RC=5,Ar=100,NC=101,PC=102,t_=103,n_=104,LC=200,OC=201,FC=202,UC=203,bf=204,wf=205,kC=206,BC=207,VC=208,zC=209,HC=210,GC=211,WC=212,jC=213,$C=214,qC=0,XC=1,YC=2,vl=3,ZC=4,JC=5,KC=6,QC=7,ap=0,eA=1,tA=2,Zi=0,nA=1,iA=2,rA=3,sA=4,oA=5,aA=6,cA=7;var i_=300,qs=301,Xs=302,Sf=303,Ef=304,Vl=306,Tf=1e3,Fn=1001,Cf=1002,Yt=1003,r_=1004;var Jo=1005;var Qt=1006,zh=1007;var Ir=1008;var Ji=1009,lA=1010,uA=1011,cp=1012,R0=1013,qi=1014,xi=1015,ra=1016,N0=1017,P0=1018,Rr=1020,dA=1021,Un=1023,hA=1024,fA=1025,Nr=1026,Ys=1027,pA=1028,L0=1029,mA=1030,O0=1031,F0=1033,Hh=33776,Gh=33777,Wh=33778,jh=33779,s_=35840,o_=35841,a_=35842,c_=35843,U0=36196,l_=37492,u_=37496,d_=37808,h_=37809,f_=37810,p_=37811,m_=37812,g_=37813,v_=37814,y_=37815,__=37816,x_=37817,M_=37818,b_=37819,w_=37820,S_=37821,$h=36492,E_=36494,T_=36495,gA=36283,C_=36284,A_=36285,D_=36286;var yl=2300,_l=2301,qh=2302,I_=2400,R_=2401,N_=2402;var vA=3200,yA=3201,k0=0,_A=1,$i="",Jn="srgb",nr="srgb-linear",lp="display-p3",zl="display-p3-linear",xl="linear",pt="srgb",Ml="rec709",bl="p3";var Es=7680;var P_=519,xA=512,MA=513,bA=514,B0=515,wA=516,SA=517,EA=518,TA=519,L_=35044;var O_="300 es",Af=1035,Mi=2e3,wl=2001,Qi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xh=Math.PI/180,Df=180/Math.PI;function ua(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[n&255]+Ht[n>>8&255]+Ht[n>>16&255]+Ht[n>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[t&63|128]+Ht[t>>8&255]+"-"+Ht[t>>16&255]+Ht[t>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function en(n,e,t){return Math.max(e,Math.min(t,n))}function CA(n,e){return(n%e+e)%e}function Yh(n,e,t){return(1-t)*n+t*e}function F_(n){return(n&n-1)===0&&n!==0}function If(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ko(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var it=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class n{constructor(e,t,i,r,s,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l)}set(e,t,i,r,s,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],d=i[7],h=i[2],m=i[5],g=i[8],y=r[0],p=r[3],f=r[6],S=r[1],x=r[4],w=r[7],I=r[2],C=r[5],T=r[8];return s[0]=o*y+a*S+c*I,s[3]=o*p+a*x+c*C,s[6]=o*f+a*w+c*T,s[1]=l*y+u*S+d*I,s[4]=l*p+u*x+d*C,s[7]=l*f+u*w+d*T,s[2]=h*y+m*S+g*I,s[5]=h*p+m*x+g*C,s[8]=h*f+m*w+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=u*o-a*l,h=a*c-u*s,m=l*s-o*c,g=t*d+i*h+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(u*t-r*c)*y,e[5]=(r*s-a*t)*y,e[6]=m*y,e[7]=(i*c-l*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Zh.makeScale(e,t)),this}rotate(e){return this.premultiply(Zh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Zh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Zh=new He;function V0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Sl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function AA(){let n=Sl("canvas");return n.style.display="block",n}var U_={};function DA(n){n in U_||(U_[n]=!0,console.warn(n))}var k_=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),B_=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$c={[nr]:{transfer:xl,primaries:Ml,toReference:n=>n,fromReference:n=>n},[Jn]:{transfer:pt,primaries:Ml,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[zl]:{transfer:xl,primaries:bl,toReference:n=>n.applyMatrix3(B_),fromReference:n=>n.applyMatrix3(k_)},[lp]:{transfer:pt,primaries:bl,toReference:n=>n.convertSRGBToLinear().applyMatrix3(B_),fromReference:n=>n.applyMatrix3(k_).convertLinearToSRGB()}},IA=new Set([nr,zl]),ct={enabled:!0,_workingColorSpace:nr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!IA.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=$c[e].toReference,r=$c[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return $c[n].primaries},getTransfer:function(n){return n===$i?xl:$c[n].transfer}};function js(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Jh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ts,El=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=Sl("canvas")),Ts.width=e.width,Ts.height=e.height;let i=Ts.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Sl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=js(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(js(t[i]/255)*255):t[i]=js(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},RA=0,Tl=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:RA++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Kh(r[o].image)):s.push(Kh(r[o]))}else s=Kh(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function Kh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?El.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var NA=0,Br=(()=>{class n extends Qi{constructor(t=n.DEFAULT_IMAGE,i=n.DEFAULT_MAPPING,r=Fn,s=Fn,o=Qt,a=Ir,c=Un,l=Ji,u=n.DEFAULT_ANISOTROPY,d=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NA++}),this.uuid=ua(),this.name="",this.source=new Tl(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==i_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Tf:t.x=t.x-Math.floor(t.x);break;case Fn:t.x=t.x<0?0:1;break;case Cf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Tf:t.y=t.y-Math.floor(t.y);break;case Fn:t.y=t.y<0?0:1;break;case Cf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}return n.DEFAULT_IMAGE=null,n.DEFAULT_MAPPING=i_,n.DEFAULT_ANISOTROPY=1,n})(),Bt=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,c=e.elements,l=c[0],u=c[4],d=c[8],h=c[1],m=c[5],g=c[9],y=c[2],p=c[6],f=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,w=(m+1)/2,I=(f+1)/2,C=(u+h)/4,T=(d+y)/4,k=(g+p)/4;return x>w&&x>I?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=T/i):w>I?w<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(w),i=C/r,s=k/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=T/s,r=k/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-y)/S,this.z=(h-u)/S,this.w=Math.acos((l+m+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Rf=class extends Qi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);let s=new Br(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Tl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bi=class extends Rf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Cl=class extends Br{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nf=class extends Br{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],h=s[o+0],m=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(d!==y||c!==h||l!==m||u!==g){let p=1-a,f=c*h+l*m+u*g+d*y,S=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){let I=Math.sqrt(x),C=Math.atan2(I,f*S);p=Math.sin(p*C)/I,a=Math.sin(a*C)/I}let w=a*S;if(c=c*p+h*w,l=l*p+m*w,u=u*p+g*w,d=d*p+y*w,p===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=I,l*=I,u*=I,d*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){let a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[o],h=s[o+1],m=s[o+2],g=s[o+3];return e[t]=a*g+u*d+c*m-l*h,e[t+1]=c*g+u*h+l*d-a*m,e[t+2]=l*g+u*m+a*h-c*d,e[t+3]=u*g-a*d-c*h-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),d=a(s/2),h=c(i/2),m=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"YXZ":this._x=h*u*d+l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"ZXY":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d-h*m*g;break;case"ZYX":this._x=h*u*d-l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d+h*m*g;break;case"YZX":this._x=h*u*d+l*m*g,this._y=l*m*d+h*u*g,this._z=l*u*g-h*m*d,this._w=l*u*d-h*m*g;break;case"XZY":this._x=h*u*d-l*m*g,this._y=l*m*d-h*u*g,this._z=l*u*g+h*m*d,this._w=l*u*d+h*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],d=t[10],h=i+a+d;if(h>0){let m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-c)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>d){let m=2*Math.sqrt(1+i-a-d);this._w=(u-c)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>d){let m=2*Math.sqrt(1+a-i-d);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(c+u)/m}else{let m=2*Math.sqrt(1+d-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(en(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),d=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(V_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(V_.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*i),u=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+c*l+o*d-a*u,this.y=i+c*u+a*l-s*d,this.z=r+c*d+s*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qh.copy(this).projectOnVector(e),this.sub(Qh)}reflect(e){return this.sub(Qh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(en(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Qh=new P,V_=new er,Pr=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qc.copy(i.boundingBox)),qc.applyMatrix4(e.matrixWorld),this.union(qc)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Xc.subVectors(this.max,Qo),Cs.subVectors(e.a,Qo),As.subVectors(e.b,Qo),Ds.subVectors(e.c,Qo),Vi.subVectors(As,Cs),zi.subVectors(Ds,As),Mr.subVectors(Cs,Ds);let t=[0,-Vi.z,Vi.y,0,-zi.z,zi.y,0,-Mr.z,Mr.y,Vi.z,0,-Vi.x,zi.z,0,-zi.x,Mr.z,0,-Mr.x,-Vi.y,Vi.x,0,-zi.y,zi.x,0,-Mr.y,Mr.x,0];return!ef(t,Cs,As,Ds,Xc)||(t=[1,0,0,0,1,0,0,0,1],!ef(t,Cs,As,Ds,Xc))?!1:(Yc.crossVectors(Vi,zi),t=[Yc.x,Yc.y,Yc.z],ef(t,Cs,As,Ds,Xc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},di=[new P,new P,new P,new P,new P,new P,new P,new P],Pn=new P,qc=new Pr,Cs=new P,As=new P,Ds=new P,Vi=new P,zi=new P,Mr=new P,Qo=new P,Xc=new P,Yc=new P,br=new P;function ef(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){br.fromArray(n,s);let a=r.x*Math.abs(br.x)+r.y*Math.abs(br.y)+r.z*Math.abs(br.z),c=e.dot(br),l=t.dot(br),u=i.dot(br);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var PA=new Pr,ea=new P,tf=new P,Lr=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):PA.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ea.subVectors(e,this.center);let t=ea.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ea,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ea.copy(e.center).add(tf)),this.expandByPoint(ea.copy(e.center).sub(tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},hi=new P,nf=new P,Zc=new P,Hi=new P,rf=new P,Jc=new P,sf=new P,sa=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){nf.copy(e).add(t).multiplyScalar(.5),Zc.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(nf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Zc),a=Hi.dot(this.direction),c=-Hi.dot(Zc),l=Hi.lengthSq(),u=Math.abs(1-o*o),d,h,m,g;if(u>0)if(d=o*c-a,h=o*a-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let y=1/u;d*=y,h*=y,m=d*(d+o*h+2*a)+h*(o*d+h+2*c)+l}else h=s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),m=h*(h+2*c)+l):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-c),s),m=-d*d+h*(h+2*c)+l);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),m=-d*d+h*(h+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(nf).addScaledVector(Zc,h),m}intersectSphere(e,t){hi.subVectors(e.center,this.origin);let i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(i=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(i=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,i,r,s){rf.subVectors(t,e),Jc.subVectors(i,e),sf.crossVectors(rf,Jc);let o=this.direction.dot(sf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,e);let c=a*this.direction.dot(Jc.crossVectors(Hi,Jc));if(c<0)return null;let l=a*this.direction.dot(rf.cross(Hi));if(l<0||c+l>o)return null;let u=-a*Hi.dot(sf);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tt=class n{constructor(e,t,i,r,s,o,a,c,l,u,d,h,m,g,y,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,y,p)}set(e,t,i,r,s,o,a,c,l,u,d,h,m,g,y,p){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=d,f[14]=h,f[3]=m,f[7]=g,f[11]=y,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Is.setFromMatrixColumn(e,0).length(),s=1/Is.setFromMatrixColumn(e,1).length(),o=1/Is.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let h=o*u,m=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=-c*d,t[8]=l,t[1]=m+g*l,t[5]=h-y*l,t[9]=-a*c,t[2]=y-h*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){let h=c*u,m=c*d,g=l*u,y=l*d;t[0]=h+y*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*d,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=y+h*a,t[10]=o*c}else if(e.order==="ZXY"){let h=c*u,m=c*d,g=l*u,y=l*d;t[0]=h-y*a,t[4]=-o*d,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=y-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let h=o*u,m=o*d,g=a*u,y=a*d;t[0]=c*u,t[4]=g*l-m,t[8]=h*l+y,t[1]=c*d,t[5]=y*l+h,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let h=o*c,m=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=y-h*d,t[8]=g*d+m,t[1]=d,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*d+g,t[10]=h-y*d}else if(e.order==="XZY"){let h=o*c,m=o*l,g=a*c,y=a*l;t[0]=c*u,t[4]=-d,t[8]=l*u,t[1]=h*d+y,t[5]=o*u,t[9]=m*d-g,t[2]=g*d-m,t[6]=a*u,t[10]=y*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(LA,e,OA)}lookAt(e,t,i){let r=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Gi.crossVectors(i,hn),Gi.lengthSq()===0&&(Math.abs(i.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Gi.crossVectors(i,hn)),Gi.normalize(),Kc.crossVectors(hn,Gi),r[0]=Gi.x,r[4]=Kc.x,r[8]=hn.x,r[1]=Gi.y,r[5]=Kc.y,r[9]=hn.y,r[2]=Gi.z,r[6]=Kc.z,r[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],d=i[5],h=i[9],m=i[13],g=i[2],y=i[6],p=i[10],f=i[14],S=i[3],x=i[7],w=i[11],I=i[15],C=r[0],T=r[4],k=r[8],K=r[12],_=r[1],E=r[5],ee=r[9],J=r[13],D=r[2],G=r[6],z=r[10],$=r[14],H=r[3],j=r[7],q=r[11],ie=r[15];return s[0]=o*C+a*_+c*D+l*H,s[4]=o*T+a*E+c*G+l*j,s[8]=o*k+a*ee+c*z+l*q,s[12]=o*K+a*J+c*$+l*ie,s[1]=u*C+d*_+h*D+m*H,s[5]=u*T+d*E+h*G+m*j,s[9]=u*k+d*ee+h*z+m*q,s[13]=u*K+d*J+h*$+m*ie,s[2]=g*C+y*_+p*D+f*H,s[6]=g*T+y*E+p*G+f*j,s[10]=g*k+y*ee+p*z+f*q,s[14]=g*K+y*J+p*$+f*ie,s[3]=S*C+x*_+w*D+I*H,s[7]=S*T+x*E+w*G+I*j,s[11]=S*k+x*ee+w*z+I*q,s[15]=S*K+x*J+w*$+I*ie,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],d=e[6],h=e[10],m=e[14],g=e[3],y=e[7],p=e[11],f=e[15];return g*(+s*c*d-r*l*d-s*a*h+i*l*h+r*a*m-i*c*m)+y*(+t*c*m-t*l*h+s*o*h-r*o*m+r*l*u-s*c*u)+p*(+t*l*d-t*a*m-s*o*d+i*o*m+s*a*u-i*l*u)+f*(-r*a*u-t*c*d+t*a*h+r*o*d-i*o*h+i*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],d=e[9],h=e[10],m=e[11],g=e[12],y=e[13],p=e[14],f=e[15],S=d*p*l-y*h*l+y*c*m-a*p*m-d*c*f+a*h*f,x=g*h*l-u*p*l-g*c*m+o*p*m+u*c*f-o*h*f,w=u*y*l-g*d*l+g*a*m-o*y*m-u*a*f+o*d*f,I=g*d*c-u*y*c-g*a*h+o*y*h+u*a*p-o*d*p,C=t*S+i*x+r*w+s*I;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/C;return e[0]=S*T,e[1]=(y*h*s-d*p*s-y*r*m+i*p*m+d*r*f-i*h*f)*T,e[2]=(a*p*s-y*c*s+y*r*l-i*p*l-a*r*f+i*c*f)*T,e[3]=(d*c*s-a*h*s-d*r*l+i*h*l+a*r*m-i*c*m)*T,e[4]=x*T,e[5]=(u*p*s-g*h*s+g*r*m-t*p*m-u*r*f+t*h*f)*T,e[6]=(g*c*s-o*p*s-g*r*l+t*p*l+o*r*f-t*c*f)*T,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*m+t*c*m)*T,e[8]=w*T,e[9]=(g*d*s-u*y*s-g*i*m+t*y*m+u*i*f-t*d*f)*T,e[10]=(o*y*s-g*a*s+g*i*l-t*y*l-o*i*f+t*a*f)*T,e[11]=(u*a*s-o*d*s-u*i*l+t*d*l+o*i*m-t*a*m)*T,e[12]=I*T,e[13]=(u*y*r-g*d*r+g*i*h-t*y*h-u*i*p+t*d*p)*T,e[14]=(g*a*r-o*y*r-g*i*c+t*y*c+o*i*p-t*a*p)*T,e[15]=(o*d*r-u*a*r+u*i*c-t*d*c-o*i*h+t*a*h)*T,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,d=a+a,h=s*l,m=s*u,g=s*d,y=o*u,p=o*d,f=a*d,S=c*l,x=c*u,w=c*d,I=i.x,C=i.y,T=i.z;return r[0]=(1-(y+f))*I,r[1]=(m+w)*I,r[2]=(g-x)*I,r[3]=0,r[4]=(m-w)*C,r[5]=(1-(h+f))*C,r[6]=(p+S)*C,r[7]=0,r[8]=(g+x)*T,r[9]=(p-S)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Is.set(r[0],r[1],r[2]).length(),o=Is.set(r[4],r[5],r[6]).length(),a=Is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);let l=1/s,u=1/o,d=1/a;return Ln.elements[0]*=l,Ln.elements[1]*=l,Ln.elements[2]*=l,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,t.setFromRotationMatrix(Ln),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Mi){let c=this.elements,l=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r),m,g;if(a===Mi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===wl)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Mi){let c=this.elements,l=1/(t-e),u=1/(i-r),d=1/(o-s),h=(t+e)*l,m=(i+r)*u,g,y;if(a===Mi)g=(o+s)*d,y=-2*d;else if(a===wl)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-h,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Is=new P,Ln=new Tt,LA=new P(0,0,0),OA=new P(1,1,1),Gi=new P,Kc=new P,hn=new P,z_=new Tt,H_=new er,Or=(()=>{class n{constructor(t=0,i=0,r=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,s=this._order){return this._x=t,this._y=i,this._z=r,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){let s=t.elements,o=s[0],a=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],m=s[6],g=s[10];switch(i){case"XYZ":this._y=Math.asin(en(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,o),this._z=0);break;case"ZXY":this._x=Math.asin(en(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,g),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,o)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return z_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(z_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return H_.setFromEuler(this),this.setFromQuaternion(H_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return n.DEFAULT_ORDER="XYZ",n})(),Al=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},FA=0,G_=new P,Rs=new er,fi=new Tt,Qc=new P,ta=new P,UA=new P,kA=new er,W_=new P(1,0,0),j_=new P(0,1,0),$_=new P(0,0,1),BA={type:"added"},VA={type:"removed"},of={type:"childadded",child:null},af={type:"childremoved",child:null},ei=(()=>{class n extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:FA++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new P,i=new Or,r=new er,s=new P(1,1,1);function o(){r.setFromEuler(i,!1)}function a(){i.setFromQuaternion(r,void 0,!1)}i._onChange(o),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new He}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Al,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Rs.setFromAxisAngle(t,i),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,i){return Rs.setFromAxisAngle(t,i),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(W_,t)}rotateY(t){return this.rotateOnAxis(j_,t)}rotateZ(t){return this.rotateOnAxis($_,t)}translateOnAxis(t,i){return G_.copy(t).applyQuaternion(this.quaternion),this.position.add(G_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(W_,t)}translateY(t){return this.translateOnAxis(j_,t)}translateZ(t){return this.translateOnAxis($_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Qc.copy(t):Qc.set(t,i,r);let s=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(ta,Qc,this.up):fi.lookAt(Qc,ta,this.up),this.quaternion.setFromRotationMatrix(fi),s&&(fi.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(fi),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(BA),of.child=t,this.dispatchEvent(of),of.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(VA),af.child=t,this.dispatchEvent(af),af.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fi.multiply(t.parent.matrixWorld)),t.applyMatrix4(fi),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,s=this.children.length;r<s;r++){let a=this.children[r].getObjectByProperty(t,i);if(a!==void 0)return a}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,t,UA),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,kA,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].traverseVisible(t)}traverseAncestors(t){let i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let i=this.children;for(let r=0,s=i.length;r<s;r++){let o=i[r];(o.matrixWorldAutoUpdate===!0||t===!0)&&o.updateMatrixWorld(t)}}updateWorldMatrix(t,i){let r=this.parent;if(t===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++){let c=s[o];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(t){let i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];o(t.shapes,h)}else o(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(o(t.materials,this.material[l]));s.material=c}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(o(t.animations,l))}}if(i){let c=a(t.geometries),l=a(t.materials),u=a(t.textures),d=a(t.images),h=a(t.shapes),m=a(t.skeletons),g=a(t.animations),y=a(t.nodes);c.length>0&&(r.geometries=c),l.length>0&&(r.materials=l),u.length>0&&(r.textures=u),d.length>0&&(r.images=d),h.length>0&&(r.shapes=h),m.length>0&&(r.skeletons=m),g.length>0&&(r.animations=g),y.length>0&&(r.nodes=y)}return r.object=s,r;function a(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){let s=t.children[r];this.add(s.clone())}return this}}return n.DEFAULT_UP=new P(0,1,0),n.DEFAULT_MATRIX_AUTO_UPDATE=!0,n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,n})(),On=new P,pi=new P,cf=new P,mi=new P,Ns=new P,Ps=new P,q_=new P,lf=new P,uf=new P,df=new P,zs=class n{constructor(e=new P,t=new P,i=new P){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),On.subVectors(e,t),r.cross(On);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){On.subVectors(r,t),pi.subVectors(i,t),cf.subVectors(e,t);let o=On.dot(On),a=On.dot(pi),c=On.dot(cf),l=pi.dot(pi),u=pi.dot(cf),d=o*l-a*a;if(d===0)return s.set(0,0,0),null;let h=1/d,m=(l*c-a*u)*h,g=(o*u-a*c)*h;return s.set(1-m-g,g,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,mi.x),c.addScaledVector(o,mi.y),c.addScaledVector(a,mi.z),c)}static isFrontFacing(e,t,i,r){return On.subVectors(i,t),pi.subVectors(e,t),On.cross(pi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),On.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,o,a;Ns.subVectors(r,i),Ps.subVectors(s,i),lf.subVectors(e,i);let c=Ns.dot(lf),l=Ps.dot(lf);if(c<=0&&l<=0)return t.copy(i);uf.subVectors(e,r);let u=Ns.dot(uf),d=Ps.dot(uf);if(u>=0&&d<=u)return t.copy(r);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(Ns,o);df.subVectors(e,s);let m=Ns.dot(df),g=Ps.dot(df);if(g>=0&&m<=g)return t.copy(s);let y=m*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Ps,a);let p=u*g-m*d;if(p<=0&&d-u>=0&&m-g>=0)return q_.subVectors(s,r),a=(d-u)/(d-u+(m-g)),t.copy(r).addScaledVector(q_,a);let f=1/(p+y+h);return o=y*f,a=h*f,t.copy(i).addScaledVector(Ns,o).addScaledVector(Ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},el={h:0,s:0,l:0};function hf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ct.workingColorSpace){return this.r=e,this.g=t,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ct.workingColorSpace){if(e=CA(e,1),t=en(t,0,1),i=en(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=hf(o,s,e+1/3),this.g=hf(o,s,e),this.b=hf(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,t=Jn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){let i=z0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}copyLinearToSRGB(e){return this.r=Jh(e.r),this.g=Jh(e.g),this.b=Jh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return ct.fromWorkingColorSpace(Gt.copy(this),e),Math.round(en(Gt.r*255,0,255))*65536+Math.round(en(Gt.g*255,0,255))*256+Math.round(en(Gt.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.fromWorkingColorSpace(Gt.copy(this),t);let i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=u<=.5?d/(o+a):d/(2-o-a),o){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.fromWorkingColorSpace(Gt.copy(this),t),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=Jn){ct.fromWorkingColorSpace(Gt.copy(this),e);let t=Gt.r,i=Gt.g,r=Gt.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(el);let i=Yh(Wi.h,el.h,t),r=Yh(Wi.s,el.s,t),s=Yh(Wi.l,el.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gt=new Ye;Ye.NAMES=z0;var zA=0,Sn=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zA++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=Ws,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=bf,this.blendDst=wf,this.blendEquation=Ar,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=P_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==bf&&(i.blendSrc=this.blendSrc),this.blendDst!==wf&&(i.blendDst=this.blendDst),this.blendEquation!==Ar&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==P_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Dl=class extends Sn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.combine=ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Et=new P,tl=new it,wn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=L_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return DA("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)tl.fromBufferAttribute(this,t),tl.applyMatrix3(e),this.setXY(t,tl.x,tl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ko(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ko(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ko(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ko(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ko(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),r=Kt(r,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==L_&&(e.usage=this.usage),e}};var Il=class extends wn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Rl=class extends wn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Lt=class extends wn{constructor(e,t,i){super(new Float32Array(e),t,i)}},HA=0,bn=new Tt,ff=new ei,Ls=new P,fn=new Pr,na=new Pr,Pt=new P,En=class n extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:HA++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V0(e)?Rl:Il)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return ff.lookAt(e),ff.updateMatrix(),this.applyMatrix4(ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ls).negate(),this.translate(Ls.x,Ls.y,Ls.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];fn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let i=this.boundingSphere.center;if(fn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];na.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(fn.min,na.min),fn.expandByPoint(Pt),Pt.addVectors(fn.max,na.max),fn.expandByPoint(Pt)):(fn.expandByPoint(na.min),fn.expandByPoint(na.max))}fn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Pt.fromBufferAttribute(a,l),c&&(Ls.fromBufferAttribute(e,l),Pt.add(Ls)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let k=0;k<i.count;k++)a[k]=new P,c[k]=new P;let l=new P,u=new P,d=new P,h=new it,m=new it,g=new it,y=new P,p=new P;function f(k,K,_){l.fromBufferAttribute(i,k),u.fromBufferAttribute(i,K),d.fromBufferAttribute(i,_),h.fromBufferAttribute(s,k),m.fromBufferAttribute(s,K),g.fromBufferAttribute(s,_),u.sub(l),d.sub(l),m.sub(h),g.sub(h);let E=1/(m.x*g.y-g.x*m.y);isFinite(E)&&(y.copy(u).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(E),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(E),a[k].add(y),a[K].add(y),a[_].add(y),c[k].add(p),c[K].add(p),c[_].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let k=0,K=S.length;k<K;++k){let _=S[k],E=_.start,ee=_.count;for(let J=E,D=E+ee;J<D;J+=3)f(e.getX(J+0),e.getX(J+1),e.getX(J+2))}let x=new P,w=new P,I=new P,C=new P;function T(k){I.fromBufferAttribute(r,k),C.copy(I);let K=a[k];x.copy(K),x.sub(I.multiplyScalar(I.dot(K))).normalize(),w.crossVectors(C,K);let E=w.dot(c[k])<0?-1:1;o.setXYZW(k,x.x,x.y,x.z,E)}for(let k=0,K=S.length;k<K;++k){let _=S[k],E=_.start,ee=_.count;for(let J=E,D=E+ee;J<D;J+=3)T(e.getX(J+0)),T(e.getX(J+1)),T(e.getX(J+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);let r=new P,s=new P,o=new P,a=new P,c=new P,l=new P,u=new P,d=new P;if(e)for(let h=0,m=e.count;h<m;h+=3){let g=e.getX(h+0),y=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Pt.fromBufferAttribute(e,t),Pt.normalize(),e.setXYZ(t,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,d=a.normalized,h=new l.constructor(c.length*u),m=0,g=0;for(let y=0,p=c.length;y<p;y++){a.isInterleavedBufferAttribute?m=c[y]*a.data.stride+a.offset:m=c[y]*u;for(let f=0;f<u;f++)h[g++]=l[m++]}return new wn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,i);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let u=0,d=l.length;u<d;u++){let h=l[u],m=e(h,i);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let m=l[d];u.push(m.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let l in r){let u=r[l];this.setAttribute(l,u.clone(t))}let s=e.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,m=d.length;h<m;h++)u.push(d[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},X_=new Tt,wr=new sa,nl=new Lr,Y_=new P,Os=new P,Fs=new P,Us=new P,pf=new P,il=new P,rl=new it,sl=new it,ol=new it,Z_=new P,J_=new P,K_=new P,al=new P,cl=new P,tn=class extends ei{constructor(e=new En,t=new Dl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){il.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=a[c],d=s[c];u!==0&&(pf.fromBufferAttribute(d,e),o?il.addScaledVector(pf,u):il.addScaledVector(pf.sub(t),u))}t.add(il)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(s),wr.copy(e.ray).recast(e.near),!(nl.containsPoint(wr.origin)===!1&&(wr.intersectSphere(nl,Y_)===null||wr.origin.distanceToSquared(Y_)>(e.far-e.near)**2))&&(X_.copy(s).invert(),wr.copy(e.ray).applyMatrix4(X_),!(i.boundingBox!==null&&wr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wr)))}_computeIntersections(e,t,i){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let p=h[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let w=S,I=x;w<I;w+=3){let C=a.getX(w),T=a.getX(w+1),k=a.getX(w+2);r=ll(this,f,e,i,l,u,d,C,T,k),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let S=a.getX(p),x=a.getX(p+1),w=a.getX(p+2);r=ll(this,o,e,i,l,u,d,S,x,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){let p=h[g],f=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let w=S,I=x;w<I;w+=3){let C=w,T=w+1,k=w+2;r=ll(this,f,e,i,l,u,d,C,T,k),r&&(r.faceIndex=Math.floor(w/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{let g=Math.max(0,m.start),y=Math.min(c.count,m.start+m.count);for(let p=g,f=y;p<f;p+=3){let S=p,x=p+1,w=p+2;r=ll(this,o,e,i,l,u,d,S,x,w),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}};function GA(n,e,t,i,r,s,o,a){let c;if(e.side===nn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Ki,a),c===null)return null;cl.copy(a),cl.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(cl);return l<t.near||l>t.far?null:{distance:l,point:cl.clone(),object:n}}function ll(n,e,t,i,r,s,o,a,c,l){n.getVertexPosition(a,Os),n.getVertexPosition(c,Fs),n.getVertexPosition(l,Us);let u=GA(n,e,t,i,Os,Fs,Us,al);if(u){r&&(rl.fromBufferAttribute(r,a),sl.fromBufferAttribute(r,c),ol.fromBufferAttribute(r,l),u.uv=zs.getInterpolation(al,Os,Fs,Us,rl,sl,ol,new it)),s&&(rl.fromBufferAttribute(s,a),sl.fromBufferAttribute(s,c),ol.fromBufferAttribute(s,l),u.uv1=zs.getInterpolation(al,Os,Fs,Us,rl,sl,ol,new it)),o&&(Z_.fromBufferAttribute(o,a),J_.fromBufferAttribute(o,c),K_.fromBufferAttribute(o,l),u.normal=zs.getInterpolation(al,Os,Fs,Us,Z_,J_,K_,new P),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new P,materialIndex:0};zs.getNormal(Os,Fs,Us,d.normal),u.face=d}return u}var oa=class n extends En{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],u=[],d=[],h=0,m=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(d,2));function g(y,p,f,S,x,w,I,C,T,k,K){let _=w/T,E=I/k,ee=w/2,J=I/2,D=C/2,G=T+1,z=k+1,$=0,H=0,j=new P;for(let q=0;q<z;q++){let ie=q*E-J;for(let de=0;de<G;de++){let Ue=de*_-ee;j[y]=Ue*S,j[p]=ie*x,j[f]=D,l.push(j.x,j.y,j.z),j[y]=0,j[p]=0,j[f]=C>0?1:-1,u.push(j.x,j.y,j.z),d.push(de/T),d.push(1-q/k),$+=1}}for(let q=0;q<k;q++)for(let ie=0;ie<T;ie++){let de=h+ie+G*q,Ue=h+ie+G*(q+1),B=h+(ie+1)+G*(q+1),Y=h+(ie+1)+G*q;c.push(de,Ue,Y),c.push(Ue,B,Y),H+=6}a.addGroup(m,H,K),m+=H,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Zs(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Xt(n){let e={};for(let t=0;t<n.length;t++){let i=Zs(n[t]);for(let r in i)e[r]=i[r]}return e}function WA(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function H0(n){return n.getRenderTarget()===null?n.outputColorSpace:ct.workingColorSpace}var jA={clone:Zs,merge:Xt},$A=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qn=class extends Sn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$A,this.fragmentShader=qA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=WA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},Nl=class extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ji=new P,Q_=new it,e0=new it,Wt=class extends Nl{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Df*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Df*2*Math.atan(Math.tan(Xh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,t){return this.getViewBounds(e,Q_,e0),t.subVectors(e0,Q_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ks=-90,Bs=1,Pf=class extends ei{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Wt(ks,Bs,e,t);r.layers=this.layers,this.add(r);let s=new Wt(ks,Bs,e,t);s.layers=this.layers,this.add(s);let o=new Wt(ks,Bs,e,t);o.layers=this.layers,this.add(o);let a=new Wt(ks,Bs,e,t);a.layers=this.layers,this.add(a);let c=new Wt(ks,Bs,e,t);c.layers=this.layers,this.add(c);let l=new Wt(ks,Bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Pl=class extends Br{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lf=class extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Pl(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new oa(5,5,5),s=new Qn({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Yi});s.uniforms.tEquirect.value=t;let o=new tn(r,s),a=t.minFilter;return t.minFilter===Ir&&(t.minFilter=Qt),new Pf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}},mf=new P,XA=new P,YA=new He,yi=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=mf.subVectors(i,t).cross(XA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(mf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||YA.getNormalMatrix(e),r=this.coplanarPoint(mf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Sr=new Lr,ul=new P,Ll=class{constructor(e=new yi,t=new yi,i=new yi,r=new yi,s=new yi,o=new yi){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Mi){let i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],u=r[5],d=r[6],h=r[7],m=r[8],g=r[9],y=r[10],p=r[11],f=r[12],S=r[13],x=r[14],w=r[15];if(i[0].setComponents(c-s,h-l,p-m,w-f).normalize(),i[1].setComponents(c+s,h+l,p+m,w+f).normalize(),i[2].setComponents(c+o,h+u,p+g,w+S).normalize(),i[3].setComponents(c-o,h-u,p-g,w-S).normalize(),i[4].setComponents(c-a,h-d,p-y,w-x).normalize(),t===Mi)i[5].setComponents(c+a,h+d,p+y,w+x).normalize();else if(t===wl)i[5].setComponents(a,d,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(e){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(ul.x=r.normal.x>0?e.max.x:e.min.x,ul.y=r.normal.y>0?e.max.y:e.min.y,ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function G0(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function ZA(n,e){let t=e.isWebGL2,i=new WeakMap;function r(l,u){let d=l.array,h=l.usage,m=d.byteLength,g=n.createBuffer();n.bindBuffer(u,g),n.bufferData(u,d,h),l.onUploadCallback();let y;if(d instanceof Float32Array)y=n.FLOAT;else if(d instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)y=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)y=n.SHORT;else if(d instanceof Uint32Array)y=n.UNSIGNED_INT;else if(d instanceof Int32Array)y=n.INT;else if(d instanceof Int8Array)y=n.BYTE;else if(d instanceof Uint8Array)y=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)y=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:y,bytesPerElement:d.BYTES_PER_ELEMENT,version:l.version,size:m}}function s(l,u,d){let h=u.array,m=u._updateRange,g=u.updateRanges;if(n.bindBuffer(d,l),m.count===-1&&g.length===0&&n.bufferSubData(d,0,h),g.length!==0){for(let y=0,p=g.length;y<p;y++){let f=g[y];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(d,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let h=i.get(l);(!h||h.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let d=i.get(l);if(d===void 0)i.set(l,r(l,u));else if(d.version<l.version){if(d.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,l,u),d.version=l.version}}return{get:o,remove:a,update:c}}var Ol=class n extends En{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,d=e/a,h=t/c,m=[],g=[],y=[],p=[];for(let f=0;f<u;f++){let S=f*h-o;for(let x=0;x<l;x++){let w=x*d-s;g.push(w,-S,0),y.push(0,0,1),p.push(x/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let S=0;S<a;S++){let x=S+l*f,w=S+l*(f+1),I=S+1+l*(f+1),C=S+1+l*f;m.push(x,w,C),m.push(w,I,C)}this.setIndex(m),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(y,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},JA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,QA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eD=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tD=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nD=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iD=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rD=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sD=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oD=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,aD=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cD=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lD=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uD=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dD=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hD=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pD=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mD=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gD=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yD=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_D=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,xD=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,MD=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bD=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,wD=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SD=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ED=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TD=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CD="gl_FragColor = linearToOutputTexel( gl_FragColor );",AD=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,DD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ID=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RD=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ND=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PD=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,LD=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OD=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,FD=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,UD=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kD=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,BD=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,VD=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zD=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HD=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GD=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,WD=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,jD=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$D=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qD=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XD=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,YD=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ZD=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,JD=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,KD=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QD=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eI=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tI=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nI=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,iI=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,rI=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sI=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oI=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aI=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cI=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,lI=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uI=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,dI=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hI=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,fI=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,pI=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,mI=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gI=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yI=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_I=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xI=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,MI=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bI=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wI=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SI=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EI=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,TI=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,CI=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AI=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DI=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,II=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RI=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NI=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,PI=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,LI=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OI=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,FI=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,UI=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kI=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,BI=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VI=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zI=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HI=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,GI=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,WI=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jI=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$I=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,XI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,YI=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZI=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,JI=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KI=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QI=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,n1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,r1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,s1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,o1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,a1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,c1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,l1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,d1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,g1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,y1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,b1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,E1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,T1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,C1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,A1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,D1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,I1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:JA,alphahash_pars_fragment:KA,alphamap_fragment:QA,alphamap_pars_fragment:eD,alphatest_fragment:tD,alphatest_pars_fragment:nD,aomap_fragment:iD,aomap_pars_fragment:rD,batching_pars_vertex:sD,batching_vertex:oD,begin_vertex:aD,beginnormal_vertex:cD,bsdfs:lD,iridescence_fragment:uD,bumpmap_pars_fragment:dD,clipping_planes_fragment:hD,clipping_planes_pars_fragment:fD,clipping_planes_pars_vertex:pD,clipping_planes_vertex:mD,color_fragment:gD,color_pars_fragment:vD,color_pars_vertex:yD,color_vertex:_D,common:xD,cube_uv_reflection_fragment:MD,defaultnormal_vertex:bD,displacementmap_pars_vertex:wD,displacementmap_vertex:SD,emissivemap_fragment:ED,emissivemap_pars_fragment:TD,colorspace_fragment:CD,colorspace_pars_fragment:AD,envmap_fragment:DD,envmap_common_pars_fragment:ID,envmap_pars_fragment:RD,envmap_pars_vertex:ND,envmap_physical_pars_fragment:WD,envmap_vertex:PD,fog_vertex:LD,fog_pars_vertex:OD,fog_fragment:FD,fog_pars_fragment:UD,gradientmap_pars_fragment:kD,lightmap_fragment:BD,lightmap_pars_fragment:VD,lights_lambert_fragment:zD,lights_lambert_pars_fragment:HD,lights_pars_begin:GD,lights_toon_fragment:jD,lights_toon_pars_fragment:$D,lights_phong_fragment:qD,lights_phong_pars_fragment:XD,lights_physical_fragment:YD,lights_physical_pars_fragment:ZD,lights_fragment_begin:JD,lights_fragment_maps:KD,lights_fragment_end:QD,logdepthbuf_fragment:eI,logdepthbuf_pars_fragment:tI,logdepthbuf_pars_vertex:nI,logdepthbuf_vertex:iI,map_fragment:rI,map_pars_fragment:sI,map_particle_fragment:oI,map_particle_pars_fragment:aI,metalnessmap_fragment:cI,metalnessmap_pars_fragment:lI,morphinstance_vertex:uI,morphcolor_vertex:dI,morphnormal_vertex:hI,morphtarget_pars_vertex:fI,morphtarget_vertex:pI,normal_fragment_begin:mI,normal_fragment_maps:gI,normal_pars_fragment:vI,normal_pars_vertex:yI,normal_vertex:_I,normalmap_pars_fragment:xI,clearcoat_normal_fragment_begin:MI,clearcoat_normal_fragment_maps:bI,clearcoat_pars_fragment:wI,iridescence_pars_fragment:SI,opaque_fragment:EI,packing:TI,premultiplied_alpha_fragment:CI,project_vertex:AI,dithering_fragment:DI,dithering_pars_fragment:II,roughnessmap_fragment:RI,roughnessmap_pars_fragment:NI,shadowmap_pars_fragment:PI,shadowmap_pars_vertex:LI,shadowmap_vertex:OI,shadowmask_pars_fragment:FI,skinbase_vertex:UI,skinning_pars_vertex:kI,skinning_vertex:BI,skinnormal_vertex:VI,specularmap_fragment:zI,specularmap_pars_fragment:HI,tonemapping_fragment:GI,tonemapping_pars_fragment:WI,transmission_fragment:jI,transmission_pars_fragment:$I,uv_pars_fragment:qI,uv_pars_vertex:XI,uv_vertex:YI,worldpos_vertex:ZI,background_vert:JI,background_frag:KI,backgroundCube_vert:QI,backgroundCube_frag:e1,cube_vert:t1,cube_frag:n1,depth_vert:i1,depth_frag:r1,distanceRGBA_vert:s1,distanceRGBA_frag:o1,equirect_vert:a1,equirect_frag:c1,linedashed_vert:l1,linedashed_frag:u1,meshbasic_vert:d1,meshbasic_frag:h1,meshlambert_vert:f1,meshlambert_frag:p1,meshmatcap_vert:m1,meshmatcap_frag:g1,meshnormal_vert:v1,meshnormal_frag:y1,meshphong_vert:_1,meshphong_frag:x1,meshphysical_vert:M1,meshphysical_frag:b1,meshtoon_vert:w1,meshtoon_frag:S1,points_vert:E1,points_frag:T1,shadow_vert:C1,shadow_frag:A1,sprite_vert:D1,sprite_frag:I1},ne={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Kn={basic:{uniforms:Xt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Xt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Xt([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Xt([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Xt([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Ye(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Xt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Xt([ne.points,ne.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Xt([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Xt([ne.common,ne.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Xt([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Xt([ne.sprite,ne.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Xt([ne.common,ne.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Xt([ne.lights,ne.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Kn.physical={uniforms:Xt([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};var dl={r:0,b:0,g:0},Er=new Or,R1=new Tt;function N1(n,e,t,i,r,s,o){let a=new Ye(0),c=s===!0?0:1,l,u,d=null,h=0,m=null;function g(p,f){let S=!1,x=f.isScene===!0?f.background:null;x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?y(a,c):x&&x.isColor&&(y(x,1),S=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Vl)?(u===void 0&&(u=new tn(new oa(1,1,1),new Qn({name:"BackgroundCubeMaterial",uniforms:Zs(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Er.copy(f.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(R1.makeRotationFromEuler(Er)),u.material.toneMapped=ct.getTransfer(x.colorSpace)!==pt,(d!==x||h!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new tn(new Ol(2,2),new Qn({name:"BackgroundMaterial",uniforms:Zs(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.toneMapped=ct.getTransfer(x.colorSpace)!==pt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,d=x,h=x.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function y(p,f){p.getRGB(dl,H0(n)),i.buffers.color.setClear(dl.r,dl.g,dl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(p,f=1){a.set(p),c=f,y(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,y(a,c)},render:g}}function P1(n,e,t,i){let r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=p(null),l=c,u=!1;function d(D,G,z,$,H){let j=!1;if(o){let q=y($,z,G);l!==q&&(l=q,m(l.object)),j=f(D,$,z,H),j&&S(D,$,z,H)}else{let q=G.wireframe===!0;(l.geometry!==$.id||l.program!==z.id||l.wireframe!==q)&&(l.geometry=$.id,l.program=z.id,l.wireframe=q,j=!0)}H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,k(D,G,z,$),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function y(D,G,z){let $=z.wireframe===!0,H=a[D.id];H===void 0&&(H={},a[D.id]=H);let j=H[G.id];j===void 0&&(j={},H[G.id]=j);let q=j[$];return q===void 0&&(q=p(h()),j[$]=q),q}function p(D){let G=[],z=[],$=[];for(let H=0;H<r;H++)G[H]=0,z[H]=0,$[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:z,attributeDivisors:$,object:D,attributes:{},index:null}}function f(D,G,z,$){let H=l.attributes,j=G.attributes,q=0,ie=z.getAttributes();for(let de in ie)if(ie[de].location>=0){let B=H[de],Y=j[de];if(Y===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(Y=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(Y=D.instanceColor)),B===void 0||B.attribute!==Y||Y&&B.data!==Y.data)return!0;q++}return l.attributesNum!==q||l.index!==$}function S(D,G,z,$){let H={},j=G.attributes,q=0,ie=z.getAttributes();for(let de in ie)if(ie[de].location>=0){let B=j[de];B===void 0&&(de==="instanceMatrix"&&D.instanceMatrix&&(B=D.instanceMatrix),de==="instanceColor"&&D.instanceColor&&(B=D.instanceColor));let Y={};Y.attribute=B,B&&B.data&&(Y.data=B.data),H[de]=Y,q++}l.attributes=H,l.attributesNum=q,l.index=$}function x(){let D=l.newAttributes;for(let G=0,z=D.length;G<z;G++)D[G]=0}function w(D){I(D,0)}function I(D,G){let z=l.newAttributes,$=l.enabledAttributes,H=l.attributeDivisors;z[D]=1,$[D]===0&&(n.enableVertexAttribArray(D),$[D]=1),H[D]!==G&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),H[D]=G)}function C(){let D=l.newAttributes,G=l.enabledAttributes;for(let z=0,$=G.length;z<$;z++)G[z]!==D[z]&&(n.disableVertexAttribArray(z),G[z]=0)}function T(D,G,z,$,H,j,q){q===!0?n.vertexAttribIPointer(D,G,z,H,j):n.vertexAttribPointer(D,G,z,$,H,j)}function k(D,G,z,$){if(i.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let H=$.attributes,j=z.getAttributes(),q=G.defaultAttributeValues;for(let ie in j){let de=j[ie];if(de.location>=0){let Ue=H[ie];if(Ue===void 0&&(ie==="instanceMatrix"&&D.instanceMatrix&&(Ue=D.instanceMatrix),ie==="instanceColor"&&D.instanceColor&&(Ue=D.instanceColor)),Ue!==void 0){let B=Ue.normalized,Y=Ue.itemSize,ue=t.get(Ue);if(ue===void 0)continue;let Ae=ue.buffer,ve=ue.type,he=ue.bytesPerElement,st=i.isWebGL2===!0&&(ve===n.INT||ve===n.UNSIGNED_INT||Ue.gpuType===R0);if(Ue.isInterleavedBufferAttribute){let De=Ue.data,N=De.stride,Ot=Ue.offset;if(De.isInstancedInterleavedBuffer){for(let _e=0;_e<de.locationSize;_e++)I(de.location+_e,De.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=De.meshPerAttribute*De.count)}else for(let _e=0;_e<de.locationSize;_e++)w(de.location+_e);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let _e=0;_e<de.locationSize;_e++)T(de.location+_e,Y/de.locationSize,ve,B,N*he,(Ot+Y/de.locationSize*_e)*he,st)}else{if(Ue.isInstancedBufferAttribute){for(let De=0;De<de.locationSize;De++)I(de.location+De,Ue.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let De=0;De<de.locationSize;De++)w(de.location+De);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let De=0;De<de.locationSize;De++)T(de.location+De,Y/de.locationSize,ve,B,Y*he,Y/de.locationSize*De*he,st)}}else if(q!==void 0){let B=q[ie];if(B!==void 0)switch(B.length){case 2:n.vertexAttrib2fv(de.location,B);break;case 3:n.vertexAttrib3fv(de.location,B);break;case 4:n.vertexAttrib4fv(de.location,B);break;default:n.vertexAttrib1fv(de.location,B)}}}}C()}function K(){ee();for(let D in a){let G=a[D];for(let z in G){let $=G[z];for(let H in $)g($[H].object),delete $[H];delete G[z]}delete a[D]}}function _(D){if(a[D.id]===void 0)return;let G=a[D.id];for(let z in G){let $=G[z];for(let H in $)g($[H].object),delete $[H];delete G[z]}delete a[D.id]}function E(D){for(let G in a){let z=a[G];if(z[D.id]===void 0)continue;let $=z[D.id];for(let H in $)g($[H].object),delete $[H];delete z[D.id]}}function ee(){J(),u=!0,l!==c&&(l=c,m(l.object))}function J(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:d,reset:ee,resetDefaultState:J,dispose:K,releaseStatesOfGeometry:_,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:w,disableUnusedAttributes:C}}function L1(n,e,t,i){let r=i.isWebGL2,s;function o(u){s=u}function a(u,d){n.drawArrays(s,u,d),t.update(d,s,1)}function c(u,d,h){if(h===0)return;let m,g;if(r)m=n,g="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,u,d,h),t.update(d,s,h)}function l(u,d,h){if(h===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h;g++)this.render(u[g],d[g]);else{m.multiDrawArraysWEBGL(s,u,0,d,0,h);let g=0;for(let y=0;y<h;y++)g+=d[y];t.update(g,s,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function O1(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,w=o||e.has("OES_texture_float"),I=x&&w,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:f,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:I,maxSamples:C}}function F1(n){let e=this,t=null,i=0,r=!1,s=!1,o=new yi,a=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let m=d.length!==0||h||i!==0||r;return r=h,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,m){let g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{let S=s?0:i,x=S*4,w=f.clippingState||null;c.value=w,w=u(g,h,x,m);for(let I=0;I!==x;++I)w[I]=t[I];f.clippingState=w,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,m,g){let y=d!==null?d.length:0,p=null;if(y!==0){if(p=c.value,g!==!0||p===null){let f=m+y*4,S=h.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<f)&&(p=new Float32Array(f));for(let x=0,w=m;x!==y;++x,w+=4)o.copy(d[x]).applyMatrix4(S,a),o.normal.toArray(p,w),p[w+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function U1(n){let e=new WeakMap;function t(o,a){return a===Sf?o.mapping=qs:a===Ef&&(o.mapping=Xs),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===Sf||a===Ef)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Lf(c.height);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Of=class extends Nl{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Hs=4,t0=[.125,.215,.35,.446,.526,.582],Dr=20,gf=new Of,n0=new Ye,vf=null,yf=0,_f=0,Cr=(1+Math.sqrt(5))/2,Vs=1/Cr,i0=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,Cr,Vs),new P(0,Cr,-Vs),new P(Vs,0,Cr),new P(-Vs,0,Cr),new P(Cr,Vs,0),new P(-Cr,Vs,0)],Fl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){vf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel(),this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vf,yf,_f),e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===Xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vf=this._renderer.getRenderTarget(),yf=this._renderer.getActiveCubeFace(),_f=this._renderer.getActiveMipmapLevel();let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:ra,format:Un,colorSpace:nr,depthBuffer:!1},r=r0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r0(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k1(s)),this._blurMaterial=B1(s,e,t)}return r}_compileMaterial(e){let t=new tn(this._lodPlanes[0],e);this._renderer.compile(t,gf)}_sceneToCubeUV(e,t,i,r){let a=new Wt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(n0),u.toneMapping=Zi,u.autoClear=!1;let m=new Dl({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new tn(new oa,m),y=!1,p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(n0),y=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):S===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));let x=this._cubeSize;hl(r,S*x,f>2?x:0,x,x),u.setRenderTarget(r),y&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===qs||e.mapping===Xs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=o0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s0());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new tn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;hl(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,gf)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){let s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=i0[(r-1)%i0.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,d=new tn(this._lodPlanes[r],l),h=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Dr-1),y=s/g,p=isFinite(s)?1+Math.floor(u*y):Dr;p>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Dr}`);let f=[],S=0;for(let T=0;T<Dr;++T){let k=T/y,K=Math.exp(-k*k/2);f.push(K),T===0?S+=K:T<p&&(S+=2*K)}for(let T=0;T<f.length;T++)f[T]=f[T]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);let{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-i;let w=this._sizeLods[r],I=3*w*(r>x-Hs?r-x+Hs:0),C=4*(this._cubeSize-w);hl(t,I,C,3*w,2*w),c.setRenderTarget(t),c.render(d,gf)}};function k1(n){let e=[],t=[],i=[],r=n,s=n-Hs+1+t0.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Hs?c=t0[o-n+Hs-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),u=-l,d=1+l,h=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,g=6,y=3,p=2,f=1,S=new Float32Array(y*g*m),x=new Float32Array(p*g*m),w=new Float32Array(f*g*m);for(let C=0;C<m;C++){let T=C%3*2/3-1,k=C>2?0:-1,K=[T,k,0,T+2/3,k,0,T+2/3,k+1,0,T,k,0,T+2/3,k+1,0,T,k+1,0];S.set(K,y*g*C),x.set(h,p*g*C);let _=[C,C,C,C,C,C];w.set(_,f*g*C)}let I=new En;I.setAttribute("position",new wn(S,y)),I.setAttribute("uv",new wn(x,p)),I.setAttribute("faceIndex",new wn(w,f)),e.push(I),r>Hs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function r0(n,e,t){let i=new bi(n,e,t);return i.texture.mapping=Vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function B1(n,e,t){let i=new Float32Array(Dr),r=new P(0,1,0);return new Qn({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function s0(){return new Qn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function o0(){return new Qn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:up(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function up(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function V1(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===Sf||c===Ef,u=c===qs||c===Xs;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Fl(n)),d=l?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{let d=a.image;if(l&&d&&d.height>0||u&&d&&r(d)){t===null&&(t=new Fl(n));let h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function z1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){let r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function H1(n,e,t,i){let r={},s=new WeakMap;function o(d){let h=d.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);for(let g in h.morphAttributes){let y=h.morphAttributes[g];for(let p=0,f=y.length;p<f;p++)e.remove(y[p])}h.removeEventListener("dispose",o),delete r[h.id];let m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(d){let h=d.attributes;for(let g in h)e.update(h[g],n.ARRAY_BUFFER);let m=d.morphAttributes;for(let g in m){let y=m[g];for(let p=0,f=y.length;p<f;p++)e.update(y[p],n.ARRAY_BUFFER)}}function l(d){let h=[],m=d.index,g=d.attributes.position,y=0;if(m!==null){let S=m.array;y=m.version;for(let x=0,w=S.length;x<w;x+=3){let I=S[x+0],C=S[x+1],T=S[x+2];h.push(I,C,C,T,T,I)}}else if(g!==void 0){let S=g.array;y=g.version;for(let x=0,w=S.length/3-1;x<w;x+=3){let I=x+0,C=x+1,T=x+2;h.push(I,C,C,T,T,I)}}else return;let p=new(V0(h)?Rl:Il)(h,1);p.version=y;let f=s.get(d);f&&e.remove(f),s.set(d,p)}function u(d){let h=s.get(d);if(h){let m=d.index;m!==null&&h.version<m.version&&l(d)}else l(d);return s.get(d)}return{get:a,update:c,getWireframeAttribute:u}}function G1(n,e,t,i){let r=i.isWebGL2,s;function o(m){s=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function u(m,g){n.drawElements(s,g,a,m*c),t.update(g,s,1)}function d(m,g,y){if(y===0)return;let p,f;if(r)p=n,f="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[f](s,g,a,m*c,y),t.update(g,s,y)}function h(m,g,y){if(y===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<y;f++)this.render(m[f]/c,g[f]);else{p.multiDrawElementsWEBGL(s,g,0,a,m,0,y);let f=0;for(let S=0;S<y;S++)f+=g[S];t.update(f,s,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h}function W1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function j1(n,e){return n[0]-e[0]}function $1(n,e){return Math.abs(e[1])-Math.abs(n[1])}function q1(n,e,t){let i={},r=new Float32Array(8),s=new WeakMap,o=new Bt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,d){let h=l.morphTargetInfluences;if(e.isWebGL2===!0){let g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=g!==void 0?g.length:0,p=s.get(u);if(p===void 0||p.count!==y){let J=function(){E.dispose(),s.delete(u),u.removeEventListener("dispose",J)};var m=J;p!==void 0&&p.texture.dispose();let f=u.morphAttributes.position!==void 0,S=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],C=u.morphAttributes.color||[],T=0;f===!0&&(T=1),S===!0&&(T=2),x===!0&&(T=3);let k=u.attributes.position.count*T,K=1;k>e.maxTextureSize&&(K=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);let _=new Float32Array(k*K*4*y),E=new Cl(_,k,K,y);E.type=xi,E.needsUpdate=!0;let ee=T*4;for(let D=0;D<y;D++){let G=w[D],z=I[D],$=C[D],H=k*K*4*D;for(let j=0;j<G.count;j++){let q=j*ee;f===!0&&(o.fromBufferAttribute(G,j),_[H+q+0]=o.x,_[H+q+1]=o.y,_[H+q+2]=o.z,_[H+q+3]=0),S===!0&&(o.fromBufferAttribute(z,j),_[H+q+4]=o.x,_[H+q+5]=o.y,_[H+q+6]=o.z,_[H+q+7]=0),x===!0&&(o.fromBufferAttribute($,j),_[H+q+8]=o.x,_[H+q+9]=o.y,_[H+q+10]=o.z,_[H+q+11]=$.itemSize===4?o.w:1)}}p={count:y,texture:E,size:new it(k,K)},s.set(u,p),u.addEventListener("dispose",J)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",l.morphTexture,t);else{let f=0;for(let x=0;x<h.length;x++)f+=h[x];let S=u.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",S),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{let g=h===void 0?0:h.length,y=i[u.id];if(y===void 0||y.length!==g){y=[];for(let w=0;w<g;w++)y[w]=[w,0];i[u.id]=y}for(let w=0;w<g;w++){let I=y[w];I[0]=w,I[1]=h[w]}y.sort($1);for(let w=0;w<8;w++)w<g&&y[w][1]?(a[w][0]=y[w][0],a[w][1]=y[w][1]):(a[w][0]=Number.MAX_SAFE_INTEGER,a[w][1]=0);a.sort(j1);let p=u.morphAttributes.position,f=u.morphAttributes.normal,S=0;for(let w=0;w<8;w++){let I=a[w],C=I[0],T=I[1];C!==Number.MAX_SAFE_INTEGER&&T?(p&&u.getAttribute("morphTarget"+w)!==p[C]&&u.setAttribute("morphTarget"+w,p[C]),f&&u.getAttribute("morphNormal"+w)!==f[C]&&u.setAttribute("morphNormal"+w,f[C]),r[w]=T,S+=T):(p&&u.hasAttribute("morphTarget"+w)===!0&&u.deleteAttribute("morphTarget"+w),f&&u.hasAttribute("morphNormal"+w)===!0&&u.deleteAttribute("morphNormal"+w),r[w]=0)}let x=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function X1(n,e,t,i){let r=new WeakMap;function s(c){let l=i.render.frame,u=c.geometry,d=e.get(c,u);if(r.get(d)!==l&&(e.update(d),r.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==l&&(h.update(),r.set(h,l))}return d}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var Ul=class extends Br{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Nr,u!==Nr&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Nr&&(i=qi),i===void 0&&u===Ys&&(i=Rr),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=c!==void 0?c:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},W0=new Br,j0=new Ul(1,1);j0.compareFunction=B0;var $0=new Cl,q0=new Nf,X0=new Pl,a0=[],c0=[],l0=new Float32Array(16),u0=new Float32Array(9),d0=new Float32Array(4);function eo(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=a0[r];if(s===void 0&&(s=new Float32Array(r),a0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Hl(n,e){let t=c0[e];t===void 0&&(t=new Int32Array(e),c0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Y1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Z1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function J1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function K1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function Q1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(At(t,i))return;d0.set(i),n.uniformMatrix2fv(this.addr,!1,d0),Dt(t,i)}}function eR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(At(t,i))return;u0.set(i),n.uniformMatrix3fv(this.addr,!1,u0),Dt(t,i)}}function tR(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(At(t,i))return;l0.set(i),n.uniformMatrix4fv(this.addr,!1,l0),Dt(t,i)}}function nR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function rR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function sR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function oR(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function aR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function cR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function lR(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function uR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s=this.type===n.SAMPLER_2D_SHADOW?j0:W0;t.setTexture2D(e||s,r)}function dR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||q0,r)}function hR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||X0,r)}function fR(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||$0,r)}function pR(n){switch(n){case 5126:return Y1;case 35664:return Z1;case 35665:return J1;case 35666:return K1;case 35674:return Q1;case 35675:return eR;case 35676:return tR;case 5124:case 35670:return nR;case 35667:case 35671:return iR;case 35668:case 35672:return rR;case 35669:case 35673:return sR;case 5125:return oR;case 36294:return aR;case 36295:return cR;case 36296:return lR;case 35678:case 36198:case 36298:case 36306:case 35682:return uR;case 35679:case 36299:case 36307:return dR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return fR}}function mR(n,e){n.uniform1fv(this.addr,e)}function gR(n,e){let t=eo(e,this.size,2);n.uniform2fv(this.addr,t)}function vR(n,e){let t=eo(e,this.size,3);n.uniform3fv(this.addr,t)}function yR(n,e){let t=eo(e,this.size,4);n.uniform4fv(this.addr,t)}function _R(n,e){let t=eo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function xR(n,e){let t=eo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function MR(n,e){let t=eo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bR(n,e){n.uniform1iv(this.addr,e)}function wR(n,e){n.uniform2iv(this.addr,e)}function SR(n,e){n.uniform3iv(this.addr,e)}function ER(n,e){n.uniform4iv(this.addr,e)}function TR(n,e){n.uniform1uiv(this.addr,e)}function CR(n,e){n.uniform2uiv(this.addr,e)}function AR(n,e){n.uniform3uiv(this.addr,e)}function DR(n,e){n.uniform4uiv(this.addr,e)}function IR(n,e,t){let i=this.cache,r=e.length,s=Hl(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||W0,s[o])}function RR(n,e,t){let i=this.cache,r=e.length,s=Hl(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||q0,s[o])}function NR(n,e,t){let i=this.cache,r=e.length,s=Hl(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||X0,s[o])}function PR(n,e,t){let i=this.cache,r=e.length,s=Hl(t,r);At(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||$0,s[o])}function LR(n){switch(n){case 5126:return mR;case 35664:return gR;case 35665:return vR;case 35666:return yR;case 35674:return _R;case 35675:return xR;case 35676:return MR;case 5124:case 35670:return bR;case 35667:case 35671:return wR;case 35668:case 35672:return SR;case 35669:case 35673:return ER;case 5125:return TR;case 36294:return CR;case 36295:return AR;case 36296:return DR;case 35678:case 36198:case 36298:case 36306:case 35682:return IR;case 35679:case 36299:case 36307:return RR;case 35680:case 36300:case 36308:case 36293:return NR;case 36289:case 36303:case 36311:case 36292:return PR}}var Ff=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pR(t.type)}},Uf=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=LR(t.type)}},kf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],i)}}},xf=/(\w+)(\])?(\[|\.)?/g;function h0(n,e){n.seq.push(e),n.map[e.id]=e}function OR(n,e,t){let i=n.name,r=i.length;for(xf.lastIndex=0;;){let s=xf.exec(i),o=xf.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){h0(t,l===void 0?new Ff(a,n,e):new Uf(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new kf(a),h0(t,d)),t=d}}}var $s=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);OR(s,o,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&i.push(o)}return i}};function f0(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var FR=37297,UR=0;function kR(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function BR(n){let e=ct.getPrimaries(ct.workingColorSpace),t=ct.getPrimaries(n),i;switch(e===t?i="":e===bl&&t===Ml?i="LinearDisplayP3ToLinearSRGB":e===Ml&&t===bl&&(i="LinearSRGBToLinearDisplayP3"),n){case nr:case zl:return[i,"LinearTransferOETF"];case Jn:case lp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function p0(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+kR(n.getShaderSource(e),o)}else return r}function VR(n,e){let t=BR(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function zR(n,e){let t;switch(e){case nA:t="Linear";break;case iA:t="Reinhard";break;case rA:t="OptimizedCineon";break;case sA:t="ACESFilmic";break;case aA:t="AgX";break;case cA:t="Neutral";break;case oA:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function HR(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Gs).join(`
`)}function GR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function WR(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jR(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),o=s.name,a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Gs(n){return n!==""}function m0(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function g0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var $R=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bf(n){return n.replace($R,XR)}var qR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function XR(n,e){let t=ze[e];if(t===void 0){let i=qR.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bf(t)}var YR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v0(n){return n.replace(YR,ZR)}function ZR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function y0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function JR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===I0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===IC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function KR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case qs:case Xs:e="ENVMAP_TYPE_CUBE";break;case Vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Xs:e="ENVMAP_MODE_REFRACTION";break}return e}function eN(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ap:e="ENVMAP_BLENDING_MULTIPLY";break;case eA:e="ENVMAP_BLENDING_MIX";break;case tA:e="ENVMAP_BLENDING_ADD";break}return e}function tN(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function nN(n,e,t,i){let r=n.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=JR(t),l=KR(t),u=QR(t),d=eN(t),h=tN(t),m=t.isWebGL2?"":HR(t),g=GR(t),y=WR(s),p=r.createProgram(),f,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Gs).join(`
`),f.length>0&&(f+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Gs).join(`
`),S.length>0&&(S+=`
`)):(f=[y0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),S=[m,y0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?ze.tonemapping_pars_fragment:"",t.toneMapping!==Zi?zR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,VR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gs).join(`
`)),o=Bf(o),o=m0(o,t),o=g0(o,t),a=Bf(a),a=m0(a,t),a=g0(a,t),o=v0(o),a=v0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===O_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===O_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let w=x+f+o,I=x+S+a,C=f0(r,r.VERTEX_SHADER,w),T=f0(r,r.FRAGMENT_SHADER,I);r.attachShader(p,C),r.attachShader(p,T),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function k(ee){if(n.debug.checkShaderErrors){let J=r.getProgramInfoLog(p).trim(),D=r.getShaderInfoLog(C).trim(),G=r.getShaderInfoLog(T).trim(),z=!0,$=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,p,C,T);else{let H=p0(r,C,"vertex"),j=p0(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+ee.name+`
Material Type: `+ee.type+`

Program Info Log: `+J+`
`+H+`
`+j)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(D===""||G==="")&&($=!1);$&&(ee.diagnostics={runnable:z,programLog:J,vertexShader:{log:D,prefix:f},fragmentShader:{log:G,prefix:S}})}r.deleteShader(C),r.deleteShader(T),K=new $s(r,p),_=jR(r,p)}let K;this.getUniforms=function(){return K===void 0&&k(this),K};let _;this.getAttributes=function(){return _===void 0&&k(this),_};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(p,FR)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=UR++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=T,this}var iN=0,Vf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new zf(e),t.set(e,i)),i}},zf=class{constructor(e){this.id=iN++,this.code=e,this.usedTimes=0}};function rN(n,e,t,i,r,s,o){let a=new Al,c=new Vf,l=new Set,u=[],d=r.isWebGL2,h=r.logarithmicDepthBuffer,m=r.vertexTextures,g=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function f(_,E,ee,J,D){let G=J.fog,z=D.geometry,$=_.isMeshStandardMaterial?J.environment:null,H=(_.isMeshStandardMaterial?t:e).get(_.envMap||$),j=H&&H.mapping===Vl?H.image.height:null,q=y[_.type];_.precision!==null&&(g=r.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let ie=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,de=ie!==void 0?ie.length:0,Ue=0;z.morphAttributes.position!==void 0&&(Ue=1),z.morphAttributes.normal!==void 0&&(Ue=2),z.morphAttributes.color!==void 0&&(Ue=3);let B,Y,ue,Ae;if(q){let dt=Kn[q];B=dt.vertexShader,Y=dt.fragmentShader}else B=_.vertexShader,Y=_.fragmentShader,c.update(_),ue=c.getVertexShaderID(_),Ae=c.getFragmentShaderID(_);let ve=n.getRenderTarget(),he=D.isInstancedMesh===!0,st=D.isBatchedMesh===!0,De=!!_.map,N=!!_.matcap,Ot=!!H,_e=!!_.aoMap,je=!!_.lightMap,Se=!!_.bumpMap,Je=!!_.normalMap,Ge=!!_.displacementMap,qe=!!_.emissiveMap,yt=!!_.metalnessMap,b=!!_.roughnessMap,v=_.anisotropy>0,V=_.clearcoat>0,W=_.iridescence>0,Z=_.sheen>0,X=_.transmission>0,ke=v&&!!_.anisotropyMap,Ee=V&&!!_.clearcoatMap,re=V&&!!_.clearcoatNormalMap,ae=V&&!!_.clearcoatRoughnessMap,Be=W&&!!_.iridescenceMap,Q=W&&!!_.iridescenceThicknessMap,wt=Z&&!!_.sheenColorMap,Xe=Z&&!!_.sheenRoughnessMap,ye=!!_.specularMap,pe=!!_.specularColorMap,me=!!_.specularIntensityMap,Ke=X&&!!_.transmissionMap,Le=X&&!!_.thicknessMap,mt=!!_.gradientMap,A=!!_.alphaMap,se=_.alphaTest>0,O=!!_.alphaHash,te=!!_.extensions,ce=Zi;_.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(ce=n.toneMapping);let Ze={isWebGL2:d,shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:B,fragmentShader:Y,defines:_.defines,customVertexShaderID:ue,customFragmentShaderID:Ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:st,instancing:he,instancingColor:he&&D.instanceColor!==null,instancingMorph:he&&D.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:nr,alphaToCoverage:!!_.alphaToCoverage,map:De,matcap:N,envMap:Ot,envMapMode:Ot&&H.mapping,envMapCubeUVHeight:j,aoMap:_e,lightMap:je,bumpMap:Se,normalMap:Je,displacementMap:m&&Ge,emissiveMap:qe,normalMapObjectSpace:Je&&_.normalMapType===_A,normalMapTangentSpace:Je&&_.normalMapType===k0,metalnessMap:yt,roughnessMap:b,anisotropy:v,anisotropyMap:ke,clearcoat:V,clearcoatMap:Ee,clearcoatNormalMap:re,clearcoatRoughnessMap:ae,iridescence:W,iridescenceMap:Be,iridescenceThicknessMap:Q,sheen:Z,sheenColorMap:wt,sheenRoughnessMap:Xe,specularMap:ye,specularColorMap:pe,specularIntensityMap:me,transmission:X,transmissionMap:Ke,thicknessMap:Le,gradientMap:mt,opaque:_.transparent===!1&&_.blending===Ws&&_.alphaToCoverage===!1,alphaMap:A,alphaTest:se,alphaHash:O,combine:_.combine,mapUv:De&&p(_.map.channel),aoMapUv:_e&&p(_.aoMap.channel),lightMapUv:je&&p(_.lightMap.channel),bumpMapUv:Se&&p(_.bumpMap.channel),normalMapUv:Je&&p(_.normalMap.channel),displacementMapUv:Ge&&p(_.displacementMap.channel),emissiveMapUv:qe&&p(_.emissiveMap.channel),metalnessMapUv:yt&&p(_.metalnessMap.channel),roughnessMapUv:b&&p(_.roughnessMap.channel),anisotropyMapUv:ke&&p(_.anisotropyMap.channel),clearcoatMapUv:Ee&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Be&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&p(_.sheenRoughnessMap.channel),specularMapUv:ye&&p(_.specularMap.channel),specularColorMapUv:pe&&p(_.specularColorMap.channel),specularIntensityMapUv:me&&p(_.specularIntensityMap.channel),transmissionMapUv:Ke&&p(_.transmissionMap.channel),thicknessMapUv:Le&&p(_.thicknessMap.channel),alphaMapUv:A&&p(_.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Je||v),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!z.attributes.uv&&(De||A),fog:!!G,useFog:_.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:D.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ue,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&ee.length>0,shadowMapType:n.shadowMap.type,toneMapping:ce,useLegacyLights:n._useLegacyLights,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&ct.getTransfer(_.map.colorSpace)===pt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_i,flipSided:_.side===nn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionDerivatives:te&&_.extensions.derivatives===!0,extensionFragDepth:te&&_.extensions.fragDepth===!0,extensionDrawBuffers:te&&_.extensions.drawBuffers===!0,extensionShaderTextureLOD:te&&_.extensions.shaderTextureLOD===!0,extensionClipCullDistance:te&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:te&&_.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function S(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let ee in _.defines)E.push(ee),E.push(_.defines[ee]);return _.isRawShaderMaterial===!1&&(x(E,_),w(E,_),E.push(n.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function x(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function w(_,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.instancingMorph&&a.enable(4),E.matcap&&a.enable(5),E.envMap&&a.enable(6),E.normalMapObjectSpace&&a.enable(7),E.normalMapTangentSpace&&a.enable(8),E.clearcoat&&a.enable(9),E.iridescence&&a.enable(10),E.alphaTest&&a.enable(11),E.vertexColors&&a.enable(12),E.vertexAlphas&&a.enable(13),E.vertexUv1s&&a.enable(14),E.vertexUv2s&&a.enable(15),E.vertexUv3s&&a.enable(16),E.vertexTangents&&a.enable(17),E.anisotropy&&a.enable(18),E.alphaHash&&a.enable(19),E.batching&&a.enable(20),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),_.push(a.mask)}function I(_){let E=y[_.type],ee;if(E){let J=Kn[E];ee=jA.clone(J.uniforms)}else ee=_.uniforms;return ee}function C(_,E){let ee;for(let J=0,D=u.length;J<D;J++){let G=u[J];if(G.cacheKey===E){ee=G,++ee.usedTimes;break}}return ee===void 0&&(ee=new nN(n,E,_,s),u.push(ee)),ee}function T(_){if(--_.usedTimes===0){let E=u.indexOf(_);u[E]=u[u.length-1],u.pop(),_.destroy()}}function k(_){c.remove(_)}function K(){c.dispose()}return{getParameters:f,getProgramCacheKey:S,getUniforms:I,acquireProgram:C,releaseProgram:T,releaseShaderCache:k,programs:u,dispose:K}}function sN(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function oN(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function _0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function x0(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,m,g,y,p){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:m,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=y,f.group=p),e++,f}function a(d,h,m,g,y,p){let f=o(d,h,m,g,y,p);m.transmission>0?i.push(f):m.transparent===!0?r.push(f):t.push(f)}function c(d,h,m,g,y,p){let f=o(d,h,m,g,y,p);m.transmission>0?i.unshift(f):m.transparent===!0?r.unshift(f):t.unshift(f)}function l(d,h){t.length>1&&t.sort(d||oN),i.length>1&&i.sort(h||_0),r.length>1&&r.sort(h||_0)}function u(){for(let d=e,h=n.length;d<h;d++){let m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function aN(){let n=new WeakMap;function e(i,r){let s=n.get(i),o;return s===void 0?(o=new x0,n.set(i,[o])):r>=s.length?(o=new x0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function cN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ye};break;case"SpotLight":t={position:new P,direction:new P,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new P,halfWidth:new P,halfHeight:new P};break}return n[e.id]=t,t}}}function lN(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var uN=0;function dN(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function hN(n,e){let t=new cN,i=lN(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new P);let s=new P,o=new Tt,a=new Tt;function c(u,d){let h=0,m=0,g=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let y=0,p=0,f=0,S=0,x=0,w=0,I=0,C=0,T=0,k=0,K=0;u.sort(dN);let _=d===!0?Math.PI:1;for(let ee=0,J=u.length;ee<J;ee++){let D=u[ee],G=D.color,z=D.intensity,$=D.distance,H=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=G.r*z*_,m+=G.g*z*_,g+=G.b*z*_;else if(D.isLightProbe){for(let j=0;j<9;j++)r.probe[j].addScaledVector(D.sh.coefficients[j],z);K++}else if(D.isDirectionalLight){let j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*_),D.castShadow){let q=D.shadow,ie=i.get(D);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,r.directionalShadow[y]=ie,r.directionalShadowMap[y]=H,r.directionalShadowMatrix[y]=D.shadow.matrix,w++}r.directional[y]=j,y++}else if(D.isSpotLight){let j=t.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(G).multiplyScalar(z*_),j.distance=$,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,r.spot[f]=j;let q=D.shadow;if(D.map&&(r.spotLightMap[T]=D.map,T++,q.updateMatrices(D),D.castShadow&&k++),r.spotLightMatrix[f]=q.matrix,D.castShadow){let ie=i.get(D);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,r.spotShadow[f]=ie,r.spotShadowMap[f]=H,C++}f++}else if(D.isRectAreaLight){let j=t.get(D);j.color.copy(G).multiplyScalar(z),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),r.rectArea[S]=j,S++}else if(D.isPointLight){let j=t.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity*_),j.distance=D.distance,j.decay=D.decay,D.castShadow){let q=D.shadow,ie=i.get(D);ie.shadowBias=q.bias,ie.shadowNormalBias=q.normalBias,ie.shadowRadius=q.radius,ie.shadowMapSize=q.mapSize,ie.shadowCameraNear=q.camera.near,ie.shadowCameraFar=q.camera.far,r.pointShadow[p]=ie,r.pointShadowMap[p]=H,r.pointShadowMatrix[p]=D.shadow.matrix,I++}r.point[p]=j,p++}else if(D.isHemisphereLight){let j=t.get(D);j.skyColor.copy(D.color).multiplyScalar(z*_),j.groundColor.copy(D.groundColor).multiplyScalar(z*_),r.hemi[x]=j,x++}}S>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_FLOAT_1,r.rectAreaLTC2=ne.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ne.LTC_HALF_1,r.rectAreaLTC2=ne.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=g;let E=r.hash;(E.directionalLength!==y||E.pointLength!==p||E.spotLength!==f||E.rectAreaLength!==S||E.hemiLength!==x||E.numDirectionalShadows!==w||E.numPointShadows!==I||E.numSpotShadows!==C||E.numSpotMaps!==T||E.numLightProbes!==K)&&(r.directional.length=y,r.spot.length=f,r.rectArea.length=S,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=I,r.pointShadowMap.length=I,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=I,r.spotLightMatrix.length=C+T-k,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=K,E.directionalLength=y,E.pointLength=p,E.spotLength=f,E.rectAreaLength=S,E.hemiLength=x,E.numDirectionalShadows=w,E.numPointShadows=I,E.numSpotShadows=C,E.numSpotMaps=T,E.numLightProbes=K,r.version=uN++)}function l(u,d){let h=0,m=0,g=0,y=0,p=0,f=d.matrixWorldInverse;for(let S=0,x=u.length;S<x;S++){let w=u[S];if(w.isDirectionalLight){let I=r.directional[h];I.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),h++}else if(w.isSpotLight){let I=r.spot[g];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(f),I.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(f),g++}else if(w.isRectAreaLight){let I=r.rectArea[y];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(f),a.identity(),o.copy(w.matrixWorld),o.premultiply(f),a.extractRotation(o),I.halfWidth.set(w.width*.5,0,0),I.halfHeight.set(0,w.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),y++}else if(w.isPointLight){let I=r.point[m];I.position.setFromMatrixPosition(w.matrixWorld),I.position.applyMatrix4(f),m++}else if(w.isHemisphereLight){let I=r.hemi[p];I.direction.setFromMatrixPosition(w.matrixWorld),I.direction.transformDirection(f),p++}}}return{setup:c,setupView:l,state:r}}function M0(n,e){let t=new hN(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function c(d){t.setup(i,d)}function l(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function fN(n,e){let t=new WeakMap;function i(s,o=0){let a=t.get(s),c;return a===void 0?(c=new M0(n,e),t.set(s,[c])):o>=a.length?(c=new M0(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}var Hf=class extends Sn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vA,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Gf=class extends Sn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},pN=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mN=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function gN(n,e,t){let i=new Ll,r=new it,s=new it,o=new Bt,a=new Hf({depthPacking:yA}),c=new Gf,l={},u=t.maxTextureSize,d={[Ki]:nn,[nn]:Ki,[_i]:_i},h=new Qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:pN,fragmentShader:mN}),m=h.clone();m.defines.HORIZONTAL_PASS=1;let g=new En;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new tn(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=I0;let f=this.type;this.render=function(C,T,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;let K=n.getRenderTarget(),_=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(Yi),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);let J=f!==vi&&this.type===vi,D=f===vi&&this.type!==vi;for(let G=0,z=C.length;G<z;G++){let $=C[G],H=$.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);let j=H.getFrameExtents();if(r.multiply(j),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,H.mapSize.y=s.y)),H.map===null||J===!0||D===!0){let ie=this.type!==vi?{minFilter:Yt,magFilter:Yt}:{};H.map!==null&&H.map.dispose(),H.map=new bi(r.x,r.y,ie),H.map.texture.name=$.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();let q=H.getViewportCount();for(let ie=0;ie<q;ie++){let de=H.getViewport(ie);o.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),ee.viewport(o),H.updateMatrices($,ie),i=H.getFrustum(),w(T,k,H.camera,$,this.type)}H.isPointLightShadow!==!0&&this.type===vi&&S(H,k),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(K,_,E)};function S(C,T){let k=e.update(y);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new bi(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(T,null,k,h,y,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(T,null,k,m,y,null)}function x(C,T,k,K){let _=null,E=k.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)_=E;else if(_=k.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let ee=_.uuid,J=T.uuid,D=l[ee];D===void 0&&(D={},l[ee]=D);let G=D[J];G===void 0&&(G=_.clone(),D[J]=G,T.addEventListener("dispose",I)),_=G}if(_.visible=T.visible,_.wireframe=T.wireframe,K===vi?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:d[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,k.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let ee=n.properties.get(_);ee.light=k}return _}function w(C,T,k,K,_){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&_===vi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,C.matrixWorld);let J=e.update(C),D=C.material;if(Array.isArray(D)){let G=J.groups;for(let z=0,$=G.length;z<$;z++){let H=G[z],j=D[H.materialIndex];if(j&&j.visible){let q=x(C,j,K,_);C.onBeforeShadow(n,C,T,k,J,q,H),n.renderBufferDirect(k,null,J,q,C,H),C.onAfterShadow(n,C,T,k,J,q,H)}}}else if(D.visible){let G=x(C,D,K,_);C.onBeforeShadow(n,C,T,k,J,G,null),n.renderBufferDirect(k,null,J,G,C,null),C.onAfterShadow(n,C,T,k,J,G,null)}}let ee=C.children;for(let J=0,D=ee.length;J<D;J++)w(ee[J],T,k,K,_)}function I(C){C.target.removeEventListener("dispose",I);for(let k in l){let K=l[k],_=C.target.uuid;_ in K&&(K[_].dispose(),delete K[_])}}}function vN(n,e,t){let i=t.isWebGL2;function r(){let A=!1,se=new Bt,O=null,te=new Bt(0,0,0,0);return{setMask:function(ce){O!==ce&&!A&&(n.colorMask(ce,ce,ce,ce),O=ce)},setLocked:function(ce){A=ce},setClear:function(ce,Ze,dt,Ft,pn){pn===!0&&(ce*=Ft,Ze*=Ft,dt*=Ft),se.set(ce,Ze,dt,Ft),te.equals(se)===!1&&(n.clearColor(ce,Ze,dt,Ft),te.copy(se))},reset:function(){A=!1,O=null,te.set(-1,0,0,0)}}}function s(){let A=!1,se=null,O=null,te=null;return{setTest:function(ce){ce?he(n.DEPTH_TEST):st(n.DEPTH_TEST)},setMask:function(ce){se!==ce&&!A&&(n.depthMask(ce),se=ce)},setFunc:function(ce){if(O!==ce){switch(ce){case qC:n.depthFunc(n.NEVER);break;case XC:n.depthFunc(n.ALWAYS);break;case YC:n.depthFunc(n.LESS);break;case vl:n.depthFunc(n.LEQUAL);break;case ZC:n.depthFunc(n.EQUAL);break;case JC:n.depthFunc(n.GEQUAL);break;case KC:n.depthFunc(n.GREATER);break;case QC:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}O=ce}},setLocked:function(ce){A=ce},setClear:function(ce){te!==ce&&(n.clearDepth(ce),te=ce)},reset:function(){A=!1,se=null,O=null,te=null}}}function o(){let A=!1,se=null,O=null,te=null,ce=null,Ze=null,dt=null,Ft=null,pn=null;return{setTest:function(ht){A||(ht?he(n.STENCIL_TEST):st(n.STENCIL_TEST))},setMask:function(ht){se!==ht&&!A&&(n.stencilMask(ht),se=ht)},setFunc:function(ht,jt,Bn){(O!==ht||te!==jt||ce!==Bn)&&(n.stencilFunc(ht,jt,Bn),O=ht,te=jt,ce=Bn)},setOp:function(ht,jt,Bn){(Ze!==ht||dt!==jt||Ft!==Bn)&&(n.stencilOp(ht,jt,Bn),Ze=ht,dt=jt,Ft=Bn)},setLocked:function(ht){A=ht},setClear:function(ht){pn!==ht&&(n.clearStencil(ht),pn=ht)},reset:function(){A=!1,se=null,O=null,te=null,ce=null,Ze=null,dt=null,Ft=null,pn=null}}}let a=new r,c=new s,l=new o,u=new WeakMap,d=new WeakMap,h={},m={},g=new WeakMap,y=[],p=null,f=!1,S=null,x=null,w=null,I=null,C=null,T=null,k=null,K=new Ye(0,0,0),_=0,E=!1,ee=null,J=null,D=null,G=null,z=null,$=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,j=0,q=n.getParameter(n.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=j>=2);let ie=null,de={},Ue=n.getParameter(n.SCISSOR_BOX),B=n.getParameter(n.VIEWPORT),Y=new Bt().fromArray(Ue),ue=new Bt().fromArray(B);function Ae(A,se,O,te){let ce=new Uint8Array(4),Ze=n.createTexture();n.bindTexture(A,Ze),n.texParameteri(A,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(A,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<O;dt++)i&&(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)?n.texImage3D(se,0,n.RGBA,1,1,te,0,n.RGBA,n.UNSIGNED_BYTE,ce):n.texImage2D(se+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ce);return Ze}let ve={};ve[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),ve[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ve[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ve[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),he(n.DEPTH_TEST),c.setFunc(vl),Ge(!1),qe(Jy),he(n.CULL_FACE),Se(Yi);function he(A){h[A]!==!0&&(n.enable(A),h[A]=!0)}function st(A){h[A]!==!1&&(n.disable(A),h[A]=!1)}function De(A,se){return m[A]!==se?(n.bindFramebuffer(A,se),m[A]=se,i&&(A===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=se),A===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=se)),!0):!1}function N(A,se){let O=y,te=!1;if(A){O=g.get(se),O===void 0&&(O=[],g.set(se,O));let ce=A.textures;if(O.length!==ce.length||O[0]!==n.COLOR_ATTACHMENT0){for(let Ze=0,dt=ce.length;Ze<dt;Ze++)O[Ze]=n.COLOR_ATTACHMENT0+Ze;O.length=ce.length,te=!0}}else O[0]!==n.BACK&&(O[0]=n.BACK,te=!0);if(te)if(t.isWebGL2)n.drawBuffers(O);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(O);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ot(A){return p!==A?(n.useProgram(A),p=A,!0):!1}let _e={[Ar]:n.FUNC_ADD,[NC]:n.FUNC_SUBTRACT,[PC]:n.FUNC_REVERSE_SUBTRACT};if(i)_e[t_]=n.MIN,_e[n_]=n.MAX;else{let A=e.get("EXT_blend_minmax");A!==null&&(_e[t_]=A.MIN_EXT,_e[n_]=A.MAX_EXT)}let je={[LC]:n.ZERO,[OC]:n.ONE,[FC]:n.SRC_COLOR,[bf]:n.SRC_ALPHA,[HC]:n.SRC_ALPHA_SATURATE,[VC]:n.DST_COLOR,[kC]:n.DST_ALPHA,[UC]:n.ONE_MINUS_SRC_COLOR,[wf]:n.ONE_MINUS_SRC_ALPHA,[zC]:n.ONE_MINUS_DST_COLOR,[BC]:n.ONE_MINUS_DST_ALPHA,[GC]:n.CONSTANT_COLOR,[WC]:n.ONE_MINUS_CONSTANT_COLOR,[jC]:n.CONSTANT_ALPHA,[$C]:n.ONE_MINUS_CONSTANT_ALPHA};function Se(A,se,O,te,ce,Ze,dt,Ft,pn,ht){if(A===Yi){f===!0&&(st(n.BLEND),f=!1);return}if(f===!1&&(he(n.BLEND),f=!0),A!==RC){if(A!==S||ht!==E){if((x!==Ar||C!==Ar)&&(n.blendEquation(n.FUNC_ADD),x=Ar,C=Ar),ht)switch(A){case Ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ky:n.blendFunc(n.ONE,n.ONE);break;case Qy:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case e_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ky:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qy:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case e_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}w=null,I=null,T=null,k=null,K.set(0,0,0),_=0,S=A,E=ht}return}ce=ce||se,Ze=Ze||O,dt=dt||te,(se!==x||ce!==C)&&(n.blendEquationSeparate(_e[se],_e[ce]),x=se,C=ce),(O!==w||te!==I||Ze!==T||dt!==k)&&(n.blendFuncSeparate(je[O],je[te],je[Ze],je[dt]),w=O,I=te,T=Ze,k=dt),(Ft.equals(K)===!1||pn!==_)&&(n.blendColor(Ft.r,Ft.g,Ft.b,pn),K.copy(Ft),_=pn),S=A,E=!1}function Je(A,se){A.side===_i?st(n.CULL_FACE):he(n.CULL_FACE);let O=A.side===nn;se&&(O=!O),Ge(O),A.blending===Ws&&A.transparent===!1?Se(Yi):Se(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.blendColor,A.blendAlpha,A.premultipliedAlpha),c.setFunc(A.depthFunc),c.setTest(A.depthTest),c.setMask(A.depthWrite),a.setMask(A.colorWrite);let te=A.stencilWrite;l.setTest(te),te&&(l.setMask(A.stencilWriteMask),l.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),l.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),b(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):st(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(A){ee!==A&&(A?n.frontFace(n.CW):n.frontFace(n.CCW),ee=A)}function qe(A){A!==AC?(he(n.CULL_FACE),A!==J&&(A===Jy?n.cullFace(n.BACK):A===DC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):st(n.CULL_FACE),J=A}function yt(A){A!==D&&(H&&n.lineWidth(A),D=A)}function b(A,se,O){A?(he(n.POLYGON_OFFSET_FILL),(G!==se||z!==O)&&(n.polygonOffset(se,O),G=se,z=O)):st(n.POLYGON_OFFSET_FILL)}function v(A){A?he(n.SCISSOR_TEST):st(n.SCISSOR_TEST)}function V(A){A===void 0&&(A=n.TEXTURE0+$-1),ie!==A&&(n.activeTexture(A),ie=A)}function W(A,se,O){O===void 0&&(ie===null?O=n.TEXTURE0+$-1:O=ie);let te=de[O];te===void 0&&(te={type:void 0,texture:void 0},de[O]=te),(te.type!==A||te.texture!==se)&&(ie!==O&&(n.activeTexture(O),ie=O),n.bindTexture(A,se||ve[A]),te.type=A,te.texture=se)}function Z(){let A=de[ie];A!==void 0&&A.type!==void 0&&(n.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function X(){try{n.compressedTexImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ke(){try{n.compressedTexImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function re(){try{n.texSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Be(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Q(){try{n.texStorage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function wt(){try{n.texStorage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Xe(){try{n.texImage2D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function pe(A){Y.equals(A)===!1&&(n.scissor(A.x,A.y,A.z,A.w),Y.copy(A))}function me(A){ue.equals(A)===!1&&(n.viewport(A.x,A.y,A.z,A.w),ue.copy(A))}function Ke(A,se){let O=d.get(se);O===void 0&&(O=new WeakMap,d.set(se,O));let te=O.get(A);te===void 0&&(te=n.getUniformBlockIndex(se,A.name),O.set(A,te))}function Le(A,se){let te=d.get(se).get(A);u.get(se)!==te&&(n.uniformBlockBinding(se,te,A.__bindingPointIndex),u.set(se,te))}function mt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ie=null,de={},m={},g=new WeakMap,y=[],p=null,f=!1,S=null,x=null,w=null,I=null,C=null,T=null,k=null,K=new Ye(0,0,0),_=0,E=!1,ee=null,J=null,D=null,G=null,z=null,Y.set(0,0,n.canvas.width,n.canvas.height),ue.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:he,disable:st,bindFramebuffer:De,drawBuffers:N,useProgram:Ot,setBlending:Se,setMaterial:Je,setFlipSided:Ge,setCullFace:qe,setLineWidth:yt,setPolygonOffset:b,setScissorTest:v,activeTexture:V,bindTexture:W,unbindTexture:Z,compressedTexImage2D:X,compressedTexImage3D:ke,texImage2D:Xe,texImage3D:ye,updateUBOMapping:Ke,uniformBlockBinding:Le,texStorage2D:Q,texStorage3D:wt,texSubImage2D:Ee,texSubImage3D:re,compressedTexSubImage2D:ae,compressedTexSubImage3D:Be,scissor:pe,viewport:me,reset:mt}}function yN(n,e,t,i,r,s,o){let a=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new it,d=new WeakMap,h,m=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,v){return g?new OffscreenCanvas(b,v):Sl("canvas")}function p(b,v,V,W){let Z=1,X=yt(b);if((X.width>W||X.height>W)&&(Z=W/Math.max(X.width,X.height)),Z<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let ke=v?If:Math.floor,Ee=ke(Z*X.width),re=ke(Z*X.height);h===void 0&&(h=y(Ee,re));let ae=V?y(Ee,re):h;return ae.width=Ee,ae.height=re,ae.getContext("2d").drawImage(b,0,0,Ee,re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+Ee+"x"+re+")."),ae}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),b;return b}function f(b){let v=yt(b);return F_(v.width)&&F_(v.height)}function S(b){return a?!1:b.wrapS!==Fn||b.wrapT!==Fn||b.minFilter!==Yt&&b.minFilter!==Qt}function x(b,v){return b.generateMipmaps&&v&&b.minFilter!==Yt&&b.minFilter!==Qt}function w(b){n.generateMipmap(b)}function I(b,v,V,W,Z=!1){if(a===!1)return v;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=v;if(v===n.RED&&(V===n.FLOAT&&(X=n.R32F),V===n.HALF_FLOAT&&(X=n.R16F),V===n.UNSIGNED_BYTE&&(X=n.R8)),v===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(X=n.R8UI),V===n.UNSIGNED_SHORT&&(X=n.R16UI),V===n.UNSIGNED_INT&&(X=n.R32UI),V===n.BYTE&&(X=n.R8I),V===n.SHORT&&(X=n.R16I),V===n.INT&&(X=n.R32I)),v===n.RG&&(V===n.FLOAT&&(X=n.RG32F),V===n.HALF_FLOAT&&(X=n.RG16F),V===n.UNSIGNED_BYTE&&(X=n.RG8)),v===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(X=n.RG8UI),V===n.UNSIGNED_SHORT&&(X=n.RG16UI),V===n.UNSIGNED_INT&&(X=n.RG32UI),V===n.BYTE&&(X=n.RG8I),V===n.SHORT&&(X=n.RG16I),V===n.INT&&(X=n.RG32I)),v===n.RGBA){let ke=Z?xl:ct.getTransfer(W);V===n.FLOAT&&(X=n.RGBA32F),V===n.HALF_FLOAT&&(X=n.RGBA16F),V===n.UNSIGNED_BYTE&&(X=ke===pt?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function C(b,v,V){return x(b,V)===!0||b.isFramebufferTexture&&b.minFilter!==Yt&&b.minFilter!==Qt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function T(b){return b===Yt||b===r_||b===Jo?n.NEAREST:n.LINEAR}function k(b){let v=b.target;v.removeEventListener("dispose",k),_(v),v.isVideoTexture&&d.delete(v)}function K(b){let v=b.target;v.removeEventListener("dispose",K),ee(v)}function _(b){let v=i.get(b);if(v.__webglInit===void 0)return;let V=b.source,W=m.get(V);if(W){let Z=W[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&E(b),Object.keys(W).length===0&&m.delete(V)}i.remove(b)}function E(b){let v=i.get(b);n.deleteTexture(v.__webglTexture);let V=b.source,W=m.get(V);delete W[v.__cacheKey],o.memory.textures--}function ee(b){let v=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(v.__webglFramebuffer[W]))for(let Z=0;Z<v.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(v.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(v.__webglFramebuffer[W]);v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer[W])}else{if(Array.isArray(v.__webglFramebuffer))for(let W=0;W<v.__webglFramebuffer.length;W++)n.deleteFramebuffer(v.__webglFramebuffer[W]);else n.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&n.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&n.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let W=0;W<v.__webglColorRenderbuffer.length;W++)v.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(v.__webglColorRenderbuffer[W]);v.__webglDepthRenderbuffer&&n.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let V=b.textures;for(let W=0,Z=V.length;W<Z;W++){let X=i.get(V[W]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),o.memory.textures--),i.remove(V[W])}i.remove(b)}let J=0;function D(){J=0}function G(){let b=J;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),J+=1,b}function z(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function $(b,v){let V=i.get(b);if(b.isVideoTexture&&Ge(b),b.isRenderTargetTexture===!1&&b.version>0&&V.__version!==b.version){let W=b.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ue(V,b,v);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+v)}function H(b,v){let V=i.get(b);if(b.version>0&&V.__version!==b.version){ue(V,b,v);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+v)}function j(b,v){let V=i.get(b);if(b.version>0&&V.__version!==b.version){ue(V,b,v);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+v)}function q(b,v){let V=i.get(b);if(b.version>0&&V.__version!==b.version){Ae(V,b,v);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+v)}let ie={[Tf]:n.REPEAT,[Fn]:n.CLAMP_TO_EDGE,[Cf]:n.MIRRORED_REPEAT},de={[Yt]:n.NEAREST,[r_]:n.NEAREST_MIPMAP_NEAREST,[Jo]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[zh]:n.LINEAR_MIPMAP_NEAREST,[Ir]:n.LINEAR_MIPMAP_LINEAR},Ue={[xA]:n.NEVER,[TA]:n.ALWAYS,[MA]:n.LESS,[B0]:n.LEQUAL,[bA]:n.EQUAL,[EA]:n.GEQUAL,[wA]:n.GREATER,[SA]:n.NOTEQUAL};function B(b,v,V){if(v.type===xi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Qt||v.magFilter===zh||v.magFilter===Jo||v.magFilter===Ir||v.minFilter===Qt||v.minFilter===zh||v.minFilter===Jo||v.minFilter===Ir)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),V?(n.texParameteri(b,n.TEXTURE_WRAP_S,ie[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ie[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ie[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,de[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,de[v.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==Fn||v.wrapT!==Fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,T(v.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==Yt&&v.minFilter!==Qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Ue[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Yt||v.minFilter!==Jo&&v.minFilter!==Ir||v.type===xi&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===ra&&e.has("OES_texture_half_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Y(b,v){let V=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",k));let W=v.source,Z=m.get(W);Z===void 0&&(Z={},m.set(W,Z));let X=z(v);if(X!==b.__cacheKey){Z[X]===void 0&&(Z[X]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),Z[X].usedTimes++;let ke=Z[b.__cacheKey];ke!==void 0&&(Z[b.__cacheKey].usedTimes--,ke.usedTimes===0&&E(v)),b.__cacheKey=X,b.__webglTexture=Z[X].texture}return V}function ue(b,v,V){let W=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(W=n.TEXTURE_3D);let Z=Y(b,v),X=v.source;t.bindTexture(W,b.__webglTexture,n.TEXTURE0+V);let ke=i.get(X);if(X.version!==ke.__version||Z===!0){t.activeTexture(n.TEXTURE0+V);let Ee=ct.getPrimaries(ct.workingColorSpace),re=v.colorSpace===$i?null:ct.getPrimaries(v.colorSpace),ae=v.colorSpace===$i||Ee===re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let Be=S(v)&&f(v.image)===!1,Q=p(v.image,Be,!1,r.maxTextureSize);Q=qe(v,Q);let wt=f(Q)||a,Xe=s.convert(v.format,v.colorSpace),ye=s.convert(v.type),pe=I(v.internalFormat,Xe,ye,v.colorSpace,v.isVideoTexture);B(W,v,wt);let me,Ke=v.mipmaps,Le=a&&v.isVideoTexture!==!0&&pe!==U0,mt=ke.__version===void 0||Z===!0,A=X.dataReady,se=C(v,Q,wt);if(v.isDepthTexture)pe=n.DEPTH_COMPONENT,a?v.type===xi?pe=n.DEPTH_COMPONENT32F:v.type===qi?pe=n.DEPTH_COMPONENT24:v.type===Rr?pe=n.DEPTH24_STENCIL8:pe=n.DEPTH_COMPONENT16:v.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Nr&&pe===n.DEPTH_COMPONENT&&v.type!==cp&&v.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=qi,ye=s.convert(v.type)),v.format===Ys&&pe===n.DEPTH_COMPONENT&&(pe=n.DEPTH_STENCIL,v.type!==Rr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Rr,ye=s.convert(v.type))),mt&&(Le?t.texStorage2D(n.TEXTURE_2D,1,pe,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,pe,Q.width,Q.height,0,Xe,ye,null));else if(v.isDataTexture)if(Ke.length>0&&wt){Le&&mt&&t.texStorage2D(n.TEXTURE_2D,se,pe,Ke[0].width,Ke[0].height);for(let O=0,te=Ke.length;O<te;O++)me=Ke[O],Le?A&&t.texSubImage2D(n.TEXTURE_2D,O,0,0,me.width,me.height,Xe,ye,me.data):t.texImage2D(n.TEXTURE_2D,O,pe,me.width,me.height,0,Xe,ye,me.data);v.generateMipmaps=!1}else Le?(mt&&t.texStorage2D(n.TEXTURE_2D,se,pe,Q.width,Q.height),A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,Xe,ye,Q.data)):t.texImage2D(n.TEXTURE_2D,0,pe,Q.width,Q.height,0,Xe,ye,Q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Le&&mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,pe,Ke[0].width,Ke[0].height,Q.depth);for(let O=0,te=Ke.length;O<te;O++)me=Ke[O],v.format!==Un?Xe!==null?Le?A&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,O,0,0,0,me.width,me.height,Q.depth,Xe,me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,O,pe,me.width,me.height,Q.depth,0,me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,O,0,0,0,me.width,me.height,Q.depth,Xe,ye,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,O,pe,me.width,me.height,Q.depth,0,Xe,ye,me.data)}else{Le&&mt&&t.texStorage2D(n.TEXTURE_2D,se,pe,Ke[0].width,Ke[0].height);for(let O=0,te=Ke.length;O<te;O++)me=Ke[O],v.format!==Un?Xe!==null?Le?A&&t.compressedTexSubImage2D(n.TEXTURE_2D,O,0,0,me.width,me.height,Xe,me.data):t.compressedTexImage2D(n.TEXTURE_2D,O,pe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Le?A&&t.texSubImage2D(n.TEXTURE_2D,O,0,0,me.width,me.height,Xe,ye,me.data):t.texImage2D(n.TEXTURE_2D,O,pe,me.width,me.height,0,Xe,ye,me.data)}else if(v.isDataArrayTexture)Le?(mt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,se,pe,Q.width,Q.height,Q.depth),A&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,Xe,ye,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,pe,Q.width,Q.height,Q.depth,0,Xe,ye,Q.data);else if(v.isData3DTexture)Le?(mt&&t.texStorage3D(n.TEXTURE_3D,se,pe,Q.width,Q.height,Q.depth),A&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,Xe,ye,Q.data)):t.texImage3D(n.TEXTURE_3D,0,pe,Q.width,Q.height,Q.depth,0,Xe,ye,Q.data);else if(v.isFramebufferTexture){if(mt)if(Le)t.texStorage2D(n.TEXTURE_2D,se,pe,Q.width,Q.height);else{let O=Q.width,te=Q.height;for(let ce=0;ce<se;ce++)t.texImage2D(n.TEXTURE_2D,ce,pe,O,te,0,Xe,ye,null),O>>=1,te>>=1}}else if(Ke.length>0&&wt){if(Le&&mt){let O=yt(Ke[0]);t.texStorage2D(n.TEXTURE_2D,se,pe,O.width,O.height)}for(let O=0,te=Ke.length;O<te;O++)me=Ke[O],Le?A&&t.texSubImage2D(n.TEXTURE_2D,O,0,0,Xe,ye,me):t.texImage2D(n.TEXTURE_2D,O,pe,Xe,ye,me);v.generateMipmaps=!1}else if(Le){if(mt){let O=yt(Q);t.texStorage2D(n.TEXTURE_2D,se,pe,O.width,O.height)}A&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Xe,ye,Q)}else t.texImage2D(n.TEXTURE_2D,0,pe,Xe,ye,Q);x(v,wt)&&w(W),ke.__version=X.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ae(b,v,V){if(v.image.length!==6)return;let W=Y(b,v),Z=v.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+V);let X=i.get(Z);if(Z.version!==X.__version||W===!0){t.activeTexture(n.TEXTURE0+V);let ke=ct.getPrimaries(ct.workingColorSpace),Ee=v.colorSpace===$i?null:ct.getPrimaries(v.colorSpace),re=v.colorSpace===$i||ke===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let ae=v.isCompressedTexture||v.image[0].isCompressedTexture,Be=v.image[0]&&v.image[0].isDataTexture,Q=[];for(let O=0;O<6;O++)!ae&&!Be?Q[O]=p(v.image[O],!1,!0,r.maxCubemapSize):Q[O]=Be?v.image[O].image:v.image[O],Q[O]=qe(v,Q[O]);let wt=Q[0],Xe=f(wt)||a,ye=s.convert(v.format,v.colorSpace),pe=s.convert(v.type),me=I(v.internalFormat,ye,pe,v.colorSpace),Ke=a&&v.isVideoTexture!==!0,Le=X.__version===void 0||W===!0,mt=Z.dataReady,A=C(v,wt,Xe);B(n.TEXTURE_CUBE_MAP,v,Xe);let se;if(ae){Ke&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,A,me,wt.width,wt.height);for(let O=0;O<6;O++){se=Q[O].mipmaps;for(let te=0;te<se.length;te++){let ce=se[te];v.format!==Un?ye!==null?Ke?mt&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,te,0,0,ce.width,ce.height,ye,ce.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,te,me,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?mt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,te,0,0,ce.width,ce.height,ye,pe,ce.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,te,me,ce.width,ce.height,0,ye,pe,ce.data)}}}else{if(se=v.mipmaps,Ke&&Le){se.length>0&&A++;let O=yt(Q[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,A,me,O.width,O.height)}for(let O=0;O<6;O++)if(Be){Ke?mt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Q[O].width,Q[O].height,ye,pe,Q[O].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,me,Q[O].width,Q[O].height,0,ye,pe,Q[O].data);for(let te=0;te<se.length;te++){let Ze=se[te].image[O].image;Ke?mt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,te+1,0,0,Ze.width,Ze.height,ye,pe,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,te+1,me,Ze.width,Ze.height,0,ye,pe,Ze.data)}}else{Ke?mt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,ye,pe,Q[O]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,me,ye,pe,Q[O]);for(let te=0;te<se.length;te++){let ce=se[te];Ke?mt&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,te+1,0,0,ye,pe,ce.image[O]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+O,te+1,me,ye,pe,ce.image[O])}}}x(v,Xe)&&w(n.TEXTURE_CUBE_MAP),X.__version=Z.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function ve(b,v,V,W,Z,X){let ke=s.convert(V.format,V.colorSpace),Ee=s.convert(V.type),re=I(V.internalFormat,ke,Ee,V.colorSpace);if(!i.get(v).__hasExternalTextures){let Be=Math.max(1,v.width>>X),Q=Math.max(1,v.height>>X);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,re,Be,Q,v.depth,0,ke,Ee,null):t.texImage2D(Z,X,re,Be,Q,0,ke,Ee,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Je(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,i.get(V).__webglTexture,0,Se(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,i.get(V).__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function he(b,v,V){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let W=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||Je(v)){let Z=v.depthTexture;Z&&Z.isDepthTexture&&(Z.type===xi?W=n.DEPTH_COMPONENT32F:Z.type===qi&&(W=n.DEPTH_COMPONENT24));let X=Se(v);Je(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,X,W,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,X,W,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,W,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){let W=Se(v);V&&Je(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,v.width,v.height):Je(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,W,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{let W=v.textures;for(let Z=0;Z<W.length;Z++){let X=W[Z],ke=s.convert(X.format,X.colorSpace),Ee=s.convert(X.type),re=I(X.internalFormat,ke,Ee,X.colorSpace),ae=Se(v);V&&Je(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,re,v.width,v.height):Je(v)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,re,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,re,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function st(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);let W=i.get(v.depthTexture).__webglTexture,Z=Se(v);if(v.depthTexture.format===Nr)Je(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,W,0);else if(v.depthTexture.format===Ys)Je(v)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function De(b){let v=i.get(b),V=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");st(v.__webglFramebuffer,b)}else if(V){v.__webglDepthbuffer=[];for(let W=0;W<6;W++)t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[W]),v.__webglDepthbuffer[W]=n.createRenderbuffer(),he(v.__webglDepthbuffer[W],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),he(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function N(b,v,V){let W=i.get(b);v!==void 0&&ve(W.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&De(b)}function Ot(b){let v=b.texture,V=i.get(b),W=i.get(v);b.addEventListener("dispose",K);let Z=b.textures,X=b.isWebGLCubeRenderTarget===!0,ke=Z.length>1,Ee=f(b)||a;if(ke||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=v.version,o.memory.textures++),X){V.__webglFramebuffer=[];for(let re=0;re<6;re++)if(a&&v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer[re]=[];for(let ae=0;ae<v.mipmaps.length;ae++)V.__webglFramebuffer[re][ae]=n.createFramebuffer()}else V.__webglFramebuffer[re]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){V.__webglFramebuffer=[];for(let re=0;re<v.mipmaps.length;re++)V.__webglFramebuffer[re]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(ke)if(r.drawBuffers)for(let re=0,ae=Z.length;re<ae;re++){let Be=i.get(Z[re]);Be.__webglTexture===void 0&&(Be.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Je(b)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let re=0;re<Z.length;re++){let ae=Z[re];V.__webglColorRenderbuffer[re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[re]);let Be=s.convert(ae.format,ae.colorSpace),Q=s.convert(ae.type),wt=I(ae.internalFormat,Be,Q,ae.colorSpace,b.isXRRenderTarget===!0),Xe=Se(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe,wt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+re,n.RENDERBUFFER,V.__webglColorRenderbuffer[re])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),he(V.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),B(n.TEXTURE_CUBE_MAP,v,Ee);for(let re=0;re<6;re++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)ve(V.__webglFramebuffer[re][ae],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,ae);else ve(V.__webglFramebuffer[re],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);x(v,Ee)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let re=0,ae=Z.length;re<ae;re++){let Be=Z[re],Q=i.get(Be);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),B(n.TEXTURE_2D,Be,Ee),ve(V.__webglFramebuffer,b,Be,n.COLOR_ATTACHMENT0+re,n.TEXTURE_2D,0),x(Be,Ee)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let re=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?re=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(re,W.__webglTexture),B(re,v,Ee),a&&v.mipmaps&&v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)ve(V.__webglFramebuffer[ae],b,v,n.COLOR_ATTACHMENT0,re,ae);else ve(V.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,re,0);x(v,Ee)&&w(re),t.unbindTexture()}b.depthBuffer&&De(b)}function _e(b){let v=f(b)||a,V=b.textures;for(let W=0,Z=V.length;W<Z;W++){let X=V[W];if(x(X,v)){let ke=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ee=i.get(X).__webglTexture;t.bindTexture(ke,Ee),w(ke),t.unbindTexture()}}}function je(b){if(a&&b.samples>0&&Je(b)===!1){let v=b.textures,V=b.width,W=b.height,Z=n.COLOR_BUFFER_BIT,X=[],ke=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ee=i.get(b),re=v.length>1;if(re)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){X.push(n.COLOR_ATTACHMENT0+ae),b.depthBuffer&&X.push(ke);let Be=Ee.__ignoreDepthValues!==void 0?Ee.__ignoreDepthValues:!1;if(Be===!1&&(b.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),re&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ae]),Be===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ke]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ke])),re){let Q=i.get(v[ae]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,V,W,0,0,V,W,Z,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,X)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),re)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,Ee.__webglColorRenderbuffer[ae]);let Be=i.get(v[ae]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ee.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,Be,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}}function Se(b){return Math.min(r.maxSamples,b.samples)}function Je(b){let v=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ge(b){let v=o.render.frame;d.get(b)!==v&&(d.set(b,v),b.update())}function qe(b,v){let V=b.colorSpace,W=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Af||V!==nr&&V!==$i&&(ct.getTransfer(V)===pt?a===!1?e.has("EXT_sRGB")===!0&&W===Un?(b.format=Af,b.minFilter=Qt,b.generateMipmaps=!1):v=El.sRGBToLinear(v):(W!==Un||Z!==Ji)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),v}function yt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=G,this.resetTextureUnits=D,this.setTexture2D=$,this.setTexture2DArray=H,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=N,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=je,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Je}function _N(n,e,t){let i=t.isWebGL2;function r(s,o=$i){let a,c=ct.getTransfer(o);if(s===Ji)return n.UNSIGNED_BYTE;if(s===N0)return n.UNSIGNED_SHORT_4_4_4_4;if(s===P0)return n.UNSIGNED_SHORT_5_5_5_1;if(s===lA)return n.BYTE;if(s===uA)return n.SHORT;if(s===cp)return n.UNSIGNED_SHORT;if(s===R0)return n.INT;if(s===qi)return n.UNSIGNED_INT;if(s===xi)return n.FLOAT;if(s===ra)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===dA)return n.ALPHA;if(s===Un)return n.RGBA;if(s===hA)return n.LUMINANCE;if(s===fA)return n.LUMINANCE_ALPHA;if(s===Nr)return n.DEPTH_COMPONENT;if(s===Ys)return n.DEPTH_STENCIL;if(s===Af)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===pA)return n.RED;if(s===L0)return n.RED_INTEGER;if(s===mA)return n.RG;if(s===O0)return n.RG_INTEGER;if(s===F0)return n.RGBA_INTEGER;if(s===Hh||s===Gh||s===Wh||s===jh)if(c===pt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Hh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Gh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Wh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===jh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Hh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Gh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Wh)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===jh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===s_||s===o_||s===a_||s===c_)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===s_)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===o_)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===a_)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===c_)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===U0)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===l_||s===u_)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===l_)return c===pt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===u_)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===d_||s===h_||s===f_||s===p_||s===m_||s===g_||s===v_||s===y_||s===__||s===x_||s===M_||s===b_||s===w_||s===S_)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===d_)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===h_)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===f_)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===p_)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===m_)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===g_)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===v_)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===y_)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===__)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===x_)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===M_)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===b_)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===w_)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===S_)return c===pt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===$h||s===E_||s===T_)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===$h)return c===pt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===E_)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===T_)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gA||s===C_||s===A_||s===D_)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===$h)return a.COMPRESSED_RED_RGTC1_EXT;if(s===C_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===A_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===D_)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Rr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}var Wf=class extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Xi=class extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}},xN={type:"move"},ia=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),f=this._getHandJoint(l,y);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}let u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=u.position.distanceTo(d.position),m=.02,g=.005;l.inputState.pinching&&h>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xN)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Xi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},MN=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bN=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,jf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new Br,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){let i=t.cameras[0].viewport,r=new Qn({extensions:{fragDepth:!0},vertexShader:MN,fragmentShader:bN,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new tn(new Ol(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}},$f=class extends Qi{constructor(e,t){super();let i=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,d=null,h=null,m=null,g=null,y=new jf,p=t.getContextAttributes(),f=null,S=null,x=[],w=[],I=new it,C=null,T=new Wt;T.layers.enable(1),T.viewport=new Bt;let k=new Wt;k.layers.enable(2),k.viewport=new Bt;let K=[T,k],_=new Wf;_.layers.enable(1),_.layers.enable(2);let E=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Y=x[B];return Y===void 0&&(Y=new ia,x[B]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(B){let Y=x[B];return Y===void 0&&(Y=new ia,x[B]=Y),Y.getGripSpace()},this.getHand=function(B){let Y=x[B];return Y===void 0&&(Y=new ia,x[B]=Y),Y.getHandSpace()};function J(B){let Y=w.indexOf(B.inputSource);if(Y===-1)return;let ue=x[Y];ue!==void 0&&(ue.update(B.inputSource,B.frame,l||o),ue.dispatchEvent({type:B.type,data:B.inputSource}))}function D(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",G);for(let B=0;B<x.length;B++){let Y=w[B];Y!==null&&(w[B]=null,x[B].disconnect(Y))}E=null,ee=null,y.reset(),e.setRenderTarget(f),m=null,h=null,d=null,r=null,S=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=function(B){return Yl(this,null,function*(){if(r=B,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",D),r.addEventListener("inputsourceschange",G),p.xrCompatible!==!0&&(yield t.makeXRCompatible()),C=e.getPixelRatio(),e.getSize(I),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let Y={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,Y),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new bi(m.framebufferWidth,m.framebufferHeight,{format:Un,type:Ji,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Y=null,ue=null,Ae=null;p.depth&&(Ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Y=p.stencil?Ys:Nr,ue=p.stencil?Rr:qi);let ve={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(ve),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new bi(h.textureWidth,h.textureHeight,{format:Un,type:Ji,depthTexture:new Ul(h.textureWidth,h.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});let he=e.properties.get(S);he.__ignoreDepthValues=h.ignoreDepthValues}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=yield r.requestReferenceSpace(a),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}})},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(B){for(let Y=0;Y<B.removed.length;Y++){let ue=B.removed[Y],Ae=w.indexOf(ue);Ae>=0&&(w[Ae]=null,x[Ae].disconnect(ue))}for(let Y=0;Y<B.added.length;Y++){let ue=B.added[Y],Ae=w.indexOf(ue);if(Ae===-1){for(let he=0;he<x.length;he++)if(he>=w.length){w.push(ue),Ae=he;break}else if(w[he]===null){w[he]=ue,Ae=he;break}if(Ae===-1)break}let ve=x[Ae];ve&&ve.connect(ue)}}let z=new P,$=new P;function H(B,Y,ue){z.setFromMatrixPosition(Y.matrixWorld),$.setFromMatrixPosition(ue.matrixWorld);let Ae=z.distanceTo($),ve=Y.projectionMatrix.elements,he=ue.projectionMatrix.elements,st=ve[14]/(ve[10]-1),De=ve[14]/(ve[10]+1),N=(ve[9]+1)/ve[5],Ot=(ve[9]-1)/ve[5],_e=(ve[8]-1)/ve[0],je=(he[8]+1)/he[0],Se=st*_e,Je=st*je,Ge=Ae/(-_e+je),qe=Ge*-_e;Y.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(qe),B.translateZ(Ge),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let yt=st+Ge,b=De+Ge,v=Se-qe,V=Je+(Ae-qe),W=N*De/b*yt,Z=Ot*De/b*yt;B.projectionMatrix.makePerspective(v,V,W,Z,yt,b),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function j(B,Y){Y===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Y.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;y.texture!==null&&(B.near=y.depthNear,B.far=y.depthFar),_.near=k.near=T.near=B.near,_.far=k.far=T.far=B.far,(E!==_.near||ee!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,ee=_.far,T.near=E,T.far=ee,k.near=E,k.far=ee,T.updateProjectionMatrix(),k.updateProjectionMatrix(),B.updateProjectionMatrix());let Y=B.parent,ue=_.cameras;j(_,Y);for(let Ae=0;Ae<ue.length;Ae++)j(ue[Ae],Y);ue.length===2?H(_,T,k):_.projectionMatrix.copy(T.projectionMatrix),q(B,_,Y)};function q(B,Y,ue){ue===null?B.matrix.copy(Y.matrixWorld):(B.matrix.copy(ue.matrixWorld),B.matrix.invert(),B.matrix.multiply(Y.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Y.projectionMatrix),B.projectionMatrixInverse.copy(Y.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Df*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(h===null&&m===null))return c},this.setFoveation=function(B){c=B,h!==null&&(h.fixedFoveation=B),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=B)},this.hasDepthSensing=function(){return y.texture!==null};let ie=null;function de(B,Y){if(u=Y.getViewerPose(l||o),g=Y,u!==null){let ue=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Ae=!1;ue.length!==_.cameras.length&&(_.cameras.length=0,Ae=!0);for(let he=0;he<ue.length;he++){let st=ue[he],De=null;if(m!==null)De=m.getViewport(st);else{let Ot=d.getViewSubImage(h,st);De=Ot.viewport,he===0&&(e.setRenderTargetTextures(S,Ot.colorTexture,h.ignoreDepthValues?void 0:Ot.depthStencilTexture),e.setRenderTarget(S))}let N=K[he];N===void 0&&(N=new Wt,N.layers.enable(he),N.viewport=new Bt,K[he]=N),N.matrix.fromArray(st.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(st.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(De.x,De.y,De.width,De.height),he===0&&(_.matrix.copy(N.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Ae===!0&&_.cameras.push(N)}let ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")){let he=d.getDepthInformation(ue[0]);he&&he.isValid&&he.texture&&y.init(e,he,r.renderState)}}for(let ue=0;ue<x.length;ue++){let Ae=w[ue],ve=x[ue];Ae!==null&&ve!==void 0&&ve.update(Ae,Y,l||o)}y.render(e,_),ie&&ie(B,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}let Ue=new G0;Ue.setAnimationLoop(de),this.setAnimationLoop=function(B){ie=B},this.dispose=function(){}}},Tr=new Or,wN=new Tt;function SN(n,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,H0(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function r(p,f,S,x,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(p,f):f.isMeshToonMaterial?(s(p,f),d(p,f)):f.isMeshPhongMaterial?(s(p,f),u(p,f)):f.isMeshStandardMaterial?(s(p,f),h(p,f),f.isMeshPhysicalMaterial&&m(p,f,w)):f.isMeshMatcapMaterial?(s(p,f),g(p,f)):f.isMeshDepthMaterial?s(p,f):f.isMeshDistanceMaterial?(s(p,f),y(p,f)):f.isMeshNormalMaterial?s(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,S,x):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===nn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===nn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);let S=e.get(f),x=S.envMap,w=S.envMapRotation;if(x&&(p.envMap.value=x,Tr.copy(w),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),p.envMapRotation.value.setFromMatrix4(wN.makeRotationFromEuler(Tr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap){p.lightMap.value=f.lightMap;let I=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=f.lightMapIntensity*I,t(f.lightMap,p.lightMapTransform)}f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,S,x){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*S,p.scale.value=x*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function d(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function h(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),e.get(f).envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,S){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===nn&&p.clearcoatNormalScale.value.negate())),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function y(p,f){let S=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function EN(n,e,t,i){let r={},s={},o=[],a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,x){let w=x.program;i.uniformBlockBinding(S,w)}function l(S,x){let w=r[S.id];w===void 0&&(g(S),w=u(S),r[S.id]=w,S.addEventListener("dispose",p));let I=x.program;i.updateUBOMapping(S,I);let C=e.render.frame;s[S.id]!==C&&(h(S),s[S.id]=C)}function u(S){let x=d();S.__bindingPointIndex=x;let w=n.createBuffer(),I=S.__size,C=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,I,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,w),w}function d(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){let x=r[S.id],w=S.uniforms,I=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let C=0,T=w.length;C<T;C++){let k=Array.isArray(w[C])?w[C]:[w[C]];for(let K=0,_=k.length;K<_;K++){let E=k[K];if(m(E,C,K,I)===!0){let ee=E.__offset,J=Array.isArray(E.value)?E.value:[E.value],D=0;for(let G=0;G<J.length;G++){let z=J[G],$=y(z);typeof z=="number"||typeof z=="boolean"?(E.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,ee+D,E.__data)):z.isMatrix3?(E.__data[0]=z.elements[0],E.__data[1]=z.elements[1],E.__data[2]=z.elements[2],E.__data[3]=0,E.__data[4]=z.elements[3],E.__data[5]=z.elements[4],E.__data[6]=z.elements[5],E.__data[7]=0,E.__data[8]=z.elements[6],E.__data[9]=z.elements[7],E.__data[10]=z.elements[8],E.__data[11]=0):(z.toArray(E.__data,D),D+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ee,E.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,x,w,I){let C=S.value,T=x+"_"+w;if(I[T]===void 0)return typeof C=="number"||typeof C=="boolean"?I[T]=C:I[T]=C.clone(),!0;{let k=I[T];if(typeof C=="number"||typeof C=="boolean"){if(k!==C)return I[T]=C,!0}else if(k.equals(C)===!1)return k.copy(C),!0}return!1}function g(S){let x=S.uniforms,w=0,I=16;for(let T=0,k=x.length;T<k;T++){let K=Array.isArray(x[T])?x[T]:[x[T]];for(let _=0,E=K.length;_<E;_++){let ee=K[_],J=Array.isArray(ee.value)?ee.value:[ee.value];for(let D=0,G=J.length;D<G;D++){let z=J[D],$=y(z),H=w%I;H!==0&&I-H<$.boundary&&(w+=I-H),ee.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=w,w+=$.storage}}}let C=w%I;return C>0&&(w+=I-C),S.__size=w,S.__cache={},this}function y(S){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){let x=S.target;x.removeEventListener("dispose",p);let w=o.indexOf(x.__bindingPointIndex);o.splice(w,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(let S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:f}}var Js=class{constructor(e={}){let{canvas:t=AA(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let m=new Uint32Array(4),g=new Int32Array(4),y=null,p=null,f=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this._useLegacyLights=!1,this.toneMapping=Zi,this.toneMappingExposure=1;let x=this,w=!1,I=0,C=0,T=null,k=-1,K=null,_=new Bt,E=new Bt,ee=null,J=new Ye(0),D=0,G=t.width,z=t.height,$=1,H=null,j=null,q=new Bt(0,0,G,z),ie=new Bt(0,0,G,z),de=!1,Ue=new Ll,B=!1,Y=!1,ue=null,Ae=new Tt,ve=new it,he=new P,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function De(){return T===null?$:1}let N=i;function Ot(M,R){for(let F=0;F<M.length;F++){let U=M[F],L=t.getContext(U,R);if(L!==null)return L}return null}try{let M={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${op}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",A,!1),t.addEventListener("webglcontextcreationerror",se,!1),N===null){let R=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&R.shift(),N=Ot(R,M),N===null)throw Ot(R)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&N instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let _e,je,Se,Je,Ge,qe,yt,b,v,V,W,Z,X,ke,Ee,re,ae,Be,Q,wt,Xe,ye,pe,me;function Ke(){_e=new z1(N),je=new O1(N,_e,e),_e.init(je),ye=new _N(N,_e,je),Se=new vN(N,_e,je),Je=new W1(N),Ge=new sN,qe=new yN(N,_e,Se,Ge,je,ye,Je),yt=new U1(x),b=new V1(x),v=new ZA(N,je),pe=new P1(N,_e,v,je),V=new H1(N,v,Je,pe),W=new X1(N,V,v,Je),Q=new q1(N,je,qe),re=new F1(Ge),Z=new rN(x,yt,b,_e,je,pe,re),X=new SN(x,Ge),ke=new aN,Ee=new fN(_e,je),Be=new N1(x,yt,b,Se,W,h,c),ae=new gN(x,W,je),me=new EN(N,Je,je,Se),wt=new L1(N,_e,Je,je),Xe=new G1(N,_e,Je,je),Je.programs=Z.programs,x.capabilities=je,x.extensions=_e,x.properties=Ge,x.renderLists=ke,x.shadowMap=ae,x.state=Se,x.info=Je}Ke();let Le=new $f(x,N);this.xr=Le,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=_e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=_e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(M){M!==void 0&&($=M,this.setSize(G,z,!1))},this.getSize=function(M){return M.set(G,z)},this.setSize=function(M,R,F=!0){if(Le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,z=R,t.width=Math.floor(M*$),t.height=Math.floor(R*$),F===!0&&(t.style.width=M+"px",t.style.height=R+"px"),this.setViewport(0,0,M,R)},this.getDrawingBufferSize=function(M){return M.set(G*$,z*$).floor()},this.setDrawingBufferSize=function(M,R,F){G=M,z=R,$=F,t.width=Math.floor(M*F),t.height=Math.floor(R*F),this.setViewport(0,0,M,R)},this.getCurrentViewport=function(M){return M.copy(_)},this.getViewport=function(M){return M.copy(q)},this.setViewport=function(M,R,F,U){M.isVector4?q.set(M.x,M.y,M.z,M.w):q.set(M,R,F,U),Se.viewport(_.copy(q).multiplyScalar($).round())},this.getScissor=function(M){return M.copy(ie)},this.setScissor=function(M,R,F,U){M.isVector4?ie.set(M.x,M.y,M.z,M.w):ie.set(M,R,F,U),Se.scissor(E.copy(ie).multiplyScalar($).round())},this.getScissorTest=function(){return de},this.setScissorTest=function(M){Se.setScissorTest(de=M)},this.setOpaqueSort=function(M){H=M},this.setTransparentSort=function(M){j=M},this.getClearColor=function(M){return M.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor.apply(Be,arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha.apply(Be,arguments)},this.clear=function(M=!0,R=!0,F=!0){let U=0;if(M){let L=!1;if(T!==null){let le=T.texture.format;L=le===F0||le===O0||le===L0}if(L){let le=T.texture.type,ge=le===Ji||le===qi||le===cp||le===Rr||le===N0||le===P0,be=Be.getClearColor(),Ce=Be.getClearAlpha(),We=be.r,Pe=be.g,Oe=be.b;ge?(m[0]=We,m[1]=Pe,m[2]=Oe,m[3]=Ce,N.clearBufferuiv(N.COLOR,0,m)):(g[0]=We,g[1]=Pe,g[2]=Oe,g[3]=Ce,N.clearBufferiv(N.COLOR,0,g))}else U|=N.COLOR_BUFFER_BIT}R&&(U|=N.DEPTH_BUFFER_BIT),F&&(U|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",A,!1),t.removeEventListener("webglcontextcreationerror",se,!1),ke.dispose(),Ee.dispose(),Ge.dispose(),yt.dispose(),b.dispose(),W.dispose(),pe.dispose(),me.dispose(),Z.dispose(),Le.dispose(),Le.removeEventListener("sessionstart",pn),Le.removeEventListener("sessionend",ht),ue&&(ue.dispose(),ue=null),jt.stop()};function mt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function A(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let M=Je.autoReset,R=ae.enabled,F=ae.autoUpdate,U=ae.needsUpdate,L=ae.type;Ke(),Je.autoReset=M,ae.enabled=R,ae.autoUpdate=F,ae.needsUpdate=U,ae.type=L}function se(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function O(M){let R=M.target;R.removeEventListener("dispose",O),te(R)}function te(M){ce(M),Ge.remove(M)}function ce(M){let R=Ge.get(M).programs;R!==void 0&&(R.forEach(function(F){Z.releaseProgram(F)}),M.isShaderMaterial&&Z.releaseShaderCache(M))}this.renderBufferDirect=function(M,R,F,U,L,le){R===null&&(R=st);let ge=L.isMesh&&L.matrixWorld.determinant()<0,be=ix(M,R,F,U,L);Se.setMaterial(U,ge);let Ce=F.index,We=1;if(U.wireframe===!0){if(Ce=V.getWireframeAttribute(F),Ce===void 0)return;We=2}let Pe=F.drawRange,Oe=F.attributes.position,_t=Pe.start*We,rn=(Pe.start+Pe.count)*We;le!==null&&(_t=Math.max(_t,le.start*We),rn=Math.min(rn,(le.start+le.count)*We)),Ce!==null?(_t=Math.max(_t,0),rn=Math.min(rn,Ce.count)):Oe!=null&&(_t=Math.max(_t,0),rn=Math.min(rn,Oe.count));let It=rn-_t;if(It<0||It===1/0)return;pe.setup(L,U,be,F,Ce);let ti,vt=wt;if(Ce!==null&&(ti=v.get(Ce),vt=Xe,vt.setIndex(ti)),L.isMesh)U.wireframe===!0?(Se.setLineWidth(U.wireframeLinewidth*De()),vt.setMode(N.LINES)):vt.setMode(N.TRIANGLES);else if(L.isLine){let Ve=U.linewidth;Ve===void 0&&(Ve=1),Se.setLineWidth(Ve*De()),L.isLineSegments?vt.setMode(N.LINES):L.isLineLoop?vt.setMode(N.LINE_LOOP):vt.setMode(N.LINE_STRIP)}else L.isPoints?vt.setMode(N.POINTS):L.isSprite&&vt.setMode(N.TRIANGLES);if(L.isBatchedMesh)vt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else if(L.isInstancedMesh)vt.renderInstances(_t,It,L.count);else if(F.isInstancedBufferGeometry){let Ve=F._maxInstanceCount!==void 0?F._maxInstanceCount:1/0,jl=Math.min(F.instanceCount,Ve);vt.renderInstances(_t,It,jl)}else vt.render(_t,It)};function Ze(M,R,F){M.transparent===!0&&M.side===_i&&M.forceSinglePass===!1?(M.side=nn,M.needsUpdate=!0,ha(M,R,F),M.side=Ki,M.needsUpdate=!0,ha(M,R,F),M.side=_i):ha(M,R,F)}this.compile=function(M,R,F=null){F===null&&(F=M),p=Ee.get(F),p.init(),S.push(p),F.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),M!==F&&M.traverseVisible(function(L){L.isLight&&L.layers.test(R.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights(x._useLegacyLights);let U=new Set;return M.traverse(function(L){let le=L.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){let be=le[ge];Ze(be,F,L),U.add(be)}else Ze(le,F,L),U.add(le)}),S.pop(),p=null,U},this.compileAsync=function(M,R,F=null){let U=this.compile(M,R,F);return new Promise(L=>{function le(){if(U.forEach(function(ge){Ge.get(ge).currentProgram.isReady()&&U.delete(ge)}),U.size===0){L(M);return}setTimeout(le,10)}_e.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let dt=null;function Ft(M){dt&&dt(M)}function pn(){jt.stop()}function ht(){jt.start()}let jt=new G0;jt.setAnimationLoop(Ft),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(M){dt=M,Le.setAnimationLoop(M),M===null?jt.stop():jt.start()},Le.addEventListener("sessionstart",pn),Le.addEventListener("sessionend",ht),this.render=function(M,R){if(R!==void 0&&R.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),R.parent===null&&R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Le.enabled===!0&&Le.isPresenting===!0&&(Le.cameraAutoUpdate===!0&&Le.updateCamera(R),R=Le.getCamera()),M.isScene===!0&&M.onBeforeRender(x,M,R,T),p=Ee.get(M,S.length),p.init(),S.push(p),Ae.multiplyMatrices(R.projectionMatrix,R.matrixWorldInverse),Ue.setFromProjectionMatrix(Ae),Y=this.localClippingEnabled,B=re.init(this.clippingPlanes,Y),y=ke.get(M,f.length),y.init(),f.push(y),Bn(M,R,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(H,j),this.info.render.frame++,B===!0&&re.beginShadows();let F=p.state.shadowsArray;if(ae.render(F,M,R),B===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Le.enabled===!1||Le.isPresenting===!1||Le.hasDepthSensing()===!1)&&Be.render(y,M),p.setupLights(x._useLegacyLights),R.isArrayCamera){let U=R.cameras;for(let L=0,le=U.length;L<le;L++){let ge=U[L];mp(y,M,ge,ge.viewport)}}else mp(y,M,R);T!==null&&(qe.updateMultisampleRenderTarget(T),qe.updateRenderTargetMipmap(T)),M.isScene===!0&&M.onAfterRender(x,M,R),pe.resetDefaultState(),k=-1,K=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,f.pop(),f.length>0?y=f[f.length-1]:y=null};function Bn(M,R,F,U){if(M.visible===!1)return;if(M.layers.test(R.layers)){if(M.isGroup)F=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(R);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ue.intersectsSprite(M)){U&&he.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ae);let ge=W.update(M),be=M.material;be.visible&&y.push(M,ge,be,F,he.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ue.intersectsObject(M))){let ge=W.update(M),be=M.material;if(U&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),he.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),he.copy(ge.boundingSphere.center)),he.applyMatrix4(M.matrixWorld).applyMatrix4(Ae)),Array.isArray(be)){let Ce=ge.groups;for(let We=0,Pe=Ce.length;We<Pe;We++){let Oe=Ce[We],_t=be[Oe.materialIndex];_t&&_t.visible&&y.push(M,ge,_t,F,he.z,Oe)}}else be.visible&&y.push(M,ge,be,F,he.z,null)}}let le=M.children;for(let ge=0,be=le.length;ge<be;ge++)Bn(le[ge],R,F,U)}function mp(M,R,F,U){let L=M.opaque,le=M.transmissive,ge=M.transparent;p.setupLightsView(F),B===!0&&re.setGlobalState(x.clippingPlanes,F),le.length>0&&nx(L,le,R,F),U&&Se.viewport(_.copy(U)),L.length>0&&da(L,R,F),le.length>0&&da(le,R,F),ge.length>0&&da(ge,R,F),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function nx(M,R,F,U){if((F.isScene===!0?F.overrideMaterial:null)!==null)return;let le=je.isWebGL2;ue===null&&(ue=new bi(1,1,{generateMipmaps:!0,type:_e.has("EXT_color_buffer_half_float")?ra:Ji,minFilter:Ir,samples:le?4:0})),x.getDrawingBufferSize(ve),le?ue.setSize(ve.x,ve.y):ue.setSize(If(ve.x),If(ve.y));let ge=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(J),D=x.getClearAlpha(),D<1&&x.setClearColor(16777215,.5),x.clear();let be=x.toneMapping;x.toneMapping=Zi,da(M,F,U),qe.updateMultisampleRenderTarget(ue),qe.updateRenderTargetMipmap(ue);let Ce=!1;for(let We=0,Pe=R.length;We<Pe;We++){let Oe=R[We],_t=Oe.object,rn=Oe.geometry,It=Oe.material,ti=Oe.group;if(It.side===_i&&_t.layers.test(U.layers)){let vt=It.side;It.side=nn,It.needsUpdate=!0,gp(_t,F,U,rn,It,ti),It.side=vt,It.needsUpdate=!0,Ce=!0}}Ce===!0&&(qe.updateMultisampleRenderTarget(ue),qe.updateRenderTargetMipmap(ue)),x.setRenderTarget(ge),x.setClearColor(J,D),x.toneMapping=be}function da(M,R,F){let U=R.isScene===!0?R.overrideMaterial:null;for(let L=0,le=M.length;L<le;L++){let ge=M[L],be=ge.object,Ce=ge.geometry,We=U===null?ge.material:U,Pe=ge.group;be.layers.test(F.layers)&&gp(be,R,F,Ce,We,Pe)}}function gp(M,R,F,U,L,le){M.onBeforeRender(x,R,F,U,L,le),M.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),L.onBeforeRender(x,R,F,U,M,le),L.transparent===!0&&L.side===_i&&L.forceSinglePass===!1?(L.side=nn,L.needsUpdate=!0,x.renderBufferDirect(F,R,U,L,M,le),L.side=Ki,L.needsUpdate=!0,x.renderBufferDirect(F,R,U,L,M,le),L.side=_i):x.renderBufferDirect(F,R,U,L,M,le),M.onAfterRender(x,R,F,U,L,le)}function ha(M,R,F){R.isScene!==!0&&(R=st);let U=Ge.get(M),L=p.state.lights,le=p.state.shadowsArray,ge=L.state.version,be=Z.getParameters(M,L.state,le,R,F),Ce=Z.getProgramCacheKey(be),We=U.programs;U.environment=M.isMeshStandardMaterial?R.environment:null,U.fog=R.fog,U.envMap=(M.isMeshStandardMaterial?b:yt).get(M.envMap||U.environment),U.envMapRotation=U.environment!==null&&M.envMap===null?R.environmentRotation:M.envMapRotation,We===void 0&&(M.addEventListener("dispose",O),We=new Map,U.programs=We);let Pe=We.get(Ce);if(Pe!==void 0){if(U.currentProgram===Pe&&U.lightsStateVersion===ge)return yp(M,be),Pe}else be.uniforms=Z.getUniforms(M),M.onBuild(F,be,x),M.onBeforeCompile(be,x),Pe=Z.acquireProgram(be,Ce),We.set(Ce,Pe),U.uniforms=be.uniforms;let Oe=U.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Oe.clippingPlanes=re.uniform),yp(M,be),U.needsLights=sx(M),U.lightsStateVersion=ge,U.needsLights&&(Oe.ambientLightColor.value=L.state.ambient,Oe.lightProbe.value=L.state.probe,Oe.directionalLights.value=L.state.directional,Oe.directionalLightShadows.value=L.state.directionalShadow,Oe.spotLights.value=L.state.spot,Oe.spotLightShadows.value=L.state.spotShadow,Oe.rectAreaLights.value=L.state.rectArea,Oe.ltc_1.value=L.state.rectAreaLTC1,Oe.ltc_2.value=L.state.rectAreaLTC2,Oe.pointLights.value=L.state.point,Oe.pointLightShadows.value=L.state.pointShadow,Oe.hemisphereLights.value=L.state.hemi,Oe.directionalShadowMap.value=L.state.directionalShadowMap,Oe.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Oe.spotShadowMap.value=L.state.spotShadowMap,Oe.spotLightMatrix.value=L.state.spotLightMatrix,Oe.spotLightMap.value=L.state.spotLightMap,Oe.pointShadowMap.value=L.state.pointShadowMap,Oe.pointShadowMatrix.value=L.state.pointShadowMatrix),U.currentProgram=Pe,U.uniformsList=null,Pe}function vp(M){if(M.uniformsList===null){let R=M.currentProgram.getUniforms();M.uniformsList=$s.seqWithValue(R.seq,M.uniforms)}return M.uniformsList}function yp(M,R){let F=Ge.get(M);F.outputColorSpace=R.outputColorSpace,F.batching=R.batching,F.instancing=R.instancing,F.instancingColor=R.instancingColor,F.instancingMorph=R.instancingMorph,F.skinning=R.skinning,F.morphTargets=R.morphTargets,F.morphNormals=R.morphNormals,F.morphColors=R.morphColors,F.morphTargetsCount=R.morphTargetsCount,F.numClippingPlanes=R.numClippingPlanes,F.numIntersection=R.numClipIntersection,F.vertexAlphas=R.vertexAlphas,F.vertexTangents=R.vertexTangents,F.toneMapping=R.toneMapping}function ix(M,R,F,U,L){R.isScene!==!0&&(R=st),qe.resetTextureUnits();let le=R.fog,ge=U.isMeshStandardMaterial?R.environment:null,be=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:nr,Ce=(U.isMeshStandardMaterial?b:yt).get(U.envMap||ge),We=U.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,Pe=!!F.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Oe=!!F.morphAttributes.position,_t=!!F.morphAttributes.normal,rn=!!F.morphAttributes.color,It=Zi;U.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(It=x.toneMapping);let ti=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,vt=ti!==void 0?ti.length:0,Ve=Ge.get(U),jl=p.state.lights;if(B===!0&&(Y===!0||M!==K)){let mn=M===K&&U.id===k;re.setState(U,M,mn)}let gt=!1;U.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==jl.state.version||Ve.outputColorSpace!==be||L.isBatchedMesh&&Ve.batching===!1||!L.isBatchedMesh&&Ve.batching===!0||L.isInstancedMesh&&Ve.instancing===!1||!L.isInstancedMesh&&Ve.instancing===!0||L.isSkinnedMesh&&Ve.skinning===!1||!L.isSkinnedMesh&&Ve.skinning===!0||L.isInstancedMesh&&Ve.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&Ve.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&Ve.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&Ve.instancingMorph===!1&&L.morphTexture!==null||Ve.envMap!==Ce||U.fog===!0&&Ve.fog!==le||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==re.numPlanes||Ve.numIntersection!==re.numIntersection)||Ve.vertexAlphas!==We||Ve.vertexTangents!==Pe||Ve.morphTargets!==Oe||Ve.morphNormals!==_t||Ve.morphColors!==rn||Ve.toneMapping!==It||je.isWebGL2===!0&&Ve.morphTargetsCount!==vt)&&(gt=!0):(gt=!0,Ve.__version=U.version);let ir=Ve.currentProgram;gt===!0&&(ir=ha(U,R,L));let _p=!1,to=!1,$l=!1,Vt=ir.getUniforms(),rr=Ve.uniforms;if(Se.useProgram(ir.program)&&(_p=!0,to=!0,$l=!0),U.id!==k&&(k=U.id,to=!0),_p||K!==M){Vt.setValue(N,"projectionMatrix",M.projectionMatrix),Vt.setValue(N,"viewMatrix",M.matrixWorldInverse);let mn=Vt.map.cameraPosition;mn!==void 0&&mn.setValue(N,he.setFromMatrixPosition(M.matrixWorld)),je.logarithmicDepthBuffer&&Vt.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Vt.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),K!==M&&(K=M,to=!0,$l=!0)}if(L.isSkinnedMesh){Vt.setOptional(N,L,"bindMatrix"),Vt.setOptional(N,L,"bindMatrixInverse");let mn=L.skeleton;mn&&(je.floatVertexTextures?(mn.boneTexture===null&&mn.computeBoneTexture(),Vt.setValue(N,"boneTexture",mn.boneTexture,qe)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}L.isBatchedMesh&&(Vt.setOptional(N,L,"batchingTexture"),Vt.setValue(N,"batchingTexture",L._matricesTexture,qe));let ql=F.morphAttributes;if((ql.position!==void 0||ql.normal!==void 0||ql.color!==void 0&&je.isWebGL2===!0)&&Q.update(L,F,ir),(to||Ve.receiveShadow!==L.receiveShadow)&&(Ve.receiveShadow=L.receiveShadow,Vt.setValue(N,"receiveShadow",L.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(rr.envMap.value=Ce,rr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),to&&(Vt.setValue(N,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&rx(rr,$l),le&&U.fog===!0&&X.refreshFogUniforms(rr,le),X.refreshMaterialUniforms(rr,U,$,z,ue),$s.upload(N,vp(Ve),rr,qe)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&($s.upload(N,vp(Ve),rr,qe),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Vt.setValue(N,"center",L.center),Vt.setValue(N,"modelViewMatrix",L.modelViewMatrix),Vt.setValue(N,"normalMatrix",L.normalMatrix),Vt.setValue(N,"modelMatrix",L.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){let mn=U.uniformsGroups;for(let Xl=0,ox=mn.length;Xl<ox;Xl++)if(je.isWebGL2){let xp=mn[Xl];me.update(xp,ir),me.bind(xp,ir)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ir}function rx(M,R){M.ambientLightColor.needsUpdate=R,M.lightProbe.needsUpdate=R,M.directionalLights.needsUpdate=R,M.directionalLightShadows.needsUpdate=R,M.pointLights.needsUpdate=R,M.pointLightShadows.needsUpdate=R,M.spotLights.needsUpdate=R,M.spotLightShadows.needsUpdate=R,M.rectAreaLights.needsUpdate=R,M.hemisphereLights.needsUpdate=R}function sx(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(M,R,F){Ge.get(M.texture).__webglTexture=R,Ge.get(M.depthTexture).__webglTexture=F;let U=Ge.get(M);U.__hasExternalTextures=!0,U.__autoAllocateDepthBuffer=F===void 0,U.__autoAllocateDepthBuffer||_e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,R){let F=Ge.get(M);F.__webglFramebuffer=R,F.__useDefaultFramebuffer=R===void 0},this.setRenderTarget=function(M,R=0,F=0){T=M,I=R,C=F;let U=!0,L=null,le=!1,ge=!1;if(M){let Ce=Ge.get(M);Ce.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(N.FRAMEBUFFER,null),U=!1):Ce.__webglFramebuffer===void 0?qe.setupRenderTarget(M):Ce.__hasExternalTextures&&qe.rebindTextures(M,Ge.get(M.texture).__webglTexture,Ge.get(M.depthTexture).__webglTexture);let We=M.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ge=!0);let Pe=Ge.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Pe[R])?L=Pe[R][F]:L=Pe[R],le=!0):je.isWebGL2&&M.samples>0&&qe.useMultisampledRTT(M)===!1?L=Ge.get(M).__webglMultisampledFramebuffer:Array.isArray(Pe)?L=Pe[F]:L=Pe,_.copy(M.viewport),E.copy(M.scissor),ee=M.scissorTest}else _.copy(q).multiplyScalar($).floor(),E.copy(ie).multiplyScalar($).floor(),ee=de;if(Se.bindFramebuffer(N.FRAMEBUFFER,L)&&je.drawBuffers&&U&&Se.drawBuffers(M,L),Se.viewport(_),Se.scissor(E),Se.setScissorTest(ee),le){let Ce=Ge.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+R,Ce.__webglTexture,F)}else if(ge){let Ce=Ge.get(M.texture),We=R||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ce.__webglTexture,F||0,We)}k=-1},this.readRenderTargetPixels=function(M,R,F,U,L,le,ge){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Ge.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(be=be[ge]),be){Se.bindFramebuffer(N.FRAMEBUFFER,be);try{let Ce=M.texture,We=Ce.format,Pe=Ce.type;if(We!==Un&&ye.convert(We)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Oe=Pe===ra&&(_e.has("EXT_color_buffer_half_float")||je.isWebGL2&&_e.has("EXT_color_buffer_float"));if(Pe!==Ji&&ye.convert(Pe)!==N.getParameter(N.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===xi&&(je.isWebGL2||_e.has("OES_texture_float")||_e.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}R>=0&&R<=M.width-U&&F>=0&&F<=M.height-L&&N.readPixels(R,F,U,L,ye.convert(We),ye.convert(Pe),le)}finally{let Ce=T!==null?Ge.get(T).__webglFramebuffer:null;Se.bindFramebuffer(N.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(M,R,F=0){let U=Math.pow(2,-F),L=Math.floor(R.image.width*U),le=Math.floor(R.image.height*U);qe.setTexture2D(R,0),N.copyTexSubImage2D(N.TEXTURE_2D,F,0,0,M.x,M.y,L,le),Se.unbindTexture()},this.copyTextureToTexture=function(M,R,F,U=0){let L=R.image.width,le=R.image.height,ge=ye.convert(F.format),be=ye.convert(F.type);qe.setTexture2D(F,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,F.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,F.unpackAlignment),R.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,M.x,M.y,L,le,ge,be,R.image.data):R.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,M.x,M.y,R.mipmaps[0].width,R.mipmaps[0].height,ge,R.mipmaps[0].data):N.texSubImage2D(N.TEXTURE_2D,U,M.x,M.y,ge,be,R.image),U===0&&F.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(M,R,F,U,L=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let le=Math.round(M.max.x-M.min.x),ge=Math.round(M.max.y-M.min.y),be=M.max.z-M.min.z+1,Ce=ye.convert(U.format),We=ye.convert(U.type),Pe;if(U.isData3DTexture)qe.setTexture3D(U,0),Pe=N.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)qe.setTexture2DArray(U,0),Pe=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,U.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,U.unpackAlignment);let Oe=N.getParameter(N.UNPACK_ROW_LENGTH),_t=N.getParameter(N.UNPACK_IMAGE_HEIGHT),rn=N.getParameter(N.UNPACK_SKIP_PIXELS),It=N.getParameter(N.UNPACK_SKIP_ROWS),ti=N.getParameter(N.UNPACK_SKIP_IMAGES),vt=F.isCompressedTexture?F.mipmaps[L]:F.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,vt.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,vt.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,M.min.x),N.pixelStorei(N.UNPACK_SKIP_ROWS,M.min.y),N.pixelStorei(N.UNPACK_SKIP_IMAGES,M.min.z),F.isDataTexture||F.isData3DTexture?N.texSubImage3D(Pe,L,R.x,R.y,R.z,le,ge,be,Ce,We,vt.data):U.isCompressedArrayTexture?N.compressedTexSubImage3D(Pe,L,R.x,R.y,R.z,le,ge,be,Ce,vt.data):N.texSubImage3D(Pe,L,R.x,R.y,R.z,le,ge,be,Ce,We,vt),N.pixelStorei(N.UNPACK_ROW_LENGTH,Oe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,_t),N.pixelStorei(N.UNPACK_SKIP_PIXELS,rn),N.pixelStorei(N.UNPACK_SKIP_ROWS,It),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ti),L===0&&U.generateMipmaps&&N.generateMipmap(Pe),Se.unbindTexture()},this.initTexture=function(M){M.isCubeTexture?qe.setTextureCube(M,0):M.isData3DTexture?qe.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?qe.setTexture2DArray(M,0):qe.setTexture2D(M,0),Se.unbindTexture()},this.resetState=function(){I=0,C=0,T=null,Se.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===lp?"display-p3":"srgb",t.unpackColorSpace=ct.workingColorSpace===zl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},qf=class extends Js{};qf.prototype.isWebGL1Renderer=!0;var aa=class extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Or,this.environmentRotation=new Or,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Fr=class extends Sn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},b0=new P,w0=new P,S0=new Tt,Mf=new sa,fl=new Lr,Xf=class extends ei{constructor(e=new En,t=new Fr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)b0.fromBufferAttribute(t,r-1),w0.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=b0.distanceTo(w0);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),fl.copy(i.boundingSphere),fl.applyMatrix4(r),fl.radius+=s,e.ray.intersectsSphere(fl)===!1)return;S0.copy(r).invert(),Mf.copy(e.ray).applyMatrix4(S0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new P,u=new P,d=new P,h=new P,m=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){let f=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let x=f,w=S-1;x<w;x+=m){let I=g.getX(x),C=g.getX(x+1);if(l.fromBufferAttribute(p,I),u.fromBufferAttribute(p,C),Mf.distanceSqToSegment(l,u,h,d)>c)continue;h.applyMatrix4(this.matrixWorld);let k=e.ray.origin.distanceTo(h);k<e.near||k>e.far||t.push({distance:k,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let f=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let x=f,w=S-1;x<w;x+=m){if(l.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Mf.distanceSqToSegment(l,u,h,d)>c)continue;h.applyMatrix4(this.matrixWorld);let C=e.ray.origin.distanceTo(h);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}},E0=new P,T0=new P,ca=class extends Xf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)E0.fromBufferAttribute(t,r),T0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+E0.distanceTo(T0);e.setAttribute("lineDistance",new Lt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var tr=class extends Sn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},C0=new Tt,Yf=new sa,pl=new Lr,ml=new P,Ks=class extends ei{constructor(e=new En,t=new tr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(r),pl.radius+=s,e.ray.intersectsSphere(pl)===!1)return;C0.copy(r).invert(),Yf.copy(e.ray).applyMatrix4(C0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=i.index,d=i.attributes.position;if(l!==null){let h=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=h,y=m;g<y;g++){let p=l.getX(g);ml.fromBufferAttribute(d,p),A0(ml,p,c,r,e,t,this)}}else{let h=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=h,y=m;g<y;g++)ml.fromBufferAttribute(d,g),A0(ml,g,c,r,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function A0(n,e,t,i,r,s,o){let a=Yf.distanceSqToPoint(n);if(a<t){let c=new P;Yf.closestPointToPoint(n,c),c.applyMatrix4(i);let l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var kl=class extends Sn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ye(16777215),this.specular=new Ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k0,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Or,this.combine=ap,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function gl(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function TN(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Qs=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(i=2,s=a);for(let c=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(r=s,s=t[--i-1],e>=s)break e}o=i,i=0;break t}break n}for(;i<o;){let a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Zf=class extends Qs{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:I_,endingEnd:I_}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case R_:s=e,a=2*t-i;break;case N_:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case R_:o=e,c=2*i-t;break;case N_:o=1,c=i+r[1]-r[0];break;default:o=e-1,c=t}let l=(i-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,m=this._weightNext,g=(i-t)/(r-t),y=g*g,p=y*g,f=-h*p+2*h*y-h*g,S=(1+h)*p+(-1.5-2*h)*y+(-.5+h)*g+1,x=(-1-m)*p+(1.5+m)*y+.5*g,w=m*p-m*y;for(let I=0;I!==a;++I)s[I]=f*o[u+I]+S*o[l+I]+x*o[c+I]+w*o[d+I];return s}},Jf=class extends Qs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(i-t)/(r-t),d=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*d+o[c+h]*u;return s}},Kf=class extends Qs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},kn=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gl(t,this.TimeBufferType),this.values=gl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:gl(e.times,Array),values:gl(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Kf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Jf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case yl:t=this.InterpolantFactoryMethodDiscrete;break;case _l:t=this.InterpolantFactoryMethodLinear;break;case qh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return yl;case this.InterpolantFactoryMethodLinear:return _l;case this.InterpolantFactoryMethodSmooth:return qh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&TN(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===qh,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{let d=a*i,h=d-i,m=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[h+g]||y!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let d=a*i,h=o*i;for(let m=0;m!==i;++m)t[h+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,c=o*i,l=0;l!==i;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=_l;var Ur=class extends kn{};Ur.prototype.ValueTypeName="bool";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=yl;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Qf=class extends kn{};Qf.prototype.ValueTypeName="color";var ep=class extends kn{};ep.prototype.ValueTypeName="number";var tp=class extends Qs{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-t)/(r-t),l=e*a;for(let u=l+a;l!==u;l+=4)er.slerpFlat(s,0,o,l-a,o,l,c);return s}},la=class extends kn{InterpolantFactoryMethodLinear(e){return new tp(this.times,this.values,this.getValueSize(),e)}};la.prototype.ValueTypeName="quaternion";la.prototype.DefaultInterpolation=_l;la.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends kn{};kr.prototype.ValueTypeName="string";kr.prototype.ValueBufferType=Array;kr.prototype.DefaultInterpolation=yl;kr.prototype.InterpolantFactoryMethodLinear=void 0;kr.prototype.InterpolantFactoryMethodSmooth=void 0;var np=class extends kn{};np.prototype.ValueTypeName="vector";var D0={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}},ip=class{constructor(e,t,i){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,d){return l.push(u,d),this},this.removeHandler=function(u){let d=l.indexOf(u);return d!==-1&&l.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=l.length;d<h;d+=2){let m=l[d],g=l[d+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}},CN=new ip,dp=(()=>{class n{constructor(t){this.manager=t!==void 0?t:CN,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){let r=this;return new Promise(function(s,o){r.load(t,s,i,o)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}return n.DEFAULT_MATERIAL_NAME="__DEFAULT",n})(),gi={},rp=class extends Error{constructor(e,t){super(e),this.response=t}},Bl=class extends dp{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=D0.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(gi[e]!==void 0){gi[e].push({onLoad:t,onProgress:i,onError:r});return}gi[e]=[],gi[e].push({onLoad:t,onProgress:i,onError:r});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=gi[e],d=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),m=h?parseInt(h):0,g=m!==0,y=0,p=new ReadableStream({start(f){S();function S(){d.read().then(({done:x,value:w})=>{if(x)f.close();else{y+=w.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:m});for(let C=0,T=u.length;C<T;C++){let k=u[C];k.onProgress&&k.onProgress(I)}f.enqueue(w),S()}})}}});return new Response(p)}else throw new rp(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),h=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(h);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{D0.add(e,l);let u=gi[e];delete gi[e];for(let d=0,h=u.length;d<h;d++){let m=u[d];m.onLoad&&m.onLoad(l)}}).catch(l=>{let u=gi[e];if(u===void 0)throw this.manager.itemError(e),l;delete gi[e];for(let d=0,h=u.length;d<h;d++){let m=u[d];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var hp="\\[\\]\\.:\\/",AN=new RegExp("["+hp+"]","g"),fp="[^"+hp+"]",DN="[^"+hp.replace("\\.","")+"]",IN=/((?:WC+[\/:])*)/.source.replace("WC",fp),RN=/(WCOD+)?/.source.replace("WCOD",DN),NN=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fp),PN=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fp),LN=new RegExp("^"+IN+RN+NN+PN+"$"),ON=["material","materials","bones","map"],sp=class{constructor(e,t,i){let r=i||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},bt=(()=>{class n{constructor(t,i,r){this.path=i,this.parsedPath=r||n.parseTrackName(i),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,i,r){return t&&t.isAnimationObjectGroup?new n.Composite(t,i,r):new n(t,i,r)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(AN,"")}static parseTrackName(t){let i=LN.exec(t);if(i===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let r={nodeName:i[2],objectName:i[3],objectIndex:i[4],propertyName:i[5],propertyIndex:i[6]},s=r.nodeName&&r.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let o=r.nodeName.substring(s+1);ON.indexOf(o)!==-1&&(r.nodeName=r.nodeName.substring(0,s),r.objectName=o)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return r}static findNode(t,i){if(i===void 0||i===""||i==="."||i===-1||i===t.name||i===t.uuid)return t;if(t.skeleton){let r=t.skeleton.getBoneByName(i);if(r!==void 0)return r}if(t.children){let r=function(o){for(let a=0;a<o.length;a++){let c=o[a];if(c.name===i||c.uuid===i)return c;let l=r(c.children);if(l)return l}return null},s=r(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,i){t[i]=this.targetObject[this.propertyName]}_getValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)t[i++]=r[s]}_getValue_arrayElement(t,i){t[i]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,i){this.resolvedProperty.toArray(t,i)}_setValue_direct(t,i){this.targetObject[this.propertyName]=t[i]}_setValue_direct_setNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,i){this.targetObject[this.propertyName]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++]}_setValue_array_setNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,i){let r=this.resolvedProperty;for(let s=0,o=r.length;s!==o;++s)r[s]=t[i++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,i){this.resolvedProperty[this.propertyIndex]=t[i]}_setValue_arrayElement_setNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty[this.propertyIndex]=t[i],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,i){this.resolvedProperty.fromArray(t,i)}_setValue_fromArray_setNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,i){this.resolvedProperty.fromArray(t,i),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,i){this.bind(),this.getValue(t,i)}_setValue_unbound(t,i){this.bind(),this.setValue(t,i)}bind(){let t=this.node,i=this.parsedPath,r=i.objectName,s=i.propertyName,o=i.propertyIndex;if(t||(t=n.findNode(this.rootNode,i.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let u=i.objectIndex;switch(r){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let d=0;d<t.length;d++)if(t[d].name===u){u=d;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[r]}if(u!==void 0){if(t[u]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[u]}}let a=t[s];if(a===void 0){let u=i.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+u+"."+s+" but it wasn't found.",t);return}let c=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?c=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(o!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[o]!==void 0&&(o=t.morphTargetDictionary[o])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=o}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return n.Composite=sp,n})();bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var e3=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:op}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=op);var UN=/^[og]\s*(.+)?/,kN=/^mtllib /,BN=/^usemtl /,VN=/^usemap /,Y0=/\s+/,Z0=new P,pp=new P,J0=new P,K0=new P,Tn=new P,Gl=new Ye;function zN(){let n={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(e,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=e,this.object.fromDeclaration=t!==!1;return}let i=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:e||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(r,s){let o=this._finalize(!1);o&&(o.inherited||o.groupCount<=0)&&this.materials.splice(o.index,1);let a={index:this.materials.length,name:r||"",mtllib:Array.isArray(s)&&s.length>0?s[s.length-1]:"",smooth:o!==void 0?o.smooth:this.smooth,groupStart:o!==void 0?o.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){let l={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return l.clone=this.clone.bind(l),l}};return this.materials.push(a),a},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(r){let s=this.currentMaterial();if(s&&s.groupEnd===-1&&(s.groupEnd=this.geometry.vertices.length/3,s.groupCount=s.groupEnd-s.groupStart,s.inherited=!1),r&&this.materials.length>1)for(let o=this.materials.length-1;o>=0;o--)this.materials[o].groupCount<=0&&this.materials.splice(o,1);return r&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),s}},i&&i.name&&typeof i.clone=="function"){let r=i.clone(0);r.inherited=!0,this.object.materials.push(r)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseNormalIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/3)*3},parseUVIndex:function(e,t){let i=parseInt(e,10);return(i>=0?i-1:i+t/2)*2},addVertex:function(e,t,i){let r=this.vertices,s=this.object.geometry.vertices;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addVertexPoint:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addVertexLine:function(e){let t=this.vertices;this.object.geometry.vertices.push(t[e+0],t[e+1],t[e+2])},addNormal:function(e,t,i){let r=this.normals,s=this.object.geometry.normals;s.push(r[e+0],r[e+1],r[e+2]),s.push(r[t+0],r[t+1],r[t+2]),s.push(r[i+0],r[i+1],r[i+2])},addFaceNormal:function(e,t,i){let r=this.vertices,s=this.object.geometry.normals;Z0.fromArray(r,e),pp.fromArray(r,t),J0.fromArray(r,i),Tn.subVectors(J0,pp),K0.subVectors(Z0,pp),Tn.cross(K0),Tn.normalize(),s.push(Tn.x,Tn.y,Tn.z),s.push(Tn.x,Tn.y,Tn.z),s.push(Tn.x,Tn.y,Tn.z)},addColor:function(e,t,i){let r=this.colors,s=this.object.geometry.colors;r[e]!==void 0&&s.push(r[e+0],r[e+1],r[e+2]),r[t]!==void 0&&s.push(r[t+0],r[t+1],r[t+2]),r[i]!==void 0&&s.push(r[i+0],r[i+1],r[i+2])},addUV:function(e,t,i){let r=this.uvs,s=this.object.geometry.uvs;s.push(r[e+0],r[e+1]),s.push(r[t+0],r[t+1]),s.push(r[i+0],r[i+1])},addDefaultUV:function(){let e=this.object.geometry.uvs;e.push(0,0),e.push(0,0),e.push(0,0)},addUVLine:function(e){let t=this.uvs;this.object.geometry.uvs.push(t[e+0],t[e+1])},addFace:function(e,t,i,r,s,o,a,c,l){let u=this.vertices.length,d=this.parseVertexIndex(e,u),h=this.parseVertexIndex(t,u),m=this.parseVertexIndex(i,u);if(this.addVertex(d,h,m),this.addColor(d,h,m),a!==void 0&&a!==""){let g=this.normals.length;d=this.parseNormalIndex(a,g),h=this.parseNormalIndex(c,g),m=this.parseNormalIndex(l,g),this.addNormal(d,h,m)}else this.addFaceNormal(d,h,m);if(r!==void 0&&r!==""){let g=this.uvs.length;d=this.parseUVIndex(r,g),h=this.parseUVIndex(s,g),m=this.parseUVIndex(o,g),this.addUV(d,h,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(e){this.object.geometry.type="Points";let t=this.vertices.length;for(let i=0,r=e.length;i<r;i++){let s=this.parseVertexIndex(e[i],t);this.addVertexPoint(s),this.addColor(s)}},addLineGeometry:function(e,t){this.object.geometry.type="Line";let i=this.vertices.length,r=this.uvs.length;for(let s=0,o=e.length;s<o;s++)this.addVertexLine(this.parseVertexIndex(e[s],i));for(let s=0,o=t.length;s<o;s++)this.addUVLine(this.parseUVIndex(t[s],r))}};return n.startObject("",!1),n}var Wl=class extends dp{constructor(e){super(e),this.materials=null}load(e,t,i,r){let s=this,o=new Bl(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}setMaterials(e){return this.materials=e,this}parse(e){let t=new zN;e.indexOf(`\r
`)!==-1&&(e=e.replace(/\r\n/g,`
`)),e.indexOf(`\\
`)!==-1&&(e=e.replace(/\\\n/g,""));let i=e.split(`
`),r=[];for(let a=0,c=i.length;a<c;a++){let l=i[a].trimStart();if(l.length===0)continue;let u=l.charAt(0);if(u!=="#")if(u==="v"){let d=l.split(Y0);switch(d[0]){case"v":t.vertices.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3])),d.length>=7?(Gl.setRGB(parseFloat(d[4]),parseFloat(d[5]),parseFloat(d[6])).convertSRGBToLinear(),t.colors.push(Gl.r,Gl.g,Gl.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(d[1]),parseFloat(d[2]),parseFloat(d[3]));break;case"vt":t.uvs.push(parseFloat(d[1]),parseFloat(d[2]));break}}else if(u==="f"){let h=l.slice(1).trim().split(Y0),m=[];for(let y=0,p=h.length;y<p;y++){let f=h[y];if(f.length>0){let S=f.split("/");m.push(S)}}let g=m[0];for(let y=1,p=m.length-1;y<p;y++){let f=m[y],S=m[y+1];t.addFace(g[0],f[0],S[0],g[1],f[1],S[1],g[2],f[2],S[2])}}else if(u==="l"){let d=l.substring(1).trim().split(" "),h=[],m=[];if(l.indexOf("/")===-1)h=d;else for(let g=0,y=d.length;g<y;g++){let p=d[g].split("/");p[0]!==""&&h.push(p[0]),p[1]!==""&&m.push(p[1])}t.addLineGeometry(h,m)}else if(u==="p"){let h=l.slice(1).trim().split(" ");t.addPointGeometry(h)}else if((r=UN.exec(l))!==null){let d=(" "+r[0].slice(1).trim()).slice(1);t.startObject(d)}else if(BN.test(l))t.object.startMaterial(l.substring(7).trim(),t.materialLibraries);else if(kN.test(l))t.materialLibraries.push(l.substring(7).trim());else if(VN.test(l))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(r=l.split(" "),r.length>1){let h=r[1].trim().toLowerCase();t.object.smooth=h!=="0"&&h!=="off"}else t.object.smooth=!0;let d=t.object.currentMaterial();d&&(d.smooth=t.object.smooth)}else{if(l==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+l+'"')}}t.finalize();let s=new Xi;if(s.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let a=0,c=t.objects.length;a<c;a++){let l=t.objects[a],u=l.geometry,d=l.materials,h=u.type==="Line",m=u.type==="Points",g=!1;if(u.vertices.length===0)continue;let y=new En;y.setAttribute("position",new Lt(u.vertices,3)),u.normals.length>0&&y.setAttribute("normal",new Lt(u.normals,3)),u.colors.length>0&&(g=!0,y.setAttribute("color",new Lt(u.colors,3))),u.hasUVIndices===!0&&y.setAttribute("uv",new Lt(u.uvs,2));let p=[];for(let S=0,x=d.length;S<x;S++){let w=d[S],I=w.name+"_"+w.smooth+"_"+g,C=t.materials[I];if(this.materials!==null){if(C=this.materials.create(w.name),h&&C&&!(C instanceof Fr)){let T=new Fr;Sn.prototype.copy.call(T,C),T.color.copy(C.color),C=T}else if(m&&C&&!(C instanceof tr)){let T=new tr({size:10,sizeAttenuation:!1});Sn.prototype.copy.call(T,C),T.color.copy(C.color),T.map=C.map,C=T}}C===void 0&&(h?C=new Fr:m?C=new tr({size:1,sizeAttenuation:!1}):C=new kl,C.name=w.name,C.flatShading=!w.smooth,C.vertexColors=g,t.materials[I]=C),p.push(C)}let f;if(p.length>1){for(let S=0,x=d.length;S<x;S++){let w=d[S];y.addGroup(w.groupStart,w.groupCount,S)}h?f=new ca(y,p):m?f=new Ks(y,p):f=new tn(y,p)}else h?f=new ca(y,p[0]):m?f=new Ks(y,p[0]):f=new tn(y,p[0]);f.name=l.name,s.add(f)}else if(t.vertices.length>0){let a=new tr({size:1,sizeAttenuation:!1}),c=new En;c.setAttribute("position",new Lt(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new Lt(t.colors,3)),a.vertexColors=!0);let l=new Ks(c,a);s.add(l)}return s}};var Q0=(()=>{let e=class e{constructor(i){this.el=i,this.scene=new aa,this.camera=new Wt,this.renderer=new Js,this.ringModel=new ei}ngOnInit(){this.initScene()}initScene(){this.scene=new aa,this.camera=new Wt(75,this.el.nativeElement.offsetWidth/this.el.nativeElement.offsetHeight,.1,1e3),this.camera.position.z=5,this.renderer=new Js,this.renderer.setSize(this.el.nativeElement.offsetWidth,this.el.nativeElement.offsetHeight),this.el.nativeElement.appendChild(this.renderer.domElement),this.el.nativeElement.querySelector("#handImage").addEventListener("click",()=>{this.loadRingModel()})}loadRingModel(){new Wl().load("fresh-start/freshy-Mcfresh/src/assets/91-the_crowned_ring_obj_format/the_crowned_ring.obj",r=>{this.ringModel=r,this.scene.add(this.ringModel)},void 0,r=>{console.error("Error loading ring model:",r)})}};e.\u0275fac=function(r){return new(r||e)(wo(hs))},e.\u0275cmp=ds({type:e,selectors:[["app-ring-placement"]],decls:2,vars:0,consts:[["src","path/to/hand-image.jpg","alt","Hand Image","id","handImage"]],template:function(r,s){r&1&&(gc(0,"div"),pr(1,"img",0),vc())}});let n=e;return n})();var ex=(()=>{let e=class e{constructor(){this.title="freshy-Mcfresh"}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=ds({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(r,s){r&1&&pr(0,"app-ring-placement")},dependencies:[Q0]});let n=e;return n})();var tx=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=Rn({type:e,bootstrap:[ex]}),e.\u0275inj=In({imports:[sy,Zy]});let n=e;return n})();ry().bootstrapModule(tx).catch(n=>console.error(n));
