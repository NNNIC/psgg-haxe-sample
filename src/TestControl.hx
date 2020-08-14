typedef STATEFUNC = Bool->Void;

enum TestControl_STATE {
    none;
    //[PSGG OUTPUT START] indent(4) $/^S_/->#enum$
    //             psggConverterLib.dll converted from psgg-file:TestControl.psgg

    S_0000;
    S_0001;
    S_0002;
    S_0003;
    S_0004;
    S_0005;
    S_0006;
    S_0007;
    S_0008;
    S_END;
    S_GSB000;
    S_LOP000;
    S_LOP000_Check____;
    S_LOP000_Next____;
    S_RET000;
    S_RET001;
    S_SBS000;
    S_SBS001;
    S_START;
    S_WAIT1SEC;


    //[PSGG OUTPUT END]
    unknown;
}

class TestControl  {
//#region manager
    var m_curfunc : TestControl_STATE;
    var m_nextfunc: TestControl_STATE;

    var m_noWait : Bool;

    var m_funcmap : Map<TestControl_STATE,STATEFUNC>;

    public function Update() {
        while(true)
        {
            var bFirst = false;
            if (m_nextfunc!=TestControl_STATE.none)
            {
                m_curfunc = m_nextfunc;
                m_nextfunc = TestControl_STATE.none;
                bFirst = true;
            }
            m_noWait = false;
            if (m_curfunc!=TestControl_STATE.none)
            {   
                m_funcmap[m_curfunc](bFirst);
            }
            if (!m_noWait) break;
        }
    }
    function Goto(func : TestControl_STATE)
    {
        m_nextfunc = func;
    }
    function CheckState(func : TestControl_STATE) : Bool
    {
        return m_curfunc == func;
    }
    function HasNextState() : Bool
    {
        return m_nextfunc != TestControl_STATE.none;
    }
    function NoWait()
    {
        m_noWait = true;
    }
//#endregion
//#region gosub
    var MAX_CALLSTACK : Int = 10;
    var m_callstacks : Array<TestControl_STATE>;
    var m_callstack_level = 0;
    function GoSubState(nextstate : TestControl_STATE, returnstate : TestControl_STATE)
    {
        if (m_callstack_level >= MAX_CALLSTACK -1) {
            trace("CALL STACK OVERFLOW");
            return;
        }
        m_callstacks[m_callstack_level] = returnstate;
        m_callstack_level += 1;
        Goto(nextstate);
    }
    function ReturnState()
    {
        if (m_callstack_level <= 0) {
            trace("CALL STACK UNDERFLOW");
            return;
        }
        m_callstack_level -= 1;
        var nextstate = m_callstacks[m_callstack_level];
        Goto(nextstate);
    }
//#endregion 

//#region CONSTRUCTOR
    public function new(){
        m_curfunc    = TestControl_STATE.none;
        m_nextfunc   = TestControl_STATE.none;
        m_callstacks = [for(i in 0...MAX_CALLSTACK) TestControl_STATE.none];
        m_funcmap  = [
            // [PSGG OUTPUT START] indent(12) $/^S_/->#map$
            //             psggConverterLib.dll converted from psgg-file:TestControl.psgg

            TestControl_STATE.S_0000=>S_0000,
            TestControl_STATE.S_0001=>S_0001,
            TestControl_STATE.S_0002=>S_0002,
            TestControl_STATE.S_0003=>S_0003,
            TestControl_STATE.S_0004=>S_0004,
            TestControl_STATE.S_0005=>S_0005,
            TestControl_STATE.S_0006=>S_0006,
            TestControl_STATE.S_0007=>S_0007,
            TestControl_STATE.S_0008=>S_0008,
            TestControl_STATE.S_END=>S_END,
            TestControl_STATE.S_GSB000=>S_GSB000,
            TestControl_STATE.S_LOP000=>S_LOP000,
            TestControl_STATE.S_LOP000_Check____=>S_LOP000_Check____,
            TestControl_STATE.S_LOP000_Next____=>S_LOP000_Next____,
            TestControl_STATE.S_RET000=>S_RET000,
            TestControl_STATE.S_RET001=>S_RET001,
            TestControl_STATE.S_SBS000=>S_SBS000,
            TestControl_STATE.S_SBS001=>S_SBS001,
            TestControl_STATE.S_START=>S_START,
            TestControl_STATE.S_WAIT1SEC=>S_WAIT1SEC,


            // [PSGG OUTPUT END]    
            unknown=>null
        ];

    }
//#endregion

