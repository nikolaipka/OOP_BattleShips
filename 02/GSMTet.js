
var phone1 = new GSM('Nokia');
var phone2 = new GSM('Motorola');

phone1.insertSimCard(0896778512);
phone2.insertSimCard(0899541273);

phone1.call(phone2, 13);

alert('Last incoming call of: ' + phone2.getModel() + '\n' +
			phone2.printInfoForTheLastIncomingCall() + '\n' +
			'Outgoing calls duration: ' + phone2.getOutgoingCallDuration() + ' minutes' + '\n' +
			'Price to pay: ' + phone2.getSumForCalls() + ' lv.');
alert('Last outgoing call of: '+ phone1.getModel() + '\n' +
			phone1.printInfoForTheLastOutgoingCall() + '\n' +
			'Outgoing calls duration: ' + phone1.getOutgoingCallDuration() + ' minutes' + '\n' +
			'Price to pay: ' + phone1.getSumForCalls() + ' lv.');