// Generated from sequence.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var sequenceListener = require('./sequenceListener').sequenceListener;
var grammarFileName = "sequence.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\ra\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t\u0004",
    "\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004\b",
    "\t\b\u0003\u0002\u0003\u0002\u0007\u0002\u0013\n\u0002\f\u0002\u000e",
    "\u0002\u0016\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003",
    "\u0007\u0003\u001c\n\u0003\f\u0003\u000e\u0003\u001f\u000b\u0003\u0003",
    "\u0003\u0006\u0003\"\n\u0003\r\u0003\u000e\u0003#\u0003\u0003\u0007",
    "\u0003\'\n\u0003\f\u0003\u000e\u0003*\u000b\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u00041\n\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u00046\n\u0004\f\u0004\u000e\u0004",
    "9\u000b\u0004\u0003\u0004\u0007\u0004<\n\u0004\f\u0004\u000e\u0004?",
    "\u000b\u0004\u0003\u0004\u0007\u0004B\n\u0004\f\u0004\u000e\u0004E\u000b",
    "\u0004\u0003\u0004\u0007\u0004H\n\u0004\f\u0004\u000e\u0004K\u000b\u0004",
    "\u0003\u0004\u0007\u0004N\n\u0004\f\u0004\u000e\u0004Q\u000b\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006X",
    "\n\u0006\f\u0006\u000e\u0006[\u000b\u0006\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0002\u0002\t\u0002\u0004\u0006\b\n\f\u000e\u0002",
    "\u0002\u0002e\u0002\u0014\u0003\u0002\u0002\u0002\u0004\u0019\u0003",
    "\u0002\u0002\u0002\u00060\u0003\u0002\u0002\u0002\bR\u0003\u0002\u0002",
    "\u0002\nT\u0003\u0002\u0002\u0002\f\\\u0003\u0002\u0002\u0002\u000e",
    "^\u0003\u0002\u0002\u0002\u0010\u0013\u0005\u0006\u0004\u0002\u0011",
    "\u0013\u0005\u000e\b\u0002\u0012\u0010\u0003\u0002\u0002\u0002\u0012",
    "\u0011\u0003\u0002\u0002\u0002\u0013\u0016\u0003\u0002\u0002\u0002\u0014",
    "\u0012\u0003\u0002\u0002\u0002\u0014\u0015\u0003\u0002\u0002\u0002\u0015",
    "\u0017\u0003\u0002\u0002\u0002\u0016\u0014\u0003\u0002\u0002\u0002\u0017",
    "\u0018\u0007\u0002\u0002\u0003\u0018\u0003\u0003\u0002\u0002\u0002\u0019",
    "\u001d\u0007\u0003\u0002\u0002\u001a\u001c\u0007\t\u0002\u0002\u001b",
    "\u001a\u0003\u0002\u0002\u0002\u001c\u001f\u0003\u0002\u0002\u0002\u001d",
    "\u001b\u0003\u0002\u0002\u0002\u001d\u001e\u0003\u0002\u0002\u0002\u001e",
    "!\u0003\u0002\u0002\u0002\u001f\u001d\u0003\u0002\u0002\u0002 \"\u0005",
    "\u0006\u0004\u0002! \u0003\u0002\u0002\u0002\"#\u0003\u0002\u0002\u0002",
    "#!\u0003\u0002\u0002\u0002#$\u0003\u0002\u0002\u0002$(\u0003\u0002\u0002",
    "\u0002%\'\u0007\t\u0002\u0002&%\u0003\u0002\u0002\u0002\'*\u0003\u0002",
    "\u0002\u0002(&\u0003\u0002\u0002\u0002()\u0003\u0002\u0002\u0002)+\u0003",
    "\u0002\u0002\u0002*(\u0003\u0002\u0002\u0002+,\u0007\u0004\u0002\u0002",
    ",\u0005\u0003\u0002\u0002\u0002-.\u0005\f\u0007\u0002./\u0007\u0005",
    "\u0002\u0002/1\u0003\u0002\u0002\u00020-\u0003\u0002\u0002\u000201\u0003",
    "\u0002\u0002\u000212\u0003\u0002\u0002\u00022=\u0005\b\u0005\u00023",
    "7\u0007\u0006\u0002\u000246\u0005\n\u0006\u000254\u0003\u0002\u0002",
    "\u000269\u0003\u0002\u0002\u000275\u0003\u0002\u0002\u000278\u0003\u0002",
    "\u0002\u00028:\u0003\u0002\u0002\u000297\u0003\u0002\u0002\u0002:<\u0007",
    "\u0007\u0002\u0002;3\u0003\u0002\u0002\u0002<?\u0003\u0002\u0002\u0002",
    "=;\u0003\u0002\u0002\u0002=>\u0003\u0002\u0002\u0002>C\u0003\u0002\u0002",
    "\u0002?=\u0003\u0002\u0002\u0002@B\u0007\t\u0002\u0002A@\u0003\u0002",
    "\u0002\u0002BE\u0003\u0002\u0002\u0002CA\u0003\u0002\u0002\u0002CD\u0003",
    "\u0002\u0002\u0002DI\u0003\u0002\u0002\u0002EC\u0003\u0002\u0002\u0002",
    "FH\u0005\u0004\u0003\u0002GF\u0003\u0002\u0002\u0002HK\u0003\u0002\u0002",
    "\u0002IG\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002JO\u0003\u0002",
    "\u0002\u0002KI\u0003\u0002\u0002\u0002LN\u0007\t\u0002\u0002ML\u0003",
    "\u0002\u0002\u0002NQ\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002",
    "OP\u0003\u0002\u0002\u0002P\u0007\u0003\u0002\u0002\u0002QO\u0003\u0002",
    "\u0002\u0002RS\u0007\u000b\u0002\u0002S\t\u0003\u0002\u0002\u0002TY",
    "\u0007\u000b\u0002\u0002UV\u0007\b\u0002\u0002VX\u0007\u000b\u0002\u0002",
    "WU\u0003\u0002\u0002\u0002X[\u0003\u0002\u0002\u0002YW\u0003\u0002\u0002",
    "\u0002YZ\u0003\u0002\u0002\u0002Z\u000b\u0003\u0002\u0002\u0002[Y\u0003",
    "\u0002\u0002\u0002\\]\u0007\u000b\u0002\u0002]\r\u0003\u0002\u0002\u0002",
    "^_\u0007\t\u0002\u0002_\u000f\u0003\u0002\u0002\u0002\u000e\u0012\u0014",
    "\u001d#(07=CIOY"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{'", "'}'", "'.'", "'('", "')'", "','", null, 
                     "';'" ];