    public function Start()
    {
        Goto(TestControl_STATE.S_START);
    }
    public function IsEnd() : Bool    
    { 
        return CheckState(TestControl_STATE.S_END); 
    }
    
    public function Run()
    {
        var LOOPMAX = 100000;
        var bEnd = false;
		Start();
		for(loop_1 in 0...LOOPMAX)
		{
            if (bEnd) break;
            if (loop_1 >= LOOPMAX-1){
                trace("OUT OF LOOP. INCREASE LOOPMAX OR MODIFY USING WHILE"); 
            }
            for(loop_2 in 0...LOOPMAX) {
                Update();
                bEnd = IsEnd();
                if (bEnd) break;
            }
        }
        
	}

	// [PSGG OUTPUT START] indent(4) $/./$
    //             psggConverterLib.dll converted from psgg-file:TestControl.psgg

    /*
        E_0001
    */
    var m_msg : String;
    /*
        S_0000
    */
    function S_0000(bFirst : Bool)
    {
        //
        if (bFirst)
        {
            trace("Hello World!");
        }
        //
        if (!HasNextState())
        {
            Goto(TestControl_STATE.S_0008);
        }
    }
    /*
        S_0001
    */
    var m_val : Int;
    function S_0001(bFirst : Bool)
    {
        var sec = Date.now().getSeconds();
        var n = sec % 5;
        m_val = n;
        // branch
        if (n == 0) { Goto( TestControl_STATE.S_0002 ); }
        else if (n == 1) { Goto( TestControl_STATE.S_0003 ); }
        else if (n == 2) { Goto( TestControl_STATE.S_0004 ); }
        else if (n == 3) { Goto( TestControl_STATE.S_0005 ); }
        else { Goto( TestControl_STATE.S_0006 ); }
    }
    /*
        S_0002
    */
    function S_0002(bFirst : Bool)
    {
        //
        if (bFirst)
        {
            trace("Zero");
        }
        //
        if (!HasNextState())
        {
            Goto(TestControl_STATE.S_WAIT1SEC);
        }
    }
    /*
        S_0003
    */
    function S_0003(bFirst : Bool)
    {
        //
        if (bFirst)
        {
            trace("First");
        }
        //
        if (!HasNextState())
        {
            Goto(TestControl_STATE.S_WAIT1SEC);
        }
    }
    /*
        S_0004
    */
    function S_0004(bFirst : Bool)
    {
        //
        if (bFirst)
        {
            trace("Two");
        }
        //
        if (!HasNextState())
        {
            Goto(TestControl_STATE.S_WAIT1SEC);
        }
    }
    /*
        S_0005
    */
    function S_0005(bFirst : Bool)
    {
        //
        if (bFirst)
        {
            trace("Three");
        }
        //
        if (!HasNextState())
        {
            Goto(TestControl_STATE.S_WAIT1SEC);
        }
    }
    /*
        S_0006
    */
    function S_0006(bFirst : Bool)
    {
        //
        if (bFirst)
        {
            trace('$m_val');
        }
        //
        if (!HasNextState())
        {
            Goto(TestControl_STATE.S_WAIT1SEC);
        }
    }
    /*
        S_0007
    */
    function S_0007(bFirst : Bool)
    {
        //
        if (bFirst)
        {
            trace("In Subroutine!");
        }
        //
        if (!HasNextState())
        {
            Goto(TestControl_STATE.S_RET000);
        }
    }
    /*
        S_0008
    */
    function S_0008(bFirst : Bool)
    {
        //
        if (bFirst)
        {
            m_msg = "Use m_msg.";
            trace(m_msg);
        }
        //
        if (!HasNextState())
        {
            Goto(TestControl_STATE.S_GSB000);
        }
    }
    /*
        S_END
    */
    function S_END(bFirst : Bool)
    {
    }
    /*
        S_GSB000
    */
    function S_GSB000(bFirst : Bool)
    {
        GoSubState(TestControl_STATE.S_SBS000,TestControl_STATE.S_LOP000);
        NoWait();
    }
    /*
        S_LOP000
    */
    var m_index : Int;
    function S_LOP000(bFirst : Bool)
    {
        m_index = 0;
        Goto(TestControl_STATE.S_LOP000_Check____);
        NoWait();
    }
    function S_LOP000_Check____(bFirst : Bool)
    {
        if (m_index < 10) GoSubState(TestControl_STATE.S_SBS001,TestControl_STATE.S_LOP000_Next____);
        else               Goto(TestControl_STATE.S_END);
        NoWait();
    }
    function S_LOP000_Next____(bFirst : Bool)
    {
        m_index++;
        Goto(TestControl_STATE.S_LOP000_Check____);
        NoWait();
    }
    /*
        S_RET000
    */
    function S_RET000(bFirst : Bool)
    {
        ReturnState();
        NoWait();
    }
    /*
        S_RET001
    */
    function S_RET001(bFirst : Bool)
    {
        ReturnState();
        NoWait();
    }
    /*
        S_SBS000
    */
    function S_SBS000(bFirst : Bool)
    {
        Goto(TestControl_STATE.S_0007);
        NoWait();
    }
    /*
        S_SBS001
    */
    function S_SBS001(bFirst : Bool)
    {
        Goto(TestControl_STATE.S_0001);
        NoWait();
    }
    /*
        S_START
    */
    function S_START(bFirst : Bool)
    {
        Goto(TestControl_STATE.S_0000);
        NoWait();
    }
    /*
        S_WAIT1SEC
    */
    var m_S_WAIT1SEC : Int;
    function S_WAIT1SEC(bFirst : Bool)
    {
        //
        if (bFirst)
        {
            m_S_WAIT1SEC = Date.now().getSeconds();
        }
        if (m_S_WAIT1SEC == Date.now().getSeconds()) return;
        //
        if (!HasNextState())
        {
            Goto(TestControl_STATE.S_RET001);
        }
    }


	// [PSGG OUTPUT END]

	// write your code below

}

/*  :::: PSGG MACRO ::::
:psgg-macro-start

commentline=// {%0}

@branch=@@@
<<<?"{%0}"/^brifc{0,1}$/
if ([[brcond:{%N}]]) { Goto( $statemachine$_STATE.{%1} ); }
>>>
<<<?"{%0}"/^brelseifc{0,1}$/
else if ([[brcond:{%N}]]) { Goto( $statemachine$_STATE.{%1} ); }
>>>
<<<?"{%0}"/^brelse$/
else { Goto( $statemachine$_STATE.{%1} ); }
>>>
<<<?"{%0}"/^br_/
{%0}($statemachine$_STATE.{%1});
>>>
@@@

#enum=@@@
[[state]];
<<<?state-typ/^loop$/
[[state]]_Check____;
[[state]]_Next____;
>>>
@@@

#map=@@@
$statemachine$_STATE.[[state]]=>[[state]],
<<<?state-typ/^loop$/
$statemachine$_STATE.[[state]]_Check____=>[[state]]_Check____,
$statemachine$_STATE.[[state]]_Next____=>[[state]]_Next____,
>>>
@@@

:psgg-macro-end
*/

