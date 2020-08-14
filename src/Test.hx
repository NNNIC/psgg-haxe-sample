import haxe.xml.Access;

class Test {
    static public function main() {
        trace("#START");
        var sm = new TestControl();
        sm.Run();
        trace("#END");
    }
}
/*
class Sub {
    var m_curfunc : STATEFUNC;
    
    var m_callstacks : Array<STATEFUNC> = [for(i in 0...10) null];

    public function new(){}

    function S_START(bFirst: Bool)  {
        trace("S_START");
    }
    public function Set() {
        m_callstacks[0] = S_START;
    }
    public function Run() {
        var func : Bool->Void = m_callstacks[0];
        func(true);
    }
}
*/