var symbolicNames = [ null, null, null, null, null, null, null, "NL", "SC", 
                      "ID", "CONTENT", "SPACE" ];

var ruleNames =  [ "prog", "subMessage", "message", "methodName", "parameters", 
                   "to", "emptyLine" ];

function sequenceParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

sequenceParser.prototype = Object.create(antlr4.Parser.prototype);
sequenceParser.prototype.constructor = sequenceParser;

Object.defineProperty(sequenceParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

sequenceParser.EOF = antlr4.Token.EOF;
sequenceParser.T__0 = 1;
sequenceParser.T__1 = 2;
sequenceParser.T__2 = 3;
sequenceParser.T__3 = 4;
sequenceParser.T__4 = 5;
sequenceParser.T__5 = 6;
sequenceParser.NL = 7;
sequenceParser.SC = 8;
sequenceParser.ID = 9;
sequenceParser.CONTENT = 10;
sequenceParser.SPACE = 11;

sequenceParser.RULE_prog = 0;
sequenceParser.RULE_subMessage = 1;
sequenceParser.RULE_message = 2;
sequenceParser.RULE_methodName = 3;
sequenceParser.RULE_parameters = 4;
sequenceParser.RULE_to = 5;
sequenceParser.RULE_emptyLine = 6;

function ProgContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_prog;
    return this;
}

ProgContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgContext.prototype.constructor = ProgContext;

ProgContext.prototype.EOF = function() {
    return this.getToken(sequenceParser.EOF, 0);
};

ProgContext.prototype.message = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MessageContext);
    } else {
        return this.getTypedRuleContext(MessageContext,i);
    }
};

ProgContext.prototype.emptyLine = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EmptyLineContext);
    } else {
        return this.getTypedRuleContext(EmptyLineContext,i);
    }
};

ProgContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceListener ) {
        listener.enterProg(this);
	}
};

ProgContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceListener ) {
        listener.exitProg(this);
	}
};




sequenceParser.ProgContext = ProgContext;

sequenceParser.prototype.prog = function() {

    var localctx = new ProgContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, sequenceParser.RULE_prog);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 18;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sequenceParser.NL || _la===sequenceParser.ID) {
            this.state = 16;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case sequenceParser.ID:
                this.state = 14;
                this.message();
                break;
            case sequenceParser.NL:
                this.state = 15;
                this.emptyLine();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 20;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 21;
        this.match(sequenceParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SubMessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_subMessage;
    return this;
}

SubMessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SubMessageContext.prototype.constructor = SubMessageContext;

SubMessageContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.NL);
    } else {
        return this.getToken(sequenceParser.NL, i);
    }
};


SubMessageContext.prototype.message = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MessageContext);
    } else {
        return this.getTypedRuleContext(MessageContext,i);
    }
};

SubMessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceListener ) {
        listener.enterSubMessage(this);
	}
};

SubMessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceListener ) {
        listener.exitSubMessage(this);
	}
};




sequenceParser.SubMessageContext = SubMessageContext;

