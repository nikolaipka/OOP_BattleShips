

function GSM(model) {
    var _model = model;
    var _hasSimCard;
    var _simMobileNumber;
    var _outgoingCallsDuration = 0;
    var _lastIncomingCall;
    var _lastOutgoingCall;
    var _priceForAMinute = 10;

    this.getModel = function() {
        return _model;
    };

    this.setModel = function(model) {
        _model = model;
    };

    this.getHasSimCard = function() {
        return _hasSimCard;
    };

    this.setHasSimCard = function(hasSimCard) {
        _hasSimCard = hasSimCard;
    };

    this.getSimMobileNumber = function() {
        return _simMobileNumber;
    };

    this.setSimMobileNumber = function(simMobileNumber) {
        _simMobileNumber = simMobileNumber;
    };

    this.getLastIncomingCall = function() {
        return _lastIncomingCall;
    };

    this.setLastIncomingCall = function(lastIncomingCall) {
        _lastIncomingCall = lastIncomingCall;
    };

    this.getLastOutgoingCall = function() {
        return _lastOutgoingCall;
    };

    this.setLastOutgoingCall = function(lastOutgoingCall) {
        _lastOutgoingCall = lastOutgoingCall;
    };

    this.getOutgoingCallDuration = function() {
        return _outgoingCallsDuration;
    };

    this.setOutgoingCallDuration = function(duration) {
        _outgoingCallsDuration += duration;
    }
}

GSM.prototype.insertSimCard = function (simMobileNumber) {
    if (typeof simMobileNumber != "string") {
        simMobileNumber = '0' + simMobileNumber.toString();
    }
    if (!isNaN(simMobileNumber) && simMobileNumber[0] == 0 && simMobileNumber[1] == 8 && simMobileNumber.length == 10) {
        this.setHasSimCard(true);
        this.setSimMobileNumber(simMobileNumber);
    } else {
       return console.log('Invalid Phone Number!');
    }
};

GSM.prototype.removeSimCard = function () {
    this.setHasSimCard(false);
    this.setSimMobileNumber(undefined);
};

GSM.prototype.call = function (receiver , duration) {
    if ( duration < 0 || duration > 120 || receiver == this.getSimMobileNumber() ||
    	!(receiver.getHasSimCard()) || !(this.getHasSimCard())) {
        return console.log('Invalid input.');

    }

    var call = new Call(this, receiver, duration);

    receiver.setLastIncomingCall(call);
    this.setLastOutgoingCall(call);
    this.setOutgoingCallDuration(duration);
};

GSM.prototype.getSumForCalls = function() {
    return this.getOutgoingCallDuration() * _priceForAMinute;
};

GSM.prototype.printInfoForTheLastOutgoingCall = function() {	
    if(this.getLastOutgoingCall() == undefined) {
       return console.log('No records');
    }
    
    return ('Duration: ' + this.getLastOutgoingCall().getDuration() + ' minutes ' + '\n'+
    		'Reciever number: ' + this.getLastOutgoingCall().getReciever().getSimMobileNumber() + '\n'+
    		'Calling number: ' + this.getLastOutgoingCall().getCaller().getSimMobileNumber() + '\n'+
    		'Price of call: ' + this.getLastOutgoingCall().getCallPrice() + ' lv');
};

GSM.prototype.printInfoForTheLastIncomingCall = function() {
    if(this.getLastIncomingCall() == undefined) {
    	return console.log('No records');
    }
    
    return ('Duration: '+ this.getLastIncomingCall().getDuration() + ' minutes ' + '\n'+
    		'Reciever number: ' + this.getLastIncomingCall().getReciever().getSimMobileNumber() + '\n'+
    		'Calling number: ' + this.getLastIncomingCall().getCaller().getSimMobileNumber() + '\n'+
    		'Price of call: ' + this.getLastIncomingCall().getCallPrice() + ' lv');
};