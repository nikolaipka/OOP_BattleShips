


function  Call(caller, reciever, duration) {
    var _caller = caller;
    var _reciever = reciever;
    var _duration = duration;    
    var _callPrice = _priceForAMinute * duration;


    this.getCaller = function () {
        return _caller;
    };
    this.setCaller = function (caller) {
        _caller = caller;
    };
    this.getReciever = function () {
        return _reciever;
    };
    this.setReciever = function (reciever) {
        _reciever = reciever;
    };
    this.getDuration = function () {
        return _duration;
    };
    this.setDuration = function (duration) {
        _duration = duration;
    };
    this.getCallPrice = function () {
        return _callPrice;
    }
}