sequenceParser.prototype.subMessage = function() {

    var localctx = new SubMessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, sequenceParser.RULE_subMessage);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 23;
        this.match(sequenceParser.T__0);
        this.state = 27;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sequenceParser.NL) {
            this.state = 24;
            this.match(sequenceParser.NL);
            this.state = 29;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 31; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 30;
            this.message();
            this.state = 33; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===sequenceParser.ID);
        this.state = 38;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sequenceParser.NL) {
            this.state = 35;
            this.match(sequenceParser.NL);
            this.state = 40;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 41;
        this.match(sequenceParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_message;
    return this;
}

MessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageContext.prototype.constructor = MessageContext;

MessageContext.prototype.methodName = function() {
    return this.getTypedRuleContext(MethodNameContext,0);
};

MessageContext.prototype.to = function() {
    return this.getTypedRuleContext(ToContext,0);
};

MessageContext.prototype.NL = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.NL);
    } else {
        return this.getToken(sequenceParser.NL, i);
    }
};


MessageContext.prototype.subMessage = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SubMessageContext);
    } else {
        return this.getTypedRuleContext(SubMessageContext,i);
    }
};

MessageContext.prototype.parameters = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ParametersContext);
    } else {
        return this.getTypedRuleContext(ParametersContext,i);
    }
};

MessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceListener ) {
        listener.enterMessage(this);
	}
};

MessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceListener ) {
        listener.exitMessage(this);
	}
};




sequenceParser.MessageContext = MessageContext;

sequenceParser.prototype.message = function() {

    var localctx = new MessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, sequenceParser.RULE_message);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 46;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        if(la_===1) {
            this.state = 43;
            this.to();
            this.state = 44;
            this.match(sequenceParser.T__2);

        }
        this.state = 48;
        this.methodName();
        this.state = 59;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sequenceParser.T__3) {
            this.state = 49;
            this.match(sequenceParser.T__3);
            this.state = 53;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===sequenceParser.ID) {
                this.state = 50;
                this.parameters();
                this.state = 55;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 56;
            this.match(sequenceParser.T__4);
            this.state = 61;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 65;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,8,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 62;
                this.match(sequenceParser.NL); 
            }
            this.state = 67;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,8,this._ctx);
        }

        this.state = 71;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sequenceParser.T__0) {
            this.state = 68;
            this.subMessage();
            this.state = 73;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 77;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,10,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 74;
                this.match(sequenceParser.NL); 
            }
            this.state = 79;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,10,this._ctx);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MethodNameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_methodName;
    return this;
}

MethodNameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MethodNameContext.prototype.constructor = MethodNameContext;

MethodNameContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

MethodNameContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceListener ) {
        listener.enterMethodName(this);
	}
};

MethodNameContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceListener ) {
        listener.exitMethodName(this);
	}
};




sequenceParser.MethodNameContext = MethodNameContext;

sequenceParser.prototype.methodName = function() {

    var localctx = new MethodNameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, sequenceParser.RULE_methodName);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.match(sequenceParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ParametersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_parameters;
    return this;
}

ParametersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParametersContext.prototype.constructor = ParametersContext;

ParametersContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(sequenceParser.ID);
    } else {
        return this.getToken(sequenceParser.ID, i);
    }
};


ParametersContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceListener ) {
        listener.enterParameters(this);
	}
};

ParametersContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceListener ) {
        listener.exitParameters(this);
	}
};




sequenceParser.ParametersContext = ParametersContext;

sequenceParser.prototype.parameters = function() {

    var localctx = new ParametersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, sequenceParser.RULE_parameters);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 82;
        this.match(sequenceParser.ID);
        this.state = 87;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===sequenceParser.T__5) {
            this.state = 83;
            this.match(sequenceParser.T__5);
            this.state = 84;
            this.match(sequenceParser.ID);
            this.state = 89;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ToContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_to;
    return this;
}

ToContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ToContext.prototype.constructor = ToContext;

ToContext.prototype.ID = function() {
    return this.getToken(sequenceParser.ID, 0);
};

ToContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceListener ) {
        listener.enterTo(this);
	}
};

ToContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceListener ) {
        listener.exitTo(this);
	}
};




sequenceParser.ToContext = ToContext;

sequenceParser.prototype.to = function() {

    var localctx = new ToContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, sequenceParser.RULE_to);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 90;
        this.match(sequenceParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EmptyLineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = sequenceParser.RULE_emptyLine;
    return this;
}

EmptyLineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmptyLineContext.prototype.constructor = EmptyLineContext;

EmptyLineContext.prototype.NL = function() {
    return this.getToken(sequenceParser.NL, 0);
};

EmptyLineContext.prototype.enterRule = function(listener) {
    if(listener instanceof sequenceListener ) {
        listener.enterEmptyLine(this);
	}
};

EmptyLineContext.prototype.exitRule = function(listener) {
    if(listener instanceof sequenceListener ) {
        listener.exitEmptyLine(this);
	}
};




sequenceParser.EmptyLineContext = EmptyLineContext;

sequenceParser.prototype.emptyLine = function() {

    var localctx = new EmptyLineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, sequenceParser.RULE_emptyLine);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 92;
        this.match(sequenceParser.NL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.sequenceParser = sequenceParser;
