// Generated by Haxe 4.1.3
(function ($global) { "use strict";
var $estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
Math.__name__ = true;
var Reflect = function() { };
Reflect.__name__ = true;
Reflect.compare = function(a,b) {
	if(a == b) {
		return 0;
	} else if(a > b) {
		return 1;
	} else {
		return -1;
	}
};
Reflect.isEnumValue = function(v) {
	if(v != null) {
		return v.__enum__ != null;
	} else {
		return false;
	}
};
var Test = function() { };
Test.__name__ = true;
Test.main = function() {
	console.log("src/Test.hx:5:","#START");
	var sm = new TestControl();
	sm.Run();
	console.log("src/Test.hx:8:","#END");
};
var TestControl_$STATE = $hxEnums["TestControl_STATE"] = { __ename__ : true, __constructs__ : ["none","S_0000","S_0001","S_0002","S_0003","S_0004","S_0005","S_0006","S_0007","S_0008","S_END","S_GSB000","S_LOP000","S_LOP000_Check____","S_LOP000_Next____","S_RET000","S_RET001","S_SBS000","S_SBS001","S_START","S_WAIT1SEC","unknown"]
	,none: {_hx_index:0,__enum__:"TestControl_STATE",toString:$estr}
	,S_0000: {_hx_index:1,__enum__:"TestControl_STATE",toString:$estr}
	,S_0001: {_hx_index:2,__enum__:"TestControl_STATE",toString:$estr}
	,S_0002: {_hx_index:3,__enum__:"TestControl_STATE",toString:$estr}
	,S_0003: {_hx_index:4,__enum__:"TestControl_STATE",toString:$estr}
	,S_0004: {_hx_index:5,__enum__:"TestControl_STATE",toString:$estr}
	,S_0005: {_hx_index:6,__enum__:"TestControl_STATE",toString:$estr}
	,S_0006: {_hx_index:7,__enum__:"TestControl_STATE",toString:$estr}
	,S_0007: {_hx_index:8,__enum__:"TestControl_STATE",toString:$estr}
	,S_0008: {_hx_index:9,__enum__:"TestControl_STATE",toString:$estr}
	,S_END: {_hx_index:10,__enum__:"TestControl_STATE",toString:$estr}
	,S_GSB000: {_hx_index:11,__enum__:"TestControl_STATE",toString:$estr}
	,S_LOP000: {_hx_index:12,__enum__:"TestControl_STATE",toString:$estr}
	,S_LOP000_Check____: {_hx_index:13,__enum__:"TestControl_STATE",toString:$estr}
	,S_LOP000_Next____: {_hx_index:14,__enum__:"TestControl_STATE",toString:$estr}
	,S_RET000: {_hx_index:15,__enum__:"TestControl_STATE",toString:$estr}
	,S_RET001: {_hx_index:16,__enum__:"TestControl_STATE",toString:$estr}
	,S_SBS000: {_hx_index:17,__enum__:"TestControl_STATE",toString:$estr}
	,S_SBS001: {_hx_index:18,__enum__:"TestControl_STATE",toString:$estr}
	,S_START: {_hx_index:19,__enum__:"TestControl_STATE",toString:$estr}
	,S_WAIT1SEC: {_hx_index:20,__enum__:"TestControl_STATE",toString:$estr}
	,unknown: {_hx_index:21,__enum__:"TestControl_STATE",toString:$estr}
};
var TestControl = function() {
	this.m_callstack_level = 0;
	this.MAX_CALLSTACK = 10;
	this.m_curfunc = TestControl_$STATE.none;
	this.m_nextfunc = TestControl_$STATE.none;
	var _g = [];
	var _g1 = 0;
	var _g2 = this.MAX_CALLSTACK;
	while(_g1 < _g2) {
		var i = _g1++;
		_g.push(TestControl_$STATE.none);
	}
	this.m_callstacks = _g;
	var _g = new haxe_ds_EnumValueMap();
	_g.set(TestControl_$STATE.S_0000,$bind(this,this.S_0000));
	_g.set(TestControl_$STATE.S_0001,$bind(this,this.S_0001));
	_g.set(TestControl_$STATE.S_0002,$bind(this,this.S_0002));
	_g.set(TestControl_$STATE.S_0003,$bind(this,this.S_0003));
	_g.set(TestControl_$STATE.S_0004,$bind(this,this.S_0004));
	_g.set(TestControl_$STATE.S_0005,$bind(this,this.S_0005));
	_g.set(TestControl_$STATE.S_0006,$bind(this,this.S_0006));
	_g.set(TestControl_$STATE.S_0007,$bind(this,this.S_0007));
	_g.set(TestControl_$STATE.S_0008,$bind(this,this.S_0008));
	_g.set(TestControl_$STATE.S_END,$bind(this,this.S_END));
	_g.set(TestControl_$STATE.S_GSB000,$bind(this,this.S_GSB000));
	_g.set(TestControl_$STATE.S_LOP000,$bind(this,this.S_LOP000));
	_g.set(TestControl_$STATE.S_LOP000_Check____,$bind(this,this.S_LOP000_Check____));
	_g.set(TestControl_$STATE.S_LOP000_Next____,$bind(this,this.S_LOP000_Next____));
	_g.set(TestControl_$STATE.S_RET000,$bind(this,this.S_RET000));
	_g.set(TestControl_$STATE.S_RET001,$bind(this,this.S_RET001));
	_g.set(TestControl_$STATE.S_SBS000,$bind(this,this.S_SBS000));
	_g.set(TestControl_$STATE.S_SBS001,$bind(this,this.S_SBS001));
	_g.set(TestControl_$STATE.S_START,$bind(this,this.S_START));
	_g.set(TestControl_$STATE.S_WAIT1SEC,$bind(this,this.S_WAIT1SEC));
	_g.set(TestControl_$STATE.unknown,null);
	this.m_funcmap = _g;
};
TestControl.__name__ = true;
TestControl.prototype = {
	Update: function() {
		while(true) {
			var bFirst = false;
			if(this.m_nextfunc != TestControl_$STATE.none) {
				this.m_curfunc = this.m_nextfunc;
				this.m_nextfunc = TestControl_$STATE.none;
				bFirst = true;
			}
			this.m_noWait = false;
			if(this.m_curfunc != TestControl_$STATE.none) {
				(this.m_funcmap.get(this.m_curfunc))(bFirst);
			}
			if(!this.m_noWait) {
				break;
			}
		}
	}
	,Goto: function(func) {
		this.m_nextfunc = func;
	}
	,CheckState: function(func) {
		return this.m_curfunc == func;
	}
	,HasNextState: function() {
		return this.m_nextfunc != TestControl_$STATE.none;
	}
	,NoWait: function() {
		this.m_noWait = true;
	}
	,GoSubState: function(nextstate,returnstate) {
		if(this.m_callstack_level >= this.MAX_CALLSTACK - 1) {
			console.log("src/TestControl.hx:85:","CALL STACK OVERFLOW");
			return;
		}
		this.m_callstacks[this.m_callstack_level] = returnstate;
		this.m_callstack_level += 1;
		this.Goto(nextstate);
	}
	,ReturnState: function() {
		if(this.m_callstack_level <= 0) {
			console.log("src/TestControl.hx:95:","CALL STACK UNDERFLOW");
			return;
		}
		this.m_callstack_level -= 1;
		var nextstate = this.m_callstacks[this.m_callstack_level];
		this.Goto(nextstate);
	}
	,Start: function() {
		this.Goto(TestControl_$STATE.S_START);
	}
	,IsEnd: function() {
		return this.CheckState(TestControl_$STATE.S_END);
	}
	,Run: function() {
		var LOOPMAX = 100000;
		var bEnd = false;
		this.Start();
		var _g = 0;
		var _g1 = LOOPMAX;
		while(_g < _g1) {
			var loop_1 = _g++;
			if(bEnd) {
				break;
			}
			if(loop_1 >= LOOPMAX - 1) {
				console.log("src/TestControl.hx:160:","OUT OF LOOP. INCREASE LOOPMAX OR MODIFY USING WHILE");
			}
			var _g2 = 0;
			var _g3 = LOOPMAX;
			while(_g2 < _g3) {
				var loop_2 = _g2++;
				this.Update();
				bEnd = this.IsEnd();
				if(bEnd) {
					break;
				}
			}
		}
	}
	,S_0000: function(bFirst) {
		if(bFirst) {
			console.log("src/TestControl.hx:186:","Hello World!");
		}
		if(!this.HasNextState()) {
			this.Goto(TestControl_$STATE.S_0008);
		}
	}
	,S_0001: function(bFirst) {
		var sec = new Date().getSeconds();
		var n = sec % 5;
		this.m_val = n;
		if(n == 0) {
			this.Goto(TestControl_$STATE.S_0002);
		} else if(n == 1) {
			this.Goto(TestControl_$STATE.S_0003);
		} else if(n == 2) {
			this.Goto(TestControl_$STATE.S_0004);
		} else if(n == 3) {
			this.Goto(TestControl_$STATE.S_0005);
		} else {
			this.Goto(TestControl_$STATE.S_0006);
		}
	}
	,S_0002: function(bFirst) {
		if(bFirst) {
			console.log("src/TestControl.hx:218:","Zero");
		}
		if(!this.HasNextState()) {
			this.Goto(TestControl_$STATE.S_WAIT1SEC);
		}
	}
	,S_0003: function(bFirst) {
		if(bFirst) {
			console.log("src/TestControl.hx:234:","First");
		}
		if(!this.HasNextState()) {
			this.Goto(TestControl_$STATE.S_WAIT1SEC);
		}
	}
	,S_0004: function(bFirst) {
		if(bFirst) {
			console.log("src/TestControl.hx:250:","Two");
		}
		if(!this.HasNextState()) {
			this.Goto(TestControl_$STATE.S_WAIT1SEC);
		}
	}
	,S_0005: function(bFirst) {
		if(bFirst) {
			console.log("src/TestControl.hx:266:","Three");
		}
		if(!this.HasNextState()) {
			this.Goto(TestControl_$STATE.S_WAIT1SEC);
		}
	}
	,S_0006: function(bFirst) {
		if(bFirst) {
			console.log("src/TestControl.hx:282:","" + this.m_val);
		}
		if(!this.HasNextState()) {
			this.Goto(TestControl_$STATE.S_WAIT1SEC);
		}
	}
	,S_0007: function(bFirst) {
		if(bFirst) {
			console.log("src/TestControl.hx:298:","In Subroutine!");
		}
		if(!this.HasNextState()) {
			this.Goto(TestControl_$STATE.S_RET000);
		}
	}
	,S_0008: function(bFirst) {
		if(bFirst) {
			this.m_msg = "Use m_msg.";
			console.log("src/TestControl.hx:315:",this.m_msg);
		}
		if(!this.HasNextState()) {
			this.Goto(TestControl_$STATE.S_GSB000);
		}
	}
	,S_END: function(bFirst) {
	}
	,S_GSB000: function(bFirst) {
		this.GoSubState(TestControl_$STATE.S_SBS000,TestControl_$STATE.S_LOP000);
		this.NoWait();
	}
	,S_LOP000: function(bFirst) {
		this.m_index = 0;
		this.Goto(TestControl_$STATE.S_LOP000_Check____);
		this.NoWait();
	}
	,S_LOP000_Check____: function(bFirst) {
		if(this.m_index < 10) {
			this.GoSubState(TestControl_$STATE.S_SBS001,TestControl_$STATE.S_LOP000_Next____);
		} else {
			this.Goto(TestControl_$STATE.S_END);
		}
		this.NoWait();
	}
	,S_LOP000_Next____: function(bFirst) {
		this.m_index++;
		this.Goto(TestControl_$STATE.S_LOP000_Check____);
		this.NoWait();
	}
	,S_RET000: function(bFirst) {
		this.ReturnState();
		this.NoWait();
	}
	,S_RET001: function(bFirst) {
		this.ReturnState();
		this.NoWait();
	}
	,S_SBS000: function(bFirst) {
		this.Goto(TestControl_$STATE.S_0007);
		this.NoWait();
	}
	,S_SBS001: function(bFirst) {
		this.Goto(TestControl_$STATE.S_0001);
		this.NoWait();
	}
	,S_START: function(bFirst) {
		this.Goto(TestControl_$STATE.S_0000);
		this.NoWait();
	}
	,S_WAIT1SEC: function(bFirst) {
		if(bFirst) {
			this.m_S_WAIT1SEC = new Date().getSeconds();
		}
		if(this.m_S_WAIT1SEC == new Date().getSeconds()) {
			return;
		}
		if(!this.HasNextState()) {
			this.Goto(TestControl_$STATE.S_RET001);
		}
	}
};
var Type = function() { };
Type.__name__ = true;
Type.enumParameters = function(e) {
	var enm = $hxEnums[e.__enum__];
	var ctorName = enm.__constructs__[e._hx_index];
	var params = enm[ctorName].__params__;
	if(params != null) {
		var _g = [];
		var _g1 = 0;
		while(_g1 < params.length) {
			var p = params[_g1];
			++_g1;
			_g.push(e[p]);
		}
		return _g;
	} else {
		return [];
	}
};
var haxe_ds_BalancedTree = function() {
};
haxe_ds_BalancedTree.__name__ = true;
haxe_ds_BalancedTree.prototype = {
	set: function(key,value) {
		this.root = this.setLoop(key,value,this.root);
	}
	,get: function(key) {
		var node = this.root;
		while(node != null) {
			var c = this.compare(key,node.key);
			if(c == 0) {
				return node.value;
			}
			if(c < 0) {
				node = node.left;
			} else {
				node = node.right;
			}
		}
		return null;
	}
	,setLoop: function(k,v,node) {
		if(node == null) {
			return new haxe_ds_TreeNode(null,k,v,null);
		}
		var c = this.compare(k,node.key);
		if(c == 0) {
			return new haxe_ds_TreeNode(node.left,k,v,node.right,node == null ? 0 : node._height);
		} else if(c < 0) {
			var nl = this.setLoop(k,v,node.left);
			return this.balance(nl,node.key,node.value,node.right);
		} else {
			var nr = this.setLoop(k,v,node.right);
			return this.balance(node.left,node.key,node.value,nr);
		}
	}
	,balance: function(l,k,v,r) {
		var hl = l == null ? 0 : l._height;
		var hr = r == null ? 0 : r._height;
		if(hl > hr + 2) {
			var _this = l.left;
			var _this1 = l.right;
			if((_this == null ? 0 : _this._height) >= (_this1 == null ? 0 : _this1._height)) {
				return new haxe_ds_TreeNode(l.left,l.key,l.value,new haxe_ds_TreeNode(l.right,k,v,r));
			} else {
				return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l.left,l.key,l.value,l.right.left),l.right.key,l.right.value,new haxe_ds_TreeNode(l.right.right,k,v,r));
			}
		} else if(hr > hl + 2) {
			var _this = r.right;
			var _this1 = r.left;
			if((_this == null ? 0 : _this._height) > (_this1 == null ? 0 : _this1._height)) {
				return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l,k,v,r.left),r.key,r.value,r.right);
			} else {
				return new haxe_ds_TreeNode(new haxe_ds_TreeNode(l,k,v,r.left.left),r.left.key,r.left.value,new haxe_ds_TreeNode(r.left.right,r.key,r.value,r.right));
			}
		} else {
			return new haxe_ds_TreeNode(l,k,v,r,(hl > hr ? hl : hr) + 1);
		}
	}
	,compare: function(k1,k2) {
		return Reflect.compare(k1,k2);
	}
};
var haxe_ds_TreeNode = function(l,k,v,r,h) {
	if(h == null) {
		h = -1;
	}
	this.left = l;
	this.key = k;
	this.value = v;
	this.right = r;
	if(h == -1) {
		var tmp;
		var _this = this.left;
		var _this1 = this.right;
		if((_this == null ? 0 : _this._height) > (_this1 == null ? 0 : _this1._height)) {
			var _this = this.left;
			tmp = _this == null ? 0 : _this._height;
		} else {
			var _this = this.right;
			tmp = _this == null ? 0 : _this._height;
		}
		this._height = tmp + 1;
	} else {
		this._height = h;
	}
};
haxe_ds_TreeNode.__name__ = true;
var haxe_ds_EnumValueMap = function() {
	haxe_ds_BalancedTree.call(this);
};
haxe_ds_EnumValueMap.__name__ = true;
haxe_ds_EnumValueMap.__super__ = haxe_ds_BalancedTree;
haxe_ds_EnumValueMap.prototype = $extend(haxe_ds_BalancedTree.prototype,{
	compare: function(k1,k2) {
		var d = k1._hx_index - k2._hx_index;
		if(d != 0) {
			return d;
		}
		var p1 = Type.enumParameters(k1);
		var p2 = Type.enumParameters(k2);
		if(p1.length == 0 && p2.length == 0) {
			return 0;
		}
		return this.compareArgs(p1,p2);
	}
	,compareArgs: function(a1,a2) {
		var ld = a1.length - a2.length;
		if(ld != 0) {
			return ld;
		}
		var _g = 0;
		var _g1 = a1.length;
		while(_g < _g1) {
			var i = _g++;
			var d = this.compareArg(a1[i],a2[i]);
			if(d != 0) {
				return d;
			}
		}
		return 0;
	}
	,compareArg: function(v1,v2) {
		if(Reflect.isEnumValue(v1) && Reflect.isEnumValue(v2)) {
			return this.compare(v1,v2);
		} else if(((v1) instanceof Array) && ((v2) instanceof Array)) {
			return this.compareArgs(v1,v2);
		} else {
			return Reflect.compare(v1,v2);
		}
	}
});
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
};
var js_Boot = function() { };
js_Boot.__name__ = true;
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var n = e.__constructs__[o._hx_index];
			var con = e[n];
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
String.__name__ = true;
Array.__name__ = true;
Date.__name__ = "Date";
js_Boot.__toStr = ({ }).toString;
Test.main();
})(typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
