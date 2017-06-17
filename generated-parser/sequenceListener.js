// Generated from sequence.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by sequenceParser.
function sequenceListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

sequenceListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
sequenceListener.prototype.constructor = sequenceListener;

// Enter a parse tree produced by sequenceParser#prog.
sequenceListener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by sequenceParser#prog.
sequenceListener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by sequenceParser#subMessage.
sequenceListener.prototype.enterSubMessage = function(ctx) {
};

// Exit a parse tree produced by sequenceParser#subMessage.
sequenceListener.prototype.exitSubMessage = function(ctx) {
};


// Enter a parse tree produced by sequenceParser#message.
sequenceListener.prototype.enterMessage = function(ctx) {
};

// Exit a parse tree produced by sequenceParser#message.
sequenceListener.prototype.exitMessage = function(ctx) {
};


// Enter a parse tree produced by sequenceParser#methodName.
sequenceListener.prototype.enterMethodName = function(ctx) {
};

// Exit a parse tree produced by sequenceParser#methodName.
sequenceListener.prototype.exitMethodName = function(ctx) {
};


// Enter a parse tree produced by sequenceParser#parameters.
sequenceListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by sequenceParser#parameters.
sequenceListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by sequenceParser#to.
sequenceListener.prototype.enterTo = function(ctx) {
};

// Exit a parse tree produced by sequenceParser#to.
sequenceListener.prototype.exitTo = function(ctx) {
};


// Enter a parse tree produced by sequenceParser#emptyLine.
sequenceListener.prototype.enterEmptyLine = function(ctx) {
};

// Exit a parse tree produced by sequenceParser#emptyLine.
sequenceListener.prototype.exitEmptyLine = function(ctx) {
};



exports.sequenceListener = sequenceListener;